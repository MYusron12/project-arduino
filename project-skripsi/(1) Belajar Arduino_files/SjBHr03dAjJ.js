if (self.CavalryLogger) { CavalryLogger.start_js(["ymkLr"]); }

__d("LearningGroupsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:LearningGroupsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:LearningGroupsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:LearningGroupsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAction=function(a){this.$1.action=a;return this};c.setContainermodule=function(a){this.$1.containermodule=a;return this};c.setEventGroup=function(a){this.$1.event_group=a;return this};c.setIsemployee=function(a){this.$1.isemployee=a;return this};c.setName=function(a){this.$1.name=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={action:!0,containermodule:!0,event_group:!0,isemployee:!0,name:!0,time:!0,weight:!0};e.exports=a}),null);
__d("LearningGroupLogAction",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNIT_CREATED:"UNIT_CREATED",UNIT_MEGAPHONE_CLICK:"UNIT_CREATE_MEGAPHONE_CLICK",UNIT_MEGAPHONE_CLOSE:"UNIT_CREATE_MEGAPHONE_CLOSE",UNIT_INTRO_CARD_CLICK:"UNIT_INTRO_CARD_CLICK",UNIT_INTRO_CARD_VIEW:"UNIT_INTRO_CARD_VIEW",POST_ADDED_TO_UNIT:"POST_ADDED_TO_UNIT",POST_REMOVED_FROM_UNIT:"POST_REMOVED_FROM_UNIT",UNIT_LIST_LOADED:"UNIT_LIST_LOADED",SINGLE_UNIT_LOADED:"SINGLE_UNIT_LOADED",UNIT_EDIT:"UNIT_EDIT",UNIT_MEGAPHONE_VIEW:"UNIT_MEGAPHONE_VIEW",UNIT_EXISTENSE_MEGAPHONE_VIEW:"UNIT_EXISTENSE_MEGAPHONE_VIEW",UNIT_UPSELL_VIEW:"UNIT_UPSELL_VIEW",UNIT_LIST_EDIT:"UNIT_LIST_EDIT",UNIT_CREATION_DIALOG_VIEW:"UNIT_CREATION_DIALOG_VIEW",UPSELL_LAND_ON_UNITS_SETTING_MEGAPHONE_VIEW:"UPSELL_LAND_ON_UNITS_SETTING_MEGAPHONE_VIEW",SEE_UNITS:"SEE_UNITS",MODULE_EDIT:"MODULE_EDIT",CLICK_DONE_BUTTON:"CLICK_DONE_BUTTON",UNIT_LIST_ITEM_CLICKED:"UNIT_LIST_ITEM_CLICKED",UNIT_LIST_TITLE_CLICKED:"UNIT_LIST_TITLE_CLICKED",CLICK_SEE_MORE_POST_PREVIEWS:"CLICK_SEE_MORE_POST_PREVIEWS",NEXT_UNIT_CLICKED:"NEXT_UNIT_CLICKED",SETTINGS_SECTIONS_UNITS_CLICK:"SETTINGS_SECTIONS_UNITS_CLICK",DONE_TOOL_TIP:"DONE_TOOL_TIP",UNIT_NAVIGATION_TOOL_TIP:"UNIT_NAVIGATION_TOOL_TIP",LEARNING_INSIGHTS_NAVIGATION_TOOL_TIP:"LEARNING_INSIGHTS_NAVIGATION_TOOL_TIP",SYNC_GROUPS_TOOL_TIP:"SYNC_GROUPS_TOOL_TIP",COMPLETION_DASHBOARD:"COMPLETION_DASHBOARD",LEARNING_LINK_API:"LEARNING_LINK_API",LEARNING_LINK_COMPOSER:"LEARNING_LINK_COMPOSER",FAILED_DOWNLOAD_COMPLETION_JOB:"FAILED_DOWNLOAD_COMPLETION_JOB",DOWNLOAD_COMPLETION_JOB_NO_NAME:"DOWNLOAD_COMPLETION_JOB_NO_NAME",FAILED_TO_QUERY_PROGRESS_ELEMENTS:"FAILED_TO_QUERY_PROGRESS_ELEMENTS",FAILED_TO_QUERY_DONE_STATUS_ELEMENTS:"FAILED_TO_QUERY_DONE_STATUS_ELEMENTS"})}),null);
__d("UnitEntryOrigins",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNIT_OUTLINE_TITLE:"UNIT_OUTLINE_TITLE",UNIT_OUTLINE_MODULE:"UNIT_OUTLINE_MODULE"})}),null);
__d("LearningGroupsServerCallableWrapper",["LearningGroupLogAction","LearningGroupsTypedLogger","UnitEntryOrigins"],(function(a,b,c,d,e,f){"use strict";b("LearningGroupLogAction"),b("LearningGroupsTypedLogger"),b("UnitEntryOrigins"),e.exports={}}),null);
__d("SoleSimpleTooltipHandler",["LearningGroupsTypedLogger"],(function(a,b,c,d,e,f){a={subscribeOnHide:function(a,c,d){a.subscribe("hide",function(){new(b("LearningGroupsTypedLogger"))().setAction(c).addToExtraData("Tooltip_action",d).log()})}};e.exports=a}),null);
__d("XUISubNavigationAccessoryClearableBadge",["Event","SubscriptionsHandler","XUISubNavigationLoader"],(function(a,b,c,d,e,f){"use strict";var g=null;a={init:function(a,c){g||(g=new(b("SubscriptionsHandler"))(),g.addSubscriptions(b("XUISubNavigationLoader").onLeave(function(){g&&g.release(),g=null}))),g.addSubscriptions(b("Event").listen(a,"click",function(){return c.setCount(0)}))}};e.exports=a}),null);
__d("XWorkWebHelpDelegateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/help/work/{?id}/",{id:{type:"Int"},platform:{type:"String"},query:{type:"String"},title:{type:"String"}})}),null);