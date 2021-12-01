import { DeviceEventEmitter } from 'react-native'
import { EventEmitter } from 'events'
import PjSipModule from './PjSipModule'
import Call, { CallData, PJSUACallFlags, PJSUAVideoReqKeyframeMethod } from './Call'
import Message, { MessageData } from './Message'
import Account, { IAccount } from './Account'

/**
 * @example { 'speex/8000': 1 }
 */
export type Codec = {
  /**
   * @example speex/8000
   */
  [key: string]: number
}

export enum Orientation {
  PJMEDIA_ORIENT_NATURAL = 'PJMEDIA_ORIENT_NATURAL',
  PJMEDIA_ORIENT_ROTATE_90DEG = 'PJMEDIA_ORIENT_ROTATE_90DEG',
  PJMEDIA_ORIENT_ROTATE_270DEG = 'PJMEDIA_ORIENT_ROTATE_270DEG',
  PJMEDIA_ORIENT_ROTATE_180DEG = 'PJMEDIA_ORIENT_ROTATE_180DEG'
}

/**
 * Not really documented.
 */
export interface StartConfiguration {
  service: {
    /** List of stun servers */
    stun: string[]
  }
}

export interface PJSIPMessageData {
  /**
   * This structure describes additional information to be sent with
   * outgoing SIP message. It can (optionally) be specified for example
   * with #pjsua_call_make_call(), #pjsua_call_answer(), #pjsua_call_hangup(),
   * #pjsua_call_set_hold(), #pjsua_call_send_im(), and many more.
   *
   * Application MUST call #pjsua_msg_data_init() to initialize this
   * structure before setting its values.
   */
  targetURI?: string,
  /**
   * Additional message headers as linked list. Application can add
   * headers to the list by creating the header, either from the heap/pool
   * or from temporary local variable, and add the header using
   * linked list operation. See pjsua_app.c for some sample codes.
   */
  headers?: Object[],

  /**
   * MIME type of optional message body.
   */
  contentType?: string,

  /**
   * Optional message body to be added to the message, only when the
   * message doesn't have a body.
   */
  body?: string
}

export interface PJSIPCallSettings {
  /**
   * Number of simultaneous active audio streams for this call. Setting
   * this to zero will disable audio in this call.
   *
   * @default 1
   */
  audioCount?: number,

  /**
   * Number of simultaneous active video streams for this call. Setting
   * this to zero will disable video in this call.
   *
   * @default 1 (if video feature is enabled, otherwise it is zero)
   */
  videoCount?: number,

  /**
   * Bitmask of #pjsua_call_flag constants.
   *
   * @default PJSUA_CALL_INCLUDE_DISABLED_MEDIA
   */
  flag?: PJSUACallFlags,

  /**
   * This flag controls what methods to request keyframe are allowed on
   * the call. Value is bitmask of #pjsua_vid_req_keyframe_method.
   *
   * @default PJSUA_VID_REQ_KEYFRAME_SIP_INFO
   */
  requestKeyframeMethod?: PJSUAVideoReqKeyframeMethod
}

export default class Endpoint extends EventEmitter {
  constructor () {
    super()

    // Subscribe to Accounts events
    DeviceEventEmitter.addListener('pjSipRegistrationChanged', this._onRegistrationChanged.bind(this))

    // Subscribe to Calls events
    DeviceEventEmitter.addListener('pjSipCallReceived', this._onCallReceived.bind(this))
    DeviceEventEmitter.addListener('pjSipCallChanged', this._onCallChanged.bind(this))
    DeviceEventEmitter.addListener('pjSipCallTerminated', this._onCallTerminated.bind(this))
    DeviceEventEmitter.addListener('pjSipCallScreenLocked', this._onCallScreenLocked.bind(this))
    DeviceEventEmitter.addListener('pjSipMessageReceived', this._onMessageReceived.bind(this))
    DeviceEventEmitter.addListener('pjSipConnectivityChanged', this._onConnectivityChanged.bind(this))
  }

