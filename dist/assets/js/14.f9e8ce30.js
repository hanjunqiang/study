(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{360:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"prevent和-passive区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prevent和-passive区别"}},[s._v("#")]),s._v(" .prevent和.passive区别")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("重点摘要:")]),s._v(" "),a("ul",[a("li",[a("h4",{attrs:{id:"prevent-是拦截默认事件，passive是不拦截默认事件。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prevent-是拦截默认事件，passive是不拦截默认事件。"}},[s._v("#")]),s._v(" prevent 是拦截默认事件，passive是不拦截默认事件。"),a("br")])]),s._v(" "),a("li",[a("h4",{attrs:{id:"passive和prevent冲突，不能同时绑定在一个监听器上。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#passive和prevent冲突，不能同时绑定在一个监听器上。"}},[s._v("#")]),s._v(" passive和prevent冲突，不能同时绑定在一个监听器上。")])])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/f26e1864dd59",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考地址>"),a("OutboundLink")],1)])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("详解")]),s._v(" "),a("ul",[a("li",[a("h4",{attrs:{id:"prevent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prevent"}},[s._v("#")]),s._v(" prevent: "),a("br")])])]),s._v(" "),a("p",[s._v('某些标签拥有自身的默认事件，如a[href="#"]，button[type="submit"] 这种标签在冒泡结束后会开始执行默认事件。注意默认事件虽然是冒泡后开始，但不会因为stop阻止事件传递而停止。'),a("br")]),s._v(" "),a("ul",[a("li",[a("h4",{attrs:{id:"passive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#passive"}},[s._v("#")]),s._v(" passive: "),a("br")])])]),s._v(" "),a("p",[s._v("明明默认执行为什么会设置这样一个修饰符?"),a("br"),s._v("\n【浏览器只有等内核线程执行到事件监听器对应的JavaScript代码时，才能知道内部是否会调用preventDefault函数来阻止事件的默认行为，所以浏览器本身是没有办法对这种场景进行优化的。这种场景下，用户的手势事件无法快速产生，会导致页面无法快速执行滑动逻辑，从而让用户感觉到页面卡顿。】"),a("br")]),s._v(" "),a("p",[s._v("通俗点说就是每次事件产生，浏览器都会去查询一下是否有preventDefault阻止该次事件的默认动作。我们加上passive就是为了告诉浏览器，不用查询了，我们没用preventDefault阻止默认动作。")]),s._v(" "),a("p",[s._v("这里一般用在滚动监听，@scoll，@touchmove 。因为滚动监听过程中，移动每个像素都会产生一次事件，每次都使用内核线程查询prevent会使滑动卡顿。我们通过passive将内核线程查询跳过，可以大大提升滑动的流畅度。")])]),s._v(" "),a("h2",{attrs:{id:"图片加载失败404的处理方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片加载失败404的处理方式"}},[s._v("#")]),s._v(" 图片加载失败404的处理方式")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.shuyong.net/chengxu/1089.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考地址"),a("OutboundLink")],1)])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("详解")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"img100"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"item.photo"')]),s._v(" @error"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"onError(item)"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("onError")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'图片加载失败:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//方式1")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" img "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("srcElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/assets/image/newspage/zhanweitu@2x.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("error "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//解绑error事件,避免图片出现抖动问题")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("br")]),s._v(" "),a("h2",{attrs:{id:"路由跳转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由跳转"}},[s._v("#")]),s._v(" 路由跳转")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//A-B-C 从C-B返回时,B还能获取到query参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"longcontract"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    query"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" code\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//下一页获取参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//A-B-C 从C-B返回时,B不能获取到params参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"longcontract"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    params"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" code\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("br")])])}),[],!1,null,null,null);t.default=e.exports}}]);