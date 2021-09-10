import AccountRegistration, { AccountRegistrationInterface } from './AccountRegistration';
/**
 * URI: If this value has been set to null, then it will return ´"sip:" + this.getDomain´
 */
export declare type AccountConfiguration = {
    id?: number;
    uri?: string;
    name?: string | null;
    username: string;
    domain: string;
    password: string;
    proxy?: string | null;
    transport?: string | null;
    contactParams?: string | null;
    contactUriParams?: string | null;
    regServer?: string | null;
    regTimeout?: number;
    regContactParams?: string | null;
    regHeaders?: Object | null;
    regOnAdd?: boolean;
    registration?: AccountRegistrationInterface;
};
/**
 * This describes account configuration and registration status
 */
export default class Account {
    data: AccountConfiguration;
    registration: AccountRegistration;
    constructor(data: AccountConfiguration);
    /**
     * The account ID.
     * @returns {number}
     */
    getId(): number;
    /**
     * This is the URL to be put in the request URI for the registration, and will look something like "sip:serviceprovider".
     * @returns {string}
     */
    getURI(): string;
    /**
     * Full name specified in Endpoint.createAccount().
     * If this value has been set to null, then it will return "sip:" + this.getDomain
     * @returns {string|null}
     */
    getName(): string | null;
    /**
     * Username specified in Endpoint.createAccount().
     * @returns {string}
     */
    getUsername(): string;
    /**
     * Domain specified in Endpoint.createAccount().
     * @returns {string}
     */
    getDomain(): string;
    /**
     * Password specified in Endpoint.createAccount().
     * @returns {string}
     */
    getPassword(): string;
    /**
     * Proxy specified in Endpoint.createAccount().
     * @returns {string|null}
     */
    getProxy(): string | null;
    /**
     * Transport specified in Endpoint.createAccount().
     * @returns {string|null}
     */
    getTransport(): string | null;
    /**
     * Additional parameters that will be appended in the Contact header
     * for this account.
     * @returns {string|null}
     */
    getContactParams(): string | null;
    /**
     * Additional URI parameters that will be appended in the Contact URI
     * for this account.
     * @returns {string|null}
     */
    getContactUriParams(): string | null;
    /**
     * Port specified in Endpoint.createAccount().
     * @returns {string|null}
     */
    getRegServer(): string | null;
    /**
     * Port specified in Endpoint.createAccount().
     * @returns {number}
     */
    getRegTimeout(): number;
    /**
     * @returns {string|null}
     */
    getRegContactParams(): string | null;
    /**
     * @returns {Object|null}
     */
    getRegHeaders(): Object | null;
    /**
     * Account registration status.
     * @returns {AccountRegistration}
     */
    getRegistration(): AccountRegistration;
}
