import{j as a,F as m,a as t,L as d,O as h,r as f,m as p,R as g,b,H as y,c as x,d as c}from"./vendor.0091006f.js";const N=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};N();function D(){return a(m,{children:[a("nav",{className:"w-11/12 m-auto text-center mb-4",children:[t(d,{to:"/shuffler-1D",className:"p-2 inline-flex bg-black text-white m-2",children:"Shuffler 1D"}),t(d,{to:"/shuffler-2D",className:"p-2 inline-flex bg-black text-white m-2",children:"Shuffler 2D"})]}),t(h,{})]})}const u=(o=5)=>{const n=[];for(let s=1;s<=o*o;s++)n.push(s);return n.sort(()=>Math.random()-.5)},R=()=>{const[o,n]=f.exports.useState(u),s=(e,r=e)=>t(p.div,{className:"h-10 m-2 w-6 flex items-center justify-center p-6 rounded-lg font-bold uppercase bg-lime-200",layout:!0,children:e},r),i=()=>{n(u())};return a("div",{className:"text-center",children:[t("div",{className:"inline-grid grid-cols-5 grid-rows-5",children:o.map(e=>s(e))}),t("div",{className:"text-center",children:t("button",{onClick:i,className:"px-4 py-2 bg-pink-400 rounded-md mt-2",children:"Randomize"})})]})},v=()=>{const[o,n]=f.exports.useState(["apple","banana","orange","pear","strawberry","watermelon","pineapple","grape","cherry","peach","mango","kiwi","papaya"]),s=()=>{n(e=>[...e].sort(()=>Math.random()-.5))},i=e=>t(p.div,{className:"h-10 m-2 flex items-center p-6 rounded-lg font-bold uppercase bg-lime-200",layout:!0,children:e},e);return a(m,{children:[o.map(e=>i(e)),t("div",{className:"text-center",children:t("button",{onClick:s,className:"px-4 py-2 bg-pink-400 rounded-md mt-2",children:"Randomize"})})]})};g.render(t(b.StrictMode,{children:t(y,{children:t(x,{children:a(c,{path:"/",element:t(D,{}),children:[t(c,{path:"shuffler-1D",element:t(v,{})}),t(c,{path:"shuffler-2D",element:t(R,{})})]})})})}),document.getElementById("root"));
