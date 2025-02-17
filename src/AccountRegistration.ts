/**
 * Account registration information. Application can query the registration info
 * by calling account.getRegistration().
 */
export default class AccountRegistration {
    _status: string;

    _statusText: string;

    _active: boolean;

    _reason: string;

    constructor({
      status, statusText, active, reason,
    }) {
      this._status = status
      this._statusText = statusText
      this._active = active
      this._reason = reason
    }

    /**
     * Last registration status code (SIP status codes according to RFC 3261).
     * If status code is empty, the account is currently not registered. Any other value indicates the SIP
     * status code of the registration.
     *
     * @returns {string|null}
     */
    getStatus(): string | null {
      return this._status
    }

    /**
     * String describing the registration status.
     *
     * @returns {string|null}
     */
    getStatusText(): string | null {
      return this._statusText
    }

    /**
     * Flag to tell whether this account is currently registered
     * (has active registration session).
     *
     * @returns boolean
     */
    isActive(): boolean {
      return this._active
    }

    /**
     * Reason phrase received.
     *
     * @returns {String|null}
     */
    getReason(): string | null {
      return this._reason
    }

    toJson(): {
        status: string,
        statusText: string,
        active: boolean,
        reason: string,
        } {
      return {
        status: this._status,
        statusText: this._statusText,
        active: this._active,
        reason: this._reason,
      }
    }
}
