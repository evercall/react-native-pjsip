/**
 * Account registration information. Application can query the registration info
 * by calling account.getRegistration().
 */
export default class AccountRegistration {
  /**
   * Last registration status code (SIP status codes according to RFC 3261).
   * If status code is empty, the account is currently not registered. Any other value indicates the SIP
   * status code of the registration.
   */

  /**
   * String describing the registration status.
   */

  /**
   * Last registration status code (SIP status codes according to RFC 3261).
   * If status code is empty, the account is currently not registered. Any other value indicates the SIP
   * status code of the registration.
   */

  /**
   * String describing the registration status.
   */

  /**
   * Flag to tell whether this account is currently registered
   * (has active registration session).
   *
   * TODO: This only returns the string 'Test'
   */

  /**
   * Reason phrase received.
   *
   * TODO: This only returns the string 'Test'
   */
  constructor(props) {
    this.status = props.status;
    this.statusText = props.statusText;
    this.regLastErr = props.regLastErr;
    this.regLastErrText = props.regLastErrText;
    this.active = props.active;
    this.expires = props.expires;
  }

}
//# sourceMappingURL=AccountRegistration.js.map