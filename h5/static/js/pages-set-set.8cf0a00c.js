(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-set"],{"2fde":function(t,e,l){var i=l("9007");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=l("4f06").default;a("2d340938",i,!0,{sourceMap:!1,shadowMode:!1})},4610:function(t,e,l){"use strict";var i=l("2fde"),a=l.n(i);a.a},"696b":function(t,e,l){"use strict";var i=l("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(l("cebc")),n=l("2f62"),s={data:function(){return{}},methods:(0,a.default)({},(0,n.mapMutations)(["logout"]),{navTo:function(t){this.$api.msg("跳转到".concat(t))},toLogout:function(){var t=this;uni.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&(t.logout(),setTimeout(function(){uni.navigateBack()},200))}})},switchChange:function(t){var e=t.detail.value?"打开":"关闭";this.$api.msg("".concat(e,"消息推送"))}})};e.default=s},9007:function(t,e,l){e=t.exports=l("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-45b445b0]{background:#f8f8f8}.list-cell[data-v-45b445b0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;padding:%?20?% %?30?%;line-height:%?60?%;position:relative;background:#fff;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.list-cell.log-out-btn[data-v-45b445b0]{margin-top:%?40?%}.list-cell.log-out-btn .cell-tit[data-v-45b445b0]{color:#fa436a;text-align:center;margin-right:0}.list-cell.cell-hover[data-v-45b445b0]{background:#fafafa}.list-cell.b-b[data-v-45b445b0]:after{left:%?30?%}.list-cell.m-t[data-v-45b445b0]{margin-top:%?16?%}.list-cell .cell-more[data-v-45b445b0]{-webkit-align-self:baseline;-ms-flex-item-align:baseline;align-self:baseline;font-size:%?32?%;color:#909399;margin-left:%?10?%}.list-cell .cell-tit[data-v-45b445b0]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?30?%;color:#303133;margin-right:%?10?%}.list-cell .cell-tip[data-v-45b445b0]{font-size:%?28?%;color:#909399}.list-cell uni-switch[data-v-45b445b0]{-webkit-transform:translateX(%?16?%) scale(.84);-ms-transform:translateX(%?16?%) scale(.84);transform:translateX(%?16?%) scale(.84)}body.?%PAGE?%[data-v-45b445b0]{background:#f8f8f8}',""])},"9e7e":function(t,e,l){"use strict";l.r(e);var i=l("d3fc"),a=l("d155");for(var n in a)"default"!==n&&function(t){l.d(e,t,function(){return a[t]})}(n);l("4610");var s=l("2877"),c=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"45b445b0",null);e["default"]=c.exports},d155:function(t,e,l){"use strict";l.r(e);var i=l("696b"),a=l.n(i);for(var n in i)"default"!==n&&function(t){l.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},d3fc:function(t,e,l){"use strict";var i=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-uni-view",{staticClass:"container"},[l("v-uni-view",{staticClass:"list-cell b-b m-t",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("个人资料")}}},[l("v-uni-text",{staticClass:"cell-tit"},[t._v("个人资料")]),l("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),l("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("收货地址")}}},[l("v-uni-text",{staticClass:"cell-tit"},[t._v("收货地址")]),l("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),l("v-uni-view",{staticClass:"list-cell",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("实名认证")}}},[l("v-uni-text",{staticClass:"cell-tit"},[t._v("实名认证")]),l("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),l("v-uni-view",{staticClass:"list-cell m-t"},[l("v-uni-text",{staticClass:"cell-tit"},[t._v("消息推送")]),l("v-uni-switch",{attrs:{checked:"",color:"#fa436a"},on:{change:function(e){e=t.$handleEvent(e),t.switchChange(e)}}})],1),l("v-uni-view",{staticClass:"list-cell m-t b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("清除缓存")}}},[l("v-uni-text",{staticClass:"cell-tit"},[t._v("清除缓存")]),l("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),l("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("关于Dcloud")}}},[l("v-uni-text",{staticClass:"cell-tit"},[t._v("关于Dcloud")]),l("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),l("v-uni-view",{staticClass:"list-cell"},[l("v-uni-text",{staticClass:"cell-tit"},[t._v("检查更新")]),l("v-uni-text",{staticClass:"cell-tip"},[t._v("当前版本 1.0.3")]),l("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),l("v-uni-view",{staticClass:"list-cell log-out-btn",on:{click:function(e){e=t.$handleEvent(e),t.toLogout(e)}}},[l("v-uni-text",{staticClass:"cell-tit"},[t._v("退出登录")])],1)],1)},a=[];l.d(e,"a",function(){return i}),l.d(e,"b",function(){return a})}}]);