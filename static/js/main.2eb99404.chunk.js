(this["webpackJsonpverify-cwipedia"]=this["webpackJsonpverify-cwipedia"]||[]).push([[0],{22:function(e,a,t){},23:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var c=t(9),s=t.n(c),i=t(17),n=t.n(i),r=(t(22),t(23),t(2)),l=function(){return Object(r.jsx)("div",{className:"text-center",children:Object(r.jsx)("footer",{children:Object(r.jsxs)("div",{className:"container overflow-hidden",children:[Object(r.jsx)("a",{"aria-hidden":"true",className:"fa fa-envelope",href:"mailto:business@cwipedia.in",id:"devso",rel:"noreferrer",target:"_blank",title:"mail us"}),Object(r.jsx)("a",{"aria-hidden":"true",className:"fa fa-instagram",href:"http://instagram.com/cwipedia.in",id:"devso",rel:"noreferrer",target:"_blank",title:"follow us"}),Object(r.jsx)("a",{"aria-hidden":"true",className:"fa fa-twitter",href:"https://twitter.com/cwipedia",id:"devso",rel:"noreferrer",target:"_blank",title:"follow us"}),Object(r.jsx)("a",{"aria-hidden":"true",className:"fa fa-linkedin",href:"https://www.linkedin.com/company/cwipedia",id:"devso",rel:"noreferrer",target:"_blank",title:"follow us"}),Object(r.jsx)("a",{"aria-hidden":"true",className:"fa fa-telegram",href:"https://telegram.me/msbteresources",id:"devso",rel:"noreferrer",target:"_blank",title:"Join group"}),Object(r.jsx)("a",{"aria-hidden":"true",className:"fa fa-youtube-play",href:"https://www.youtube.com/channel/UCzARaaZ1furvIwUaNUsORWQ",id:"devso",rel:"noreferrer",target:"_blank",title:"follow us"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"row gx-5",children:[Object(r.jsxs)("div",{className:"col-sm",children:[Object(r.jsx)("p",{className:"h4",children:"cwipedia.in"}),Object(r.jsx)("p",{className:"h5",children:"Pune, Maharashtra"})]}),Object(r.jsxs)("div",{className:"col-sm",children:[Object(r.jsx)("a",{href:"https://career.cwipedia.in",className:"link",children:"Career"}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"https://training.cwipedia.in",className:"link",children:"Training"})]}),Object(r.jsxs)("div",{className:"col-sm",children:[Object(r.jsx)("a",{href:"https://www.cwipedia.in/p/terms-and-conditions.html",className:"link",children:"Terms"}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"https://www.cwipedia.in/p/contact-us-demofont-familyarial.html",className:"link",children:"Contact"})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("p",{children:["Copyright \xa92017-2021 All rights reserved | ",Object(r.jsx)("a",{className:"link",href:"https://www.cwipedia.in",children:"cwipedia.in"})]})]})]})})})},d=t(11),j=t(12);j.a.initializeApp({apiKey:"AIzaSyC9-dhyp_cH_CDLrmyylEGXRO1TzFBnOks",authDomain:"verify-badge-cwi.firebaseapp.com",projectId:"verify-badge-cwi",storageBucket:"verify-badge-cwi.appspot.com",messagingSenderId:"218337438048",appId:"1:218337438048:web:2fcb57053266f9d6dd9605",measurementId:"G-S525BJTW6C"}),j.a.analytics();var o=j.a,b=t.p+"static/media/badge.2d6b8ddd.gif",m=t.p+"static/media/tbadge.c960c32c.png",h=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:"cbtn btn",id:"Download",children:"Donwload Badge"}),Object(r.jsx)("div",{id:"startBadge",className:"Gen-Badge d-flex justify-content-center ",children:Object(r.jsx)("div",{className:"card badge-card shadow",children:Object(r.jsxs)("div",{className:"card-body b-body text-center",children:[Object(r.jsx)("img",{src:m,className:"img-fluid",alt:"Internship completion Badge | cwipedia"}),Object(r.jsx)("p",{className:"display-5",children:"This is awarded to"}),Object(r.jsx)("p",{className:"h2",id:"getName"}),Object(r.jsx)("p",{className:"h6",children:"for successfully completing the internship program in Web Development."}),Object(r.jsx)("p",{id:"award"}),Object(r.jsxs)("div",{className:"row gy-5",children:[Object(r.jsxs)("div",{className:"col-6",children:[Object(r.jsx)("hr",{}),Object(r.jsx)("p",{id:"badgenum"})]}),Object(r.jsxs)("div",{className:"col-6",children:[Object(r.jsx)("hr",{}),Object(r.jsx)("h6",{children:"Shivam Hande"}),Object(r.jsx)("p",{children:"Instructor"})]})]})]})})})]})},p=function(){var e=o.firestore(),a=Object(c.useState)(""),t=Object(d.a)(a,2),s=t[0],i=t[1],n=Object(c.useState)(""),l=Object(d.a)(n,2),j=l[0],m=l[1],p=Object(c.useState)(""),u=Object(d.a)(p,2),O=u[0],f=u[1],x=Object(c.useState)(!1),g=Object(d.a)(x,2),v=g[0],N=g[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container text-center",children:[Object(r.jsx)("img",{src:b,className:"img-fluid "}),Object(r.jsx)("p",{className:"display-6",children:Object(r.jsx)("i",{className:"fa fa-id-badge","aria-hidden":"true",children:" Verify Badge "})}),Object(r.jsxs)("form",{onSubmit:function(a){a.preventDefault(),e.collection("Verify-Badge-No").doc(s).get().then((function(e){var a=e.data();e.exists?(f("Badge Number "+s+" is validated"),setTimeout((function(){f("")}),2e3),N(!v),document.getElementById("getName").innerHTML=a.Name,document.getElementById("award").innerHTML="Awarded on the "+a.date,document.getElementById("badgenum").innerHTML="Barde No: "+s,console.log(a)):(m("Badge Number "+s+" is invalid"),setTimeout((function(){m("")}),2e3))})),i("")},children:[O&&Object(r.jsx)("div",{className:"alert alert-success",role:"alert",children:O}),j&&Object(r.jsx)("div",{className:"alert alert-danger",role:"alert",children:j}),Object(r.jsxs)("div",{className:"row g-2",children:[Object(r.jsx)("div",{className:"",children:Object(r.jsxs)("div",{className:"form-floating",children:[Object(r.jsx)("input",{className:"form-control no-border",placeholder:"Leave a comment here",id:"floatingTextarea",value:s,onClick:function(){return N(!1)},onChange:function(e){return i(e.target.value)},required:!0}),Object(r.jsx)("label",{htmlFor:"floatingInput",children:"Enter Your Badge Number"})]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{type:"submit",className:"btn cbtn",children:"Submit"}),v?Object(r.jsx)(h,{}):null]})]})]})]})})},u=function(){var e=Object(c.useState)((function(){return!1})),a=Object(d.a)(e,2);a[0],a[1];return Object(r.jsx)("div",{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light shadow p-3 mb-5",children:Object(r.jsxs)("div",{className:"container-fluid cnav",children:[Object(r.jsx)("img",{src:"https://lh3.googleusercontent.com/-6QncX8Ykhmk/YJI8bf1ICnI/AAAAAAAAJWk/Alp356K3k0IgBVBk32_tOE3I0zit2ZM1gCLcBGAsYHQ/cplogo%2B%2528another%2Bcopy%2529.png",className:"img-fluid logo"}),Object(r.jsx)("a",{className:"navbar-brand",href:"/",children:"Home"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"https://www.cwipedia.in",children:"blog"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"https://career.cwipedia.in",children:"career"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"https://news.cwipedia.in",children:"News"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link",href:"https://www.cwipedia.in/p/contact-us-demofont-familyarial.html",children:"Contact"})})]}),Object(r.jsx)("div",{className:"d-flex justify-content-center",children:Object(r.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"})})]})]})})})};var O=function(){return document.addEventListener("contextmenu",(function(e){e.preventDefault()})),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(u,{}),Object(r.jsx)(p,{}),Object(r.jsx)(l,{})]})};n.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.2eb99404.chunk.js.map