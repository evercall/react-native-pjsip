#import <React/RCTBridgeModule.h>

#import "PjSipAccount.h"
#import "PjSipCall.h"


@interface PjSipEndpoint : NSObject

@property NSMutableDictionary* accounts;
@property NSMutableDictionary* calls;
@property(nonatomic, strong) RCTBridge *bridge;

@property pjsua_transport_id tcpTransportId;
@property pjsua_transport_id udpTransportId;
@property pjsua_transport_id tlsTransportId;

@property bool isSpeaker;

+(instancetype)instance;

-(NSDictionary *)start: (NSDictionary *) config;
-(NSDictionary *)stop: (NSDictionary *) config;

-(void) updateStunServers: (int) accountId stunServerList:(NSArray *)stunServerList;

-(PjSipAccount *)createAccount:(NSDictionary*) config;
-(void) deleteAccount:(int) accountId;
-(NSMutableArray *)getAccounts;
-(PjSipAccount *)findAccount:(int)accountId;
-(NSMutableDictionary *)getCalls;
-(PjSipCall *)makeCall:(PjSipAccount *) account destination:(NSString *)destination callSettings: (NSDictionary *)callSettings msgData: (NSDictionary *)msgData;
-(void)pauseParallelCalls:(PjSipCall*) call; // TODO: Remove this feature.
-(PjSipCall *)findCall:(int)callId;
-(void)useSpeaker;
-(void)useEarpiece;

-(void)changeOrientation: (NSString*) orientation;
-(void)changeCodecSettings: (NSDictionary*) codecSettings;

-(void)emmitRegistrationChanged:(PjSipAccount*) account;
-(void)emmitCallReceived:(PjSipCall*) call;
-(void)emmitCallUpdated:(PjSipCall*) call;
-(void)emmitCallChanged:(PjSipCall*) call;
-(void)emmitCallTerminated:(PjSipCall*) call;

@end
