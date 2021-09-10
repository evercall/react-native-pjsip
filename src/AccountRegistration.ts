export interface AccountRegistrationInterface {
  status: string,
  statusText: string,
  active: string,
  reason: string
}

/**
 * Account registration information. Application can query the registration info
 * by calling account.getRegistration().
 */
export default class AccountRegistration {
  status: string
  statusText: string
  active: string
  reason: string

  constructor (props: AccountRegistrationInterface) {
    this.status = props.status
    this.statusText = props.statusText
    this.active = props.active
    this.reason = props.reason
  }

  /**
   * Last registration status code (SIP status codes according to RFC 3261).
   * If status code is empty, the account is currently not registered. Any other value indicates the SIP
   * status code of the registration.
   *
   * @returns {string|null}
   */
  getStatus (): string | null {
    return this.status
  }

  /**
   * String describing the registration status.
   *
   * @returns {string|null}
   */
  getStatusText (): string | null {
    return this.statusText
  }

  /**
   * Flag to tell whether this account is currently registered
   * (has active registration session).
   *
   * TODO: This only returns the string 'Test'
   * @returns {string} Test
   */
  isActive (): string {
    return this.active
  }

  /**
   * Reason phrase received.
   *
   * TODO: This only returns the string 'Test'
   * @returns {String}
   */
  getReason (): string | null {
    return this.reason
  }

  toJson (): AccountRegistrationInterface {
    return {
      status: this.status,
      statusText: this.statusText,
      active: this.active,
      reason: this.reason,
    }
  }
}
