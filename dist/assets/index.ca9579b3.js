var u=Object.defineProperty;var f=(r,t,o)=>t in r?u(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;var a=(r,t,o)=>(f(r,typeof t!="symbol"?t+"":t,o),o);import{j as d,r as m,R as h,a as p}from"./vendor.e69892b4.js";const y=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}};y();const i=d.exports.jsx,c=d.exports.jsxs;class g extends m.exports.Component{constructor(){super();a(this,"handleClick",()=>{this.setState({local:"en-US"})});this.state={time:new Date,local:"bn-BD"}}componentDidMount(){setInterval(()=>{this.tick()},1e3)}componentWillUnmount(){clearInterval(this.tick())}tick(){this.setState({time:new Date})}render(){const{time:t,local:o}=this.state;return c("div",{children:[i("h1",{children:"Clock Component"}),c("h2",{children:["now ",t.toLocaleTimeString(o)]}),c("button",{type:"button",onClick:this.handleClick,children:[" ","click here"," "]})]})}}function x(){return i("div",{children:i(g,{})})}h.render(i(p.StrictMode,{children:i(x,{})}),document.getElementById("root"));