  /**
   * Returns a Promise that will be resolved once PjSip module is initialized.
   * Do not call any function while library is not initialized.
   */
  start = (configuration: StartConfiguration): Promise<{
    accounts: Account[],
    calls: Call[],
  }> =>
    new Promise<{ accounts: Account[]; calls: Call[] }>(
      (resolve, reject) =>
        PjSipModule.start(configuration, (success, data) => (success) ?
          {
            accounts: data.accounts.map(account => new Account(account)),
            calls: data.calls.map(call => new Call(call))
          } : reject(configuration)
        )
    )

  stop = (): Promise<void> => {
    return new Promise<void>((resolve) => {
      PjSipModule.stop(() => {})
      resolve()
    })
  }

  updateStunServers = (accountId: number, stunServerList: string[]): Promise<void> => {
    return new Promise<void>((resolve) => {
      PjSipModule.updateStunServers(accountId, stunServerList, () => {})
      resolve()
    })
  }

  /**
   * Add a new account. If registration is configured for this account, this function would also start the
   * SIP registration session with the SIP registrar server. This SIP registration session will be maintained
   * internally by the library, and application doesn't need to do anything to maintain the registration session.
   */
  createAccount = (configuration: IAccount): Promise<Account> =>
    new Promise<Account>(
      (resolve, reject) => PjSipModule.createAccount(
        configuration,
        (success, account) => (success) ? resolve(new Account(account)) : reject(account)
      )
    )

  /**
   * Update registration or perform unregistration.
   * If registration is configured for this account, then initial SIP REGISTER will be sent when the account is added.
   * Application normally only need to call this function if it wants to manually update the registration or to unregister from the server.
   */
  registerAccount = (accountId: number, renew = true): Promise<void> =>
    new Promise((resolve, reject) => {
      PjSipModule.registerAccount(accountId, renew, (successful, reason) => {
        if (successful) {
          resolve()
        } else {
          reject(reason)
        }
      })
    })

  /**
   * Delete an account. This will unregister the account from the SIP server, if necessary, and terminate server side presence subscriptions associated with this account.
   */
  deleteAccount = (accountId: number): Promise<void> =>
    new Promise((resolve) => {
      PjSipModule.deleteAccount(accountId, () => {})
      resolve()
    })

  /**
   * Gets list of all accounts
   */
  getAccounts = (): Promise<Account[]> =>
    new Promise<Account[]>(
      (resolve, reject) =>
        PjSipModule.getAccounts((success, data) => (success) ?
          resolve(data.map(account => new Account(account)))
          : reject(data)
        )
    )

  /**
   * Gets an account by id
   */
  getAccount = (accountId: number): Promise<Account> =>
    new Promise<Account>((resolve, reject) =>
      PjSipModule.getAccount(accountId, (successful, accountData) => (successful) ?
        resolve(new Account(accountData)) :
        reject(accountData)
      )
    )

  /**
   * Gets list of all calls
   */
  getCalls = (): Promise<Call[]> =>
    new Promise<Call[]>((resolve, reject) => {
      PjSipModule.getCalls((successful, data) => (successful) ?
        resolve(data.map(call => new Call(call))) :
        reject(data)
      )
    })

  /**
   * Gets an account by id
   */
  getCall = (callId: number): Promise<Call> =>
    new Promise<Call>((resolve, reject) => {
      PjSipModule.getCall(callId, (successful, callData) => (successful) ?
        resolve(new Call(callData)) :
        reject(callData)
      )
    })

  /**
   * Make an outgoing call to the specified URI.
   */
  makeCall = (account: IAccount, destination: string, callSettings?: PJSIPCallSettings, msgData?: PJSIPMessageData): Promise<Call> => {
    destination = this._sipifyNumber(account, destination)

    return new Promise<Call>((resolve, reject) =>
      PjSipModule.makeCall(
        account.id,
        destination,
        callSettings,
        msgData,
        (successful, data) => (successful) ? resolve(new Call(data)) : reject(data)
      )
    )
  }

