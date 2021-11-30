/**
 * This describes account configuration and registration status
 */
export default class Account {
  /**
   * The account ID.
   */

  /**
   * This is the URL to be put in the request URI for the registration, and will look something like "sip:serviceprovider".
   */

  /**
   * Full name specified in Endpoint.createAccount().
   * If this value has been set to null, then it will return "sip:" + this.getDomain
   */

  /**
   * Username specified in Endpoint.createAccount().
   */

  /**
   * Domain specified in Endpoint.createAccount().
   */

  /**
   * Password specified in Endpoint.createAccount().
   */

  /**
   * Proxy specified in Endpoint.createAccount().
   */

  /**
   * Transport specified in Endpoint.createAccount().
   */

  /**
   * Additional parameters that will be appended in the Contact header
   * for this account.
   */

  /**
   * Additional URI parameters that will be appended in the Contact URI
   * for this account.
   */

  /**
   * Port specified in Endpoint.createAccount().
   */

  /**
   * Port specified in Endpoint.createAccount().
   */

  /**
   * Account registration status.
   */
  constructor(props) {
    this.id = props.id;
    this.uri = props.uri;
    this.name = props.name;
    this.username = props.username;
    this.domain = props.domain;
    this.password = props.password;
    this.proxy = props.proxy;
    this.transport = props.transport;
    this.contactParams = props.contactParams;
    this.contactUriParams = props.contactUriParams;
    this.regServer = props.regServer;
    this.regTimeout = props.regTimeout;
    this.regContactParams = props.regContactParams;
    this.regHeaders = props.regHeaders;
    this.registration = props.registration;
  }

}
//# sourceMappingURL=Account.js.map