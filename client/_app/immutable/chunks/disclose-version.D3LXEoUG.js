import{n as _}from"./runtime.BDwWgFjG.js";const N=1,y=2,P=64,g=1,D=2,O=4,b=8,E=1,T=2,p="[",I="[!",h="]",w={},x=Symbol(),L=["touchstart","touchmove","touchend"];let o=!1;function H(e){o=e}let r;function f(e){return r=e}function S(){return r=r.nextSibling}function M(e){o&&(r=e)}function U(){for(var e=0,n=r;;){if(n.nodeType===8){var t=n.data;if(t===h){if(e===0)return n;e-=1}else(t===p||t===I)&&(e+=1)}var s=n.nextSibling;n.remove(),n=s}}var d;function Y(){if(d===void 0){d=window;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function c(){return document.createTextNode("")}function B(e){if(!o)return e.firstChild;var n=r.firstChild;return n===null&&(n=r.appendChild(c())),f(n),n}function V(e,n){if(!o){var t=e.firstChild;return t instanceof Comment&&t.data===""?t.nextSibling:t}return r}function k(e,n=!1){if(!o)return e.nextSibling;var t=r.nextSibling,s=t.nodeType;if(n&&s!==3){var a=c();return t==null||t.before(a),f(a),a}return f(t),t}function F(e){e.textContent=""}function A(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function i(e,n){var t;(t=_).nodes??(t.nodes={start:e,end:n})}function Z(e,n){var t=(n&E)!==0,s=(n&T)!==0,a,l=!e.startsWith("<!>");return()=>{if(o)return i(r,null),r;a||(a=A(l?e:"<!>"+e),t||(a=a.firstChild));var u=s?document.importNode(a,!0):a.cloneNode(!0);if(t){var m=u.firstChild,v=u.lastChild;i(m,v)}else i(u,u);return u}}function j(){if(!o){var e=c();return i(e,e),e}var n=r;return n.nodeType!==3&&(n.before(n=c()),f(n)),i(n,n),n}function q(){if(o)return i(r,null),r;var e=document.createDocumentFragment(),n=document.createComment(""),t=c();return e.append(n,t),i(n,t),e}function z(e,n){if(o){_.nodes.end=r,S();return}e!==null&&e.before(n)}const R="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(R);export{y as A,A as B,N as E,p as H,L as P,x as U,S as a,z as b,q as c,w as d,c as e,V as f,f as g,o as h,r as i,h as j,Y as k,F as l,i as m,B as n,k as o,I as p,U as q,M as r,H as s,Z as t,O as u,g as v,D as w,b as x,j as y,P as z};
