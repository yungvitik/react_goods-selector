(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),o=c(4),r=c(5),a=c(8),l=c(7),i=c(1),d=c.n(i),u=c(6),j=c.n(u),b=(c(13),c(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(e){Object(a.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:h[8]},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("h1",{children:[t?"".concat(t," is selected"):"No goods selected",t&&Object(b.jsx)("button",{type:"button",className:"clear-button",onClick:function(){return e.setState({selectedGood:null})},children:"X"})]}),Object(b.jsx)("ul",{className:"goodsList",children:h.map((function(c){return Object(b.jsxs)("li",{className:j()("goodsList__item",{"goodsList__item--selected":t===c}),children:[Object(b.jsx)("span",{children:c}),t!==c&&Object(b.jsx)("button",{type:"button",onClick:function(){return e.setState({selectedGood:c})},children:"select"})]})}))})]})}}]),c}(d.a.Component);n.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4e2567ba.chunk.js.map