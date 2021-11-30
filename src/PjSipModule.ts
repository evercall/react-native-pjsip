import { IAccount, IAccountConfig } from './Account'
import { CallData, Orientation, PJSIPCallSettings, PJSIPMessageData, StartConfiguration } from './index'
import { NativeModules } from 'react-native'

interface PjSipModuleInterface {
  start: (config: StartConfiguration, callBack: (success: boolean, data: {
    calls: CallData[],
    accounts: IAccount[],
    settings: {
      codecs: string[]
    },
    connectivity: boolean
  }) => void) => void,
  stop: (callBack: (success: boolean) => void) => void,
  updateStunServers: (accountId: number, stunServerList: string[], callBack: (success: boolean) => void) => void;
  createAccount: (config: IAccountConfig, callBack: (success: boolean, account: IAccount) => void) => void;
  registerAccount: (accountId: number, renew: boolean, callBack: (success: boolean, reason: string) => void) => void;
  deleteAccount: (accountId: number, callBack: (success: boolean) => void) => void;
  getAccounts: (callBack: (success: boolean, data: IAccount[]) => void) => void;
  getAccount: (accountId: number, callBack: (success: boolean, data: IAccount | string) => void) => void;
  getCalls: (callBack: (success: boolean, data: CallData[]) => void) => void;
  getCall: (callId: number, callBack: (success: boolean, data: CallData | string) => void) => void;
  makeCall: (accountId: number, destination: string, callSettings: PJSIPCallSettings, messageData: PJSIPMessageData, callBack: (success: boolean, data: CallData | string) => void) => void;
  answerCall: (callId: number, callBack: (success: boolean, reason: string) => void) => void;
  hangupCall: (callId: number, callBack: (success: boolean, reason: string) => void) => void;
  declineCall: (callId: number, callBack: (success: boolean, reason: string) => void) => void;
  holdCall: (callId: number, callBack: (success: boolean, reason: string) => void) => void;
  unholdCall: (callId: number, callBack: (success: boolean, reason: string) => void) => void;
  muteCall: (callId: number, callBack: (success: boolean, reason: string) => void) => void;
  unMuteCall: (callId: number, callBack: (success: boolean, reason: string) => void) => void;
  useSpeaker: (callBack: () => void) => void;
  useEarpiece: (callBack: () => void) => void;
  xferCall: (callId: number, destination: string, callBack: (success: boolean, reason: string) => void) => void;
  xferReplacesCall: (callId: number, destinationCallId: number, callBack: (success: boolean, reason: string) => void) => void;
  redirectCall: (callId: number, destination: string, callBack: (success: boolean, reason: string) => void) => void;
  dtmfCall: (callId: number, dtmf: string, callBack: (success: boolean, reason: string) => void) => void;
  activateAudioSession: (callBack: (success: boolean) => void) => void;
  deactivateAudioSession: (callBack: (success: boolean, reason: string) => void) => void;
  changeOrientation: (changeOrientation: Orientation) => void;
  changeCodecSettings: (codecs: Object, callBack: (success: boolean) => void) => void;
}

const { PjSipModule } = NativeModules

declare module 'react-native' {

  interface NativeModulesStatic {
    PjSipModule: PjSipModuleInterface
  }

}

export default PjSipModule as PjSipModuleInterface
