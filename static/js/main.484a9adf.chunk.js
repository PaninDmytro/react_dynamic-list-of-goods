(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{10:function(t,n,e){},12:function(t,n,e){"use strict";e.r(n);var o=e(3),c=e.n(o),r=e(5),a=e(1),s=(e(10),e(4)),u=e.n(s),i=e(0),d=function(t){var n=t.goods;return Object(i.jsx)("ul",{children:n.map((function(t){return Object(i.jsx)("li",{"data-cy":"good",className:u()({redButton:"red"===t.color,blueButton:"blue"===t.color,greenButton:"green"===t.color}),children:t.name},t.id)}))})};function l(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var b=function(){var t=Object(a.useState)([]),n=Object(r.a)(t,2),e=n[0],o=n[1],c=Object(a.useCallback)((function(){l().then(o)}),[]),s=Object(a.useCallback)((function(){l().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then(o)}),[]),u=Object(a.useCallback)((function(){l().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then(o)}),[]);return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"Dynamic list of Goods"}),Object(i.jsx)("button",{type:"button","data-cy":"all-button",onClick:c,children:"Load all goods"}),Object(i.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:s,children:"Load 5 first goods"}),Object(i.jsx)("button",{type:"button","data-cy":"red-button",onClick:u,children:"Load red goods"}),Object(i.jsx)(d,{goods:e})]})};c.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.484a9adf.chunk.js.map