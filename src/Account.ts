import { IAccountRegistration } from './AccountRegistration'

export interface IAccountConfig {

  /**
   * Account priority, which is used to control the order of matching
   * incoming/outgoing requests. The higher the number means the higher
   * the priority is, and the account will be matched first.
   */
  priority?: number;

  /**
   * The full SIP URL for the account. The value can take name address or
   * URL format, and will look something like "sip:account@serviceprovider"
   * or "\"Display Name\" <sip:account@provider>".
   *
   * This field is mandatory.
   */
  id: string;

  /**
   * This is the URL to be put in the request URI for the registration,
   * and will look something like "sip:serviceprovider".
   *
   * This field should be specified if registration is desired. If the
   * value is empty, no account registration will be performed.
   */
  reg_uri?: string;

  /**
   * The optional custom SIP headers to be put in the registration
   * request.
   */
  reg_hdr_list?: Object[];

  /**
   * Additional parameters that will be appended in the Contact header
   * for this account. This will only affect REGISTER requests and
   * will be appended after \a contact_params;
   *
   * The parameters should be preceeded by semicolon, and all strings must
   * be properly escaped. Example:
   *   ";my-param=X;another-param=Hi%20there"
   */
  reg_contact_params?: string;

  /**
   * The optional custom SIP headers to be put in the presence
   * subscription request.
   */
  sub_hdr_list?: Object[];

  /**
   * Subscribe to message waiting indication events (RFC 3842).
   *
   * See also \a enable_unsolicited_mwi field on #pjsua_config.
   *
   * Default: no
   */
  mwi_enabled?: boolean;

  /**
   * Specify the default expiration time for Message Waiting Indication
   * (RFC 3842) event subscription. This must not be zero.
   *
   * Default: PJSIP_MWI_DEFAULT_EXPIRES
   */
  mwi_expires?: number;

  /**
   * If this flag is set, the presence information of this account will
   * be PUBLISH-ed to the server where the account belongs.
   *
   * Default: PJ_FALSE
   */
  publish_enabled?: boolean;

  /**
   * Event publication options.
   */
  publish_opt?: {
    /**
     * Specify whether the client publication session should queue the
     * PUBLISH request should there be another PUBLISH transaction still
     * pending. If this is set to false, the client will return error
     * on the PUBLISH request if there is another PUBLISH transaction still
     * in progress.
     *
     * Default: PJSIP_PUBLISHC_QUEUE_REQUEST
     */
    queue_request: boolean;
  };

  /**
   * Maximum time to wait for unpublication transaction(s) to complete
   * during shutdown process, before sending unregistration. The library
   * tries to wait for the unpublication (un-PUBLISH) to complete before
   * sending REGISTER request to unregister the account, during library
   * shutdown process. If the value is set too short, it is possible that
   * the unregistration is sent before unpublication completes, causing
   * unpublication request to fail.
   *
   * Default: PJSUA_UNPUBLISH_MAX_WAIT_TIME_MSEC
   */
  unpublish_max_wait_time_msec?: number;

  /**
   * Authentication preference.
   */
  auth_pref?: {
    /**
     * If this flag is set, the authentication client framework will
     * send an empty Authorization header in each initial request.
     * Default is no.
     */
    initial_auth: boolean;

    /**
     * Specify the algorithm to use when empty Authorization header
     * is to be sent for each initial request (see above)
     */
    algorithm: string;
  };

  /**
   * Optional PIDF tuple ID for outgoing PUBLISH and NOTIFY. If this value
   * is not specified, a random string will be used.
   */
  pidf_tuple_id?: string;

  /**
   * Optional URI to be put as Contact for this account. It is recommended
   * that this field is left empty, so that the value will be calculated
   * automatically based on the transport address.
   */
  force_contact?: string;

  /**
   * Additional parameters that will be appended in the Contact header
   * for this account. This will affect the Contact header in all SIP
   * messages sent on behalf of this account, including but not limited to
   * REGISTER, INVITE, and SUBCRIBE requests or responses.
   *
   * The parameters should be preceeded by semicolon, and all strings must
   * be properly escaped. Example:
   *   ";my-param=X;another-param=Hi%20there"
   */
  contact_params?: string;

