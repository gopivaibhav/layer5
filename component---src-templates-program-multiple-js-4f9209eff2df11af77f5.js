(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[9206],{78705:function(e,t,n){var r=n(15301).w_;e.exports.O=function(e){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm43.4 289.1c7.5 7.5 7.5 19.8 0 27.3-3.8 3.8-8.7 5.6-13.6 5.6s-9.9-1.9-13.7-5.7l-94-94.3c-6.9-7.6-6.7-19.3.6-26.6l95.4-95.7c7.5-7.5 19.7-7.6 27.3 0 7.5 7.5 7.6 19.7 0 27.3l-81.9 81 79.9 81.1z"}}]})(e)}},98940:function(e,t,n){const r=n(25517);e.exports={MDXRenderer:r}},25517:function(e,t,n){var r=n(861),o=n(3515),a=n(38416),c=n(70215);const l=["scope","children"];function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const p=n(67294),{mdx:u}=n(64983),{useMDXScope:d}=n(18167);e.exports=function(e){let{scope:t,children:n}=e,a=c(e,l);const i=d(t),m=p.useMemo((()=>{if(!n)return null;const e=s({React:p,mdx:u},i),t=Object.keys(e),a=t.map((t=>e[t]));return o(Function,["_fn"].concat(t,[""+n])).apply(void 0,[{}].concat(r(a)))}),[n,t]);return p.createElement(m,s({},a))}},74772:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(67294),o=n(44951),a=n(71082),c=n(98940),l=n(78705),i=n(37242),s=n(33754),p=n(4942);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const m=n(85313).default.div.withConfig({displayName:"ProgramsSinglestyle__ProgramsPageWrapper",componentId:"sc-12ai8dy-0"})(["\nmargin-bottom : 3.125rem;\n\n.rowWrapper{\n    align-items: center;\n    position: relative;\n    top: 1.5rem;\n    padding: 1rem;\n}\n\n.selectWrapper{\n    margin-left: auto;\n    width: 400px;\n}\n\n.backBtn {\n    font-weight: 600;\n    z-index: 2;\n\n    @media screen and (max-width: 62rem) {\n        display: none;\n    }\n    a{\n        display: flex;\n        color: ",";\n        &:hover{\n            color: ",";\n        }\n        \n        h4 {\n            line-height: 1.75rem;\n            margin-left: 0.5rem;\n            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n        }\n        svg {\n            font-size: 1.75rem;\n            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n        }\n    }\n}\n\n.single-post-wrapper{\n    padding: 50px 0 180px 0;\n}\n#programs {\n    padding: 50px 0 0 0;\n}\n.single-post-block{\n    color: ",";\n    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    p{\n        line-height: 29px;\n        letter-spacing: 0.2px;\n    }\n    p+p{\n        margin-top: 30px;  \n    }\n}\n\n@media only screen and (max-width: 912px) {\n     .single-post-block{\n         padding-bottom: 10px;\n     }\n}\n"],(e=>e.theme.primaryColor),(e=>e.theme.linkColor),(e=>e.theme.text)),b={menu:e=>d(d({},e),{},{zIndex:999}),control:e=>d(d({},e),{},{backgroundColor:"white",zIndex:900}),option:(e,t)=>{let{isFocused:n,isSelected:r}=t;return d(d({},e),{},{alignItems:"center",display:"flex",":before":{borderRadius:10,content:'" "',display:"block",marginRight:12,marginLeft:5,height:10,width:10,zIndex:1e3},backgroundColor:r?"rgba(11, 177, 158, 1)":n?"rgba(11, 177, 158, 0.30)":"white",color:r?"white":"black",zIndex:900,":active":d(d({},e[":active"]),{},{backgroundColor:r?"rgba(11, 177, 158, 0.75)":"white"})})},input:e=>d(d({},e),{},{zIndex:900}),placeholder:e=>d(d({},e),{},{zIndex:900}),singleValue:e=>d(d({},e),{},{zIndex:900})},f=e=>d(d({},e),{},{borderRadius:0,colors:d(d({},e.colors),{},{primary50:"#b0e8e2",primary25:"#b0e8e2",primary:"#00b39f"})});var g=m;var h=e=>{let{data:t,options:n,setActiveOption:p,activeOption:u}=e;const{frontmatter:d,body:m}=t;return r.createElement(g,null,r.createElement(i.W2,null,r.createElement(i.X2,{className:"rowWrapper"},r.createElement("div",{className:"backBtn"},r.createElement(a.Link,{to:"/careers/programs"},r.createElement(l.O,null),r.createElement("h4",null,"Go Back"))),Boolean(n)&&r.createElement("div",{className:"selectWrapper"},n.length>1&&r.createElement(o.ZP,{name:"Select Year of Program",defaultValue:n[u],isSearchable:!1,styles:b,options:n,value:n[u],onChange:e=>p((()=>e.value)),theme:f})))),r.createElement(s.Z,{title:d.title}),r.createElement("div",{className:"single-post-wrapper",id:"programs"},r.createElement(i.W2,null,r.createElement("div",{className:"single-post-block"},r.createElement(c.MDXRenderer,null,m)))))}},41142:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return c}});var r=n(67294),o=n(17875),a=n(74772);t.default=e=>{let{data:t}=e;const{0:n,1:o}=(0,r.useState)(0),c=t.allMdx.nodes,l=c.map(((e,t)=>{let n=new Object;return n.label=e.frontmatter.title,n.value=t,n}));return r.createElement(r.Fragment,null,r.createElement(a.Z,{data:c[n],options:l,setActiveOption:o,activeOption:n}))};const c=e=>{let{data:t}=e;const n=t.allMdx.nodes;return r.createElement(o.Z,{title:n[0].frontmatter.program})}},3515:function(e,t,n){var r=n(6015),o=n(69617);function a(t,n,c){return o()?(e.exports=a=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-program-multiple-js-4f9209eff2df11af77f5.js.map