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
  /**
   * Call identification.
   */

  /**
   * The account ID where this call belongs.
   */

  /**
   * Dialog Call-ID string.
   */

  /**
   * Local Contact.
   * TODO: Provide example
   */

  /**
   * Local URI.
   * TODO: Provide example
   */

  /**
   * Remote contact.
   * TODO: Provide example
   * @returns {String}
   */

  /**
   * Remote URI.
   * TODO: Provide example
   */

  /**
   * Invite session state.
   */

  /**
   * Text describing the state.
   */

  /**
   * Last status code heard, which can be used as cause code
   */

  /**
   * The reason phrase describing the last status.
   */

  /**
   * Flag if remote was SDP offerer
   */

  /**
   * Number of audio streams offered by remote.
   */

  /**
   * Number of video streams offered by remote.
   */

  /**
   * Number of simultaneous active audio streams for this call. If zero - audio is disabled in this call.
   */

  /**
   * Number of simultaneous active video streams for this call. If zero - video is disabled in this call.
   */
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
   * Up-to-date call duration in seconds.
   * Use local time to calculate actual call duration.
   */


  getTotalDuration() {
    let time = Math.round(new Date().getTime() / 1000);
    let offset = time - this.constructionTime;
    return this.totalDuration + offset;
  }
  /**
   * Up-to-date call connected duration (zero when call is not established)
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
   * Call duration in "HH:MM:SS" format.
   */


  getFormattedTotalDuration() {
    return this.formatTime(this.getTotalDuration());
  }
  /**
   * Call duration in "HH:MM:SS" format.
   */


  getFormattedConnectDuration() {
    return this.formatTime(this.getConnectDuration());
  }
  /**
   * Callee name. Could be null if no name specified in URI.
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

  getRemoteFormattedNumber() {
    if (this.getRemoteName() && this.getRemoteNumber()) {
      return `${this.getRemoteName()} <${this.getRemoteNumber()}>`;
    } else if (this.getRemoteNumber()) {
      return this.getRemoteNumber();
    } else {
      return this.remoteUri;
    }
  }

  isTerminated() {
    return this.state === PJSIPInviteState.PJSIPInvStateDisconnected;
  }
  /**
   * Format seconds to "HH:MM:SS" format.
   */


  formatTime(seconds) {
    return new Date(seconds * 1000).toISOString().substr(11, 8);
  }

}

export { Call };
export default Call;
//# sourceMappingURL=Call.js.map