  /**
   * Additional URI parameters that will be appended in the Contact URI
   * for this account. This will affect the Contact URI in all SIP
   * messages sent on behalf of this account, including but not limited to
   * REGISTER, INVITE, and SUBCRIBE requests or responses.
   *
   * The parameters should be preceeded by semicolon, and all strings must
   * be properly escaped. Example:
   *   ";my-param=X;another-param=Hi%20there"
   */
  contact_uri_params?: string;

  /**
   * Specify how support for reliable provisional response (100rel/
   * PRACK) should be used for all sessions in this account. See the
   * documentation of pjsua_100rel_use enumeration for more info.
   *
   * Default: The default value is taken from the value of
   *          require_100rel in pjsua_config.
   */
  require_100rel?: string;

  /**
   * Specify the usage of Session Timers for all sessions. See the
   * #pjsua_sip_timer_use for possible values.
   *
   * Default: PJSUA_SIP_TIMER_OPTIONAL
   */
  use_timer?: string;

  /**
   * Specify Session Timer settings, see #pjsip_timer_setting.
   */
  timer_setting?: {

    /**
     * Specify minimum session expiration period, in seconds. Must not be
     * lower than 90. Default is 90.
     */
    min_se: number;

    /**
     * Specify session expiration period, in seconds. Must not be lower than
     * #min_se. Default is 1800.
     */
    sess_expires: number;
  };

  /**
   * Number of proxies in the proxy array below.
   */
  proxy_cnt?: number;

  /**
   * Optional URI of the proxies to be visited for all outgoing requests
   * that are using this account (REGISTER, INVITE, etc). Application need
   * to specify these proxies if the service provider requires that requests
   * destined towards its network should go through certain proxies first
   * (for example, border controllers).
   *
   * These proxies will be put in the route set for this account, with
   * maintaining the orders (the first proxy in the array will be visited
   * first). If global outbound proxies are configured in pjsua_config,
   * then these account proxies will be placed after the global outbound
   * proxies in the routeset.
   */
  proxy?: string;

  /**
   * If remote sends SDP answer containing more than one format or codec in
   * the media line, send re-INVITE or UPDATE with just one codec to lock
   * which codec to use.
   *
   * Default: 1 (Yes). Set to zero to disable.
   */
  lock_codec?: boolean;

  /**
   * Optional interval for registration, in seconds. If the value is zero,
   * default interval will be used (PJSUA_REG_INTERVAL, 300 seconds).
   */
  reg_timeout?: number;

  /**
   * Specify the number of seconds to refresh the client registration
   * before the registration expires.
   *
   * Default: PJSIP_REGISTER_CLIENT_DELAY_BEFORE_REFRESH, 5 seconds
   */
  reg_delay_before_refresh?: number;

  /**
   * Specify the maximum time to wait for unregistration requests to
   * complete during library shutdown sequence.
   *
   * Default: PJSUA_UNREG_TIMEOUT
   */
  unreg_timeout?: number;

  /**
   * Number of credentials in the credential array.
   */
  cred_count?: number;

  /**
   * Array of credentials. If registration is desired, normally there should
   * be at least one credential specified, to successfully authenticate
   * against the service provider. More credentials can be specified, for
   * example when the requests are expected to be challenged by the
   * proxies in the route set.
   */
  cred_info?: string[];

  /**
   * Optionally bind this account to specific transport. This normally is
   * not a good idea, as account should be able to send requests using
   * any available transports according to the destination. But some
   * application may want to have explicit control over the transport to
   * use, so in that case it can set this field.
   *
   * Default: -1 (PJSUA_INVALID_ID)
   *
   * @see pjsua_acc_set_transport()
   */
  transport_id?: number;

  /**
   * This option is used to update the transport address and the Contact
   * header of REGISTER request. When this option is  enabled, the library
   * will keep track of the public IP address from the response of REGISTER
   * request. Once it detects that the address has changed, it will
   * unregister current Contact, update the Contact with transport address
   * learned from Via header, and register a new Contact to the registrar.
   * This will also update the public name of UDP transport if STUN is
   * configured.
   *
   * See also contact_rewrite_method field.
   *
   * Default: 1 (yes)
   */
  allow_contact_rewrite?: boolean;

