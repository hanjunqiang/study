(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{373:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"宏定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏定义"}},[t._v("#")]),t._v(" 宏定义")]),t._v(" "),a("h2",{attrs:{id:"获取手机型号方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取手机型号方法"}},[t._v("#")]),t._v(" 获取手机型号方法")]),t._v(" "),a("blockquote",[a("p",[t._v("可以参考ios项目中的分类:NSString+Extension.m "),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.jianshu.com/p/5ae0a953a659",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考地址>"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"导航高度、状态高度、tabbar高度常用宏定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导航高度、状态高度、tabbar高度常用宏定义"}},[t._v("#")]),t._v(" 导航高度、状态高度、TabBar高度常用宏定义")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("摘要")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获得屏幕的宽高")]),t._v("\n#define "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kScreenWidth")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIScreen mainScreen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bounds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n#define "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kScreenHeight")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIScreen mainScreen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bounds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//iPhoneX / iPhoneXS")]),t._v("\n#define  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isIphoneX_XS")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kScreenWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("375.")]),t._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" kScreenHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("812.")]),t._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//iPhoneXR / iPhoneXSMax")]),t._v("\n#define  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isIphoneXR_XSMax")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kScreenWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("414.")]),t._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" kScreenHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("896.")]),t._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//异性全面屏")]),t._v("\n#define   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFullScreen")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isIphoneX_XS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" isIphoneXR_XSMax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Status bar height.")]),t._v("\n#define  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("StatusBarHeight")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isFullScreen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("44.")]),t._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Navigation bar height.")]),t._v("\n#define  NavigationBarHeight  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("44.")]),t._v("f\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Tabbar height.")]),t._v("\n#define  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TabbarHeight")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isFullScreen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49.")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("34.")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49.")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Tabbar safe bottom margin.")]),t._v("\n#define  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TabbarSafeBottomMargin")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isFullScreen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("34.")]),t._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Status bar & navigation bar height.")]),t._v("\n#define  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("StatusBarAndNavigationBarHeight")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isFullScreen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("88.")]),t._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64.")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);