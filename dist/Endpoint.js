import { DeviceEventEmitter } from 'react-native';
import { EventEmitter } from 'events';
import PjSipModule from './PjSipModule';
import Call from './Call';
import Message from './Message';
import Account from './Account';
/**
 * @example { 'speex/8000': 1 }
 */

export let Orientation;
/**
 * Not really documented.
 */

(function (Orientation) {
  Orientation["PJMEDIA_ORIENT_NATURAL"] = "PJMEDIA_ORIENT_NATURAL";
  Orientation["PJMEDIA_ORIENT_ROTATE_90DEG"] = "PJMEDIA_ORIENT_ROTATE_90DEG";
  Orientation["PJMEDIA_ORIENT_ROTATE_270DEG"] = "PJMEDIA_ORIENT_ROTATE_270DEG";
  Orientation["PJMEDIA_ORIENT_ROTATE_180DEG"] = "PJMEDIA_ORIENT_ROTATE_180DEG";
})(Orientation || (Orientation = {}));

export default class Endpoint extends EventEmitter {
  constructor() {
    super(); // Subscribe to Accounts events

    DeviceEventEmitter.addListener('pjSipRegistrationChanged', this._onRegistrationChanged.bind(this)); // Subscribe to Calls events

    DeviceEventEmitter.addListener('pjSipCallReceived', this._onCallReceived.bind(this));
    DeviceEventEmitter.addListener('pjSipCallChanged', this._onCallChanged.bind(this));
    DeviceEventEmitter.addListener('pjSipCallTerminated', this._onCallTerminated.bind(this));
    DeviceEventEmitter.addListener('pjSipCallScreenLocked', this._onCallScreenLocked.bind(this));
    DeviceEventEmitter.addListener('pjSipMessageReceived', this._onMessageReceived.bind(this));
    DeviceEventEmitter.addListener('pjSipConnectivityChanged', this._onConnectivityChanged.bind(this));
  }
  /**
   * Returns a Promise that will be resolved once PjSip module is initialized.
   * Do not call any function while library is not initialized.
   *
   * @returns {Promise}
   */


