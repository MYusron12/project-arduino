if (self.CavalryLogger) { CavalryLogger.start_js(["6DkUG"]); }

__d("FormSubmit",["AsyncRequest","AsyncResponse","CSS","DOMQuery","Event","Form","Parent","trackReferrer"],(function(a,b,c,d,e,f){var g={buildRequest:function(a,c){var d=(b("Form").getAttribute(a,"method")||"GET").toUpperCase();c=c&&b("Parent").byTag(c,"button")||c;var e=c&&b("Parent").byClass(c,"stat_elem")||a;if(b("CSS").hasClass(e,"async_saving"))return null;if(c&&(c.form!==a||c.nodeName!="INPUT"&&c.nodeName!="BUTTON"||c.type!="submit")){var f=b("DOMQuery").scry(a,".enter_submit_target")[0];f&&(c=f)}f=b("Form").serialize(a,c);b("Form").setDisabled(a,!0);c=b("Form").getAttribute(a,"ajaxify")||b("Form").getAttribute(a,"action");var g=!!b("Form").getAttribute(a,"data-cors");b("trackReferrer")(a,c);return new(b("AsyncRequest"))().setAllowCrossOrigin(g).setURI(c).setData(f).setNectarModuleDataSafe(a).setReadOnly(d=="GET").setMethod(d).setRelativeTo(a).setStatusElement(e).setInitialHandler(b("Form").setDisabled.bind(null,a,!1)).setHandler(function(c){b("Event").fire(a,"success",{response:c})}).setErrorHandler(function(c){b("Event").fire(a,"error",{response:c})!==!1&&b("AsyncResponse").defaultErrorHandler(c)}).setFinallyHandler(b("Form").setDisabled.bind(null,a,!1))},send:function(a,b){a=g.buildRequest(a,b);a&&a.send();return a}};e.exports=g}),null);
__d("Optimus",["Event","Parent"],(function(a,b,c,d,e,f){"use strict";var g={};function h(a,c){var d=c.getTarget();if(!d)return;var e=g[a];for(var f in e){var h=b("Parent").byAttribute(d,f);if(h)do{var i=e[f][h.getAttribute(f)];if(i&&i.handleOptimus(a,h,c)===!1)break}while(h=h.parentNode&&b("Parent").byAttribute(h.parentNode,f))}}function i(c,d,f,a){g[c]||(g[c]={},b("Event").listen(document.documentElement,c,h.bind(null,c))),g[c][d]||(g[c][d]={}),g[c][d][f]||(g[c][d][f]=a)}e.exports={addRelClick:function(b,a){i("click","rel",b,a)},addEventListener:i}}),null);
__d("ScrollingPager",["Arbiter","CSS","DOM","Event","OnVisible","UIPagelet","ge","tidyEvent"],(function(a,b,c,d,e,f){var g={};a=function(){"use strict";function a(c,d,e,f,h){var i=this;this.$9=c;this.$7=d;this.$2=e;this.$5=f||{};this.$1=!1;this.$5.target_id?(this.$10=this.$5.target_id,this.$5.append=!0):this.$10=c;h&&b("tidyEvent")(b("Event").listen(h,"click",function(){i.getHandler()(!1);return!1}));this.$8=this.$5.scroll_area_id;this.$3=null;this.$5.fireOnScroll&&this.register();g[this.$9]=this;b("Arbiter").inform(a.CONSTRUCTED,{id:this.$9})}var c=a.prototype;c.setBuffer=function(a){this.$5.buffer=a,this.$4&&this.$4.setBuffer(a)};c.getBuffer=function(){return this.$5.buffer};c.getElement=function(){return b("ge")(this.$9)};c.register=function(){var a=this;if(this.$1)return;var c=this.getElement();if(!c)return;this.$4=new(b("OnVisible"))(c,function(b){a.getHandler()(b)},!1,this.$5.buffer,!1,b("ge")(this.$8));this.$1=!0};c.getInstance=function(a){return g[a]};c.getHandler=function(){if(this.$3)return this.$3;function a(c){var d=this,e=b("ge")(this.$9);if(!e){this.$4.remove();return}b("CSS").addClass(e.firstChild,"async_saving");var f=this.$5.handler,g=this.$5.force_remove_pager&&this.$9!==this.$10,a=function(){for(var a=arguments.length,c=new Array(a),h=0;h<a;h++)c[h]=arguments[h];f&&f.apply(null,c);g&&b("DOM").remove(e);d.$6=null};this.$5.usePipe?this.$5.finallyHandler=a:this.$5.handler=a;c&&(this.$2.pager_fired_on_init=!0);this.$6=b("UIPagelet").loadFromEndpoint(this.$7,this.$10,this.$2,this.$5)}return a.bind(this)};c.setHandler=function(a){this.$3=a};c.removeOnVisible=function(){this.$4.remove()};c.checkBuffer=function(){this.$4&&this.$4.checkBuffer()};c.setOption=function(a,b){this.$5[a]=b};c.cancelPagelet=function(){this.$6&&(this.$6.cancel(),this.$6=null)};a.getInstance=function(a){return g[a]};return a}();a.CONSTRUCTED="ScrollingPager/constructed";e.exports=a}),null);
__d("ProfileActionBarLogger",["FBJSON","MarauderLogger","Optimus"],(function(a,b,c,d,e,f){function a(){b("Optimus").addEventListener("mouseup","data-loggable","ProfileHighQualityLogger",{handleOptimus:function(a,c,d){b("MarauderLogger").log("profile_high_quality_action",null,b("FBJSON").parse(c.getAttribute("data-store")));return!1}})}f.init=a}),null);
__d("ProfileEscapeHatch",["Arbiter","CSS","ProfileTabUtils","Run"],(function(a,b,c,d,e,f){var g=[],h=!1;function i(a){g.forEach(function(c){b("CSS").conditionShow(c.getRoot(),!b("ProfileTabUtils").isOverviewTab(a))})}a=function(){"use strict";function a(a){this.$1=a;g.push(this);if(!h){var c=b("Arbiter").subscribe("TimelineController/sectionKeyChange",function(a,b){return i(b[0])});b("Run").onLeave(function(){g=[],c.unsubscribe()});h=!0}}var c=a.prototype;c.getRoot=function(){return this.$1};return a}();e.exports=a}),null);
__d("XProfileTilesLogDismissController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/tiles/log/dismiss/",{section_type:{type:"Enum",required:!0,enumType:1}})}),null);
__d("ProfileTileActions",["csx","cx","AsyncRequest","CSS","Event","XProfileTilesLogDismissController","tidyEvent"],(function(a,b,c,d,e,f,g,h){a={addCollapseListeners:function(a,c){var d=a.querySelector("._3vay");d!==null&&b("tidyEvent")(b("Event").listen(d,"click",function(d){b("CSS").addClass(a,"_65tv");d=b("XProfileTilesLogDismissController").getURIBuilder().setEnum("section_type",c);new(b("AsyncRequest"))().setURI(d.getURI()).setMethod("POST").send()}))}};e.exports=a}),null);
__d("TimelineContextItemLogger",["cx","BanzaiLogger","Event","FBJSON","Parent","Run","tidyEvent"],(function(a,b,c,d,e,f,g){var h="MTimelineXContextItemsLoggerConfig",i="impression",j="click",k="context_item_url",l="event",m="_md0",n=[];function o(a,c,d){a=a.getAttribute("data-store");if(a){a=b("FBJSON").parse(a);a[l]=c;d&&(a[k]=d);b("BanzaiLogger").log(h,a)}}a={logWhenVisible:function(a){n.length||b("Run").onLeave(function(){n=[]}),n.push(a)},logWhenClicked:function(a){b("tidyEvent")(b("Event").listen(a,"click",function(a){a=a.getTarget();if(a.nodeName!=="A")return;var c=b("Parent").byClass(a,m);c&&o(c,j,a.href)}))},listenToExpand:function(a){b("tidyEvent")(a.addListener("expanded",function(){while(n.length)o(n.pop(),i)}))}};e.exports=a}),null);
__d("TimelineNavLight",["csx","cx","invariant","Arbiter","CSS","DataStore","DOM","DOMQuery","Event","Parent","ProfileEngagementTypedLogger","ProfileOverviewSection","ProfileTabUtils","ProfileTimelineUILogger","TimelineAppSectionConstants","destroyOnUnload","queryThenMutateDOM","requireWeak"],(function(a,b,c,d,e,f,g,h,i){var j="_6-7",k="_6-6",l="_529n",m="_9rw",n="_70k",o="._6-7",p="._6-6";a=function(){"use strict";function a(c){var d=this;a.$5&&i(0,5609);this.$1=c;this.$2=b("DOMQuery").scry(c,o)[0];this.$3=b("DOMQuery").scry(c,p);this.$6();b("ProfileOverviewSection").subscribe("Medley/transitionToSection",function(a,b){d.$7(b.slice("pagelet_timeline_medley_".length))});var e=b("Arbiter").subscribe("TimelineController/sectionKeyChange",function(a,b){return d.$7(b[0])}),f=b("Event").listen(this.$1,"click",this.$8.bind(this));a.$5=this;b("destroyOnUnload")(function(){d.$1=null,d.$2=null,d.$3=null,f.remove(),e.unsubscribe(),d.$4&&d.$4.remove(),a.$5=null})}var c=a.prototype;c.setMoreMenuInstance=function(a){this.$4=b("Event").listen(a.getRoot(),"click",this.$9.bind(this))};a.setMoreMenuInstance=function(b){!a.$5&&i(0,5610),a.$5.setMoreMenuInstance(b)};c.$7=function(a){var c=this;this.$2&&b("CSS").removeClass(this.$2,j);var d=this.$3;d&&d.some(function(d){var e=b("TimelineAppSectionConstants").collectionTabKeyToAppTabKey[a]||a,f=b("TimelineAppSectionConstants").alternateCollectionTabKeyToAppTabKey[a];if(b("DataStore").get(d,"tab-key")===e||b("DataStore").get(d,"tab-key")===f){b("CSS").addClass(d,j);c.$2=d;return!0}return!1});(b("ProfileTabUtils").isTimelineTab(a)||b("ProfileTabUtils").isTimelineOverviewTab(a))&&b("requireWeak")("ScrollColumnEvents",function(a){b("Arbiter").inform(a.EVENT_SHOULD_ADJUST)})};c.$6=function(){var a=this.$3,c=this.$1,d,e;b("queryThenMutateDOM")(function(){if(!c||!a)return;var f=b("Parent").byClass(c,n);f instanceof HTMLElement&&(d=parseInt(getComputedStyle(f).width,10));e=a.map(function(a){a=a.offsetWidth;return a})},function(){if(!e||!a||!c)return;var f=b("Parent").byClass(c,l);f!==null&&b("CSS").removeClass(f,l);f=e.reduce(function(a,b){return a+b},0);if(f<d)return;f=f-d;var g=e.length-2;while(f>0&&g>0)b("DOM").remove(a[g]),f-=e[g],g--})};c.$10=function(a,c){a=b("Parent").byClass(a,c);return a?b("DataStore").get(a,"tab-key"):null};c.$8=function(a){a=this.$10(a.target,k);a&&b("ProfileTimelineUILogger").logCoverNavItemClick(a)};c.$9=function(a){a=this.$10(a.target,m);a&&b("ProfileTimelineUILogger").logCoverNavMoreItemClick(a)};a.setupProfileOverviewLogging=function(a){var c=a.dropdownMenu,d=a.profileID,e=a.profileSessionID,f=a.surface;c.onTriggerClick(function(a){new(b("ProfileEngagementTypedLogger"))().setEngagementType("timeline_navigation_click").setItemType("dropdown_button").setProductBucket("profile_core").setProfileIDDummy(d).setProfileSessionID(e).setSurface(f).log()});c.onMenuItemClick(function(a){new(b("ProfileEngagementTypedLogger"))().setEngagementType("timeline_navigation_click").setItemType("dropdown_menu_item").setItemSubtype(a.getValue()).setProductBucket("profile_core").setProfileIDDummy(d).setProfileSessionID(e).setSurface(f).log()})};return a}();e.exports=a}),null);
__d("TimelineJumperController",["csx","Arbiter","CSS","DateConsts","DOM","PageTransitions","ScrollingPager","TimelineController","UIPagelet","$","ge","queryThenMutateDOM"],(function(a,b,c,d,e,f,g){"use strict";var h=b("DateConsts").MS_PER_SEC,i=null,j=null,k=null,l=null;function m(){k||(k=b("Arbiter").subscribeOnce("profile/onLeave",function(){var a=b("ge")("timeline_pager_container"+p(l));if(a!=null){a=o(a);a!=null&&a.cancelPagelet()}a=b("ge")("timeline_small_column");if(a!=null){a=o(a);a!=null&&a.cancelPagelet()}l=null;k=null}))}function n(a){if(a==="recent")return Date.now()/h;var b=a.split("_"),c=parseInt(b[1],10),d=12;a.startsWith("month")&&(d=parseInt(b[2],10));a=new Date(parseInt(c,10),parseInt(d,10));return a.getTime()/h-1}function o(a){a=b("DOM").scry(a,"._6z7p")[0];return a?b("ScrollingPager").getInstance(a.id):null}function p(a){var c="",d=b("TimelineController").getProfileID();d&&(c+="_"+d);a&&(c+="_"+a);return c}a=function(){function a(a){j=a,m()}a.loadSection=function(a){i&&(i.cancel(),i=null);var c,d,e,f;b("queryThenMutateDOM")(function(){var a=p(l);c=b("$")("timeline_story_container"+a);d=b("$")("timeline_pager_container"+a);e=b("$")("timeline_pagelet_spinner");f=o(d)},function(){f&&f.cancelPagelet();var g=p(a);c.id="timeline_story_container"+g;d.id="timeline_pager_container"+g;l=a;b("DOM").empty(c);b("DOM").empty(d);b("CSS").show(e);i=b("UIPagelet").loadFromEndpoint("ProfileTimelineJumperStoriesPagelet",c,babelHelpers["extends"]({},b("PageTransitions").getCurrentURI().getQueryData(),{profile_id:b("TimelineController").getProfileID(),target_id:c.id,pager_target_id:d.id,pagelet_token:j,end:n(a)}),{finallyHandler:function(){b("CSS").hide(e),i=null},constHeight:!0,usePipe:!0})})};return a}();e.exports=a}),null);
__d("TimelineViewportTracking",["csx","Arbiter","Banzai","DataAttributeUtils","DOM","ViewportTracking","$","tidyEvent","viewportTrackingBuilder"],(function(a,b,c,d,e,f,g){"use strict";function h(a,c){return{_stream:null,_streamDOMID:c,getDataFromConfig:function(a,c){c.isSeenStateLoggingEnabled=a.is_seen_state_logging_enabled,c.isTimetrackingEnabled=a.is_timetracking_enabled,c.vpvdDebug=!!a.vpvd_debug,b("tidyEvent")(b("Arbiter").subscribe(["TimelineConstants/unitSegmentLoaded"],function(){c.invalidateAllStoriesCache()}))},getAllStories:function(){var a=b("DOM").scry(this.getStream(),"._5pat"),c=[];for(var d=0;d<a.length;d++)this.getStoryID(a[d])&&c.push(a[d]);return c},getStream:function(){this._stream||(this._stream=b("$")(this._streamDOMID));return this._stream},getStoryID:function(a){a=JSON.parse(b("DataAttributeUtils").getDataFt(a)||null);if(a){var c="thid";return a[c]}return null},getDataToLog:function(a){a=JSON.parse(b("DataAttributeUtils").getDataFt(a));return{ft:a,log_type:"impression"}}}}var i=function(c){babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.getTimetrackingDataToLog=function(a){a=c.prototype.getTimetrackingDataToLog.call(this,a);a.log_type="duration";return a};d.getAllStoriesFromCache=function(){return this.behavior.getAllStories()};d.sendDataToLog=function(a,c,d,e){if(!c.ft)return;a={};e&&(a.retry=e);d&&(a.delay=2e3);b("Banzai").post("timeline_feed_tracking",c,a)};d.cleanup=function(){j.clearSingleton(),c.prototype.cleanup.call(this)};return a}(b("ViewportTracking")),j=b("viewportTrackingBuilder")(function(a,b){b=new i(h(a,b));b.init(a);return b});j.init=j.singleton.bind(j);e.exports=j}),null);
__d("htmlSpecialChars",[],(function(a,b,c,d,e,f){var g=/&/g,h=/</g,i=/>/g,j=/\"/g,k=/\'/g;function a(a){if(typeof a==="undefined"||a===null||!a.toString)return"";if(a===!1)return"0";else if(a===!0)return"1";return a.toString().replace(g,"&amp;").replace(j,"&quot;").replace(k,"&#039;").replace(h,"&lt;").replace(i,"&gt;")}e.exports=a}),null);