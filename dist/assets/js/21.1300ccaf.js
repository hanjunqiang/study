(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{367:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"科蓝平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#科蓝平台"}},[t._v("#")]),t._v(" 科蓝平台")]),t._v(" "),a("h2",{attrs:{id:"上线前的准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上线前的准备"}},[t._v("#")]),t._v(" 上线前的准备")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("d")]),t._v(" "),a("ul",[a("li",[a("h4",{attrs:{id:"注册表的中心服务器文件地址需要改为后管的域名-ip和端口-否则使用发布版注册表启动不了app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册表的中心服务器文件地址需要改为后管的域名-ip和端口-否则使用发布版注册表启动不了app"}},[t._v("#")]),t._v(" 注册表的中心服务器文件地址需要改为后管的域名(IP和端口),否则使用发布版注册表启动不了APP")])])]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"在module中获取webview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在module中获取webview"}},[t._v("#")]),t._v(" 在module中获取webview")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("方法:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" 循环查找 self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weexInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("viewController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("subViews\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"自定义导航右侧的按钮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义导航右侧的按钮"}},[t._v("#")]),t._v(" 自定义导航右侧的按钮")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("具体实现:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自定义loadingtop")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MADSingleClass getInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("customerLoadingTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("MADContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//        NSString *vule = [context getParam:@"key"];')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//        if ([vule isEqualToString:@""]) {')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//            //...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        }else{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//            //....")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//        }")]),t._v("\n        \n        UIButton "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("leftBtn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIButton buttonWithType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("UIButtonTypeCustom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        leftBtn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("frame  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CGRectMake")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("leftBtn setImage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("UIImage imageNamed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MADCoreSource.bundle/cancel"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" forState"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("UIControlStateNormal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("leftBtn addTarget"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("context action"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("finish"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" forControlEvents"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("UIControlEventTouchUpInside"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" leftBtn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("br")])])}),[],!1,null,null,null);s.default=e.exports}}]);