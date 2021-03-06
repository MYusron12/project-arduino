if (self.CavalryLogger) { CavalryLogger.start_js(["D0Cap"]); }

__d("FBRTCCallConstants",[],(function(a,b,c,d,e,f){e.exports={FBRTCCallConnectionType:{MISSED_CALL:4,CONNECTED_CALL:5},FBRTCCallType:{VOICE_CALL:1,VIDEO_CALL:2,COLLAB_VIDEO_CALL:3,COLLAB_SCREEN_SHARE_CALL:4}}}),null);
__d("FBRTCCapability",[],(function(a,b,c,d,e,f){e.exports={SUPPORT_AUDIO_DEPRECATED:0,SUPPORT_VIDEO_DEPRECATED:1,SUPPORT_EXPERIMENTS_IN_JOIN_RESPONSE:2,SUPPORT_NEW_PARTICIPANT_STATES:3,SUPPORT_SDP_RENEGOTIATION:4,SUPPORT_MWPP:5,REQUIRE_FULL_SDP_IN_SMU:6,SUPPORT_PRECONNECT:7}}),null);
__d("FBRTCDeviceStatus",[],(function(a,b,c,d,e,f){e.exports={OK:0,NOT_SUPPORTED:1,IN_ANOTHER_CALL:10}}),null);
__d("FBRTCMediaType",[],(function(a,b,c,d,e,f){e.exports={AUDIO:0,VIDEO:1,DATA:2}}),null);
__d("FBRTCVideoQuality",[],(function(a,b,c,d,e,f){e.exports={LOW:0,MEDIUM:1,HIGH:2,HD:3,NUM_QUALITIES:4}}),null);
__d("RTCGroupCallRemoveGuestDialogContainerFetchLinkCreatorNameForGuestQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"server_session_id",type:"String!"},{defaultValue:null,kind:"LocalArgument",name:"guest_id",type:"ID"}],b=[{kind:"Variable",name:"server_session_id",variableName:"server_session_id"}],c=[{kind:"Variable",name:"find",variableName:"guest_id"}],d={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"short_name",storageKey:null}],type:"User",abstractKey:null},e={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"RTCGroupCallRemoveGuestDialogContainerFetchLinkCreatorNameForGuestQuery",selections:[{alias:null,args:b,concreteType:"MessengerCall",kind:"LinkedField",name:"messenger_call_query",plural:!1,selections:[{alias:null,args:c,concreteType:"MessengerCallToConnectedParticipantsConnection",kind:"LinkedField",name:"connected_participants",plural:!1,selections:[{alias:null,args:null,concreteType:"MessengerCallToConnectedParticipantsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"joining_context",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"link_owner",plural:!1,selections:[d],storageKey:null}],type:"MessengerCallInviteLink",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"RTCGroupCallRemoveGuestDialogContainerFetchLinkCreatorNameForGuestQuery",selections:[{alias:null,args:b,concreteType:"MessengerCall",kind:"LinkedField",name:"messenger_call_query",plural:!1,selections:[{alias:null,args:c,concreteType:"MessengerCallToConnectedParticipantsConnection",kind:"LinkedField",name:"connected_participants",plural:!1,selections:[{alias:null,args:null,concreteType:"MessengerCallToConnectedParticipantsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"joining_context",plural:!1,selections:[e,f,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"link_owner",plural:!1,selections:[e,f,d],storageKey:null}],type:"MessengerCallInviteLink",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null},f],storageKey:null}]},params:{id:"1824858160953429",metadata:{},name:"RTCGroupCallRemoveGuestDialogContainerFetchLinkCreatorNameForGuestQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("RTCMeetupLockStatusQuery.graphql",["RelayHooks"],(function(a,b,c,d,e,f){"use strict";a=b("RelayHooks").PreloadableQueryRegistry;c=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"room_link",type:"String!"}],b=[{kind:"Variable",name:"url",variableName:"room_link"}],c={kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"lock_status",storageKey:null}],type:"MessengerCallInviteLink",abstractKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"RTCMeetupLockStatusQuery",selections:[{alias:"link",args:b,concreteType:null,kind:"LinkedField",name:"url",plural:!1,selections:[c],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"RTCMeetupLockStatusQuery",selections:[{alias:"link",args:b,concreteType:null,kind:"LinkedField",name:"url",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c],storageKey:null}]},params:{id:"2560485717340069",metadata:{relayPreloadable:!0,live:{config_id:"rtc_web_vcl_update_query"}},name:"RTCMeetupLockStatusQuery",operationKind:"query",text:null}}}();c.params.id!=null&&a.set(c.params.id,c);e.exports=c}),null);
__d("CreateMessengerCallInviteLinkMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input",type:"CreateMessengerCallInviteLinkData!"}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"client_mutation_id",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"link_url",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CreateMessengerCallInviteLinkMutation",selections:[{alias:null,args:b,concreteType:"CreateMessengerCallInviteLinkResponsePayload",kind:"LinkedField",name:"create_messenger_call_invite_link",plural:!1,selections:[c,{alias:null,args:null,concreteType:"MessengerCallInviteLink",kind:"LinkedField",name:"messenger_call_invite_link",plural:!1,selections:[d],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CreateMessengerCallInviteLinkMutation",selections:[{alias:null,args:b,concreteType:"CreateMessengerCallInviteLinkResponsePayload",kind:"LinkedField",name:"create_messenger_call_invite_link",plural:!1,selections:[c,{alias:null,args:null,concreteType:"MessengerCallInviteLink",kind:"LinkedField",name:"messenger_call_invite_link",plural:!1,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"1879632448805157",metadata:{},name:"CreateMessengerCallInviteLinkMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("RevokeMessengerCallInviteLinksForThreadMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input",type:"RevokeMessengerCallInviteLinksForThreadData!"}],b=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"RevokeMessengerCallInviteLinksForThreadResponsePayload",kind:"LinkedField",name:"revoke_messenger_call_invite_links_for_thread",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"client_mutation_id",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"RevokeMessengerCallInviteLinksForThreadMutation",selections:b,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"RevokeMessengerCallInviteLinksForThreadMutation",selections:b},params:{id:"2525319784152965",metadata:{},name:"RevokeMessengerCallInviteLinksForThreadMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("FBRTCAdminMessage",["FBRTCCallConstants","FBRTCConstants","FBRTCLogger","FBRTCUtils","RTWebUserActionLogger","XVideoCallAdminMessageController","emptyFunction","performanceNow"],(function(a,b,c,d,e,f){var g;a=function(){"use strict";function a(a,b){this.$1=a,this.$2=b,this.$3=Date.now(),this.$4=null,this.$5=null}var c=a.prototype;c.getPeerID=function(){return this.$1};c.getCallID=function(){return this.$2};c.getStartTimestamp=function(){return this.$3};c.getConnectedTime=function(){return this.$4};c.getEndTime=function(){return this.$5};c.onCallConnected=function(){this.$4||(this.$4=(g||(g=b("performanceNow")))())};c.onCallEnded=function(){this.$5||(this.$5=(g||(g=b("performanceNow")))())};c.submit=function(a,c,d){this.$5||this.onCallEnded();var e=0,f=b("FBRTCCallConstants").FBRTCCallConnectionType.MISSED_CALL;this.$4&&this.$5&&(e=Math.ceil(this.$5-this.$4),f=b("FBRTCCallConstants").FBRTCCallConnectionType.CONNECTED_CALL);c=f===b("FBRTCCallConstants").FBRTCCallConnectionType.CONNECTED_CALL||c===b("FBRTCConstants").CallEndReason.IGNORE_CALL;b("RTWebUserActionLogger").logCheckpoint({checkpoint:"admin_message_"+f});this.$6({peer_id:this.$1,call_id:this.$2,start_time:this.$3,call_duration:e,message_type:f,call_category:a,call_acknowledged:c,conference_name:d})};c.$6=function(a){var c=b("XVideoCallAdminMessageController").getURIBuilder().getURI();b("FBRTCUtils").sendServerRequest(c,b("emptyFunction"),this.$7.bind(this,a.peer_id,a.call_id),!1,void 0,a)};c.$7=function(a,c,d){d?d="Fail to log admin message, error "+d.error:d="Server timed out on logging admin message";b("FBRTCLogger").getInstance().logError(a,c,d)};return a}();e.exports=a}),null);
__d("FBRTCCallSummaryPageVisibilityObserver",["requireCond","cr:1440831","FBRTCLogger","Visibility"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){var a=this;this.$1=new Map();if(b("Visibility").isSupported()){var c;(c=b("Visibility")).addListener(c.HIDDEN,function(){a.$1.forEach(function(a){a.addExtraInfo(b("FBRTCLogger").Key.IS_BACKGROUNDED,!0),b("cr:1440831")&&b("cr:1440831").logCallSummaryHeartbeat(a,"pagehide")})});c.addListener(c.VISIBLE,function(){a.$1.forEach(function(a){a.addExtraInfo(b("FBRTCLogger").Key.IS_BACKGROUNDED,!1),b("cr:1440831")&&b("cr:1440831").logCallSummaryHeartbeat(a,"pageunhide")})})}}var c=a.prototype;c.onCallStart=function(a){this.$1.set(a.callID,a),b("Visibility").isSupported()&&a.addExtraInfo(b("FBRTCLogger").Key.IS_BACKGROUNDED,b("Visibility").isHidden())};c.onCallEnd=function(a){this.$1["delete"](a.callID)};return a}();e.exports=new a()}),null);
__d("FBRTCIceCache",[],(function(a,b,c,d,e,f){a=function(){"use strict";function a(){this.$1=new Map()}var b=a.prototype;b.getCache=function(){var a={};for(var b=this.$1,c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{d=b.next();if(d.done)break;e=d.value}e=e;var f=e[0];e=e[1];a[f]={};for(var e=e,g=Array.isArray(e),h=0,e=g?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(g){if(h>=e.length)break;i=e[h++]}else{h=e.next();if(h.done)break;i=h.value}i=i;var j=i[0];i=i[1];a[f][j]=i}}return a};b.reset=function(a,b){var c=this.$1.get(a);c||(c=new Map(),this.$1.set(a,c));c.set(b,[])};b.cacheCandidate=function(a,b,c){var d=this.$1.get(a);d||(d=new Map(),this.$1.set(a,d));a=d.get(b);a||(a=[],d.set(b,a));a.unshift(c)};b.drainCandidates=function(a,b,c){a=this.$1.get(a);if(a){a=a.get(b)||[];while(a.length>0){b=a.pop();c(b)}}};return a}();e.exports=a}),null);
__d("FBRTCMessage",["FBRTCConstants","FBRTCExperiment","FBRTCSdpUtils","FBRTCSupport","qex"],(function(a,b,c,d,e,f){var g="mobile";a=function(){"use strict";function a(a){if(!this.$1(a))throw new Error("invalid webrtc message");this.originalMessageData=a;this.peerID=a.from;this.callID=parseInt(a.call_id,10);this.msg=JSON.parse(a.payload);this.msg.json_payload&&(this.escalationName=this.msg.sessionName,this.msg=this.msg.json_payload);this.msgType=this.msg.type;this.msgID=this.msg.msg_id;this.ackID=this.msg.ack_id;this.source=a.source;this.peerSupportsVideoInterop=!!this.msg.supports_video_interop;this.$2();this.$3();this.$4();this.$5()}var c=a.prototype;c.$1=function(a){return a.from&&a.call_id&&a.payload};c.$2=function(){if(this.peerSupportsVideoInterop)return;this.isFromMobile()&&this.disableVideo()};c.disableVideo=function(){this.msg.sdp&&(this.msg.sdp=b("FBRTCSdpUtils").disableVideo(this.msg.sdp)),(this.msgType===b("FBRTCConstants").PayloadType.SET_VIDEO||this.msgType===b("FBRTCConstants").PayloadType.OFFER||this.msgType===b("FBRTCConstants").PayloadType.ICERESTART_OFFER||this.msgType===b("FBRTCConstants").PayloadType.ANSWER||this.msgType===b("FBRTCConstants").PayloadType.ICERESTART_ANSWER)&&(this.msg.videoon=!1)};c.$3=function(){this.isFromMobile()&&this.msg.sdp&&this.msgType!==b("FBRTCConstants").PayloadType.ICE_CANDIDATE&&(this.msg.sdp=b("FBRTCSdpUtils").removeRED(this.msg.sdp))};c.$4=function(){if(this.isFromMobile()&&b("FBRTCSupport").isWebrtcSupported()&&this.msg.sdp&&this.msgType!==b("FBRTCConstants").PayloadType.ICE_CANDIDATE){var a;a=(a=b("qex")._("1407741"))!=null?a:!1;a||(this.msg.sdp=b("FBRTCSdpUtils").removeH264(this.msg.sdp))}};c.$5=function(){if(this.isFromMobile()&&b("FBRTCSupport").isWebrtcSupported()&&this.msg.sdp&&this.msgType!==b("FBRTCConstants").PayloadType.ICE_CANDIDATE){var a=b("FBRTCExperiment").gen("rtc_browser_use_vp9");a.getBool("allow_vp9",!1)||(this.msg.sdp=b("FBRTCSdpUtils").removeVP9(this.msg.sdp))}};c.isOffer=function(){return this.msgType===b("FBRTCConstants").PayloadType.OFFER};c.isFromMobile=function(){return this.source===g};c.isRemoteVideoSupported=function(){return!this.msg.sdp||this.msgType===b("FBRTCConstants").PayloadType.ICE_CANDIDATE?!0:b("FBRTCSdpUtils").isVideoSupported(this.msg.sdp)};c.isRetry=function(){return!!this.msg.flag};c.isForCall=function(a,c){return this.escalationName&&(this.msgType===b("FBRTCConstants").PayloadType.HANGUP||this.msgType===b("FBRTCConstants").PayloadType.SWITCH_TO_MULTIWAY)?c===this.escalationName:!a||a===this.callID||this.msgType===b("FBRTCConstants").PayloadType.OFFER||this.msgType===b("FBRTCConstants").PayloadType.ICERESTART_OFFER||this.msgType===b("FBRTCConstants").PayloadType.PCRESTART_OFFER||this.msgType===b("FBRTCConstants").PayloadType.ICE_CANDIDATE};c.getSignalingExperiments=function(){if(this.isFromMobile()){if(!this.msg.experiments)return["sdp_update"];this.msg.experiments.includes("sdp_update")||this.msg.experiments.push("sdp_update")}return this.msg.experiments};return a}();e.exports=a}),null);
__d("FBRTCMessageDedup",[],(function(a,b,c,d,e,f){var g={};a={check:function(a,b,c){g[a]||(g[a]={});g[a][b]||(g[a][b]={});if(g[a][b][c])return!1;g[a][b][c]=!0;return!0}};e.exports=a}),null);
__d("RTCAppData",["FacebookAppIDs","WorkplaceChatHelper"],(function(a,b,c,d,e,f){"use strict";var g={getAppID:function(){return b("WorkplaceChatHelper").isDesktopChatApp()?this._getWorkplaceChatDesktopAppID():b("FacebookAppIDs").WWW},getChannelManagerAppName:function(){switch(g.getMWAppID()){case b("FacebookAppIDs").MESSENGERDOTCOM.toString():return"messenger_dot_com";case b("FacebookAppIDs").WWW.toString():return"www";case b("FacebookAppIDs").WORKPLACE_DESKTOP.toString():return"workplace";case b("FacebookAppIDs").MESSENGER_DESKTOP_ARCHON_MACOS.toString():return"desktop_video_chat";case b("FacebookAppIDs").MESSENGER_DESKTOP_ARCHON_WINDOWS.toString():return"desktop_video_chat_for_windows";default:return"desktop"}},_getWorkplaceChatDesktopAppID:function(){return b("WorkplaceChatHelper").getAppID()||b("FacebookAppIDs").WORKPLACE_DESKTOP},getMWAppID:function(){return b("FacebookAppIDs").MQTT_WEB.toString()}};e.exports=g}),null);
__d("RTCAppDispatcher",["ExplicitRegistrationDispatcher","objectValues"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;babelHelpers.assertThisInitialized(b).dispatch=b.dispatch.bind(babelHelpers.assertThisInitialized(b));return b}var d=c.prototype;d.explicitlyRegisterStoresInMap=function(a){this.explicitlyRegisterStores(b("objectValues")(a))};return c}(b("ExplicitRegistrationDispatcher"));e.exports=new a({strict:!0})}),null);
__d("RTCOneVCStoreState",["immutable"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("immutable").Record({meetingID:null,meetingPassword:null,participants:[]}));e.exports=a}),null);
__d("RTCOneVCStore",["invariant","FBRTCConfig","FluxReduceStore","RTCAppDispatcher","RTCOneVCStoreState"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.call(this,b("RTCAppDispatcher"))||this}var d=c.prototype;d.getInitialState=function(){return new(b("RTCOneVCStoreState"))()};d.reduce=function(a,b){switch(b.type){case"SET_MEETING_ID":return a.set("meetingID",b.meetingID);case"SET_MEETING_PASSWORD":return a.set("meetingPassword",b.meetingPassword);case"STORE_PARTICIPANTS":b=h(b.participants);return a.set("participants",b);default:return a}};d.getParticipantsSummary=function(){var a=this.getState().participants;return a.length===0?{audioParticipants:0,videoParticipants:0}:a.reduce(function(a,b){b=b.video_mute.some(function(a){return a!==!1});return b?{audioParticipants:a.audioParticipants+1,videoParticipants:a.videoParticipants}:{audioParticipants:a.audioParticipants,videoParticipants:a.videoParticipants+1}},{audioParticipants:0,videoParticipants:0})};d.getParticipants=function(){return this.getState().participants};return c}(b("FluxReduceStore"));a.__moduleID=e.id;function h(a){var c=b("FBRTCConfig").getMeetingID();c!=null||g(0,11961);var d="Facebook (Meeting ID: "+c+")";return a.filter(function(a){return!a.peer_name.includes(d)})}e.exports=new a()}),null);
__d("FBRTCVersionDetection",["UserAgent","UserAgentData"],(function(a,b,c,d,e,f){a={isChrome:function(){return b("UserAgent").isBrowser("Chrome")},isFirefox:function(){return b("UserAgent").isBrowser("Firefox")},isChromium:function(){return!!navigator.webkitGetUserMedia},webrtcVersion:function(){if(this.isFirefox()||this.isChrome())return b("UserAgentData").browserVersion||0;if(this.isChromium()){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a!=null?parseInt(a[2],10):999}return 0}};e.exports=a}),null);
__d("RTCSignalingExperiments",["CurrentUser","FBRTCConfig","FBRTCExperiment","FBRTCScreenSharingUtils","FBRTCSupport","FBRTCVersionDetection","UserAgent","qex"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(b){this.$2=new Set(),this.$1=new Set(a.getLocal()),b&&(this.$2=new Set(b))}var c=a.prototype;c.getLocal=function(){return Array.from(this.$1)};c.setRemote=function(b){return!b?this:new a(b)};c.getRemote=function(){return Array.from(this.$2)};c.support=function(a){return this.localSupport(a)&&this.remoteSupport(a)};c.localSupport=function(a){return this.$1.has(a)};c.remoteSupport=function(a){return this.$2.has(a)};a.getLocal=function(){var a=[];(b("UserAgent").isBrowser("Chrome")||b("UserAgent").isBrowser("Opera")||b("UserAgent").isBrowser("Firefox >= 38"))&&a.push("sdp_update");g()&&a.push("multiple_streams_plan_b");b("FBRTCScreenSharingUtils").canUserReceiveScreenSharing()&&a.push("screen_sharing");h()&&a.push("multiple_streams_unified");b("FBRTCSupport").isMobileDevice()?a.push("mweb"):a.push("www");b("FBRTCSupport").videoEscalationByUnmuteWorkaround()&&a.push("video_escalation_by_unmute");return a};a.shouldCapMWBitrate=function(){return b("FBRTCExperiment").gen("rtc_www_mw_video_quality").getBool("cap_bitrate",!1)};a.shouldCapAudioBitrate=function(){return b("FBRTCConfig").isVCEndpointCall()||b("CurrentUser").isWorkUser()?!1:b("FBRTCExperiment").getMediaQualityExperiments().getBool("use_audio_bitrate_cap",!1)};a.shouldPreferIsac=function(){return b("FBRTCConfig").isVCEndpointCall()||b("CurrentUser").isWorkUser()?!0:b("FBRTCExperiment").getMediaQualityExperiments().getBool("prefer_isac",!0)};a.shouldAlwaysSetMWDescriptionsOnSMU=function(){return!Boolean(b("qex")._("897144"))};a.shouldEnableAudioNack=function(){return b("FBRTCConfig").isVCEndpointCall()||b("CurrentUser").isWorkUser()?!1:b("FBRTCExperiment").getMediaQualityExperiments().getBool("enable_audio_nack",!1)};return a}();function g(){return(b("UserAgent").isBrowser("Chrome")||b("UserAgent").isBrowser("Opera"))&&b("FBRTCVersionDetection").webrtcVersion()>=34}function h(){return b("UserAgent").isBrowser("Firefox")&&b("FBRTCVersionDetection").webrtcVersion()>=40}e.exports=a}),null);
__d("generateRTCSignalingMessageID",["randomInt"],(function(a,b,c,d,e,f){"use strict";function a(){return b("randomInt")(0,4294967294)+1}e.exports=a}),null);
__d("FBRTCMessageSender",["errorCode","CurrentUser","FBRTCConstants","FBRTCLocalUploadLogLevel","FBRTCLogger","FBRTCSupport","FBRTCUtils","PresenceProperties","RTCAppData","RTCOneVCStore","RTCSignalingExperiments","SiteData","XCollabCallSendMessageController","XVideoCallSendMessageController","generateRTCSignalingMessageID"],(function(a,b,c,d,e,f,g){var h=0;a=function(){"use strict";function a(){this.onSendFailure=null,this.$1=b("FBRTCLogger").getInstance()}var c=a.prototype;c.sendOffer=function(a,c,d,e,f,g){return this.$2(b("FBRTCConstants").PayloadType.OFFER,a,c,d,e,f,null,g)};c.sendAnswer=function(a,c,d,e,f,g){return this.$2(b("FBRTCConstants").PayloadType.ANSWER,a,c,d,e,f,g)};c.sendPCRestartOffer=function(a,c,d,e,f){return this.$2(b("FBRTCConstants").PayloadType.PCRESTART_OFFER,a,c,d,e,f)};c.sendSdpUpdate=function(a,c,d,e,f){return this.$2(b("FBRTCConstants").PayloadType.SDP_UPDATE,a,c,d,e,f)};c.resendSdpMessage=function(a,b){b.flag=1,this.$3(a,b)};c.resendPayload=function(a,b){b.flag=1,this.$4(a,b)};c.$2=function(a,c,d,e,f,g,h,i){d=this.$5(d,a);d.sdp=e;a===b("FBRTCConstants").PayloadType.OFFER&&(d.browser_supports_escalation=b("FBRTCSupport").isGroupCallWebtrcSupported(),d.handlescollision=!0,d.pranswer=!1,i&&(d.call_trigger=i));a===b("FBRTCConstants").PayloadType.ANSWER&&h&&(d.escalation_conference_name=h.escalationConferenceName,d.negotiated_escalation_support=h.negotiatedEscalationSupport);(a===b("FBRTCConstants").PayloadType.OFFER||a===b("FBRTCConstants").PayloadType.ANSWER||a===b("FBRTCConstants").PayloadType.PCRESTART_OFFER)&&(d.icerestart=!1,d.experiments=b("RTCSignalingExperiments").getLocal());d.videoon=f;d.attributes=g;d.ull=b("FBRTCConstants").convertFromUploadLogLevel(b("FBRTCLocalUploadLogLevel").getLocalUploadLogLevel());this.$3(c,d);return d};c.sendIceCandidate=function(a,c,d){c=this.$5(c,b("FBRTCConstants").PayloadType.ICE_CANDIDATE);c.sdp_mid=d.sdpMid;c.label=d.sdpMLineIndex;c.sdp=d.candidate;this.$4(a,c)};c.sendHangup=function(a,c,d,e,f){c=this.$5(c,b("FBRTCConstants").PayloadType.HANGUP);c.reason=b("FBRTCConstants").callEndReasonString(d);c.subreason=f||"";this.$4(a,c,e,!0)};c.sendOtherDismiss=function(a){a=this.$5(a,b("FBRTCConstants").PayloadType.OTHER_DISMISS);this.$4(b("CurrentUser").getID(),a)};c.sendOfferAck=function(a,c,d,e){e===void 0&&(e=new Map()),this.$6(a,c,d,b("FBRTCConstants").PayloadType.OFFER_ACK,e)};c.sendOfferNack=function(a,c,d){this.$6(a,c,d,b("FBRTCConstants").PayloadType.OFFER_NACK,new Map([["error_code",1356043]]))};c.sendAnswerAck=function(a,c,d){this.$6(a,c,d,b("FBRTCConstants").PayloadType.ANSWER_ACK)};c.sendAck=function(a,c,d){this.$6(a,c,d,b("FBRTCConstants").PayloadType.ACK,new Map([["ack_type",d.type]]))};c.sendMuteStateUpdate=function(a,c,d){c=this.$5(c,b("FBRTCConstants").PayloadType.SET_VIDEO);c.videoon=d;this.$4(a,c)};c.sendClientReportedEvent=function(a,c,d){c=this.$5(c,b("FBRTCConstants").PayloadType.CLIENT_REPORTED_EVENT);c.event_type=d;this.$4(a,c)};c.sendVideoEscalationRequest=function(a,b,c){return this.sendVideoRequestResponse(a,b,0,c)};c.sendVideoRequestResponse=function(a,c,d,e){c=this.$5(c,b("FBRTCConstants").PayloadType.VIDEO_REQUEST);c.ack_id=d;c.videoon=e;c.capability=b("PresenceProperties").getProperties();this.$4(a,c);return c};c.sendMsgAck=function(){};c.sendOk=function(){};c.sendPranswer=function(){};c.sendIcerestartAnswer=function(){};c.$5=function(a,c){var d=b("generateRTCSignalingMessageID")();a={version:h,type:c,call_id:a,msg_id:d};this.$7(c)&&(a.supports_video_interop=!0);return a};c.$7=function(a){return a===b("FBRTCConstants").PayloadType.OFFER||a===b("FBRTCConstants").PayloadType.ANSWER||a===b("FBRTCConstants").PayloadType.PRANSWER||a===b("FBRTCConstants").PayloadType.ICERESTART_OFFER||a===b("FBRTCConstants").PayloadType.ICERESTART_ANSWER||a===b("FBRTCConstants").PayloadType.PCRESTART_OFFER||a===b("FBRTCConstants").PayloadType.PCRESTART_ANSWER||a===b("FBRTCConstants").PayloadType.SDP_UPDATE||a===b("FBRTCConstants").PayloadType.SET_VIDEO||a===b("FBRTCConstants").PayloadType.VIDEO_REQUEST};c.$3=function(a,b){this.$4(a,b,!1,!0,!0)};c.$6=function(a,c,d,e){var f=(arguments.length<=4?void 0:arguments[4])||new Map(),g=this.$5(c,e);g.ack_id=d.msg_id;d.flag===1&&(g.flag=1);g.ull=b("FBRTCConstants").convertFromUploadLogLevel(b("FBRTCLocalUploadLogLevel").getLocalUploadLogLevel());f.forEach(function(a,b,c){g[b]=a});this.$4(a,g)};c.$4=function(a,c,d,e,f){var g=c.msg_id,h={peer_id:a,call_id:c.call_id,msg_id:g,msg_type:c.type},i=b("FBRTCUtils").isPeerVCEndpoint(a);if(i){var j=b("RTCOneVCStore").getState(),k=j.meetingID;j=j.meetingPassword;k!=null&&(c.meeting_id=k);j!=null&&(c.meeting_pass=j)}k=(i?b("XCollabCallSendMessageController"):b("XVideoCallSendMessageController")).getURIBuilder().setInt("recipient_id",a).setInt("msg_id",g).setString("message_info",JSON.stringify(c)).getURI();j=null;e&&(j=this.$4.bind(this,a,c,d,!1,f));i=this.$8.bind(this,h);g=this.$9.bind(this,h,j,f);b("FBRTCUtils").sendServerRequest(k,i,g,d);this.onMessageSent&&this.onMessageSent(a,c);this.$1.logSentMessage(a,c.call_id,c)};c.$8=function(a){this.$1.logSentMessageSuccess(a.peer_id,a.call_id,a.msg_type,a.msg_id)};c.$9=function(a,c,d,e){var f="UNKNOWN_ERROR";e&&(f=e.getError?e.getError():e);this.$1.logSentMessageFailure(a.peer_id,a.call_id,a.msg_type,a.msg_id,f);e=null;f===1356001||f===1356049?e=b("FBRTCConstants").CallEndReason.NO_PERMISSION:f===1356046?e=b("FBRTCConstants").CallEndReason.CALLER_NOT_VISIBLE:(f===1356003||f===1356002||f===1356044)&&(e=b("FBRTCConstants").CallEndReason.OTHER_NOT_CAPABLE);if(!e&&c){c();return}d&&this.onSendFailure&&(e||(e=b("FBRTCConstants").CallEndReason.SIGNALING_MESSAGE_FAILED),this.onSendFailure(e,f,a.msg_type))};return a}();e.exports=a}),null);
__d("FBRTCPCConfig",["FBRTCConfig","FBRTCVersionDetection"],(function(a,b,c,d,e,f){var g="stun:stun.fbsbx.com:3478";function h(a,c,d){if(b("FBRTCVersionDetection").isChrome()&&b("FBRTCVersionDetection").webrtcVersion()>=34){var e={urls:a};c!==void 0&&d!==void 0&&(e.username=c,e.credential=d);return[e]}e=[];for(var f=0;f<a.length;f++)c!==void 0&&d!==void 0?e.push({url:a[f],username:c,credential:d}):e.push({url:a[f]});return e}a=function(){"use strict";function a(){this.sslPort="",this.tcpPort="",this.turnIP="",this.turnPassword="",this.turnUsername="",this.udpPort=""}var c=a.prototype;c.setTurnCredentials=function(a){this.turnIP=a.ip,this.udpPort=a.udp_port,this.tcpPort=a.tcp_port,this.sslPort=a.ssl_tcp_port,this.turnUsername=a.username,this.turnPassword=a.password};c.getConfig=function(){if(b("FBRTCConfig").isVCEndpointCall())return{iceServers:[]};var a=h([g]).concat(h(this.$1(),this.turnUsername,this.turnPassword));return{iceServers:a}};c.getConstraints=function(a){a===void 0&&(a=!1);var c=!0;b("FBRTCVersionDetection").isChromium()&&b("FBRTCVersionDetection").webrtcVersion()<57&&a&&(c=!1);return{mandatory:{},optional:[{DtlsSrtpKeyAgreement:c}]}};c.$2=function(a){var b=this;a=function(a){switch(a){case"tcp":return{ip:b.turnIP,port:b.tcpPort,transport:a};case"udp":return{ip:b.turnIP,port:b.udpPort,transport:a};case"ssl":return{ip:b.turnIP,port:b.sslPort,transport:"tcp"};default:return{ip:b.turnIP,port:b.udpPort,transport:null}}}(a);var c=a.ip,d=a.port;a=a.transport;return!((c==null?void 0:c.length)&&(d==null?void 0:d.length))?null:a!=null&&a.length>0?"turn:"+c+":"+d+"?transport="+a:"turn:"+c+":"+d};c.$1=function(){if(b("FBRTCVersionDetection").isFirefox()&&b("FBRTCVersionDetection").webrtcVersion()<27)return[this.$2()].filter(Boolean);else return[this.$2("udp"),this.$2("tcp"),this.$2("ssl")].filter(Boolean)};return a}();e.exports=new a()}),null);
__d("FBRTCPeerConnectionHelper",[],(function(a,b,c,d,e,f){"use strict";a={resetLocalStreams:function(a,b){var c=!1,d=a.getLocalStreams(),e=d.filter(function(a){return!b.includes(a)}),f=b.filter(function(a){return!d.includes(a)});(e.length>0||f.length>0)&&(c=!0);e.forEach(function(b){return a.removeStream(b)});f.forEach(function(b){return a.addStream(b)});return c},resetLocalStreamWithTrackAPI:function(a,b,c){var d=!1,e=b.getVideoTracks().length>0?b.getVideoTracks()[0]:null,f=b.getAudioTracks().length>0?b.getAudioTracks()[0]:null,g=a.getSenders(),h=g.filter(function(a){return a.track&&a.track.kind==="video"}),i=g.filter(function(a){return a.track&&a.track.kind==="audio"});h=h.length===(e===null?0:1)&&i.length===(f===null?0:1);if(c||!h){g.filter(function(a){return a.track!==e&&a.track!==e}).forEach(function(b){d=!0,a.removeTrack(b)});f&&!g.some(function(a){return a.track===f})&&(d=!0,a.addTrack(f,b));e&&!g.some(function(a){return a.track===e})&&(d=!0,a.addTrack(e,b));return d}a.getSenders().forEach(function(a){a.track&&a.track.kind==="video"&&e!==a.track?a.replaceTrack(e):a.track&&a.track.kind==="audio"&&f!==a.track&&a.replaceTrack(f)});return d}};e.exports=a}),null);
__d("FBRTCRetriableMessage",["FBRTCConstants","clearTimeout","mixInEventEmitter","setTimeout"],(function(a,b,c,d,e,f){var g=1e4,h=7e3;a=function(){"use strict";function a(a){this.$1=a,this.$2=g,this.$3=2,this.$6=null}var c=a.prototype;c.sendMessage=function(a,c,d,e){var f=e.sdp,g=e.hasVideo,i=e.attributes,j=e.multiwayInfo;e=e.callTrigger;this.$4=c;switch(a){case b("FBRTCConstants").PayloadType.PCRESTART_OFFER:this.$5=this.$1.sendPCRestartOffer(c,d,f,g,i);break;case b("FBRTCConstants").PayloadType.OFFER:this.$5=this.$1.sendOffer(c,d,f,g,i,e);break;case b("FBRTCConstants").PayloadType.ANSWER:this.$2=h;this.$5=this.$1.sendAnswer(c,d,f,g,i,j);break}this.$7()};c.isAckMsg=function(a){return this.$5&&this.$5.msg_id===a.ack_id};c.stopRetrying=function(){this.$6&&(b("clearTimeout")(this.$6),this.$4=null,this.$5=null,this.$6=null)};c.$7=function(){this.$6=b("setTimeout")(this.$8.bind(this),this.$2)};c.$8=function(){this.$3<1?this.emit("timeoutFailure"):(this.emit("sendingRetry"),this.$1.resendSdpMessage(this.$4,this.$5),this.$7(),this.$3-=1)};return a}();b("mixInEventEmitter")(a,{sendingRetry:!0,timeoutFailure:!0});e.exports=a}),null);
__d("FBRTCTurnDiscovery",["Promise","FBRTCLogger","FBRTCUtils","XVideoCallTurnDiscoveryController"],(function(a,b,c,d,e,f){var g=3,h=null;a={requestTurnCreds:function(a,c,d){d===void 0&&(d=g);if(h)return h;var e=1,f=b("XVideoCallTurnDiscoveryController").getURIBuilder().setInt("version",e).setString("call_id",a).getURI();h=new(b("Promise"))(function(e,g){h(d);function h(d){b("FBRTCUtils").sendServerRequest(f,function(a){a=a.payload;return e(a)},function(){d>0?(b("FBRTCLogger").getInstance().logError(c,a,"Failed turn; going to retry"),h(d-1)):g(new Error("failed"))})}});return h}};e.exports=a}),null);
__d("FBRTCUrlManager",["invariant","Promise","regeneratorRuntime","CurrentUser","FBRTCConfig","FBRTCLogger","FBRTCSupport","FBRTCUtils","RTWebUserActionLogger","URI","XGroupCallController","XGroupCallSigningController","XVideoCallController","XVideoCallSigningController"],(function(a,b,c,d,e,f,g){var h;function i(a){b("FBRTCLogger").getInstance().logCallAction(a,void 0,b("FBRTCLogger").CallAction.OLD_URI);return b("XVideoCallController").getURIBuilder().setFBID("peer_id",a).getURI()}function j(a){if(b("CurrentUser").isEmployee()){var c=a.setSubdomain(b("CurrentUser").hasWorkUser()||b("CurrentUser").isWorkUser()?"fb":"www"),d="/intern/";return(h||(h=b("URI"))).getRequestURI().getPath().substr(0,d.length)!==d?c:c.setDomain(c.getDomain().toString().replace(/\.(intern|internmc|cstools)\./,"."))}return a}function k(a,c,d,e,f,g,h){a=b("XVideoCallController").getURIBuilder().setFBID("peer_id",a).setInt("call_id",c).setBool("is_caller",d).setBool("audio_only",e).setString("nonce",f).setBool("initialize_video",g).getURI();return b("Promise").resolve(h?j(a):a)}function l(a){var c,d,e,f,g,h,i,j,k,l;return b("regeneratorRuntime").async(function(m){while(1)switch(m.prev=m.next){case 0:c=a.callContext,d=a.callID,e=a.usersToRing,f=a.hasVideo,g=a.initializeVideo,h=a.multiwayCoreTier,i=a.multiwayWwwTier,j=a.nonce,k=a.serverInfoData;l=b("XGroupCallSigningController").getURIBuilder().setString("call_context",c).setInt("call_id",d).setFBIDSet("users_to_ring",e).setBool("has_video",f).setBool("initialize_video",g).setString("server_info_data",k).setString("nonce",j).setString("multiway_www_tier",i).setString("multiway_core_tier",h).getURI();return m.abrupt("return",new(b("Promise"))(function(a,c){b("FBRTCUtils").sendServerRequest(l,function(b){a(b.payload.uri)},function(a){c(a)})}));case 3:case"end":return m.stop()}},null,this)}var m=function(a){if(b("FBRTCConfig").disableURLManager())return;window.history.replaceState({},"",a)};function n(a){var c=b("XVideoCallController").getURIBuilder().setFBID("peer_id","0").getURI().getPath();return a.getPath()===c}function o(a,b){a&&(b&&g(0,11934))}a={onCallStarted:function(a){n(new(h||(h=b("URI")))(window.location))&&m(i(a))},getGroupCallUri:function(a,c,d,e,f,g,h,i,j){var k;return b("regeneratorRuntime").async(function(m){while(1)switch(m.prev=m.next){case 0:o(!e,f),k=0;case 2:if(!(k<3)){m.next=15;break}m.prev=3;m.next=6;return b("regeneratorRuntime").awrap(l({callContext:a,callID:c,usersToRing:d,hasVideo:e,initializeVideo:f,multiwayCoreTier:g,multiwayWwwTier:h,nonce:i,serverInfoData:j}));case 6:return m.abrupt("return",m.sent);case 9:m.prev=9,m.t0=m["catch"](3),b("FBRTCLogger").getInstance().logToConsole(m.t0);case 12:k++;m.next=2;break;case 15:return m.abrupt("return",b("XGroupCallController").getURIBuilder().setString("call_context",a).setInt("call_id",c).setFBIDSet("users_to_ring",d).setBool("has_video",e).setBool("initialize_video",f).setString("server_info_data",j).setString("nonce",i).setString("multiway_www_tier",h).setString("multiway_core_tier",g).getURI());case 16:case"end":return m.stop()}},null,this,[[3,9]])},getP2PCallUriWithNonce:function(a,c,d,e,f,g,h){var i,j;return b("regeneratorRuntime").async(function(l){while(1)switch(l.prev=l.next){case 0:h===void 0&&(h="");o(e,g);i=b("FBRTCUtils").isPeerVCEndpoint(a)||b("FBRTCUtils").isCollabTrigger(h);if(!(!i&&d&&b("FBRTCSupport").isGroupCallWebtrcSupported())){l.next=8;break}j=b("XVideoCallSigningController").getURIBuilder().setFBID("peer_id",a).setInt("call_id",c).setBool("is_caller",d).setBool("audio_only",e).setString("nonce",f).setBool("initialize_video",g).getURI();return l.abrupt("return",new(b("Promise"))(function(h,l){b("FBRTCUtils").sendServerRequest(j,function(a){h(a.payload.uri)},function(j){b("RTWebUserActionLogger").logCheckpoint({checkpoint:"signed_p2p_controller_rejected_response"}),h(k(a,c,d,e,f,g,i))})}));case 8:return l.abrupt("return",k(a,c,d,e,f,g,i));case 9:case"end":return l.stop()}},null,this)}};e.exports=a}),null);
__d("FBRTCUserSettings",["Promise","RTCMediaDevices","emptyFunction","mixInEventEmitter"],(function(a,b,c,d,e,f){"use strict";a={audioInput:"",audioOutput:"default",videoInput:"",remoteStream:null,_audioInputLabel:null,_videoInputLabel:null,isEnabled:function(){return Boolean(b("RTCMediaDevices").isSupported("enumerateDevices"))},selectAudioInputByLabel:function(a){this.audioInput||(this.audioInput=this._selectByLabel(a,this._audioInputLabel));return this.audioInput},selectVideoInputByLabel:function(a){this.videoInput||(this.videoInput=this._selectByLabel(a,this._videoInputLabel));return this.videoInput},_selectByLabel:function(a,b){for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;if(b&&b===e.label)return e.deviceId}return null},previewStart:function(){this.emit("previewStarted")},previewEnd:function(){this.emit("previewEnded")},save:function(a){var c=this,d=a.audioInput,e=a.audioOutput,f=a.videoInput;return new(b("Promise"))(function(a){var b=!!(d&&c.audioInput!==d||f&&c.videoInput!==f);c.audioInput=d;c.audioOutput=e;c.videoInput=f;c.emit("saved",b);a(b)})},updateForLocalStream:function(a){if(a.videoMediaSourceId)this.videoInput=a.videoMediaSourceId;else{var b=a.getVideoTracks();b=b[0];b&&(this._videoInputLabel=b.label)}if(a.audioMediaSourceId)this.audioInput=a.audioMediaSourceId;else{b=a.getAudioTracks();a=b[0];a&&(this._audioInputLabel=a.label)}},updateForRemoteStream:function(a){this.remoteStream=a,this.emit("remoteStreamChanged")},addListener:function(){},emit:b("emptyFunction")};b("mixInEventEmitter")(a,{previewStarted:!0,previewEnded:!0,remoteStreamChanged:!0,saved:!0});e.exports=a}),null);
__d("FBRTCMultiwayMessage",["ChannelManager","CurrentUser","FBRTCMessageType","RTCAppData","RTCUtils"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this.$1=a}var c=a.prototype;c.isRequest=function(){return this.$1.jsonPayload.header.responseStatusCode==null};c.isType=function(a){return this.type()==a};c.transactionId=function(){return this.$1.jsonPayload.header.transactionId};c.conferenceName=function(){return this.$1.jsonPayload.header.conferenceName};c.serverInfoData=function(){return this.$1.jsonPayload.header.serverInfoData};c.message=function(){return this.$1};c.type=function(){return this.header().type};c.endpoint=function(){return this.$1.endpoint};c.header=function(){return this.$1.jsonPayload.header};c.body=function(){return this.$1.jsonPayload.body};c.incrementRetryCount=function(){this.$1.jsonPayload.header.retryCount++};c.ringRequest=function(){return this.isRequest()&&this.isType(b("FBRTCMessageType").RING)?this.body().ringRequest:null};c.dismissRequest=function(){return this.isRequest()&&this.isType(b("FBRTCMessageType").DISMISS)?this.body().dismissRequest:null};c.serverMediaUpdateRequest=function(){return this.isRequest()&&this.isType(b("FBRTCMessageType").SERVER_MEDIA_UPDATE)?this.body().serverMediaUpdateRequest:null};c.conferenceStateRequest=function(){return this.isRequest()&&this.isType(b("FBRTCMessageType").CONFERENCE_STATE)?this.body().conferenceStateRequest:null};c.createResponse=function(c,d){var e=d.body;d=d.callID;c={endpoint:{appId:b("RTCAppData").getMWAppID(),deviceId:b("ChannelManager").getCompleteConfig().sessionID,userId:b("CurrentUser").getID()},jsonPayload:{header:b("RTCUtils").createResponseHeader(this.header(),c,d?d:""),body:e||{}}};return new a(c)};return a}();e.exports=a}),null);
__d("RTCMessageSender",["Promise","AsyncRequest","XGroupCallSendMessageController"],(function(a,b,c,d,e,f){var g=6e3;a=function(){"use strict";function a(){}var c=a.prototype;c.send=function(a){return new(b("Promise"))(function(c,d){a.jsonPayload.header.conferenceName;var e=b("XGroupCallSendMessageController").getURIBuilder().getURI();e=new(b("AsyncRequest"))(e).setMethod("POST").setData({message:JSON.stringify(a)}).setAllowCrossPageTransition(!0).setHandler(function(a){c(a)}).setErrorHandler(function(a){a=a.getErrorDescription();a=Error(a!=null?a.toString():"AsyncRequest error");d(a)}).setTimeoutHandler(g,function(){d("Timeout")});e.send()})};return a}();e.exports=a}),null);
__d("FBRTCTransactions",["Promise","FBRTCConsoleLogger","RTCMessageSender","clearTimeout","setTimeout"],(function(a,b,c,d,e,f){"use strict";var g=6e4,h=Object.freeze({INIT:0,PROCESSING:1,COMPLETED:2,TERMINATED:3});a=function(){function a(){this.$1=new Map()}var b=a.prototype;b.findTransaction=function(a){return this.$1.get(a)};b.addTransaction=function(a){this.$1.set(a.id,a)};b.removeTransaction=function(a){this.$1["delete"](a.id)};b.getTransaction=function(a){return this.findTransaction(a.transactionId())||new i(this,a)};return a}();var i=function(){function a(a,c){this.id=c.transactionId(),this.$1=h.INIT,this.$2=c,this.$3=null,this.$4=a,this.$5=new Error("Unknown"),this.$6=null,this.$7=new(b("RTCMessageSender"))(),this.$8(),this.$4.addTransaction(this)}var c=a.prototype;c.start=function(){if(this.$1==h.INIT){this.$9(h.PROCESSING);return b("Promise").resolve(this.$2)}else if(this.$1==h.PROCESSING)return b("Promise").resolve(null);else if(this.$1==h.COMPLETED){this.$10();return b("Promise").resolve(null)}return b("Promise").reject(this.$5)};c.sendResponse=function(a){var b=this;this.$3=a;this.$9(h.COMPLETED);return this.$7.send(a.message()).then(function(a){},function(a){b.$5=a,b.$9(h.TERMINATED)})};c.$10=function(){if(this.$3!=null){var a=this.$3;a.incrementRetryCount();this.sendResponse(a)}};c.$9=function(a){a!=this.$1&&(this.$1=a,this.$1!=h.TERMINATED&&this.$8(),this.$1==h.TERMINATED&&(this.$5=new Error("Terminated"),this.$4.removeTransaction(this)))};c.$8=function(){var a=this;this.$6&&(b("clearTimeout")(this.$6),this.$6=null);this.$6=b("setTimeout")(function(){a.$9(h.TERMINATED)},g)};return a}();e.exports={FBRTCTransactionOwner:a,FBRTCServerTransaction:i}}),null);
__d("MultiwayRequests",["Promise","AsyncRequest","FBRTCCapability","FBRTCMessageType","RTCUtils","XGroupCallSendRequestController"],(function(a,b,c,d,e,f){"use strict";var g=15e3;a=function(){function a(){}var c=a.prototype;c.sendJoinRequest=function(a,c,d,e,f,g,h,i){var j=h.callID,k=h.numParticipants;h=h.callTrigger;var l=i.userToEscalate,m=i.isEscalator;i=i.escP2PCallID;c=b("RTCUtils").createRequestHeader(b("FBRTCMessageType").JOIN,c,d,j,i);d={offer:{sdpString:e.toSdp()},deviceCapabilities:[b("FBRTCCapability").SUPPORT_AUDIO_DEPRECATED,b("FBRTCCapability").SUPPORT_VIDEO_DEPRECATED]};j=b("RTCUtils").createClientContextMessage(k,h?h:"");d.appMessages=[j];f&&f.length>0&&!l&&(d.usersToCall=f);l&&m&&(d.userToEscalate=l);g&&(d.mediaStatus=g);i={joinRequest:d};e=this.$1(a,c,i);return this.$2(e)};c.sendHangupRequest=function(a,c,d,e,f,g){c=b("RTCUtils").createRequestHeader(b("FBRTCMessageType").HANGUP,c,d,g);d={reason:e,detailedReasonString:f};g={hangupRequest:d};e=this.$1(a,c,g);return this.$2(e)};c.sendAddParticipantsRequest=function(a,c,d,e,f){c=b("RTCUtils").createRequestHeader(b("FBRTCMessageType").ADD_PARTICIPANTS,c,d,f);d={usersToInvite:e};f={addParticipantsRequest:d};e=this.$1(a,c,f);return this.$2(e)};c.sendRemoveParticipantsRequest=function(a,c,d,e,f){c=b("RTCUtils").createRequestHeader(b("FBRTCMessageType").REMOVE_PARTICIPANTS,c,d,f);d={usersToRemove:e};f={removeParticipantsRequest:d};e=this.$1(a,c,f);return this.$2(e)};c.sendSubscriptionRequest=function(a,c,d,e,f){c=b("RTCUtils").createRequestHeader(b("FBRTCMessageType").SUBSCRIPTION,c,d,f);d={subscriptions:e};f={subscriptionRequest:d};e=this.$1(a,c,f);return this.$2(e)};c.sendClientMediaUpdateRequest=function(a,c,d,e,f,g,h){c=b("RTCUtils").createRequestHeader(b("FBRTCMessageType").CLIENT_MEDIA_UPDATE,c,d,h);d={fromVersion:e,toVersion:f,mediaUpdates:g};h={clientMediaUpdateRequest:d};e=this.$1(a,c,h);return this.$2(e)};c.$2=function(a){return new(b("Promise"))(function(c,d){var e=b("XGroupCallSendRequestController").getURIBuilder().getURI();e=new(b("AsyncRequest"))(e).setMethod("POST").setData({request:JSON.stringify(a)}).setAllowCrossPageTransition(!0).setHandler(function(a){c(a.payload)}).setErrorHandler(function(a){a=a.getErrorDescription();a=Error(a!=null?a.toString():"AsyncRequest error");d(a)}).setTimeoutHandler(g,function(){d("Timeout")});e.send()})};c.$1=function(a,b,c){return{endpoint:a,jsonPayload:{header:b,body:c}}};return a}();e.exports=new a()}),null);
__d("RTCCallType",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({AUDIO_ONLY:"AUDIO_ONLY",VIDEO_ONLY:"VIDEO_ONLY",AUDIO_VIDEO:"AUDIO_VIDEO",NO_AUDIO_VIDEO:"NO_AUDIO_VIDEO"});e.exports=a}),null);
__d("RTCGroupCallAddUserWarningDialog.react",["fbt","MessengerDialog.react","MessengerDialogBody.react","MessengerDialogButton.react","MessengerDialogCancelButton.react","MessengerDialogFooter.react","MessengerDialogHeaderReact.re","MessengerDialogTitleReact.re","React"],(function(a,b,c,d,e,f,g){"use strict";var h=b("MessengerDialogHeaderReact.re").make,i=b("MessengerDialogTitleReact.re").make,j=b("React");a=function(a){var c=a.handleRing,d=a.onToggle,e=a.unMountParent;return j.jsxs(b("MessengerDialog.react"),{onToggle:d,children:[j.jsx(h,{children:j.jsx(i,{children:g._("Peringatan Menelepon Anggota")})}),j.jsx(b("MessengerDialogBody.react"),{children:g._("Anda mencoba menelepon pengguna yang diblokir.")}),j.jsxs(b("MessengerDialogFooter.react"),{children:[j.jsx(b("MessengerDialogCancelButton.react"),{}),j.jsx(b("MessengerDialogButton.react"),{label:g._("Telepon"),onClick:function(){d(),e(),c()},type:"primary",use:"default"})]})]})};e.exports=a}),null);
__d("RTCGroupCallAdminModelErrorDialogController",["cx","fbt","DOM","MessengerDialog.react","MessengerDialogBody.react","MessengerDialogButton.react","MessengerDialogFooter.react","React","ReactDOM"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("React"),j=300;a={_container:b("DOM").create("div"),showAdminModelErrorDialog:function(){var a=this;b("ReactDOM").render(i.jsxs(b("MessengerDialog.react"),{onToggle:function(){return a._onUnmount()},type:"default",width:j,children:[i.jsx(b("MessengerDialogBody.react"),{className:"_233q",children:h._("Hanya admin yang bisa menambahkan orang yang tidak ada dalam grup ini ke telepon")}),i.jsx(b("MessengerDialogFooter.react"),{children:i.jsx(b("MessengerDialogButton.react"),{className:"_30vt _233r",label:h._("Ok"),onClick:function(){return a._onUnmount()},type:"primary",use:"default"})})]}),this._container)},_onUnmount:function(){b("ReactDOM").unmountComponentAtNode(this._container)}};e.exports=a}),null);
__d("RTCGroupCallIncomingBlockedUserWarningDialog.react",["fbt","MessengerDialog.react","MessengerDialogBody.react","MessengerDialogButton.react","MessengerDialogFooter.react","MessengerDialogHeaderReact.re","MessengerDialogTitleReact.re","React"],(function(a,b,c,d,e,f,g){"use strict";var h=b("MessengerDialogHeaderReact.re").make,i=b("MessengerDialogTitleReact.re").make,j=b("React");a=function(a){var c=a.leaveCall,d=a.onAddStream,e=a.onToggle;return j.jsxs(b("MessengerDialog.react"),{onToggle:e,children:[j.jsx(h,{children:j.jsx(i,{children:g._("Peringatan Pengguna yang Diblokir Masuk")})}),j.jsx(b("MessengerDialogBody.react"),{children:g._("Anggota yang diblokir bergabung dengan panggilan telepon. Apa Anda ingin keluar?")}),j.jsxs(b("MessengerDialogFooter.react"),{children:[j.jsx(b("MessengerDialogButton.react"),{label:g._("Keluar Panggilan Telepon"),onClick:function(){e(),c()},type:"primary",use:"default"}),j.jsx(b("MessengerDialogButton.react"),{label:g._("Tetap tinggal"),onClick:function(){e(),d()},type:"primary",use:"default"})]})]})};e.exports=a}),null);
__d("RTCMeetupLockStatus.react",["React","RelayFBLiveEnvironment","RelayModern","RTCMeetupLockStatusQuery.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i=b("RelayModern").QueryRenderer;b("RelayModern").graphql;a=function(a){var c=a.linkURL,d=a.render;return h.jsx(i,{environment:b("RelayFBLiveEnvironment"),query:g!==void 0?g:g=b("RTCMeetupLockStatusQuery.graphql"),render:function(a){a=a.props;return d(a==null?void 0:(a=a.link)==null?void 0:a.lock_status)},variables:{room_link:c}})};e.exports=a}),null);
__d("RTCGroupCallDialogController",["DOM","FBRTCGroupCallVideoEscalationDialog.react","React","ReactDOM","RTCGroupCallAddMembersDialog.react","RTCGroupCallAddUserWarningDialog.react","RTCGroupCallIncomingBlockedUserWarningDialog.react","RTCGroupCallRemoveGuestDialogContainer.react","RTCGroupCallRosterDialog.react","RTCMeetupLockStatus.react","RTCVideoChatLinkDialog.react"],(function(a,b,c,d,e,f){"use strict";var g=b("React");a={_container:b("DOM").create("div"),_blockedContainer:b("DOM").create("div"),showVideoChatLinkDialog:function(){b("ReactDOM").render(g.jsx(b("RTCVideoChatLinkDialog.react"),{}),this._container)},showAddGroupMembersDialog:function(a,c,d,e,f){var h=this;b("ReactDOM").render(g.jsx(b("RTCGroupCallAddMembersDialog.react"),{isP2P:f,onUnmount:function(){return h._onUnmount()},participantStates:c,participants:a,thread:d,viewerID:e}),this._container)},showVideoEscalationDialog:function(a,c){var d=this;b("ReactDOM").render(g.jsx(b("FBRTCGroupCallVideoEscalationDialog.react"),{onToggle:function(){d._onUnmount(),c()},userName:a}),this._container)},showBlockedUserWarningDialog:function(a,c){var d=this;b("ReactDOM").render(g.jsx(b("RTCGroupCallAddUserWarningDialog.react"),{handleRing:a,onToggle:function(){d._onBlockedDialogUnmount()},unMountParent:c}),this._blockedContainer)},showIncomingBlockedUserWarningDialog:function(a,c,d,e){var f=this;b("ReactDOM").render(g.jsx(b("RTCGroupCallIncomingBlockedUserWarningDialog.react"),{leaveCall:a,onAddStream:function(){c(d,e)},onToggle:function(){f._onUnmount()}}),this._container)},showParticipantsRoster:function(a){var c=this;b("ReactDOM").render(g.jsx(b("RTCMeetupLockStatus.react"),{linkURL:a,render:function(a){return g.jsx(b("RTCGroupCallRosterDialog.react"),{lockStatus:a,onToggle:function(){c._onUnmount()}})}}),this._container)},showRemoveGuestDialog:function(a){var c=this;b("ReactDOM").render(g.jsx(b("RTCGroupCallRemoveGuestDialogContainer.react"),{onUnmount:function(){c._onUnmount()},user:a}),this._container)},_onUnmount:function(){b("ReactDOM").unmountComponentAtNode(this._container)},_onBlockedDialogUnmount:function(){b("ReactDOM").unmountComponentAtNode(this._blockedContainer)}};e.exports=a}),null);
__d("FBRTCGuestUtils",["MercuryIDs","immutable"],(function(a,b,c,d,e,f){"use strict";var g={isGuestFromLink:function(a,b){return a!=null&&b==null},fetchParticipantsInThread:function(a,c){var d=b("immutable").Map();a.participants.map(function(a){c.has(a)&&(d=d.set(a,c.get(a)))});return d},isAnonOrAuthGuestUser:function(a,c){var d=b("MercuryIDs").getParticipantIDFromUserID(a.FBID);return a.isGuestUser||c!=null&&!c.participants.includes(d)},fetchGuestFBIDsInCall:function(a,b){if(a===null||a===void 0)return[];a=g.fetchGuestParticipantsInCall(a,b);return Array.from(a.values()).map(function(a){return(a=a.fbid)!=null?a:""})},fetchGuestParticipantsInCall:function(a,c){if(a===null||a===void 0)return b("immutable").Map();var d=a.participants;return c.filter(function(a){return!d.includes(a.id)})}};e.exports=g}),null);
__d("RTCRosterContactItem.react",["cx","FBRTCParticipantCallState","MessengerContactImage.react","React","RTWebStrings"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){var c=a.isMessengerUser,d=a.imageSrc,e=a.name;a=a.connectedState;return h.jsxs("div",{className:"_4nvn",children:[h.jsx(b("MessengerContactImage.react"),{className:"_4nvr",isMessengerUser:c,size:32,src:d}),h.jsx("div",{className:"_4nvt",children:e}),a!==null?h.jsx("div",{className:"_1j79",children:i(a)}):null]})}function i(a){switch(a){case b("FBRTCParticipantCallState").CONTACTING:return b("RTWebStrings").contacting;case b("FBRTCParticipantCallState").RINGING:return b("RTWebStrings").ringing;case b("FBRTCParticipantCallState").IN_ANOTHER_CALL:return b("RTWebStrings").busy;case b("FBRTCParticipantCallState").NO_ANSWER:return b("RTWebStrings").noAnswer;default:return null}}e.exports=a}),null);
__d("RevokeMessengerCallInviteLinksForThreadMutation",["Promise","RelayFBEnvironment","RelayModern","VideoChatLinksUserActionsMultiplexLogger","RevokeMessengerCallInviteLinksForThreadMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("RelayModern").commitMutation;b("RelayModern").graphql;var i=g!==void 0?g:g=b("RevokeMessengerCallInviteLinksForThreadMutation.graphql");function a(a){return new(b("Promise"))(function(c,d){h(b("RelayFBEnvironment"),{mutation:i,variables:{input:{thread_id:a}},optimisticUpdater:null,onCompleted:function(a){},onError:function(a){j(a.message)}})})}function j(a){new(b("VideoChatLinksUserActionsMultiplexLogger"))().setSurface("www_incall").setEvent("error").setErrorType("RevokeLinkMutationError").setErrorDetails(a).log()}e.exports=a}),null);
__d("RTCGroupCallRemoveGuestDialog.react",["cx","fbt","FBRTCGroupCallStore","FBRTCGuestUtils","Image.react","Link.react","MessengerDialog.react","MessengerDialogBody.react","MessengerDialogButton.react","MessengerDialogCancelButton.react","MessengerDialogHeaderReact.re","MessengerDialogTitleReact.re","React","RevokeMessengerCallInviteLinksForThreadMutation","RTCCallStore","RTCMWProtocolHandler","RTCRosterContactItem.react","UserAgent","VideoChatLinksUserActionsMultiplexLogger","XUIText.react","promiseDone"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("MessengerDialogHeaderReact.re").make,j=b("MessengerDialogTitleReact.re").make,k=b("React");a=b("React");c=a.PureComponent;var l=460,m=300,n=b("UserAgent").isPlatform("Android")||b("UserAgent").isPlatform("iOS");d=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={dialogState:"DEFAULT"},c.updateDialog=function(a){var b=a==="REMOVE_ONE_GUEST"?"remove_single_guest_sheet_shown":a==="REMOVE_ALL_GUESTS"?"remove_all_guests_sheet_shown":"remove_guest_sheet_shown";c.getVideoChatLinkLogger().setEvent(b).log();c.setState({dialogState:a})},c.onDismiss=function(){var a=c.props.onUnmount,b=c.state.dialogState;b=b==="REMOVE_ONE_GUEST"?"remove_single_guest_sheet_dismissed":b==="REMOVE_ALL_GUESTS"?"remove_all_guests_sheet_dismissed":"remove_guest_sheet_dismissed";c.getVideoChatLinkLogger().setEvent(b).log();a()},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.getVideoChatLinkLogger=function(){return new(b("VideoChatLinksUserActionsMultiplexLogger"))().setSurface("www_incall").setVideoCallLinkHashRaw(this.props.linkHash)};d.componentDidMount=function(){this.getVideoChatLinkLogger().setEvent("remove_guest_sheet_shown").log()};d.componentDidUpdate=function(){};d.render=function(){switch(this.state.dialogState){case"REMOVE_ONE_GUEST":return k.jsx(r,{linkHash:this.props.linkHash,logger:this.getVideoChatLinkLogger(),onAction:this.updateDialog,onUnmount:this.onDismiss,user:this.props.user});case"REMOVE_ALL_GUESTS":return k.jsx(q,{linkHash:this.props.linkHash,logger:this.getVideoChatLinkLogger(),onAction:this.updateDialog,onUnmount:this.onDismiss,user:this.props.user});case"DEFAULT":return k.jsx(p,{linkHash:this.props.linkHash,linkOwner:this.props.linkOwner,onAction:this.updateDialog,onUnmount:this.onDismiss,user:this.props.user})}};return c}(c);function o(a,c,d){var e=b("RTCCallStore").getState().callInfo,f=e.conferenceName;e=e.serverInfoData;b("promiseDone")(b("RTCMWProtocolHandler").removeParticipants(f,e,a));a=(e=(f=c)!=null?f.thread_fbid:f)!=null?e:"";b("RevokeMessengerCallInviteLinksForThreadMutation")(a);d()}var p=function(a){var c=a.linkOwner,d=a.onAction,e=a.onUnmount;a=a.user;var f=!!a.profilePictureUrl;return k.jsxs(b("MessengerDialog.react"),{onToggle:e,type:"default",width:n?m:l,children:[k.jsx(i,{children:k.jsx(j,{children:h._("Hapus Tamu")})}),k.jsxs(b("MessengerDialogBody.react"),{children:[k.jsx("div",{className:"_7gh9",children:k.jsx(b("Image.react"),{className:(f?"_1z3u":"")+(f?"":" _1z3t"),src:a.profilePictureUrl})}),k.jsx("div",{className:"_7gha",children:k.jsx(j,{children:h._("Hapus \"{name of user to be removed}\"",[h._param("name of user to be removed",a.userShortName)])})}),k.jsx("div",{className:(n?"_8gx7":"")+" _7ghb"+(n?"":" _7i63"),children:c!==null?h._("\"{name of user to be removed}\" bergabung dari undangan {Possessive,name of user who invited this guest}. Anggota obrolan ini akan diberi tahu bahwa \"{name of guest user to be removed}\" dihapus.",[h._param("name of user to be removed",a.userShortName),h._param("Possessive,name of user who invited this guest",c),h._param("name of guest user to be removed",a.userShortName)]):h._("\"{name of user to be removed}\" akan dihapus dari obrolan video dan tautan ke obrolan ini akan dicabut. Anggota obrolan akan tahu bahwa \"{name of guest user to be removed}\" sudah dihapus.",[h._param("name of user to be removed",a.userShortName),h._param("name of guest user to be removed",a.userShortName)])})]}),k.jsx(b("Link.react"),{onClick:function(){d("REMOVE_ONE_GUEST")},children:k.jsx(b("XUIText.react"),{className:"_7ghc",display:"block",children:h._("Hapus \"{name of user to be removed}\"",[h._param("name of user to be removed",a.userShortName)])})}),k.jsx(b("Link.react"),{onClick:function(){d("REMOVE_ALL_GUESTS")},children:k.jsx(b("XUIText.react"),{className:"_7ghc",display:"block",children:h._("Hapus Semua Tamu")})}),k.jsx(b("Link.react"),{onClick:e,children:k.jsx(b("XUIText.react"),{className:"_7ghc",display:"block",children:h._("Batalkan")})})]})},q=function(a){var c=a.logger,d=a.onUnmount;a.user;a=b("FBRTCGroupCallStore").getState();var e=a.participants,f=a.thread;a=b("FBRTCGuestUtils").fetchGuestParticipantsInCall(f,e);return k.jsxs(b("MessengerDialog.react"),{onToggle:d,type:"default",width:n?m:l,children:[k.jsxs(i,{children:[k.jsx(b("MessengerDialogCancelButton.react"),{autoFocus:!1}),k.jsx(j,{children:h._("Hapus semua tamu")}),k.jsx(b("MessengerDialogButton.react"),{disabled:!1,label:h._("Hapus"),onClick:function(){c.setEvent("remove_all_guests_selected").log();var a=b("FBRTCGuestUtils").fetchGuestFBIDsInCall(f,e);o(a,f,d)},type:"primary",use:"default"})]}),k.jsxs(b("MessengerDialogBody.react"),{children:[k.jsx("div",{className:"_7i64",children:k.jsx(j,{children:h._({"*":"Anda yakin ingin menghapus {number} tamu?","_1":"Anda yakin ingin menghapus 1 tamu?"},[h._plural(a.size,"number")])})}),k.jsx("div",{className:(n?"_8gx7":"")+" _7ghb"+(n?"":" _7i65"),children:h._("Tamu yang bukan bagian dari grup Messenger akan dihapus. Tindakan ini juga akan mencabut tautan untuk obrolan ini dan orang yang memiliki tautan ini tidak akan bisa bergabung.")}),k.jsx("div",{className:"_788l",children:h._("Akan dihapus")}),Array.from(a.values()).map(function(a){return k.jsx(b("RTCRosterContactItem.react"),{connectedState:null,imageSrc:a.image_src,isMessengerUser:a.is_messenger_user,name:a.name},a.fbid)})]})]})},r=function(a){var c=a.logger,d=a.onUnmount,e=a.user;a=b("FBRTCGroupCallStore").getState();var f=a.thread;return k.jsxs(b("MessengerDialog.react"),{onToggle:d,type:"default",width:n?m:l,children:[k.jsxs(i,{children:[n?k.jsx(b("MessengerDialogButton.react"),{action:"cancel",disabled:!1,label:"X",onClick:d,type:"secondary",use:"default"}):k.jsx(b("MessengerDialogCancelButton.react"),{autoFocus:!1,onClick:d}),k.jsx(j,{children:h._("Hapus Tamu")}),k.jsx(b("MessengerDialogButton.react"),{disabled:!1,label:n?h._("Ya"):h._("Hapus"),onClick:function(){c.setEvent("remove_single_guest_selected").log(),o([e.FBID],f,d)},type:"primary",use:"default"})]}),k.jsxs(b("MessengerDialogBody.react"),{children:[k.jsx("div",{className:"_7i64",children:k.jsx(j,{children:h._("Anda yakin ingin menghapus \"{name of user to be removed}\"?",[h._param("name of user to be removed",e.userShortName)])})}),k.jsx("div",{className:(n?"_8gx7":"")+" _7ghb"+(n?"":" _7i66"),children:h._("Tindakan ini juga akan mencabut tautan untuk obrolan ini dan orang yang memiliki tautan ini tidak akan bisa bergabung.")})]})]})};e.exports=d}),null);
__d("RTCGroupCallRemoveGuestDialogContainer.react",["FBRTCGroupCallStore","React","RelayFBEnvironment","RelayModern","RTCCallStore","RTCGroupCallRemoveGuestDialog.react","RTCGroupCallRemoveGuestDialogContainerFetchLinkCreatorNameForGuestQuery.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i=b("RelayModern").QueryRenderer;b("RelayModern").graphql;var j=g!==void 0?g:g=b("RTCGroupCallRemoveGuestDialogContainerFetchLinkCreatorNameForGuestQuery.graphql");a=function(a){var c=b("RTCCallStore").getState().callInfo.serverInfoData,d=b("FBRTCGroupCallStore").getState(),e=d.linkHash;d=a.user.FBID;return h.jsx(i,{environment:b("RelayFBEnvironment"),query:j,render:function(c){c.error;c=c.props;if(c==null)return null;var d=null;c=(c=c)!=null?(c=c.messenger_call_query)!=null?(c=c.connected_participants)!=null?c.edges:c:c:c;if(c!=null&&c.length>0){d=(c=c[0])!=null?(c=c.joining_context)!=null?(c=c.link_owner)!=null?c.short_name:c:c:c}return h.jsx(b("RTCGroupCallRemoveGuestDialog.react"),{linkHash:e,linkOwner:d,onUnmount:a.onUnmount,user:a.user})},variables:{server_session_id:c!=null?c:"",guest_id:d}})};e.exports=a}),null);
__d("RTCMobileRosterSorter",["FBRTCParticipantCallState","immutable","memoizeLastByArgs","nullthrows"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d){var e={};for(var c=c,f=Array.isArray(c),g=0,c=f?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=c.length)break;h=c[g++]}else{g=c.next();if(g.done)break;h=g.value}h=h;e[h.get("FBID")]=h}h=[];g=null;for(var f=a,c=Array.isArray(f),a=0,f=c?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(c){if(a>=f.length)break;i=f[a++]}else{a=f.next();if(a.done)break;i=a.value}i=i;i[0];i=i[1];var j=b("nullthrows")(i.fbid),k=e[j];k=k?k.get("participantState"):null;k={payload:i,participantState:(i=k==null?void 0:k.state)!=null?i:b("FBRTCParticipantCallState").UNKNOWN};j===d?g=k:k.participantState===b("FBRTCParticipantCallState").CONNECTED&&h.push(k)}return{activeParticipants:h,localUser:b("nullthrows")(g)}}e.exports={sort:b("memoizeLastByArgs")(a)}}),null);
__d("RTCGroupCallRosterDialog.react",["cx","fbt","FBRTCGroupCallStore","FluxContainer","MessengerDialog.react","MessengerDialogButton.react","MessengerDialogHeaderReact.re","MessengerDialogTitleReact.re","React","RTCCallStore","RTCMobileRosterSorter","RTCRosterContactItem.react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("MessengerDialogHeaderReact.re").make,j=b("MessengerDialogTitleReact.re").make,k=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(){return[b("FBRTCGroupCallStore"),b("RTCCallStore")]};c.calculateState=function(){var a=b("FBRTCGroupCallStore").getState();a=a.participants;var c=b("RTCCallStore").getState(),d=c.callInfo.conferenceState,e=c.localUser;c=c.remoteUsers;return{conferenceState:d,roster:b("RTCMobileRosterSorter").sort(a,c,e.get("FBID"))}};var d=c.prototype;d.componentDidUpdate=function(){this.state.conferenceState==="TERMINATED"&&this.props.onToggle()};d.render=function(){var a=this.state.roster,c=a.activeParticipants;a=a.localUser;var d=h._("Daftar Peserta Telepon");return k.jsx(b("MessengerDialog.react"),{onToggle:this.props.onToggle,type:"default",children:k.jsxs("div",{className:"_788k",children:[k.jsxs(i,{children:[k.jsx(j,{children:this.props.lockStatus!=null?k.jsxs("div",{className:"_8trw",children:[d,k.jsx("br",{}),k.jsx("div",{className:"_8trx",children:this.props.lockStatus==="OPEN"?h._("Semua orang yang memiliki tautan ini dapat bergabung"):h._("Tidak ada orang yang bisa bergabung")})]}):d}),k.jsx(b("MessengerDialogButton.react"),{disabled:!1,label:h._("Tutup"),onClick:this.props.onToggle,type:"primary",use:"default"})]}),k.jsx("div",{className:"_788l",children:h._("Dalam obrolan ini")}),k.jsxs("div",{className:"_7dyr",children:[k.jsx(b("RTCRosterContactItem.react"),{connectedState:null,imageSrc:a.payload.image_src,isMessengerUser:a.payload.is_messenger_user,name:h._("Anda")},a.payload.fbid),c.map(function(a){return k.jsx(b("RTCRosterContactItem.react"),{connectedState:null,imageSrc:a.payload.image_src,isMessengerUser:a.payload.is_messenger_user,name:a.payload.name},a.payload.fbid)})]})]})})};return c}(k.Component);e.exports=b("FluxContainer").create(a)}),null);
__d("RTCGroupCallActions",["RTCAppDispatcher","RTCUtils"],(function(a,b,c,d,e,f){"use strict";a={setLayout:function(a){b("RTCAppDispatcher").dispatch({type:"SET_LAYOUT",layout:a})},setLinkHash:function(a){b("RTCAppDispatcher").dispatch({type:"SET_LINKHASH",linkHash:a})},setDominantSpeaker:function(a){b("RTCAppDispatcher").dispatch({type:"SET_DOMINANT_SPEAKER",dominantSpeakerFBID:a})},setPinnedSpeaker:function(a){b("RTCAppDispatcher").dispatch({type:"SET_PINNED_SPEAKER",pinnedSpeakerFBID:a})},initThread:function(a,c){b("RTCAppDispatcher").dispatch({type:"INIT_THREAD",thread:a,participants:c})},onParticipantLeft:function(a){b("RTCAppDispatcher").dispatch({type:"ON_PARTICIPANT_LEFT",participantFBID:a})},onParticipantsAdded:function(a,c){b("RTCAppDispatcher").dispatch({type:"ON_PARTICIPANTS_ADDED",participants:a,images:c})},addParticipantsToRing:function(a){b("RTCAppDispatcher").dispatch({type:"ADD_PARTICIPANTS_TO_RING",participantFBIDs:a})},toggleRemoteStream:function(a){b("RTCAppDispatcher").dispatch({type:"TOGGLE_REMOTE_STREAM",mediaStatus:a})},handleDismissRequest:function(a,c){b("RTCAppDispatcher").dispatch({type:"DISMISS",transaction:a,request:c,endCallReason:b("RTCUtils").endCallReasonFromDismissRequest(c.dismissRequest()),endCallSubreason:b("RTCUtils").endCallSubreasonFromDismissRequest(c.dismissRequest())})},handleConferenceStateRequest:function(a,c,d,e){b("RTCAppDispatcher").dispatch({type:"ON_CONFERENCE_STATE",transaction:a,request:c,conferenceStateVersion:d,resolve:e})},onJoinRequestSent:function(){b("RTCAppDispatcher").dispatch({type:"ON_JOIN_REQUEST_SENT"})},onReceivedJoinResponse:function(){b("RTCAppDispatcher").dispatch({type:"ON_RECEIVED_JOIN_RESPONSE"})},onJoinResponse:function(a){b("RTCAppDispatcher").dispatch({type:"ON_JOIN_RESPONSE",serverInfoData:a})},onProcessedJoinResponse:function(){b("RTCAppDispatcher").dispatch({type:"ON_PROCESSED_JOIN_RESPONSE"})},onServerMediaUpdateSuccess:function(){b("RTCAppDispatcher").dispatch({type:"ON_SERVER_MEDIA_UPDATE_SUCCESS"})},setLocalClientVersion:function(a){b("RTCAppDispatcher").dispatch({type:"SET_LOCAL_CLIENT_VERSION",version:a})},onClientMediaUpdateResponse:function(a,c){b("RTCAppDispatcher").dispatch({type:"ON_CLIENT_MEDIA_UPDATE_RESPONSE",responseStatusCode:a,currentVersion:c})}};e.exports=a}),null);
__d("RTCMWSessionDescription",["Promise","FBRTCConsoleLogger","FBRTCConstants","RTCCallStore","RTCGroupCallActions","RTCSignalingExperiments"],(function(a,b,c,d,e,f){"use strict";var g=b("FBRTCConstants").SignalingProtocol;a={_videoEnabled:{},serverMediaUpdate:function(a,c){var d=a.fromVersion,e=a.toVersion,f=a.mediaUpdates,h=b("RTCCallStore").getConnection(g.MULTIWAY);if(!h)return;a=h.getLocalDescription();var i=h.getRemoteDescriptionForSMU(),j=i.sessionDescription.getVersion();if(j!==d){c(j);return}d=i.toSdp();f.forEach(function(a){i.processServerMediaUpdate(a)});var k=b("Promise").resolve(),l=b("RTCSignalingExperiments").shouldAlwaysSetMWDescriptionsOnSMU();(l||i.toSdp()!==d)&&(i.sessionDescription.setVersion(e),k=b("Promise").all([h.setLocalDescription(a),h.setRemoteDescription(i)]));k.then(function(){var a;b("RTCGroupCallActions").toggleRemoteStream((a=[]).concat.apply(a,f.map(function(a){a=a.media;return a})).reduce(function(a,b){var c=b.id;b=b.enabled;c=h.getWebrtcTrackIdFromMWTrackId(c);a[c]=b;return a},{}));c(e)},function(){return c(j)})["catch"](function(a){})}};e.exports=a}),null);
__d("RTCMWThreadDeltaHandler",["Arbiter","ChannelConstants","CurrentUser","MercuryIDs","MercurySyncDeltaTypes","MessengerParticipants.bs","RTCCallInitUtils","RTCGroupCallActions"],(function(a,b,c,d,e,f){"use strict";a={initHandler:function(a){b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("delta"),function(c,d){c=d&&d.obj&&d.obj.queue;if(c&&c.toString()!==b("CurrentUser").getID())return;d=(c=d)!=null?(c=c.obj)!=null?c.delta:c:c;c=(c=d)!=null?(c=c.messageMetadata)!=null?(c=c.threadKey)!=null?c.threadFbId:c:c:c;if(!d||c!==a)return;switch(d["class"]){case b("MercurySyncDeltaTypes").ParticipantLeftGroupThread:b("RTCGroupCallActions").onParticipantLeft(d.leftParticipantFbId);break;case b("MercurySyncDeltaTypes").ParticipantsAddedToGroupThread:b("MessengerParticipants.bs").getMulti(d.addedParticipants.map(function(a){a=a.userFbId;return b("MercuryIDs").getParticipantIDFromUserID(a)}),b("RTCGroupCallActions").onParticipantsAdded);break}})},processThreadUpdateFromSignaling:function(a){var c=null;a=a.appMessages;a&&a.forEach(function(a){var b;b=(b=a)!=null?(b=b.body)!=null?(b=b.genericMessage)!=null?b.topic:b:b:b;a=(a=a)!=null?(a=a.body)!=null?(a=a.genericMessage)!=null?a.data:a:a:a;if(b==="thread_id_payload"&&a!=null){b=JSON.parse(a);if(b.thread_id!==null){c=b.thread_id;return}}});c&&b("RTCCallInitUtils").initializeThreadFromCollisionContext({groupThreadID:String(c),peerID:null})}};e.exports=a}),null);
__d("RTCProxyUserActions",["RTCAppDispatcher"],(function(a,b,c,d,e,f){"use strict";a={setProxyUsers:function(a,c){b("RTCAppDispatcher").dispatch({type:"SET_PROXY_USER_MAP",proxyUserID:a,proxyingAsUserID:c})}};e.exports=a}),null);
__d("RTCProxyUserReducer",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){switch(b.type){case"SET_PROXY_USER_MAP":var c=b.proxyUserID;b=b.proxyingAsUserID;if(!a.proxyUserToProxyingAs.has(c))return a.set("proxyingAsToProxyUser",a.proxyingAsToProxyUser.set(b,c)).set("proxyUserToProxyingAs",a.proxyUserToProxyingAs.set(c,b))}return a}e.exports={setProxyUsers:a}}),null);
__d("RTCProxyUserStoreState",["immutable"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("immutable").Record({proxyingAsToProxyUser:b("immutable").Map(),proxyUserToProxyingAs:b("immutable").Map()}));e.exports=a}),null);
__d("RTCProxyUserStore",["FluxReduceStore","RTCAppDispatcher","RTCProxyUserReducer","RTCProxyUserStoreState"],(function(a,b,c,d,e,f){"use strict";var g=[b("RTCProxyUserReducer").setProxyUsers];a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return new(b("RTCProxyUserStoreState"))()};d.reduce=function(a,b){return g.reduce(function(a,c){return c(a,b)},a)};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("RTCAppDispatcher"))}),null);
__d("RTCProxyUserUtils",["ImmutableObject","MercuryIDs","RTCProxyUserActions","RTCProxyUserStore","RTWebUserActionLogger","immutable"],(function(a,b,c,d,e,f){"use strict";a={setProxyingAsUsersFromMessage:function(a){a=a.appMessages;if(a){var c=new Map();a.forEach(function(a){var d;d=(d=a)!=null?(d=d.body)!=null?(d=d.genericMessage)!=null?d.topic:d:d:d;a=(a=a)!=null?(a=a.body)!=null?(a=a.genericMessage)!=null?a.data:a:a:a;if(d==="aloha_proxying_as_users"&&a!=null){b("RTWebUserActionLogger").logCheckpoint({checkpoint:"Initializing_AlohaProxyingAsUsers"});d=JSON.parse(a);for(var e in d){a=d[e][0].id.toString();a&&(b("RTCProxyUserActions").setProxyUsers(e,a),c.set(e,a))}}});return c}return null},transformProxyUserParticipantsToProxyingAs:function(a,c){for(var d in a){var e=a[d].fbid;if(c.has(e)){var f=a[d];e=c.get(e);var g=b("MercuryIDs").getParticipantIDFromUserID(e);f=b("ImmutableObject").setProperty(f,"fbid",e);f=b("ImmutableObject").setProperty(f,"id",g);a[g]=f}}return a},getUserIDToFetch:function(a){var c=b("RTCProxyUserStore").getState();c=c.proxyUserToProxyingAs;return c.has(a)?c.get(a):a}};e.exports=a}),null);
__d("MultiwayParticipantFetcher",["Promise","regeneratorRuntime","ImmutableObject","MercuryIDs","MercuryParticipantsConstants","MessengerParticipants.bs","MessengerParticipantsImages.re","RTCProxyUserUtils","immutable"],(function(a,b,c,d,e,f){"use strict";b("immutable").Map;b("immutable").Set;function g(a,c){var d=a.map(function(a){return b("MercuryIDs").getParticipantIDFromUserID(a)});return new(b("Promise"))(function(a,e){try{b("MessengerParticipantsImages.re").getBigImageMultiWithSize({ids:d.toArray(),callback:function(c){a(b("immutable").fromJS(c))},size:c})}catch(a){e(a)}})}function h(a,c){var d=a.map(function(a){return b("MercuryIDs").getParticipantIDFromUserID(a)});return new(b("Promise"))(function(a,e){try{b("MessengerParticipants.bs").getMulti(d.toArray(),function(d){c&&c.proxyingAsToProxyUser!=null&&c.proxyingAsToProxyUser!==void 0&&c.proxyingAsToProxyUser.size>0&&(d=b("RTCProxyUserUtils").transformProxyUserParticipantsToProxyingAs(d,c.proxyingAsToProxyUser)),a(b("immutable").fromJS(d))})}catch(a){e(a)}})}function i(a,c){var d,e;return b("regeneratorRuntime").async(function(f){while(1)switch(f.prev=f.next){case 0:f.next=2;return b("regeneratorRuntime").awrap(h(a,c));case 2:d=f.sent;if(!c.profileImageSize){f.next=8;break}f.next=6;return b("regeneratorRuntime").awrap(g(a,c.profileImageSize));case 6:e=f.sent;return f.abrupt("return",d.withMutations(function(a){e.forEach(function(c,d){var e=a.get(d);if(e){e=b("ImmutableObject").setProperty(e,"big_image_src",c);a.set(d,e)}})}));case 8:return f.abrupt("return",d);case 9:case"end":return f.stop()}},null,this)}function j(a){var c,d,e;return b("regeneratorRuntime").async(function(f){while(1)switch(f.prev=f.next){case 0:c=b("immutable").Set([a]);d=b("MercuryIDs").getParticipantIDFromUserID(a);f.next=4;return b("regeneratorRuntime").awrap(i(c,{profileImageSize:b("MercuryParticipantsConstants").WWW_INCALL_THUMBNAIL_SIZE}));case 4:e=f.sent;return f.abrupt("return",e.get(d));case 6:case"end":return f.stop()}},null,this)}a={fetchParticipant:function(a,c){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(j(c));case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},null,this)},fetchAllParticipants:function(a,c,d){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:d===void 0&&(d={});a.next=3;return b("regeneratorRuntime").awrap(i(c,d));case 3:return a.abrupt("return",a.sent);case 4:case"end":return a.stop()}},null,this)}};e.exports=a}),null);
__d("RTCCallActions",["invariant","RTCAppDispatcher","RTCUtils","RTWebUserActionLogger","emptyFunction","mixInEventEmitter"],(function(a,b,c,d,e,f,g){"use strict";var h={addListener:b("emptyFunction"),emit:b("emptyFunction"),initialize:function(a){b("RTWebUserActionLogger").logCheckpoint({checkpoint:"RTCCallActions_initialize",callID:String(a.callID),conferenceName:a.conferenceName,callType:a.protocol==="p2p"?"p2p":"mw"}),b("RTCAppDispatcher").dispatch(babelHelpers["extends"]({type:"INIT"},a))},reset:function(){b("RTCAppDispatcher").dispatch({type:"RESET"})},resetForRedial:function(a,c){b("RTCAppDispatcher").dispatch({type:"RESET_FOR_REDIAL",conferenceName:a,callID:c})},callCollision:function(a,c){b("RTCAppDispatcher").dispatch({type:"CALL_COLLISION",conferenceName:a,peerID:c})},setCallSummary:function(a){b("RTCAppDispatcher").dispatch({type:"SET_CALL_SUMMARY",callSummary:a})},call:function(a,c){b("RTCAppDispatcher").dispatch({type:"CALL",usersToRing:a,peerConnection:c})},callSuccess:function(a){a===void 0&&(a=!1),b("RTCAppDispatcher").dispatch({type:"CALL_SUCCESS",connected:a})},incomingCallSuccess:function(){b("RTCAppDispatcher").dispatch({type:"INCOMING_CALL_SUCCESS"})},callError:function(a,c){b("RTCAppDispatcher").dispatch({type:"CALL_ERROR",endCallReason:b("RTCUtils").endCallReasonFromResponseStatusCode(a),endCallSubreason:"Call error: "+(a||0),responseSubCode:c})},completeTransitionToMultiway:function(){b("RTCAppDispatcher").dispatch({type:"GROUP_ESCALATION_CLEAR_P2P_CONNECTION"})},hangupSuccess:function(){b("RTCAppDispatcher").dispatch({type:"HANGUP_SUCCESS"})},hangupError:function(){b("RTCAppDispatcher").dispatch({type:"HANGUP_ERROR"})},join:function(a){h.call([],a)},hangup:function(a,c){b("RTCAppDispatcher").dispatch({type:"HANGUP",hangupReason:a,detailedReasonString:c,endCallReason:a})},initLocalUser:function(a){b("RTCAppDispatcher").dispatch({type:"INIT_LOCAL_USER",localUser:a})},initRemoteUsers:function(a){b("RTCAppDispatcher").dispatch({type:"INIT_REMOTE_USERS",remoteUsers:a})},updateRemoteUsers:function(a){b("RTCAppDispatcher").dispatch({type:"UPDATE_REMOTE_USERS",remoteUsers:a})},addLocalStream:function(a){a!=null||g(0,11208),b("RTCAppDispatcher").dispatch({type:"ADD_LOCAL_STREAM",stream:a})},removeLocalStream:function(a){b("RTCAppDispatcher").dispatch({type:"REMOVE_LOCAL_STREAM",stream:a})},replaceLocalStream:function(a,c){b("RTCAppDispatcher").dispatch({type:"REPLACE_LOCAL_STREAM",oldStream:a,newStream:c})},removeAllLocalStreams:function(a){a===void 0&&(a=!1),b("RTCAppDispatcher").dispatch({type:"REMOVE_ALL_LOCAL_STREAMS",stopStreams:a})},removeAllLocalScreenStreams:function(a){a===void 0&&(a=!1),b("RTCAppDispatcher").dispatch({type:"REMOVE_ALL_LOCAL_SCREEN_STREAMS",stopStreams:a})},addRemoteStream:function(a,c){b("RTCAppDispatcher").dispatch({type:"ADD_REMOTE_STREAM",stream:a,userID:c})},removeRemoteStream:function(a,c){b("RTCAppDispatcher").dispatch({type:"REMOVE_REMOTE_STREAM",stream:a,userID:c})},removeAllRemoteStreams:function(a){b("RTCAppDispatcher").dispatch({type:"REMOVE_ALL_REMOTE_STREAMS",userID:a})},addRemoteTrack:function(a,c){b("RTCAppDispatcher").dispatch({type:"ADD_REMOTE_TRACK",stream:a,track:c})},removeRemoteTrack:function(a,c){b("RTCAppDispatcher").dispatch({type:"REMOVE_REMOTE_TRACK",stream:a,track:c})},addLocalScreenStream:function(a){b("RTCAppDispatcher").dispatch({type:"ADD_LOCAL_SCREEN_STREAM",stream:a})},removeLocalScreenStream:function(a){b("RTCAppDispatcher").dispatch({type:"REMOVE_LOCAL_SCREEN_STREAM",stream:a})},replaceLocalScreenStream:function(a,c){b("RTCAppDispatcher").dispatch({type:"REPLACE_LOCAL_SCREEN_STREAM",oldStream:a,newStream:c})},addRemoteScreenStream:function(a,c){b("RTCAppDispatcher").dispatch({type:"ADD_REMOTE_SCREEN_STREAM",stream:a,userID:c})},removeRemoteScreenStream:function(a,c){b("RTCAppDispatcher").dispatch({type:"REMOVE_REMOTE_SCREEN_STREAM",stream:a,userID:c})},endCall:function(a,c){b("RTCAppDispatcher").dispatch({type:"END_CALL",endCallReason:a,endCallSubreason:c})},waitForUserInput:function(){b("RTCAppDispatcher").dispatch({type:"WAIT_FOR_USER_INPUT"})},toggleMuteAudio:function(a){b("RTCAppDispatcher").dispatch({type:a?"AUDIO_UNMUTED":"AUDIO_MUTED"})},toggleMuteVideo:function(a){b("RTCAppDispatcher").dispatch({type:a?"VIDEO_UNMUTED":"VIDEO_MUTED"})},stopLocalVideo:function(){b("RTCAppDispatcher").dispatch({type:"STOP_LOCAL_STREAM"})},toggleMuteRemoteAudio:function(a,c){b("RTCAppDispatcher").dispatch({type:a?"REMOTE_AUDIO_MUTED":"REMOTE_AUDIO_UNMUTED",userID:c})},toggleMuteRemoteVideo:function(a,c){b("RTCAppDispatcher").dispatch({type:a?"REMOTE_VIDEO_MUTED":"REMOTE_VIDEO_UNMUTED",userID:c})},toggleSelfView:function(a){b("RTCAppDispatcher").dispatch({type:a?"SELF_VIEW_COLLAPSED":"SELF_VIEW_UNCOLLAPSED"})},submitRating:function(a){b("RTCAppDispatcher").dispatch({type:"SUBMIT_RATING",rating:a})},submitFeedback:function(a){b("RTCAppDispatcher").dispatch({type:"SUBMIT_FEEDBACK",feedback:a})},submitFeedbackOptions:function(a){b("RTCAppDispatcher").dispatch({type:"SUBMIT_FEEDBACK_OPTIONS",feedbackOptions:a})},submitSurveyChoice:function(a){b("RTCAppDispatcher").dispatch({type:"SUBMIT_SURVEY_CHOICE",surveyChoice:a})},ratingShown:function(){b("RTCAppDispatcher").dispatch({type:"RATING_SHOWN"})},feedbackShown:function(){b("RTCAppDispatcher").dispatch({type:"FEEDBACK_SHOWN"})},setEndCallReason:function(a){b("RTCAppDispatcher").dispatch({type:"SET_END_CALL_REASON",endCallReason:a})},setConferenceState:function(a){b("RTCAppDispatcher").dispatch({type:"SET_CONFERENCE_STATE",conferenceState:a})}};b("mixInEventEmitter")(h,{onIceConnectionStateChange:!0});e.exports=h}),null);
__d("RTCMultiwayMessageHandler",["CurrentUser","FBMqttChannel","FBRTCCapability","FBRTCDeviceStatus","FBRTCHangupReason","FBRTCLogger","FBRTCMultiwayMessage","FBRTCRtcResponseStatusCode","FBRTCTransactions","MultiwayParticipantFetcher","RTCCallActions","RTCCallStore","RTCGroupCallActions","RTCMWProtocolHandler","RTCMWSessionDescription","RTCMWThreadDeltaHandler","RTCP2PCallStore","RTCProxyUserStore","RTCProxyUserUtils","Run","generateRTCCallID","immutable","promiseDone"],(function(a,b,c,d,e,f){"use strict";var g=b("FBRTCTransactions").FBRTCServerTransaction,h=b("FBRTCTransactions").FBRTCTransactionOwner;a=function(){function a(){this.$3=-1,this.$6(),b("Run").onUnload(function(){b("FBMqttChannel").unsubscribeAll("/rtc_multi")})}var c=a.prototype;c.initialize=function(a,b,c,d){this.$1=a,this.$2=b,this.$4=c,this.$5=d};a.initHandler=function(b,c,d,e){d===void 0&&(d=!1),e===void 0&&(e=!1),new a().initialize(b,c,d,e)};a.close=function(){};c.$6=function(){var a=this;b("FBMqttChannel").subscribe("/rtc_multi",function(b){b=JSON.parse(b);a.$7(b)})};c.$7=function(a){var c=this,d=new(b("FBRTCMultiwayMessage"))(a);a=b("RTCCallStore").getState().callID;b("FBRTCLogger").getInstance().logMultiwayMessageReceived(d,a);if(!d.isRequest())return;if(this.$1===d.conferenceName())this.$8(d);else if(d.ringRequest()&&!this.$4){var e=new g(new h(),d);b("promiseDone")(e.start(),function(a){var f=b("generateRTCCallID")();b("promiseDone")(e.sendResponse(c.$9(a,f)),function(){return b("RTCMWProtocolHandler").otherUserInAnotherCall(d.conferenceName(),d.serverInfoData(),b("FBRTCHangupReason").IN_ANOTHER_CALL,f.toString(),"InAnotherCall")})})}};c.$9=function(a,c){var d=a.ringRequest(),e=a.serverInfoData();if(d==null||e==null)return a.createResponse(b("FBRTCRtcResponseStatusCode").BAD_REQUEST,{});d={deviceCapabilities:[b("FBRTCCapability").SUPPORT_AUDIO_DEPRECATED,b("FBRTCCapability").SUPPORT_VIDEO_DEPRECATED],deviceStatus:b("FBRTCDeviceStatus").OK};return a.createResponse(b("FBRTCRtcResponseStatusCode").OK,{body:{ringResponse:d},callID:c.toString()})};c.$8=function(c){var d=this,e=new g(new h(),c);b("promiseDone")(e.start().then(function(c){if(c!=null){var f=b("RTCCallStore").getState(),g=f.callInfo;if(c.dismissRequest()!=null)c.serverInfoData()===g.serverInfoData&&(b("RTCGroupCallActions").handleDismissRequest(e,c),a.close(),f.connections.forEach(function(a){return a.close()}),d.$5||b("RTCCallActions").removeAllLocalStreams(!0));else if(c.serverMediaUpdateRequest()!=null)b("RTCProxyUserUtils").setProxyingAsUsersFromMessage(c.serverMediaUpdateRequest()),b("RTCMWSessionDescription").serverMediaUpdate(c.serverMediaUpdateRequest(),function(a){b("RTCGroupCallActions").onServerMediaUpdateSuccess(),e.sendResponse(c.createResponse(b("FBRTCRtcResponseStatusCode").OK,{body:{serverMediaUpdateResponse:{currentVersion:a}},callID:g.callID}))});else if(c.conferenceStateRequest()!=null){f=c.conferenceStateRequest();var h=b("RTCCallStore").getState();h=h.remoteUsers;var i=h.map(function(a){return a.FBID});h=Object.keys(f.participantStates);h=h.filter(function(a){return a!==b("CurrentUser").getID()&&!i.has(a)});if(h.length>0){var j=b("RTCP2PCallStore").getState();j=j.escalationConferenceName;j==null&&b("RTCMWThreadDeltaHandler").processThreadUpdateFromSignaling(f);j=b("RTCProxyUserUtils").setProxyingAsUsersFromMessage(f);var k=new Set(h);j!=null&&j.forEach(function(a,b){k["delete"](b),a!==null&&!k.has(a)&&k.add(a)});f=b("RTCProxyUserStore").getState();h=f.proxyingAsToProxyUser;b("promiseDone")(b("MultiwayParticipantFetcher").fetchAllParticipants(d.$1,b("immutable").Set(k),{profileImageSize:100,proxyingAsToProxyUser:h}),function(a){b("RTCGroupCallActions").onParticipantsAdded(a.toJS()),b("RTCGroupCallActions").handleConferenceStateRequest(e,c,d.$3,function(a){d.$3=a})})}else b("RTCGroupCallActions").handleConferenceStateRequest(e,c,d.$3,function(a){d.$3=a})}}}))};return a}();e.exports=a}),null);
__d("RTCP2PCallWindowHandler",["RTCCallStore","RTCP2PCallStore","RTWebUserActionLogger","setTimeout"],(function(a,b,c,d,e,f){"use strict";var g;a={init:function(a){this._isWindowOpened()&&this.close(),g=a,this.updateCallInProgressIndicator(),this._monitorOpenerForChanges()},updateCallInProgressIndicator:function(a){if(!this._isWindowOpened())return;var c=b("RTCCallStore").getState();c=c.remoteUsers;a=a?a:b("RTCP2PCallStore").getState().connectionStatus;!c.count()||a==="DISCONNECTED"?g.rtcCallInProgessWith=null:g.rtcCallInProgessWith=c.first().FBID.toString()},reload:function(){this._isWindowOpened()&&g.location.reload()},close:function(){this._isWindowOpened()&&g.close()},_monitorOpenerForChanges:function(){var a=this;if(g.opener)try{g.opener.addEventListener("unload",function(b){a._passWindowToOpener()})}catch(a){}},_passWindowToOpener:function(a){var c=this;a===void 0&&(a=10);b("setTimeout")(function(){if(!c._isWindowOpened()||a<=1)return;try{if(g.opener&&!g.opener.closed){g.opener.rtcCallChildWindow=g;return}}catch(a){b("RTWebUserActionLogger").logErrorOnceforDomain("RTCP2PCallWindowHandler__passWindowToOpener",a)}c._passWindowToOpener(a-1)},1e3)},_isWindowOpened:function(){return!!(g&&!g.closed)}};e.exports=a}),null);
__d("RTCScreenSharingWindowHandler",["RTCP2PCallActions","RTCUtils","SecurePostMessage","XScreenSharingController","promiseDone"],(function(a,b,c,d,e,f){var g=540,h=960,i;a={open:function(a,c,d){var e=this;i=window.open("about:blank","Screen Sharing",this._getWindowFeatures());window.callInfo=d;b("promiseDone")(b("RTCUtils").getStreamVideoResolution(c)["catch"](function(b){e._setupScreenSharingWindow(a,c,null)}),function(b){e._setupScreenSharingWindow(a,c,b)})},_setupScreenSharingWindow:function(a,b,c){var d=this;window.getRemoteMediaStream=function(){return b};window.closeScreenSharingWindow=this._onUnload;if(c){c=this._getConstrainedSize(c.width,c.height);var e=c.width,f=c.height;i.resizeTo(e,f);window.setTimeout(function(){d._adjustScreenSize({width:e,height:f})},200)}i.location=this._getUnsignedUri(a);window.focus&&this.isWindowOpened()&&i.focus()},_adjustScreenSize:function(a){if(!i)return;i.resizeTo(a.width,a.height+(a.height-i.innerHeight))},close:function(){if(i){var a=null;i.opener&&!i.opener.closed&&(a=i.opener);i.close();i=null;a&&b("SecurePostMessage").sendMessageAllowAnyOrigin_UNSAFE(a,{recipient:"SC_CONTENT_SCRIPT",type:"SC_RESET_PORT",text:"reset comm port"})}},isWindowOpened:function(){return!!(i&&!i.closed)},_onUnload:function(){b("RTCP2PCallActions").togglePopOutScreenContent()},_getWindowFeatures:function(){var a=screen.availLeft,b=screen.availTop,c=this._getConstrainedSize(Math.min(h,screen.width-a),Math.min(g,screen.height-b)),d=c.width;c=c.height;c={height:"height="+c.toString(),width:"width="+d.toString(),top:"top="+b.toString(),left:"left="+a.toString()};return["menubar=no","location=no","scrollbars=no","status=no","personalbar=no",c.height,c.width,c.top,c.left].join(",")},_getConstrainedSize:function(a,b){var c;a>h&&(c=h/a,b*=c,a*=c);b>g&&(c=g/b,a*=c,b*=c);return{width:a,height:b}},_getUnsignedUri:function(a){return b("XScreenSharingController").getURIBuilder().setFBID("peer_id",a).setInt("version",2).getURI()}};e.exports=a}),null);
__d("RTCP2PCallActions",["RTCAppDispatcher","RTCP2PCallWindowHandler"],(function(a,b,c,d,e,f){"use strict";a={reload:function(){b("RTCP2PCallWindowHandler").reload()},setCallType:function(a){b("RTCAppDispatcher").dispatch({type:"SET_CALL_TYPE",callType:a})},setConnectionStatus:function(a){b("RTCAppDispatcher").dispatch({type:"SET_CONNECTION_STATUS",connectionStatus:a})},setMultiwayEscalationSupport:function(a,c){b("RTCAppDispatcher").dispatch({type:"SET_MULTIWAY_ESCALATION_SUPPORT",offerEscalationSupport:a,escalationConferenceName:c})},setRemoteSignalingExperiments:function(a){b("RTCAppDispatcher").dispatch({type:"SET_REMOTE_SIGNALING_EXPERIMENTS",remoteSignalingExperiments:a})},togglePopOutScreenContent:function(a){b("RTCAppDispatcher").dispatch({type:a?"POP_OUT_SCREEN_CONTENT":"POP_IN_SCREEN_CONTENT",stream:a})},processMessage:function(a){b("RTCAppDispatcher").dispatch({type:"P2P_PROCESS_MESSAGE",message:a})},setIsCaller:function(a){b("RTCAppDispatcher").dispatch({type:"P2P_SET_IS_CALLER",isCaller:a})},togglePoorNetworkQualityIndicator:function(a){b("RTCAppDispatcher").dispatch({type:a?"SHOW_POOR_NETWORK_QUALITY":"DISMISS_POOR_NETWORK_QUALITY"})},starRatingDone:function(a){a===void 0&&(a=!0),b("RTCAppDispatcher").dispatch({type:"P2P_STAR_RATING_DONE",done:a})}};e.exports=a}),null);
__d("FBRTCCallSummaryReducer",["requireCond","FBRTCCallSummaryPageVisibilityObserver","FBRTCCallSummaryStore","FBRTCLogger","FBRTCMediaMetricParser","RTCCallStore","cr:1401795"],(function(a,b,c,d,e,f){"use strict";var g=b("FBRTCLogger").Key;a={setCallSummary:function(a,b){switch(b.type){case"SET_CALL_SUMMARY":return a.set("callSummary",b.callSummary)}return a},onCallStarted:function(a,c){switch(c.type){case"INCOMING_CALL_SUCCESS":case"CALL_SUCCESS":c=function c(){var d=b("RTCCallStore").getState().callInfo,e=d.conferenceState;d=d.callID;e!=="TERMINATED"&&a.callInfo.callID===d&&(a.callSummary.save(b("FBRTCCallSummaryStore").getInstance()),window.setTimeout(c,1e4))};c();b("FBRTCCallSummaryPageVisibilityObserver").onCallStart(a.callSummary);b("FBRTCMediaMetricParser").startCollectingMediaStats();return a}return a},onMessageSignaling:function(a,c){switch(c.type){case"ON_JOIN_REQUEST_SENT":a.callSummary.setJoinRequestSent();a.callSummary.save(b("FBRTCCallSummaryStore").getInstance());return a;case"ON_RECEIVED_JOIN_RESPONSE":a.callSummary.setJoinResponseReceived();a.callSummary.save(b("FBRTCCallSummaryStore").getInstance());return a;case"ON_JOIN_RESPONSE":a.callSummary.setServerInfoData(c.serverInfoData);a.callSummary.save(b("FBRTCCallSummaryStore").getInstance());return a;case"ON_PROCESSED_JOIN_RESPONSE":a.callSummary.setJoinResponseProcessed();a.callSummary.save(b("FBRTCCallSummaryStore").getInstance());return a}return a},onCallEnded:function(a,c){switch(c.type){case"CALL_ERROR":case"HANGUP":case"END_CALL":a.callSummary.onCallEnded(c.endCallReason,!1,!1,c.endCallSubreason);a.callSummary.save(b("FBRTCCallSummaryStore").getInstance());b("FBRTCCallSummaryPageVisibilityObserver").onCallEnd(a.callSummary);return a;case"DISMISS":a.callSummary.onCallEnded(c.endCallReason,!0,!1,c.endCallSubreason);a.callSummary.save(b("FBRTCCallSummaryStore").getInstance());b("FBRTCCallSummaryPageVisibilityObserver").onCallEnd(a.callSummary);return a}return a},onSurveyResult:function(a,c){switch(c.type){case"RATING_SHOWN":a.callSummary.addExtraInfo(g.RATING_SHOWN,"1");a.callSummary.save(b("FBRTCCallSummaryStore").getInstance());return a;case"FEEDBACK_SHOWN":a.callSummary.addExtraInfo(g.SURVEY_SHOWN,"1");a.callSummary.save(b("FBRTCCallSummaryStore").getInstance());return a;case"SUBMIT_RATING":b("cr:1401795")!=null?b("cr:1401795").logImmediately(function(){var b;return{star_rating:c.rating,shared_call_id:a.callInfo.protocol==="multiway"?(b=a.callInfo.serverInfoData)!=null?b:a.callInfo.callID:a.callInfo.callID,local_call_id:a.callInfo.callID,peer_id:parseInt(a.callSummary.peerID,10)}}):(a.callSummary.addExtraInfo(g.RATING,c.rating),a.callSummary.save(b("FBRTCCallSummaryStore").getInstance()));return a;case"SUBMIT_FEEDBACK":a.callSummary.addExtraInfo(g.SURVEY_DETAILS,c.feedback);a.callSummary.save(b("FBRTCCallSummaryStore").getInstance());return a;case"SUBMIT_SURVEY_CHOICE":a.callSummary.addExtraInfo(g.SURVEY_CHOICE,c.surveyChoice);a.callSummary.save(b("FBRTCCallSummaryStore").getInstance());return a}return a}};e.exports=a}),null);
__d("FBRTCClientMediaUpdateReducer",["FBRTCConstants","FBRTCMWProtocolStore","FBRTCRtcResponseStatusCode","RTCCallStore","RTCMWProtocolHandler"],(function(a,b,c,d,e,f){"use strict";a={reset:function(a,c){switch(c.type){case"RESET":return b("FBRTCMWProtocolStore").getInitialState()}return a},configureAudio:function(a,b){switch(b.type){case"AUDIO_MUTED":return g(a,"audio",!1);case"AUDIO_UNMUTED":return g(a,"audio",!0)}return a},configureVideo:function(a,b){switch(b.type){case"VIDEO_MUTED":return g(a,"video",!1);case"VIDEO_UNMUTED":return g(a,"video",!0)}return a},onClientMediaUpdateResponse:function(a,c){switch(c.type){case"ON_CLIENT_MEDIA_UPDATE_RESPONSE":if(c.responseStatusCode!==b("FBRTCRtcResponseStatusCode").OK)return a;a=a.setIn(["clientMediaUpdateInfo","lastSyncedClientVersion"],c.currentVersion);if(a.clientMediaUpdateInfo.pendingResponse){a=a.setIn(["clientMediaUpdateInfo","pendingResponse"],!1);if(a.clientMediaUpdateInfo.pendingUpdate)return h(a.setIn(["clientMediaUpdateInfo","pendingUpdate"],!1))}return a}return a},setLocalClientVersion:function(a,b){switch(b.type){case"SET_LOCAL_CLIENT_VERSION":return a.setIn(["clientMediaUpdateInfo","lastSyncedClientVersion"],b.version).setIn(["clientMediaUpdateInfo","localMediaUpdates"],a.clientMediaUpdateInfo.localMediaUpdates.push({mediaStatus:{}}))}return a}};function g(a,c,d){var e=b("RTCCallStore").getConnection(b("FBRTCConstants").SignalingProtocol.MULTIWAY);if(!e)return a;e=e.getLocalTracks().reduce(function(a,b){a[b.id]=b.kind===c?d:b.enabled;return a},{});return h(a.setIn(["clientMediaUpdateInfo","localMediaUpdates"],a.clientMediaUpdateInfo.localMediaUpdates.push({mediaStatus:e})))}function h(a){if(a.clientMediaUpdateInfo.pendingResponse)return a.setIn(["clientMediaUpdateInfo","pendingUpdate"],!0);var c=a.clientMediaUpdateInfo.localMediaUpdates.reduce(function(b,c,d){d>=a.clientMediaUpdateInfo.lastSyncedClientVersion&&b.push(c);return b},[]);if(c.length===0)return a;b("RTCMWProtocolHandler").clientMediaUpdate(b("RTCCallStore").getState().callInfo.conferenceName,b("RTCCallStore").getState().callInfo.serverInfoData,a.clientMediaUpdateInfo.lastSyncedClientVersion,a.clientMediaUpdateInfo.localMediaUpdates.size,c);return a.setIn(["clientMediaUpdateInfo","pendingResponse"],!0)}e.exports=a}),null);
__d("FBRTCGroupCallParticipantsReducer",["MercuryIDs","RTCCallStore","RTCMWProtocolHandler","immutable"],(function(a,b,c,d,e,f){"use strict";var g={_participantsToRing:new Set(),initThread:function(a,b){switch(b.type){case"INIT_THREAD":return a.merge({thread:b.thread,participants:(b=b.participants)!=null?b:a.participants})}return a},onParticipantsChanged:function(a,c){switch(c.type){case"ON_PARTICIPANT_LEFT":return a.set("participants",a.participants["delete"](b("MercuryIDs").getParticipantIDFromUserID(c.participantFBID)));case"ON_PARTICIPANTS_ADDED":var d=Object.keys(c.participants).map(function(a){return c.participants[a].fbid}).filter(function(a){return g._participantsToRing.has(a)});d.length!==0&&(d.forEach(function(a){return g._participantsToRing["delete"](a)}),b("RTCMWProtocolHandler").addParticipants(b("RTCCallStore").getState().callInfo.conferenceName,b("RTCCallStore").getState().callInfo.serverInfoData,d));return a.set("participants",a.participants.merge(b("immutable").Map(c.participants)))}return a},addParticipantsToRing:function(a,b){switch(b.type){case"ADD_PARTICIPANTS_TO_RING":b.participantFBIDs.forEach(function(a){return g._participantsToRing.add(a)});return a}return a}};e.exports=g}),null);
__d("FBRTCGroupCallReducer",["FBRTCConstants","FBRTCParticipantCallState","FBRTCSupport","RTCAppDispatcher","RTCCallActionTypes","RTCCallStore","RTCEndCallReason","RTCGroupCallActions","RTCMWProtocolHandler","UserAgent","ZenonDominantSpeakerClientAnalyzer","gkx"],(function(a,b,c,d,e,f){"use strict";var g=b("FBRTCConstants").GroupVideoViewLayout,h=b("FBRTCConstants").SignalingProtocol,i=b("gkx")("1424374")?0:5;a={setDominantSpeaker:function(a,c){switch(c.type){case"SET_DOMINANT_SPEAKER":if(k()&&a.pinnedSpeakerFBID==null){var d=b("RTCCallStore").getState();d=d.callInfo;var e=b("RTCCallStore").getConnection(h.MULTIWAY);e&&b("RTCMWProtocolHandler").subscription(d.conferenceName,d.serverInfoData,e.getRemoteStreams(),a.layout,c.dominantSpeakerFBID,e.getRemoteMediaCnames())}return a.set("dominantSpeakerFBID",c.dominantSpeakerFBID);case"SET_PINNED_SPEAKER":d=b("RTCCallStore").getState();e=d.callInfo;d=b("RTCCallStore").getConnection(h.MULTIWAY);if(!d)return a;b("RTCMWProtocolHandler").subscription(e.conferenceName,e.serverInfoData,d.getRemoteStreams(),a.layout,(e=c.pinnedSpeakerFBID)!=null?e:k()?a.dominantSpeakerFBID:null,d.getRemoteMediaCnames());return a.set("pinnedSpeakerFBID",c.pinnedSpeakerFBID);case"ON_CONFERENCE_STATE":e=c.request.conferenceStateRequest();d=e.participantStates;c=d[a.pinnedSpeakerFBID];return c&&c.state!==b("FBRTCParticipantCallState").CONNECTED?a.set("pinnedSpeakerFBID",null):a}return a},setLayout:function(a,c){switch(c.type){case"SET_LAYOUT":var d=b("RTCCallStore").getState();d=d.callInfo;var e=b("RTCCallStore").getConnection(h.MULTIWAY);if(e){b("RTCMWProtocolHandler").subscription(d.conferenceName,d.serverInfoData,e.getRemoteStreams(),c.layout,(d=a.pinnedSpeakerFBID)!=null?d:k()?a.dominantSpeakerFBID:null,e.getRemoteMediaCnames())}return a.set("layout",c.layout);case"ON_CONFERENCE_STATE":if(b("FBRTCSupport").isMobileDevice()){b("RTCAppDispatcher").waitFor([b("RTCCallStore").getDispatchToken()]);d=b("RTCCallStore").getConnectedRemoteUsersSize();e=b("UserAgent").isBrowser("Mobile Safari <= 12.1")&&d>=1||d>i?g.DOMINANT_SPEAKER:g.GRID;if(e!==a.layout&&b("gkx")("1388811")){c=b("RTCCallStore").getState();d=c.callInfo;c=b("RTCCallStore").getConnection(h.MULTIWAY);if(c){b("RTCMWProtocolHandler").subscription(d.conferenceName,d.serverInfoData,c.getRemoteStreams(),e,(d=a.pinnedSpeakerFBID)!=null?d:k()?a.dominantSpeakerFBID:null,c.getRemoteMediaCnames())}}return a.set("layout",e)}}return a},setUpDominantSpeakerDetection:function(a,c){if(b("FBRTCSupport").isSupportedSafariVersion()){var d;switch(c.type){case"ON_PROCESSED_JOIN_RESPONSE":d=new(b("ZenonDominantSpeakerClientAnalyzer"))(b("RTCGroupCallActions").setDominantSpeaker);d.start();return a.set("dominantSpeakerDetector",d);case"ADD_REMOTE_STREAM":d=a.dominantSpeakerDetector;if(d!=null){var e=j(c);e&&c.stream&&d.addUserStream(e,c.stream)}return a;case"REMOVE_REMOTE_STREAM":d=a.dominantSpeakerDetector;if(d!=null){e=j(c);e&&d.removeUserStream(e)}return a;case"CALL_ERROR":case"HANGUP":case"END_CALL":case"DISMISS":d=a.dominantSpeakerDetector;d!=null&&d.stop();return a;case"SET_PINNED_SPEAKER":d=a.dominantSpeakerDetector,d!=null&&(c.pinnedSpeakerFBID?d.stop():d.start())}}return a},setLinkHash:function(a,b){switch(b.type){case"SET_LINKHASH":return a.set("linkHash",b.linkHash)}return a},processEndCallReason:function(a,c){switch(c.type){case"CALL_ERROR":case"HANGUP":case"END_CALL":case"DISMISS":return a.set("endCallReason",a.endCallReason||new(b("RTCEndCallReason"))(c.endCallReason)).set("responseSubCode",c.responseSubCode)}return a}};function j(a){if(a.userID!=null)return a.userID;return a.stream&&a.stream.id.split(":").length>1?a.stream.id.split(":")[0]:null}function k(){return b("UserAgent").isBrowser("Mobile Safari")&&b("gkx")("1388811")}e.exports=a}),null);
__d("FBRTCVideoDurationTrackerReducer",["FBRTCCallSummaryStore","RTCCallStore"],(function(a,b,c,d,e,f){"use strict";a={track:function(a,c){var d=a.videoDurationTrackerInfo,e=d.localVideoDurationTracker,f=d.remoteVideoDurationTracker;d=d.localScreenDurationTracker;switch(c.type){case"ADD_LOCAL_SCREEN_STREAM":d.track(c.stream),d.isStarted()||d.start();case"ADD_LOCAL_STREAM":e.track(c.stream);e.isStarted()||e.start();return a;case"REMOVE_LOCAL_SCREEN_STREAM":d.pause(c.stream);return a;case"REPLACE_LOCAL_SCREEN_STREAM":d.track(c.newStream);e.track(c.newStream);return a;case"ADD_REMOTE_STREAM":case"TOGGLE_REMOTE_STREAM":d=b("RTCCallStore").getState();e=d.remoteUsers;c=e.find(function(a){return!a.isVideoMuted()});f.stop();f.start();f.track(c&&c.streams.first());return a}return a},update:function(a,b){switch(b.type){case"VIDEO_MUTED":case"VIDEO_UNMUTED":a.videoDurationTrackerInfo.localVideoDurationTracker.update()}return a},stop:function(a,c){switch(c.type){case"DISMISS":case"END_CALL":case"HANGUP":c=a.videoDurationTrackerInfo;var d=b("RTCCallStore").getState();d=d.callSummary;c.localVideoDurationTracker.stop();c.remoteVideoDurationTracker.stop();c.localScreenDurationTracker.stop();d.setVideoDurations(c.localVideoDurationTracker.getDuration(),c.remoteVideoDurationTracker.getDuration());d.setScreenDuration(c.localScreenDurationTracker.getDuration());d.save(b("FBRTCCallSummaryStore").getInstance());return a}return a}};e.exports=a}),null);
__d("RTCCallStoreState",["CurrentUser","FBRTCCallSummary","RTCUser","immutable"],(function(a,b,c,d,e,f){"use strict";a={debugID:0,callID:"",conferenceState:"NEW",conferenceName:"",protocol:"",serverInfoData:""};d=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.isInCall=function(){return this.conferenceState==="CONNECTING"||this.conferenceState==="CONNECTED"};return b}((c=b("immutable")).Record(a));f={connections:c.Set(),localUser:new(b("RTCUser"))({FBID:b("CurrentUser").getID()}),remoteUsers:c.Set(),callInfo:new d(),callSummary:b("FBRTCCallSummary").nullSummary(),mediaStatus:c.Map()};a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(c.Record(f));e.exports=a}),null);
__d("RTCCallReducer",["invariant","FBRTCCallSummary","FBRTCCallSummaryStore","FBRTCConstants","FBRTCParticipantCallState","FBRTCRtcResponseStatusCode","FBRTCScreenSharingUtils","RTCCallStore","RTCCallStoreState","RTCUser","RTCUtils","URI","immutable"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("FBRTCConstants").SignalingProtocol;function a(a,c){switch(c.type){case"INIT":return a.set("callInfo",a.callInfo.set("callID",c.callID).set("conferenceName",c.conferenceName).set("serverInfoData",c.serverInfoData).set("protocol",c.protocol));case"RESET":return new(b("RTCCallStoreState"))();case"RESET_FOR_REDIAL":return a.set("callInfo",a.callInfo.set("conferenceState","NEW").set("callID",c.callID).set("conferenceName",c.conferenceName)).set("callSummary",b("FBRTCCallSummary").nullSummary()).set("connections",b("immutable").Set()).set("remoteUsers",a.remoteUsers.map(function(a){return a.removeAllStreams()}));case"CALL_COLLISION":return a.set("callInfo",a.callInfo.set("conferenceState","NEW").set("callID",c.conferenceName).set("conferenceName",c.conferenceName)).set("remoteUsers",a.remoteUsers.map(function(a){return a.removeAllStreams()}))}return a}function c(a,b){switch(b.type){case"CALL":return a.setIn(["callInfo","conferenceState"],"CONNECTING").set("connections",a.connections.add(b.peerConnection));case"CALL_ERROR":return a.setIn(["callInfo","conferenceState"],"TERMINATED");case"CALL_SUCCESS":return b.connected?a.setIn(["callInfo","conferenceState"],"CONNECTED"):a}return a}function d(a,b){switch(b.type){case"INCOMING_CALL_SUCCESS":return a.setIn(["callInfo","conferenceState"],"CONNECTED")}return a}function f(a,c){switch(c.type){case"HANGUP":a.connections.forEach(function(a){return a.close()});return a.setIn(["callInfo","conferenceState"],"TERMINATING").set("connections",b("immutable").Set()).set("remoteUsers",a.remoteUsers.map(function(a){return a.removeAllStreams()}));case"DISMISS":c.transaction.sendResponse(c.request.createResponse(b("FBRTCRtcResponseStatusCode").OK,{callID:a.callInfo.callID}));case"END_CALL":a.connections.forEach(function(a){return a.close()});return a.setIn(["callInfo","conferenceState"],"TERMINATED").set("connections",b("immutable").Set()).set("remoteUsers",a.remoteUsers.map(function(a){return a.removeAllStreams()}));case"HANGUP_ERROR":case"HANGUP_SUCCESS":return a.setIn(["callInfo","conferenceState"],"TERMINATED")}return a}function j(a,c){switch(c.type){case"GROUP_ESCALATION_CLEAR_P2P_CONNECTION":var d=b("RTCCallStore").getConnection(i.P2P);if(d){c=d.getRemoteStreams();var e=c[0];d.close();var f=a.localUser;if(!b("FBRTCScreenSharingUtils").isGroupCallScreenSharingSupported()){c=f.getScreenStream();if(c){var g=f.getStream();g&&b("RTCUtils").transferAudioTracks(g,c);b("RTCUtils").stopMediaStream(c);f=f.removeScreenStream(c)}}return a.withMutations(function(a){a.set("connections",a.connections.remove(d)).set("localUser",f).set("remoteUsers",a.remoteUsers.map(function(a){return a.removeStream(e)}))})}}return a}function k(a,c){switch(c.type){case"GROUP_ESCALATION_CANCEL":var d=b("RTCCallStore").getConnection(i.MULTIWAY);if(d){var e=d.getRemoteStreams(),f=e[0],g=a.callSummary;c.p2pCallSummary&&(g=c.p2pCallSummary,b("FBRTCCallSummaryStore").getInstance().removeCallSummary(a.callSummary.peerID,a.callSummary.callID));d.close();return a.withMutations(function(a){a.set("callInfo",a.callInfo.set("conferenceState","CONNECTED").set("conferenceName",g.callID).set("protocol","p2p").set("serverInfoData","")).set("callSummary",g).set("connections",a.connections.remove(d)).set("remoteUsers",a.remoteUsers.map(function(a){return a.removeStream(f)}))})}}return a}function l(a,c){switch(c.type){case"ON_PARTICIPANTS_ADDED":var d=a.remoteUsers.map(function(a){return a.FBID});return a.set("remoteUsers",a.remoteUsers.union(Object.keys(c.participants).filter(function(a){return!d.has(c.participants[a].fbid)}).map(function(a){var d=c.participants[a],e=d.big_image_src||d.image_src;c.images&&c.images[a]&&(e=c.images[a]);d.fbid||g(0,1174);return new(b("RTCUser"))({FBID:d.fbid,profileUrl:new(h||(h=b("URI")))(d.href),profilePictureUrl:e,isGuestUser:d.user_type==="guest",isMessengerUser:!!d.is_messenger_user,isPartiesUser:!!d.is_parties_user,userName:d.name,userShortName:d.short_name,vanity:d.vanity})})))}return a}function m(a,c){switch(c.type){case"ON_CONFERENCE_STATE":var d=c.transaction,e=c.request,f=c.request.conferenceStateRequest(),g={currentVersion:c.conferenceStateVersion};if(c.conferenceStateVersion>=f.version){d.sendResponse(e.createResponse(b("FBRTCRtcResponseStatusCode").OK,{body:{conferenceStateResponse:g},callID:a.callInfo.callID}));return a}c.resolve(f.version);c=a.remoteUsers.map(function(a){var c=f.participantStates[a.FBID];c&&c.state===b("FBRTCParticipantCallState").DISCONNECTED&&(a=a.removeAllStreams());return c?a.setParticipantState(c):a});var h=c.some(function(a){a=a.participantState;return a&&a.state===b("FBRTCParticipantCallState").CONNECTED});h=h?"CONNECTED":a.callInfo.conferenceState;d.sendResponse(e.createResponse(b("FBRTCRtcResponseStatusCode").OK,{body:{conferenceStateResponse:g},callID:a.callInfo.callID}));return a.setIn(["remoteUsers"],c).setIn(["callInfo","conferenceState"],h)}return a}function n(a,b){switch(b.type){case"ON_JOIN_RESPONSE":return a.setIn(["callInfo","serverInfoData"],b.serverInfoData)}return a}function o(a,b){switch(b.type){case"INIT_LOCAL_USER":return a.set("localUser",b.localUser);case"INIT_REMOTE_USERS":case"UPDATE_REMOTE_USERS":return a.set("remoteUsers",b.remoteUsers)}return a}function p(a,b){switch(b.type){case"AUDIO_MUTED":return a.set("localUser",a.localUser.toggleMuteAudio(!0));case"AUDIO_UNMUTED":return a.set("localUser",a.localUser.toggleMuteAudio(!1));case"VIDEO_MUTED":return a.set("localUser",a.localUser.toggleMuteVideo(!0));case"VIDEO_UNMUTED":return a.set("localUser",a.localUser.toggleMuteVideo(!1));default:return a}}function q(a,c){switch(c.type){case"ADD_LOCAL_STREAM":return a.set("localUser",a.localUser.addStream(c.stream));case"REMOVE_LOCAL_STREAM":return a.set("localUser",a.localUser.removeStream(c.stream));case"REPLACE_LOCAL_STREAM":var d=c.oldStream.getAudioTracks();d=d[0];if(d!=null)for(var e=c.newStream.getAudioTracks(),f=Array.isArray(e),g=0,e=f?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=e.length)break;h=e[g++]}else{g=e.next();if(g.done)break;h=g.value}h=h;h.enabled=d.enabled}return a.set("localUser",a.localUser.replaceStream(c.oldStream,c.newStream));case"STOP_LOCAL_STREAM":return a.set("localUser",a.localUser.stopVideo());case"REMOVE_ALL_LOCAL_STREAMS":if(c.stopStreams)for(var h=a.localUser.streams,g=Array.isArray(h),f=0,h=g?h:h[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(g){if(f>=h.length)break;e=h[f++]}else{f=h.next();if(f.done)break;e=f.value}d=e;b("RTCUtils").stopMediaStream(d)}return a.set("localUser",a.localUser.removeAllStreams())}return a}function r(a,c){switch(c.type){case"ADD_LOCAL_SCREEN_STREAM":return a.set("localUser",a.localUser.addScreenStream(c.stream));case"REMOVE_LOCAL_SCREEN_STREAM":return a.set("localUser",a.localUser.removeScreenStream(c.stream));case"REMOVE_ALL_LOCAL_SCREEN_STREAMS":if(c.stopStreams)for(var d=a.localUser.screenStreams,e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;b("RTCUtils").stopMediaStream(g)}return a.set("localUser",a.localUser.removeAllScreenStreams());case"REPLACE_LOCAL_SCREEN_STREAM":return a.set("localUser",a.localUser.replaceScreenStream(c.oldStream,c.newStream))}return a}function s(a,b){var c;switch(b.type){case"ADD_REMOTE_STREAM":c=w(a,b);if(!c)return a;var d=a.setIn(["remoteUsers"],a.remoteUsers["delete"](c).add(c.addStream(b.stream)));return v(d,{type:"TOGGLE_REMOTE_STREAM",mediaStatus:d.mediaStatus.toJS()});case"REMOVE_REMOTE_STREAM":c=w(a,b);return!c?a:a.setIn(["remoteUsers"],a.remoteUsers["delete"](c).add(c.removeStream(b.stream)));case"REMOVE_ALL_REMOTE_STREAMS":c=w(a,b);return!c?a:a.setIn(["remoteUsers"],a.remoteUsers["delete"](c).add(c.removeAllStreams().removeAllScreenStreams()))}return a}function t(a,b){var c;switch(b.type){case"ADD_REMOTE_TRACK":c=w(a,b);return!c?a:a.setIn(["remoteUsers"],a.remoteUsers["delete"](c).add(c.clone()));case"REMOVE_REMOTE_TRACK":c=w(a,b);return!c?a:a.setIn(["remoteUsers"],a.remoteUsers["delete"](c).add(c.clone()))}return a}function u(a,b){var c;switch(b.type){case"ADD_REMOTE_SCREEN_STREAM":c=w(a,b);return!c?a:a.setIn(["remoteUsers"],a.remoteUsers["delete"](c).add(c.addScreenStream(b.stream)));case"REMOVE_REMOTE_SCREEN_STREAM":c=w(a,b);return!c?a:a.setIn(["remoteUsers"],a.remoteUsers["delete"](c).add(c.removeScreenStream(b.stream)))}return a}function v(a,c){var d;switch(c.type){case"TOGGLE_REMOTE_STREAM":return a.set("remoteUsers",Object.entries(c.mediaStatus).reduce(function(b,c){var d=c[0];c=c[1];var e=b.reduce(function(b,a){var c=a.streams.map(function(a){return a.getTracks().find(function(a){return a.id===d})}).find(Boolean);return c?{user:a,track:c}:b},{}),a=e.user;e=e.track;if(a&&e){if(e.kind==="audio"&&a.isAudioMuted()===c)return b["delete"](a).add(a.toggleMuteAudio());if(e.kind==="video"&&a.isVideoMuted()===c)return b["delete"](a).add(a.toggleMuteVideo(!a.isVideoMuted()))}return b},a.remoteUsers)).set("mediaStatus",b("immutable").Map(c.mediaStatus));case"REMOTE_AUDIO_MUTED":d=w(a,c);return!d?a:a.setIn(["remoteUsers"],a.remoteUsers["delete"](d).add(d.toggleMuteAudio(!0)));case"REMOTE_AUDIO_UNMUTED":d=w(a,c);return!d?a:a.setIn(["remoteUsers"],a.remoteUsers["delete"](d).add(d.toggleMuteAudio(!1)));case"REMOTE_VIDEO_MUTED":d=w(a,c);return!d?a:a.setIn(["remoteUsers"],a.remoteUsers["delete"](d).add(d.toggleMuteVideo(!0)));case"REMOTE_VIDEO_UNMUTED":d=w(a,c);return!d?a:a.setIn(["remoteUsers"],a.remoteUsers["delete"](d).add(d.toggleMuteVideo(!1)))}return a}function w(a,b){return a.remoteUsers.find(function(a){return b.userID?a.FBID==b.userID:a.FBID===b.stream.id.split(":")[0]})}function x(a,b){switch(b.type){case"WAIT_FOR_USER_INPUT":return a.callInfo.conferenceState==="NEW"?a.setIn(["callInfo","conferenceState"],"AWAITING_USER_START"):a}return a}e.exports={abortMultiwayEscalationProcess:k,callInit:a,callStart:c,callEnd:f,completeTransitionToMultiway:j,onParticipantsChanged:l,incomingCallStart:d,processUsers:o,toggleLocalStream:p,processLocalStream:q,processLocalScreenStream:r,processRemoteStream:s,processRemoteScreenStream:u,processRemoteTrack:t,toggleRemoteStream:v,processConferenceState:m,processJoinResponse:n,waitForUserInput:x}}),null);
__d("RTCGroupCallEscalationStoreState",["immutable"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("immutable").Record({aborted:!1,inProgress:!1,toRing:!1,p2pCallSummary:null,readyToTransition:!1,usersToRing:null}));e.exports=a}),null);
__d("RTCGroupCallEscalationStoreReducer",["FBRTCParticipantCallState","RTCCallStore","RTCGroupCallEscalationActionTypes","RTCGroupCallEscalationStore","RTCGroupCallEscalationStoreState","RTCMWProtocolHandler","RTCP2PCallStore","RTWebUserActionLogger","immutable"],(function(a,b,c,d,e,f){"use strict";var g,h=new Set([(g=b("FBRTCParticipantCallState")).UNKNOWN,g.DISCONNECTED,g.NO_ANSWER,g.REJECTED,g.UNREACHABLE,g.CONNECTION_DROPPED,g.PARTICIPANT_LIMIT_REACHED,g.IN_ANOTHER_CALL,g.RING_TYPE_UNSUPPORTED]);function a(a,c){switch(c.type){case"GROUP_ESCALATION_CANCEL":b("RTWebUserActionLogger").logCheckpoint({checkpoint:"group_escalation_cancel"});return a.withMutations(function(a){a.set("aborted",!0).set("inProgress",!1).set("toRing",!1).set("readyToTransition",!1).set("usersToRing",null)})}return a}function c(a,c){switch(c.type){case"HANGUP":case"END_CALL":case"HANGUP_ERROR":case"HANGUP_SUCCESS":return a.withMutations(function(a){a.set("aborted",!1).set("inProgress",!1).set("toRing",!1).set("usersToRing",null)});case"RESET":return new(b("RTCGroupCallEscalationStoreState"))()}return a}function d(a,b){switch(b.type){case"GROUP_ESCALATION_SET_P2P_CALLSUMMARY":var c=b.p2pCallSummary;if(c)return a.withMutations(function(a){a.set("p2pCallSummary",c)})}return a}function f(a,c){switch(c.type){case"GROUP_ESCALATION_START":b("RTWebUserActionLogger").logCheckpoint({checkpoint:"group_escalation_start"});return a.set("inProgress",!0).set("readyToTransition",!1)}return a}function i(a,c){if(!a.readyToTransition&&a.inProgress)switch(c.type){case"ON_JOIN_REQUEST_SENT":b("RTCGroupCallEscalationStore").logToP2PCallSummary(function(a){return a.setEscalationConnectingToMultiway()});break;case"ON_JOIN_RESPONSE":b("RTCGroupCallEscalationStore").logToP2PCallSummary(function(a){a.setEscalationConnectedToMultiway(),c.serverInfoData&&a.setServerInfoData(c.serverInfoData)});break}return a}function j(a,c){if(!a.readyToTransition&&a.inProgress)switch(c.type){case"ON_CONFERENCE_STATE":c=c.request.conferenceStateRequest();if(c){var d=c.participantStates;c=a.toRing;var e=!1,f=Object.keys(d).every(function(a){return d[a].state===b("FBRTCParticipantCallState").CONNECTED});if(f){b("RTWebUserActionLogger").logCheckpoint({checkpoint:"group_escalation_success"});b("RTCGroupCallEscalationStore").logToP2PCallSummary(function(a){a.setEscalationPeerConnectedToMultiway(),a.setEscalationConnectedToMultiway(),a.setReadyToEscalate()});var g=b("RTCP2PCallStore").getState();g=g.protocolHandler;g.shutDownP2PListenersForMultiwayEscalation();if(a.usersToRing&&c){g=a.usersToRing.valueSeq().map(function(a){return a.fbid}).filter(Boolean).toArray();b("RTCMWProtocolHandler").addParticipants(b("RTCCallStore").getState().callInfo.conferenceName,b("RTCCallStore").getState().callInfo.serverInfoData,g);c=!1}}else e=Object.keys(d).some(function(a){return h.has(d[a].state)}),e&&b("RTCGroupCallEscalationStore").logToP2PCallSummary(function(a){return a.setInvalidP2PEscalationState()});return a.set("aborted",e).set("readyToTransition",f).set("inProgress",!(f||e)).set("toRing",c)}}return a}function k(a,b){switch(b.type){case"GROUP_ESCALATION_SET_USERS_TO_RING":if(b.usersToRing)return a.set("usersToRing",b.usersToRing).set("toRing",!0)}return a}e.exports={abortEscalation:a,callStart:f,clearStore:c,onMultiwayConnectionSignaling:i,onParticipantsConnected:j,setP2PCallSummary:d,setUsersToRing:k}}),null);
__d("RTCP2PCallAdminMessageReducers",["FBRTCAdminMessage","FBRTCCallConstants","RTCAppDispatcher","RTCCallStore","RTCCallType"],(function(a,b,c,d,e,f){"use strict";var g=b("FBRTCCallConstants").FBRTCCallType;function a(a,c){switch(c.type){case"SET_CALL_SUMMARY":b("RTCAppDispatcher").waitFor([b("RTCCallStore").getDispatchToken()]);c=b("RTCCallStore").getState();c=c.callSummary;return a.set("adminMessage",new(b("FBRTCAdminMessage"))(c.peerID,c.callID));default:return a}}function c(a,b){switch(b.type){case"SET_CONNECTION_STATUS":var c=a.adminMessage;c&&b.connectionStatus==="CONNECTED"&&c.onCallConnected();return a;default:return a}}function d(a,c){switch(c.type){case"SET_END_CALL_REASON":var d=a.adminMessage,e=a.escalationConferenceName;d&&(d.onCallEnded(),a.isCaller&&d.submit(a.callType===b("RTCCallType").AUDIO_ONLY?g.VOICE_CALL:g.VIDEO_CALL,c.endCallReason.getReasonID(),e));return a;default:return a}}e.exports={processCallInit:a,processCallStart:c,processCallEnd:d}}),null);
__d("RTCP2PCallEscalationStoreState",["FBRTCConstants","FBRTCMessage","immutable"],(function(a,b,c,d,e,f){a=b("FBRTCConstants").CallType;c=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("immutable").Record({awaitingACK:!1,callType:a.VOIP,escalated:!1,escalateMediaStream:null,failureReason:null,initiatedEscalation:!1,inProgress:!1,request:null,response:null,token:null}));e.exports=c}),null);
__d("RTCP2PCallEscalationStoreReducers",["FBRTCConstants","RTCCallType","RTCP2PCallEscalationStoreState","RTCP2PCallEscalator","RTCP2PCallStore","RTWebUserActionLogger"],(function(a,b,c,d,e,f){"use strict";var g=b("FBRTCConstants").CallType;a=function(a,c){switch(c.type){case"P2P_CALL_ESCALATION_START":if(a.inProgress)return a;if(a.escalated||!b("RTCP2PCallStore").isAudioOnly())return a;b("RTWebUserActionLogger").logCheckpoint({checkpoint:"video_escalation_start"});return a.withMutations(function(a){a.set("awaitingACK",!0).set("initiatedEscalation",!0).set("failureReason",null).set("inProgress",!0).set("token",b("RTCP2PCallStore").getState().protocolHandler.generateEscalationRequestToken(!0))});case"P2P_CALL_ESCALATION_SUCCESS":if(!a.inProgress)return a;else if("token"in c&&c.token!==a.token)return a;b("RTCP2PCallEscalator").onEscalationSucceeded();b("RTWebUserActionLogger").logCheckpoint({checkpoint:"video_escalation_success"});return a.withMutations(function(a){a.set("awaitingACK",!1).set("callType",g.ESCALATED).set("escalated",!0).set("inProgress",!1).set("request",null).set("response",!0).set("token",null)});case"P2P_CALL_ESCALATION_FAILURE":if(!a.inProgress)return a;else if("token"in c&&c.token!==a.token)return a;b("RTCP2PCallEscalator").onEscalationFailed();if(c.reason==="denied"){b("RTWebUserActionLogger").logCheckpoint({checkpoint:"video_escalation_denied"});return a.withMutations(function(a){a.set("awaitingACK",!1).set("initiatedEscalation",!1).set("callType",g.ESCALATION_DECLINED).set("escalated",!1).set("failureReason",c.reason||null).set("inProgress",!1).set("request",null).set("response",c.response||null).set("token",null).set("escalateMediaStream",null)})}else c.reason==="cancelled"?b("RTWebUserActionLogger").logCheckpoint({checkpoint:"video_escalation_cancelled"}):c.reason==="timeout"?b("RTWebUserActionLogger").logCheckpoint({checkpoint:"video_escalation_timeout"}):b("RTWebUserActionLogger").logCheckpoint({checkpoint:"video_escalation_failed"});b("RTCP2PCallStore").getState().protocolHandler.generateEscalationRequestToken(!1);return a.withMutations(function(a){a.set("awaitingACK",!1).set("inProgress",!1).set("initiatedEscalation",!1).set("callType",g.ESCALATION_DECLINED).set("escalated",!1).set("failureReason",c.reason).set("token",null).set("escalateMediaStream",null)});case"SET_P2P_CALL_ESCALATION_MEDIA":return a.set("escalateMediaStream",c.stream);default:return a}};c=function(a,c){switch(c.type){case"P2P_CALL_ESCALATION_SET_REQUEST":var d=c.request;if(d==null)return a;return!b("RTCP2PCallEscalator").requestVideoOn(d.msg)?a.withMutations(function(a){a.set("awaitingACK",!1).set("inProgress",!1).set("request",null).set("response",null).set("token",null)}):a.withMutations(function(a){a.set("inProgress",!0).set("request",c.request).set("response",null).set("token",null)});case"P2P_CALL_ESCALATION_SET_RESPONSE":if(c.response==null)return a;else if(a.request==null)return a;return a.withMutations(function(a){a.set("awaitingACK",!0).set("callType",c.response?g.ESCALATED:g.ESCALATION_DECLINED).set("response",c.response).set("token",b("RTCP2PCallStore").getState().protocolHandler.generateEscalationResponseToken(a.request,c.response))});case"P2P_CALL_ESCALATION_ACK":if(c.token==null)return a;return a.response==null||a.request==null||c.token!==a.token||!a.awaitingACK?a:a.withMutations(function(a){a.set("awaitingACK",!1).set("callType",a.response?g.ESCALATED:g.ESCALATION_DECLINED).set("escalated",a.response).set("inProgress",!1).set("request",null).set("response",null).set("token",null)});default:return a}};d=function(a,c){switch(c.type){case"RESET":return new(b("RTCP2PCallEscalationStoreState"))();case"SET_CALL_TYPE":switch(c.callType){case b("RTCCallType").AUDIO_VIDEO:case b("RTCCallType").VIDEO_ONLY:return a.set("callType",g.DIRECT_VIDEO)}return a;case"P2P_CALL_ESCALATION_ACK":if(c.token==null)return a;if(!a.awaitingACK)return a;else if(c.token!==a.token)return a;return a.set("awaitingACK",!1);default:return a}};e.exports={Alice:a,Bob:c,common:d}}),null);
__d("RTCP2PCallReducer",["FBRTCConfig","FBRTCConsoleLogger","FBRTCConstants","RTCAppDispatcher","RTCCallStore","RTCCallType","RTCP2PCallEscalationStore","RTCP2PCallStoreState","RTCP2PCallWindowHandler","RTCP2PProtocolHandler","RTCScreenSharingWindowHandler","RTCSignalingExperiments","RTWebClientFeatureGating"],(function(a,b,c,d,e,f){"use strict";var g=b("FBRTCConstants").SignalingProtocol;function a(a,c){switch(c.type){case"INIT":var d=c.callType,e=c.isCaller,f=c.protocol;return f===g.P2P&&d&&e!=null?a.set("protocolHandler",a.protocolHandler||new(b("RTCP2PProtocolHandler"))()).set("isCaller",e).set("callType",d):a;case"RESET":return new(b("RTCP2PCallStoreState"))();case"RESET_FOR_REDIAL":b("RTCAppDispatcher").waitFor([b("RTCCallStore").getDispatchToken()]);f=b("RTCCallStore").getState().remoteUsers.first();if(f==null)return a;a.protocolHandler.destroy();return a.set("connectionStatus","INIT").set("endCallReason",null).set("protocolHandler",new(b("RTCP2PProtocolHandler"))().init(f.FBID,Number(c.conferenceName))).set("signalingExperiments",new(b("RTCSignalingExperiments"))());case"CALL_COLLISION":b("RTCAppDispatcher").waitFor([b("RTCCallStore").getDispatchToken()]);a.protocolHandler.init(c.peerID,Number(c.conferenceName));return a.set("connectionStatus","INIT").set("endCallReason",null).set("signalingExperiments",new(b("RTCSignalingExperiments"))());default:return a}}function c(a,c){switch(c.type){case"HANGUP":case"DISMISS":case"HANGUP_ERROR":case"HANGUP_SUCCESS":case"END_CALL":case"REMOVE_REMOTE_SCREEN_STREAM":case"RESET_FOR_REDIAL":b("RTCScreenSharingWindowHandler").close();return a.withMutations(function(a){return a.set("isScreenContentPoppedOut",b("RTCScreenSharingWindowHandler").isWindowOpened()).set("isRedialFooterButtonShown",(b("RTWebClientFeatureGating").shouldAlwaysShowRedial()||b("RTCP2PProtocolHandler").showRedialButton())&&!b("FBRTCConfig").isVCEndpointCall()).set("isStarRatingShown",b("RTCP2PProtocolHandler").showStarRating())});default:return a}}function d(a,c){switch(c.type){case"SET_CALL_TYPE":return a.set("callType",c.callType);case"P2P_CALL_ESCALATION_SET_RESPONSE":b("RTCAppDispatcher").waitFor([b("RTCP2PCallEscalationStore").getDispatchToken()]);return a.set("callType",c.response?b("RTCCallType").AUDIO_VIDEO:b("RTCCallType").AUDIO_ONLY);case"P2P_CALL_ESCALATION_FAILURE":return a.set("callType",b("RTCCallType").AUDIO_ONLY);case"P2P_CALL_ESCALATION_SUCCESS":b("RTCAppDispatcher").waitFor([b("RTCP2PCallEscalationStore").getDispatchToken()]);return b("RTCP2PCallEscalationStore").isEscalated()?a.set("callType",b("RTCCallType").AUDIO_VIDEO):a;default:return a}}function f(a,c){switch(c.type){case"SET_CONNECTION_STATUS":if(a.connectionStatus!==c.connectionStatus){b("RTCP2PCallWindowHandler").updateCallInProgressIndicator(c.connectionStatus);return a.set("connectionStatus",c.connectionStatus)}default:return a}}function h(a,b){switch(b.type){case"SET_END_CALL_REASON":return a.set("endCallReason",b.endCallReason);default:return a}}function i(a,b){switch(b.type){case"SET_MULTIWAY_ESCALATION_SUPPORT":a=a.set("offerEscalationSupport",b.offerEscalationSupport);b.escalationConferenceName&&(a=a.set("escalationConferenceName",b.escalationConferenceName));return a;default:return a}}function j(a,c){switch(c.type){case"POP_IN_SCREEN_CONTENT":b("RTCScreenSharingWindowHandler").close();return a.set("isScreenContentPoppedOut",b("RTCScreenSharingWindowHandler").isWindowOpened());case"POP_OUT_SCREEN_CONTENT":var d=b("RTCCallStore").getState(),e=d.remoteUsers.first().FBID;d=d.callInfo;b("RTCScreenSharingWindowHandler").open(e,c.stream,d);return a.set("isScreenContentPoppedOut",b("RTCScreenSharingWindowHandler").isWindowOpened());default:return a}}function k(a,b){switch(b.type){case"SET_REMOTE_SIGNALING_EXPERIMENTS":return a.set("signalingExperiments",a.signalingExperiments.setRemote(b.remoteSignalingExperiments));default:return a}}function l(a,b){switch(b.type){case"P2P_PROCESS_MESSAGE":return a.set("isRemoteVideoSupported",b.message.isRemoteVideoSupported()).set("isPeerOnMobile",b.message.isFromMobile());default:return a}}function m(a,b){switch(b.type){case"P2P_SET_IS_CALLER":return a.set("isCaller",b.isCaller);case"CALL_COLLISION":return a.set("isCaller",!0);default:return a}}function n(a,b){switch(b.type){case"SET_CONNECTION_STATUS":return b.connectionStatus==="CONNECTED"?a.set("wasConnected",!0):a;case"RESET_FOR_REDIAL":return a.set("wasConnected",!1);case"CALL_COLLISION":return a.set("wasConnected",!1);default:return a}}function o(a,b){switch(b.type){case"P2P_STAR_RATING_DONE":return a.set("isStarRatingShown",!1).set("wasStarRatingDone",b.done);case"RESET_FOR_REDIAL":return a.set("isStarRatingShown",!1).set("wasStarRatingDone",!1);default:return a}}function p(a,b){switch(b.type){case"SHOW_POOR_NETWORK_QUALITY":return a.set("isPoorNetworkQualityShown",!0);case"DISMISS_POOR_NETWORK_QUALITY":return a.set("isPoorNetworkQualityShown",!1);default:return a}}e.exports={callInit:a,callEnd:c,processCallType:d,processConnectionStatus:f,processEndCallReason:h,processIsCaller:m,processMessage:l,processMultiwayEscalationSupport:i,processPoorNetworkQuality:p,processPoppedOutScreenContent:j,processSignalingExperiments:k,processWasConnected:n,processWasStarRatingDone:o}}),null);
__d("RTCStreamDurationTracker",["performanceNow"],(function(a,b,c,d,e,f){"use strict";var g;a=function(){function a(a){var c=this;a===void 0&&(a="mixed");this.$3=0;this.$4=0;this.$5=!1;this.update=function(){if(!c.$5)return;c.$6()?c.$4===0&&(c.$4=(g||(g=b("performanceNow")))()):c.pause(c.$2)};this.$1=a}var c=a.prototype;c.isStarted=function(){return this.$5};c.track=function(a){if(a===this.$2){this.update();return}if(this.$2&&this.$5){var b=this.$2;b.removeEventListener("addtrack",this.update);b.removeEventListener("removetrack",this.update)}a?(this.$5&&this.$6()&&(this.$3=this.getDuration()),this.$2=a,this.$5&&this.start()):this.stop()};c.$6=function(){return!this.$2?!1:this.$7().some(function(a){return a.enabled&&a.readyState!=="ended"})};c.$7=function(){if(!this.$2)return[];switch(this.$1){case"audio":return this.$2.getAudioTracks();case"video":return this.$2.getVideoTracks();case"screen":return this.$2.getVideoTracks();default:return this.$2.getTracks()}};c.pause=function(a){if(!this.$5)return;if(this.$2!==a)return;this.$3=this.getDuration();this.$4=0};c.getDuration=function(){return this.$4===0?this.$3:this.$3+(g||(g=b("performanceNow")))()-this.$4};c.start=function(){this.$5=!0;this.$6()&&(this.$4=(g||(g=b("performanceNow")))());if(this.$2){var a=this.$2;a.addEventListener("addtrack",this.update);a.addEventListener("removetrack",this.update)}};c.stop=function(){if(!this.$5)return;this.$3=this.getDuration();this.$5=!1;this.$4=0;if(this.$2){var a=this.$2;a.removeEventListener("addtrack",this.update);a.removeEventListener("removetrack",this.update)}};return a}();e.exports=a}),null);
__d("FBRTCGroupCallStoreState",["RTCStreamDurationTracker","immutable"],(function(a,b,c,d,e,f){"use strict";a={localVideoDurationTracker:new(b("RTCStreamDurationTracker"))("video"),remoteVideoDurationTracker:new(b("RTCStreamDurationTracker"))("video"),localScreenDurationTracker:new(b("RTCStreamDurationTracker"))("screen")};c=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("immutable").Record(a));d={dominantSpeakerFBID:null,endCallReason:null,responseSubCode:null,layout:null,linkHash:null,participants:b("immutable").Map(),pinnedSpeakerFBID:null,thread:null,videoDurationTrackerInfo:new c(),dominantSpeakerDetector:null};f=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("immutable").Record(d));e.exports=f}),null);
__d("FBRTCGroupCallStore",["FBRTCGroupCallParticipantsReducer","FBRTCGroupCallReducer","FBRTCGroupCallStoreState","FBRTCVideoDurationTrackerReducer","FluxReduceStore","RTCAppDispatcher"],(function(a,b,c,d,e,f){"use strict";var g=[b("FBRTCGroupCallParticipantsReducer").addParticipantsToRing,b("FBRTCGroupCallParticipantsReducer").initThread,b("FBRTCGroupCallParticipantsReducer").onParticipantsChanged,(a=b("FBRTCGroupCallReducer")).processEndCallReason,a.setDominantSpeaker,a.setUpDominantSpeakerDetection,a.setLayout,a.setLinkHash,b("FBRTCVideoDurationTrackerReducer").track,b("FBRTCVideoDurationTrackerReducer").update,b("FBRTCVideoDurationTrackerReducer").stop];c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return new(b("FBRTCGroupCallStoreState"))()};d.reduce=function(a,b){return g.reduce(function(a,c){return c(a,b)},a)};d.hadVideoDuration=function(){var a=this.getState().videoDurationTrackerInfo,b=a.localVideoDurationTracker;a=a.remoteVideoDurationTracker;return b.getDuration()>0||a.getDuration()>0};return c}(b("FluxReduceStore"));c.__moduleID=e.id;e.exports=new c(b("RTCAppDispatcher"))}),null);
__d("FBRTCMWProtocolStoreState",["immutable"],(function(a,b,c,d,e,f){"use strict";a={pendingResponse:!1,pendingUpdate:!1,lastSyncedClientVersion:1,localMediaUpdates:b("immutable").List([{mediaStatus:{}}])};c=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("immutable").Record(a));d={clientMediaUpdateInfo:new c()};f=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("immutable").Record(d));e.exports=f}),null);
__d("FBRTCMWProtocolStore",["FBRTCClientMediaUpdateReducer","FBRTCMWProtocolStoreState","FluxReduceStore","RTCAppDispatcher"],(function(a,b,c,d,e,f){"use strict";var g=[(a=b("FBRTCClientMediaUpdateReducer")).configureAudio,a.configureVideo,a.onClientMediaUpdateResponse,a.setLocalClientVersion,a.reset];c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return new(b("FBRTCMWProtocolStoreState"))()};d.reduce=function(a,b){return g.reduce(function(a,c){return c(a,b)},a)};return c}(b("FluxReduceStore"));c.__moduleID=e.id;e.exports=new c(b("RTCAppDispatcher"))}),null);
__d("RTCCallStore",["FBRTCCallSummaryReducer","FBRTCCallSummaryStore","FBRTCParticipantCallState","FluxReduceStore","RTCAppDispatcher","RTCCallReducer","RTCCallStoreState"],(function(a,b,c,d,e,f){"use strict";var g=[(a=b("FBRTCCallSummaryReducer")).onCallEnded,a.onCallStarted,a.onMessageSignaling,a.onSurveyResult,a.setCallSummary,(c=b("RTCCallReducer")).abortMultiwayEscalationProcess,c.callEnd,c.callInit,c.callStart,c.completeTransitionToMultiway,c.incomingCallStart,c.onParticipantsChanged,c.processConferenceState,c.processJoinResponse,c.processLocalScreenStream,c.processLocalStream,c.processRemoteScreenStream,c.processRemoteStream,c.processRemoteTrack,c.processUsers,c.toggleLocalStream,c.toggleRemoteStream,c.waitForUserInput];d=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return new(b("RTCCallStoreState"))()};d.reduce=function(a,b){return g.reduce(function(a,c){return c(a,b)},a)};d.hasRemoteVideo=function(){return this.getState().remoteUsers.some(function(a){return a.hasStream()&&!a.areAllTracksMuted(a.streams.first().getVideoTracks())})};d.hasLocalVideo=function(){var a=this.getState();a=a.localUser;return a.hasStream()&&!a.areAllTracksMuted(a.streams.first().getVideoTracks())};d.getConnection=function(a){var b=this.getState();b=b.connections;a&&(b=b.filter(function(b){return b.getSignalingProtocol()===a}));return b.first()};d.mutateCallSummary=function(a){var c=this.getState();c=c.callSummary;a(c);c.save(b("FBRTCCallSummaryStore").getInstance())};d.getSortedRemoteUsers=function(){return this.getState().remoteUsers.toList().sort(function(a,b){return a.lastConnectedAt===b.lastConnectedAt?a.FBID>b.FBID?1:-1:a.lastConnectedAt-b.lastConnectedAt})};d.getConnectedRemoteUsersSize=function(){return this.getState().remoteUsers.count(function(a){a=a.participantState;return a&&a.state===b("FBRTCParticipantCallState").CONNECTED})};return c}(b("FluxReduceStore"));d.__moduleID=e.id;e.exports=new d(b("RTCAppDispatcher"))}),null);
__d("RTCGroupCallEscalationStore",["FBRTCCallSummaryStore","FluxReduceStore","RTCAppDispatcher","RTCGroupCallEscalationStoreReducer","RTCGroupCallEscalationStoreState"],(function(a,b,c,d,e,f){"use strict";var g=[(a=b("RTCGroupCallEscalationStoreReducer")).abortEscalation,a.callStart,a.clearStore,a.onMultiwayConnectionSignaling,a.onParticipantsConnected,a.setP2PCallSummary,a.setUsersToRing];c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return new(b("RTCGroupCallEscalationStoreState"))()};d.reduce=function(a,b){return g.reduce(function(a,c){return c(a,b)},a)};d.isInProgress=function(){return this.getState().inProgress};d.isEscalated=function(){return this.getState().readyToTransition};d.logToP2PCallSummary=function(a){var c=this.getState();c=c.p2pCallSummary;c&&(a(c),c.save(b("FBRTCCallSummaryStore").getInstance()))};return c}(b("FluxReduceStore"));c.__moduleID=e.id;e.exports=new c(b("RTCAppDispatcher"))}),null);
__d("RTCP2PCallEscalationStore",["FluxReduceStore","RTCAppDispatcher","RTCP2PCallEscalationStoreReducers","RTCP2PCallEscalationStoreState","RTCP2PCallStore"],(function(a,b,c,d,e,f){"use strict";var g=[b("RTCP2PCallEscalationStoreReducers").Alice,b("RTCP2PCallEscalationStoreReducers").Bob,b("RTCP2PCallEscalationStoreReducers").common];a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return new(b("RTCP2PCallEscalationStoreState"))()};d.reduce=function(a,b){return g.reduce(function(a,c){return c(a,b)},a)};d.didCurrentUserInitiate=function(){return this.getState().initiatedEscalation};d.isInProgress=function(){return this.getState().inProgress};d.isEscalated=function(){return this.getState().escalated};d.getEscalateMediaStream=function(){return this.getState().escalateMediaStream};d.remoteWillNotInitSDPUpdate=function(){return b("RTCP2PCallStore").getState().isPeerOnMobile||b("RTCP2PCallStore").getState().signalingExperiments.remoteSupport("video_escalation_by_unmute")};d.isNegotiationAllowed=function(){var a=this.getState();return this.remoteWillNotInitSDPUpdate()||!a.request};d.isStarted=function(){var a=this.getState();return a.inProgress&&a.token!==null};d.getToken=function(){return this.getState().token};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("RTCAppDispatcher"))}),null);
__d("RTCP2PCallStore",["FluxReduceStore","RTCAppDispatcher","RTCCallType","RTCP2PCallAdminMessageReducers","RTCP2PCallReducer","RTCP2PCallStoreState"],(function(a,b,c,d,e,f){"use strict";var g=[(a=b("RTCP2PCallReducer")).callEnd,a.callInit,a.processCallType,a.processConnectionStatus,a.processEndCallReason,a.processPoppedOutScreenContent,a.processMultiwayEscalationSupport,a.processSignalingExperiments,a.processMessage,a.processIsCaller,a.processWasConnected,a.processWasStarRatingDone,a.processPoorNetworkQuality,b("RTCP2PCallAdminMessageReducers").processCallInit,b("RTCP2PCallAdminMessageReducers").processCallStart,b("RTCP2PCallAdminMessageReducers").processCallEnd];c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return new(b("RTCP2PCallStoreState"))()};d.reduce=function(a,b){return g.reduce(function(a,c){return c(a,b)},a)};d.isAudioOnly=function(){return this.getState().callType===b("RTCCallType").AUDIO_ONLY};d.isCaller=function(){return this.getState().isCaller};return c}(b("FluxReduceStore"));c.__moduleID=e.id;e.exports=new c(b("RTCAppDispatcher"))}),null);
__d("RTCP2PCallStoreState",["RTCCallType","RTCP2PProtocolHandler","RTCSignalingExperiments","immutable"],(function(a,b,c,d,e,f){"use strict";a={adminMessage:null,callType:b("RTCCallType").AUDIO_ONLY,connectionStatus:"INIT",endCallReason:null,escalationConferenceName:null,isCaller:!1,isPeerOnMobile:!1,isPoorNetworkQualityShown:!1,isRedialFooterButtonShown:!1,isRemoteVideoSupported:!0,isScreenContentPoppedOut:!1,isStarRatingShown:!1,offerEscalationSupport:!1,protocolHandler:new(b("RTCP2PProtocolHandler"))(),signalingExperiments:new(b("RTCSignalingExperiments"))(),wasConnected:!1,wasStarRatingDone:!1};c=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("immutable").Record(a));e.exports=c}),null);
__d("RTCCallInitUtils",["invariant","CurrentUser","FBRTCCallSummary","FBRTCCallSummaryStore","FBRTCConstants","MercuryIDs","MessengerParticipants.bs","MessengerParticipantsImages.re","MessengerState.bs","RTCCallActions","RTCCallStore","RTCGroupCallActions","RTCUser","URI","immutable"],(function(a,b,c,d,e,f,g){"use strict";var h,i=b("FBRTCConstants").CallType,j=b("FBRTCConstants").SignalingProtocol;a={initializeCallSummary:function(a){var c=b("FBRTCCallSummary").restoreOrInitialize(b("FBRTCCallSummaryStore").getInstance(),a.peerID,a.callID,a.isCaller);b("RTCCallActions").setCallSummary(c);b("RTCCallStore").mutateCallSummary(function(b){b.onPopupOpened(),b.setCallType(a.protocol===j.P2P?a.isAudio?i.VOIP:i.DIRECT_VIDEO:"mws"),b.setActiveConnection(a.protocol===j.P2P?"p2p":"mws")})},initializeRTCUsers:function(a,c){var d=this;a=a.map(function(a){return b("MercuryIDs").getParticipantIDFromUserID(a)});b("MessengerParticipants.bs").getMulti(a,function(a){a=b("immutable").Map(a);d.initializeParticipantsAndStartCall(a,!0,c)})},initializeParticipantsAndStartCall:function(a,c,d){var e=this,f=a.keySeq().toArray();b("MessengerParticipantsImages.re").getBigImageMultiWithSize({ids:f,callback:function(f){c&&b("RTCCallActions").initRemoteUsers(a.filter(function(a){a=a.fbid;return a!==b("CurrentUser").getID()}).map(function(a){return e._createRTCUser(a,f)}).toSet());var g=b("MercuryIDs").getParticipantIDFromUserID(b("CurrentUser").getID());b("RTCCallActions").initLocalUser(e._createRTCUser(a.get(g),f));d()},size:100})},initializeThreadFromCollisionContext:function(a){var c=a.peerID;a=a.groupThreadID;a=c!=null?c:a;if(a==null)return;c=c!=null?b("MercuryIDs").getThreadIDFromUserID(a):b("MercuryIDs").getThreadIDFromThreadFBID(a);if(c===null)return;b("MessengerState.bs").getThreadMeta(b("CurrentUser").getID(),c,function(a){b("RTCGroupCallActions").initThread(a,null)})},_createRTCUser:function(a,c){var d=a.big_image_src,e=a.fbid,f=a.user_type,i=a.href,j=a.image_src,k=a.is_messenger_user,l=a.name,m=a.room_location,n=a.short_name;a=a.vanity;e||g(0,1174);if(c){var o=b("MercuryIDs").getParticipantIDFromUserID(e);d=c[o]}return new(b("RTCUser"))({FBID:e,isGuestUser:f==="guest",isMessengerUser:!!k,profileUrl:new(h||(h=b("URI")))(i),profilePictureUrl:d||j,roomLocation:m,userName:l,userShortName:n,vanity:a?a:""})}};e.exports=a}),null);
__d("RTCGroupCallEscalationActions",["RTCAppDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";a={start:function(){b("RTCAppDispatcher").dispatch({type:"GROUP_ESCALATION_START"})},cancel:function(a){b("RTCAppDispatcher").dispatch({type:"GROUP_ESCALATION_CANCEL",p2pCallSummary:a})},approve:function(){b("RTCAppDispatcher").dispatch({type:"GROUP_ESCALATION_SUCCESS"})},setUsersToRing:function(a){b("RTCAppDispatcher").dispatch({type:"GROUP_ESCALATION_SET_USERS_TO_RING",usersToRing:a})},setP2PCallSummary:function(a){b("RTCAppDispatcher").dispatch({type:"GROUP_ESCALATION_SET_P2P_CALLSUMMARY",p2pCallSummary:a})}};e.exports=a}),null);
__d("RTCGroupCallEscalator",["CurrentUser","FBRTCConsoleLogger","FBRTCConstants","FBRTCGroupCallStore","FBRTCMWProtocolStore","FBRTCScreenSharingUtils","MercuryIDs","MessengerParticipants.bs","RTCAppDispatcher","RTCCallStore","RTCGroupCallActions","RTCGroupCallEscalationActions","RTCGroupCallEscalationStore","RTCMWProtocolHandler","RTCUtils","immutable"],(function(a,b,c,d,e,f){"use strict";var g=b("FBRTCConstants").GroupVideoViewLayout,h=45e3;a=function(){function a(a,c,d,e){this.$3=a,this.$4=c,this.$5=d,this.$1=String(e),b("RTCGroupCallEscalationActions").setP2PCallSummary(b("RTCCallStore").getState().callSummary),this.$6=[d],this.$8=null}var c=a.prototype;c.getParticipants=function(){return this.$8};c.$9=function(){var a=this.$3,c=this.$1;return window.setTimeout(function(){var d=b("RTCGroupCallEscalationStore").isEscalated(),e=b("RTCCallStore").getState();e=e.callInfo;!d&&(e.callID===c||e.conferenceName===a)&&(i("Group Escalation timed out"),b("RTCGroupCallEscalationStore").logToP2PCallSummary(function(a){a.setEscalationTimedOut(),b("RTCGroupCallEscalationActions").cancel(a)}))},h)};c.startEscalationToMultiway=function(){var a=this;i("Escalating P2P call to Multiway call %o",this.$3);var c=b("RTCGroupCallEscalationStore").getState().inProgress;if(c)return;b("RTCGroupCallEscalationActions").start();this.$2=this.$9();this.$7=new(b("RTCMWProtocolHandler"))();b("RTCAppDispatcher").explicitlyRegisterStores([b("FBRTCGroupCallStore"),b("FBRTCMWProtocolStore")]);b("RTCGroupCallActions").setLayout(g.GRID);var d=b("MercuryIDs").getParticipantIDFromUserID(b("CurrentUser").getID());b("MessengerParticipants.bs").get(d,function(c){var e={};e[d]=c;c=b("immutable").Map(e);a.$8=c;b("RTCGroupCallActions").initThread(null,c);a.$10()})};c.$10=function(){var a=b("RTCCallStore").getState().localUser.getStream(),c=b("RTCCallStore").getState().localUser.getScreenStream(),d=a;c&&b("FBRTCScreenSharingUtils").isGroupCallScreenSharingSupported()&&(a&&b("RTCUtils").transferAudioTracks(c,a),d=c);d&&this.$7.onStreamReady(d,this.$6,this.$3,!0,{callTrigger:"multiway_escalation",p2pCallID:this.$1})};return a}();a.ESCALATION_TIMEOUT=h;function i(){}e.exports=a}),null);
__d("RTCIceCandidate",[],(function(a,b,c,d,e,f){"use strict";e.exports=window.RTCIceCandidate||window.mozRTCIceCandidate}),null);
/**
 *
 * 
 * @preserve-header
 * @preserve-whitespace
 * @format
 */__d("RTCSDPInterop",["sdp-interop-array-equals","sdp-interop-transform"],(function $module_RTCSDPInterop(global,require,requireDynamic,requireLazy,module,exports){var


































RTCSDPInterop=function(){"use strict";













































function RTCSDPInterop(){







this.cache={
mlB2UMap:{},
mlU2BMap:{},
localMediaLines:[],
remoteMediaLines:[],



localDescriptionType:'offer',
offer:null,
answer:null,
pranswer:null,
rollback:null};


this.planBRemoteDescription=null;
this.midToMWTrackId=new Map();
this.mwTrackIdToWebrtcTrackId=new Map();
}var _proto=RTCSDPInterop.prototype;_proto.

setPlanBRemoteDescription=function setPlanBRemoteDescription(desc){
this.planBRemoteDescription=desc;
};_proto.

getPlanBRemoteDescription=function getPlanBRemoteDescription(){
return this.planBRemoteDescription;
};_proto.

correlateWebrtcTrackIdsByMid=function correlateWebrtcTrackIdsByMid(webrtcTrackId,mid){
var mwTrackId=this.midToMWTrackId.get(mid);
if(mwTrackId!=null){
this.mwTrackIdToWebrtcTrackId.set(mwTrackId,webrtcTrackId);
}
};_proto.

getWebrtcTrackIdFromMWTrackId=function getWebrtcTrackIdFromMWTrackId(mwTrackId){
var webrtcTrackId=this.mwTrackIdToWebrtcTrackId.get(mwTrackId);
return webrtcTrackId?webrtcTrackId:mwTrackId;
};_proto.




candidateToUnifiedPlan=function candidateToUnifiedPlan(candidate){
var cand=new RTCIceCandidate(candidate);

cand.sdpMLineIndex=this.cache.mlB2UMap[cand.sdpMLineIndex];


return cand;
};_proto.




candidateToPlanB=function candidateToPlanB(candidate){
var cand=new RTCIceCandidate(candidate);var
sdpMid=cand.sdpMid;

if(sdpMid!=null){
if(sdpMid.indexOf('audio')===0){
cand.sdpMid='audio';
}else if(sdpMid.indexOf('video')===0){
cand.sdpMid='video';
}else{
throw new Error("candidate with "+sdpMid+" not allowed");
}
}
cand.sdpMLineIndex=this.cache.mlU2BMap[cand.sdpMLineIndex];

return cand;
};_proto.









getFirstSendingIndexFromAnswer=function getFirstSendingIndexFromAnswer(type){
if(!this.cache.answer){
return null;
}

var session=require("sdp-interop-transform").parse(this.cache.answer);
if(session&&session.media&&Array.isArray(session.media)){
for(var i=0;i<session.media.length;i++){
if(
session.media[i].type===type&&(
!session.media[i].direction||
session.media[i].direction==='sendrecv'||
session.media[i].direction==='sendonly'))
{
return i;
}
}
}

return null;
};_proto.







toPlanB=function toPlanB(desc){
var self=this;

var localMediaLines=[];
if(
typeof desc!=='object'||
desc===null||
typeof desc.sdp!=='string')
{
console.warn('An empty description was passed as an argument.');
return desc;
}


var session=require("sdp-interop-transform").parse(desc.sdp);


if(
session.media===undefined||
!Array.isArray(session.media)||
session.media.length===0)
{
console.warn('The description has no media.');
return desc;
}



if(
session.media.length<=3&&
session.media.every(function(_ref){var mid=_ref.mid;return['video','audio','data'].includes(mid);}))
{
console.warn('This description does not look like Unified Plan.');
return desc;
}




var sdp=desc.sdp;
var rewrite=false;var _loop=function _loop(
i){
var uLine=session.media[i];

localMediaLines.push(uLine.type);
uLine.rtp.forEach(function(rtp){
if(rtp.codec==='NULL'){
rewrite=true;

var offer=require("sdp-interop-transform").parse(self.cache.offer);
rtp.codec=offer.media[i].rtp[0].codec;
}
});};for(var i=0;i<session.media.length;i++){_loop(i);
}
if(rewrite){
sdp=require("sdp-interop-transform").write(session);
}



this.cache[desc.type]=sdp;
this.cache.localDescriptionType=desc.type;

this.cache.localMediaLines=localMediaLines;
};_proto.










convertUnifiedToPlanB=function convertUnifiedToPlanB(desc){

var session=require("sdp-interop-transform").parse(desc.sdp);


var media=session.media;
session.media=[];




var type2bl={};



var types=[];

media.forEach(function(uLine){
midToString(uLine);


if(
(typeof uLine.rtcpMux!=='string'||uLine.rtcpMux!=='rtcp-mux')&&
uLine.direction!=='inactive')
{
throw new Error(
'Cannot convert to Plan B because m-lines '+
'without the rtcp-mux attribute were found.');

}



if(
type2bl[uLine.type]===undefined||
type2bl[uLine.type].direction==='inactive')
{
type2bl[uLine.type]=uLine;
}
});


media.forEach(function(uLine){
if(uLine.type==='application'){
uLine.mid='data';
session.media.push(uLine);
types.push(uLine.mid);
return;
}


if(typeof uLine.sources==='object'){
Object.keys(uLine.sources).forEach(function(ssrc){
if(typeof type2bl[uLine.type].sources!=='object'){
type2bl[uLine.type].sources={};
}



type2bl[uLine.type].sources[ssrc]=uLine.sources[ssrc];

if(uLine.msid!==undefined){






type2bl[uLine.type].sources[ssrc].msid=uLine.msid;
}


});
}


if(uLine.ssrcGroups!==undefined&&Array.isArray(uLine.ssrcGroups)){

if(
type2bl[uLine.type].ssrcGroups===undefined||
!Array.isArray(type2bl[uLine.type].ssrcGroups))
{
type2bl[uLine.type].ssrcGroups=[];
}

type2bl[uLine.type].ssrcGroups=type2bl[uLine.type].ssrcGroups.concat(
uLine.ssrcGroups);

}

if(type2bl[uLine.type]===uLine){

uLine.mid=uLine.type;



delete uLine.bundleOnly;


delete uLine.msid;

if(uLine.direction!=='inactive'){

types.push(uLine.type);
}


session.media.push(uLine);
}
});



session.groups.some(function(group){
if(group.type==='BUNDLE'){

group.mids=types.join(' ');
return true;
}
});


session.msidSemantic={
semantic:'WMS',
token:'*'};


var resStr=require("sdp-interop-transform").write(session);

return new RTCSessionDescription({
type:desc.type,
sdp:resStr});



};_proto.









toUnifiedPlan=function toUnifiedPlan(desc){var _this=this;
var self=this;

if(
typeof desc!=='object'||
desc===null||
typeof desc.sdp!=='string')
{
console.warn('An empty description was passed as an argument.');
return desc;
}

if(desc.type!=='answer'&&desc.type!=='offer'){
console.warn(
'Non offer or answer descriptions cannot be handled at this time.');

return desc;
}

var session=require("sdp-interop-transform").parse(desc.sdp);


if(
session.media===undefined||
!Array.isArray(session.media)||
session.media.length===0)
{
console.warn('The description has no media.');
return desc;
}


var mids=[];
session.media.forEach(function(_ref2){var mid=_ref2.mid;
mids.push(mid);
});

var hasBundle=false;
if(session.groups!==undefined&&Array.isArray(session.groups)){
hasBundle=session.groups.every(
function(g){return(
g.type!=='BUNDLE'||
require("sdp-interop-array-equals").apply(g.mids.sort(),[mids.sort()]));});

}

if(!hasBundle){
throw new Error(
'Cannot convert to Unified Plan because m-lines that'+
' are not bundled were found.');

}

























var remoteMediaLines=[];

var cached;
if(this.cache[desc.type]!=null){
cached=require("sdp-interop-transform").parse(this.cache[desc.type]);
}

var recvonlySsrcs={
audio:{},
video:{}};




var mid2ul={};
var bIdx=0;
var uIdx=0;
session.media.forEach(function(bLine){
if(bLine.type==='application'){
bLine.mid=String(bLine.mid);
mid2ul[bLine.mid]=bLine;
return;
}



var sources=bLine.sources;
var ssrcGroups=bLine.ssrcGroups;
var candidates=bLine.candidates;
var iceUfrag=bLine.iceUfrag;
var icePwd=bLine.icePwd;
var fingerprint=bLine.fingerprint;
var port=bLine.port;

if(typeof sources==='object'){




delete bLine.sources;
delete bLine.ssrcGroups;
delete bLine.candidates;
delete bLine.iceUfrag;
delete bLine.icePwd;
delete bLine.fingerprint;
delete bLine.port;
delete bLine.mid;
}


var ssrc2group={};
if(ssrcGroups!==undefined&&Array.isArray(ssrcGroups)){
ssrcGroups.forEach(function(ssrcGroup){


if(ssrcGroup.semantics==='SIM'){
return;
}



if(ssrcGroup.ssrcs!==undefined&&Array.isArray(ssrcGroup.ssrcs)){
ssrcGroup.ssrcs.forEach(function(ssrc){
if(ssrc2group[ssrc]===undefined){
ssrc2group[ssrc]=[];
}

ssrc2group[ssrc].push(ssrcGroup);
});
}
});
}


var ssrc2ml={};

if(typeof sources==='object'){

Object.keys(sources).forEach(function(ssrc){




var uLine;




if(desc.type===_this.cache.localDescriptionType){







if(!sources[ssrc].msid){
recvonlySsrcs[bLine.type][ssrc]=sources[ssrc];


return;
}
}

if(
ssrc2group[ssrc]!==undefined&&
Array.isArray(ssrc2group[ssrc]))
{
ssrc2group[ssrc].some(function(_ref3){var
ssrcs=_ref3.ssrcs;return(


ssrcs.some(function(related){
if(typeof ssrc2ml[related]==='object'){
uLine=ssrc2ml[related];
return true;
}
}));});

}

if(typeof uLine==='object'){

uLine.sources[ssrc]=sources[ssrc];
delete sources[ssrc].msid;
}else{

uLine=Object.create(bLine);
ssrc2ml[ssrc]=uLine;

if(sources[ssrc].msid!==undefined){





uLine.msid=sources[ssrc].msid;
}


uLine.sources={};
uLine.sources[ssrc]=sources[ssrc];
uLine.ssrcGroups=ssrc2group[ssrc];



if(
cached!==undefined&&
cached.media!==undefined&&
Array.isArray(cached.media))
{
cached.media.forEach(function(m){
if(typeof m.sources==='object'){
Object.keys(m.sources).forEach(function(s){
if(s===ssrc){
uLine.mid=String(m.mid);
}
});
}
});
}

if(uLine.mid===undefined){













if(desc.type===_this.cache.localDescriptionType){
throw new Error('An unmapped SSRC was found.');
}

uLine.mid=[bLine.type,'-',ssrc].join('');
}


uLine.candidates=candidates;
uLine.iceUfrag=iceUfrag;
uLine.icePwd=icePwd;
uLine.fingerprint=fingerprint;
uLine.port=port;
uLine.type=bLine.type;

mid2ul[uLine.mid]=uLine;

self.cache.mlU2BMap[uIdx]=bIdx;
if(self.cache.mlB2UMap[bIdx]===undefined){
self.cache.mlB2UMap[bIdx]=uIdx;
}
uIdx++;
}
});
}else{



bLine.mid=String(bLine.mid);
mid2ul[bLine.mid]=bLine;
}

bIdx++;
});



session.media=[];
mids=[];


if(desc.type===this.cache.localDescriptionType){










if(this.cache[desc.type]!=null){
cached=require("sdp-interop-transform").parse(this.cache[desc.type]);
}
if(cached!==undefined){
for(var i=0;i<cached.media.length;i++){
var uLine=cached.media[i];


if(mid2ul[uLine.mid]===undefined){











delete uLine.msid;
delete uLine.sources;
delete uLine.ssrcGroups;
if(!uLine.direction||uLine.direction==='sendrecv'){
uLine.direction='recvonly';
}else if(uLine.direction==='sendonly'){
uLine.direction='inactive';
}
}else{





}

session.media.push(uLine);

if(typeof uLine.mid==='string'){

mids.push(uLine.mid);
}
}
}
}else{








if(
cached!==undefined&&
cached.media!==undefined&&
Array.isArray(cached.media))
{
cached.media.forEach(function(uLine){
var mid=String(uLine.mid);
mids.push(mid);
if(mid2ul[mid]!==undefined){
session.media.push(mid2ul[mid]);
}else{
delete uLine.msid;
delete uLine.sources;
delete uLine.ssrcGroups;
if(!uLine.direction||uLine.direction==='sendrecv'){
uLine.direction='recvonly';
}
if(!uLine.direction||uLine.direction==='sendonly'){
uLine.direction='inactive';
}
session.media.push(uLine);
}
});
}


Object.keys(mid2ul).forEach(function(mid){
if(!mids.includes(mid)){
mids.push(mid);
if(mid2ul[mid].direction==='recvonly'){





session.media.some(function(_ref4){var direction=_ref4.direction,type=_ref4.type,sources=_ref4.sources;
if(
(direction==='sendrecv'||direction==='sendonly')&&
type===mid2ul[mid].type)
{

Object.keys(mid2ul[mid].sources).forEach(function(ssrc){

sources[ssrc]=mid2ul[mid].sources[ssrc];
});

return true;
}
});
}else{
session.media.push(mid2ul[mid]);
}
}
});
}





if(this.cache[desc.type]===null){
session.media=RTCSDPInterop.sortRemoteSourcesToMatchLocalOrder(
this.cache.localMediaLines,
session.media);

}

mids=[];
for(var _i=0;_i<session.media.length;_i++){


session.media[_i].mid=String(_i);
mids.push(String(_i));


remoteMediaLines.push(session.media[_i].type);
}


this.cacheMidToMWTrackId(session.media);






['audio','video'].forEach(function(type){
if(!session||!session.media||!Array.isArray(session.media)){
return;
}

var idx=null;
if(Object.keys(recvonlySsrcs[type]).length>0){
idx=self.getFirstSendingIndexFromAnswer(type);
if(idx===null){




for(var _i2=0;_i2<session.media.length;_i2++){
if(session.media[_i2].type===type){
idx=_i2;
break;
}
}
}
}

if(idx&&session.media.length>idx){
var mLine=session.media[idx];
Object.keys(recvonlySsrcs[type]).forEach(function(ssrc){
if(mLine.sources&&mLine.sources[ssrc]){
console.warn('Replacing an existing SSRC.');
}
if(!mLine.sources){
mLine.sources={};
}

mLine.sources[ssrc]=recvonlySsrcs[type][ssrc];
});
}
});



session.groups.some(function(group){
if(group.type==='BUNDLE'){

group.mids=mids.join(' ');
return true;
}
});


session.msidSemantic={
semantic:'WMS',
token:'*'};


var resStr=require("sdp-interop-transform").write(session);


this.cache.remoteMediaLines=remoteMediaLines;


this.cache[desc.type]=resStr;

return{
type:desc.type,
sdp:resStr};



};_proto.








getTrackTypesToMatchDescription=function getTrackTypesToMatchDescription(){
var tracksToAdd=[];var _this$cache=
this.cache,localMediaLines=_this$cache.localMediaLines,remoteMediaLines=_this$cache.remoteMediaLines;
if(remoteMediaLines.length<=localMediaLines.length){

return tracksToAdd;
}
for(var i=0;i<remoteMediaLines.length;i++){
if(localMediaLines[i]==null){
tracksToAdd.push(remoteMediaLines[i]);
}
}
return tracksToAdd;
};RTCSDPInterop.















sortRemoteSourcesToMatchLocalOrder=function sortRemoteSourcesToMatchLocalOrder(
localSourceTypes,
remoteSources)
{
var i=0;
var j=0;
while(i<localSourceTypes.length&&j<remoteSources.length){
if(remoteSources[j].type===localSourceTypes[i]){
var tmp=remoteSources[i];
remoteSources[i]=remoteSources[j];
remoteSources[j]=tmp;
i++;
j=0;
}
j++;
}
return remoteSources;
};_proto.









cacheMidToMWTrackId=function cacheMidToMWTrackId(sessionMedia){var _this2=this;
sessionMedia.forEach(function(mLine){var
sources=mLine.sources;
if(sources!=null&&mLine.type!=='application'){
var ssrcs=Object.keys(sources);
if(ssrcs.length>=1){

ssrcs.forEach(function(ssrc){var
msid=sources[ssrc].msid;
var trackId=RTCSDPInterop.getMWTrackIdFromMsid(msid);
if(trackId!=null){
_this2.midToMWTrackId.set(mLine.mid,trackId);
}
});
}
}
});
};RTCSDPInterop.



getMWTrackIdFromMsid=function getMWTrackIdFromMsid(msid){
if(msid!=null){
var splitMsid=msid.split(' ');
if(splitMsid.length>=2){
return splitMsid[1];
}
}
return null;
};return RTCSDPInterop;}();


function midToString(line){
if(typeof line.mid==='number'){
line.mid=line.mid.toString();
}
}
module.exports=RTCSDPInterop;}),null);
__d("RTCSessionDescription",["invariant","FBRTCConfig","FBRTCConstants","FBRTCMediaType","FBRTCSdpUtils","RTCSignalingExperiments"],(function(a,b,c,d,e,f,g){"use strict";var h=b("FBRTCConstants").SignalingProtocol,i=window.RTCSessionDescription||window.mozRTCSessionDescription,j=2,k="o",l="m",m="a",n="rtpmap",o="ssrc-group",p="ssrc",q="cname",r="msid",s="mslabel",t="label",u="sendonly",v="recvonly",w="sendrecv",x="inactive",y="offer",z="answer",A="=",B=" ",C=":",D="\r\n",E="audio",F="video",G="application",H=function(a,b){return a.startsWith(b+A)},I=function(a){return a.substr(j)},J=function(a,b){return a.startsWith(b+D)||a.startsWith(b+C)},K=function(a,b){return a.substr(b.length+1)},L=function(){function a(a){var b=this;this.$1=[];this.$2="-";this.$3="multiway";this.$4=1;this.$5="IN";this.$6="IP4";this.$7="127.0.0.1";a.forEach(function(a){if(H(a,k)){var c=I(a).split(B);c.length==6&&(b.$2=c[0],b.$3=c[1],b.$4=parseInt(c[2],10),b.$5=c[3],b.$6=c[4],b.$7=c[5])}b.$1.push(a)})}var b=a.prototype;b.setVersion=function(a){this.$4=a};b.getVersion=function(){return this.$4};b.toSdp=function(){var a=this;return this.$1.map(function(b){if(H(b,k))return k+A+a.$2+B+a.$3+B+a.$4+B+a.$5+B+a.$6+B+a.$7;else return b}).join(D)};return a}(),M=function(){function a(a,b,c){var d=this;c===void 0&&(c={});this.$1=[];var e={},f=[],g=[];a.forEach(function(a){var b=I(a);H(a,l)&&(d.$4=b.split(B)[0]);if(H(a,m)&&J(b,n)){var c=K(b,n);c=c.split(B);var h=c[0];c=c[1];e[c]=h}H(a,m)&&J(b,p)?d.$6(b,f):H(a,m)&&J(b,o)?d.$7(b,g):H(a,m)&&(b===u||b===v||b===w||b===x)?d.$5=b:d.$1.push(a)});Object.keys(c).forEach(function(a){if(e[a]){var b=Object.keys(c[a]).map(function(b){return b+"="+c[a][b]}).join(";");d.$1.push("a=fmtp:"+e[a]+" "+b)}});this.$3={};this.$2={};f.forEach(function(a){if(Object.prototype.hasOwnProperty.call(a,q)){var b=a.cname;!d.$3[b]?d.$3[b]=[a]:d.$3[b].push(a);a=d.findSsrcGroupForSsrc(g,a.ssrc);a&&(!d.$2[b]?d.$2[b]=[a]:d.$2[b].push(a),d.removeSsrcGroup(a,g))}});this.$4!==G&&(b===y?f.length===0?this.$5=v:this.$5=w:b===z&&(this.$5=w))}var b=a.prototype;b.getMediaType=function(){return this.$4};b.findSsrcGroupForSsrc=function(a,b){return a.find(function(a){a=a.ssrcs;return a.some(function(a){return a===b})})};b.addStreamsForEndpoint=function(a,b){this.$3[a]=b};b.addSsrcGroupsForEndpoint=function(a,b){var c=this;this.$3[a].forEach(function(d){d=d.ssrc;d=c.findSsrcGroupForSsrc(b,d);d&&(!c.$2[a]?c.$2[a]=[d]:c.$2[a].push(d),c.removeSsrcGroup(d,b))})};b.removeSsrcGroup=function(a,b){a=b.indexOf(a);a!==-1&&b.splice(a,1)};b.$7=function(a,b){a=K(a,o);if(a){a=a.split(B);var c=a[0];a=a.slice(1);b.push({semantics:c,ssrcs:a.map(function(a){return parseInt(a,10)})})}};b.$6=function(a,b){var c=a.indexOf(B),d=a.substr(0,c),e=parseInt(K(d,p),10);d=a.substr(c+1);a=b.find(function(a){return a.ssrc===e});a||(a={},a.ssrc=e,b.push(a));if(J(d,q))a.cname=K(d,q);else if(J(d,r)){c=K(d,r).split(B);a.msid={id:c[0],appdata:c[1]}}else J(d,s)?a.mslabel=K(d,s):J(d,t)&&(a.label=K(d,t))};b.toSdp=function(){var a=[];this.$1.forEach(function(b){a.push(b)});for(var b in this.$2)this.$2[b].forEach(function(b){a.push(m+A+o+C+b.semantics+B+b.ssrcs.join(B))});this.$5!=null&&a.push(m+A+this.$5);for(var c in this.$3)this.$3[c].forEach(function(b){b.cname&&a.push(m+A+p+C+b.ssrc+B+q+C+b.cname),b.msid&&a.push(m+A+p+C+b.ssrc+B+r+C+b.msid.id+(b.msid.appdata?B+b.msid.appdata:"")),b.mslabel&&a.push(m+A+p+C+b.ssrc+B+s+C+b.mslabel),b.label&&a.push(m+A+p+C+b.ssrc+B+t+C+b.label)});return a.join(D)};return a}();a=function(){function a(a,b,c){b===void 0&&(b={});c===void 0&&(c={});b=b;var d=b.type;d=d===void 0?"offer":d;b=b.sdp;b=b===void 0?"":b;this.$2=a;this.type=d;switch(a){case h.CUSTOM:this.$1=b;return;case h.MULTIWAY:this.$3(b,c);return;case h.P2P:this.$4(b,c);return}}var c=a.prototype;c.$3=function(a,c){this.type==="offer"&&(a=b("FBRTCSdpUtils").removeUnknownRtpHeaderExtensions(a),c.OFFER_SDP_TRANSFORM&&(a=c.OFFER_SDP_TRANSFORM.reduce(function(a,b){return b(a)},a)));c.DISABLE_OPUS_STEREO&&(a=b("FBRTCSdpUtils").addFmtp(a,"opus","stereo","0"));a=a.trim().split(D);var d=[],e=0;while(e<a.length&&!H(a[e],l))d.push(a[e]),e++;this.sessionDescription=new L(d);this.mediaDescriptions=[];while(e<a.length){d=[];d.push(a[e]);e++;while(e<a.length&&!H(a[e],l))d.push(a[e]),e++;this.mediaDescriptions.push(new M(d,this.type,c.FORMAT_PARAMETERS))}};c.$4=function(a,c){var d=[function(a){return b("FBRTCSdpUtils").addIceOptionToSdp(a,"fb-force-5245")},function(a){return b("FBRTCSdpUtils").useDTLSOverCrypto(a)}];if(this.type==="offer"){c.DISABLE_VIDEO&&d.push(function(a){return b("FBRTCSdpUtils").disableVideo(a)});var e=b("RTCSignalingExperiments").shouldPreferIsac();e&&d.push(function(a){return b("FBRTCSdpUtils").preferIsac(a)});d.push(function(a){return b("FBRTCSdpUtils").replaceRTPSAVPFProfile(a)},function(a){return b("FBRTCSdpUtils").addSetup(a)},function(a){return b("FBRTCSdpUtils").removeUnknownRtpHeaderExtensions(a)});b("FBRTCConfig").isVCEndpointCall()||d.push(function(a){return b("FBRTCSdpUtils").removeSdparta(a)});if(c.FORMAT_PARAMETERS){var f=Object.entries(c.FORMAT_PARAMETERS);e=function(){var a=f[h],c=a[0];a=a[1];var e=Object.entries(a);a=function(){var a=e[i],f=a[0],h=a[1];typeof h==="string"||g(0,4169);d.push(function(a){return b("FBRTCSdpUtils").addFmtp(a,c,f,h)})};for(var i=0;i<e.length;i++)a()};for(var h=0;h<f.length;h++)e()}d.push(function(a){return b("FBRTCSdpUtils").clearFirefoxInactiveDataChannelBlock(a)})}c.ADD_FB_FEATURES!=null&&d.push(function(a){Array.isArray(c.ADD_FB_FEATURES)||g(0,4170);return b("FBRTCSdpUtils").addFBFeatures.apply(b("FBRTCSdpUtils"),[a].concat(c.ADD_FB_FEATURES))});c.ADD_AUDIO_NACK&&d.push(function(a){return b("FBRTCSdpUtils").addAudioNack(a)});c.DISABLE_OPUS_STEREO&&d.push(function(a){return b("FBRTCSdpUtils").addFmtp(a,"opus","stereo","0")});var i=c.SSRC_CONTENT_TYPE;i&&d.push(function(a){return b("FBRTCSdpUtils").addSSRCContentType(a,i)});this.$1=d.reduce(function(a,b){return b(a)},a)};c.processServerMediaUpdate=function(a){var c=a.sourceKey,d=a.media,e=a.ssrcGroups,f=[],g=[];d.forEach(function(a){a.ssrcs.forEach(function(d){d={ssrc:d,cname:c,msid:{id:c,appdata:a.id},label:a.id,mslabel:c};b("FBRTCMediaType").AUDIO===a.type?f.push(d):b("FBRTCMediaType").VIDEO===a.type&&g.push(d)})});this.mediaDescriptions.forEach(function(a){a.getMediaType()===E?(a.addStreamsForEndpoint(c,f),a.addSsrcGroupsForEndpoint(c,e)):a.getMediaType()===F&&(a.addStreamsForEndpoint(c,g),a.addSsrcGroupsForEndpoint(c,e))})};c.toDesc=function(){return new i({type:this.type,sdp:this.toSdp()})};c.toSdp=function(){var a=this.$2;switch(a){case h.MULTIWAY:return[this.sessionDescription.toSdp(),this.mediaDescriptions.map(function(a){return a.toSdp()}).join(D),""].join(D);case h.CUSTOM:case h.P2P:default:return this.$1}};c.strongDiff=function(a){var b=this.toSdp();a=a.toSdp();return b!==a&&this.$5(b)!==this.$5(a)};c.$5=function(a){return this.$6(a).split("\r\n").filter(function(a){return!/^a=(candidate|setup):/.test(a)}).join("\r\n")};c.$6=function(a){return a.replace(/(o=\S+\s\S+)\s\S+\s/,"$1 - ")};return a}();e.exports=a}),null);
__d("FBRTCPeerConnection",["Promise","regeneratorRuntime","FBRTCConfig","FBRTCConsoleLogger","FBRTCConstants","FBRTCExperiment","FBRTCSdpUtils","FBRTCSupport","RTCConfig","RTCIceCandidate","RTCPeerConnection","RTCSDPInterop","RTCSessionDescription","RTWebUserActionLogger","UserAgent"],(function(a,b,c,d,e,f){"use strict";var g=b("FBRTCConstants").SignalingProtocol;a=function(){a.isGetSendersSupported=function(){return q("getSenders")};a.isReplaceTrackSupported=function(){return typeof window.RTCRtpSender==="function"&&typeof window.RTCRtpSender.prototype.replaceTrack==="function"};function a(a,c,d,e){var f=this;c===void 0&&(c={});d===void 0&&(d={});e===void 0&&(e=!1);this.$3=[];this.$4=[];this.$7=new Map();this.$12=!1;this.addEventListener=function(a,b){var c=this.$7.get(a);Array.isArray(c)||(c=[],this.$7.set(a,c));c.push(b);this.$5.addEventListener(a,b)};this.removeEventListener=function(a,b){var c=this.$7.get(a);Array.isArray(c)&&(c=c.filter(function(a){return a!==b}),c.length<1?this.$7["delete"](a):this.$7.set(a,c));this.$5.removeEventListener(a,b)};this.$14=function(a){a=a.candidate;a&&f.$4.push(a)};this.$15=function(a){a=a.channel;f.$17(a)};this.$12=e;this.$6=a;this.$1=c;this.$2=d;this.$5=this.$13();this.$11=new Set();this.$10=this.$6===g.MULTIWAY&&b("FBRTCSupport").canUseUnifiedPlan(e)?new(b("RTCSDPInterop"))():null}var c=a.prototype;c.$13=function(){var a=this.$6===g.MULTIWAY&&b("FBRTCSupport").canUseUnifiedPlan(this.$12)?"unified-plan":"plan-b";a=new(b("RTCPeerConnection"))(babelHelpers["extends"]({},this.$1,{sdpSemantics:a}),this.$2);a.addEventListener("icecandidate",this.$14);a.addEventListener("datachannel",this.$15);for(var c=this.$7.entries(),d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;var h=f[0];f=f[1];for(var f=f,i=Array.isArray(f),j=0,f=i?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var k;if(i){if(j>=f.length)break;k=f[j++]}else{j=f.next();if(j.done)break;k=j.value}k=k;a.addEventListener(h,k)}}return a};c.removeAllListeners=function(){for(var a=this.$7.entries(),b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;var e=d[0];d=d[1];for(var d=d,f=Array.isArray(d),g=0,d=f?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=d.length)break;h=d[g++]}else{g=d.next();if(g.done)break;h=g.value}h=h;this.$5.removeEventListener(e,h)}}this.$5.removeEventListener("datachannel",this.$15);this.$5.removeEventListener("icecandidate",this.$14)};c.reset=function(a){var c=this;a===void 0&&(a=!0);var d=this.getSenders(),e=this.$5;for(var f=this.$7.entries(),g=Array.isArray(f),h=0,f=g?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(g){if(h>=f.length)break;i=f[h++]}else{h=f.next();if(h.done)break;i=h.value}i=i;var j=i[0];i=i[1];for(var i=i,k=Array.isArray(i),l=0,i=k?i:i[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var m;if(k){if(l>=i.length)break;m=i[l++]}else{l=i.next();if(l.done)break;m=l.value}m=m;e.removeEventListener(j,m)}}e.removeEventListener("datachannel",this.$15);e.removeEventListener("icecandidate",this.$14);this.$3=[];this.$4=[];this.$5=this.$13();if(a)for(var m=e.getLocalStreams(),l=Array.isArray(m),k=0,m=l?m:m[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(l){if(k>=m.length)break;i=m[k++]}else{k=m.next();if(k.done)break;i=k.value}j=i;this.$16(j,d)&&this.addStream(j)}return b("Promise").race([new(b("Promise"))(function(a){var b=c.$5,d=function c(d){d=d.target;d.iceConnectionState!=="checking"&&d.iceConnectionState!=="new"&&(a(),b.removeEventListener("iceconnectionstatechange",c),p(e))};b.addEventListener("iceconnectionstatechange",d)}),new(b("Promise"))(function(a){return window.setTimeout(a,5e3)})])["catch"](function(a){return b("Promise").resolve()}).then(function(){p(e)})};c.$16=function(c,d){return!b("FBRTCConfig").isVCEndpointCall()||!b("RTCConfig").CollabWhitelistedBrowserGK?!0:a.doesBrowserSupportAddTrack(this.$12)?c.getTracks().some(function(a){return d!=null?d.some(function(b){return b.track===a}):!1}):c.active};c.close=function(){p(this.$5)};c.getCreatedIceCandidates=function(){return this.$4};c.$17=function(a){var b=this;a.addEventListener("close",function(){b.$3=b.$3.filter(function(b){return b!==a})});this.$3.push(a)};c.transformRemoteIceCandidateMid=function(a){return this.$9&&this.$9[a]||a};c.transformLocalIceCandidateMid=function(a){return this.$8&&this.$8[a]||a};c.transformOfferSdp=function(a){return b("FBRTCSdpUtils").transformSdpMids(a,this.$8)};c.transformAnswerSdp=function(a){return b("FBRTCSdpUtils").transformSdpMids(a,this.$9)};c.onReceivedRemoteIceCandidate=function(a){var c=a.sdp,d=a.label;a=a.sdp_mid;a=this.transformRemoteIceCandidateMid(a);d=new(b("RTCIceCandidate"))({sdpMLineIndex:d,candidate:b("FBRTCSdpUtils").fixMobileIceSdp(c),sdpMid:a});return b("Promise").resolve(this.$5.addIceCandidate(d))};c.getSignalingProtocol=function(){return this.$6};c.getLocalStreams=function(){return q("getLocalStreams")?this.$5.getLocalStreams():[]};c.getRemoteStreams=function(){return q("getRemoteStreams")?this.$5.getRemoteStreams():[]};c.getLocalTracks=function(){if(q("getLocalStreams")){var a=[];this.$5.getLocalStreams().forEach(function(b){a.push.apply(a,b.getTracks())});return a}return this.getSenders().map(function(a){return a.track}).filter(Boolean)};c.addRemoteMediaCnameIfNeeded=function(a){(b("UserAgent").isBrowser("Safari")||b("UserAgent").isBrowser("Mobile Safari"))&&this.$11.add(a)};c.getRemoteMediaCnames=function(){return b("UserAgent").isBrowser("Safari")||b("UserAgent").isBrowser("Mobile Safari")?Array.from(this.$11):[]};c.maybeHandleVideoEscalationForUnified=function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:if(!(b("FBRTCSupport").canUseUnifiedPlan(this.$12)&&this.getSenders().length>0)){a.next=5;break}this.$10=new(b("RTCSDPInterop"))();this.$11=new Set();a.next=5;return b("regeneratorRuntime").awrap(this.reset(!1));case 5:case"end":return a.stop()}},null,this)};a.doesBrowserSupportAddTrack=function(c){c===void 0&&(c=!1);return(b("UserAgent").isBrowser("Firefox")||b("FBRTCSupport").isSupportedSafariVersion()||b("FBRTCSupport").canUseUnifiedPlan(c))&&q("addTrack")&&a.isGetSendersSupported()};a.doesBrowserSupportRemoveTrack=function(c){c===void 0&&(c=!1);return(b("UserAgent").isBrowser("Firefox")||b("FBRTCSupport").isSupportedSafariVersion()||b("FBRTCSupport").canUseUnifiedPlan(c))&&q("removeTrack")&&a.isGetSendersSupported()};a.isTrackAPISupported=function(){return q("removeTrack")&&q("addTrack")&&a.isReplaceTrackSupported()&&a.isGetSendersSupported()};c.addStream=function(b,c){var d=this;if(a.doesBrowserSupportAddTrack(this.$12)){var e=this.getSenders(),f=function(){if(h){if(i>=g.length)return"break";j=g[i++]}else{i=g.next();if(i.done)return"break";j=i.value}var a=j,f=e.find(function(b){return b.track===a});f===void 0&&(f=d.$5.addTrack(a,b));c&&f&&c(f)};for(var g=b.getTracks(),h=Array.isArray(g),i=0,g=h?g:g[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var j,k=f();if(k==="break")break}}else this.$5.addStream(b)};c.removeStream=function(b){if(a.doesBrowserSupportRemoveTrack(this.$12)){var c=b.getTracks(),d=this.getSenders().filter(function(a){return c.includes(a.track)});for(var d=d,e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;this.$5.removeTrack(g)}}else this.$5.removeStream(b)};c.removeTrack=function(a){this.$5.removeTrack(a)};c.addTrack=function(a,b){return this.$5.addTrack(a,b)};c.createOffer=function(a,c,d){var e=this;return b("regeneratorRuntime").async(function(f){while(1)switch(f.prev=f.next){case 0:a===void 0&&(a={});c===void 0&&(c={});d===void 0&&(d={});return f.abrupt("return",i(this.$5,a).then(function(b){return v(b,d,a)}).then(function(a){var c=b("FBRTCSdpUtils").constructMidMap(a.sdp);e.$8=c.offerSdpMap;e.$9=c.answerSdpMap;return a}).then(function(a){e.$10!=null&&e.$10.toPlanB(a);return new(b("RTCSessionDescription"))(e.$6,a,c)}));case 4:case"end":return f.stop()}},null,this)};c.createAnswer=function(a){var c=this;return b("regeneratorRuntime").async(function(d){while(1)switch(d.prev=d.next){case 0:a===void 0&&(a={});return d.abrupt("return",j(this.$5).then(function(d){return new(b("RTCSessionDescription"))(c.$6,d,a)}));case 2:case"end":return d.stop()}},null,this)};c.setLocalDescription=function(a){return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:return c.abrupt("return",n(this.$5,a.toDesc()).then(function(){return a})["catch"](function(a){b("RTWebUserActionLogger").logError({errorDomain:"FBRTCPeerConnection_setLocalSDP",errorType:a.toString()});throw a}));case 1:case"end":return c.stop()}},null,this)};c.setRemoteDescription=function(a){var c;return b("regeneratorRuntime").async(function(d){while(1)switch(d.prev=d.next){case 0:c=a;if(!(this.$10!=null)){d.next=5;break}d.next=4;return b("regeneratorRuntime").awrap(this.renegotiateDescriptionsForUnified(a,this.$10));case 4:c=d.sent;case 5:return d.abrupt("return",o(this.$5,c.toDesc()).then(function(){return a})["catch"](function(a){b("RTWebUserActionLogger").logError({errorDomain:"FBRTCPeerConnection_setRemoteSDP",errorType:a.toString()});throw a}));case 6:case"end":return d.stop()}},null,this)};c.renegotiateDescriptionsForUnified=function(a,c){var d=this,e,f,g;return b("regeneratorRuntime").async(function(h){while(1)switch(h.prev=h.next){case 0:c.setPlanBRemoteDescription(a);e=c.toUnifiedPlan(a.toDesc());if(!(a.type==="answer")){h.next=11;break}f=c.getTrackTypesToMatchDescription();if(!(f.length>0)){h.next=11;break}f.forEach(function(a){a=d.$5.addTransceiver(a);a.direction="recvonly"});h.next=8;return b("regeneratorRuntime").awrap(this.createOffer());case 8:g=h.sent;h.next=11;return b("regeneratorRuntime").awrap(this.setLocalDescription(g));case 11:return h.abrupt("return",new(b("RTCSessionDescription"))(this.$6,e));case 12:case"end":return h.stop()}},null,this)};c.getLocalDescription=function(){return new(b("RTCSessionDescription"))(this.$6,this.$5.localDescription||{})};c.getRemoteDescription=function(){return new(b("RTCSessionDescription"))(this.$6,this.$5.remoteDescription||{})};c.getRemoteDescriptionForSMU=function(){var a=null;this.$10!=null&&(a=this.$10.getPlanBRemoteDescription());return a!=null?a:this.getRemoteDescription()};c.getSignalingState=function(){return this.$5.signalingState};c.getIceGatheringState=function(){return this.$5.iceGatheringState};c.getIceConnectionState=function(){return this.$5.iceConnectionState};c.getSenders=function(){return a.isGetSendersSupported()===!1?[]:this.$5.getSenders()};c.processUnifiedTrackIdTranslation=function(a,b){this.$10!=null&&a!=null&&b!=null&&this.$10.correlateWebrtcTrackIdsByMid(a,b)};c.getWebrtcTrackIdFromMWTrackId=function(a){return this.$10!=null?this.$10.getWebrtcTrackIdFromMWTrackId(a):a};c.maybeSupportReceivingVideoWithTransceivers=function(){if(b("UserAgent").isBrowser("Safari")||b("UserAgent").isBrowser("Mobile Safari")){var a=Boolean(this.getSenders().find(function(a){return a.track?a.track.kind==="video":!1}));if(!a){a=this.$5.addTransceiver("video");a.direction="recvonly"}}};c.getStats=function(a){var c=this;return b("regeneratorRuntime").async(function(d){while(1)switch(d.prev=d.next){case 0:if(!(a!=null)){d.next=2;break}return d.abrupt("return",b("Promise").reject(new Error("getStats() doesn't support selector (yet)")));case 2:if(!(b("UserAgent").isBrowser("Edge")||b("UserAgent").isBrowser("Safari")||b("UserAgent").isBrowser("Mobile Safari"))){d.next=4;break}return d.abrupt("return",b("Promise").resolve(new Map()));case 4:if(!b("UserAgent").isBrowser("Firefox")){d.next=6;break}return d.abrupt("return",b("Promise").resolve(this.$5.getStats()).then(function(a){return b("UserAgent").isBrowser("Firefox >= 48")?a:s(a)}).then(function(a){if(b("UserAgent").isBrowser("Firefox >= 53"))return a;try{a.forEach(function(a){a.type=t(a.type)})}catch(b){if(b.name!=="TypeError")throw b;a.forEach(function(b,c){a.set(c,babelHelpers["extends"]({},b,{type:t(b.type)}))})}return a}));case 6:if(!(b("UserAgent").isBrowser("Chrome")||b("UserAgent").isBrowser("Opera"))){d.next=8;break}return d.abrupt("return",new(b("Promise"))(function(a,b){c.$5.getStats(a,b)}).then(function(a){var b={};for(var a=a.result(),c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;var f={id:e.id,timestamp:e.timestamp,type:t(e.type)};for(var g=e.names(),h=Array.isArray(g),i=0,g=h?g:g[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var j;if(h){if(i>=g.length)break;j=g[i++]}else{i=g.next();if(i.done)break;j=i.value}j=j;f[j]=e.stat(j)}b[f.id]=f}return b}).then(s));case 8:return d.abrupt("return",b("Promise").reject(new Error("getStats() not supported")));case 9:case"end":return d.stop()}},null,this)};c.createDataChannel=function(a,b){if(this.$5.createDataChannel){a=this.$5.createDataChannel(a,b);this.$17(a);return a}return null};c.getDataChannelByLabel=function(a){return this.$3.find(function(b){return b.label===a})};c.getSdpMidMaps=function(){return{offerSdpMap:this.$8,answerSdpMap:this.$9}};return a}();var h=b("UserAgent").isBrowser("Chrome < 59")||b("UserAgent").isBrowser("Opera < 46")||b("UserAgent").isBrowser("Firefox < 37");function i(a,c){return h?new(b("Promise"))(function(b,d){return a.createOffer(b,d,l(c))}):b("Promise").resolve(a.createOffer(l(c)))}function j(a){return h?new(b("Promise"))(function(b,c){return a.createAnswer(b,c)}):b("Promise").resolve(a.createAnswer())}var k=b("UserAgent").isBrowser("Chrome < 38")||b("UserAgent").isBrowser("Opera < 26");function l(a){var b=a.offerToReceiveAudio;b=b===void 0?!0:b;var c=a.offerToReceiveVideo;c=c===void 0?!0:c;a=babelHelpers.objectWithoutPropertiesLoose(a,["offerToReceiveAudio","offerToReceiveVideo"]);return k?Object.keys(a).length>0?{mandatory:{OfferToReceiveAudio:b,OfferToReceiveVideo:c},optional:babelHelpers["extends"]({},r(a))}:{mandatory:{OfferToReceiveAudio:b,OfferToReceiveVideo:c}}:babelHelpers["extends"]({offerToReceiveAudio:b,offerToReceiveVideo:c},a)}var m=b("UserAgent").isBrowser("Chrome < 51")||b("UserAgent").isBrowser("Opera < 38")||b("UserAgent").isBrowser("Firefox < 37");function n(a,c){return m?new(b("Promise"))(function(b,d){return a.setLocalDescription(c,b,d)}):b("Promise").resolve(a.setLocalDescription(c))}function o(a,c){return m?new(b("Promise"))(function(b,d){return a.setRemoteDescription(c,b,d)}):b("Promise").resolve(a.setRemoteDescription(c))}function p(a){a&&a.signalingState!=="closed"&&a.close()}function q(a){return typeof b("RTCPeerConnection").prototype[a]==="function"}function r(a){var b={},c=Object.keys(a);for(var d=0;d<c.length;d++){var e=c[d],f=""+e.substr(0,1).toUpperCase()+e.substr(1);b[f]=a[e]}return b}function s(a){return new Map(Object.keys(a).map(function(b){return[b,a[b]]}))}function t(a){switch(a){case"inbound-rtp":return"inboundrtp";case"outbound-rtp":return"outboundrtp";case"candidate-pair":return"candidatepair";case"local-candidate":return"localcandidate";case"remote-candidate":return"remotecandidate";default:return a}}function u(a,c){if(b("FBRTCConfig").isVCEndpointCall())return!1;a=a.video&&a.video.match(/H264/);if(!a&&!c.preserveH264){a=b("FBRTCExperiment").gen("rtc_browser_use_h264");return a.getParam("allow_h264","no")!=="yes"}return!1}function v(a,c,d){d===void 0&&(d={});var e=c.audio,f=c.video,g=a.sdp;a=a.type;u(c,d)&&(g=b("FBRTCSdpUtils").removeH264(g));e&&(g=b("FBRTCSdpUtils").preferCodec(g,e,!1));f&&(g=b("FBRTCSdpUtils").preferCodec(g,f,!0));return b("Promise").resolve({sdp:g,type:a})}e.exports=a}),null);
__d("RTCP2PCallEscalationActions",["RTCAppDispatcher"],(function(a,b,c,d,e,f){"use strict";a={start:function(){b("RTCAppDispatcher").dispatch({type:"P2P_CALL_ESCALATION_START"})},setRequest:function(a){b("RTCAppDispatcher").dispatch({type:"P2P_CALL_ESCALATION_SET_REQUEST",request:a})},cancel:function(){b("RTCAppDispatcher").dispatch({type:"P2P_CALL_ESCALATION_FAILURE",reason:"cancelled"})},timeout:function(){b("RTCAppDispatcher").dispatch({type:"P2P_CALL_ESCALATION_FAILURE",reason:"timeout"})},handleACK:function(a){b("RTCAppDispatcher").dispatch({type:"P2P_CALL_ESCALATION_ACK",token:a})},approve:function(){b("RTCAppDispatcher").dispatch({type:"P2P_CALL_ESCALATION_SUCCESS"})},decline:function(a){b("RTCAppDispatcher").dispatch({type:"P2P_CALL_ESCALATION_FAILURE",reason:"denied",token:a,response:!1})},setResponse:function(a){b("RTCAppDispatcher").dispatch({type:"P2P_CALL_ESCALATION_SET_RESPONSE",response:a})},parseResponse:function(a,c){a?b("RTCAppDispatcher").dispatch({type:"P2P_CALL_ESCALATION_SUCCESS",token:c}):b("RTCAppDispatcher").dispatch({type:"P2P_CALL_ESCALATION_FAILURE",reason:"denied",token:c,response:!1})},muteRemoteVideo:function(){b("RTCAppDispatcher").dispatch({type:"REMOTE_VIDEO_MUTED"})},setEscalateToMediaStream:function(a){b("RTCAppDispatcher").dispatch({type:"SET_P2P_CALL_ESCALATION_MEDIA",stream:a})}};e.exports=a}),null);
__d("RTCP2PCallEscalator",["Promise","FBRTCCallSummaryStore","FBRTCConsoleLogger","FBRTCConstants","FBRTCPeerConnection","FBRTCSupport","RTCCallStore","RTCP2PCallEscalationActions","RTCP2PCallEscalationStore","RTCP2PCallStore","RTCP2PProtocolHandler","RTCUtils","dangerouslyBypassDispatchError"],(function(a,b,c,d,e,f){"use strict";var g=b("FBRTCConstants").PayloadType,h=25e3;a=function(){a.initVideoInAudioCall=function(){return b("FBRTCSupport").videoEscalationByUnmuteWorkaround()};a.isEscalated=function(){return b("RTCP2PCallEscalationStore").isEscalated()};a.isNegotiationAllowed=function(){return b("RTCP2PCallEscalationStore").isNegotiationAllowed()};function a(a,b,c){this.$3=a,this.$1=b,this.$2=c,this.$6()}var c=a.prototype;c.$6=function(){var a=this,c=b("RTCP2PCallEscalationStore").getState();this.$4=b("RTCP2PCallEscalationStore").addListener(function(){var d=b("RTCP2PCallEscalationStore").getState();if(d===c)return;!d.awaitingACK&&d.awaitingACK!==c.awaitingACK&&!d.inProgress&&window.clearTimeout(a.$5);if(d.callType!==c.callType&&d.inProgress){var e=b("RTCCallStore").getState();e=e.callSummary;e.setCallType(d.callType);e.save(b("FBRTCCallSummaryStore").getInstance())}c=d})};c.destroy=function(){i("P2P Escalator %o","destroy"),this.$4.remove(),window.clearTimeout(this.$5)};c.generateRequestToken=function(a){var c=b("RTCP2PCallEscalationStore").getState();c=c.token;if(c!=null&&a){i("P2P Escalator %o","request token","reuse");return c}i("P2P Escalator %o","request token");c=this.$2.sendVideoEscalationRequest(this.$3,this.$1,a);window.clearTimeout(this.$5);this.$5=this.$7();return c.msg_id.toString()};c.generateResponseToken=function(a,c){var d=b("RTCP2PCallEscalationStore").getState();d=d.token;if(d!=null){i("P2P Escalator %o","response token","reuse");return d}i("P2P Escalator %o %o %o","response token",c,a);d=a.peerID;var e=a.callID;a=a.msgID;d=this.$2.sendVideoRequestResponse(d,e,a,c);window.clearTimeout(this.$5);var f=d.msg_id.toString();!c?b("dangerouslyBypassDispatchError")(function(){return b("RTCP2PCallEscalationActions").decline(f)}):this.$5=this.$7();return f};c.$7=function(){return window.setTimeout(b("RTCP2PCallEscalationActions").timeout,h)};c.parseMessage=function(a){i("P2P Escalator %o","parse message",this.$3,a.msgType);switch(a.msgType){case g.VIDEO_REQUEST:a.ackID?this.$8(a):this.$9(a);break;case g.ACK:a.msg.ack_type===g.VIDEO_REQUEST&&b("RTCP2PCallEscalationActions").handleACK(a.ackID.toString());break}};c.$8=function(c){i("P2P Escalator %o","parse response",c);var d=c.ackID.toString();b("RTCP2PCallEscalationStore").getToken()===d&&this.$10(c);b("RTCP2PCallEscalationActions").parseResponse(a.requestVideoOn(c.msg),d);window.clearTimeout(this.$5)};c.$9=function(c){i("P2P Escalator %o","parse request",c);if(b("RTCP2PCallEscalationStore").isInProgress()&&!a.requestVideoOn(c.msg)){b("RTCP2PCallEscalationStore").didCurrentUserInitiate()?b("RTCP2PCallEscalationActions").cancel():(this.$10(c),b("RTCP2PCallEscalationActions").setRequest(c));return}if(b("RTCP2PCallEscalationStore").isInProgress()&&b("RTCP2PCallEscalationStore").didCurrentUserInitiate()){i("P2P Escalator %o","auto-approve","mutual consent");b("RTCP2PCallEscalationActions").approve();this.$10(c);this.generateResponseToken(c,!0);return}if(b("RTCP2PCallEscalationStore").isEscalated()){a.requestVideoOn(c.msg)?(i("P2P Escalator %o","auto-approve"),this.$10(c),this.generateResponseToken(c,!0),window.clearTimeout(this.$5)):(i("P2P Escalator %o","mute remote video"),b("RTCP2PCallEscalationActions").muteRemoteVideo());return}i("P2P Escalator %o %o","request",c);this.$10(c);b("RTCP2PCallEscalationActions").setRequest(c)};c.$10=function(a){var b=a.peerID,c=a.callID;a=a.msg;i("P2P Escalator %o","ACK","sent");this.$2.sendAck(b,c,a)};a.requestVideoOn=function(a){var b=a.reqVideoOn;a=a.videoon;return Boolean(b||a)};a.initEscalation=function(){var a=b("RTCP2PCallStore").getState(),c=a.protocolHandler;a=b("RTCCallStore").getState();a=a.localUser;var d=a.getStream();a=a.hasVideo();return(d&&a?b("Promise").resolve(d).then(function(a){c.updateLocalVideoTracker();return a}):b("RTCP2PProtocolHandler").initStream(!0).then(function(a){c.startLocalVideoTracker(a);return a})).then(function(a){b("RTCP2PCallEscalationActions").setEscalateToMediaStream(a);b("RTCP2PCallEscalationActions").start();return a})};a.onEscalationSucceeded=function(){var c=b("RTCP2PCallEscalationStore").getEscalateMediaStream(),d=b("RTCCallStore").getState();d=d.localUser;if(d.getStream()===c){var e=b("RTCCallStore").getState();e=e.remoteUsers;d.toggleMuteVideo(!1);e.first()&&e.first().toggleMuteVideo(!1)}else c&&b("dangerouslyBypassDispatchError")(function(){a.updateEscalationStream(c)})};a.onEscalationFailed=function(){var a=b("RTCP2PCallEscalationStore").getEscalateMediaStream(),c=b("RTCCallStore").getState();c=c.localUser;if(c.getStream()===a){var d=b("RTCCallStore").getState();d=d.remoteUsers;c.toggleMuteVideo(!0);d.first()&&d.first().toggleMuteVideo(!0)}else if(a){b("RTCUtils").stopMediaStream(a);c=b("RTCP2PCallStore").getState();d=c.protocolHandler;d.updateLocalVideoTracker()}};a.acceptEscalation=function(c){var d=b("RTCCallStore").getState(),e=d.localUser;d=d.remoteUsers;c=Boolean(c==null?void 0:c.muteVideo);if(e.hasVideo()){e.toggleMuteVideo(c);d.first()&&d.first().toggleMuteVideo(!1);d=b("RTCP2PCallStore").getState();d=d.protocolHandler;d.updateLocalVideoTracker();b("RTCP2PCallEscalationActions").setResponse(!0);return b("Promise").resolve(e.streams.first())}else return b("RTCP2PProtocolHandler").initStream(!c).then(function(c){b("RTCP2PCallEscalationActions").setResponse(!0);a.updateEscalationStream(c);return c})};a.declineEscalation=function(){b("RTCP2PCallEscalationActions").setResponse(!1)};a.updateEscalationStream=function(a){var c=b("RTCCallStore").getState().localUser.getStream();if(b("FBRTCPeerConnection").doesBrowserSupportAddTrack()&&c){for(var d=a.getVideoTracks(),e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;c.addTrack(g)}g=b("RTCP2PCallStore").getState();f=g.protocolHandler;f.updateAddedTracksForFirefoxVideoEscalation(c)}else b("RTCP2PProtocolHandler").replaceLocalStream(a)};return a}();a.ACK_TIMEOUT=h;function i(){}e.exports=a}),null);
__d("FBRTCGroupCallVideoEscalationDialog.react",["fbt","MessengerDialog.react","MessengerDialogBody.react","MessengerDialogButton.react","MessengerDialogCancelButton.react","MessengerDialogFooter.react","React","RTCMWProtocolHandler"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){var c=a.userName,d=a.onToggle;return h.jsxs(b("MessengerDialog.react"),{onToggle:d,children:[h.jsx(b("MessengerDialogBody.react"),{children:g._("{name} menambahkan obrolan video. Apakah Anda ingin membagikan video Anda?",[g._param("name",c)])}),h.jsxs(b("MessengerDialogFooter.react"),{children:[h.jsx(b("MessengerDialogCancelButton.react"),{}),h.jsx(b("MessengerDialogButton.react"),{label:g._("Bagikan Video"),onClick:function(){b("RTCMWProtocolHandler").escalateLocalStream(),d()},type:"primary",use:"default"})]})]})};e.exports=a}),null);
__d("RTCGroupCallAddMembersDialog.react",["cx","fbt","FluxContainer","MercuryIDs","MercuryMessageActions","MercuryMessageObject","MercuryTriodeSourceUtil","MessengerAdminGroupUtils","MessengerDialog.react","MessengerDialogButton.react","MessengerDialogCancelButton.react","MessengerDialogHeaderReact.re","MessengerDialogTitleReact.re","MessengerGraphQLTokenizer.react","MessengerParticipants.bs","MessengerRTCGroupCallContactList.react","MessengerRTCGroupCallThreadRow.react","React","RTCAppDispatcher","RTCCallStore","RTCGroupCallActions","RTCGroupCallAdminModelErrorDialogController","RTCGroupCallDialogController","RTCGroupCallEscalationActions","RTCMWProtocolHandler","RTCP2PCallStore","RTWebUserActionLogger","gkx","immutable"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("MessengerDialogHeaderReact.re").make,j=b("MessengerDialogTitleReact.re").make,k=b("React");a=b("React");c=a.PureComponent;var l=460;d=function(a){babelHelpers.inheritsLoose(c,a);c.getStores=function(){return[b("RTCCallStore")]};c.calculateState=function(){return{conferenceState:b("RTCCallStore").getState().callInfo.conferenceState,remoteUsers:b("RTCCallStore").getState().remoteUsers}};function c(c){var d;d=a.call(this,c)||this;d.state={conferenceState:"NEW",isParticipantSelected:d.props.participants.mapEntries(function(a){var b=a[0];a[1];return[d.$1(b),!1]}),newParticipants:b("immutable").List(),remoteUsers:b("immutable").Set()};d.$2=function(a){var c=!d.state.isParticipantSelected.get(a);d.setState({isParticipantSelected:d.state.isParticipantSelected.set(a,c)});a=b("RTWebUserActionLogger").getWebLoggerInfoFromStore(b("RTCCallStore").getState());b("RTWebUserActionLogger").logClick(babelHelpers["extends"]({},a,{callType:d.props.isP2P?"escalated":"mw",conferenceName:b("RTCCallStore").getState().callInfo.conferenceName,surface:"group_call_add_members_dialog",component:c?"participant_row_select":"participant_row_unselect"}))};d.$12=function(){var a=d.props,c=a.onUnmount,e=a.thread;a=a.viewerID;c();c=d.state.newParticipants.toArray().map(function(a){return a.getUniqueID()});var f=d.$3().map(function(a){a=a.fbid;return a||""});if(d.props.isP2P){var g=[].concat(c,f).map(function(a){return b("MercuryIDs").getParticipantIDFromUserID(a)});b("MessengerParticipants.bs").getMulti(g,function(a){b("RTCGroupCallEscalationActions").setUsersToRing(b("immutable").Map(a));a=b("RTCP2PCallStore").getState();a=a.protocolHandler;a.escalateToMultiway()});return}e&&(c.length>0&&e.approval_mode===1&&e.admins&&e.admins[a]===void 0?b("RTCGroupCallAdminModelErrorDialogController").showAdminModelErrorDialog():(b("RTCGroupCallActions").addParticipantsToRing(c),d.$9(e)));b("RTCMWProtocolHandler").addParticipants(b("RTCCallStore").getState().callInfo.conferenceName,b("RTCCallStore").getState().callInfo.serverInfoData,[].concat(c,f))};d.$4=function(){var a=d.state.newParticipants.toArray().map(function(a){return a.getUniqueID()}),c=d.$3().map(function(a){a=a.fbid;return a||""});a=[].concat(a,c).map(function(a){return b("MercuryIDs").getParticipantIDFromUserID(a)});b("MessengerParticipants.bs").getMulti(a,function(a){a=d.$13(b("immutable").Map(a).valueSeq().toArray());b("gkx")("678352")&&a?b("RTCGroupCallDialogController").showBlockedUserWarningDialog(d.$12,d.props.onUnmount):d.$12()})};d.$6=function(a){d.setState({newParticipants:d.state.newParticipants.push(a)})};d.$8=function(a){var b=a.getUniqueID();a=d.state.newParticipants;var c=a.findIndex(function(a){return a.getUniqueID()===b});c!==-1&&d.setState({newParticipants:a["delete"](c)})};d.$7=function(){d.setState({newParticipants:b("immutable").List()})};b("RTCAppDispatcher").explicitlyRegisterStores([b("RTCCallStore")]);return d}var d=c.prototype;d.render=function(){var a=this.props,c=a.participants,d=a.thread;a=a.viewerID;var e=this.state.conferenceState;if(e==="TERMINATED"||e==="TERMINATING")return null;e=k.jsxs("div",{className:"_2t45",children:[k.jsx("div",{className:"_225b",children:h._("Dalam Obrolan Ini:")}),k.jsx(b("MessengerRTCGroupCallContactList.react"),{isParticipantSelected:this.state.isParticipantSelected,onClick:this.$2,participantStates:b("immutable").Map(this.state.remoteUsers.map(function(a){return[a.FBID,a.participantState]})),remoteUsers:this.state.remoteUsers.toArray().sort(function(a,b){return a.userName.localeCompare(b.userName)})})]});return k.jsx(b("MessengerDialog.react"),{onToggle:this.props.onUnmount,type:"default",width:l,children:k.jsxs("div",{className:"_788k _5zad",children:[k.jsxs(i,{children:[k.jsx(b("MessengerDialogCancelButton.react"),{dataTestID:"AddParticipantsDialogCancelButton"}),k.jsx(j,{children:h._("Tambahkan Anggota Grup")}),k.jsx(b("MessengerDialogButton.react"),{dataTestID:"AddParticipantsDialogRingButton",disabled:this.$3().length+this.state.newParticipants.size===0,label:h._("Hubungi"),onClick:this.$4,type:"primary"})]}),this.$5()?k.jsx(b("MessengerRTCGroupCallThreadRow.react"),{displayAddMemberWarning:!0,participants:c,thread:d,viewerID:a}):null,k.jsx(b("MessengerGraphQLTokenizer.react"),{autoFocus:!this.$5(),className:"_2el3",context:null,defaultEntries:e,enableMessageSearch:!1,entries:this.state.newParticipants,excludeGroups:!0,excludePages:!0,forGroup:!0,forceHideClearButton:!0,hasHoverState:!1,hideViewWithEntries:!1,onAddEntryAttempt:this.$6,onClear:this.$7,onRemoveEntryAttempt:this.$8,originalEntryIDs:b("immutable").Set(this.props.participants.keySeq().toArray().map(function(a){return b("MercuryIDs").getUserIDFromParticipantID(a)||a})),placeholder:h._("Tambahkan ke Grup:"),scrollableViewClassName:"_2el2",shouldQueryInternalBot:!1,shouldQueryVCEndpoint:!1,showDefaultEntries:!0,useLayer:!1,viewer:this.props.viewerID,width:l})]})})};d.$5=function(){return!this.props.isP2P&&(this.props.participants.size>1||this.props.thread!==null)};d.$9=function(a){var c=this;if(this.state.newParticipants.size)if(b("MessengerAdminGroupUtils").isJoinableThread(a))this.state.newParticipants.forEach(function(d){d=b("MercuryIDs").getThreadIDFromUserID(d.getUniqueID());c.$10().send(c.$11().constructUserGeneratedMessageObject(a.joinable_mode.link,b("MercuryTriodeSourceUtil").getMercuryTriodeSource(),d))});else{var d="thread:"+(a.thread_fbid||a.thread_id.split(".")[1]);this.$10().send(this.$11().constructLogMessageObject(b("MercuryTriodeSourceUtil").getMercuryTriodeSource(),d,"log:subscribe",{added_participants:this.state.newParticipants.map(function(a){return b("MercuryIDs").getParticipantIDFromUserID(a.getUniqueID())}).toArray()}))}};d.$10=function(){return b("MercuryMessageActions").getForFBID(this.props.viewerID)};d.$11=function(){return b("MercuryMessageObject").getForFBID(this.props.viewerID)};d.$13=function(a){return a.some(function(a){return a.is_messenger_blocked||a.is_facebook_blocked})};d.$3=function(){var a=this;return this.props.participants.filter(function(b,c){return a.state.isParticipantSelected.get(a.$1(c))}).toArray()};d.$1=function(a){return b("MercuryIDs").getUserIDFromParticipantID(a)||""};return c}(c);e.exports=b("FluxContainer").create(d)}),null);
__d("CreateMessengerCallInviteLinkMutation",["Promise","RelayFBEnvironment","RelayModern","VideoChatLinksUserActionsMultiplexLogger","CreateMessengerCallInviteLinkMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("RelayModern").commitMutation;b("RelayModern").graphql;var i=g!==void 0?g:g=b("CreateMessengerCallInviteLinkMutation.graphql");function a(a){return new(b("Promise"))(function(c,d){h(b("RelayFBEnvironment"),{mutation:i,variables:{input:{conference_name:a}},optimisticUpdater:null,onCompleted:function(a){a=(a=a.create_messenger_call_invite_link)==null?void 0:(a=a.messenger_call_invite_link)==null?void 0:a.link_url;if(a!=null)c({linkUrl:a});else{a=new Error("No link_url returned from server.");j(a.message);d(a)}},onError:function(a){j(a.message),d(a)}})})}function j(a){new(b("VideoChatLinksUserActionsMultiplexLogger"))().setSurface("www_incall").setEvent("error").setErrorType("CreateMessengerCallInviteLinkMutationError").setErrorDetails(a).log()}e.exports=a}),null);
__d("RTCVideoChatLinkDialog.react",["cx","fbt","Clipboard","CreateMessengerCallInviteLinkMutation","FDSButton.react","FDSSpinner.react","MessengerDialog.react","MessengerDialogBody.react","MessengerDialogButton.react","MessengerDialogHeaderReact.re","MessengerDialogTitleReact.re","React","RTCCallStore"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("MessengerDialogHeaderReact.re").make,j=b("MessengerDialogTitleReact.re").make,k=b("React"),l=460;a=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this,c)||this;d.state={isCopied:!1,isError:!1,isLoading:!0,linkUrl:""};d.$1=function(){b("Clipboard").copy(d.state.linkUrl),d.setState({isCopied:!0})};c=b("RTCCallStore").getState().callInfo.conferenceName;b("CreateMessengerCallInviteLinkMutation")(c).then(function(a){a=a.linkUrl;d.setState({isCopied:!1,isError:!1,isLoading:!1,linkUrl:a})})["catch"](function(a){d.setState({isCopied:!1,isError:!0,isLoading:!1,linkUrl:""})});return d}var d=c.prototype;d.render=function(){return k.jsxs(b("MessengerDialog.react"),{type:"default",width:l,children:[k.jsxs(i,{children:[k.jsx(j,{children:h._("Undang teman dengan tautan")}),k.jsx(b("MessengerDialogButton.react"),{action:"cancel",label:h._("Selesai"),type:"primary",use:"default"})]}),k.jsx(b("MessengerDialogBody.react"),{children:k.jsxs("div",{className:"_80_-",children:[k.jsx("div",{className:"_8100",children:h._("Siapa pun yang memiliki tautan ini bisa bergabung dengan obrolan video, akun tidak diperlukan. Dia tidak akan ditambahkan ke grup. Anda bisa mencabut tautan ini kapan saja.")}),k.jsxs("div",{className:"_81el",children:[k.jsx("div",{className:"_81em",children:k.jsx("div",{className:"_81en",children:this.state.isError?h._("Tidak bisa mengambil tautan undangan."):this.state.isLoading?k.jsx(b("FDSSpinner.react"),{size:"small"}):this.state.linkUrl})}),k.jsx(b("FDSButton.react"),{isDisabled:this.state.isLoading||this.state.isError,label:this.state.isCopied?h._("Disalin!"):h._("Salin"),onClick:this.$1,size:"large",style:{marginLeft:8},use:"primary"})]})]})})]})};return c}(k.Component);e.exports=a}),null);
__d("MessengerChatLinksFunnelLogger",["CurrentUser","UserAgentData","WebFunnelLogger"],(function(a,b,c,d,e,f){"use strict";var g="MessengerVideoChatLinksFunnelDefinition",h="defaultSessionKey",i="marker",j="link_hash:",k,l;function a(a){var b=o(),c=m();a&&(l=c=[].concat(c,a));b.setFunnelTags(c);b.markStart().setAction(i).log()}function m(){var a={bn:b("UserAgentData").browserName,bv:b("UserAgentData").browserVersion,os:b("UserAgentData").platformName},c=Object.keys(a).map(function(b){return b+":"+((b=a[b])!=null?b:"unknown")});return c}function c(){var a=[];b("CurrentUser").isEmployee()&&a.push("is_employee");b("CurrentUser").isTestUser()&&a.push("is_test_user");return a}function d(a){return j+a}function f(a,b){var c=o();c.setAction(a);b&&b.actionTag&&c.setActionTag(b.actionTag);b&&b.funnelTags&&(l=(l||[]).concat(b.funnelTags),c.setFunnelTags(l));c.log()}function n(a){k=(a=a)!=null?a:h}function o(){return new(b("WebFunnelLogger"))(g).setSessionKey(k)}a={startFunnel:a,appendAction:f,setSessionKey:n,getLinkHashTag:d,getUserTags:c};e.exports=a}),null);
__d("RTCUnifiedPlanUtils",["FBRTCSupport"],(function(a,b,c,d,e,f){"use strict";a={getMediaStatusWithWebrtcTrackIds:function(a,c,d){d===void 0&&(d=!1);if(b("FBRTCSupport").canUseUnifiedPlan(d)){var e={};Object.keys(a).forEach(function(b){var d=c.getWebrtcTrackIdFromMWTrackId(b);e[d]=a[b]});return e}return a}};e.exports=a}),null);
__d("RTCMWProtocolHandler",["invariant","Promise","regeneratorRuntime","ChannelManager","CurrentUser","FBRTCCallSummary","FBRTCCallSummaryStore","FBRTCConstants","FBRTCExperiment","FBRTCGroupCallStore","FBRTCHangupReason","FBRTCLogger","FBRTCMWProtocolStore","FBRTCPeerConnection","FBRTCRtcResponseStatusCode","FBRTCSdpUtils","FBRTCStatsHelpers","FBRTCSupport","FBRTCVideoQuality","MercuryIDs","MessengerChatLinksFunnelLogger","MultiwayParticipantFetcher","MultiwayRequests","RTCAppData","RTCCallActions","RTCCallStore","RTCGroupCallActions","RTCGroupCallDialogController","RTCGroupCallEscalationStore","RTCMultiwayMessageHandler","RTCProxyUserStore","RTCProxyUserUtils","RTCSessionDescription","RTCSignalingExperiments","RTCUnifiedPlanUtils","RTCUserMediaConstraints","RTCUtils","RTWebClientFeatureGating","RTWebUserActionLogger","UserAgent","emptyFunction","generateRTCCallID","gkx","immutable","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";var h=(a=b("FBRTCConstants")).CallEndReason,i=a.GroupVideoViewLayout,j=a.SignalingProtocol,k=a.VideoQuality,l=18e4,m={appId:b("RTCAppData").getMWAppID(),deviceId:b("ChannelManager").getCompleteConfig().sessionID,userId:b("CurrentUser").getID()},n=function(){function a(a,c){var d=this;c===void 0&&(c=!1);this.$5=!1;this.$6=!1;this.$7=!1;this.$8=b("FBRTCLogger").getInstance();this.$9=!1;this.$14=function(a){a=a.target;a=a.iceConnectionState;b("RTCCallActions").emit("onIceConnectionStateChange",a);var c=b("RTCCallStore").getState();c=c.callSummary;c==null?void 0:c.setPCIsConnected(a==="completed"||a==="connected");switch(a){case"connected":c==null?void 0:c.onNetworkReady();break;case"disconnected":case"failed":d.$3||(d.$3=window.setTimeout(function(){b("RTCCallActions").endCall(h.CONNECTION_DROPPED,"ConnectionDropped"),d.$18()},l));break;default:window.clearTimeout(d.$3),d.$3=null}c==null?void 0:c.save(b("FBRTCCallSummaryStore").getInstance())};this.$1=(a=a)!=null?a:b("generateRTCCallID")();this.$2="MW_PEER_ID";this.$9=c}var c=a.prototype;c.setKeepLocalStreamsOnClose=function(a){this.$6=a;return this};c.setAllowIncomingCalls=function(a){this.$7=a;return this};c.startCall=function(a,c,d,e){var f=this,g=e.addStreamCallback;g=g===void 0?b("emptyFunction"):g;var h=e.callTrigger,i=e.formatParameters;i=i===void 0?{}:i;var k=e.preferredCodecs;k=k===void 0?{}:k;var l=e.offerSdpTransform,m=e.serverInfoData,n=e.shouldSetDescriptions;n=n===void 0?!0:n;var o=e.isEscalatedCall;o=o===void 0?!1:o;var p=e.connectedOnJoin;p=p===void 0?!1:p;e=e.escP2PCallID;e=e===void 0?"":e;b("RTCCallActions").initialize({protocol:j.MULTIWAY,conferenceName:d,serverInfoData:m,callID:this.$1.toString(),callTrigger:h});b("MessengerChatLinksFunnelLogger").appendAction("init_mw_call",{funnelTags:["conf_name:"+d,"call_id:"+this.$1]});var q=b("FBRTCCallSummary").restoreOrInitialize(b("FBRTCCallSummaryStore").getInstance(),this.$2,this.$1,!1);h&&q.onCallStarted(h);q.setJoinWithSID(m!=null);q.setActiveConnection("mws");q.setCallType("mws");q.onPopupOpened();q.setConferenceName(d);q.setServerInfoData(m);if(o){var r=b("RTCCallStore").getState().callSummary;q.setEscalationP2PCallID(r.callID)}this.$10(q);q.save(b("FBRTCCallSummaryStore").getInstance());b("RTCCallActions").setCallSummary(q);r={mandatory:{},optional:[{DtlsSrtpKeyAgreement:!1},{googNumUnsignalledRecvStreams:10},{RtpDataChannels:!0}]};var s=new(b("FBRTCPeerConnection"))(j.MULTIWAY,{iceServers:[]},r,this.$9);if(d.split(":")[0]!=="LIVE"&&!b("FBRTCSupport").isSupportedSafariVersion()){r=s.createDataChannel("data");r&&(r.onmessage=function(a){a=a.data;try{a=JSON.parse(a);a=a.body;f.$11(a)}catch(a){f.$8.logError(f.$2,f.$1,a)}})}b("FBRTCSupport").canUseUnifiedPlan(this.$9)||s.addEventListener("addstream",function(a){f.$12(d,a.stream)});(b("FBRTCSupport").canUseUnifiedPlan(this.$9)||b("FBRTCSupport").isSupportedSafariVersion())&&s.addEventListener("track",function(a){f.$13(d,s,a)});s.addEventListener("removestream",function(a){b("RTCCallActions").removeRemoteStream(a.stream)});s.addEventListener("iceconnectionstatechange",this.$14);this.$15(s,c,d,m,a,g,i,k,n,o,p,e,h?h:q.getCallTrigger(),l);!m?b("RTCCallActions").call(a,s):b("RTCCallActions").join(s);return s};c.$10=function(a){b("promiseDone")(b("FBRTCStatsHelpers").getBatteryStats(),function(c){a.addExtraInfo(b("FBRTCLogger").Key.BATTERY_START,c.level)})};c.$13=function(a,c,d){if(b("FBRTCSupport").canUseUnifiedPlan(this.$9)){var e,f;f=(f=d)!=null?(f=f.track)!=null?f.id:f:f;e=(e=d)!=null?(e=e.transceiver)!=null?e.mid:e:e;c.processUnifiedTrackIdTranslation(f,e)}if(d.streams.length>0){f=d.streams[0].id;c.addRemoteMediaCnameIfNeeded(f);this.$12(a,d.streams[0])}};c.$12=function(c,d){var e=this;d.onaddtrack=function(a){var c=a.target;a=a.track;b("RTCCallActions").addRemoteTrack(c,a)};d.onremovetrack=function(a){var c=a.target;a=a.track;b("RTCCallActions").removeRemoteTrack(c,a)};var f=d.id.split(":")[0],g=b("MercuryIDs").getParticipantIDFromUserID(f);if(f!==b("CurrentUser").getID()){f=b("RTCProxyUserUtils").getUserIDToFetch(f);var h=b("RTCProxyUserStore").getState();h=h.proxyingAsToProxyUser;b("promiseDone")(b("MultiwayParticipantFetcher").fetchAllParticipants(c,b("immutable").Set([f]),{proxyingAsToProxyUser:h}),function(c){c=c.get(g);var f=c&&(c.is_messenger_blocked||c.is_facebook_blocked);b("gkx")("678352")&&f?b("RTCGroupCallDialogController").showIncomingBlockedUserWarningDialog(function(){return a.endCall(b("RTCCallStore").getState().callInfo.conferenceName,b("RTCCallStore").getState().callInfo.serverInfoData,b("FBRTCHangupReason").HANGUP_CALL)},function(b,a){return e.$16(g,b,a)},c,d):e.$16(g,c,d)})}};c.$16=function(c,d,e){var f={};f[c]=d;b("RTCGroupCallActions").onParticipantsAdded(f);b("RTCCallActions").addRemoteStream(e);c=b("RTCCallStore").getState();d=c.callInfo;f=b("FBRTCGroupCallStore").getState();e=f.layout;c=f.pinnedSpeakerFBID;f=b("RTCCallStore").getConnection(j.MULTIWAY);f&&a.subscription(d.conferenceName,d.serverInfoData,f.getRemoteStreams(),e,c,f.getRemoteMediaCnames())};c.$11=function(a){if(a.dominantSpeakerNotification){a=a.dominantSpeakerNotification.userId;b("RTCGroupCallActions").setDominantSpeaker(a)}};c.setDescriptions=function(){this.$5=!0;var a=b("RTCCallStore").getConnection(j.MULTIWAY);this.$4&&a&&a.setRemoteDescription(this.$4)};a.escalateLocalStream=function(c){c===void 0&&(c=!0);return a.initStream(c).then(function(a){var d=b("RTCCallStore").getState(),e=d.callInfo,f=e.conferenceName;e=e.serverInfoData;var g=d.localUser;d=b("RTCCallStore").getConnection(j.MULTIWAY);if(!d)return;var h=null;c&&(a.getTracks().forEach(function(a){a.kind==="audio"&&(a.enabled=!g.isAudioMuted())}),h=g.streams.first(),d.removeStream(h));return o(d,[a],f,e,[]).then(function(){h&&b("RTCCallActions").removeLocalStream(h),b("RTCCallActions").addLocalStream(a)})})};c.onStreamReady=function(a,c,d,e,f){var g={};e||b("RTCCallActions").addLocalStream(a);g.isEscalatedCall=e;f.p2pCallID&&(g.escP2PCallID=f.p2pCallID);f.serverInfoData&&(g.serverInfoData=f.serverInfoData);f.callTrigger&&(g.callTrigger=f.callTrigger);b("RTWebClientFeatureGating").preferIsacForGroupCalls()&&(g.preferredCodecs={audio:"ISAC/16000"});this.startCall(c,[a],d,g)};a.initStream=function(a,c,d,e,f){d===void 0&&(d=!0);var g=b("FBRTCExperiment").gen("rtc_www_mw_audio_fallback");g=a&&g.getBool("use_audio_fallback",!1);d={audio:d&&b("RTCUserMediaConstraints").audio(e),video:a?babelHelpers["extends"]({},p(b("RTCUserMediaConstraints").video(c?c:k.HD_VIDEO,f))):!1};e={optionalConstraintsOnly:!0,supportFilteredStreams:a&&b("RTWebClientFeatureGating").canUseMWVideoFilters()};c=g?b("RTCUtils").getUserMediaWithAudioFallback:b("RTCUtils").getUserMedia;return c(d,e)};a.updateLocalStream=function(a){var c=b("RTCCallStore").getState();c=c.callInfo;var d=c.conferenceName;c=c.serverInfoData;var e=b("RTCCallStore").getConnection(j.MULTIWAY);return!e?b("Promise").resolve():o(e,[a],d,c,[]).then(function(){b("RTCCallActions").removeAllLocalStreams(!0),b("RTCCallActions").addLocalStream(a)})};a.startScreenStream=function(a){var c=b("RTCCallStore").getState(),d=c.callInfo,e=d.conferenceName;d=d.serverInfoData;var f=c.localUser;c=b("RTCCallStore").getConnection(j.MULTIWAY);if(!c)return;for(var g=f.screenStreams,h=Array.isArray(g),i=0,g=h?g:g[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var k;if(h){if(i>=g.length)break;k=g[i++]}else{i=g.next();if(i.done)break;k=i.value}k=k;k!==a&&b("RTCUtils").transferAudioTracks(a,k)}for(var k=f.streams,i=Array.isArray(k),h=0,k=i?k:k[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(i){if(h>=k.length)break;g=k[h++]}else{h=k.next();if(h.done)break;g=h.value}g=g;b("RTCUtils").transferAudioTracks(a,g)}b("promiseDone")(o(c,[a],e,d,[]),function(){for(var c=f.screenStreams,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(d){if(e>=c.length)break;g=c[e++]}else{e=c.next();if(e.done)break;g=e.value}g=g;g!==a&&(b("RTCCallActions").removeLocalScreenStream(g),b("RTCUtils").stopMediaStream(g))}b("RTCCallActions").addLocalScreenStream(a)})};a.updateScreenStream=function(b,c){a.startScreenStream(c)};a.stopScreenStream=function(c){var d=b("RTCCallStore").getState(),e=d.callInfo,f=e.conferenceName,g=e.serverInfoData;e=d.localUser;var h=b("RTCCallStore").getConnection(j.MULTIWAY);if(!h)return;d=e.getStream();d?e=b("Promise").resolve(d):e=a.initStream(!0,void 0,!1).then(function(a){b("RTCCallActions").addLocalStream(a);return a});b("promiseDone")(e,function(a){b("RTCUtils").transferAudioTracks(a,c),b("promiseDone")(o(h,[a],f,g,[]),function(){b("RTCUtils").stopMediaStream(c),b("RTCCallActions").removeLocalScreenStream(c)})})};a.endCall=function(c,d,e,f){f===void 0&&(f=""),b("promiseDone")(a.genEndCall(c,e,{serverInfoData:d,detailedReasonString:f,keepLocalStream:!1}))};a.genEndCall=function(a,c,d){b("RTCMultiwayMessageHandler").close();d.keepLocalStream||b("RTCCallActions").removeAllLocalStreams(!0);var e=d.detailedReasonString||"Hangup by user";b("RTCCallActions").hangup(b("RTCUtils").endCallReasonFromHangupReason(c),e);return b("MultiwayRequests").sendHangupRequest(m,a,d.serverInfoData,c,e,b("RTCCallStore").getState().callInfo.callID).then(function(){b("RTCCallActions").hangupSuccess()})["catch"](function(a){b("RTCCallActions").hangupError();throw a})};a.otherUserInAnotherCall=function(a,c,d,e,f){f===void 0&&(f=""),b("promiseDone")(b("MultiwayRequests").sendHangupRequest(m,a,c,d,f||"User receiving this call is in another call",e))};c.iceRestart=function(a,c){var d=b("RTCCallStore").getConnection(j.MULTIWAY);d&&o(d,[],a,c,[],{iceRestart:!0})};a.addParticipants=function(a,c,d){return b("MultiwayRequests").sendAddParticipantsRequest(m,a,c,d,b("RTCCallStore").getState().callInfo.callID)};a.removeParticipants=function(a,c,d){return b("MultiwayRequests").sendRemoveParticipantsRequest(m,a,c,d,b("RTCCallStore").getState().callInfo.callID)};a.subscription=function(a,c,d,e,f,g){g===void 0&&(g=[]);var h=e===i.DOMINANT_SPEAKER?b("FBRTCVideoQuality").LOW:e===i.GRID?b("FBRTCVideoQuality").MEDIUM:b("FBRTCVideoQuality").HIGH;d=d.map(function(a){a=a.id;return a}).concat(g);b("gkx")("1388811")?e===i.DOMINANT_SPEAKER&&f!=null?g=d.filter(function(a){return a.split(":")[0]===f}).map(function(a){return{cname:a,options:{videoQuality:b("FBRTCVideoQuality").HIGH}}}):b("UserAgent").isBrowser("Mobile Safari")?g=d.map(function(a){return{cname:a,options:{videoQuality:h}}}):g=[{cname:""}]:(g=d.map(function(a){return{cname:a,options:{videoQuality:e===i.DOMINANT_SPEAKER&&f===a.split(":")[0]?b("FBRTCVideoQuality").HIGH:h}}}),e===i.DOMINANT_SPEAKER&&!f&&g.push({cname:""}));b("MultiwayRequests").sendSubscriptionRequest(m,a,c,g,b("RTCCallStore").getState().callInfo.callID)};a.clientMediaUpdate=function(a,c,d,e,f){b("MultiwayRequests").sendClientMediaUpdateRequest(m,a,c,d,e,f,b("RTCCallStore").getState().callInfo.callID).then(function(a){var c=a.header.responseStatusCode;a=a.body.clientMediaUpdateResponse.currentVersion;return b("RTCGroupCallActions").onClientMediaUpdateResponse(c,a)})["catch"](function(a){b("FBRTCLogger").getInstance().logError(null,b("RTCCallStore").getState().callInfo.callID,a)})};c.$15=function(a,c,d,e,f,g,h,i,j,k,l,m,n,p){var q=this;this.$17(d,e);b("promiseDone")(o(a,c,d,e,f,{},g,h,i,j,k,m,n,p,this.$9),function(a){q.$4=a,q.$5&&q.setDescriptions(),b("RTCCallActions").callSuccess(l)},function(a){b("RTCCallActions").callError(a.responseStatusCode,a.responseSubCode),q.$18()})};c.$18=function(){var a=b("RTCCallStore").getConnection(j.MULTIWAY);b("RTCMultiwayMessageHandler").close();a&&a.close();this.$6||b("RTCCallActions").removeAllLocalStreams(!0)};c.$17=function(a,c){b("RTCMultiwayMessageHandler").initHandler(a,c,this.$7,this.$6)};a.maybeLimitBitrate=function(a){a=a.getSenders().filter(function(a){return a.track&&a.track.kind==="video"});if(a.length>0&&b("RTCSignalingExperiments").shouldCapMWBitrate()){a=a[0];var c=a.getParameters();c.encodings[0].maxBitrate=72e4;b("Promise").resolve(a.setParameters(c))}};return a}();function o(a,c,d,e,f,g,h,i,k,l,o,p,q,r,s){var t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;return b("regeneratorRuntime").async(function(I){while(1)switch(I.prev=I.next){case 0:g===void 0&&(g={}),h===void 0&&(h=b("emptyFunction")),i===void 0&&(i={}),k===void 0&&(k={}),l===void 0&&(l=!0),o===void 0&&(o=!1),p===void 0&&(p=""),q===void 0&&(q=""),r===void 0&&(r=[]),s===void 0&&(s=!1),t={},u=[],(v=a.getLocalStreams()||[],w=Array.isArray(v),x=0,v=w?v:v[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]());case 13:if(!w){I.next=19;break}if(!(x>=v.length)){I.next=16;break}return I.abrupt("break",27);case 16:y=v[x++];I.next=23;break;case 19:x=v.next();if(!x.done){I.next=22;break}return I.abrupt("break",27);case 22:y=x.value;case 23:z=y,a.removeStream(z);case 25:I.next=13;break;case 27:if(!b("FBRTCSupport").canUseUnifiedPlan(s)){I.next=30;break}I.next=30;return b("regeneratorRuntime").awrap(a.maybeHandleVideoEscalationForUnified());case 30:c.forEach(function(b){u=u.concat(b.getTracks()),a.addStream(b,h)});a.maybeSupportReceivingVideoWithTransceivers();u.forEach(function(a){t[a.id]=a.enabled});I.next=35;return b("regeneratorRuntime").awrap(a.createOffer(babelHelpers["extends"]({preserveH264:b("RTCUtils").isWatchPartyCall(d)},g),{DISABLE_OPUS_STEREO:b("RTWebClientFeatureGating").disableOpusStereo(),FORMAT_PARAMETERS:i,OFFER_SDP_TRANSFORM:r},k));case 35:A=I.sent;B=b("FBRTCMWProtocolStore").getState().clientMediaUpdateInfo.lastSyncedClientVersion+1;A.sessionDescription.setVersion(B);b("RTCGroupCallActions").setLocalClientVersion(B);if(b("FBRTCSdpUtils").validateOfferSdp(d,A.toSdp())){I.next=41;break}throw b("FBRTCRtcResponseStatusCode").BAD_REQUEST;case 41:I.next=43;return b("regeneratorRuntime").awrap(a.setLocalDescription(A));case 43:b("RTCGroupCallActions").onJoinRequestSent();(b("RTCUtils").isGroupCall(d)||b("RTCUtils").isMessengerCall(d))&&n.maybeLimitBitrate(a);I.next=47;return b("regeneratorRuntime").awrap(b("MultiwayRequests").sendJoinRequest(m,d,e,A,f.length>0?f:null,u.length>0?t:null,{callID:b("RTCCallStore").getState().callInfo.callID,callTrigger:q,numParticipants:b("RTCCallStore").getState().remoteUsers.size},{userToEscalate:o&&f.length>0?f[0]:null,isEscalator:b("RTCGroupCallEscalationStore").getState().toRing,escP2PCallID:p}));case 47:C=I.sent;b("RTCGroupCallActions").onReceivedJoinResponse();D=C.header,E=D.responseStatusCode,F=D.responseSubCode;if(!(E!==b("FBRTCRtcResponseStatusCode").OK)){I.next=53;break}b("RTWebUserActionLogger").logCheckpoint({checkpoint:"MW response status code "+E+" subcode "+F});return I.abrupt("return",new(b("Promise"))(function(a,b){b({responseStatusCode:E,responseSubCode:F})}));case 53:b("RTCGroupCallActions").onJoinResponse(C.header.serverInfoData);b("RTCProxyUserUtils").setProxyingAsUsersFromMessage(C.body.joinResponse);G=new(b("RTCSessionDescription"))(j.MULTIWAY,{type:"answer",sdp:C.body.joinResponse.answer.sdpString},{FORMAT_PARAMETERS:i});if(!l){I.next=59;break}I.next=59;return b("regeneratorRuntime").awrap(a.setRemoteDescription(G));case 59:H=b("RTCUnifiedPlanUtils").getMediaStatusWithWebrtcTrackIds(C.body.joinResponse.mediaStatus,a,s);b("RTCGroupCallActions").toggleRemoteStream(H);b("RTCGroupCallActions").onProcessedJoinResponse();return I.abrupt("return",G);case 63:case"end":return I.stop()}},null,this)}function p(a){a instanceof Object||g(0,444);return a}e.exports=n}),null);
__d("RTCCallNUXActions",["FBRTCLogger","FBRTCUtils","RTCAppDispatcher","XRTCCallNUXController","dangerouslyBypassDispatchError"],(function(a,b,c,d,e,f){"use strict";a={refreshNUXState:function(){b("FBRTCUtils").sendServerRequest(b("XRTCCallNUXController").getURIBuilder().getURI(),function(a){a=a.payload;b("RTCAppDispatcher").dispatch({type:"INIT_NUX_STATE",payload:a})},function(){})},markNUXViewed:function(a){try{b("RTCAppDispatcher").dispatch({type:"MARK_NUX_VIEWED",nuxID:a})}catch(c){b("dangerouslyBypassDispatchError")(function(){return b("RTCAppDispatcher").dispatch({type:"MARK_NUX_VIEWED",nuxID:a})})}},dismissNUX:function(a){b("RTCAppDispatcher").dispatch({type:"DISMISS_NUX",nuxID:a})}};e.exports=a}),null);
__d("RTCOneVCActions",["RTCAppDispatcher"],(function(a,b,c,d,e,f){"use strict";a={storeParticipants:function(a){b("RTCAppDispatcher").dispatch({type:"STORE_PARTICIPANTS",participants:a})},setMeetingID:function(a){b("RTCAppDispatcher").dispatch({type:"SET_MEETING_ID",meetingID:a})},setMeetingPassword:function(a){b("RTCAppDispatcher").dispatch({type:"SET_MEETING_PASSWORD",meetingPassword:a})}};e.exports=a}),null);
__d("RTCPeerConnectionQueue",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1=[],this.$2=[]}var b=a.prototype;b.push=function(a,b){switch(a){case"add":this.$1.push(b);break;case"remove":this.$2.push(b);break}};b.drain=function(){this.$3(this.$2),this.clear("remove"),this.$3(this.$1),this.clear("add")};b.$3=function(a){if(a.length<1)return;for(var a=a,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;try{d()}catch(a){}}};b.clear=function(a){switch(a){case"add":this.$1=[];break;case"remove":this.$2=[];break;default:this.$1=[],this.$2=[]}};return a}();e.exports=a}),null);