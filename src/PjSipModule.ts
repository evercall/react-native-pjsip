import Account, { AccountConfiguration } from './Account'
import { CallData, Codec, Orientation, PJSIPCallSettings, PJSIPMessageData, StartConfiguration } from './index'
import { NativeModules } from 'react-native'

interface PjSipModuleInterface {
  start: (config: StartConfiguration, callBack?: (success: boolean, data: {
    calls: CallData[],
    accounts: Account[],
    settings: {
      codecs: string[]
    },
    connectivity: boolean
  }) => void) => void,
  stop: () => void,
  updateStunServers: (accountId: number, stunServerList: string[], callBack?: (success: boolean) => void) => void,
  createAccount: (config: AccountConfiguration, callBack?: (success: boolean, account: Account) => void) => void,
  registerAccount: (accountId: number, renew: boolean, callBack?: (success: boolean, reason: string) => void) => void,
  deleteAccount: (accountId: number) => void,
  getAccounts: (callBack?: (success: boolean, data: Account[]) => void) => void,
  getAccount: (accountId: number, callBack?: (success: boolean, data: Account | string) => void) => void,
  getCalls: (callBack?: (success: boolean, data: CallData[]) => void) => void,
  makeCall: (accountId: number, destination: string, callSettings?: PJSIPCallSettings, messageData?: PJSIPMessageData, callBack?: (success: boolean, data: CallData | string) => void) => void,
  answerCall: (callId: number, callBack?: (success: boolean, reason: string) => void) => void,
  hangupCall: (callId: number, callBack?: (success: boolean, reason: string) => void) => void,
  declineCall: (callId: number, callBack?: (success: boolean, reason: string) => void) => void,
  holdCall: (callId: number, callBack?: (success: boolean, reason: string) => void) => void,
  unholdCall: (callId: number, callBack?: (success: boolean, reason: string) => void) => void,
  muteCall: (callId: number, callBack?: (success: boolean, reason: string) => void) => void,
  unMuteCall: (callId: number, callBack?: (success: boolean, reason: string) => void) => void,
  useSpeaker: () => void,
  useEarpiece: () => void,
  xferCall: (callId: number, destination: string, callBack?: (success: boolean, reason: string) => void) => void,
  xferReplacesCall: (callId: number, destinationCallId: number, callBack?: (success: boolean, reason: string) => void) => void,
  redirectCall: (callId: number, destination: string, callBack?: (success: boolean, reason: string) => void) => void,
  dtmfCall: (callId: number, dtmf: string, callBack?: (success: boolean, reason: string) => void) => void,
  activateAudioSession: (callBack?: (success: boolean) => void) => void,
  deactivateAudioSession: (callBack?: (success: boolean, reason: string) => void) => void,
  changeOrientation: (changeOrientation: Orientation) => void,
  changeCodecSettings: (codecs: Codec[], callBack?: (success: boolean) => void) => void,
}

const { PjSipModule } = NativeModules

declare module 'react-native' {

  interface NativeModulesStatic {
    PjSipModule: PjSipModuleInterface
  }

}

export default PjSipModule as PjSipModuleInterface
