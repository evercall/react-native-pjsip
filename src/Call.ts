/**
 * Enumeration of video keyframe request methods. Keyframe request is triggered by decoder, usually when the incoming
 * video stream cannot be decoded properly due to missing video keyframe.
 */
export enum PJSUAVideoReqKeyframeMethod {
  /**
   * Requesting keyframe via SIP INFO message. Note that incoming keyframe request via SIP INFO will always be handled
   * even if this flag is unset.
   */
  PJSUAVIDREQKEYFRAMESIPINFO = 'PJSUAVIDREQKEYFRAMESIPINFO',
  /**
   * Requesting keyframe via Picture Loss Indication of RTCP feedback. This is currently not supported.
   */
  PJSUAVIDREQKEYFRAMERTCPPLI = 'PJSUAVIDREQKEYFRAMERTCPPLI'
}

/**
 * Flags to be given to various call APIs. More than one flags may be specified by bitmasking them.
 */
export enum PJSUACallFlags {
  /**
   * When the call is being put on hold, specify this flag to unhold it. This flag is only valid for
   * pjsuacallreinvite() and pjsuacallupdate(). Note: for compatibility reason, this flag must have value of 1
   * because previously the unhold option is specified as boolean value.
   */
  PJSUACALLUNHOLD = 'PJSUACALLUNHOLD',

  /**
   * Update the local invite session's contact with the contact URI from the account. This flag is only valid for
   * pjsuacallsethold2(), pjsuacallreinvite() and pjsuacallupdate(). This flag is useful in IP address change
   * situation, after the local account's Contact has been updated (typically with re-registration) use this flag to
   * update the invite session with the new Contact and to inform this new Contact to the remote peer with the outgoing
   * re-INVITE or UPDATE.
   */
  PJSUACALLUPDATECONTACT = 'PJSUACALLUPDATECONTACT',

  /**
   * Include SDP "m=" line with port set to zero for each disabled media (i.e when audcnt or vidcnt is set to zero).
   * This flag is only valid for pjsuacallmakecall(), pjsuacallreinvite(), and pjsuacallupdate().
   * Note that even this flag is applicable in pjsuacallreinvite() and pjsuacallupdate(), it will only take
   * effect when the re-INVITE/UPDATE operation regenerates SDP offer, such as changing audio or video count in
   * the call setting.
   */
  PJSUACALLINCLUDEDISABLEDMEDIA = 'PJSUACALLINCLUDEDISABLEDMEDIA',
  /**
   * Do not send SDP when sending INVITE or UPDATE. This flag is only valid for pjsuacallmakecall(),
   * pjsuacallreinvite()/reinvite2(), or pjsuacallupdate()/update2(). For re-invite/update, specifying
   * PJSUACALLUNHOLD will take precedence over this flag.
   */
  PJSUACALLNOSDPOFFER = 'PJSUACALLNOSDPOFFER',

  /**
   * Deinitialize and recreate media, including media transport. This flag is useful in IP address change situation,
   * if the media transport address (or address family) changes, for example during IPv4/IPv6 network handover.
   * This flag is only valid for pjsuacallreinvite()/reinvite2(), or pjsuacallupdate()/update2().
   *
   * Warning: If the re-INVITE/UPDATE fails, the old media will not be reverted.
   */
  PJSUACALLREINITMEDIA = 'PJSUACALLREINITMEDIA',

  /**
   * Update the local invite session's Via with the via address from the account. This flag is only valid for
   * pjsuacallsethold2(), pjsuacallreinvite() and pjsuacallupdate(). Similar to the flag
   * PJSUACALLUPDATECONTACT above, this flag is useful in IP address change situation, after the local account's
   * Via has been updated (typically with re-registration).
   */
  PJSUACALLUPDATEVIA = 'PJSUACALLUPDATEVIA',

  /**
   * Update dialog target to URI specified in pjsuamsgdata.targeturi. This flag is only valid for
   * pjsuacallsethold(), pjsuacallreinvite(), and pjsuacallupdate(). This flag can be useful in IP address change
   * scenario where IP version has been changed and application needs to update target IP address.
   */
  PJSUACALLUPDATETARGET = 'PJSUACALLUPDATETARGET'

}