  /**
   * Send response to incoming INVITE request.
   */
  answerCall = (callId: number): Promise<void> =>
    new Promise<void>((resolve, reject) =>
      PjSipModule.answerCall(callId, (successful, reason) => (successful) ?
        resolve() :
        reject(reason)
      )
    )

  /**
   * Hangup call by using method that is appropriate according to the call state.
   */
  hangupCall = (callId: number): Promise<void> =>
    // TODO: Add possibility to pass code and reason for hangup.
    new Promise<void>((resolve, reject) =>
      PjSipModule.hangupCall(callId, (successful, reason) => (successful) ?
        resolve() :
        reject(reason)
      )
    )

  /**
   * Hangup call by using Decline (603) method.
   */
  declineCall = (callId: number): Promise<void> =>
    new Promise<void>((resolve, reject) =>
      PjSipModule.declineCall(callId, (successful, reason) => (successful) ?
        resolve() :
        reject(reason)
      )
    )

  /**
   * Put the specified call on hold. This will send re-INVITE with the appropriate SDP to inform remote that the call is being put on hold.
   */
  holdCall = (callId: number): Promise<void> =>
    new Promise<void>((resolve, reject) =>
      PjSipModule.holdCall(callId, (successful, reason) => (successful) ?
        resolve() :
        reject(reason)
      )
    )

  /**
   * Release the specified call from hold. This will send re-INVITE with the appropriate SDP to inform remote that the call is resumed.
   */
  unholdCall = (callId: number): Promise<void> =>
    new Promise<void>((resolve, reject) =>
      PjSipModule.unholdCall(callId, (successful, reason) => (successful) ?
        resolve() :
        reject(reason)
      )
    )

  muteCall = (callId: number): Promise<void> =>
    new Promise<void>((resolve, reject) =>
      PjSipModule.muteCall(callId, (successful, reason) => (successful) ?
        resolve() :
        reject(reason)
      )
    )

  unMuteCall = (callId: number): Promise<void> =>
    new Promise<void>((resolve, reject) =>
      PjSipModule.unMuteCall(callId, (successful, reason) => (successful) ?
        resolve() :
        reject(reason)
      )
    )

  useSpeaker = (): Promise<void> =>
    new Promise<void>((resolve) => {
        PjSipModule.useSpeaker(() => {})
        resolve()
      }
    )

  useEarpiece = (): Promise<void> =>
    new Promise<void>((resolve) => {
      PjSipModule.useEarpiece(() => {})
      resolve()
    })

  /**
   * Initiate call transfer to the specified address.
   * This function will send REFER request to instruct remote call party to initiate a new INVITE session to the specified destination/target.
   */
  xferCall = (account: IAccount, callId: number, destination: string): Promise<void> => {
    destination = this._sipifyNumber(account, destination)

    return new Promise<void>((resolve, reject) =>
      PjSipModule.xferCall(callId, destination, (successful, reason) => (successful) ?
        resolve() :
        reject(reason)
      )
    )
  }

  /**
   * Initiate attended call transfer.
   * This function will send REFER request to instruct remote call party to initiate new INVITE session to the URL of destCall.
   * The party at destCall then should "replace" the call with us with the new call from the REFER recipient.
   */
  xferReplacesCall = (callId: number, destCallId: number): Promise<void> =>
    new Promise<void>((resolve, reject) =>
      PjSipModule.xferReplacesCall(callId, destCallId, (successful, reason) => (successful) ?
        resolve() :
        reject(reason)
      )
    )

