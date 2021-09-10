/**
 * URI: If this value has been set to null, then it will return ´"sip:" + this.getDomain´
 */

/**
 * This describes account configuration and registration status
 */
export default class Account {
  constructor(data) {
    this.data = data;
  }
  /**
   * The account ID.
   * @returns {number}
   */


  getId() {
    return this.data.id;
  }
  /**
   * This is the URL to be put in the request URI for the registration, and will look something like "sip:serviceprovider".
   * @returns {string}
   */


  getURI() {
    return this.data.uri;
  }
  /**
   * Full name specified in Endpoint.createAccount().
   * If this value has been set to null, then it will return "sip:" + this.getDomain
   * @returns {string|null}
   */


  getName() {
    return this.data.name;
  }
  /**
   * Username specified in Endpoint.createAccount().
   * @returns {string}
   */


  getUsername() {
    return this.data.username;
  }
  /**
   * Domain specified in Endpoint.createAccount().
   * @returns {string}
   */


  getDomain() {
    return this.data.domain;
  }
  /**
   * Password specified in Endpoint.createAccount().
   * @returns {string}
   */


  getPassword() {
    return this.data.password;
  }
  /**
   * Proxy specified in Endpoint.createAccount().
   * @returns {string|null}
   */


  getProxy() {
    return this.data.proxy;
  }
  /**
   * Transport specified in Endpoint.createAccount().
   * @returns {string|null}
   */


  getTransport() {
    return this.data.transport;
  }
  /**
   * Additional parameters that will be appended in the Contact header
   * for this account.
   * @returns {string|null}
   */


  getContactParams() {
    return this.data.contactParams;
  }
  /**
   * Additional URI parameters that will be appended in the Contact URI
   * for this account.
   * @returns {string|null}
   */


  getContactUriParams() {
    return this.data.contactUriParams;
  }
  /**
   * Port specified in Endpoint.createAccount().
   * @returns {string|null}
   */


  getRegServer() {
    return this.data.regServer || '';
  }
  /**
   * Port specified in Endpoint.createAccount().
   * @returns {number}
   */


  getRegTimeout() {
    return this.data.regTimeout;
  }
  /**
   * @returns {string|null}
   */


  getRegContactParams() {
    return this.data.regContactParams;
  }
  /**
   * @returns {Object|null}
   */


  getRegHeaders() {
    return this.data.regHeaders;
  }
  /**
   * Account registration status.
   * @returns {AccountRegistration}
   */


  getRegistration() {
    return this.registration;
  }

}
//# sourceMappingURL=Account.js.map