export enum PJSIPCallLastStatusCode {
  PJSIP_SC_TRYING = 'PJSIP_SC_TRYING',
  PJSIP_SC_RINGING = 'PJSIP_SC_RINGING',
  PJSIP_SC_CALL_BEING_FORWARDED = 'PJSIP_SC_CALL_BEING_FORWARDED',
  PJSIP_SC_QUEUED = 'PJSIP_SC_QUEUED',
  PJSIP_SC_PROGRESS = 'PJSIP_SC_PROGRESS',
  PJSIP_SC_OK = 'PJSIP_SC_OK',
  PJSIP_SC_ACCEPTED = 'PJSIP_SC_ACCEPTED',
  PJSIP_SC_MULTIPLE_CHOICES = 'PJSIP_SC_MULTIPLE_CHOICES',
  PJSIP_SC_MOVED_PERMANENTLY = 'PJSIP_SC_MOVED_PERMANENTLY',
  PJSIP_SC_MOVED_TEMPORARILY = 'PJSIP_SC_MOVED_TEMPORARILY',
  PJSIP_SC_USE_PROXY = 'PJSIP_SC_USE_PROXY',
  PJSIP_SC_ALTERNATIVE_SERVICE = 'PJSIP_SC_ALTERNATIVE_SERVICE',
  PJSIP_SC_BAD_REQUEST = 'PJSIP_SC_BAD_REQUEST',
  PJSIP_SC_UNAUTHORIZED = 'PJSIP_SC_UNAUTHORIZED',
  PJSIP_SC_PAYMENT_REQUIRED = 'PJSIP_SC_PAYMENT_REQUIRED',
  PJSIP_SC_FORBIDDEN = 'PJSIP_SC_FORBIDDEN',
  PJSIP_SC_NOT_FOUND = 'PJSIP_SC_NOT_FOUND',
  PJSIP_SC_METHOD_NOT_ALLOWED = 'PJSIP_SC_METHOD_NOT_ALLOWED',
  PJSIP_SC_NOT_ACCEPTABLE = 'PJSIP_SC_NOT_ACCEPTABLE',
  PJSIP_SC_PROXY_AUTHENTICATION_REQUIRED = 'PJSIP_SC_PROXY_AUTHENTICATION_REQUIRED',
  PJSIP_SC_REQUEST_TIMEOUT = 'PJSIP_SC_REQUEST_TIMEOUT',
  PJSIP_SC_GONE = 'PJSIP_SC_GONE',
  PJSIP_SC_REQUEST_ENTITY_TOO_LARGE = 'PJSIP_SC_REQUEST_ENTITY_TOO_LARGE',
  PJSIP_SC_REQUEST_URI_TOO_LONG = 'PJSIP_SC_REQUEST_URI_TOO_LONG',
  PJSIP_SC_UNSUPPORTED_MEDIA_TYPE = 'PJSIP_SC_UNSUPPORTED_MEDIA_TYPE',
  PJSIP_SC_UNSUPPORTED_URI_SCHEME = 'PJSIP_SC_UNSUPPORTED_URI_SCHEME',
  PJSIP_SC_BAD_EXTENSION = 'PJSIP_SC_BAD_EXTENSION',
  PJSIP_SC_EXTENSION_REQUIRED = 'PJSIP_SC_EXTENSION_REQUIRED',
  PJSIP_SC_SESSION_TIMER_TOO_SMALL = 'PJSIP_SC_SESSION_TIMER_TOO_SMALL',
  PJSIP_SC_INTERVAL_TOO_BRIEF = 'PJSIP_SC_INTERVAL_TOO_BRIEF',
  PJSIP_SC_TEMPORARILY_UNAVAILABLE = 'PJSIP_SC_TEMPORARILY_UNAVAILABLE',
  PJSIP_SC_CALL_TSX_DOES_NOT_EXIST = 'PJSIP_SC_CALL_TSX_DOES_NOT_EXIST',
  PJSIP_SC_LOOP_DETECTED = 'PJSIP_SC_LOOP_DETECTED',
  PJSIP_SC_TOO_MANY_HOPS = 'PJSIP_SC_TOO_MANY_HOPS',
  PJSIP_SC_ADDRESS_INCOMPLETE = 'PJSIP_SC_ADDRESS_INCOMPLETE',
  PJSIP_AC_AMBIGUOUS = 'PJSIP_AC_AMBIGUOUS',
  PJSIP_SC_BUSY_HERE = 'PJSIP_SC_BUSY_HERE',
  PJSIP_SC_REQUEST_TERMINATED = 'PJSIP_SC_REQUEST_TERMINATED',
  PJSIP_SC_NOT_ACCEPTABLE_HERE = 'PJSIP_SC_NOT_ACCEPTABLE_HERE',
  PJSIP_SC_BAD_EVENT = 'PJSIP_SC_BAD_EVENT',
  PJSIP_SC_REQUEST_UPDATED = 'PJSIP_SC_REQUEST_UPDATED',
  PJSIP_SC_REQUEST_PENDING = 'PJSIP_SC_REQUEST_PENDING',
  PJSIP_SC_UNDECIPHERABLE = 'PJSIP_SC_UNDECIPHERABLE',
  PJSIP_SC_INTERNAL_SERVER_ERROR = 'PJSIP_SC_INTERNAL_SERVER_ERROR',
  PJSIP_SC_NOT_IMPLEMENTED = 'PJSIP_SC_NOT_IMPLEMENTED',
  PJSIP_SC_BAD_GATEWAY = 'PJSIP_SC_BAD_GATEWAY',
  PJSIP_SC_SERVICE_UNAVAILABLE = 'PJSIP_SC_SERVICE_UNAVAILABLE',
  PJSIP_SC_SERVER_TIMEOUT = 'PJSIP_SC_SERVER_TIMEOUT',
  PJSIP_SC_VERSION_NOT_SUPPORTED = 'PJSIP_SC_VERSION_NOT_SUPPORTED',
  PJSIP_SC_MESSAGE_TOO_LARGE = 'PJSIP_SC_MESSAGE_TOO_LARGE',
  PJSIP_SC_PRECONDITION_FAILURE = 'PJSIP_SC_PRECONDITION_FAILURE',
  PJSIP_SC_BUSY_EVERYWHERE = 'PJSIP_SC_BUSY_EVERYWHERE',
  PJSIP_SC_DECLINE = 'PJSIP_SC_DECLINE',
  PJSIP_SC_DOES_NOT_EXIST_ANYWHERE = 'PJSIP_SC_DOES_NOT_EXIST_ANYWHERE',
  PJSIP_SC_NOT_ACCEPTABLE_ANYWHERE = 'PJSIP_SC_NOT_ACCEPTABLE_ANYWHERE'
}

