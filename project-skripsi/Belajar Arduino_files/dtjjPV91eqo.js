if (self.CavalryLogger) { CavalryLogger.start_js(["Q\/pVj"]); }

__d("AlignmentEnum",["prop-types","objectValues"],(function(a,b,c,d,e,f){"use strict";a={left:"left",center:"center",right:"right"};c=b("objectValues")(a);d=babelHelpers["extends"]({},a,{values:c,propType:b("prop-types").oneOf(c)});e.exports=d}),null);
__d("CornerEnum",["objectValues"],(function(a,b,c,d,e,f){"use strict";a={topLeft:"topLeft",topRight:"topRight",bottomRight:"bottomRight",bottomLeft:"bottomLeft"};c=b("objectValues")(a);d=babelHelpers["extends"]({},a,{values:c});e.exports=d}),null);
__d("SideEnum",["prop-types","objectValues"],(function(a,b,c,d,e,f){"use strict";a={top:"top",right:"right",bottom:"bottom",left:"left"};c=b("objectValues")(a);d=babelHelpers["extends"]({},a,{values:c,propType:b("prop-types").oneOf(c)});e.exports=d}),null);
__d("ChatOpenTab",["csx","Bootloader","ContextualThing","CurrentUser","Event","MercuryIDs","Parent","WorkGalahadSettings","requireWeak"],(function(a,b,c,d,e,f,g){"use strict";var h=null;b("requireWeak")("FantaTabsReactApp",function(a){return h=a});b("requireWeak")("FantaTabsSlimApp",function(a){return h=a});function i(a,c,d,e){b("Event").listen(a,"click",function(f){(b("WorkGalahadSettings").isGalahadEnabled||l.canOpenTab())&&(e(c,d),a.removeAttribute("ajaxify"),a.removeAttribute("rel"),f.preventDefault())})}function j(a,c,d,e){b("Event").listen(a,"click",function(a){l.canOpenTab()&&e(c,d)})}function k(a){a=b("ContextualThing").getContext(a);return a&&b("Parent").bySelector(a,"._3qw")!==null}var l={canOpenTab:function(){return h&&!h.isHidden()},listenOpenEmptyTabDEPRECATED:function(a,b){i(a,null,b,this._loadAndOpenEmptyFantaTab)},listenOpenThreadDEPRECATED:function(a,b,c){var d=this;i(a,b,c,function(a,b){return d.loadAndOpenFantaTab(a,b,c)})},listenOpenUserTabDEPRECATED:function(a,b,c){var d=this;k(a)||i(a,b,c,function(a){return d.loadAndOpenFantaTab(a,"user",c)})},listenOpenUserTabPersistentEventDEPRECATED:function(a,b,c){var d=this;k(a)||j(a,b,c,function(a){return d.loadAndOpenFantaTab(a,"user",c)})},listenOpenPageTabDEPRECATED:function(a,b,c,d){var e=this;k(a)||i(a,b,d,function(a){return e.loadAndOpenFantaTab(a,"page",d)})},listenOpenPageTabPersistentEventDEPRECATED:function(a,b,c,d){var e=this;k(a)||j(a,b,d,function(a){return e.loadAndOpenFantaTab(a,"page",d)})},loadAndOpenFantaTab:function(a,c,d){b("Bootloader").loadModules(["ChatOpenTabEventLogger","FantaTabActions"],function(e,f){if(c==="user"||c==="page"){var g=b("MercuryIDs").getThreadIDFromUserID(a);f.openTab(g,[d]);e.logUserClickOpen(d,a)}else f.openTab(a,[d]),e.logClickOpen(d,a)},"ChatOpenTab")},_loadAndOpenEmptyFantaTab:function(){b("Bootloader").loadModules(["ChatOpenTabEventLogger","FantaTabActions","MessengerState.bs"],function(a,c,d){d=d.createNewLocalThreadGenerateID(b("CurrentUser").getID());c.openNewMessageTab(d,"jewel_new_message");a.logClickOpen("EmptyTab")},"ChatOpenTab")}};e.exports=l}),null);
__d("ChatOpenTabEventLogger",["Banzai","Bootloader"],(function(a,b,c,d,e,f){"use strict";var g="messaging_tracking";a={_log:function(a,c,d,e){var f={referrer:a||"",message_thread_id:c,message_view:"chat",timestamp_send:Date.now(),message_target_ids:[]};d!==void 0&&(f.message_target_ids=[d]);b("Bootloader").loadModules(["ChatImpressionLogger"],function(c){c.logImpression(a,d,e),b("Banzai").post(g,f,{delay:0,retry:!0})},"ChatOpenTabEventLogger")},logClickOpen:function(a,c,d,e){var f=this;b("Bootloader").loadModules(["MercuryIDs","getPageIDFromThreadID","ChatImpressionLogger"],function(b,g){f._log(a,c,d,e);b=g(String(c));b&&f._logPageClick(a,b)},"ChatOpenTabEventLogger")},logUserClickOpen:function(a,c,d){var e=this;b("Bootloader").loadModules(["MercuryIDs","ChatImpressionLogger"],function(b){b=b.getThreadIDFromUserID(c);e.logClickOpen(a,b,c,d)},"ChatOpenTabEventLogger")},logAutoOpen:function(a,b,c,d){this._log(a,b,c,d)},logUserAutoOpen:function(a,c){var d=this;b("Bootloader").loadModules(["MercuryIDs","ChatImpressionLogger"],function(b){b=b.getThreadIDFromUserID(c);d._log(a,b,c)},"ChatOpenTabEventLogger")},_logPageClick:function(a,c){b("Banzai").post("page_message_button_click",{page_id:c,ref:a}),b("Bootloader").loadModules(["PagesLogger","PagesLoggerEventEnum","PagesLoggerEventTargetEnum"],function(b,d,e){b.log(c,d.CLICK,e.PAGE_MESSAGE,a)},"ChatOpenTabEventLogger")}};e.exports=a}),null);
__d("PresenceViewerCapabilities",["ArbiterMixin","PresenceConfig"],(function(a,b,c,d,e,f){"use strict";var g=null;a=Object.assign({},b("ArbiterMixin"));Object.assign(a,{get:function(){if(g!=null)return g;g=b("PresenceConfig").get("viewer_presence_capabilities");return g}});e.exports=a}),null);
__d("CometInteractionSourceContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(10);e.exports=c}),null);
__d("BaseToasterView.react",["CometToasterStateManager","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React"),h=b("CometToasterStateManager").getInstance();a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={visibleToasts:[]},b)||babelHelpers.assertThisInitialized(c)}b.getDerivedStateFromProps=function(a,b){b=b!=null?b.visibleToasts.slice(0,a.maxVisible):[];var c=0,d=a.filterToasts,e=a.toasterState,f={},g=d!=null?Object.keys(e).filter(function(a){var b,c=e[a];f[a]=c;var g=c==null?void 0:c.shown;b=c==null?void 0:(b=c.value)==null?void 0:(b=b.type)==null?void 0:b.name;if(c==null||b==null)return!0;if(d.has(b)&&!g){h.expire(a);return!1}}):Object.keys(e),i=b.reduce(function(a,b){b!=null&&a.add(b.id);return a},new Set()),j=0;while(c<a.maxVisible){var k=b[c],l=Object.keys(f).length>0?f:a.toasterState;if(k!=null){l=Object.prototype.hasOwnProperty.call(l,k.id);if(l){l=e[k.id];b[c]={expired:l.expired,id:l.id,toast:l.value};c++;continue}else b[c]=null}k=null;while(k==null&&j<g.length){l=g[j++];var m=i.has(l);m||(k=a.toasterState[l])}k!=null&&(b[c]={expired:k.expired,id:k.id,toast:k.value});c++}return{visibleToasts:b}};var c=b.prototype;c.render=function(){var a=this;return g.jsx("ul",{className:this.props.className,children:this.state.visibleToasts.map(function(b,c){return b!=null?a.props.children(b.toast,b.id,b.expired,c):null})})};return b}(g.PureComponent);a.defaultProps={maxVisible:1};e.exports=a}),null);
__d("CometToastAnimationInternal.react",["React","stylex","useFadeEffect","useMergeRefs","useToasterStateManager","useVisibilityObserver"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React");c=b("React");var i=c.useCallback,j=100,k={mount:{opacity:"pedkr2u6",transform:"g3zh7qmp",transitionDuration:"pc15xi3s",transitionTimingFunction:"ilcmz9jb"},root:{opacity:"b5wmifdl",transform:"f2tghaqp",transitionDuration:"s1992sns",transitionProperty:"r5qslco7",transitionTimingFunction:"nf1dmkjp"}};function a(a){var c=a.children,d=a.expired;d=d===void 0?!1:d;var e=a.id,f=a.position;a=a.xstyle;var l=b("useToasterStateManager")(),m=h.Children.only(c);c=i(function(){l.resetTimer(e)},[e,l]);var n=i(function(){l.stopTimer(e)},[e,l]),o=i(function(){l.shown(e)},[e,l]),p=i(function(){l.hidden(e)},[e,l]),q=i(function(a){m.props.onActionPress!=null&&m.props.onActionPress(a),a.defaultPrevented||l.expire(e)},[m.props,e,l]);p=b("useVisibilityObserver")({onHidden:p,onVisible:o});o=b("useFadeEffect")(!d);d=o[0];var r=o[1];o=o[2];o=b("useMergeRefs")(o,p);return d?h.jsx("li",{className:(g||(g=b("stylex")))(k.root,r&&k.mount,a),onMouseEnter:n,onMouseLeave:c,ref:o,style:{bottom:j*f},children:h.cloneElement(m,{onActionPress:q})}):null}e.exports=a}),null);
__d("useNoopDebuggingInfoComponent",[],(function(a,b,c,d,e,f){"use strict";var g=function(){};a=function(){return[null,g]};e.exports=a}),null);
__d("HovercardLink",["URI"],(function(a,b,c,d,e,f){var g,h={getBaseURI:function(){return new(g||(g=b("URI")))("/ajax/hovercard/hovercard.php")},constructEndpoint:function(a,b){return h.constructEndpointWithGroupAndLocation(a,b,null)},constructEndpointWithLocation:function(a,b){return h.constructEndpointWithGroupAndLocation(a,null,b)},constructEndpointWithGroupAndLocation:function(a,b,c,d){return h.constructEndpointWithGroupLocationAndExtraParams(a,b,c,d)},constructEndpointWithGroupLocationAndExtraParams:function(a,c,d,e,f){f===void 0&&(f=null);var i=new(g||(g=b("URI")))(h.getBaseURI()).setQueryData({id:a.id}),j={};if(f!==null)for(var k in f)j[k]=f[k];(a.weakreference||e)&&c&&(j.group_id=c);d&&(j.hc_location=d);c&&(j.directed_target_id=c);i.addQueryData({extragetparams:JSON.stringify(j)});return i}};e.exports=h}),null);
__d("TooltipMixinClass.react",["DOM","React","ReactDOM","TooltipData"],(function(a,b,c,d,e,f){var g=b("React");function h(a){a=a.tooltip;return a!=null&&g.isValidElement(a)}a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={tooltipContainer:h(d.props)?b("DOM").create("div"):null},c)||babelHelpers.assertThisInitialized(d)}c.getDerivedStateFromProps=function(a,c){a=h(a);c=c.tooltipContainer;if(c&&!a)return{tooltipContainer:null};else if(!c&&a)return{tooltipContainer:b("DOM").create("div")};return null};var d=c.prototype;d.componentDidMount=function(){this.$1()};d.componentDidUpdate=function(a,b){b.tooltipContainer&&!this.state.tooltipContainer&&this.$2(b.tooltipContainer),this.$1()};d.$1=function(){var a=this.state.tooltipContainer,c=this.props.tooltip;if(c!=null&&g.isValidElement(c)&&a!=null){var d=function(){return c};b("ReactDOM").render(g.jsx(d,{}),a)}else a=this.props.tooltip;a!=null?b("TooltipData").set(b("ReactDOM").findDOMNode(this),a,this.props.position,this.props.alignH):b("TooltipData").remove(b("ReactDOM").findDOMNode(this))};d.componentWillUnmount=function(){this.state.tooltipContainer&&this.$2(this.state.tooltipContainer),b("TooltipData").remove(b("ReactDOM").findDOMNode(this))};d.$2=function(a){b("ReactDOM").unmountComponentAtNode(a)};return c}(g.Component);e.exports=a}),null);
__d("TooltipLink.react",["React","TooltipMixinClass.react"],(function(a,b,c,d,e,f){var g=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){return g.jsx("a",babelHelpers["extends"]({},this.props,{children:this.props.children}))};return b}(b("TooltipMixinClass.react"));e.exports=a}),null);
__d("ContextualLayer.react",["ContextualLayer","React","ReactBrowserEventEmitter_DO_NOT_USE","ReactDOM","ReactLayer","Style","prop-types","warning"],(function(a,b,c,d,e,f){var g=b("React");a=b("ReactLayer").createClass({propTypes:{contextRef:b("prop-types").func,context:function(a,b,c){if(a.context==null==(a.contextRef==null))return new Error("Exactly one of `context` or `contextRef` must be set on `"+(c+"`."));a=a[b];if(a!=null){if(typeof a!=="object")return new Error("Invalid `"+b+"` supplied to `"+c+"`, expected a React component.");if(g.isValidElement(a))return new Error("Invalid `"+b+"` supplied to `"+c+"`, expected a React component instance. You're passing a React descriptor.")}}},immutableProps:{modal:null},createLayer:function(a){var c=this,d=this._getContextNode(),e={context:d,contextBounds:this.props.contextBounds,"data-testid":this.props["data-testid"],position:this.props.position,alignment:this.props.alignment,offsetX:this.props.offsetX,offsetY:this.props.offsetY,addedBehaviors:this.enumerateBehaviors(this.props.behaviors),shouldSetARIAProperties:this.props.shouldSetARIAProperties,isStrictlyControlled:this.props.isStrictlyControlled};e=new(b("ContextualLayer"))(e,a);this._node=a;this._matchContextSize(this.props);this.props.contextBounds&&e.setContextWithBounds(d,this.props.contextBounds);this._resizeSubscription=e.subscribe("resize",function(a,d){a=b("ReactBrowserEventEmitter_DO_NOT_USE").isEnabled();a&&(c.props.onResize&&c.props.onResize(d))});e.conditionShow(this.props.shown);return e},componentWillUnmount:function(){this._resizeSubscription&&(this._resizeSubscription.unsubscribe(),this._resizeSubscription=null)},receiveProps:function(a,b){this.updateBehaviors(b.behaviors,a.behaviors);b=this._getContextNode();a.contextBounds?this.layer.setContextWithBounds(b,a.contextBounds):this.layer.setContext(b);this._matchContextSize(a);this.layer.setPosition(a.position);this.layer.setAlignment(a.alignment);this.layer.setOffsetX(a.offsetX);this.layer.setOffsetY(a.offsetY);this.layer.conditionShow(a.shown)},getDefaultEnabledBehaviors:function(){return b("ContextualLayer").getDefaultBehaviorsAsObject()},_getContextNode:function(){var a;this.props.context?a=this.props.context:this.props.contextRef&&(a=this.props.contextRef());a!=null&&a.nodeType!==1&&(a=b("ReactDOM").findDOMNode(a));return a},_matchContextSize:function(a){var c=this._node,d=this._getContextNode();a.containerWidthMatchContext&&b("Style").set(c,"width",d.offsetWidth+"px");a.containerHeightMatchContext&&b("Style").set(c,"height",d.offsetHeight+"px")}});e.exports=a}),null);
__d("FantaDispatcher",["ExplicitRegistrationDispatcher"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("ExplicitRegistrationDispatcher"));e.exports=new a({strict:!1})}),null);
__d("FantaHider",["ifRequired"],(function(a,b,c,d,e,f){"use strict";e.exports={hide:function(){b("ifRequired")("FantaTabsSlimApp",function(a){a.hide()},function(){b("ifRequired")("FantaTabsReactApp",function(a){a.hide()})})},unhide:function(){b("ifRequired")("FantaTabsSlimApp",function(a){a.unhide()},function(){b("ifRequired")("FantaTabsReactApp",function(a){a.unhide()})})}}}),null);
__d("WorkplaceChatHelper",["ChannelConstants","CurrentUser","PresenceViewerCapabilities"],(function(a,b,c,d,e,f){"use strict";a={isDesktopChatApp:function(){return window.workchat!==void 0},getAppID:function(){return window.workchat.appId},showWindow:function(){window.workchat.showWindow()},getIsSystemDoNotDisturbOn:function(){var a;a=(a=window.workchat)==null?void 0:a.getIsSystemDoNotDisturbOn;return a==null?!1:a()},getScreenSharingSourceID:function(){return window.workchat.getScreenSharingSourceID()},stopScreenSharing:function(){return window.workchat.stopScreenSharing()},suppressChatIfActiveOnDesktop:function(){return b("CurrentUser").isWorkUser()&&(b("PresenceViewerCapabilities").get()&b("ChannelConstants").CAPABILITY_ACTIVE_ON_DESKTOP_APP)==b("ChannelConstants").CAPABILITY_ACTIVE_ON_DESKTOP_APP}};e.exports=a}),null);
__d("FantaTabActions",["Bootloader","CurrentUser","Env","FantaDispatcher","MessengerURIConstants","URI","WebMessengerThreadPermalinks","WorkGalahadSettings","WorkplaceChatHelper","goURI","ifRequired","keyMirror","setTimeout"],(function(a,b,c,d,e,f){"use strict";var g,h,i=b("keyMirror")({BLUR_TAB:null,CLEAR_PAGE_INDICATOR_DESCRIPTION:null,CLOSE_ALL_TABS:null,CLOSE_AND_TAB_NEXT:null,CLOSE_TAB:null,DELETE_TAB:null,FOCUS_NEXT_TAB:null,FOCUS_PREVIOUS_TAB:null,FOCUS_TAB:null,HIGHLIGHT_NEW_MESSAGE:null,HOVERED_TAB:null,JUMP_TO_MESSAGE:null,LOAD_FROM_DATA:null,MINIMIZE_ALL_TABS:null,MINIMIZE_TAB:null,OPEN_TAB_WITH_INTERSTITIAL_DATA:null,OPEN_TAB:null,OPT_IN_OPEN_TAB_WITH_BLOCKEES:null,CLOSE_GROUP_ENTRANCE_WARNING_DIALOG:null,REPLACE_TAB:null,SCROLL_BOTTOM_CHANGED:null,SET_ALLOWED_RAISED_TABS:null,SET_MESSAGE_COUNT:null,SET_PAGE_INDICATOR_DESCRIPTION:null,SET_PERMANENT_URI:null,SHOW_UNSEEN_MESSAGES:null,UNHIGHLIGHT_NEW_MESSAGE:null,UNHOVERED_TAB:null,UNMINIMIZE_TAB:null,WIPE_JUMP_TO_MESSAGE:null,CREATE_NEW_NAMED_GROUP_CHAT:null});function j(a,c){var d=a?new(g||(g=b("URI")))(b("WebMessengerThreadPermalinks").getThreadURIFromServerID(a)):new(g||(g=b("URI")))(b("MessengerURIConstants").COMPOSE_SUBPATH);b("ifRequired")("BusinessURI.brands",function(a){return b("goURI")(a(d))},function(){return b("setTimeout")(function(){k.openTab(a,c)},100)})}var k={Types:i,openNewMessageTab:function(a,b,c){k.openTab(a,b,c,!0)},openTab:function(a,c,d,e,f){var g=this;if((h||(h=b("Env"))).isCQuick){b("Bootloader").loadModules(["BlueCompatRouter"],function(b){b.startChat(a||"")},"FantaTabActions");return}if(b("CurrentUser").isWorkUser()&&b("WorkGalahadSettings").isGalahadEnabled){var k=b("ifRequired")("WorkGalahadChat",function(b){b.openThreadFromThreadID(a);return!0},function(){return!1});if(k)return}b("ifRequired")("FantaTabsEagerBootloader",function(a){return a.bootload()});this.dispatchOrBootloadGetMessages(function(){b("FantaDispatcher").dispatch({type:i.OPEN_TAB,tabID:a,entryPoint:c,defaultText:d,isNewMessageTab:e,defaultPreview:f}),b("ifRequired")("FantaTabsReactApp",function(b){g._tryLoadSlimApp(a,c)},function(){g._tryLoadSlimApp(a,c,function(){return j(a,c)})})})},openInterstitialTab:function(a,c,d){var e=this;this.dispatchOrBootloadGetMessages(function(){b("FantaDispatcher").dispatch({type:i.OPEN_TAB_WITH_INTERSTITIAL_DATA,tabID:a,interstitialData:c,entryPoint:d}),b("ifRequired")("FantaTabsReactApp",function(b){e._tryLoadSlimAppWithInterstitialData(a,c,d)},function(){e._tryLoadSlimAppWithInterstitialData(a,c,d)})})},_tryLoadSlimApp:function(a,c,d){b("ifRequired")("FantaTabsSlimApp",function(d){b("ifRequired")("FantaAppStore",function(){},function(){d.getPumpedUp(function(){b("FantaDispatcher").dispatch({type:i.OPEN_TAB,tabID:a,entryPoint:c})})})},function(){return d&&d(a)})},_tryLoadSlimAppWithInterstitialData:function(a,c,d){b("ifRequired")("FantaTabsSlimApp",function(e){b("ifRequired")("FantaAppStore",function(){},function(){e.getPumpedUp(function(){b("FantaDispatcher").dispatch({type:i.OPEN_TAB_WITH_INTERSTITIAL_DATA,tabID:a,interstitialData:c,entryPoint:d})})})})},replaceTab:function(a,c){b("FantaDispatcher").dispatch({type:i.REPLACE_TAB,tabID:a,newTabID:c})},minimizeTab:function(a){b("FantaDispatcher").dispatch({type:i.MINIMIZE_TAB,tabID:a})},minimizeAllTabs:function(){b("FantaDispatcher").dispatch({type:i.MINIMIZE_ALL_TABS})},unminimizeTab:function(a){b("FantaDispatcher").dispatch({type:i.UNMINIMIZE_TAB,tabID:a})},optInOpenTabWithBlockees:function(a){b("FantaDispatcher").dispatch({type:i.OPT_IN_OPEN_TAB_WITH_BLOCKEES,tabID:a})},closeGroupEntranceWarningDialog:function(a){b("FantaDispatcher").dispatch({type:i.CLOSE_GROUP_ENTRANCE_WARNING_DIALOG,tabID:a})},closeTab:function(a){b("FantaDispatcher").dispatch({type:i.CLOSE_TAB,tabID:a})},closeAllTabs:function(){b("FantaDispatcher").dispatch({type:i.CLOSE_ALL_TABS})},closeAndTabNext:function(a){b("FantaDispatcher").dispatch({type:i.CLOSE_AND_TAB_NEXT,tabID:a})},deleteTab:function(a){b("FantaDispatcher").dispatch({type:i.DELETE_TAB,tabID:a})},focusTab:function(a){b("FantaDispatcher").dispatch({type:i.FOCUS_TAB,tabID:a})},blurTab:function(a){b("FantaDispatcher").dispatch({type:i.BLUR_TAB,tabID:a})},hoveredTab:function(a){b("FantaDispatcher").dispatch({type:i.HOVERED_TAB,tabID:a})},unhoveredTab:function(a){b("FantaDispatcher").dispatch({type:i.UNHOVERED_TAB,tabID:a})},highlightNewMessage:function(a){b("FantaDispatcher").dispatch({type:i.HIGHLIGHT_NEW_MESSAGE,tabId:a})},unhighlightNewMessage:function(a){b("FantaDispatcher").dispatch({type:i.UNHIGHLIGHT_NEW_MESSAGE,tabId:a})},setAllowedRaisedTabs:function(a){b("FantaDispatcher").dispatch({type:i.SET_ALLOWED_RAISED_TABS,allowedRaisedTabs:a})},loadFromData:function(a){if(b("WorkplaceChatHelper").suppressChatIfActiveOnDesktop())return;this.dispatchOrBootloadGetMessages(function(){a&&b("FantaDispatcher").dispatch({type:i.LOAD_FROM_DATA,tabData:a})})},focusNextTab:function(a){b("FantaDispatcher").dispatch({type:i.FOCUS_NEXT_TAB,event:a})},focusPreviousTab:function(a){b("FantaDispatcher").dispatch({type:i.FOCUS_PREVIOUS_TAB,event:a})},scrollBottomChanged:function(a,c,d){b("FantaDispatcher").dispatch({type:i.SCROLL_BOTTOM_CHANGED,isScrolledToBottom:c,tabID:a,showUnseenMessages:d})},jumpToMessage:function(a,c){b("FantaDispatcher").dispatch({type:i.JUMP_TO_MESSAGE,mid:c,tabID:a})},wipeJumpToMessage:function(a){b("FantaDispatcher").dispatch({type:i.WIPE_JUMP_TO_MESSAGE,tabID:a})},setPageIndicatorDescription:function(a,c){b("FantaDispatcher").dispatch({type:i.SET_PAGE_INDICATOR_DESCRIPTION,tabID:a,description:c})},clearPageIndicatorDescription:function(a){b("FantaDispatcher").dispatch({type:i.CLEAR_PAGE_INDICATOR_DESCRIPTION,tabID:a})},showUnseenMessages:function(a){b("FantaDispatcher").dispatch({type:i.SHOW_UNSEEN_MESSAGES,tabID:a})},setPermanentUri:function(a,c){b("FantaDispatcher").dispatch({type:i.SET_PERMANENT_URI,tabID:a,uri:c})},createNewNamedGroupChat:function(a,c){b("FantaDispatcher").dispatch({type:i.CREATE_NEW_NAMED_GROUP_CHAT,tabID:a,tokens:c})},dispatchOrBootloadGetMessages:function(a){b("ifRequired")("FantaReducersGetMessages",function(){a()},function(){b("ifRequired")("FantaAppStore",function(c){b("Bootloader").loadModules(["FantaReducersGetMessages"],function(b){c.addReducers(b),a()},"FantaTabActions")},function(){a()})})}};e.exports=k}),null);
__d("SUIBorderUtils",["CornerEnum","Locale","SideEnum","prop-types"],(function(a,b,c,d,e,f){"use strict";var g=b("CornerEnum").values,h=b("SideEnum").values;c={ALL_CORNERS:g,ALL_SIDES:h,BorderedSidesPropType:(a=b("prop-types")).arrayOf(a.oneOf(h)),RoundedCornersPropType:a.arrayOf(a.oneOf(g)),getBorderRadiusStyles:function(a,c){c=c;if(a===g)return c!=null?{borderRadius:c}:null;a=new Set(a);if(a.size===g.length)return c!=null?{borderRadius:c}:null;c==null&&(c="2px");a={borderTopLeftRadius:a.has("topLeft")?c:"0",borderTopRightRadius:a.has("topRight")?c:"0",borderBottomRightRadius:a.has("bottomRight")?c:"0",borderBottomLeftRadius:a.has("bottomLeft")?c:"0"};return b("Locale").isRTL()?{borderTopLeftRadius:a.borderTopRightRadius,borderTopRightRadius:a.borderTopLeftRadius,borderBottomRightRadius:a.borderBottomLeftRadius,borderBottomLeftRadius:a.borderBottomRightRadius}:a},getBorderWidthStyles:function(a){if(a===h)return null;a=new Set(a);if(a.size===h.length)return null;a={borderTopWidth:a.has("top")?"1px":"0",borderRightWidth:a.has("right")?"1px":"0",borderBottomWidth:a.has("bottom")?"1px":"0",borderLeftWidth:a.has("left")?"1px":"0"};return b("Locale").isRTL()?babelHelpers["extends"]({},a,{borderRightWidth:a.borderLeftWidth,borderLeftWidth:a.borderRightWidth}):a}};e.exports=c}),null);
__d("SUIButtonContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext({isFixedWidthPadded:void 0});e.exports=c}),null);
__d("SUIGlyphIcon.react",["Image.react","React","prop-types"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.active,d=a.disabled,e=a.focused,f=a.hover,h=a.srcActive,i=a.srcDefault,j=a.srcDisabled,k=a.srcFocused,l=a.srcHover;a=babelHelpers.objectWithoutPropertiesLoose(a,["active","disabled","focused","hover","srcActive","srcDefault","srcDisabled","srcFocused","srcHover"]);i=i;d===!0&&j!=null&&j!==""?i=j:c===!0&&h!=null&&h!==""?i=h:e===!0&&k!=null&&k!==""?i=k:f===!0&&l!=null&&l!==""&&(i=l);return g.jsx(b("Image.react"),babelHelpers["extends"]({},a,{src:i}))}d=(c=b("prop-types")).oneOfType([c.object,c.string]);a.propTypes={active:c.bool,disabled:c.bool,hover:c.bool,srcActive:d,srcDefault:d.isRequired,srcDisabled:d,srcHover:d};e.exports=a}),null);
__d("BadgeHelper",["cx","fbt","DOM","joinClasses"],(function(a,b,c,d,e,f,g,h){var i={xsmall:"_5dzz",small:"_5dz-",medium:"_5dz_",large:"_5d-0",xlarge:"_5d-1"},j={bot:"_64nf",verified:"_56_f",trending:"_1gop",topcommenter:"_59t2",page_gray_check:"_5n3t",page_gray_check_solid:"_6w81",work:"_5d62",game_blue:"_59c6",work_non_coworker:"_2ad7",work_official_badge:"_8b0y",work_official_badge_gray:"_8b-m",interest_community:"_3qcr",subscription:"_4fvy",inactive_user:"_7xv0"};c=h._("Grup Resmi");var k={bot:h._("Bot"),work_non_coworker:h._("Bukan bagian dari perusahaan Anda"),work_official_badge:c,work_official_badge_gray:c};function l(a,c){return b("joinClasses")(i[a],j[c],"_5dzy")}function m(a){return k[a]}function a(a,c){a=l(a,c);if(a){c=m(c);return b("DOM").create("span",{className:a},c?b("DOM").create("span",{className:"accessible_elem"},c):null)}}e.exports={getClasses:l,getAlt:m,renderBadge:a,sizes:Object.keys(i),types:Object.keys(j)}}),null);
__d("Badge.react",["BadgeHelper","React","prop-types"],(function(a,b,c,d,e,f){var g=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("BadgeHelper").getAlt(this.props.type);a=a?g.jsx("span",{className:"accessible_elem",children:a}):null;return g.jsx("span",{className:b("BadgeHelper").getClasses(this.props.size,this.props.type),children:a})};return c}(g.Component);a.propTypes={size:b("prop-types").oneOf(b("BadgeHelper").sizes),type:b("prop-types").oneOf(b("BadgeHelper").types)};a.defaultProps={size:"xsmall",type:"verified"};e.exports=a}),null);
__d("ImageBlock.react",["cx","invariant","LeftRight.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){var i=b("React");function j(a){a=a.children;a&&(a.length===2||a.length===3)||h(0,97);a[0]!==null||h(0,98);return a}function k(a){return"img _8o"+(a==="small"?" _8r":"")+(a==="medium"?" _8s":"")+(a==="large"?" _8t":"")}a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=j(this.props),c=a[0],d=a[1];a=a[2];var e=this.props,f=e.imageClassName,g=e.contentClassName,h=e.spacing;e=babelHelpers.objectWithoutPropertiesLoose(e,["imageClassName","contentClassName","spacing"]);var l=c.props,m=l.className,n=l.alt,o=l.tabIndex;l=l.title;m={className:b("joinClasses")(m,k(h),f)};c.type==="img"?n===void 0&&(m.alt=""):(c.type==="a"||c.type==="link")&&o===void 0&&l===void 0&&c.props["aria-label"]===void 0&&(m.tabIndex="-1",m["aria-hidden"]="true");c=i.cloneElement(c,m);f=!0;this.props.flexibleContent!=null&&(f=this.props.flexibleContent);n=b("joinClasses")(g,(f?"_42ef":"")+(h==="small"?" _8u":""));!a?o=i.jsx("div",{className:n,children:d}):o=i.jsxs(b("LeftRight.react"),{className:n,direction:b("LeftRight.react").DIRECTION.right,children:[d,a]});return i.jsxs(b("LeftRight.react"),babelHelpers["extends"]({},e,{direction:b("LeftRight.react").DIRECTION.left,children:[c,o]}))};return c}(i.Component);a.defaultProps={spacing:"small"};e.exports=a}),null);
__d("SimpleFBAuthenticatedXHRRequest",["invariant","CurrentUser","DTSG","DTSGUtils","ServerJSDefine","SprinkleConfig","StaticSiteData","XHRRequest","isFacebookURI"],(function(a,b,c,d,e,f,g){var h=1;a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){var e;c=a.call(this,c)||this;e=(e={},e[b("StaticSiteData").jsmod_key]=b("ServerJSDefine").getLoadedModuleHash(),e.__req=(h++).toString(36),e.__a=1,e.__user=b("CurrentUser").getID(),e);a.prototype.setData.call(babelHelpers.assertThisInitialized(c),babelHelpers["extends"]({},d,e));return c}var d=c.prototype;d.send=function(){var c=this;if(!b("isFacebookURI")(this.getURI()))return a.prototype.send.call(this);if(b("DTSG").getCachedToken){var d=b("DTSG").getCachedToken();if(d)return this.sendOnDTSGToken(d);else{b("DTSG").getToken().done(function(a){return c.sendOnDTSGToken(a)});return this}}else this.sendOnDTSGToken(b("DTSG").getToken())};d.sendOnDTSGToken=function(c){if(c){a.prototype.setData.call(this,babelHelpers["extends"]({},this.getData(),{fb_dtsg:c}));if(b("SprinkleConfig").param_name){var d;a.prototype.setData.call(this,babelHelpers["extends"]({},this.getData(),(d={},d[b("SprinkleConfig").param_name]=b("DTSGUtils").getNumericValue(c),d)))}}return a.prototype.send.call(this)};d.setData=function(a){g(0,5518)};c.parseResponse=function(a){return JSON.parse(a.substr(9))};c.getPayload=function(a){a=c.parseResponse(a).payload;return a.payload?a.payload:a};return c}(b("XHRRequest"));e.exports=a}),null);
__d("XFantailLogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/fantail/",{service:{type:"String",required:!0}})}),null);
__d("FantailLogQueue",["ChannelClientID","CircularBuffer","PHPQuerySerializer","SimpleFBAuthenticatedXHRRequest","XFantailLogController","destroyOnUnload","setIntervalAcrossTransitions","sprintf"],(function(a,b,c,d,e,f){var g,h={DEBUG:"debug",INFO:"info",WARN:"warn",ERROR:"error"};a=function(){"use strict";function a(a){this.$2=a,this.$3=new(b("CircularBuffer"))(200),b("setIntervalAcrossTransitions")(this.$4.bind(this),30*1e3),b("destroyOnUnload")(this.$4.bind(this))}a.get=function(b){a.$1=a.$1||{};a.$1[b]=a.$1[b]||new a(b);return a.$1[b]};var c=a.prototype;c.debug=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[h.DEBUG,a].concat(c))};c.info=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[h.INFO,a].concat(c))};c.warn=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[h.WARN,a].concat(c))};c.error=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[h.ERROR,a].concat(c))};c.$5=function(a,c){for(var d=arguments.length,e=new Array(d>2?d-2:0),f=2;f<d;f++)e[f-2]=arguments[f];var g=b("sprintf").apply(void 0,[c].concat(e));this.$3.write({log_time:Date.now(),log:g,severity:a,device_id:b("ChannelClientID").getID()})};c.$4=function(){var a=this.$3.read();if(a.length>0){var c={log_time:[],log:[],severity:[],device_id:[]};a.forEach(function(a){c.log_time.push(a.log_time),c.log.push(a.log),c.severity.push(a.severity),c.device_id.push(a.device_id)});this.$3.clear();a=b("XFantailLogController").getURIBuilder().setString("service",this.$2).getURI();new(b("SimpleFBAuthenticatedXHRRequest"))(a,c).setMethod("POST").setDataSerializer((g||(g=b("PHPQuerySerializer"))).serialize).setRequestHeader("Content-Type","application/x-www-form-urlencoded").send()}};return a}();e.exports=a}),null);
__d("FBStoriesLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";a={EVENT_STORY:"event",FOLLOWEE_STORY:"followee",FRIEND_STORY:"friend",GROUP_STORY:"group",MISSING_STORY_DATA:"missingStoryData",PAGE_STORY:"page",SELF_STORY:"self",STORY_PROMOTION:"promotion",ACTION_OPEN_MEDIA:"open_media",ACTION_DELETE_MEDIA:"delete_media_attempted",ACTION_SEND_REPLY_ATTEMPT:"attempt_to_send_reply",ACTION_SEND_REACTION_STICKER_INTERACTED:"reaction_sticker_interacted",ACTION_OPEN_SEEN_SUMMARY:"open_seen_summary",ACTION_OPEN_STORY:"open_story",ACTION_CLOSE_STORY:"close_story",ACTION_TRAY_LOAD:"story_tray_load",ACTION_SEND_STORY_FAILED:"send_story_failed",ACTION_SEND_STORY_SUCCEEDED:"send_story_succeed",ACTION_REPLY_ATTEMPT_COMPLETED:"reply_attempt_completed",ACTION_STORY_NAVIGATION:"story_navigation",INTERACTION_TAP_RESHARED_STORY:"reshared_story_tap",INTERACTION_TAP_RESHARED_TOOLTIP:"reshared_story_view_story_tap",GESTURES:{CLOSE_STORY:{CLICK_RIGHT:"click_right",CLICK_LEFT:"click_left",AUTO_JUMP:"auto_jump",AUTO_EXIT:"auto_exit",CLICK_EXIT:"click_exit",SWIPE_RIGHT:"swipe_right",SWIPE_LEFT:"swipe_left",SWIPE_EXIT:"swipe_exit",SWIPE_DOWN_EXIT:"swipe_down_exit",CLOSE_BUTTON_EXIT:"close_button_exit",BACK_BUTTON_EXIT:"back_button_exit"}},SOURCE_CLOSE_FROM_MODAL:"closeFromClickingOnModal",SOURCE_CLOSE_FROM_MODAL_CLOSE_BUTTON:"closeFromClickingOnModalCloseButton",SOURCE_CLOSE_FROM_LAST_STORY_FINISHING:"closeFromLastStoryFinishing",SOURCES:{ARCHIVE:"archive",POST_HEADER:"post_header_actor_photo",STORY_TRAY:"story_tray",IN_FEED:"in_feed",UNKNOWN:"unknown"}};e.exports=a}),null);
__d("formatNumber",["fbt","intlNumUtils"],(function(a,b,c,d,e,f,g){"use strict";function a(a,c){return b("intlNumUtils").formatNumber(a,c)}function h(a,c){c=g._({"*":"{number}+"},[g._param("number",b("intlNumUtils").formatNumberWithThousandDelimiters(a,c),[0,a])]);return c.toString()}function i(a,c){c=g._({"*":"\u003C{number}"},[g._param("number",b("intlNumUtils").formatNumberWithThousandDelimiters(a,c),[0,a])]);return c.toString()}function c(a,c,d){return a>c?h(c,d):b("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}function d(a,c,d){return a<c?i(c,d):b("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}a.withThousandDelimiters=b("intlNumUtils").formatNumberWithThousandDelimiters;a.withMaxLimit=c;a.withMinLimit=d;e.exports=a}),null);
__d("ServerHTML.react",["React"],(function(a,b,c,d,e,f){var g=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){var a=this.props,b=a.blob;a=babelHelpers.objectWithoutPropertiesLoose(a,["blob"]);return typeof b==="string"?g.jsx("div",babelHelpers["extends"]({},a,{children:b})):g.jsx("div",babelHelpers["extends"]({},a,{dangerouslySetInnerHTML:b}))};return b}(g.Component);e.exports=a}),null);
__d("ScrollBoundaryContain",["Event","Scroll","UserAgent"],(function(a,b,c,d,e,f){var g=function(a,c){c.deliberateSync=!0;if(c.axis!==void 0&&c.axis===c.HORIZONTAL_AXIS||c.wheelDeltaX&&!c.wheelDeltaY||c.deltaX&&!c.deltaY)return;var d=c.wheelDelta||-c.deltaY||-c.detail,e=a.scrollHeight,f=a.clientHeight;if(e>f){c.stopPropagation();a=b("Scroll").getTop(a);(d>0&&a===0||d<0&&a>=e-f-1)&&c.preventDefault()}},h=void 0,i=function(){if(h)return h;h=b("UserAgent").isBrowser("Firefox")?"WheelEvent"in window?"wheel":"DOMMouseScroll":"mousewheel";return h},j=function(a){var c=g.bind(null,a),d=i(),e,f=b("Event").listen(a,"mouseenter",function(){e==null&&(e=b("Event").listen(a,d,c))}),h=b("Event").listen(a,"mouseleave",function(){e&&(e.remove(),e=null)}),j=!1;return{remove:function(){if(j)return;e&&(e.remove(),e=null);f.remove();h.remove();j=!0}}},k=function(a){a.deliberateSync=!0,this.scrollHeight>this.clientHeight&&a.stopPropagation()},l=function(a){var c=b("Event").listen(a,i(),k,null,{passive:!0}),d=!1;return{remove:function(){if(d)return;c.remove();d=!0}}};a={applyToElem:function(a){if("overscrollBehavior"in a.style){a.style.overscrollBehavior="contain";return l(a)}else{a.style.msScrollChaining!==void 0&&(a.style.msScrollChaining="none");return j(a)}}};e.exports=a}),null);
__d("getByPath",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){a=a;for(var d=0;d<b.length;d++){var e=b[d];if(a&&typeof a!=="string"&&typeof a!=="number"&&e in a)a=a[e];else return c}return a}e.exports=a}),null);