  start(configuration) {
    return new Promise((resolve, reject) => {
      PjSipModule.start(configuration, (successful, data) => {
        if (successful) {
          const accounts = [];
          const calls = [];

          if (Object.prototype.hasOwnProperty.call(data, 'accounts')) {
            for (const d of data.accounts) {
              accounts.push(new Account(d));
            }
          }

          if (Object.prototype.hasOwnProperty.call(data, 'calls')) {
            for (const e of data.calls) {
              calls.push(new Call(e));
            }
          }

          const extra = {};

          for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key) && key != 'accounts' && key != 'calls') {
              extra[key] = data[key];
            }
          }

          resolve({
            accounts,
            calls,
            ...extra
          });
        } else {
          reject(data);
        }
      });
    });
  }

  stop() {
    return new Promise(resolve => {
      PjSipModule.stop(() => {});
      resolve();
    });
  }

  updateStunServers(accountId, stunServerList) {
    return new Promise(resolve => {
      PjSipModule.updateStunServers(accountId, stunServerList, () => {});
      resolve();
    });
  }
  /**
   * Add a new account. If registration is configured for this account, this function would also start the
   * SIP registration session with the SIP registrar server. This SIP registration session will be maintained
   * internally by the library, and application doesn't need to do anything to maintain the registration session.
   *
   * An example configuration:
   * {
   *   name: "John Doe",
   *   username: "100",
   *   domain: "pbx.com",
   *   password: "XXXXXX",
   *
   *   proxy: "192.168.100.1:5060", // default disabled.
   *   transport: "TCP", // default TCP
   *   regServer: "pbx.com", // default taken from domain
   *   regTimeout: 300, // default 300
   * }
   *
   * @param {Object} configuration
   * @returns {Promise}
   */


  createAccount(configuration) {
    return new Promise((resolve, reject) => {
      PjSipModule.createAccount(configuration, (successful, data) => {
        if (successful) {
          resolve(new Account(data));
        } else {
          reject(data);
        }
      });
    });
  }
  /**
   * Update registration or perform unregistration.
   * If registration is configured for this account, then initial SIP REGISTER will be sent when the account is added.
   * Application normally only need to call this function if it wants to manually update the registration or to unregister from the server.
   *
   * @param {Account} account
   * @param renew renew If renew argument is zero, this will start unregistration process.
   * @returns {Promise}
   */


  registerAccount(account, renew = true) {
    return new Promise((resolve, reject) => {
      PjSipModule.registerAccount(account.getId(), renew, (successful, reason) => {
        if (successful) {
          resolve();
        } else {
          reject(new Error(reason));
        }
      });
    });
  }
  /**
   * Delete an account. This will unregister the account from the SIP server, if necessary, and terminate server side presence subscriptions associated with this account.
   *
   * @param {Account} account
   * @returns {Promise}
   */


  deleteAccount(account) {
    return new Promise(resolve => {
      PjSipModule.deleteAccount(account.getId(), () => {});
      resolve();
    });
  }
  /**
   * Gets list of all accounts
   *
   * @returns Promise<Account[]>
   */


  getAccounts() {
    return new Promise((resolve, reject) => {
      PjSipModule.getAccounts((successful, data) => {
        if (successful) {
          const accounts = [];

          for (const d of data) {
            accounts.push(new Account(d));
          }

          resolve(accounts);
        } else {
          reject(data);
        }
      });
    });
  }
  /**
   * Gets an account by id
   *
   * @returns Promise<Account>
   */


  getAccount(accountId) {
    return new Promise((resolve, reject) => {
      PjSipModule.getAccount(accountId, (successful, data) => {
        if (successful) {
          resolve(new Account(data));
        } else {
          reject(data);
        }
      });
    });
  }
  /**
   * Gets list of all calls
   * TODO: Find out how well this works. I made it while not knowing alot about Objective C.
   *
   * @returns Promise<Call[]>
   */


  getCalls() {
    return new Promise((resolve, reject) => {
      PjSipModule.getCalls((successful, data) => {
        if (successful) {
          const calls = [];

          for (const d of data) {
            calls.push(new Call(d));
          }

          resolve(calls);
        } else {
          reject(data);
        }
      });
    });
  }
  /**
   * Make an outgoing call to the specified URI.
   *
   * @param account {Account}
   * @param destination {String} Destination SIP URI.
   * @param callSettings {PJSIPCallSettings} Outgoing call settings.
   * @param msgData {PJSIPMessageData} Outgoing call additional information to be sent with outgoing SIP message.
   */


  makeCall(account, destination, callSettings, msgData) {
    destination = this._normalize(account, destination);
    return new Promise((resolve, reject) => {
      PjSipModule.makeCall(account.getId(), destination, callSettings, msgData, (successful, data) => {
        if (successful) {
          resolve(new Call(data));
        } else {
          reject(data);
        }
      });
    });
  }
  /**
   * Send response to incoming INVITE request.
   *
   * @param call {Call} Call instance
   * @returns {Promise}
   */


  answerCall(call) {
    return new Promise((resolve, reject) => {
      PjSipModule.answerCall(call.getId(), (successful, reason) => {
        if (successful) {
          resolve();
        } else {
          reject(new Error(reason));
        }
      });
    });
  }
  /**
   * Hangup call by using method that is appropriate according to the call state.
   *
   * @param call {Call} Call instance
   * @returns {Promise}
   */


  hangupCall(call) {
    // TODO: Add possibility to pass code and reason for hangup.
    return new Promise((resolve, reject) => {
      PjSipModule.hangupCall(call.getId(), (successful, reason) => {
        if (successful) {
          resolve();
        } else {
          reject(new Error(reason));
        }
      });
    });
  }
  /**
   * Hangup call by using Decline (603) method.
   *
   * @param call {Call} Call instance
   * @returns {Promise}
   */


  declineCall(call) {
    return new Promise((resolve, reject) => {
      PjSipModule.declineCall(call.getId(), (successful, reason) => {
        if (successful) {
          resolve();
        } else {
          reject(new Error(reason));
        }
      });
    });
  }
  /**
   * Put the specified call on hold. This will send re-INVITE with the appropriate SDP to inform remote that the call is being put on hold.
   *
   * @param call {Call} Call instance
   * @returns {Promise}
   */


  holdCall(call) {
    return new Promise((resolve, reject) => {
      PjSipModule.holdCall(call.getId(), (successful, reason) => {
        if (successful) {
          resolve();
        } else {
          reject(new Error(reason));
        }
      });
    });
  }
  /**
   * Release the specified call from hold. This will send re-INVITE with the appropriate SDP to inform remote that the call is resumed.
   *
   * @param call {Call} Call instance
   * @returns {Promise}
   */


  unholdCall(call) {
    return new Promise((resolve, reject) => {
      PjSipModule.unholdCall(call.getId(), (successful, reason) => {
        if (successful) {
          resolve();
        } else {
          reject(new Error(reason));
        }
      });
    });
  }
  /**
   * @param call {Call} Call instance
   * @returns {Promise}
   */


  muteCall(call) {
    return new Promise((resolve, reject) => {
      PjSipModule.muteCall(call.getId(), (successful, reason) => {
        if (successful) {
          resolve();
        } else {
          reject(new Error(reason));
        }
      });
    });
  }
  /**
   * @param call {Call} Call instance
   * @returns {Promise}
   */


  unMuteCall(call) {
    return new Promise((resolve, reject) => {
      PjSipModule.unMuteCall(call.getId(), (successful, reason) => {
        if (successful) {
          resolve();
        } else {
          reject(new Error(reason));
        }
      });
    });
  }
  /**
   * @returns {Promise}
   */


  useSpeaker() {
    return new Promise(resolve => {
      PjSipModule.useSpeaker(() => {});
      resolve();
    });
  }
  /**
   * @returns {Promise}
   */


  useEarpiece() {
    return new Promise(resolve => {
      PjSipModule.useEarpiece(() => {});
      resolve();
    });
  }
  /**
   * Initiate call transfer to the specified address.
   * This function will send REFER request to instruct remote call party to initiate a new INVITE session to the specified destination/target.
   *
   * @param account {Account} Account associated with call.
   * @param call {Call} The call to be transferred.
   * @param destination URI of new target to be contacted. The URI may be in name address or addr-spec format.
   * @returns {Promise}
   */


  xferCall(account, call, destination) {
    destination = this._normalize(account, destination);
    return new Promise((resolve, reject) => {
      PjSipModule.xferCall(call.getId(), destination, (successful, reason) => {
        if (successful) {
          resolve();
        } else {
          reject(new Error(reason));
        }
      });
    });
  }
  /**
   * Initiate attended call transfer.
   * This function will send REFER request to instruct remote call party to initiate new INVITE session to the URL of destCall.
   * The party at destCall then should "replace" the call with us with the new call from the REFER recipient.
   *
   * @param call {Call} The call to be transferred.
   * @param destCall {Call} The call to be transferred.
   * @returns {Promise}
   */


  xferReplacesCall(call, destCall) {
    return new Promise((resolve, reject) => {
      PjSipModule.xferReplacesCall(call.getId(), destCall.getId(), (successful, reason) => {
        if (successful) {
          resolve();
        } else {
          reject(new Error(reason));
        }
      });
    });
  }
  /**
   * Redirect (forward) specified call to destination.
   * This function will send response to INVITE to instruct remote call party to redirect incoming call to the specified destination/target.
   *
   * @param account {Account} Account associated with call.
   * @param call {Call} The call to be transferred.
   * @param destination URI of new target to be contacted. The URI may be in name address or addr-spec format.
   * @returns {Promise}
   */


  redirectCall(account, call, destination) {
    destination = this._normalize(account, destination);
    return new Promise((resolve, reject) => {
      PjSipModule.redirectCall(call.getId(), destination, (successful, reason) => {
        if (successful) {
          resolve();
        } else {
          reject(new Error(reason));
        }
      });
    });
  }
  /**
   * Send DTMF digits to remote using RFC 2833 payload formats.
   *
   * @param call {Call} Call instance
   * @param digits {String} DTMF string digits to be sent as described on RFC 2833 section 3.10.
   * @returns {Promise}
   */


  dtmfCall(call, digits) {
    return new Promise((resolve, reject) => {
      PjSipModule.dtmfCall(call.getId(), digits, (successful, reason) => {
        if (successful) {
          resolve();
        } else {
          reject(new Error(reason));
        }
      });
    });
  }

  activateAudioSession() {
    return new Promise(resolve => {
      PjSipModule.activateAudioSession(() => {});
      resolve();
    });
  }

  deactivateAudioSession() {
    return new Promise((resolve, reject) => {
      PjSipModule.deactivateAudioSession((successful, reason) => {
        if (successful) {
          resolve();
        } else {
          reject(new Error(reason));
        }
      });
    });
  }

  changeOrientation(orientation) {
    return new Promise(resolve => {
      PjSipModule.changeOrientation(orientation);
      resolve();
    });
  }

  changeCodecSettings(codecSettings) {
    return new Promise(resolve => {
      PjSipModule.changeCodecSettings(codecSettings, () => {});
      resolve();
    });
  }
  /**
   * @fires Endpoint#registration_changed
   * @private
   * @param data {Object}
   */


  _onRegistrationChanged(data) {
    /**
     * Fires when registration status has changed.
     *
     * @event Endpoint#registration_changed
     * @property {Account} account
     */
    this.emit('registration_changed', new Account(data));
  }
  /**
   * @fires Endpoint#call_received
   * @private
   * @param data {Object}
   */


  _onCallReceived(data) {
    /**
     * TODO
     *
     * @event Endpoint#call_received
     * @property {Call} call
     */
    this.emit('call_received', new Call(data));
  }
  /**
   * @fires Endpoint#call_changed
   * @private
   * @param data {Object}
   */


  _onCallChanged(data) {
    /**
     * TODO
     *
     * @event Endpoint#call_changed
     * @property {Call} call
     */
    this.emit('call_changed', new Call(data));
  }
  /**
   * @fires Endpoint#call_terminated
   * @private
   * @param data {Object}
   */


  _onCallTerminated(data) {
    /**
     * TODO
     *
     * @event Endpoint#call_terminated
     * @property {Call} call
     */
    this.emit('call_terminated', new Call(data));
  }
  /**
   * @fires Endpoint#call_screen_locked
   * @private
   * @param lock bool
   */


  _onCallScreenLocked(lock) {
    /**
     * TODO
     *
     * @event Endpoint#call_screen_locked
     * @property bool lock
     */
    this.emit('call_screen_locked', lock);
  }
  /**
   * @fires Endpoint#message_received
   * @private
   * @param data {Object}
   */


  _onMessageReceived(data) {
    /**
     * TODO
     *
     * @event Endpoint#message_received
     * @property {Message} message
     */
    this.emit('message_received', new Message(data));
  }
  /**
   * @fires Endpoint#connectivity_changed
   * @private
   * @param available bool
   */


  _onConnectivityChanged(available) {
    /**
     * @event Endpoint#connectivity_changed
     * @property bool available True if connectivity matches current Network settings, otherwise false.
     */
    this.emit('connectivity_changed', available);
  }
  /**
   * Normalize Destination URI
   *
   * @param account
   * @param destination {string}
   * @returns {string}
   * @private
   */


  _normalize(account, destination) {
    if (!destination.startsWith('sip:')) {
      let realm = account.getProxy();

      if (realm === null) {
        realm = account.getDomain();
        destination = `sip:${destination}@${realm}`;
      }

      return destination;
    }
  }

}
//# sourceMappingURL=Endpoint.js.map