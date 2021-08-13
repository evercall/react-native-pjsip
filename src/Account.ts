import AccountRegistration from './AccountRegistration'

/**
 * URI: If this value has been set to null, then it will return ´"sip:" + this.getDomain´
 */
export type AccountConfiguration = {
    id?: number | null,
    uri?: string | null,
    name?: string | null,
    username: string,
    domain: string,
    password: string,
    proxy?: string | null,
    transport?: string | null,
    contactParams?: string | null,
    contactUriParams?: string | null,
    regServer?: string | null,
    regTimeout?: string | null,
    regContactParams?: string | null,
    regHeaders?: Object | null,
    regOnAdd?: boolean | null
};

/**
 * This describes account configuration and registration status
 */
export default class Account {
    _data: AccountConfiguration;

    _registration: AccountRegistration;

    constructor(data: any) {
      this._data = data
      this._registration = new AccountRegistration(data.registration)
    }

    /**
     * The account ID.
     * @returns {int}
     */
    getId(): number {
      return this._data.id
    }

    /**
     * This is the URL to be put in the request URI for the registration, and will look something like "sip:serviceprovider".
     * @returns {String}
     */
    getURI(): string {
      return this._data.uri
    }

    /**
     * Full name specified in Endpoint.createAccount().
     * If this value has been set to null, then it will return "sip:" + this.getDomain
     * @returns {String}
     */
    getName(): string {
      return this._data.name
    }

    /**
     * Username specified in Endpoint.createAccount().
     * @returns {String}
     */
    getUsername(): string {
      return this._data.username
    }

    /**
     * Domain specified in Endpoint.createAccount().
     * @returns {string}
     */
    getDomain(): string {
      return this._data.domain
    }

    /**
     * Password specified in Endpoint.createAccount().
     * @returns {String}
     */
    getPassword(): string {
      return this._data.password
    }

    /**
     * Proxy specified in Endpoint.createAccount().
     * @returns {String}
     */
    getProxy(): string {
      return this._data.proxy
    }

    /**
     * Transport specified in Endpoint.createAccount().
     * @returns {String}
     */
    getTransport(): string {
      return this._data.transport
    }

    /**
     * Additional parameters that will be appended in the Contact header
     * for this account.
     * @returns {String}
     */
    getContactParams(): string {
      return this._data.contactParams
    }

    /**
     * Additional URI parameters that will be appended in the Contact URI
     * for this account.
     * @returns {String}
     */
    getContactUriParams(): string {
      return this._data.contactUriParams
    }

    /**
     * Port specified in Endpoint.createAccount().
     * @returns {String}
     */
    getRegServer(): string {
      return this._data.regServer || ''
    }

    /**
     * Port specified in Endpoint.createAccount().
     * @returns {String}
     */
    getRegTimeout(): string {
      return this._data.regTimeout
    }

    /**
     * @returns {String}
     */
    getRegContactParams(): string {
      return this._data.regContactParams
    }

    /**
     * @returns {Object}
     */
    getRegHeaders(): Object {
      return this._data.regHeaders
    }

    /**
     * Account registration status.
     * @returns {AccountRegistration}
     */
    getRegistration(): AccountRegistration {
      return this._registration
    }
}