/**
 * This enumeration describes invite session state
 */
export enum PJSIPInviteState {
  /** Before INVITE is sent or received */
  PJSIPInvStateNull = 'PJSIP_INV_STATE_NULL',
  /** After INVITE is sent */
  PJSIPInvStateCalling = 'PJSIP_INV_STATE_CALLING',
  /** After INVITE is received */
  PJSIPInvStateIncoming = 'PJSIP_INV_STATE_INCOMING',
  /** After response with To tag */
  PJSIPInvStateEarly = 'PJSIP_INV_STATE_EARLY',
  /** After 2xx is sent/received */
  PJSIPInvStateConnecting = 'PJSIP_INV_STATE_CONNECTING',
  /** After ACK is sent/received */
  PJSIPInvStateConfirmed = 'PJSIP_INV_STATE_CONFIRMED',
  /** Session is terminated */
  PJSIPInvStateDisconnected = 'PJSIP_INV_STATE_DISCONNECTED',
}

interface mediaInterface {
  dir: string,
  type: string,
  status: string,
  audioStream: {
    confSlot: number
  },
  videoStream: {
    captureDevice: number,
    windowId: number
  }
}

export interface CallData {
  id: number,
  callId: string,
  accountId: number,
  localContact: string,
  localUri: string,
  remoteContact: string,
  remoteUri: string,
  state: PJSIPInviteState,
  stateText: string,
  connectDuration: number,
  totalDuration: number,
  lastStatusCode: PJSIPCallLastStatusCode | null,
  lastReason: string,
  held: boolean,
  muted: boolean,
  speaker: boolean,
  remoteOfferer: number,
  remoteAudioCount: number,
  remoteVideoCount: number,
  audioCount: number,
  videoCount: number,
  media: mediaInterface[],
  provisionalMedia: mediaInterface[],
  constructionTime?: number
}