  /**
   * Specify how Contact update will be done with the registration, if
   * \a allow_contact_rewrite is enabled. The value is bitmask combination of
   * \a pjsua_contact_rewrite_method. See also pjsua_contact_rewrite_method.
   *
   * Value PJSUA_CONTACT_REWRITE_UNREGISTER(1) is the legacy behavior.
   *
   * Default value: PJSUA_CONTACT_REWRITE_METHOD
   * (PJSUA_CONTACT_REWRITE_NO_UNREG | PJSUA_CONTACT_REWRITE_ALWAYS_UPDATE)
   */
  contact_rewrite_method?: number;

  /**
   * Specify if source TCP port should be used as the initial Contact
   * address if TCP/TLS transport is used. Note that this feature will
   * be automatically turned off when nameserver is configured because
   * it may yield different destination address due to DNS SRV resolution.
   * Also some platforms are unable to report the local address of the
   * TCP socket when it is still connecting. In these cases, this
   * feature will also be turned off.
   *
   * Default: PJ_TRUE (yes).
   */
  contact_use_src_port?: boolean;

  /**
   * This option is used to overwrite the "sent-by" field of the Via header
   * for outgoing messages with the same interface address as the one in
   * the REGISTER request, as long as the request uses the same transport
   * instance as the previous REGISTER request.
   *
   * Default: 1 (yes)
   */
  allow_via_rewrite?: boolean;

  /**
   * This option controls whether the IP address in SDP should be replaced
   * with the IP address found in Via header of the REGISTER response, ONLY
   * when STUN and ICE are not used. If the value is FALSE (the original
   * behavior), then the local IP address will be used. If TRUE, and when
   * STUN and ICE are disabled, then the IP address found in registration
   * response will be used.
   *
   * Default: PJ_FALSE (no)
   */
  allow_sdp_nat_rewrite?: boolean;

  /**
   * Control the use of SIP outbound feature. SIP outbound is described in
   * RFC 5626 to enable proxies or registrar to send inbound requests back
   * to UA using the same connection initiated by the UA for its
   * registration. This feature is highly useful in NAT-ed deployemtns,
   * hence it is enabled by default.
   *
   * Note: currently SIP outbound can only be used with TCP and TLS
   * transports. If UDP is used for the registration, the SIP outbound
   * feature will be silently ignored for the account.
   *
   * Default: PJ_TRUE
   */
  use_rfc5626?: boolean;

  /**
   * Specify SIP outbound (RFC 5626) instance ID to be used by this
   * application. If empty, an instance ID will be generated based on
   * the hostname of this agent. If application specifies this parameter, the
   * value will look like "<urn:uuid:00000000-0000-1000-8000-AABBCCDDEEFF>"
   * without the doublequote.
   *
   * Default: empty
   */
  rfc5626_instance_id?: string;

  /**
   * Specify SIP outbound (RFC 5626) registration ID. The default value
   * is empty, which would cause the library to automatically generate
   * a suitable value.
   *
   * Default: empty
   */
  rfc5626_reg_id?: string;

  /**
   * Set the interval for periodic keep-alive transmission for this account.
   * If this value is zero, keep-alive will be disabled for this account.
   * The keep-alive transmission will be sent to the registrar's address,
   * after successful registration.
   *
   * Default: 15 (seconds)
   */
  ka_interval?: number;

  /**
   * Specify the data to be transmitted as keep-alive packets.
   *
   * Default: CR-LF
   */
  ka_data?: string;

  /**
   * Specify whether incoming video should be shown to screen by default.
   * This applies to incoming call (INVITE), incoming re-INVITE, and
   * incoming UPDATE requests.
   *
   * Regardless of this setting, application can detect incoming video
   * by implementing \a on_call_media_state() callback and enumerating
   * the media stream(s) with #pjsua_call_get_info(). Once incoming
   * video is recognised, application may retrieve the window associated
   * with the incoming video and show or hide it with
   * #pjsua_vid_win_set_show().
   *
   * Default: PJ_FALSE
   */
  vid_in_auto_show?: boolean;

