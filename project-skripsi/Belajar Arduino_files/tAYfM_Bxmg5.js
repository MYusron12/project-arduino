if (self.CavalryLogger) { CavalryLogger.start_js(["HuNfH"]); }

__d("CometVideoHomeThreeDotContextMenuWrapper_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometVideoHomeThreeDotContextMenuWrapper_video",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometVideoHomeThreeDotContextMenuWrapper.react",["CometRelay","CometVideoHomeStoryContext","CometVideoHomeThreeDotContextMenu.react","CometVideoHomeThreeDotContextMenuWrapperContext","React","VideoHomeTypedLoggerLite","CometVideoHomeThreeDotContextMenuWrapper_video.graphql"],(function(a,b,c,d,e,f){"use strict";var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");c=b("React");var j=c.useContext,k=c.useState;function a(a){var c=a.video,d=a.videoChannelType;a=a.videoMenuLocation;c=h(g!==void 0?g:g=b("CometVideoHomeThreeDotContextMenuWrapper_video.graphql"),c);var e=c.id;c=k(!1);var f=c[0],l=c[1];c=j(b("CometVideoHomeStoryContext"));var m=c.hideableToken,n=c.identifierToken;c=c.tracking;var o=j(b("CometVideoHomeThreeDotContextMenuWrapperContext")),p=o.contextMenuEnabled,q=o.onHideVideo,r=o.tabType;p===null;if(p!==!0)return null;return e==null?null:i.jsx(b("CometVideoHomeThreeDotContextMenu.react"),{color:"white",hideableToken:m,identifierToken:n,onHideVideo:function(){q&&q(e)},onPress:f?null:function(){b("VideoHomeTypedLoggerLite").log({click_target:"context_menu",event:"click",tab_type:r}),l(!0)},stopPropagation:!0,tracking:c,videoChannelType:d,videoID:e,videoMenuLocation:a||"VIDEO_HOME_LIVE_TAB"})}e.exports=a}),null);