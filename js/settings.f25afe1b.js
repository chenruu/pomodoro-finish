(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{1771:function(t,e,n){var s={"./alarm.mp3":"a362","./logo.png":"cf05","./yay.mp3":"c7a5"};function c(t){var e=o(t);return n(e)}function o(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}c.keys=function(){return Object.keys(s)},c.resolve=o,t.exports=c,c.id="1771"},"26d3":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-100 h-100",attrs:{id:"settings"}},[s("b-container",[s("b-table",{staticStyle:{"margin-top":"10%"},attrs:{items:t.items,fields:t.fields},on:{"row-clicked":t.select},scopedSlots:t._u([{key:"cell(src)",fn:function(t){return[s("audio",{attrs:{controls:"controls",src:n("1771")("./"+t.value)}})]}},{key:"cell(select)",fn:function(e){return[e.item.src===t.sound?s("span",[s("b-icon-check",{attrs:{"font-scale":"3"}})],1):t._e()]}}])})],1)],1)},c=[],o={data:function(){return{items:[{name:"鬧鈴",src:"alarm.mp3"},{name:"yay",src:"yay.mp3"}],fields:[{key:"name",label:"名稱"},{key:"src",label:"試聽"},{key:"select",label:"選擇"}]}},methods:{select:function(t){this.$store.commit("selectSound",t.src)}},computed:{sound:function(){return this.$store.state.sound}}},r=o,a=n("2877"),i=Object(a["a"])(r,s,c,!1,null,null,null);e["default"]=i.exports},a362:function(t,e,n){t.exports=n.p+"media/alarm.965b614d.mp3"},c7a5:function(t,e,n){t.exports=n.p+"media/yay.46c744f5.mp3"},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}}]);
//# sourceMappingURL=settings.f25afe1b.js.map