  /**
   * Specify whether outgoing video should be activated by default when
   * making outgoing calls and/or when incoming video is detected. This
   * applies to incoming and outgoing calls, incoming re-INVITE, and
   * incoming UPDATE. If the setting is non-zero, outgoing video
   * transmission will be started as soon as response to these requests
   * is sent (or received).
   *
   * Regardless of the value of this setting, application can start and
   * stop outgoing video transmission with #pjsua_call_set_vid_strm().
   *
   * Default: PJ_FALSE
   */
  vid_out_auto_transmit?: boolean;

  /**
   * Specify video window's flags. The value is a bitmask combination of
   * #pjmedia_vid_dev_wnd_flag.
   *
   * Default: 0
   */
  vid_wnd_flags?: number;

  /**
   * Specify the default capture device to be used by this account. If
   * \a vid_out_auto_transmit is enabled, this device will be used for
   * capturing video.
   *
   * Default: PJMEDIA_VID_DEFAULT_CAPTURE_DEV
   */
  vid_cap_dev?: string;

  /**
   * Specify the default rendering device to be used by this account.
   *
   * Default: PJMEDIA_VID_DEFAULT_RENDER_DEV
   */
  vid_rend_dev?: string;

  /**
   * Specify the send rate control for video stream.
   *
   * Default: see #pjmedia_vid_stream_rc_config
   */
  vid_stream_rc_cfg?: string;

  /**
   * Specify the send keyframe config for video stream.
   *
   * Default: see #pjmedia_vid_stream_sk_config
   */
  vid_stream_sk_cfg?: string;

  /**
   * Media transport config.
   */
  rtp_cfg?: string;

  /**
   * Specify NAT64 options.
   *
   * Default: PJSUA_NAT64_DISABLED
   */
  nat64_opt?: string;

  /**
   * Specify whether IPv6 should be used on media.
   */
  ipv6_media_use?: boolean;

  /**
   * Control the use of STUN for the SIP signaling.
   *
   * Default: PJSUA_STUN_USE_DEFAULT
   */
  sip_stun_use?: string;

  /**
   * Control the use of STUN for the media transports.
   *
   * Default: PJSUA_STUN_RETRY_ON_FAILURE
   */
  media_stun_use?: string;

  /**
   * Control the use of ICE in the account. By default, the settings in the
   * \a pjsua_media_config will be used.
   *
   * Default: PJSUA_ICE_CONFIG_USE_DEFAULT
   */
  ice_cfg_use?: string;

  /**
   * The custom ICE setting for this account. This setting will only be
   * used if \a ice_cfg_use is set to PJSUA_ICE_CONFIG_USE_CUSTOM
   */
  ice_cfg?: string;

  /**
   * Control the use of TURN in the account. By default, the settings in the
   * \a pjsua_media_config will be used
   *
   * Default: PJSUA_TURN_CONFIG_USE_DEFAULT
   */
  turn_cfg_use?: string;

  /**
   * The custom TURN setting for this account. This setting will only be
   * used if \a turn_cfg_use is set to PJSUA_TURN_CONFIG_USE_CUSTOM
   */
  turn_cfg?: string;

  /**
   * Specify whether secure media transport should be used for this account.
   * Valid values are PJMEDIA_SRTP_DISABLED, PJMEDIA_SRTP_OPTIONAL, and
   * PJMEDIA_SRTP_MANDATORY.
   *
   * Default: #PJSUA_DEFAULT_USE_SRTP
   */
  use_srtp?: boolean;

  /**
   * Specify whether SRTP requires secure signaling to be used. This option
   * is only used when \a use_srtp option above is non-zero.
   *
   * Valid values are:
   *  0: SRTP does not require secure signaling
   *  1: SRTP requires secure transport such as TLS
   *  2: SRTP requires secure end-to-end transport (SIPS)
   *
   * Default: #PJSUA_DEFAULT_SRTP_SECURE_SIGNALING
   */
  srtp_secure_signaling?: number;

  /**
   * This setting has been deprecated and will be ignored.
   */
  srtp_optional_dup_offer?: boolean;

  /**
   * Specify SRTP transport setting. Application can initialize it with
   * default values using pjsua_srtp_opt_default().
   */
  srtp_opt?: string;

