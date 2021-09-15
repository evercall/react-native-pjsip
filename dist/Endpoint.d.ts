import { EventEmitter } from 'events';
import Call, { CallData, PJSUACallFlags, PJSUAVideoReqKeyframeMethod } from './Call';
import { MessageData } from './Message';
import Account, { IAccount } from './Account';
/**
 * @example { 'speex/8000': 1 }
 */
export declare type Codec = {
    /**
     * @example speex/8000
     */
    [key: string]: number;
};
export declare enum Orientation {
    PJMEDIA_ORIENT_NATURAL = "PJMEDIA_ORIENT_NATURAL",
    PJMEDIA_ORIENT_ROTATE_90DEG = "PJMEDIA_ORIENT_ROTATE_90DEG",
    PJMEDIA_ORIENT_ROTATE_270DEG = "PJMEDIA_ORIENT_ROTATE_270DEG",
    PJMEDIA_ORIENT_ROTATE_180DEG = "PJMEDIA_ORIENT_ROTATE_180DEG"
}
/**
 * Not really documented.
 */
export interface StartConfiguration {
    service: {
        /** List of stun servers */
        stun: string[];
    };
}
export interface PJSIPMessageData {
    /**
     * This structure describes additional information to be sent with
     * outgoing SIP message. It can (optionally) be specified for example
     * with #pjsua_call_make_call(), #pjsua_call_answer(), #pjsua_call_hangup(),
     * #pjsua_call_set_hold(), #pjsua_call_send_im(), and many more.
     *
     * Application MUST call #pjsua_msg_data_init() to initialize this
     * structure before setting its values.
     */
    targetURI?: string;
    /**
     * Additional message headers as linked list. Application can add
     * headers to the list by creating the header, either from the heap/pool
     * or from temporary local variable, and add the header using
     * linked list operation. See pjsua_app.c for some sample codes.
     */
    headers?: Object[];
    /**
     * MIME type of optional message body.
     */
    contentType?: string;
    /**
     * Optional message body to be added to the message, only when the
     * message doesn't have a body.
     */
    body?: string;
}
export interface PJSIPCallSettings {
    /**
     * Number of simultaneous active audio streams for this call. Setting
     * this to zero will disable audio in this call.
     *
     * @default 1
     */
    audioCount?: number;
    /**
     * Number of simultaneous active video streams for this call. Setting
     * this to zero will disable video in this call.
     *
     * @default 1 (if video feature is enabled, otherwise it is zero)
     */
    videoCount?: number;
    /**
     * Bitmask of #pjsua_call_flag constants.
     *
     * @default PJSUA_CALL_INCLUDE_DISABLED_MEDIA
     */
    flag?: PJSUACallFlags;
    /**
     * This flag controls what methods to request keyframe are allowed on
     * the call. Value is bitmask of #pjsua_vid_req_keyframe_method.
     *
     * @default PJSUA_VID_REQ_KEYFRAME_SIP_INFO
     */
    requestKeyframeMethod?: PJSUAVideoReqKeyframeMethod;
}
export default class Endpoint extends EventEmitter {
    constructor();
    /**
     * Returns a Promise that will be resolved once PjSip module is initialized.
     * Do not call any function while library is not initialized.
     */
    start(configuration: StartConfiguration): Promise<{
        accounts: Account[];
        calls: Call[];
    }>;
    stop(): Promise<void>;
    updateStunServers(accountId: number, stunServerList: string[]): Promise<void>;
    /**
     * Add a new account. If registration is configured for this account, this function would also start the
     * SIP registration session with the SIP registrar server. This SIP registration session will be maintained
     * internally by the library, and application doesn't need to do anything to maintain the registration session.
     */
    createAccount(configuration: IAccount): Promise<Account>;
    /**
     * Update registration or perform unregistration.
     * If registration is configured for this account, then initial SIP REGISTER will be sent when the account is added.
     * Application normally only need to call this function if it wants to manually update the registration or to unregister from the server.
     */
    registerAccount(account: Account, renew?: boolean): Promise<void>;
    /**
     * Delete an account. This will unregister the account from the SIP server, if necessary, and terminate server side presence subscriptions associated with this account.
     */
    deleteAccount(account: Account): Promise<void>;
    /**
     * Gets list of all accounts
     */
    getAccounts(): Promise<Account[]>;
    /**
     * Gets an account by id
     */
    getAccount(accountId: number): Promise<Account>;
    /**
     * Gets list of all calls
     */
    getCalls(): Promise<Call[]>;
    /**
     * Gets an account by id
     */
    getCall(callId: number): Promise<Call>;
    /**
     * Make an outgoing call to the specified URI.
     */
    makeCall(account: Account, destination: string, callSettings?: PJSIPCallSettings, msgData?: PJSIPMessageData): Promise<Call>;
    /**
     * Send response to incoming INVITE request.
     */
    answerCall(callId: number): Promise<void>;
    /**
     * Hangup call by using method that is appropriate according to the call state.
     */
    hangupCall(callId: number): Promise<void>;
    /**
     * Hangup call by using Decline (603) method.
     */
    declineCall(callId: number): Promise<void>;
    /**
     * Put the specified call on hold. This will send re-INVITE with the appropriate SDP to inform remote that the call is being put on hold.
     */
    holdCall(callId: number): Promise<void>;
    /**
     * Release the specified call from hold. This will send re-INVITE with the appropriate SDP to inform remote that the call is resumed.
     */
    unholdCall(callId: number): Promise<void>;
    muteCall(callId: number): Promise<void>;
    unMuteCall(callId: number): Promise<void>;
    useSpeaker(): Promise<void>;
    useEarpiece(): Promise<void>;
    /**
     * Initiate call transfer to the specified address.
     * This function will send REFER request to instruct remote call party to initiate a new INVITE session to the specified destination/target.
     */
    xferCall(account: Account, callId: number, destination: string): Promise<void>;
    /**
     * Initiate attended call transfer.
     * This function will send REFER request to instruct remote call party to initiate new INVITE session to the URL of destCall.
     * The party at destCall then should "replace" the call with us with the new call from the REFER recipient.
     */
    xferReplacesCall(callId: number, destCallId: number): Promise<void>;
    /**
     * Redirect (forward) specified call to destination.
     * This function will send response to INVITE to instruct remote call party to redirect incoming call to the specified destination/target.
     */
    redirectCall(account: Account, callId: number, destination: string): Promise<void>;
    /**
     * Send DTMF digits to remote using RFC 2833 payload formats.
     */
    dtmfCall(callId: number, digits: string): Promise<void>;
    activateAudioSession(): Promise<void>;
    deactivateAudioSession(): Promise<void>;
    changeOrientation(orientation: Orientation): Promise<void>;
    changeCodecSettings(codecSettings: Object): Promise<void>;
    /**
     * @fires Endpoint#registration_changed
     * @private
     * @param data {Object}
     */
    _onRegistrationChanged(data: IAccount): void;
    /**
     * @fires Endpoint#call_received
     * @private
     * @param data {Object}
     */
    _onCallReceived(data: CallData): void;
    /**
     * @fires Endpoint#call_changed
     * @private
     * @param data {Object}
     */
    _onCallChanged(data: CallData): void;
    /**
     * @fires Endpoint#call_terminated
     * @private
     * @param data {Object}
     */
    _onCallTerminated(data: CallData): void;
    /**
     * @fires Endpoint#call_screen_locked
     * @private
     * @param lock bool
     */
    _onCallScreenLocked(lock: boolean): void;
    /**
     * @fires Endpoint#message_received
     * @private
     * @param data {Object}
     */
    _onMessageReceived(data: MessageData): void;
    /**
     * @fires Endpoint#connectivity_changed
     * @private
     * @param available bool
     */
    _onConnectivityChanged(available: boolean): void;
    /**
     * Normalize Destination URI
     *
     * @param account
     * @param destination {string}
     * @returns {string}
     * @private
     */
    _normalize(account: Account, destination: string): string;
}
