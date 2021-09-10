/**
 * Enumeration of video keyframe request methods. Keyframe request is triggered by decoder, usually when the incoming
 * video stream cannot be decoded properly due to missing video keyframe.
 */
export let PJSUAVideoReqKeyframeMethod;
/**
 * Flags to be given to various call APIs. More than one flags may be specified by bitmasking them.
 */

(function (PJSUAVideoReqKeyframeMethod) {
  PJSUAVideoReqKeyframeMethod["PJSUAVIDREQKEYFRAMESIPINFO"] = "PJSUAVIDREQKEYFRAMESIPINFO";
  PJSUAVideoReqKeyframeMethod["PJSUAVIDREQKEYFRAMERTCPPLI"] = "PJSUAVIDREQKEYFRAMERTCPPLI";
})(PJSUAVideoReqKeyframeMethod || (PJSUAVideoReqKeyframeMethod = {}));

export let PJSUACallFlags;

(function (PJSUACallFlags) {
  PJSUACallFlags["PJSUACALLUNHOLD"] = "PJSUACALLUNHOLD";
  PJSUACallFlags["PJSUACALLUPDATECONTACT"] = "PJSUACALLUPDATECONTACT";
  PJSUACallFlags["PJSUACALLINCLUDEDISABLEDMEDIA"] = "PJSUACALLINCLUDEDISABLEDMEDIA";
  PJSUACallFlags["PJSUACALLNOSDPOFFER"] = "PJSUACALLNOSDPOFFER";
  PJSUACallFlags["PJSUACALLREINITMEDIA"] = "PJSUACALLREINITMEDIA";
  PJSUACallFlags["PJSUACALLUPDATEVIA"] = "PJSUACALLUPDATEVIA";
  PJSUACallFlags["PJSUACALLUPDATETARGET"] = "PJSUACALLUPDATETARGET";
})(PJSUACallFlags || (PJSUACallFlags = {}));

export let PJSIPCallLastStatusCode;
/**
 * This enumeration describes invite session state
 */

