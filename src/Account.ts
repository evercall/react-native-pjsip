import { IAccountRegistration } from './AccountRegistration'

export interface IAccount {
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
  registration?: IAccountRegistration
}

/**
 * This describes account configuration and registration status
 */
export default class Account {
  /**
   * The account ID.
   */
  id: number | undefined
  /**
   * This is the URL to be put in the request URI for the registration, and will look something like "sip:serviceprovider".
   */
  uri: string | undefined
  /**
   * Full name specified in Endpoint.createAccount().
   * If this value has been set to null, then it will return "sip:" + this.getDomain
   */
  name: string | null | undefined
  /**
   * Username specified in Endpoint.createAccount().
   */
  username: string
  /**
   * Domain specified in Endpoint.createAccount().
   */
  domain: string
  /**
   * Password specified in Endpoint.createAccount().
   */
  password: string
  /**
   * Proxy specified in Endpoint.createAccount().
   */
  proxy: string | null | undefined
  /**
   * Transport specified in Endpoint.createAccount().
   */
  transport: string | null | undefined
  /**
   * Additional parameters that will be appended in the Contact header
   * for this account.
   */
  contactParams: string | null | undefined
  /**
   * Additional URI parameters that will be appended in the Contact URI
   * for this account.
   */
  contactUriParams: string | null | undefined
  /**
   * Port specified in Endpoint.createAccount().
   */
  regServer: string | null | undefined
  /**
   * Port specified in Endpoint.createAccount().
   */
  regTimeout: number | undefined
  regContactParams: string | null | undefined
  regHeaders: Object | null | undefined
  regOnAdd: boolean | undefined
  /**
   * Account registration status.
   */
  registration: IAccountRegistration | undefined

  constructor (props: IAccount) {
    this.id = props.id
    this.uri = props.uri
    this.name = props.name
    this.username = props.username
    this.domain = props.domain
    this.password = props.password
    this.proxy = props.proxy
    this.transport = props.transport
    this.contactParams = props.contactParams
    this.contactUriParams = props.contactUriParams
    this.regServer = props.regServer
    this.regTimeout = props.regTimeout
    this.regContactParams = props.regContactParams
    this.regHeaders = props.regHeaders
    this.regOnAdd = props.regOnAdd
    this.registration = props.registration
  }
}
