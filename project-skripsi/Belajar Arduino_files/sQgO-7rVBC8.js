if (self.CavalryLogger) { CavalryLogger.start_js(["qB2iq"]); }

__d("CookieConsentBlacklistedHrefs",[],(function(a,b,c,d,e,f){e.exports={hrefs:["/about/basics","/privacy/explanation","/ads/settings","/help/111814505650678","/help/1561485474074139","/help/568137493302217","/help/769828729705201","/help/cookies","/policies/cookies","/policy/cookies"]}}),null);
__d("PixelRatioConst",[],(function(a,b,c,d,e,f){e.exports={cookieName:"dpr"}}),null);
__d("DesktopHscrollUnitEventConstants",[],(function(a,b,c,d,e,f){e.exports={HSCROLL_ITEM_INSERTED_EVENT:"DesktopHScrollUnit/itemInserted",HSCROLL_ITEM_SHOWN_EVENT:"DesktopHScrollUnit/itemShown",HSCROLL_ITEM_HIDE_EVENT:"DesktopHScrollUnit/HideIndividualItem",HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT:"DesktopHScrollUnit/scrollItemBeforeXout",HSCROLL_ITEM_UNHIDE_EVENT:"DesktopHScrollUnit/unhideIndividualItem",HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN:"logLastAdXout",HSCROLL_PAGER_ITEM_HIDE_EVENT:"onXoutIndividualItem"}}),null);
__d("routeBuilderUtils",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.split("/");return a.filter(function(a){return a!==""}).map(function(a){var b=a.split(/{|}/);if(b.length<3)return{isToken:!1,part:a};else{a=b[0];var c=b[1];b=b[2];var d=c[0]==="?",e=c[d?1:0]==="*";c=c.substring((d?1:0)+(e?1:0));return{isToken:!0,optional:d,prefix:a,suffix:b,token:c}}})}e.exports={getPathParts:a}}),null);
__d("cometRouteBuilder",["ConstUriUtils","FBLogger","routeBuilderUtils"],(function(a,b,c,d,e,f){"use strict";var g=b("routeBuilderUtils").getPathParts;function a(a,c,d,e){var f=g(a);function h(g){var h=e!=null?babelHelpers["extends"]({},e,g):g,i={};g="";var j=!1;g=f.reduce(function(a,b){if(!b.isToken)return a+"/"+b.part;else{var d,e=b.optional,f=b.prefix,g=b.suffix;b=b.token;if(e&&j)return a;d=(d=h[b])!=null?d:c[b];if(d==null&&e){j=!0;return a}if(d==null)throw new Error("Missing required template parameter: "+b);if(d==="")throw new Error("Required template parameter is an empty string: "+b);i[b]=!0;return a+"/"+f+d+g}},"");a.slice(-1)==="/"&&(g+="/");g===""&&(g="/");var k=b("ConstUriUtils").getUri(g);for(var l in h){var m=h[l];!i[l]&&m!=null&&k!=null&&(d!=null&&d.has(l)?m!==!1&&(k=k.addQueryParam(l,null)):k=k.addQueryParam(l,m))}return k==null?g:k.toString()}return{buildURL:function(c){try{return h(c)}catch(c){b("FBLogger")("CometRouteBuilder").catching(c).mustfix("Failed building URL for base path: %s",a);return"#"}}}}e.exports=a}),null);
__d("EventListenerImplForCacheStorage",["requireCond","cr:1351741"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1351741")}),null);
__d("LoggedOutSwitchingLocaleTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setIndex=function(a){this.$1.index=a;return this};c.setNewLocale=function(a){this.$1.new_locale=a;return this};c.setOldLocale=function(a){this.$1.old_locale=a;return this};c.setReferrer=function(a){this.$1.referrer=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={index:!0,new_locale:!0,old_locale:!0,referrer:!0,time:!0,weight:!0};e.exports=a}),null);
__d("XIntlAccountSetLocaleAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/intl/ajax/save_locale/",{loc:{type:"String"},href:{type:"String"},index:{type:"Int"},ref:{type:"String"},ls_ref:{type:"Enum",defaultValue:"unknown",enumType:1},should_redirect:{type:"Bool",defaultValue:!0}})}),null);
__d("IntlUtils",["invariant","AsyncRequest","Cookie","LoggedOutSwitchingLocaleTypedLogger","ReloadPage","XIntlAccountSetLocaleAsyncController","goURI"],(function(a,b,c,d,e,f,g){a={setXmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({xmode:a}).setHandler(function(){b("ReloadPage").now()}).send()},encodeSpecialCharsForXController:function(a){return a.replace(new RegExp("\xa0","g"),"&nbsp;")},decodeSpecialCharsFromXController:function(a){return a.replace(new RegExp("&nbsp;","g"),"\xa0")},setAmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({amode:a,app:!1}).setHandler(function(){b("ReloadPage").now()}).send()},setRmode:function(a){new(b("AsyncRequest"))().setURI("/ajax/intl/save_xmode.php").setData({rmode:a}).setHandler(function(){b("ReloadPage").now()}).send()},setLocale:function(a,c,d,e){e=d;e||(a!=null||g(0,19476),e=a.options[a.selectedIndex].value);d=b("XIntlAccountSetLocaleAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(d).setData({loc:e,ref:c,should_redirect:!1}).setHandler(function(a){b("ReloadPage").now()}).send()},appendCookieLocaleHistory:function(a){var c="lh",d=b("Cookie").get(c),e=[],f=5;if(d!==null&&d!==void 0&&d!=""){e=d.split(",");e.push(a);for(var d=0;d<e.length-1;d++)e[d]==e[d+1]&&e.splice(d,1);e.length>=f&&e.slice(1,f)}else e.push(a);b("Cookie").set(c,e.toString())},setCookieLocale:function(a,c,d,e,f){e===void 0&&(e="unknown"),f===void 0&&(f=null),b("Cookie").setWithoutCheckingUserConsent_DANGEROUS("locale",a),this.appendCookieLocaleHistory(a),new(b("LoggedOutSwitchingLocaleTypedLogger"))().setNewLocale(a).setOldLocale(c).setIndex(f).setReferrer(e).log(),b("goURI")(d)}};e.exports=a}),null);
__d("legacy:intl-base",["IntlUtils"],(function(a,b,c,d,e,f){a.intl_set_xmode=(c=b("IntlUtils")).setXmode;a.intl_set_amode=c.setAmode;a.intl_set_rmode=c.setRmode;a.intl_set_locale=c.setLocale}),3);
__d("legacy:onload-action",["PageHooks"],(function(a,b,c,d,e,f){a._domreadyHook=(c=b("PageHooks"))._domreadyHook;a._onloadHook=c._onloadHook;a.runHook=c.runHook;a.runHooks=c.runHooks;a.keep_window_set_as_loaded=c.keepWindowSetAsLoaded}),3);
__d("FlipDirection",["DOM","Input","Style"],(function(a,b,c,d,e,f){a={setDirection:function(a,c,d){c===void 0&&(c=5);d===void 0&&(d=!1);var e=b("DOM").isNodeOfType(a,"input")&&a.type=="text",f=b("DOM").isNodeOfType(a,"textarea");if(!(e||f)||a.getAttribute("data-prevent-auto-flip"))return;e=b("Input").getValue(a);f=a.style&&a.style.direction;if(!f||d){f=0;d=!0;for(var g=0;g<e.length;g++){var h=e.charCodeAt(g);if(h>=48){d&&(d=!1,f++);if(h>=1470&&h<=1920){b("Style").set(a,"direction","rtl");a.setAttribute("dir","rtl");return}if(f==c){b("Style").set(a,"direction","ltr");a.setAttribute("dir","ltr");return}}else d=!0}}else e.length===0&&(b("Style").set(a,"direction",""),a.removeAttribute("dir"))}};e.exports=a}),null);
__d("FlipDirectionOnKeypress",["Event","FlipDirection"],(function(a,b,c,d,e,f){a=function(a){a=a.getTarget();b("FlipDirection").setDirection(a)};b("Event").listen(document.documentElement,{keyup:a,input:a})}),null);
__d("LitestandMessages",[],(function(a,b,c,d,e,f){a=Object.freeze({NEWSFEED_LOAD:"LitestandMessages/NewsFeedLoad",LEAVE_HOME:"LitestandMessages/LeaveHome",STORIES_REQUESTED:"LitestandMessages/StoriesRequested",STORIES_INSERTED:"LitestandMessages/StoriesInserted",NEWER_STORIES_REQUESTED:"LitestandMessages/NewerStoriesRequested",NEWER_STORIES_INSERTED:"LitestandMessages/NewerStoriesInserted",NEW_STORIES_CONTAINER_CREATED:"LitestandMessages/NewStoriesContainer",RHC_RELOADED:"LitestandMessages/RHCReloaded",STREAM_LOAD_ERROR:"LitestandMessages/StreamLoadError",DUPLICATE_CURSOR_ERROR:"LitestandMessages/DuplicateCursorError",STREAM_LOAD_RETRY:"LitestandMessages/StreamLoadRetry"});e.exports=a}),null);
__d("Nectar",["Env","getContextualParent"],(function(a,b,c,d,e,f){var g;function h(a){a.nctr||(a.nctr={})}function i(a){if((g||(g=b("Env"))).module||!a)return(g||(g=b("Env"))).module;var c={fbpage_fan_confirm:!0,photos_snowlift:!0},d;while(a&&a.getAttribute){var e=a.getAttribute("id");if(e!=null&&e.startsWith("pagelet_"))return e;!d&&c[e]&&(d=e);a=b("getContextualParent")(a)}return d}a={addModuleData:function(a,b){b=i(b);b&&(h(a),a.nctr._mod=b)},addImpressionID:function(a){(g||(g=b("Env"))).impid&&(h(a),a.nctr._impid=(g||(g=b("Env"))).impid)}};e.exports=a}),null);
__d("isAdsExcelAddinURI",[],(function(a,b,c,d,e,f){var g=new RegExp("(^|\\.)fbaddins\\.com$","i"),h=["https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.indexOf(a.getProtocol())!==-1&&g.test(a.getDomain())}e.exports=a}),null);
__d("isValidAsyncSignalURI",[],(function(a,b,c,d,e,f){var g=new RegExp("((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)","i"),h=["https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.includes(a.getProtocol())&&g.test(a.getDomain())}e.exports=a}),null);
__d("AsyncSignal",["Promise","ErrorGuard","QueryString","Run","TimeSlice","TrackingConfig","URI","ZeroRewrites","getAsyncParams","isAdsExcelAddinURI","isFacebookURI","isMessengerDotComURI","isValidAsyncSignalURI","isWorkplaceDotComURI","memoize","promiseDone"],(function(a,b,c,d,e,f){var g,h,i;function a(a,c){this.data=c||{},this.uri=a.toString(),b("TrackingConfig").domain&&this.uri.charAt(0)=="/"&&(this.uri=b("TrackingConfig").domain+this.uri)}a.prototype.setHandler=function(a){this.handler=a;return this};a.prototype.setTimeout=function(a){this.timeout=a;return this};a.prototype.send=function(){b("TimeSlice").guard(this._send.bind(this),"AsyncSignal send",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()};a.prototype._send=function(){var a=this.handler,c=this.data;c.asyncSignal=(Math.random()*1e4|0)+1;var d=b("ZeroRewrites").rewriteURI(new(g||(g=b("URI")))(this.uri));d=b("isFacebookURI")(d)||b("isMessengerDotComURI")(d)||b("isAdsExcelAddinURI")(d)||b("isWorkplaceDotComURI")(d)||b("isValidAsyncSignalURI")(d);if(d)Object.assign(c,b("getAsyncParams")("POST"));else throw new Error("'"+this.uri+"' is an external URL, you should not send async signals to offsite links.");var e=b("QueryString").appendToUrl(this.uri,c);i||(i=new(b("Promise"))(function(a){b("Run").onAfterLoad(a)}));d=i.then(function(){return new(b("Promise"))(function(a,b){var c=new Image();c.onload=a;c.onerror=c.onabort=b;c.src=e})});if(a){var f=!1,j=b("memoize")(function(){(h||(h=b("ErrorGuard"))).applyWithGuard(a,null,[f])});b("promiseDone")(d.then(function(){f=!0,j()},j));this.timeout&&setTimeout(j,this.timeout)}return this};e.exports=a}),null);
__d("DOMTraverser",["DOM"],(function(a,b,c,d,e,f){var g={previousNode:function(a){if(a.previousElementSibling){var b=a.previousElementSibling;while(b.lastElementChild!==null)b=b.lastElementChild;return b}return a.parentElement},nextNode:function(a){if(a.firstElementChild)return a.firstElementChild;if(a.nextElementSibling)return a.nextElementSibling;a=a.parentElement;while(a!=null){if(a.nextElementSibling)return a.nextElementSibling;a=a.parentElement}return null},previousFilteredNode:function(a,b,c){if(b===a)return null;b=g.previousNode(b);while(b!=null){if(b instanceof HTMLElement&&c(b))return b;if(b===a)return null;b=g.previousNode(b)}return null},nextFilteredNode:function(a,c,d){c=g.nextNode(c);while(c!=null){if(a&&!b("DOM").contains(a,c))return null;if(c instanceof HTMLElement&&d(c))return c;c=g.nextNode(c)}return null}};e.exports=g}),null);
__d("PageTransitions",["requireCond","cr:917439"],(function(a,b,c,d,e,f){e.exports=b("cr:917439")}),null);
__d("WebPixelRatio",["SiteData"],(function(a,b,c,d,e,f){a={get:function(){return b("SiteData").pr!=null&&b("SiteData").pr>0?b("SiteData").pr:window.devicePixelRatio||1}};e.exports=a}),null);
__d("WebPixelRatioDetector",["Cookie","DOMEventListener","PixelRatioConst","Run"],(function(a,b,c,d,e,f){"use strict";var g=b("PixelRatioConst").cookieName,h=!1,i=!1,j=!1;function k(){return window.devicePixelRatio||1}function l(){b("Cookie").set(g,String(k()))}function m(){b("Cookie").clear(g)}function n(){if(i)return;i=!0;j&&m();k()!==1?l():m()}a={startDetecting:function(a){a&&(j=!0);if(h)return;h=!0;"onpagehide"in window&&b("DOMEventListener").add(window,"pagehide",n);b("Run").onBeforeUnload(n,!1)}};e.exports=a}),null);
__d("tidyEvent",["Run"],(function(a,b,c,d,e,f){var g=[];function h(){while(g.length){var a=g.shift();a.remove?a.remove():a.unsubscribe&&a.unsubscribe()}}function i(a){var b,c=a;function d(){if(!b)return;b.apply(c,arguments);b=null;c=null}if(c&&c.remove)b=c.remove,c.remove=d;else{b=(a=c)==null?void 0:a.unsubscribe;c.unsubscribe=d}return c}function a(a){g.length||b("Run").onLeave(h);if(Array.isArray(a))for(var c=0;c<a.length;c++)a[c]&&g.push(i(a[c]));else a&&g.push(i(a));return a}e.exports=a}),null);
__d("ReactComposerEvents",[],(function(a,b,c,d,e,f){a=Object.freeze({CHANGE:"change",INSTANCE_MOUNTED:"composer/instanceMounted/",ACTIVATE_ATTACHMENT:"composer/activateAttachment/",MENTION_INPUT_FOCUS:"composer/mentionInputFocused/",TEXT_PREFILL_BEFORE_BOOTLOAD:"composer/textPrefillBeforeBootload/",RERENDER_MENTION_INPUT:"reactComposer/rerenderMentionInput/",OPTIMISTIC_POSTING_STARTED:"composer/optimisticPostingStarted/",POST_FINALLY:"composer/postFinally/",POST_FAILED:"composer/postFailed/",POST_STARTED:"composer/postStarted/",OPTIMISTIC_POST_STARTED:"composer/optimisticPostStarted/",POST_SUCCEEDED:"composer/postSucceeded/",COMPOSER_RESET:"composer/reset/",COMPOSER_UNMOUNT:"composer/unmount/",SET_PREFILL_DATA:"reactComposer/setPrefillData/",RICH_TEXT_EDITOR_MOUNTED:"reactComposer/richTextEditorMounted/",SAVE_STARTED:"composer/saveStarted/",HIGHLIGHT_TOP_COMPOSER:"reactComposer/highlightTopComposer"});e.exports=a}),null);
__d("ReactComposerConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ID_PREFIX:"rc.",GK_VIDEO_COPYRIGHT:"video_copyright_confirmation_dialog",GK_MULTILINGUAL_COMPOSER:"multilingual_composer_www",GK_PAGE_BREAKING_COMPOSER:"breaking_news_page"})}),null);
__d("ReactComposerIDGenerator",["ReactComposerConstants","uniqueID"],(function(a,b,c,d,e,f){"use strict";a={getID:function(){return b("ReactComposerConstants").ID_PREFIX+b("uniqueID")()},isComposerID:function(a){return!!a&&a.startsWith(b("ReactComposerConstants").ID_PREFIX)}};e.exports=a}),null);
__d("UITinyViewportAction",["Arbiter","ArbiterMixin","CSS","Event","FullScreen","getDocumentScrollElement","queryThenMutateDOM","throttle"],(function(a,b,c,d,e,f){var g=document.documentElement,h,i,j,k,l=!1,m=!1,n=!1,o={init:function(a){a=b("throttle")(function(){if(b("FullScreen").isFullScreen())return;b("queryThenMutateDOM")(function(){k=k||b("getDocumentScrollElement")(),i=g.clientWidth<k.scrollWidth-1,j=g.clientHeight<400,h=j||i},function(){if(h!==l||i!==m||j!==n){var a;(a=b("CSS")).conditionClass(g,"tinyViewport",h);a.conditionClass(g,"tinyWidth",i);a.conditionClass(g,"tinyHeight",j);a.conditionClass(g,"canHaveFixedElements",!h);o.inform("change",h);b("Arbiter").inform("tinyViewport/change",{tiny:h,tinyWidth:i,tinyHeight:j},"state");l=h;m=i;n=j}},"TinyViewport")});a();b("Arbiter").subscribe("quickling/response",a);b("Event").listen(window,"resize",a);b("FullScreen").subscribe("changed",a)},isTiny:function(){return h},isTinyWidth:function(){return i},isTinyHeight:function(){return j}};Object.assign(o,b("ArbiterMixin"));e.exports=o}),null);
__d("ContextualLayerUpdateOnScroll",["Event"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscriptions=[this._layer.subscribe("show",this._attachScrollListener.bind(this)),this._layer.subscribe("hide",this._removeScrollListener.bind(this))]};c.disable=function(){while(this._subscriptions.length)this._subscriptions.pop().unsubscribe()};c._attachScrollListener=function(){var a=this,c=this._layer.getContextScrollParent(),d=this._layer.getInsertScrollParent();if(this._listener!=null||c===d)return;this._listener=b("Event").listen(c,"scroll",function(){a._layer.updatePosition()})};c._removeScrollListener=function(){this._listener&&this._listener.remove(),this._listener=null};return a}();Object.assign(a.prototype,{_subscriptions:[]});e.exports=a}),null);
__d("LayerRemoveOnHide",["DOM"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("hide",b("DOM").remove.bind(null,this._layer.getRoot()))};c.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("ContextualDialogXUITheme",["cx"],(function(a,b,c,d,e,f,g){a={wrapperClassName:"_53ii",arrowDimensions:{offset:12,length:16}};e.exports=a}),null);
__d("VideoPlayerRegistry",["regeneratorRuntime","Promise","EventEmitter"],(function(a,b,c,d,e,f){var g=new Set(),h=new(b("EventEmitter"))(),i={ADDED:"added",REMOVED:"removed",addListener:function(a,b){return h.addListener(a,b)},once:function(a,b){return h.once(a,b)},has:function(a){return g.has(a)},add:function(a){if(i.has(a))return!1;g.add(a);h.emit(i.ADDED,a);return!0},remove:function(a){if(!i.has(a))return!1;g["delete"](a);h.emit(i.REMOVED,a);return!0},count:function(){return g.size},getList:function(){return Array.from(g)},getByRootNode:function(a){var c=this,d;return b("regeneratorRuntime").async(function(e){while(1)switch(e.prev=e.next){case 0:d=null;this.getList().forEach(function(b){b.getByRootNode()===a&&(d=b)});if(d){e.next=6;break}e.next=5;return b("regeneratorRuntime").awrap(new(b("Promise"))(function(b,d){var e=c.addListener(i.ADDED,function(c){c.getRootNode()===a&&(e.remove(),b(c))})}));case 5:d=e.sent;case 6:return e.abrupt("return",d);case 7:case"end":return e.stop()}},null,this)}};e.exports=i}),null);
__d("VideoConfig",[],(function(a,b,c,d,e,f){function a(a){Object.assign(this,a)}e.exports=a}),null);
__d("CookieConsentBlacklist",["CookieConsentBlacklistedHrefs","Parent"],(function(a,b,c,d,e,f){"use strict";a={isBlacklisted:function(a){a=a;if(!this.hasCookieBanner())return!0;var c=b("Parent").byAttribute(a,"data-cookiebanner");if(c){c=c.getAttribute("data-cookiebanner");switch(c){case"close_button":return!1;case"banner":return!0}}c=b("Parent").byAttribute(a,"data-nocookies");if(c)return!0;a.tagName.toLowerCase()!=="a"&&(a=b("Parent").byTag(a,"a"));if(a instanceof HTMLAnchorElement&&typeof a.href==="string"){c=a.href;for(var a=0;a<this.blacklistedHrefs.length;a++)if(c.indexOf(this.blacklistedHrefs[a])>-1)return!0}return!1},blacklistedHrefs:b("CookieConsentBlacklistedHrefs").hrefs,hasCookieBanner:function(){var a=document.querySelectorAll('[data-cookiebanner="banner"]');return a.length>0}};e.exports=a}),null);
__d("XConsentCookieController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/cookie/consent/",{})}),null);
__d("DeferredCookie",["requireCond","Cookie","CookieConsent","cr:1109759","SubscriptionList","cr:1083116","XConsentCookieController","cr:1069930","promiseDone","cr:1083117"],(function(a,b,c,d,e,f){"use strict";var g,h=new Map();a={shouldAddDefaultListener:!0,defaultHandler:null,sentConsentToServer:!1,callbacks:new(b("SubscriptionList"))(),addToQueue:function(a,c,d,e,f,i,j){if(!(g||(g=b("CookieConsent"))).isDeferCookies()){f?b("Cookie").setWithoutChecksIfFirstPartyContext(a,c,d,e,j):b("Cookie").setWithoutChecks(a,c,d,e,j);return}if(h.has(a))return;h.set(a,{name:a,value:c,nMilliSecs:d,path:e,firstPartyOnly:f,secure:j});i&&this.addDefaultInteractionListener()},flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing:function(){h.forEach(function(a,c){a.firstPartyOnly?b("Cookie").setWithoutChecksIfFirstPartyContext(a.name,a.value,a.nMilliSecs,a.path,a.secure):b("Cookie").setWithoutChecks(a.name,a.value,a.nMilliSecs,a.path,a.secure)}),(g||(g=b("CookieConsent"))).setConsented(),this.callbacks.fireCallbacks(),h=new Map(),this.removeDefaultInteractionListener()},flushAllCookies:function(){this.flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing();if(!this.sentConsentToServer){var a=b("XConsentCookieController").getURIBuilder().getURI();this.sentConsentToServer=!0;b("cr:1069930")!=null?b("promiseDone")(b("cr:1069930")(a.toString(),{data:{},method:"POST"}),null,function(a){b("cr:1083117")&&b("cr:1083117")("Cookie consent has not been set successfully: "+a.errorMsg,"comet_infra")}):b("cr:1083116")!=null&&new(b("cr:1083116"))(a).send()}},removeDefaultInteractionListener:function(){this.shouldAddDefaultListener=!1,this.defaultHandler&&(window.removeEventListener?window.removeEventListener("click",this.defaultHandler,!0):document.detachEvent&&document.detachEvent("onclick",this.defaultHandler),this.defaultHandler=null)},addDefaultInteractionListener:function(a){this.shouldAddDefaultListener&&(this.shouldAddDefaultListener=!1,this.defaultHandler=a!=null?a:this.baseInteractionHandler.bind(this),window.addEventListener?window.addEventListener("click",this.defaultHandler,!0):document.attachEvent&&document.attachEvent("onclick",this.defaultHandler))},registerCallbackOnCookieFlush:function(a){!(g||(g=b("CookieConsent"))).isDeferCookies()?a():this.callbacks.add(a)},baseInteractionHandler:function(a){var c=a.target;if(!(c instanceof HTMLElement))return;if(a instanceof MouseEvent&&!this.isValidClick(a))return;b("cr:1109759")!=null&&!b("cr:1109759").isBlacklisted(c)&&this.flushAllCookies()},isValidClick:function(a){return a.which===void 0?!0:a.which==1},canEmbedThirdPartyPixel:function(){return(g||(g=b("CookieConsent"))).isCookiesBlocked()||(g||(g=b("CookieConsent"))).isDeferCookies()?!1:h.size===0}};e.exports=a}),null);
__d("VisualCompletionGating",["requireCond","cr:729414"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:729414")}),null);
__d("classWithMixins",[],(function(a,b,c,d,e,f){function a(a,b){var c=function(){a.apply(this,arguments)};c.prototype=Object.assign(Object.create(a.prototype),b.prototype);return c}e.exports=a}),null);
__d("filterObject",[],(function(a,b,c,d,e,f){"use strict";var g=Object.prototype.hasOwnProperty;function a(a,b,c){if(!a)return null;var d={};for(var e in a)g.call(a,e)&&b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}e.exports=a}),null);
__d("keyMirrorRecursive",["invariant","isTruthy"],(function(a,b,c,d,e,f,g){"use strict";a=function a(c,d){var e={};h(c)||g(0,580);for(var f in c){if(!Object.prototype.hasOwnProperty.call(c,f))continue;var i=c[f],j=b("isTruthy")(d)?d+"."+f:f;h(i)?i=a(i,j):i=j;e[f]=i}return e};function h(a){return a instanceof Object&&!Array.isArray(a)}e.exports=a}),null);
__d("GHLTestElement",["csx","invariant","BanzaiODS","Parent","URI","containsNode","getElementPosition","gkx"],(function(a,b,c,d,e,f,g,h){"use strict";var i;a=function(a,c){var d=Array.from(a.querySelectorAll("img"));if(b("gkx")("1059877")){var e=(i||(i=b("URI"))).getRequestURI();e=e!=null?e.getPath():"";var f="images"+c,g="length_"+String(d.length);m(f+"."+g);m(f+".path_"+e+"."+g)}d.length>0||h(0,13937);f=d.filter(j);if(f.length===0){b("gkx")("1059877")&&j(a)&&m("images_removed_but_element_exists");m("skipping_check_for_incompatible_element"+c);return!1}e=f.filter(function(a){a=b("getElementPosition")(a);return a.width>0||a.height>0});g=e.length===0;return g&&!k(a)};var j=function(a){var c;return b("containsNode")(a==null?void 0:(c=a.ownerDocument)==null?void 0:c.documentElement,a)},k=function(a){return!!b("Parent").bySelector(a,l)},l=[".hidden_elem","._5ds2","._i6m"].join(","),m=function(a){return b("BanzaiODS").bumpEntityKey(2966,"feed_ads","GHLTestElement.testElementI."+a)};e.exports={testElementI:a}}),null);
__d("ghlTestUBT",["requireCond","cr:1278084"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1278084")}),null);
__d("ghlInternalBumpODSKey",["BanzaiODS"],(function(a,b,c,d,e,f){"use strict";a=function(a,c){return b("BanzaiODS").bumpEntityKey(2966,"feed_ads",a+"."+c)};e.exports=a}),null);
__d("ghlTestUBTFacebook",["Promise","requireCond","cr:1088657","URI","ghlInternalBumpODSKey","promiseDone"],(function(a,b,c,d,e,f){"use strict";var g,h=function(){return new(b("Promise"))(function(a){var b=window.atob,c=document.body;if(b==null||c==null){a(!1);return}var d=document.createElement("div");d.className=l(b);c.appendChild(d);b=k(d);if(b&&b.MozBinding&&b.MozBinding.startsWith("url")){setTimeout(function(){return a(d.clientWidth===0)},5e3);return}a((b==null?void 0:b.display)==="none")})},i=function(){return new(b("Promise"))(function(a){var c=document.body;if(c==null){a(!1);return}var d=document.createElement("img");c.appendChild(d);d.onload=function(){var b=k(d);a((b==null?void 0:b.display)==="none");d.parentNode&&d.parentNode.removeChild(d)};d.onerror=function(){a(!0),d.parentNode&&d.parentNode.removeChild(d)};d.src=new(g||(g=b("URI")))("https://scontent.xx.fbcdn.net/hads-ak-prn2/1487645_6012475414660_1439393861_n.png").toString()})},j=null;a=function(a){j==null&&(m("init"),j=new(b("Promise"))(function(a){return b("promiseDone")(b("Promise").all([h(),i()]),function(b){var c=b[0];b=b[1];m("done",c,b);c=c||b;a(c)})})),b("promiseDone")(j,a),b("cr:1088657")&&b("cr:1088657").i()};var k=function(a){return window.getComputedStyle(a)},l=function(a){return[a("QWRCb3g="),a("QWQ="),a("YWR2ZXJ0"),a("cG9zdC1hZHM=")].join(" ")},m=function(){for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];return b("ghlInternalBumpODSKey")("ghlTestUBT",String(c.join(".")))};e.exports=a}),null);
__d("ImmutableValue",["invariant","isNode"],(function(a,b,c,d,e,f,g){"use strict";var h="_DONT_EVER_TYPE_THIS_SECRET_KEY";a=function(){function a(b){b===a[h]||g(0,5608)}a.mergeAllPropertiesInto=function(a,b){var c=b.length;for(var d=0;d<c;d++)Object.assign(a,b[d])};a.deepFreezeRootNode=function(c){if(b("isNode")(c))return;Object.freeze(c);for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&a.recurseDeepFreeze(c[d]);Object.seal(c)};a.recurseDeepFreeze=function(c){if(b("isNode")(c)||!a.shouldRecurseFreeze(c))return;Object.freeze(c);for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&a.recurseDeepFreeze(c[d]);Object.seal(c)};a.shouldRecurseFreeze=function(b){return typeof b==="object"&&!(b instanceof a)&&b!==null};return a}();a._DONT_EVER_TYPE_THIS_SECRET_KEY=Math.random();e.exports=a}),null);
__d("mergeHelpers",["invariant","FbtResultBase"],(function(a,b,c,d,e,f,g){"use strict";var h=36,i=function(a){return typeof a!=="object"||a instanceof Date||a===null||a instanceof b("FbtResultBase")},j={MAX_MERGE_DEPTH:h,isTerminal:i,normalizeMergeArg:function(a){return a==null?{}:a},checkMergeArrayArgs:function(a,b){Array.isArray(a)&&Array.isArray(b)||g(0,3714,a,b)},checkMergeObjectArgs:function(a,b){j.checkMergeObjectArg(a),j.checkMergeObjectArg(b)},checkMergeObjectArg:function(a){!i(a)&&!Array.isArray(a)||g(0,3715,a)},checkMergeIntoObjectArg:function(a){(!i(a)||typeof a==="function")&&!Array.isArray(a)||g(0,3716,a)},checkMergeLevel:function(a){a<h||g(0,3717)},checkArrayStrategy:function(a){a==null||a in j.ArrayStrategies||g(0,3718)},ArrayStrategies:{Clobber:"Clobber",Concat:"Concat",IndexByIndex:"IndexByIndex"}};e.exports=j}),null);
__d("ImmutableObject",["invariant","ImmutableValue","mergeHelpers"],(function(a,b,c,d,e,f,g){"use strict";var h=b("mergeHelpers").checkMergeObjectArgs,i=b("mergeHelpers").isTerminal,j="_DONT_EVER_TYPE_THIS_SECRET_KEY";function k(a){a instanceof b("ImmutableValue")||g(0,3884)}var l=function(c){babelHelpers.inheritsLoose(a,c);function a(){var a;a=c.call(this,b("ImmutableValue")[j])||this;b("ImmutableValue").mergeAllPropertiesInto(babelHelpers.assertThisInitialized(a),arguments);return a}a.set=function(b,c){k(b);typeof c==="object"&&c!==void 0&&!Array.isArray(c)||g(0,3885);return new a(b,c)};a.setProperty=function(b,c,d){var e={};e[c]=d;return a.set(b,e)};a.deleteProperty=function(b,c){var d={};for(var e in b)e!==c&&Object.prototype.hasOwnProperty.call(b,e)&&(d[e]=b[e]);return new a(d)};a.setDeep=function(a,b){k(a);return m(a,b)};a.values=function(a){return Object.keys(a).map(function(b){return a[b]})};return a}(b("ImmutableValue"));function m(a,c){h(a,c);var d={},e=Object.keys(a);for(var f=0;f<e.length;f++){var g=e[f];!Object.prototype.hasOwnProperty.call(c,g)?d[g]=a[g]:i(a[g])||i(c[g])?d[g]=c[g]:d[g]=m(a[g],c[g])}g=Object.keys(c);for(f=0;f<g.length;f++){e=g[f];if(Object.prototype.hasOwnProperty.call(a,e))continue;d[e]=c[e]}return a instanceof b("ImmutableValue")?new l(d):c instanceof b("ImmutableValue")?new l(d):d}e.exports=l}),null);
__d("FbtLogging",["requireCond","cr:1094907"],(function(a,b,c,d,e,f){"use strict";e.exports=b("cr:1094907")}),null);
__d("ReactComponentWithPureRenderMixin",["shallowCompare"],(function(a,b,c,d,e,f){"use strict";a={shouldComponentUpdate:function(a,c){return b("shallowCompare")(this,a,c)}};e.exports=a}),null);
__d("CacheStorage",["ErrorGuard","EventListenerImplForCacheStorage","ExecutionEnvironment","FBJSON","WebStorage","emptyFunction","killswitch"],(function(a,b,c,d,e,f){var g,h,i="_@_",j="3b",k="CacheStorageVersion",l={length:0,getItem:a=b("emptyFunction"),setItem:a,clear:a,removeItem:a,key:a};c=function(){"use strict";function a(a){this._store=a}var b=a.prototype;b.getStore=function(){return this._store};b.keys=function(){var a=[];for(var b=0;b<this._store.length;b++){var c=this._store.key(b);c!=null&&a.push(c)}return a};b.get=function(a){return this._store.getItem(a)};b.set=function(a,b){this._store.setItem(a,b)};b.remove=function(a){this._store.removeItem(a)};b.clear=function(){this._store.clear()};b.clearWithPrefix=function(a){a=a||"";var b=this.keys();for(var c=0;c<b.length;c++){var d=b[c];d!=null&&d.startsWith(a)&&this.remove(d)}};return a}();d=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var c;return a.call(this,(c=(g||(g=b("WebStorage"))).getLocalStorage())!=null?c:l)||this}c.available=function(){return!!(g||(g=b("WebStorage"))).getLocalStorage()};return c}(c);f=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var c;return a.call(this,(c=(g||(g=b("WebStorage"))).getSessionStorage())!=null?c:l)||this}c.available=function(){return!!(g||(g=b("WebStorage"))).getSessionStorage()};return c}(c);var m=function(){"use strict";function a(){this._store={}}var b=a.prototype;b.getStore=function(){return this._store};b.keys=function(){return Object.keys(this._store)};b.get=function(a){return this._store[a]===void 0?null:this._store[a]};b.set=function(a,b){this._store[a]=b};b.remove=function(a){a in this._store&&delete this._store[a]};b.clear=function(){this._store={}};b.clearWithPrefix=function(a){a=a||"";var b=this.keys();for(var c=0;c<b.length;c++){var d=b[c];d.startsWith(a)&&this.remove(d)}};a.available=function(){return!0};return a}(),n={memory:m,localstorage:d,sessionstorage:f};a=function(){"use strict";function a(a,c){this._changeCallbacks=[];this._key_prefix="_cs_";this._exceptionMessage=null;c&&(this._key_prefix=c);if(a=="AUTO"||!a)for(var d in n){c=n[d];if(c.available()){a=d;break}}a&&(!n[a]||!n[a].available()?(b("ExecutionEnvironment").canUseDOM,this._backend=new m()):this._backend=new n[a]());c=this.useBrowserStorage();c&&b("EventListenerImplForCacheStorage").listen(window,"storage",this._onBrowserValueChanged.bind(this));a=c?this._backend.getStore().getItem(k):this._backend.getStore()[k];a!==j&&(b("killswitch")("CACHE_STORAGE_MODULE_CLEAR_OWN_KEYS")?this.clear():this.clearOwnKeys())}var c=a.prototype;c.useBrowserStorage=function(){return this._backend.getStore()===(g||(g=b("WebStorage"))).getLocalStorage()||this._backend.getStore()===(g||(g=b("WebStorage"))).getSessionStorage()};c.addValueChangeCallback=function(a){var b=this;this._changeCallbacks.push(a);return{remove:function(){b._changeCallbacks.slice(b._changeCallbacks.indexOf(a),1)}}};c._onBrowserValueChanged=function(a){this._changeCallbacks&&String(a.key).startsWith(this._key_prefix)&&this._changeCallbacks.forEach(function(b){b(a.key,a.oldValue,a.newValue)})};c.keys=function(){var a=this,c=[];(h||(h=b("ErrorGuard"))).guard(function(){if(a._backend){var b=a._backend.keys(),d=a._key_prefix.length;for(var e=0;e<b.length;e++)b[e].substr(0,d)==a._key_prefix&&c.push(b[e].substr(d))}},{name:"CacheStorage"})();return c};c.set=function(c,d,e){if(this._backend){if(this.useBrowserStorage()&&a._persistentWritesDisabled){this._exceptionMessage="writes disabled";return!1}var f;typeof d==="string"?f=i+d:!e?(f={__t:Date.now(),__v:d},f=b("FBJSON").stringify(f)):f=b("FBJSON").stringify(d);e=this._backend;d=this._key_prefix+c;c=!0;var g=null;while(c)try{g=null,e.set(d,f),c=!1}catch(a){g=a;var h=e.keys().length;this._evictCacheEntries();c=e.keys().length<h}if(g!==null){this._exceptionMessage=g.message;return!1}else{this._exceptionMessage=null;return!0}}this._exceptionMessage="no back end";return!1};c.getLastSetExceptionMessage=function(){return this._exceptionMessage};c.getStorageKeyCount=function(){var a=this._backend;return a?a.keys().length:0};c._evictCacheEntries=function(){var c=[],d=this._backend;d.keys().forEach(function(f){if(f===k)return;var g=d.get(f);if(g===void 0){d.remove(f);return}if(a._hasMagicPrefix(g))return;try{g=b("FBJSON").parse(g,e.id)}catch(a){d.remove(f);return}g&&g.__t!==void 0&&g.__v!==void 0&&c.push([f,g.__t])});c.sort(function(a,b){return a[1]-b[1]});for(var f=0;f<Math.ceil(c.length/2);f++)d.remove(c[f][0])};c.get=function(c,d){var f;if(this._backend){(h||(h=b("ErrorGuard"))).applyWithGuard(function(){f=this._backend.get(this._key_prefix+c)},this,[],{onError:function(){f=null},name:"CacheStorage:get"});if(f!=null)if(a._hasMagicPrefix(f))f=f.substr(i.length);else try{f=b("FBJSON").parse(f,e.id),f&&f.__t!==void 0&&f.__v!==void 0&&(f=f.__v)}catch(a){f=void 0}else f=void 0}f===void 0&&d!==void 0&&(f=d,this.set(c,f));return f};c.remove=function(a){this._backend&&(h||(h=b("ErrorGuard"))).applyWithGuard(this._backend.remove,this._backend,[this._key_prefix+a],{name:"CacheStorage:remove"})};c._setVersion=function(){this.useBrowserStorage()?this._backend.getStore().setItem(k,j):this._backend.getStore()[k]=j};c.clear=function(){this._backend&&((h||(h=b("ErrorGuard"))).applyWithGuard(this._backend.clear,this._backend,[],{name:"CacheStorage:clear"}),this._setVersion())};c.clearOwnKeys=function(){this._backend&&((h||(h=b("ErrorGuard"))).applyWithGuard(this._backend.clearWithPrefix,this._backend,[this._key_prefix],{name:"CacheStorage:clearOwnKeys"}),this._setVersion())};a.getAllStorageTypes=function(){return Object.keys(n)};a._hasMagicPrefix=function(a){return a.substr(0,i.length)===i};a.disablePersistentWrites=function(){a._persistentWritesDisabled=!0};return a}();a._persistentWritesDisabled=!1;e.exports=a}),null);
__d("VideoPlayerLoggerFallbackReasons",[],(function(a,b,c,d,e,f){e.exports={TIMEOUT:"timeout",FLASH_ERROR:"flash_error",FLASH_UNAVAILABLE:"flash_unavailable"}}),null);
__d("ImmutableServerCallableWrapper",["immutable"],(function(a,b,c,d,e,f){"use strict";e.exports=b("immutable")}),null);