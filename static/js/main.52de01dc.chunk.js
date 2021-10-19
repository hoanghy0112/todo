(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(8),r=n.n(i),s=(n(14),n(15),n(2)),l=n(9),o=n(3),u=(n(16),n(4)),j=a.a.createContext(),d=(n(17),n(0)),b=["children","defaultState"],f=["children","buttonTitle","onClick","width"];function p(t){var e=t.children,n=t.defaultState,a=(Object(c.useRef)(""),Object(c.useRef)(null)),i=Object(c.useState)((function(){return n})),r=Object(o.a)(i,2),s=r[0],l=r[1];Object(c.useEffect)((function(){}),[]);return Object(d.jsx)(j.Provider,{value:{popupAppear:function(t){t.stopPropagation(),a.current.classList.add("appear"),a.current.classList.remove("disappear"),l((function(t){return"appear"}))},popupDisappear:function(t){t.stopPropagation(),a.current.classList.remove("appear"),a.current.classList.add("disappear"),l((function(t){return"disappear"}))},groupRef:a,state:s},children:e})}function O(t){var e=t.children,n=t.buttonTitle,i=(t.onClick,t.width),r=void 0===i?"auto":i,l=Object(u.a)(t,f),o=Object(c.useContext)(j),b=o.popupAppear,p=o.popupDisappear,O=o.groupRef,h=o.state;return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsx)("button",Object(s.a)(Object(s.a)({className:"btn",onClick:"appear"===h?p:b},l),{},{children:n})),Object(d.jsxs)("div",{ref:O,className:"popup-group",style:{width:r},children:[Object(d.jsx)("div",{onClick:p,className:"popup-outer"}),Object(d.jsx)("div",{className:"popup-group-content",children:e})]})]})}var h=Object(c.forwardRef)((function(t,e){return a.a.createElement((n=Object(c.forwardRef)((function(t,e){return Object(d.jsx)(O,Object(s.a)(Object(s.a)({},t),{},{ref:e}))})),function(t){var e=t.children,c=t.defaultState,a=Object(u.a)(t,b);return Object(d.jsx)("div",{className:"popup",children:Object(d.jsx)(p,{defaultState:c,children:Object(d.jsxs)(n,Object(s.a)(Object(s.a)({},a),{},{children:[" ",e," "]}))})})}),Object(s.a)(Object(s.a)({},t),{},{ref:e}));var n}));n(19);function m(t){var e=t.changeFilter,n=t.markDoneAll,c=t.deleteAll,a=t.filterMode;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{children:"Todo"}),Object(d.jsxs)(h,{width:250,buttonTitle:"Options",children:[Object(d.jsx)("div",{className:"function-filter",children:Object(d.jsxs)("select",{defaultValue:a.sortType,name:"filter",onChange:function(t){return e((function(e){return Object(s.a)(Object(s.a)({},e),{},{sortType:t.target.value})}))},children:[Object(d.jsx)("option",{value:"",disabled:!1,children:"Default"}),Object(d.jsx)("option",{value:"name",children:"Sort by name"}),Object(d.jsx)("option",{value:"time",children:"Sort by time"})]})}),Object(d.jsx)("hr",{}),Object(d.jsxs)("label",{className:"checkbox",children:[Object(d.jsx)("input",{checked:"incompleted-only"===a.filterType,type:"checkbox",onChange:function(t){return e((function(e){return Object(s.a)(Object(s.a)({},e),{},{filterType:t.target.checked?"incompleted-only":"all"})}))}}),"Incomplete tasks only"]}),Object(d.jsx)("hr",{}),Object(d.jsx)("button",{onClick:function(){n()},className:"btn",children:"Mark done all"}),Object(d.jsx)("button",{onClick:function(){c()},className:"btn warning",children:"Delete all"})]})]})}n(20);var x=["defaultVal","onChange","outerRef","onSubmit"];function v(t){var e=t.defaultVal,n=t.onChange,a=void 0===n?function(){}:n,i=t.outerRef,r=t.onSubmit,l=(Object(u.a)(t,x),Object(c.useState)(Object(s.a)({},e))),j=Object(o.a)(l,2),b=j[0],f=j[1];Object(c.useEffect)((function(){i&&(i.current.value=b.title,i.current.textContent=b.title)}),[b.title]);var p=function(t,e){f((function(t){var n=Object(s.a)(Object(s.a)({},t),e);return a(n),n}))};return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r(b)},onClick:function(t){return t.stopPropagation()},className:"edit-form",children:[Object(d.jsxs)("label",{className:"edit-input",children:[Object(d.jsx)("div",{className:"title",children:"Title"}),Object(d.jsx)("input",{type:"text",value:b.title,onChange:function(t){""===b.title?p(0,{title:t.target.value.toUpperCase()}):p(0,{title:t.target.value})}})]}),Object(d.jsxs)("label",{className:"edit-input",children:[Object(d.jsx)("div",{className:"title",children:"Description"}),Object(d.jsx)("textarea",{rows:5,cols:20,value:b.description,onChange:function(t){return p(0,{description:t.target.value})}})]}),Object(d.jsxs)("label",{className:"edit-input",children:[Object(d.jsx)("div",{className:"title",children:"Date"}),Object(d.jsx)("input",{type:"time",value:b.date,onChange:function(t){return p(0,{date:t.target.value})}})]}),Object(d.jsx)("button",{type:"submit",className:"btn",children:"Submit"})]})}function k(t){var e=t.addTask,n=Object(c.useRef)(),a=Object(c.useState)(""),i=Object(o.a)(a,2),r=i[0],l=i[1],u=Object(c.useRef)({title:"",description:"",data:""});function j(){if(""!==u.current.title){var t=u.current;e(t),l(""),u.current={},n.current.focus()}}function b(t){u.current=Object(s.a)(Object(s.a)({},u.current),t)}return Object(d.jsxs)("div",{className:"input-area",children:[Object(d.jsx)("input",{ref:n,value:r,className:"task-input",onChange:function(t){""===r?(l((function(){return t.target.value.toUpperCase()})),b({title:t.target.value.toUpperCase()})):(l((function(){return t.target.value})),b({title:t.target.value}))},type:"text",placeholder:"Enter your task here..."}),Object(d.jsx)(h,{defaultState:"disappear",width:300,buttonTitle:Object(d.jsx)("i",{className:"fas fa-pencil-alt"}),children:Object(d.jsx)(v,{onChange:b,onSubmit:j,defaultVal:{title:r||""},outerRef:n})}),Object(d.jsx)("button",{onClick:j,className:"btn",children:Object(d.jsx)("i",{className:"fas fa-arrow-right"})})]})}n(21);var g=["task","taskList","editTask","deleteTask","markDone"],N=["taskList"];function S(t){var e=t.task,n=(t.taskList,t.editTask),a=t.deleteTask,i=t.markDone,r=(Object(u.a)(t,g),Object(c.useRef)());return Object(d.jsxs)("li",{onClick:function(){return i(e.id)},className:"task-list-item ".concat(e.isDone?"disable":"active"),children:[Object(d.jsxs)("div",{className:"left-side",children:[Object(d.jsxs)("span",{className:"task-title",children:[Object(d.jsx)("span",{ref:r,className:"task-title-content",children:e.title}),Object(d.jsx)("span",{className:"task-date",children:e.date&&"-- ".concat(e.date)})]}),e.description&&Object(d.jsx)("div",{style:{display:"inline-block",marginLeft:5},children:Object(d.jsx)(h,{width:350,buttonTitle:Object(d.jsx)("i",{style:{fontSize:18},className:"far fa-comment-dots"}),children:Object(d.jsx)("span",{style:{"white-space":"pre-line"},children:e.description})})})]}),Object(d.jsxs)("div",{className:"more-icon",children:[Object(d.jsx)(h,{width:350,buttonTitle:Object(d.jsx)("i",{className:"fas fa-pencil-alt"}),children:Object(d.jsx)(v,{defaultVal:e,onSubmit:function(t){return n(t.id,t)}})}),Object(d.jsxs)("div",{className:"group",children:[Object(d.jsx)("div",{className:"btn btn-curve-left star-icon",onClick:function(t){return function(t,e){t.stopPropagation(),n(e.id,{isStar:!e.isStar})}(t,e)},children:e.isStar?Object(d.jsx)("i",{className:"fas fa-star"}):Object(d.jsx)("i",{className:"far fa-star"})}),Object(d.jsx)("div",{className:"btn btn-curve-right trash-icon",onClick:function(){return a(e.id)},children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})]})]},e.id)}function C(t){var e=t.taskList,n=Object(u.a)(t,N);return Object(d.jsx)("div",{className:"task-area",children:Object(d.jsx)("ul",{className:"task-list",children:e.map((function(t){return Object(d.jsx)(S,Object(s.a)({task:t},n),t.id)}))})})}function y(){var t=Object(c.useState)((function(){return JSON.parse(localStorage.getItem("taskList"))||[]})),e=Object(o.a)(t,2),n=e[0],a=e[1],i=function(t){a((function(e){var n=t instanceof Function?t(e):t;return localStorage.setItem("taskList",JSON.stringify(n)),n}))},r=Object(c.useState)((function(){return JSON.parse(localStorage.getItem("filterMode"))||{sortType:"",filterType:"default"}})),u=Object(o.a)(r,2),j=u[0],b=u[1],f=function(t,e){i((function(n){return n.map((function(n){return n.id===t?Object(s.a)(Object(s.a)({},n),{},{isDone:null!==e&&void 0!==e?e:!n.isDone}):n}))}))};return Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)(m,{filterMode:j,changeFilter:function(t){b((function(e){var n=t instanceof Function?t(e):t;return localStorage.setItem("filterMode",JSON.stringify(n)),n}))},markDoneAll:function(){return n.map((function(t){return f(t.id,!0)}))},deleteAll:function(){return i([])}}),Object(d.jsx)(k,{addTask:function(t){i((function(e){var n;return[].concat(Object(l.a)(e),[{id:Number.parseInt((null===(n=e[e.length-1])||void 0===n?void 0:n.id)||0)+1,isDone:!1,title:t.title,description:t.description||"",date:t.date||"00:00",isStar:!1}])}))}}),Object(d.jsx)(C,{editTask:function(t,e){i((function(n){return n.map((function(n){return n.id===t?Object(s.a)(Object(s.a)({},n),e):n}))}))},deleteTask:function(t){i((function(e){return e.filter((function(e){return e.id!==t}))}))},markDone:f,taskList:function(t){var e=t.sortType,c=t.filterType;return function(){var t=n;if("incompleted-only"===c)t=t.filter((function(t){return!t.isDone}));switch(e){case"name":t.sort((function(t,e){return e.title[0]>t.title[0]?-1:1}));break;case"time":t.sort((function(t,e){return t.date>e.date?1:-1}))}return t=t.reduce((function(t,e){return e.isStar?t.unshift(e):t.push(e),t}),[])}()}(j)})]})}var T=function(){return Object(d.jsx)(a.a.Fragment,{children:Object(d.jsx)(y,{})})},D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),D()}],[[22,1,2]]]);
//# sourceMappingURL=main.52de01dc.chunk.js.map