(function (PJSIPCallLastStatusCode) {
  PJSIPCallLastStatusCode["PJSIP_SC_TRYING"] = "PJSIP_SC_TRYING";
  PJSIPCallLastStatusCode["PJSIP_SC_RINGING"] = "PJSIP_SC_RINGING";
  PJSIPCallLastStatusCode["PJSIP_SC_CALL_BEING_FORWARDED"] = "PJSIP_SC_CALL_BEING_FORWARDED";
  PJSIPCallLastStatusCode["PJSIP_SC_QUEUED"] = "PJSIP_SC_QUEUED";
  PJSIPCallLastStatusCode["PJSIP_SC_PROGRESS"] = "PJSIP_SC_PROGRESS";
  PJSIPCallLastStatusCode["PJSIP_SC_OK"] = "PJSIP_SC_OK";
  PJSIPCallLastStatusCode["PJSIP_SC_ACCEPTED"] = "PJSIP_SC_ACCEPTED";
  PJSIPCallLastStatusCode["PJSIP_SC_MULTIPLE_CHOICES"] = "PJSIP_SC_MULTIPLE_CHOICES";
  PJSIPCallLastStatusCode["PJSIP_SC_MOVED_PERMANENTLY"] = "PJSIP_SC_MOVED_PERMANENTLY";
  PJSIPCallLastStatusCode["PJSIP_SC_MOVED_TEMPORARILY"] = "PJSIP_SC_MOVED_TEMPORARILY";
  PJSIPCallLastStatusCode["PJSIP_SC_USE_PROXY"] = "PJSIP_SC_USE_PROXY";
  PJSIPCallLastStatusCode["PJSIP_SC_ALTERNATIVE_SERVICE"] = "PJSIP_SC_ALTERNATIVE_SERVICE";
  PJSIPCallLastStatusCode["PJSIP_SC_BAD_REQUEST"] = "PJSIP_SC_BAD_REQUEST";
  PJSIPCallLastStatusCode["PJSIP_SC_UNAUTHORIZED"] = "PJSIP_SC_UNAUTHORIZED";
  PJSIPCallLastStatusCode["PJSIP_SC_PAYMENT_REQUIRED"] = "PJSIP_SC_PAYMENT_REQUIRED";
  PJSIPCallLastStatusCode["PJSIP_SC_FORBIDDEN"] = "PJSIP_SC_FORBIDDEN";
  PJSIPCallLastStatusCode["PJSIP_SC_NOT_FOUND"] = "PJSIP_SC_NOT_FOUND";
  PJSIPCallLastStatusCode["PJSIP_SC_METHOD_NOT_ALLOWED"] = "PJSIP_SC_METHOD_NOT_ALLOWED";
  PJSIPCallLastStatusCode["PJSIP_SC_NOT_ACCEPTABLE"] = "PJSIP_SC_NOT_ACCEPTABLE";
  PJSIPCallLastStatusCode["PJSIP_SC_PROXY_AUTHENTICATION_REQUIRED"] = "PJSIP_SC_PROXY_AUTHENTICATION_REQUIRED";
  PJSIPCallLastStatusCode["PJSIP_SC_REQUEST_TIMEOUT"] = "PJSIP_SC_REQUEST_TIMEOUT";
  PJSIPCallLastStatusCode["PJSIP_SC_GONE"] = "PJSIP_SC_GONE";
  PJSIPCallLastStatusCode["PJSIP_SC_REQUEST_ENTITY_TOO_LARGE"] = "PJSIP_SC_REQUEST_ENTITY_TOO_LARGE";
  PJSIPCallLastStatusCode["PJSIP_SC_REQUEST_URI_TOO_LONG"] = "PJSIP_SC_REQUEST_URI_TOO_LONG";
  PJSIPCallLastStatusCode["PJSIP_SC_UNSUPPORTED_MEDIA_TYPE"] = "PJSIP_SC_UNSUPPORTED_MEDIA_TYPE";
  PJSIPCallLastStatusCode["PJSIP_SC_UNSUPPORTED_URI_SCHEME"] = "PJSIP_SC_UNSUPPORTED_URI_SCHEME";
  PJSIPCallLastStatusCode["PJSIP_SC_BAD_EXTENSION"] = "PJSIP_SC_BAD_EXTENSION";
  PJSIPCallLastStatusCode["PJSIP_SC_EXTENSION_REQUIRED"] = "PJSIP_SC_EXTENSION_REQUIRED";
  PJSIPCallLastStatusCode["PJSIP_SC_SESSION_TIMER_TOO_SMALL"] = "PJSIP_SC_SESSION_TIMER_TOO_SMALL";
  PJSIPCallLastStatusCode["PJSIP_SC_INTERVAL_TOO_BRIEF"] = "PJSIP_SC_INTERVAL_TOO_BRIEF";
  PJSIPCallLastStatusCode["PJSIP_SC_TEMPORARILY_UNAVAILABLE"] = "PJSIP_SC_TEMPORARILY_UNAVAILABLE";
  PJSIPCallLastStatusCode["PJSIP_SC_CALL_TSX_DOES_NOT_EXIST"] = "PJSIP_SC_CALL_TSX_DOES_NOT_EXIST";
  PJSIPCallLastStatusCode["PJSIP_SC_LOOP_DETECTED"] = "PJSIP_SC_LOOP_DETECTED";
  PJSIPCallLastStatusCode["PJSIP_SC_TOO_MANY_HOPS"] = "PJSIP_SC_TOO_MANY_HOPS";
  PJSIPCallLastStatusCode["PJSIP_SC_ADDRESS_INCOMPLETE"] = "PJSIP_SC_ADDRESS_INCOMPLETE";
  PJSIPCallLastStatusCode["PJSIP_AC_AMBIGUOUS"] = "PJSIP_AC_AMBIGUOUS";
  PJSIPCallLastStatusCode["PJSIP_SC_BUSY_HERE"] = "PJSIP_SC_BUSY_HERE";
  PJSIPCallLastStatusCode["PJSIP_SC_REQUEST_TERMINATED"] = "PJSIP_SC_REQUEST_TERMINATED";
  PJSIPCallLastStatusCode["PJSIP_SC_NOT_ACCEPTABLE_HERE"] = "PJSIP_SC_NOT_ACCEPTABLE_HERE";
  PJSIPCallLastStatusCode["PJSIP_SC_BAD_EVENT"] = "PJSIP_SC_BAD_EVENT";
  PJSIPCallLastStatusCode["PJSIP_SC_REQUEST_UPDATED"] = "PJSIP_SC_REQUEST_UPDATED";
  PJSIPCallLastStatusCode["PJSIP_SC_REQUEST_PENDING"] = "PJSIP_SC_REQUEST_PENDING";
  PJSIPCallLastStatusCode["PJSIP_SC_UNDECIPHERABLE"] = "PJSIP_SC_UNDECIPHERABLE";
  PJSIPCallLastStatusCode["PJSIP_SC_INTERNAL_SERVER_ERROR"] = "PJSIP_SC_INTERNAL_SERVER_ERROR";
  PJSIPCallLastStatusCode["PJSIP_SC_NOT_IMPLEMENTED"] = "PJSIP_SC_NOT_IMPLEMENTED";
  PJSIPCallLastStatusCode["PJSIP_SC_BAD_GATEWAY"] = "PJSIP_SC_BAD_GATEWAY";
  PJSIPCallLastStatusCode["PJSIP_SC_SERVICE_UNAVAILABLE"] = "PJSIP_SC_SERVICE_UNAVAILABLE";
  PJSIPCallLastStatusCode["PJSIP_SC_SERVER_TIMEOUT"] = "PJSIP_SC_SERVER_TIMEOUT";
  PJSIPCallLastStatusCode["PJSIP_SC_VERSION_NOT_SUPPORTED"] = "PJSIP_SC_VERSION_NOT_SUPPORTED";
  PJSIPCallLastStatusCode["PJSIP_SC_MESSAGE_TOO_LARGE"] = "PJSIP_SC_MESSAGE_TOO_LARGE";
  PJSIPCallLastStatusCode["PJSIP_SC_PRECONDITION_FAILURE"] = "PJSIP_SC_PRECONDITION_FAILURE";
  PJSIPCallLastStatusCode["PJSIP_SC_BUSY_EVERYWHERE"] = "PJSIP_SC_BUSY_EVERYWHERE";
  PJSIPCallLastStatusCode["PJSIP_SC_DECLINE"] = "PJSIP_SC_DECLINE";
  PJSIPCallLastStatusCode["PJSIP_SC_DOES_NOT_EXIST_ANYWHERE"] = "PJSIP_SC_DOES_NOT_EXIST_ANYWHERE";
  PJSIPCallLastStatusCode["PJSIP_SC_NOT_ACCEPTABLE_ANYWHERE"] = "PJSIP_SC_NOT_ACCEPTABLE_ANYWHERE";
})(PJSIPCallLastStatusCode || (PJSIPCallLastStatusCode = {}));

