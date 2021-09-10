/**
 * Enumeration of video keyframe request methods. Keyframe request is triggered by decoder, usually when the incoming
 * video stream cannot be decoded properly due to missing video keyframe.
 */
export declare enum PJSUAVideoReqKeyframeMethod {
    /**
     * Requesting keyframe via SIP INFO message. Note that incoming keyframe request via SIP INFO will always be handled
     * even if this flag is unset.
     */
    PJSUAVIDREQKEYFRAMESIPINFO = "PJSUAVIDREQKEYFRAMESIPINFO",
    /**
     * Requesting keyframe via Picture Loss Indication of RTCP feedback. This is currently not supported.
     */
    PJSUAVIDREQKEYFRAMERTCPPLI = "PJSUAVIDREQKEYFRAMERTCPPLI"
}
/**
 * Flags to be given to various call APIs. More than one flags may be specified by bitmasking them.
 */
export declare enum PJSUACallFlags {
    /**
     * When the call is being put on hold, specify this flag to unhold it. This flag is only valid for
     * pjsuacallreinvite() and pjsuacallupdate(). Note: for compatibility reason, this flag must have value of 1
     * because previously the unhold option is specified as boolean value.
     */
    PJSUACALLUNHOLD = "PJSUACALLUNHOLD",
    /**
     * Update the local invite session's contact with the contact URI from the account. This flag is only valid for
     * pjsuacallsethold2(), pjsuacallreinvite() and pjsuacallupdate(). This flag is useful in IP address change
     * situation, after the local account's Contact has been updated (typically with re-registration) use this flag to
     * update the invite session with the new Contact and to inform this new Contact to the remote peer with the outgoing
     * re-INVITE or UPDATE.
     */
    PJSUACALLUPDATECONTACT = "PJSUACALLUPDATECONTACT",
    /**
     * Include SDP "m=" line with port set to zero for each disabled media (i.e when audcnt or vidcnt is set to zero).
     * This flag is only valid for pjsuacallmakecall(), pjsuacallreinvite(), and pjsuacallupdate().
     * Note that even this flag is applicable in pjsuacallreinvite() and pjsuacallupdate(), it will only take
     * effect when the re-INVITE/UPDATE operation regenerates SDP offer, such as changing audio or video count in
     * the call setting.
     */
    PJSUACALLINCLUDEDISABLEDMEDIA = "PJSUACALLINCLUDEDISABLEDMEDIA",
    /**
     * Do not send SDP when sending INVITE or UPDATE. This flag is only valid for pjsuacallmakecall(),
     * pjsuacallreinvite()/reinvite2(), or pjsuacallupdate()/update2(). For re-invite/update, specifying
     * PJSUACALLUNHOLD will take precedence over this flag.
     */
    PJSUACALLNOSDPOFFER = "PJSUACALLNOSDPOFFER",
    /**
     * Deinitialize and recreate media, including media transport. This flag is useful in IP address change situation,
     * if the media transport address (or address family) changes, for example during IPv4/IPv6 network handover.
     * This flag is only valid for pjsuacallreinvite()/reinvite2(), or pjsuacallupdate()/update2().
     *
     * Warning: If the re-INVITE/UPDATE fails, the old media will not be reverted.
     */
    PJSUACALLREINITMEDIA = "PJSUACALLREINITMEDIA",
    /**
     * Update the local invite session's Via with the via address from the account. This flag is only valid for
     * pjsuacallsethold2(), pjsuacallreinvite() and pjsuacallupdate(). Similar to the flag
     * PJSUACALLUPDATECONTACT above, this flag is useful in IP address change situation, after the local account's
     * Via has been updated (typically with re-registration).
     */
    PJSUACALLUPDATEVIA = "PJSUACALLUPDATEVIA",
    /**
     * Update dialog target to URI specified in pjsuamsgdata.targeturi. This flag is only valid for
     * pjsuacallsethold(), pjsuacallreinvite(), and pjsuacallupdate(). This flag can be useful in IP address change
     * scenario where IP version has been changed and application needs to update target IP address.
     */
    PJSUACALLUPDATETARGET = "PJSUACALLUPDATETARGET"
}
export declare enum PJSIPCallLastStatusCode {
    PJSIP_SC_TRYING = "PJSIP_SC_TRYING",
    PJSIP_SC_RINGING = "PJSIP_SC_RINGING",
    PJSIP_SC_CALL_BEING_FORWARDED = "PJSIP_SC_CALL_BEING_FORWARDED",
    PJSIP_SC_QUEUED = "PJSIP_SC_QUEUED",
    PJSIP_SC_PROGRESS = "PJSIP_SC_PROGRESS",
    PJSIP_SC_OK = "PJSIP_SC_OK",
    PJSIP_SC_ACCEPTED = "PJSIP_SC_ACCEPTED",
    PJSIP_SC_MULTIPLE_CHOICES = "PJSIP_SC_MULTIPLE_CHOICES",
    PJSIP_SC_MOVED_PERMANENTLY = "PJSIP_SC_MOVED_PERMANENTLY",
    PJSIP_SC_MOVED_TEMPORARILY = "PJSIP_SC_MOVED_TEMPORARILY",
    PJSIP_SC_USE_PROXY = "PJSIP_SC_USE_PROXY",
    PJSIP_SC_ALTERNATIVE_SERVICE = "PJSIP_SC_ALTERNATIVE_SERVICE",
    PJSIP_SC_BAD_REQUEST = "PJSIP_SC_BAD_REQUEST",
    PJSIP_SC_UNAUTHORIZED = "PJSIP_SC_UNAUTHORIZED",
    PJSIP_SC_PAYMENT_REQUIRED = "PJSIP_SC_PAYMENT_REQUIRED",
    PJSIP_SC_FORBIDDEN = "PJSIP_SC_FORBIDDEN",
    PJSIP_SC_NOT_FOUND = "PJSIP_SC_NOT_FOUND",
    PJSIP_SC_METHOD_NOT_ALLOWED = "PJSIP_SC_METHOD_NOT_ALLOWED",
    PJSIP_SC_NOT_ACCEPTABLE = "PJSIP_SC_NOT_ACCEPTABLE",
    PJSIP_SC_PROXY_AUTHENTICATION_REQUIRED = "PJSIP_SC_PROXY_AUTHENTICATION_REQUIRED",
    PJSIP_SC_REQUEST_TIMEOUT = "PJSIP_SC_REQUEST_TIMEOUT",
    PJSIP_SC_GONE = "PJSIP_SC_GONE",
    PJSIP_SC_REQUEST_ENTITY_TOO_LARGE = "PJSIP_SC_REQUEST_ENTITY_TOO_LARGE",
    PJSIP_SC_REQUEST_URI_TOO_LONG = "PJSIP_SC_REQUEST_URI_TOO_LONG",
    PJSIP_SC_UNSUPPORTED_MEDIA_TYPE = "PJSIP_SC_UNSUPPORTED_MEDIA_TYPE",
    PJSIP_SC_UNSUPPORTED_URI_SCHEME = "PJSIP_SC_UNSUPPORTED_URI_SCHEME",
    PJSIP_SC_BAD_EXTENSION = "PJSIP_SC_BAD_EXTENSION",
    PJSIP_SC_EXTENSION_REQUIRED = "PJSIP_SC_EXTENSION_REQUIRED",
    PJSIP_SC_SESSION_TIMER_TOO_SMALL = "PJSIP_SC_SESSION_TIMER_TOO_SMALL",
    PJSIP_SC_INTERVAL_TOO_BRIEF = "PJSIP_SC_INTERVAL_TOO_BRIEF",
    PJSIP_SC_TEMPORARILY_UNAVAILABLE = "PJSIP_SC_TEMPORARILY_UNAVAILABLE",
    PJSIP_SC_CALL_TSX_DOES_NOT_EXIST = "PJSIP_SC_CALL_TSX_DOES_NOT_EXIST",
    PJSIP_SC_LOOP_DETECTED = "PJSIP_SC_LOOP_DETECTED",
    PJSIP_SC_TOO_MANY_HOPS = "PJSIP_SC_TOO_MANY_HOPS",
    PJSIP_SC_ADDRESS_INCOMPLETE = "PJSIP_SC_ADDRESS_INCOMPLETE",
    PJSIP_AC_AMBIGUOUS = "PJSIP_AC_AMBIGUOUS",
    PJSIP_SC_BUSY_HERE = "PJSIP_SC_BUSY_HERE",
    PJSIP_SC_REQUEST_TERMINATED = "PJSIP_SC_REQUEST_TERMINATED",
    PJSIP_SC_NOT_ACCEPTABLE_HERE = "PJSIP_SC_NOT_ACCEPTABLE_HERE",
    PJSIP_SC_BAD_EVENT = "PJSIP_SC_BAD_EVENT",
    PJSIP_SC_REQUEST_UPDATED = "PJSIP_SC_REQUEST_UPDATED",
    PJSIP_SC_REQUEST_PENDING = "PJSIP_SC_REQUEST_PENDING",
    PJSIP_SC_UNDECIPHERABLE = "PJSIP_SC_UNDECIPHERABLE",
    PJSIP_SC_INTERNAL_SERVER_ERROR = "PJSIP_SC_INTERNAL_SERVER_ERROR",
    PJSIP_SC_NOT_IMPLEMENTED = "PJSIP_SC_NOT_IMPLEMENTED",
    PJSIP_SC_BAD_GATEWAY = "PJSIP_SC_BAD_GATEWAY",
    PJSIP_SC_SERVICE_UNAVAILABLE = "PJSIP_SC_SERVICE_UNAVAILABLE",
    PJSIP_SC_SERVER_TIMEOUT = "PJSIP_SC_SERVER_TIMEOUT",
    PJSIP_SC_VERSION_NOT_SUPPORTED = "PJSIP_SC_VERSION_NOT_SUPPORTED",
    PJSIP_SC_MESSAGE_TOO_LARGE = "PJSIP_SC_MESSAGE_TOO_LARGE",
    PJSIP_SC_PRECONDITION_FAILURE = "PJSIP_SC_PRECONDITION_FAILURE",
    PJSIP_SC_BUSY_EVERYWHERE = "PJSIP_SC_BUSY_EVERYWHERE",
    PJSIP_SC_DECLINE = "PJSIP_SC_DECLINE",
    PJSIP_SC_DOES_NOT_EXIST_ANYWHERE = "PJSIP_SC_DOES_NOT_EXIST_ANYWHERE",
    PJSIP_SC_NOT_ACCEPTABLE_ANYWHERE = "PJSIP_SC_NOT_ACCEPTABLE_ANYWHERE"
}
/**
 * This enumeration describes invite session state
 */