/**
 * This class describes the information and current status of a call.
 */
class Call {
  id: number
  callId: string
  accountId: number
  localContact: string
  localUri: string
  remoteContact: string
  remoteUri: string
  state: PJSIPInviteState
  stateText: string
  connectDuration: number
  totalDuration: number
  lastStatusCode: PJSIPCallLastStatusCode | null
  lastReason: string
  held: boolean
  muted: boolean
  speaker: boolean
  remoteOfferer: number
  remoteAudioCount: number
  remoteVideoCount: number
  audioCount: number
  videoCount: number
  media: mediaInterface[]
  provisionalMedia: mediaInterface[]
  constructionTime: number

  constructor (props: CallData) {
    this.id = props.id
    this.callId = props.callId
    this.accountId = props.accountId
    this.localContact = props.localContact
    this.localUri = props.localUri
    this.remoteContact = props.remoteContact
    this.remoteUri = props.remoteUri
    this.state = props.state
    this.stateText = props.stateText
    this.held = props.held
    this.muted = props.muted
    this.speaker = props.speaker
    this.connectDuration = props.connectDuration
    this.totalDuration = props.totalDuration
    this.remoteOfferer = props.remoteOfferer
    this.remoteAudioCount = props.remoteAudioCount
    this.remoteVideoCount = props.remoteVideoCount
    this.audioCount = props.audioCount
    this.videoCount = props.videoCount
    this.lastStatusCode = props.lastStatusCode
    this.lastReason = props.lastReason

    this.media = props.media
    this.provisionalMedia = props.provisionalMedia

    this.constructionTime = Math.round(new Date().getTime() / 1000)
  }

  /**
   * Call identification.
   * @returns {int}
   */
  getId (): number {
    return this.id
  }

  /**
   * The account ID where this call belongs.
   * @returns {int}
   */
  getAccountId (): number {
    return this.accountId
  }

  /**
   * Dialog Call-ID string.
   *
   * @returns {String}
   */
  getCallId (): string {
    return this.callId
  }

  /**
   * Up-to-date call duration in seconds.
   * Use local time to calculate actual call duration.
   *
   * @public
   * @returns {int}
   */
  getTotalDuration (): number {
    let time = Math.round(new Date().getTime() / 1000)
    let offset = time - this.constructionTime

    return this.totalDuration + offset
  }

  /**
   * Up-to-date call connected duration (zero when call is not established)
   *
   * @returns {int}
   */
  getConnectDuration (): number {
    if (this.connectDuration < 0 || this.state == PJSIPInviteState.PJSIPInvStateDisconnected) {
      return this.connectDuration
    }

    let time = Math.round(new Date().getTime() / 1000)
    let offset = time - this.constructionTime

    return this.connectDuration + offset
  }

  /**
   * Call duration in "MM:SS" format.
   *
   * @public
   * @returns {string}
   */
  getFormattedTotalDuration (): string {
    return this.formatTime(this.getTotalDuration())
  }

  /**
   * Call duration in "MM:SS" format.
   *
   * @public
   * @returns {string}
   */
  getFormattedConnectDuration (): string {
    return this.formatTime(this.getConnectDuration())
  }

  /**
   * Local Contact.
   * TODO: Provide example
   * @returns {String}
   */
  getLocalContact (): string {
    return this.localContact
  }