export let PJSIPInviteState;

(function (PJSIPInviteState) {
  PJSIPInviteState["PJSIPInvStateNull"] = "PJSIP_INV_STATE_NULL";
  PJSIPInviteState["PJSIPInvStateCalling"] = "PJSIP_INV_STATE_CALLING";
  PJSIPInviteState["PJSIPInvStateIncoming"] = "PJSIP_INV_STATE_INCOMING";
  PJSIPInviteState["PJSIPInvStateEarly"] = "PJSIP_INV_STATE_EARLY";
  PJSIPInviteState["PJSIPInvStateConnecting"] = "PJSIP_INV_STATE_CONNECTING";
  PJSIPInviteState["PJSIPInvStateConfirmed"] = "PJSIP_INV_STATE_CONFIRMED";
  PJSIPInviteState["PJSIPInvStateDisconnected"] = "PJSIP_INV_STATE_DISCONNECTED";
})(PJSIPInviteState || (PJSIPInviteState = {}));

/**
 * This class describes the information and current status of a call.
 */
class Call {
  constructor(props) {
    this.id = props.id;
    this.callId = props.callId;
    this.accountId = props.accountId;
    this.localContact = props.localContact;
    this.localUri = props.localUri;
    this.remoteContact = props.remoteContact;
    this.remoteUri = props.remoteUri;
    this.state = props.state;
    this.stateText = props.stateText;
    this.held = props.held;
    this.muted = props.muted;
    this.speaker = props.speaker;
    this.connectDuration = props.connectDuration;
    this.totalDuration = props.totalDuration;
    this.remoteOfferer = props.remoteOfferer;
    this.remoteAudioCount = props.remoteAudioCount;
    this.remoteVideoCount = props.remoteVideoCount;
    this.audioCount = props.audioCount;
    this.videoCount = props.videoCount;
    this.lastStatusCode = props.lastStatusCode;
    this.lastReason = props.lastReason;
    this.media = props.media;
    this.provisionalMedia = props.provisionalMedia;
    this.constructionTime = Math.round(new Date().getTime() / 1000);
  }
  /**
   * Call identification.
   * @returns {int}
   */


  getId() {
    return this.id;
  }
  /**
   * The account ID where this call belongs.
   * @returns {int}
   */


  getAccountId() {
    return this.accountId;
  }
  /**
   * Dialog Call-ID string.
   *
   * @returns {String}
   */


  getCallId() {
    return this.callId;
  }
  /**
   * Up-to-date call duration in seconds.
   * Use local time to calculate actual call duration.
   *
   * @public
   * @returns {int}
   */


  getTotalDuration() {
    let time = Math.round(new Date().getTime() / 1000);
    let offset = time - this.constructionTime;
    return this.totalDuration + offset;
  }
  /**
   * Up-to-date call connected duration (zero when call is not established)
   *
   * @returns {int}
   */