export declare enum PJSIPInviteState {
    /** Before INVITE is sent or received */
    PJSIPInvStateNull = "PJSIP_INV_STATE_NULL",
    /** After INVITE is sent */
    PJSIPInvStateCalling = "PJSIP_INV_STATE_CALLING",
    /** After INVITE is received */
    PJSIPInvStateIncoming = "PJSIP_INV_STATE_INCOMING",
    /** After response with To tag */
    PJSIPInvStateEarly = "PJSIP_INV_STATE_EARLY",
    /** After 2xx is sent/received */
    PJSIPInvStateConnecting = "PJSIP_INV_STATE_CONNECTING",
    /** After ACK is sent/received */
    PJSIPInvStateConfirmed = "PJSIP_INV_STATE_CONFIRMED",
    /** Session is terminated */
    PJSIPInvStateDisconnected = "PJSIP_INV_STATE_DISCONNECTED"
}
interface mediaInterface {
    dir: string;
    type: string;
    status: string;
    audioStream: {
        confSlot: number;
    };
    videoStream: {
        captureDevice: number;
        windowId: number;
    };
}
export interface CallData {
    id: number;
    callId: string;
    accountId: number;
    localContact: string;
    localUri: string;
    remoteContact: string;
    remoteUri: string;
    state: PJSIPInviteState;
    stateText: string;
    connectDuration: number;
    totalDuration: number;
    lastStatusCode: PJSIPCallLastStatusCode | null;
    lastReason: string;
    held: boolean;
    muted: boolean;
    speaker: boolean;
    remoteOfferer: number;
    remoteAudioCount: number;
    remoteVideoCount: number;
    audioCount: number;
    videoCount: number;
    media: mediaInterface[];
    provisionalMedia: mediaInterface[];
    constructionTime?: number;
}
/**
 * This class describes the information and current status of a call.
 */