  /**
   * Specify interval of auto registration retry upon registration failure,
   * in seconds. Set to 0 to disable auto re-registration. Note that
   * registration will only be automatically retried for temporal failures
   * considered to be recoverable in relatively short term, such as:
   * 408 (Request Timeout), 480 (Temporarily Unavailable),
   * 500 (Internal Server Error), 502 (Bad Gateway),
   * 503 (Service Unavailable), 504 (Server Timeout),
   * 6xx (global failure), and failure caused by transport problem.
   * For registration retry caused by transport failure, the first retry
   * will be done after \a reg_first_retry_interval seconds instead.
   * Note that the interval will be randomized slightly by some seconds
   * (specified in \a reg_retry_random_interval) to avoid all clients
   * re-registering at the same time.
   *
   * See also \a reg_first_retry_interval setting.
   *
   * Default: #PJSUA_REG_RETRY_INTERVAL
   */
  reg_retry_interval?: number;

  /**
   * This specifies the interval for the first registration retry. The
   * registration retry is explained in \a reg_retry_interval. Note that
   * the value here will also be randomized by some seconds (specified
   * in \a reg_retry_random_interval) to avoid all clients re-registering
   * at the same time.
   *
   * Default: 0
   */
  reg_first_retry_interval?: number;

  /**
   * This specifies maximum randomized value to be added/substracted
   * to/from the registration retry interval specified in \a
   * reg_retry_interval and \a reg_first_retry_interval, in second.
   * This is useful to avoid all clients re-registering at the same time.
   * For example, if the registration retry interval is set to 100 seconds
   * and this is set to 10 seconds, the actual registration retry interval
   * will be in the range of 90 to 110 seconds.
   *
   * Default: 10
   */
  reg_retry_random_interval?: number;

  /**
   * Specify whether calls of the configured account should be dropped
   * after registration failure and an attempt of re-registration has
   * also failed.
   *
   * Default: PJ_FALSE (disabled)
   */
  drop_calls_on_reg_fail?: boolean;

  /**
   * Specify how the registration uses the outbound and account proxy
   * settings. This controls if and what Route headers will appear in
   * the REGISTER request of this account. The value is bitmask combination
   * of PJSUA_REG_USE_OUTBOUND_PROXY and PJSUA_REG_USE_ACC_PROXY bits.
   * If the value is set to 0, the REGISTER request will not use any proxy
   * (i.e. it will not have any Route headers).
   *
   * Default: 3 (PJSUA_REG_USE_OUTBOUND_PROXY | PJSUA_REG_USE_ACC_PROXY)
   */
  reg_use_proxy?: number;

  /**
   * Specify whether stream keep-alive and NAT hole punching with
   * non-codec-VAD mechanism (see @ref PJMEDIA_STREAM_ENABLE_KA) is enabled
   * for this account.
   *
   * Default: PJ_FALSE (disabled)
   */
  use_stream_ka?: boolean;

  /**
   * Specify how to offer call hold to remote peer. Please see the
   * documentation on #pjsua_call_hold_type for more info.
   *
   * Default: PJSUA_CALL_HOLD_TYPE_DEFAULT
   */
  call_hold_type?: string;

  /**
   * Specify whether the account should register as soon as it is
   * added to the UA. Application can set this to PJ_FALSE and control
   * the registration manually with pjsua_acc_set_registration().
   *
   * Default: PJ_TRUE
   */
  register_on_acc_add?: boolean;

  /**
   * Specify account configuration specific to IP address change used when
   * calling #pjsua_handle_ip_change().
   */
  ip_change_cfg?: string;

  /**
   * Enable RTP and RTCP multiplexing.
   */
  enable_rtcp_mux?: boolean;

  /**
   * RTCP Feedback configuration.
   */
  rtcp_fb_cfg?: string;

}

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
  regOnAdd?: boolean,
  regContactParams?: string | null,
  regHeaders?: Object | null,
  registration?: IAccountRegistration
}

/**
 * This describes account configuration and registration status
 */
export default class Account implements IAccount {
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
  regOnAdd: boolean | undefined
  regContactParams: string | null | undefined
  regHeaders: Object | null | undefined
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