  /**
   * Redirect (forward) specified call to destination.
   * This function will send response to INVITE to instruct remote call party to redirect incoming call to the specified destination/target.
   */
  redirectCall = (account: IAccount, callId: number, destination: string): Promise<void> => {
    destination = this._sipifyNumber(account, destination)

    return new Promise<void>((resolve, reject) =>
      PjSipModule.redirectCall(callId, destination, (successful, reason) => (successful) ?
        resolve() :
        reject(reason)
      )
    )
  }

  /**
   * Send DTMF digits to remote using RFC 2833 payload formats.
   */
  dtmfCall = (callId: number, digits: string): Promise<void> =>
    new Promise<void>((resolve, reject) =>
      PjSipModule.dtmfCall(callId, digits, (successful, reason) => (successful) ?
        resolve() :
        reject(reason)
      )
    )

  activateAudioSession = (): Promise<void> =>
    new Promise<void>((resolve) => {
      PjSipModule.activateAudioSession(() => {})
      resolve()
    })

  deactivateAudioSession = (): Promise<void> =>
    new Promise<void>((resolve, reject) =>
      PjSipModule.deactivateAudioSession((successful, reason) => (successful) ? resolve() :
        reject(reason)
      )
    )

  changeOrientation = (orientation: Orientation): Promise<void> =>
    new Promise<void>((resolve) => {
      PjSipModule.changeOrientation(orientation)
      resolve()
    })

  changeCodecSettings = (codecSettings: Object): Promise<void> =>
    new Promise((resolve) => {
      PjSipModule.changeCodecSettings(codecSettings, () => {})
      resolve()
    })

  /**
   * @fires Endpoint#registration_changed
   * @private
   * @param data {Object}
   */_onRegistrationChanged = (data: IAccount): boolean =>
    /**
     * Fires when registration status has changed.
     *
     * @event Endpoint#registration_changed
     * @property {Account} account
     */
    this.emit('registration_changed', new Account(data))

  /**
   * @fires Endpoint#call_received
   * @private
   * @param data {Object}
   */_onCallReceived = (data: CallData): boolean =>
    /**
     * TODO
     *
     * @event Endpoint#call_received
     * @property {Call} call
     */
    this.emit('call_received', new Call(data))

  /**
   * @fires Endpoint#call_changed
   * @private
   * @param data {Object}
   */_onCallChanged = (data: CallData): boolean =>
    /**
     * TODO
     *
     * @event Endpoint#call_changed
     * @property {Call} call
     */
    this.emit('call_changed', new Call(data))

  /**
   * @fires Endpoint#call_terminated
   * @private
   * @param data {Object}
   */_onCallTerminated = (data: CallData): boolean =>
    /**
     * TODO
     *
     * @event Endpoint#call_terminated
     * @property {Call} call
     */
    this.emit('call_terminated', new Call(data))

  /**
   * @fires Endpoint#call_screen_locked
   * @private
   * @param lock bool
   */_onCallScreenLocked = (lock: boolean): boolean =>
    /**
     * TODO
     *
     * @event Endpoint#call_screen_locked
     * @property bool lock
     */
    this.emit('call_screen_locked', lock)

  /**
   * @fires Endpoint#message_received
   * @private
   * @param data {Object}
   */_onMessageReceived = (data: MessageData): boolean =>
    /**
     * TODO
     *
     * @event Endpoint#message_received
     * @property {Message} message
     */
    this.emit('message_received', new Message(data))

  /**
   * @fires Endpoint#connectivity_changed
   * @private
   * @param available bool
   */_onConnectivityChanged = (available: boolean): boolean =>
    /**
     * @event Endpoint#connectivity_changed
     * @property bool available True if connectivity matches current Network settings, otherwise false.
     */
    this.emit('connectivity_changed', available)

  /**
   * Sipify number
   *
   * @param account
   * @param number {string}
   * @returns {string}
   * @private
   */
  _sipifyNumber = (account: IAccount, number: string): string =>
    number.startsWith('sip:') ?
      number :
      (account.proxy !== null) ?
        `sip:${number}@${account.proxy}` :
        `sip:${number}@${account.domain}`

}
