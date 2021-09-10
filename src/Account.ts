import AccountRegistration, { AccountRegistrationInterface } from './AccountRegistration'

/**
 * URI: If this value has been set to null, then it will return ´"sip:" + this.getDomain´
 */
export type AccountConfiguration = {
  id?: number,
  uri?: string,
  name?: string | null,
  username: string,
  domain: string,
  password: string,
  proxy?: string | null,
  transport?: string | null,
  contactParams?: string | null,
  contactUriParams?: string | null,
  regServer?: string | null,
  regTimeout?: number,
  regContactParams?: string | null,
  regHeaders?: Object | null,
  regOnAdd?: boolean,
  registration?: AccountRegistrationInterface
};

/**
 * This describes account configuration and registration status
 */
export default class Account {
  data: AccountConfiguration
  registration: AccountRegistration

  constructor (data: AccountConfiguration) {
    this.data = data
  }

  /**
   * The account ID.
   * @returns {number}
   */
  getId (): number {
    return this.data.id
  }

  /**
   * This is the URL to be put in the request URI for the registration, and will look something like "sip:serviceprovider".
   * @returns {string}
   */
  getURI (): string {
    return this.data.uri
  }

  /**
   * Full name specified in Endpoint.createAccount().
   * If this value has been set to null, then it will return "sip:" + this.getDomain
   * @returns {string|null}
   */
  getName (): string | null {
    return this.data.name
  }

  /**
   * Username specified in Endpoint.createAccount().
   * @returns {string}
   */
  getUsername (): string {
    return this.data.username
  }

  /**
   * Domain specified in Endpoint.createAccount().
   * @returns {string}
   */
  getDomain (): string {
    return this.data.domain
  }

  /**
   * Password specified in Endpoint.createAccount().
   * @returns {string}
   */
  getPassword (): string {
    return this.data.password
  }

  /**
   * Proxy specified in Endpoint.createAccount().
   * @returns {string|null}
   */
  getProxy (): string | null {
    return this.data.proxy
  }

  /**
   * Transport specified in Endpoint.createAccount().
   * @returns {string|null}
   */
  getTransport (): string | null {
    return this.data.transport
  }

  /**
   * Additional parameters that will be appended in the Contact header
   * for this account.
   * @returns {string|null}
   */
  getContactParams (): string | null {
    return this.data.contactParams
  }

  /**
   * Additional URI parameters that will be appended in the Contact URI
   * for this account.
   * @returns {string|null}
   */
  getContactUriParams (): string | null {
    return this.data.contactUriParams
  }

  /**
   * Port specified in Endpoint.createAccount().
   * @returns {string|null}
   */
  getRegServer (): string | null {
    return this.data.regServer || ''
  }

  /**
   * Port specified in Endpoint.createAccount().
   * @returns {number}
   */
  getRegTimeout (): number {
    return this.data.regTimeout
  }

  /**
   * @returns {string|null}
   */
  getRegContactParams (): string | null {
    return this.data.regContactParams
  }

  /**
   * @returns {Object|null}
   */
  getRegHeaders (): Object | null {
    return this.data.regHeaders
  }

  /**
   * Account registration status.
   * @returns {AccountRegistration}
   */
  getRegistration (): AccountRegistration {
    return this.registration
  }
}