declare class Call {
    id: number;
    callId: string;
    accountId: number;
    localContact: string;
    localUri: string;
    remoteContact: string;
    remoteUri: string;
    state: PJSIPInviteState;
    stateText: string;
    connectDuration: number;
    totalDuration: number;
    lastStatusCode: PJSIPCallLastStatusCode | null;
    lastReason: string;
    held: boolean;
    muted: boolean;
    speaker: boolean;
    remoteOfferer: number;
    remoteAudioCount: number;
    remoteVideoCount: number;
    audioCount: number;
    videoCount: number;
    media: mediaInterface[];
    provisionalMedia: mediaInterface[];
    constructionTime: number;
    constructor(props: CallData);
    /**
     * Call identification.
     * @returns {int}
     */
    getId(): number;
    /**
     * The account ID where this call belongs.
     * @returns {int}
     */
    getAccountId(): number;
    /**
     * Dialog Call-ID string.
     *
     * @returns {String}
     */
    getCallId(): string;
    /**
     * Up-to-date call duration in seconds.
     * Use local time to calculate actual call duration.
     *
     * @public
     * @returns {int}
     */
    getTotalDuration(): number;
    /**
     * Up-to-date call connected duration (zero when call is not established)
     *
     * @returns {int}
     */
    getConnectDuration(): number;
    /**
     * Call duration in "MM:SS" format.
     *
     * @public
     * @returns {string}
     */
    getFormattedTotalDuration(): string;
    /**
     * Call duration in "MM:SS" format.
     *
     * @public
     * @returns {string}
     */
    getFormattedConnectDuration(): string;
    /**
     * Local Contact.
     * TODO: Provide example
     * @returns {String}
     */
    getLocalContact(): string;
    /**
     * Local URI.
     * TODO: Provide example
     * @returns {String}
     */
    getLocalUri(): string;
    /**
     * Remote contact.
     * TODO: Provide example
     * @returns {String}
     */
    getRemoteContact(): string;
    /**
     * Remote URI.
     * TODO: Provide example
     * @returns {String}
     */
    getRemoteUri(): string;
    /**
     * Callee name. Could be null if no name specified in URI.
     * @returns {String}
     */
    getRemoteName(): string;
    /**
     * Callee number
     * @returns {String}
     */
    getRemoteNumber(): string;
    /**
     * @returns {String}
     */
    getRemoteFormattedNumber(): string;
    /**
     * Invite session state.
     *
     * PJSIPINVSTATENULL           Before INVITE is sent or received
     * PJSIPINVSTATECALLING        After INVITE is sent
     * PJSIPINVSTATEINCOMING       After INVITE is received.
     * PJSIPINVSTATEEARLY          After response with To tag.
     * PJSIPINVSTATECONNECTING     After 2xx is sent/received.
     * PJSIPINVSTATECONFIRMED      After ACK is sent/received.
     * PJSIPINVSTATEDISCONNECTED   Session is terminated.
     *
     * @returns {String}
     */
    getState(): PJSIPInviteState;
    /**
     * Text describing the state.
     *
     * @returns {String}
     */
    getStateText(): string;
    isHeld(): boolean;
    isMuted(): boolean;
    isSpeaker(): boolean;
    isTerminated(): boolean;
    /**
     * Flag if remote was SDP offerer
     * @returns {boolean}
     */
    getRemoteOfferer(): number;
    /**
     * Number of audio streams offered by remote.
     * @returns {int}
     */
    getRemoteAudioCount(): number;
    /**
     * Number of video streams offered by remote.
     * @returns {int}
     */
    getRemoteVideoCount(): number;
    /**
     * Number of simultaneous active audio streams for this call. If zero - audio is disabled in this call.
     * @returns {int}
     */
    getAudioCount(): number;
    /**
     * Number of simultaneous active video streams for this call. If zero - video is disabled in this call.
     * @returns {*}
     */
    getVideoCount(): number;
    /**
     * Last status code heard, which can be used as cause code.
     * Possible values:
     * - PJSIPSCTRYING / 100
     * - PJSIPSCRINGING / 180
     * - PJSIPSCCALLBEINGFORWARDED / 181
     * - PJSIPSCQUEUED / 182
     * - PJSIPSCPROGRESS / 183
     * - PJSIPSCOK / 200
     * - PJSIPSCACCEPTED / 202
     * - PJSIPSCMULTIPLECHOICES / 300
     * - PJSIPSCMOVEDPERMANENTLY / 301
     * - PJSIPSCMOVEDTEMPORARILY / 302
     * - PJSIPSCUSEPROXY / 305
     * - PJSIPSCALTERNATIVESERVICE / 380
     * - PJSIPSCBADREQUEST / 400
     * - PJSIPSCUNAUTHORIZED / 401
     * - PJSIPSCPAYMENTREQUIRED / 402
     * - PJSIPSCFORBIDDEN / 403
     * - PJSIPSCNOTFOUND / 404
     * - PJSIPSCMETHODNOTALLOWED / 405
     * - PJSIPSCNOTACCEPTABLE / 406
     * - PJSIPSCPROXYAUTHENTICATIONREQUIRED / 407
     * - PJSIPSCREQUESTTIMEOUT / 408
     * - PJSIPSCGONE / 410
     * - PJSIPSCREQUESTENTITYTOOLARGE / 413
     * - PJSIPSCREQUESTURITOOLONG / 414
     * - PJSIPSCUNSUPPORTEDMEDIATYPE / 415
     * - PJSIPSCUNSUPPORTEDURISCHEME / 416
     * - PJSIPSCBADEXTENSION / 420
     * - PJSIPSCEXTENSIONREQUIRED / 421
     * - PJSIPSCSESSIONTIMERTOOSMALL / 422
     * - PJSIPSCINTERVALTOOBRIEF / 423
     * - PJSIPSCTEMPORARILYUNAVAILABLE / 480
     * - PJSIPSCCALLTSXDOESNOTEXIST / 481
     * - PJSIPSCLOOPDETECTED / 482
     * - PJSIPSCTOOMANYHOPS / 483
     * - PJSIPSCADDRESSINCOMPLETE / 484
     * - PJSIPACAMBIGUOUS / 485
     * - PJSIPSCBUSYHERE / 486
     * - PJSIPSCREQUESTTERMINATED / 487
     * - PJSIPSCNOTACCEPTABLEHERE / 488
     * - PJSIPSCBADEVENT / 489
     * - PJSIPSCREQUESTUPDATED / 490
     * - PJSIPSCREQUESTPENDING / 491
     * - PJSIPSCUNDECIPHERABLE / 493
     * - PJSIPSCINTERNALSERVERERROR / 500
     * - PJSIPSCNOTIMPLEMENTED / 501
     * - PJSIPSCBADGATEWAY / 502
     * - PJSIPSCSERVICEUNAVAILABLE / 503
     * - PJSIPSCSERVERTIMEOUT / 504
     * - PJSIPSCVERSIONNOTSUPPORTED / 505
     * - PJSIPSCMESSAGETOOLARGE / 513
     * - PJSIPSCPRECONDITIONFAILURE / 580
     * - PJSIPSCBUSYEVERYWHERE / 600
     * - PJSIPSCDECLINE / 603
     * - PJSIPSCDOESNOTEXISTANYWHERE / 604
     * - PJSIPSCNOTACCEPTABLEANYWHERE / 606
     * - PJSIPSCTSXTIMEOUT / PJSIPSCREQUESTTIMEOUT
     * - PJSIPSCTSXTRANSPORTERROR / PJSIPSCSERVICEUNAVAILABLE
     *
     * @returns {string}
     */
    getLastStatusCode(): string;
    /**
     * The reason phrase describing the last status.
     *
     * @returns {string}
     */
    getLastReason(): string;
    getMedia(): mediaInterface[];
    getProvisionalMedia(): mediaInterface[];
    /**
     * Format seconds to "MM:SS" format.
     *
     * @public
     * @returns {string}
     */
    formatTime(seconds: number): string;
}
export { Call };
export default Call;
