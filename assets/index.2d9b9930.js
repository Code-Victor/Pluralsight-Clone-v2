var N=Object.defineProperty,y=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var v=(r,a,i)=>a in r?N(r,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[a]=i,d=(r,a)=>{for(var i in a||(a={}))b.call(a,i)&&v(r,i,a[i]);if(p)for(var i of p(a))k.call(a,i)&&v(r,i,a[i]);return r},f=(r,a)=>y(r,x(a));import{j as g,R as h,r as m,a as S}from"./vendor.e87ed4eb.js";const L=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function i(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(t){if(t.ep)return;t.ep=!0;const l=i(t);fetch(t.href,l)}};L();const e=g.exports.jsx,s=g.exports.jsxs,O=g.exports.Fragment;function R(){return e("div",{className:"modal",children:"modal"})}const C=["Platform","Products","Resources"],E=()=>{const[r,a]=h.useState("off");return e("nav",{className:"nav-bar",children:s("div",{className:"container nav-bar__wrapper",children:[e("div",{className:"nav-bar__logo",children:e("img",{src:"./images/asset 50.png",alt:"logo"})}),s("div",{className:"nav-bar__links",children:[s("div",{className:"nav-bar__link-group",children:[C.map((i,n)=>e(w,{name:i,modal:r,setModal:a},n)),e("a",{href:"#",className:"nav-item",children:"For Individuals"})]}),s("div",{className:"nav-bar__ctas",children:[e("img",{src:"./images/search-icon.svg",alt:"search",className:"search"}),s("svg",{viewBox:"0 0 350 241",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("rect",{width:"350",height:"40",fill:"white"}),e("rect",{y:"201",width:"350",height:"40",fill:"white"}),e("rect",{x:"121",y:"100",width:"229",height:"41",fill:"white"})]}),e(w,{name:"Sign In",modal:r,setModal:a}),e("div",{className:"cta-btn",children:"try for free"})]})]})]})})};function w({name:r,modal:a,setModal:i}){const[n,t]=h.useState(!1);m.exports.useEffect(()=>{r===a?t(!0):r!==a&&(t(!1),console.log(`not equall to ${r}`))},[i,a]);function l(){i(r),console.log("clicked"),r===a&&n===!0&&(i("off"),console.log("off"))}return s("a",{href:"#",className:"nav-item",onClick:l,children:[r," ",e("svg",{xmlns:"http://www.w3.org/2000/svg",className:n?"flap":"",fill:"none",viewBox:"0 0 24 24",stroke:"white",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})}),n&&e(R,{})]})}const o=["teams","products","workflows","skills","processes"];let c=0;function I(){const[r,a]=h.useState(o[c]);return m.exports.useEffect(()=>{const i=setInterval(()=>{console.log("timer"),c<o.length-1?(c++,a(o[c])):(c=0,a(o[c]))},2800);return()=>clearInterval(i)},[r]),e("div",{className:"hero",children:s("div",{className:"hero__content",children:[s("h1",{className:"",children:["Build better"," ",e("div",{className:"text-fader",children:o.map((i,n)=>e("h1",{className:n===c?"fadeupin":"",children:i}))})]}),e("p",{children:"Face the future with confidence-and with the skills and tools to thrive."}),s("div",{className:"btn-group",children:[e("div",{className:"cta-btn lg decorated",children:"view Plans"}),e("div",{className:"cta-btn lg",children:"try for free"})]}),s("div",{className:"organizations",children:[e("p",{children:"HELPING THOUSANDS OF ORGANIZATIONS BUILD TECH SKILLS AT SCALE ADP"}),s("div",{className:"icons",children:[e("div",{children:e("img",{src:"./images/asset 14.png",alt:"adp"})}),e("div",{children:e("img",{src:"./images/asset 15.png",alt:"adobe"})}),e("div",{children:e("img",{src:"./images/asset 16.png",alt:"vmware"})}),e("div",{children:e("img",{src:"./images/asset 17.png",alt:"fujistu"})}),e("div",{children:e("img",{src:"./images/asset 18.png",alt:"nasdaq"})})]})]})]})})}function _(){return e("div",{className:"spacer",children:e("div",{className:"spacer__gradient"})})}const T=[{name:"JavaScript",courses:11,img_url:"./images/asset 19.png"},{name:"Angular",courses:14,img_url:"./images/asset 20.png"},{name:"Core python",courses:12,img_url:"./images/asset 21.png"},{name:"C#",courses:19,img_url:"./images/asset 22.png"}];function P(){return e("section",{className:"Technology",children:s("div",{className:"container",children:[e("div",{className:"card-container",children:T.map((r,a)=>m.exports.createElement(F,f(d({},r),{key:a})))}),s("div",{className:"text-section",children:[e("h3",{className:"pink-text",children:"trending technologies"}),s("h1",{children:["Popular topics",e("br",{})," to learn now"]}),s("p",{children:["Not sure what technologies to focus on? The Technology Index ranks 850+ technologies by their relative popularity. See what\u2019s topping the charts and get recommended courses to skill up."," "]}),s("div",{className:"text-btn",children:[e("h1",{children:"view the index"}),e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]})]})})}function F({name:r,courses:a,img_url:i}){return s("div",{className:"card",children:[e("img",{src:i,alt:"name",className:"badge-image"}),e("h3",{className:"pink-text",children:"Path"}),e("h1",{children:r}),s("p",{children:[a," ",e("span",{className:"greyed",children:"Courses"})]}),s("div",{className:"text-btn",children:[e("h1",{children:"Take a look"}),e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]})}function A({img_url:r,headline:a,paragraph:i,alt:n}){return s("div",{className:"feature-card",children:[e("img",{src:r,alt:n}),e("h1",{children:a}),e("p",{children:i}),s("div",{className:"text-btn",children:[e("h1",{children:"LearnMore"}),e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]})}function M(){return s("div",{className:"main-card",children:[s("div",{className:"feature-card",children:[e("img",{src:"./images/asset 23.png",alt:"Pluralsight Skills Logo"}),e("h1",{children:"Create better cloud outcomes with hands-on experience"}),e("p",{children:"Your teams need the right skills and a place to practice to ensure they\u2019re ready to deliver on your cloud objectives. Labs enable learners to get hands-on practice in a provisioned cloud environment in AWS, Azure and Google Cloud (Google Cloud powered by Quiklabs)."}),s("div",{className:"text-btn",children:[e("h1",{children:"LearnMore"}),e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]}),e("div",{className:"main-card-img",children:e("img",{src:"./images/asset 24.png",alt:"Cloud Labs interface"})})]})}const D=[{img_url:"./images/asset 25.png",headline:"Empower your teams to grow their skills and their careers",paragraph:"Prepare your team for certification exams with our expert authored content and practice exams.",alt:"Skills Certification prep"},{img_url:"./images/asset 26.png",headline:"Make lasting workflow improvements with insights from your Jira data",paragraph:"Go beyond Jira data and get visibility into what\u2019s happening within your user stories, tasks and bugs. Flow\u2019s delivery module helps you better understand how your team is working and can make lasting improvements to your workflow.",alt:"Delivery Module"},{img_url:"./images/asset 27.png",headline:"Utilize a space for unrestricted exploration",paragraph:"Sandboxes gives your team a safe environment to practice what they're learning from expert-authored courses.",alt:"Sandboxes"}];function W(){return e("section",{className:"Features",children:s("div",{className:"container",children:[e("h3",{className:"pink-text",children:"see What's new"}),e("h1",{children:"Our latest Features"}),e(M,{}),e("div",{className:"S-card-container",children:D.map((r,a)=>e(A,d({},r),a))})]})})}function H({img_url:r,headline:a,paragraph:i,alt:n,key:t}){return s("div",{className:"discover-card",children:[e("img",{src:r,alt:n}),e("h1",{children:a}),e("p",{children:i})]},t)}function j(){return s("div",{className:"vmware",children:[e("div",{className:"vm-image"}),e("div",{className:"vm-text-container",children:s("div",{children:[e("img",{src:"./images/asset 34.png",alt:"scalable tech skill platform"}),e("h1",{children:"Winning the talent war with a scalable tech skills platform"}),e("p",{children:"Evolving a 20-year-old company, increasing innovation and accelerating time to delivery requires fresh skills. See how VMware\u2019s globally dispersed teams use Pluralsight to leverage the latest developments in technology as they find new ways to serve customers."}),e("div",{className:"cta-btn darkend lg",children:"HOW THEY'VE SKILLED UP"})]})})]})}const B=[{img_url:"./images/asset 28.png",headline:"LEARN HOW TO DE-FRICTION YOUR SOFTWARE DEVELOPMENT WORKFLOW WITH FLOW",paragraph:"Take a guided tour through Pluralsight Flow to see how visibility can take your team to the next level",alt:"Flow Demo"},{img_url:"./images/asset 29.png",headline:"COMPARE ONLINE COURSE PROVIDERS",paragraph:"Unbiased reviews to help you make the right decision for your team",alt:"Compare online course providers"},{img_url:"./images/asset 30.png",headline:"WHICH TECH SKILL DEVELOPMENT PRODUCT IS RIGHT FOR YOU?",paragraph:"Reduce decision fatigue with helpful data based on your peers\u2019 experiences",alt:"Which tech skill development product is right for you"},{img_url:"./images/asset 31.jpeg",headline:"WHAT IS PLURALSIGHT SKILLS?",paragraph:"Discover the fastest, most effective path to developing technology skills",alt:"Which tech skill development product is right for you"}];function U(){return e(O,{children:s("section",{className:"discovery ",children:[s("div",{className:"container",children:[e("h3",{className:"pink-text",children:"see What's new"}),e("h1",{children:"Our latest Features"}),e("div",{className:"discover-cards",children:B.map((r,a)=>e(H,d({},r),a))})]}),e(j,{})]})})}function z(){return m.exports.useState(0),s("div",{className:"App",children:[e(E,{}),e(I,{}),e(_,{}),e(P,{}),e(W,{}),e(U,{})]})}S.render(e(h.StrictMode,{children:e(z,{})}),document.getElementById("root"));