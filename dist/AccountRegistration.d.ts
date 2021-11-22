export interface IAccountRegistration {
    status: string;
    statusText: string;
    active: string;
    expires: number;
}
/**
 * Account registration information. Application can query the registration info
 * by calling account.getRegistration().
 */
export default class AccountRegistration implements IAccountRegistration {
    /**
     * Last registration status code (SIP status codes according to RFC 3261).
     * If status code is empty, the account is currently not registered. Any other value indicates the SIP
     * status code of the registration.
     */
    status: string;
    /**
     * String describing the registration status.
     */
    statusText: string;
    /**
     * Flag to tell whether this account is currently registered
     * (has active registration session).
     *
     * TODO: This only returns the string 'Test'
     */
    active: string;
    /**
     * Reason phrase received.
     *
     * TODO: This only returns the string 'Test'
     */
    expires: number;
    constructor(props: IAccountRegistration);
}
