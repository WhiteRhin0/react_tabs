(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),l=n(2),r=n.n(l),o=n(3),i=n(4),u=n(6),s=n(5),m=(n(12),n(13),function(t){var e=t.tabs,n=t.handleChange;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,e.map((function(t,e){return c.a.createElement("button",{key:t.title,className:"button",type:"button",onClick:function(){n(e)}},t.title)}))))}),b=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],h=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))).state={activeTitleId:0},t.handleChange=function(e){t.setState({activeTitleId:e})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.activeTitleId;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"React tabs"),c.a.createElement(m,{tabs:b,handleChange:this.handleChange}),c.a.createElement("div",{className:"content"},b[t].content))}}]),n}(c.a.Component);r.a.render(c.a.createElement(h,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.a7d4ac49.chunk.js.map