  /**
   * Local URI.
   * TODO: Provide example
   * @returns {String}
   */
  getLocalUri (): string {
    return this.localUri
  }

  /**
   * Remote contact.
   * TODO: Provide example
   * @returns {String}
   */
  getRemoteContact (): string {
    return this.remoteContact
  }

  /**
   * Remote URI.
   * TODO: Provide example
   * @returns {String}
   */
  getRemoteUri (): string {
    return this.remoteUri
  }

  /**
   * Callee name. Could be null if no name specified in URI.
   * @returns {String}
   */
  getRemoteName (): string {
    let remoteName = null

    if (this.remoteUri) {
      let match = this.remoteUri.match(/"([^"]+)" <sip:([^@]+)@/)

      if (match) {
        return match[1]
      }
    }

    return remoteName
  }

  /**
   * Callee number
   * @returns {String}
   */
  getRemoteNumber (): string {
    let remoteNumber = null

    if (this.remoteUri) {
      let match = this.remoteUri.match(/"([^"]+)" <sip:([^@]+)@/)

      if (match) {
        return match[2]
      } else {
        match = this.remoteUri.match(/sip:([^@]+)@/)

        if (match) {
          return match[1]
        }
      }
    }
    return remoteNumber
  }

  /**
   * @returns {String}
   */
  getRemoteFormattedNumber (): string {
    if (this.getRemoteName() && this.getRemoteNumber()) {
      return `${this.getRemoteName()} <${this.getRemoteNumber()}>`
    } else if (this.getRemoteNumber()) {
      return this.getRemoteNumber()
    } else {
      return this.remoteUri
    }
  }

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
  getState (): PJSIPInviteState {
    return this.state
  }

  /**
   * Text describing the state.
   *
   * @returns {String}
   */
  getStateText (): string {
    return this.stateText
  }

  isHeld (): boolean {
    return this.held
  }

  isMuted (): boolean {
    return this.muted
  }

  isSpeaker (): boolean {
    return this.speaker
  }

  isTerminated (): boolean {
    return this.state === PJSIPInviteState.PJSIPInvStateDisconnected
  }

  /**
   * Flag if remote was SDP offerer
   * @returns {boolean}
   */
  getRemoteOfferer (): number {
    // TODO Verify whether boolean value
    return this.remoteOfferer
  }

  /**
   * Number of audio streams offered by remote.
   * @returns {int}
   */
  getRemoteAudioCount (): number {
    return this.remoteAudioCount
  }

  /**
   * Number of video streams offered by remote.
   * @returns {int}
   */
  getRemoteVideoCount (): number {
    return this.remoteVideoCount
  }

  /**
   * Number of simultaneous active audio streams for this call. If zero - audio is disabled in this call.
   * @returns {int}
   */
  getAudioCount (): number {
    return this.audioCount
  }

  /**
   * Number of simultaneous active video streams for this call. If zero - video is disabled in this call.
   * @returns {*}
   */
  getVideoCount (): number {
    return this.videoCount
  }

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
  getLastStatusCode (): string {
    return this.lastStatusCode
  }

  /**
   * The reason phrase describing the last status.
   *
   * @returns {string}
   */
  getLastReason (): string {
    return this.lastReason
  }

  getMedia (): mediaInterface[] {
    return this.media
  }

  getProvisionalMedia (): mediaInterface[] {
    return this.provisionalMedia
  }

  /**
   * Format seconds to "MM:SS" format.
   *
   * @public
   * @returns {string}
   */
  formatTime (seconds: number): string {
    if (isNaN(seconds) || seconds < 0) {
      return '00:00'
    }
    const hours = parseInt(String(seconds / 3600)) % 24
    const minutes = parseInt(String(seconds / 60)) % 60
    let result = ''
    seconds = seconds % 60

    if (hours > 0) {
      result += (hours < 10 ? '0' + hours : hours) + ':'
    }

    result += (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
    return result
  }
}

export { Call }

export default Call
