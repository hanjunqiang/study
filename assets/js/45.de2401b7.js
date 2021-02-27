(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{319:function(t,e,a){"use strict";a.r(e);var r=a(10),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vue中文文档-重点摘录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue中文文档-重点摘录"}},[t._v("#")]),t._v(" Vue中文文档,重点摘录")]),t._v(" "),a("ul",[a("li",[a("h4",{attrs:{id:"虽然没有完全遵循-mvvm-模型，但是-vue-的设计也受到了它的启发。因此在文档中经常会使用-vm-viewmodel-的缩写-这个变量名表示-vue-实例。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虽然没有完全遵循-mvvm-模型，但是-vue-的设计也受到了它的启发。因此在文档中经常会使用-vm-viewmodel-的缩写-这个变量名表示-vue-实例。"}},[t._v("#")]),t._v(" 虽然没有完全遵循 MVVM 模型，但是 Vue 的设计也受到了它的启发。因此在文档中经常会使用 vm (ViewModel 的缩写) 这个变量名表示 Vue 实例。")])]),t._v(" "),a("li",[a("h4",{attrs:{id:"所有的-vue-组件都是-vue-实例，并且接受相同的选项对象-一些根实例特有的选项除外-。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#所有的-vue-组件都是-vue-实例，并且接受相同的选项对象-一些根实例特有的选项除外-。"}},[t._v("#")]),t._v(" 所有的 Vue 组件都是 Vue 实例，并且接受相同的"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("选项对象"),a("OutboundLink")],1),t._v(" (一些根实例特有的选项除外)。")])]),t._v(" "),a("li",[a("h4",{attrs:{id:"一个-vue-实例被创建时，它将-data-对象中的所有的-property-加入到-vue-的响应式系统中。当这些-property-的值发生改变时，视图将会产生-响应-，即匹配更新为新的值。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个-vue-实例被创建时，它将-data-对象中的所有的-property-加入到-vue-的响应式系统中。当这些-property-的值发生改变时，视图将会产生-响应-，即匹配更新为新的值。"}},[t._v("#")]),t._v(" 一个 Vue 实例被创建时，它将 data 对象中的所有的 property 加入到 Vue 的响应式系统中。当这些 property 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。")])])]),t._v(" "),a("p",[a("code",[t._v("值得注意的是: 只有当实例被创建时就已经存在于 data 中的 property 才是响应式的。")])]),t._v(" "),a("ul",[a("li",[a("h4",{attrs:{id:"模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如-math-和-date-。你不应该在模板表达式中试图访问用户定义的全局变量。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如-math-和-date-。你不应该在模板表达式中试图访问用户定义的全局变量。"}},[t._v("#")]),t._v(" 模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。")])])]),t._v(" "),a("p",[a("code",[t._v("全局变量的一个白名单包括: 'Infinity,undefined,NaN,isFinite,isNaN,' 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' 'require'")])]),t._v(" "),a("ul",[a("li",[a("h4",{attrs:{id:"修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修饰符"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/syntax.html#%E4%BF%AE%E9%A5%B0%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("修饰符"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[a("code",[t._v("修饰符 (modifier) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。 例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：")])]),t._v(" "),a("h2",{attrs:{id:"vue的创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue的创建"}},[t._v("#")]),t._v(" Vue的创建")]),t._v(" "),a("p",[t._v("一个简单的 Vue 实例只需要四步即可")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[a("span",{staticStyle:{color:"red"}},[t._v("创建vue实例")])]),t._v(" "),a("img",{staticStyle:{"margin-top":"10px"},attrs:{src:t.$withBase("/vue/vue创建.png"),alt:"暂无图片"}}),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"数据与方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据与方法"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/instance.html#%E6%95%B0%E6%8D%AE%E4%B8%8E%E6%96%B9%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据与方法"),a("OutboundLink")],1)]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[a("span",{staticStyle:{color:"red"}},[t._v("改变data属性,视图刷新的条件")])]),t._v(" "),a("img",{staticStyle:{"margin-top":"10px"},attrs:{src:t.$withBase("/vue/数据与方法.jpg"),alt:"暂无图片"}}),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"不要在选项-property-或回调上使用箭头函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不要在选项-property-或回调上使用箭头函数"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/instance.html#%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90",target:"_blank",rel:"noopener noreferrer"}},[t._v("不要在选项 property 或回调上使用箭头函数"),a("OutboundLink")],1)]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[a("span",{staticStyle:{color:"red"}},[t._v("箭头函数错误用法1")])]),t._v(" "),a("img",{staticStyle:{"margin-top":"10px"},attrs:{src:t.$withBase("/vue/箭头函数错误用法1.jpg"),alt:"暂无图片"}}),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"声明周期函数示意图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明周期函数示意图"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA",target:"_blank",rel:"noopener noreferrer"}},[t._v("声明周期函数示意图"),a("OutboundLink")],1)]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[a("span",{staticStyle:{color:"red"}},[t._v("声明周期函数示意图")])]),t._v(" "),a("img",{staticStyle:{"margin-top":"10px"},attrs:{src:t.$withBase("/vue/声明周期函数1.png"),alt:"暂无图片"}}),t._v(" "),a("br")])])}),[],!1,null,null,null);e.default=s.exports}}]);