import AccountRegistration from './AccountRegistration';
/**
 * URI: If this value has been set to null, then it will return ´"sip:" + this.getDomain´
 */

/**
 * This describes account configuration and registration status
 */
export default class Account {
  constructor(data) {
    this._data = data;
    this._registration = new AccountRegistration(data.registration);
  }
  /**
   * The account ID.
   * @returns {number}
   */


  getId() {
    return this._data.id;
  }
  /**
   * This is the URL to be put in the request URI for the registration, and will look something like "sip:serviceprovider".
   * @returns {string}
   */


  getURI() {
    return this._data.uri;
  }
  /**
   * Full name specified in Endpoint.createAccount().
   * If this value has been set to null, then it will return "sip:" + this.getDomain
   * @returns {string|null}
   */


  getName() {
    return this._data.name;
  }
  /**
   * Username specified in Endpoint.createAccount().
   * @returns {string}
   */


  getUsername() {
    return this._data.username;
  }
  /**
   * Domain specified in Endpoint.createAccount().
   * @returns {string}
   */


  getDomain() {
    return this._data.domain;
  }
  /**
   * Password specified in Endpoint.createAccount().
   * @returns {string}
   */


  getPassword() {
    return this._data.password;
  }
  /**
   * Proxy specified in Endpoint.createAccount().
   * @returns {string|null}
   */


  getProxy() {
    return this._data.proxy;
  }
  /**
   * Transport specified in Endpoint.createAccount().
   * @returns {string|null}
   */


  getTransport() {
    return this._data.transport;
  }
  /**
   * Additional parameters that will be appended in the Contact header
   * for this account.
   * @returns {string|null}
   */


  getContactParams() {
    return this._data.contactParams;
  }
  /**
   * Additional URI parameters that will be appended in the Contact URI
   * for this account.
   * @returns {string|null}
   */


  getContactUriParams() {
    return this._data.contactUriParams;
  }
  /**
   * Port specified in Endpoint.createAccount().
   * @returns {string|null}
   */


  getRegServer() {
    return this._data.regServer || '';
  }
  /**
   * Port specified in Endpoint.createAccount().
   * @returns {number}
   */


  getRegTimeout() {
    return this._data.regTimeout;
  }
  /**
   * @returns {string|null}
   */


  getRegContactParams() {
    return this._data.regContactParams;
  }
  /**
   * @returns {Object|null}
   */


  getRegHeaders() {
    return this._data.regHeaders;
  }
  /**
   * Account registration status.
   * @returns {AccountRegistration}
   */


  getRegistration() {
    return this._registration;
  }

}
//# sourceMappingURL=Account.js.map