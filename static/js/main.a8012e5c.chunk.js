(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(35)},24:function(e,a,t){},26:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),o=t(13),r=t.n(o),c=(t(24),t(8));t(26);function s(e){console.log(e.mode);e.mode;return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link","aria-current":"page",href:"/"},"Home"))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}function i(e){var a=Object(l.useState)(""),t=Object(c.a)(a,2),o=t[0],r=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"white"}},n.a.createElement("h1",null," ",e.heading," "),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",value:o,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"#13466e",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"10"})),n.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var a=o.toUpperCase();r(a),e.showAlert("Converted to Upper Case!","success")}},"Conver to Upper Case"),n.a.createElement("button",{className:"btn btn-primary",onClick:function(){var a=o.toLowerCase();r(a),e.showAlert("Converted to Lower Case!","success")}},"Conver to Lower Case"),n.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("I am Copy");document.getElementById("myBox");o.select(),o.setSelectionRange(0,9999),navigator.clipboard.writeText(o.value),e.showAlert("TextCopied to ClipBoard!","success")}},"Copy Text"),n.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var e=o.split(/[ ]+/);r(e.join(" "))}},"Remove Extra Spaces")),n.a.createElement("div",{className:"container my-10",style:{color:"white"}},n.a.createElement("h2",null,"Your text summary"),n.a.createElement("p",null," ",o.split(" ").length," words and ",o.length," character"),n.a.createElement("p",null," ",.008*o.split(" ").length," Minutes Read"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,o.length>0?o:"Enter Sometthing to prview here")))}function m(e){var a={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"==e.mode?"rgb(36 74 104)":"white"};return n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"my-3",style:{color:"dark"===e.mode?"white":"#042743"}},"About Us"),n.a.createElement("div",{className:"accordion",id:"accordionExample"},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},n.a.createElement("strong",null,"Analyze Your text "))),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or"))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},n.a.createElement("strong",null,"Free to use "))),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},n.a.createElement("strong",null,"Browser Compatible "))),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.")))))}s.defaultProps={title:"Set title here",aboutText:"About"};var d=function(e){return e.alert&&n.a.createElement("div",{className:"alert alert-".concat("props.aler.type"," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type))," :",e.alert.msg,n.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"}))},u=t(14),b=t(0);var p=function(){var e=Object(l.useState)("light"),a=Object(c.a)(e,2),t=a[0],o=a[1],r=Object(l.useState)(null),p=Object(c.a)(r,2),h=p[0],g=p[1],E=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,null,n.a.createElement(s,{title:"TextUtils",mode:t,toggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="#042743",E("Dark mode has been enabled","success")):(o("light"),document.body.style.backgroundColor="white",E("Light mode has been enabled","success"))},key:new Date}),n.a.createElement(d,{alert:h}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(b.c,null,n.a.createElement(b.a,{exact:!0,path:"/about"},n.a.createElement(m,{mode:t})),n.a.createElement(b.a,{exact:!0,path:"/"},n.a.createElement(i,{showAlert:E,heading:"Try TextUtils - word counter, character counter, remove extra spaces",mode:t}))))))},h=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,36)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,r=a.getTTFB;t(e),l(e),n(e),o(e),r(e)})};r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),h()}},[[16,3,2]]]);
//# sourceMappingURL=main.a8012e5c.chunk.js.map