import{u as v,j as l,F as b,a as t,L as y,m as d,O as N,r as c,A as S,R as w,b as D,H as R,c as L,d as h}from"./vendor.5a306dd6.js";const M=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}};M();const O=["/shuffler-1D","/shuffler-2D","/stagger","/timer"];function k(){const r=v();return l(b,{children:[t("nav",{className:"w-11/12 m-auto text-center mb-4",children:O.map(n=>r.pathname===n?l(y,{to:n,className:"p-2 inline-flex  text-blue-700 m-2 relative",children:[n.slice(1),t(d.div,{className:"absolute border-b-2 border-green-700 w-10/12 mt-6",layoutId:"highlight"})]},n):t(y,{to:n,className:"p-2 inline-flex  text-blue-700 m-2",children:n.slice(1)},n))}),t(N,{})]})}const x=(r=5)=>{const n=[];for(let s=1;s<=r*r;s++)n.push(s);return n.sort(()=>Math.random()-.5)},C=()=>{const[r,n]=c.exports.useState(x),s=(e,i=e)=>t(d.div,{className:"h-10 m-2 w-6 flex items-center justify-center p-6 rounded-lg font-bold uppercase bg-lime-200",layout:!0,children:e},i),a=()=>{n(x())};return l("div",{className:"text-center",children:[t("div",{className:"inline-grid grid-cols-5 grid-rows-5",children:r.map(e=>s(e))}),t("div",{className:"text-center",children:t("button",{onClick:a,className:"px-4 py-2 bg-pink-400 rounded-md mt-2",children:"Randomize"})})]})},j=()=>{const[r,n]=c.exports.useState(["apple","banana","orange","pear","strawberry","watermelon","pineapple","grape"]),s=()=>{n(e=>[...e].sort(()=>Math.random()-.5))},a=e=>t(d.div,{className:"h-10 m-2 flex items-center p-6 rounded-lg font-bold uppercase bg-lime-200",layout:!0,children:e},e);return l(b,{children:[r.map(e=>a(e)),t("div",{className:"text-center",children:t("button",{onClick:s,className:"px-4 py-2 bg-pink-400 rounded-md mt-2",children:"Randomize"})})]})},A=()=>{const r=["apple","banana","orange","pear","strawberry","watermelon","pineapple","grape"],[n,s]=c.exports.useState("hidden"),a=(u,p)=>t(d.li,{className:"h-10 m-2 flex items-center p-6 rounded-lg font-bold uppercase bg-lime-200",variants:p,children:u},u),e=u=>{s(p=>p==="hidden"?"visible":"hidden")},i={hidden:{height:"0px",visibility:"hidden",transition:{when:"afterChildren",staggerChildren:.1}},visible:{height:"100%",visibility:"visible",transition:{when:"beforeChildren",staggerChildren:.1}}},m={visible:{opacity:1,x:0},hidden:{opacity:0,x:-250}};return l(b,{children:[t(d.ul,{initial:"hidden",animate:n,variants:i,className:"bg-slate-100",children:r.map(u=>a(u,m))}),t("div",{className:"text-center",children:t("button",{onClick:e,className:"px-4 py-2 bg-pink-400 rounded-md my-2",children:"Animate"})})]})},f=r=>r.toString().padStart(2,0)[0],g=r=>r.toString().padStart(2,0)[1],E={y:50,opacity:0},F={y:-50,opacity:0},z={y:0,opacity:1},o=([r,n],s)=>t(d.div,{className:`absolute left-${s*8} flex justify-center items-center w-8 h-12`,initial:E,exit:F,animate:z,children:n},r+n),H=()=>{const[r,n]=c.exports.useState(new Date),s=c.exports.useRef({});return c.exports.useEffect(()=>{s.current={h1:f(r.getHours()),h2:g(r.getHours()),m1:f(r.getMinutes()),m2:g(r.getMinutes()),s1:f(r.getSeconds()),s2:g(r.getSeconds())},setTimeout(n,1e3,new Date)},[r]),t("h1",{className:"flex text-5xl relative w-72 m-auto mt-20",children:l(S,{children:[o(["h1",s.current.h1],0),o(["h2",s.current.h2],1),o(["x",":"],2),o(["m1",s.current.m1],3),o(["m2",s.current.m2],4),o(["y",":"],5),o(["s1",s.current.s1],6),o(["s2",s.current.s2],7)]})})};w.render(t(D.StrictMode,{children:t(R,{children:t(L,{children:l(h,{path:"/",element:t(k,{}),children:[t(h,{path:"shuffler-1D",element:t(j,{})}),t(h,{path:"shuffler-2D",element:t(C,{})}),t(h,{path:"stagger",element:t(A,{})}),t(h,{path:"timer",element:t(H,{})})]})})})}),document.getElementById("root"));