  getConnectDuration() {
    if (this.connectDuration < 0 || this.state == PJSIPInviteState.PJSIPInvStateDisconnected) {
      return this.connectDuration;
    }

    let time = Math.round(new Date().getTime() / 1000);
    let offset = time - this.constructionTime;
    return this.connectDuration + offset;
  }
  /**
   * Call duration in "MM:SS" format.
   *
   * @public
   * @returns {string}
   */


  getFormattedTotalDuration() {
    return this.formatTime(this.getTotalDuration());
  }
  /**
   * Call duration in "MM:SS" format.
   *
   * @public
   * @returns {string}
   */


  getFormattedConnectDuration() {
    return this.formatTime(this.getConnectDuration());
  }
  /**
   * Local Contact.
   * TODO: Provide example
   * @returns {String}
   */


  getLocalContact() {
    return this.localContact;
  }
  /**
   * Local URI.
   * TODO: Provide example
   * @returns {String}
   */


  getLocalUri() {
    return this.localUri;
  }
  /**
   * Remote contact.
   * TODO: Provide example
   * @returns {String}
   */


  getRemoteContact() {
    return this.remoteContact;
  }
  /**
   * Remote URI.
   * TODO: Provide example
   * @returns {String}
   */


  getRemoteUri() {
    return this.remoteUri;
  }
  /**
   * Callee name. Could be null if no name specified in URI.
   * @returns {String}
   */


  getRemoteName() {
    let remoteName = null;

    if (this.remoteUri) {
      let match = this.remoteUri.match(/"([^"]+)" <sip:([^@]+)@/);

      if (match) {
        return match[1];
      }
    }

    return remoteName;
  }
  /**
   * Callee number
   * @returns {String}
   */


  getRemoteNumber() {
    let remoteNumber = null;

    if (this.remoteUri) {
      let match = this.remoteUri.match(/"([^"]+)" <sip:([^@]+)@/);

      if (match) {
        return match[2];
      } else {
        match = this.remoteUri.match(/sip:([^@]+)@/);

        if (match) {
          return match[1];
        }
      }
    }

    return remoteNumber;
  }
  /**
   * @returns {String}
   */


  getRemoteFormattedNumber() {
    if (this.getRemoteName() && this.getRemoteNumber()) {
      return `${this.getRemoteName()} <${this.getRemoteNumber()}>`;
    } else if (this.getRemoteNumber()) {
      return this.getRemoteNumber();
    } else {
      return this.remoteUri;
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


  getState() {
    return this.state;
  }
  /**
   * Text describing the state.
   *
   * @returns {String}
   */


  getStateText() {
    return this.stateText;
  }

  isHeld() {
    return this.held;
  }

  isMuted() {
    return this.muted;
  }

  isSpeaker() {
    return this.speaker;
  }

  isTerminated() {
    return this.state === PJSIPInviteState.PJSIPInvStateDisconnected;
  }
  /**
   * Flag if remote was SDP offerer
   * @returns {boolean}
   */


  getRemoteOfferer() {
    // TODO Verify whether boolean value
    return this.remoteOfferer;
  }
  /**
   * Number of audio streams offered by remote.
   * @returns {int}
   */


  getRemoteAudioCount() {
    return this.remoteAudioCount;
  }
  /**
   * Number of video streams offered by remote.
   * @returns {int}
   */


  getRemoteVideoCount() {
    return this.remoteVideoCount;
  }
  /**
   * Number of simultaneous active audio streams for this call. If zero - audio is disabled in this call.
   * @returns {int}
   */


  getAudioCount() {
    return this.audioCount;
  }
  /**
   * Number of simultaneous active video streams for this call. If zero - video is disabled in this call.
   * @returns {*}
   */


  getVideoCount() {
    return this.videoCount;
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


  getLastStatusCode() {
    return this.lastStatusCode;
  }
  /**
   * The reason phrase describing the last status.
   *
   * @returns {string}
   */


  getLastReason() {
    return this.lastReason;
  }

  getMedia() {
    return this.media;
  }

  getProvisionalMedia() {
    return this.provisionalMedia;
  }
  /**
   * Format seconds to "MM:SS" format.
   *
   * @public
   * @returns {string}
   */


  formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) {
      return '00:00';
    }

    const hours = parseInt(String(seconds / 3600)) % 24;
    const minutes = parseInt(String(seconds / 60)) % 60;
    let result = '';
    seconds = seconds % 60;

    if (hours > 0) {
      result += (hours < 10 ? '0' + hours : hours) + ':';
    }

    result += (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    return result;
  }

}

export { Call };
export default Call;
//# sourceMappingURL=Call.js.map