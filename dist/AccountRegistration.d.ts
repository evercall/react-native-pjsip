export interface AccountRegistrationInterface {
    status: string;
    statusText: string;
    active: string;
    reason: string;
}
/**
 * Account registration information. Application can query the registration info
 * by calling account.getRegistration().
 */
export default class AccountRegistration {
    status: string;
    statusText: string;
    active: string;
    reason: string;
    constructor(props: AccountRegistrationInterface);
    /**
     * Last registration status code (SIP status codes according to RFC 3261).
     * If status code is empty, the account is currently not registered. Any other value indicates the SIP
     * status code of the registration.
     *
     * @returns {string|null}
     */
    getStatus(): string | null;
    /**
     * String describing the registration status.
     *
     * @returns {string|null}
     */
    getStatusText(): string | null;
    /**
     * Flag to tell whether this account is currently registered
     * (has active registration session).
     *
     * TODO: This only returns the string 'Test'
     * @returns {string} Test
     */
    isActive(): string;
    /**
     * Reason phrase received.
     *
     * TODO: This only returns the string 'Test'
     * @returns {String}
     */
    getReason(): string | null;
    toJson(): AccountRegistrationInterface;
}
