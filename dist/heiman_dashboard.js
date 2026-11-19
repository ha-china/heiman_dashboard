/* HEIMAN Dashboard v0.1.0 | Apache-2.0 | See LICENSE and NOTICE */
/* Bundled Lit runtime:
BSD 3-Clause License

Copyright (c) 2017 Google LLC. All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ee=globalThis,te=ee.ShadowRoot&&(ee.ShadyCSS===void 0||ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ve=Symbol(),Ve=new WeakMap,G=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(te&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Ve.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ve.set(e,t))}return t}toString(){return this.cssText}},Be=s=>new G(typeof s=="string"?s:s+"",void 0,ve),C=(s,...t)=>{let e=s.length===1?s[0]:t.reduce((i,a,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+s[n+1],s[0]);return new G(e,s,ve)},Ue=(s,t)=>{if(te)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),a=ee.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=e.cssText,s.appendChild(i)}},ye=te?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return Be(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var{is:Rt,defineProperty:Nt,getOwnPropertyDescriptor:Pt,getOwnPropertyNames:Dt,getOwnPropertySymbols:It,getPrototypeOf:Ot}=Object,ie=globalThis,qe=ie.trustedTypes,Lt=qe?qe.emptyScript:"",jt=ie.reactiveElementPolyfillSupport,K=(s,t)=>s,be={toAttribute(s,t){switch(t){case Boolean:s=s?Lt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Ke=(s,t)=>!Rt(s,t),Ge={attribute:!0,type:String,converter:be,reflect:!1,useDefault:!1,hasChanged:Ke};Symbol.metadata??=Symbol("metadata"),ie.litPropertyMetadata??=new WeakMap;var A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ge){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),a=this.getPropertyDescriptor(t,i,e);a!==void 0&&Nt(this.prototype,t,a)}}static getPropertyDescriptor(t,e,i){let{get:a,set:n}=Pt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:a,set(o){let l=a?.call(this);n?.call(this,o),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ge}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;let t=Ot(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){let e=this.properties,i=[...Dt(e),...It(e)];for(let a of i)this.createProperty(a,e[a])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,a]of e)this.elementProperties.set(i,a)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let a=this._$Eu(e,i);a!==void 0&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let a of i)e.unshift(ye(a))}else t!==void 0&&e.push(ye(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ue(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(a!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:be).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(t,e){let i=this.constructor,a=i._$Eh.get(t);if(a!==void 0&&this._$Em!==a){let n=i.getPropertyOptions(a),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:be;this._$Em=a;let l=o.fromAttribute(e,n.type);this[a]=l??this._$Ej?.get(a)??l,this._$Em=null}}requestUpdate(t,e,i,a=!1,n){if(t!==void 0){let o=this.constructor;if(a===!1&&(n=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??Ke)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:a,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),a===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,n]of this._$Ep)this[a]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[a,n]of i){let{wrapped:o}=n,l=this[a];o!==!0||this._$AL.has(a)||l===void 0||this.C(a,void 0,n,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[K("elementProperties")]=new Map,A[K("finalized")]=new Map,jt?.({ReactiveElement:A}),(ie.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ke=globalThis,Ze=s=>s,se=ke.trustedTypes,Qe=se?se.createPolicy("lit-html",{createHTML:s=>s}):void 0,we="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,$e="?"+E,Ft=`<${$e}>`,R=document,Q=()=>R.createComment(""),Y=s=>s===null||typeof s!="object"&&typeof s!="function",Ae=Array.isArray,it=s=>Ae(s)||typeof s?.[Symbol.iterator]=="function",Se=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ye=/-->/g,Je=/>/g,H=RegExp(`>|${Se}(?:([^\\s"'>=/]+)(${Se}*=${Se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xe=/'/g,et=/"/g,st=/^(?:script|style|textarea|title)$/i,Ee=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),u=Ee(1),x=Ee(2),di=Ee(3),k=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),tt=new WeakMap,T=R.createTreeWalker(R,129);function at(s,t){if(!Ae(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qe!==void 0?Qe.createHTML(t):t}var nt=(s,t)=>{let e=s.length-1,i=[],a,n=t===2?"<svg>":t===3?"<math>":"",o=Z;for(let l=0;l<e;l++){let d=s[l],r,p,c=-1,_=0;for(;_<d.length&&(o.lastIndex=_,p=o.exec(d),p!==null);)_=o.lastIndex,o===Z?p[1]==="!--"?o=Ye:p[1]!==void 0?o=Je:p[2]!==void 0?(st.test(p[2])&&(a=RegExp("</"+p[2],"g")),o=H):p[3]!==void 0&&(o=H):o===H?p[0]===">"?(o=a??Z,c=-1):p[1]===void 0?c=-2:(c=o.lastIndex-p[2].length,r=p[1],o=p[3]===void 0?H:p[3]==='"'?et:Xe):o===et||o===Xe?o=H:o===Ye||o===Je?o=Z:(o=H,a=void 0);let v=o===H&&s[l+1].startsWith("/>")?" ":"";n+=o===Z?d+Ft:c>=0?(i.push(r),d.slice(0,c)+we+d.slice(c)+E+v):d+E+(c===-2?l:v)}return[at(s,n+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},J=class s{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let n=0,o=0,l=t.length-1,d=this.parts,[r,p]=nt(t,e);if(this.el=s.createElement(r,i),T.currentNode=this.el.content,e===2||e===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(a=T.nextNode())!==null&&d.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(let c of a.getAttributeNames())if(c.endsWith(we)){let _=p[o++],v=a.getAttribute(c).split(E),y=/([.?@])?(.*)/.exec(_);d.push({type:1,index:n,name:y[2],strings:v,ctor:y[1]==="."?ne:y[1]==="?"?oe:y[1]==="@"?re:P}),a.removeAttribute(c)}else c.startsWith(E)&&(d.push({type:6,index:n}),a.removeAttribute(c));if(st.test(a.tagName)){let c=a.textContent.split(E),_=c.length-1;if(_>0){a.textContent=se?se.emptyScript:"";for(let v=0;v<_;v++)a.append(c[v],Q()),T.nextNode(),d.push({type:2,index:++n});a.append(c[_],Q())}}}else if(a.nodeType===8)if(a.data===$e)d.push({type:2,index:n});else{let c=-1;for(;(c=a.data.indexOf(E,c+1))!==-1;)d.push({type:7,index:n}),c+=E.length-1}n++}}static createElement(t,e){let i=R.createElement("template");return i.innerHTML=t,i}};function N(s,t,e=s,i){if(t===k)return t;let a=i!==void 0?e._$Co?.[i]:e._$Cl,n=Y(t)?void 0:t._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),n===void 0?a=void 0:(a=new n(s),a._$AT(s,e,i)),i!==void 0?(e._$Co??=[])[i]=a:e._$Cl=a),a!==void 0&&(t=N(s,a._$AS(s,t.values),a,i)),t}var ae=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,a=(t?.creationScope??R).importNode(e,!0);T.currentNode=a;let n=T.nextNode(),o=0,l=0,d=i[0];for(;d!==void 0;){if(o===d.index){let r;d.type===2?r=new j(n,n.nextSibling,this,t):d.type===1?r=new d.ctor(n,d.name,d.strings,this,t):d.type===6&&(r=new le(n,this,t)),this._$AV.push(r),d=i[++l]}o!==d?.index&&(n=T.nextNode(),o++)}return T.currentNode=R,a}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},j=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,a){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),Y(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):it(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&Y(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=J.createElement(at(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(e);else{let n=new ae(a,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new J(t)),e}k(t){Ae(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,a=0;for(let n of t)a===e.length?e.push(i=new s(this.O(Q()),this.O(Q()),this,this.options)):i=e[a],i._$AI(n),a++;a<e.length&&(this._$AR(i&&i._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Ze(t).nextSibling;Ze(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},P=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,a,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(t,e=this,i,a){let n=this.strings,o=!1;if(n===void 0)t=N(this,t,e,0),o=!Y(t)||t!==this._$AH&&t!==k,o&&(this._$AH=t);else{let l=t,d,r;for(t=n[0],d=0;d<n.length-1;d++)r=N(this,l[i+d],e,d),r===k&&(r=this._$AH[d]),o||=!Y(r)||r!==this._$AH[d],r===m?t=m:t!==m&&(t+=(r??"")+n[d+1]),this._$AH[d]=r}o&&!a&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ne=class extends P{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}},oe=class extends P{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}},re=class extends P{constructor(t,e,i,a,n){super(t,e,i,a,n),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??m)===k)return;let i=this._$AH,a=t===m&&i!==m||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==m&&(i===m||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},le=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}},ot={M:we,P:E,A:$e,C:1,L:nt,R:ae,D:it,V:N,I:j,H:P,N:oe,U:re,B:ne,F:le},Wt=ke.litHtmlPolyfillSupport;Wt?.(J,j),(ke.litHtmlVersions??=[]).push("3.3.3");var rt=(s,t,e)=>{let i=e?.renderBefore??t,a=i._$litPart$;if(a===void 0){let n=e?.renderBefore??null;i._$litPart$=a=new j(t.insertBefore(Q(),n),n,void 0,e??{})}return a._$AI(s),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ze=globalThis,w=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return k}};w._$litElement$=!0,w.finalized=!0,ze.litElementHydrateSupport?.({LitElement:w});var Vt=ze.litElementPolyfillSupport;Vt?.({LitElement:w});(ze.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe={generatedOn:"2026-11-19",sources:{z2m:{repository:"Koenkk/zigbee-herdsman-converters",branch:"master",commit:"6cc34894cfcc289f67c0ac7c3ccf42e14be7f8dc",url:"https://github.com/Koenkk/zigbee-herdsman-converters/tree/6cc34894cfcc289f67c0ac7c3ccf42e14be7f8dc"},zha:{repository:"zigpy/zha-device-handlers",branch:"dev",commit:"b07fa76876e081d48744968f9fb806e7f1fee0ee",url:"https://github.com/zigpy/zha-device-handlers/tree/b07fa76876e081d48744968f9fb806e7f1fee0ee"}},models:[{id:"HS1MIS-3.0",description:"Smart occupancy sensor",kind:"motion",aliases:["PIRILLSensor-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS1CA-M",description:"Smart carbon monoxide alarm",kind:"co",aliases:["CO_V15","CO_YDLV10","CO_V16","1ccaa94c49a84abaa9e38687913947ba","CO_CTPG"],zha:"quirk",zhaSources:["smoke.py"]},{id:"HS-720ES-ZB",description:"Smart carbon monoxide alarm",kind:"co",aliases:["JM720ES-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS3MS",description:"Smart motion sensor",kind:"motion",aliases:["PIRSensor-N","PIRSensor-N-3.0","PIRSensor-EM","PIRSensor-EF-3.0","PIR_TPV13"],zha:"standard",zhaSources:[]},{id:"HS2SK",description:"Smart metering plug",kind:"plug",aliases:["SmartPlug","SmartPlug-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2SK_nxp",description:"Smart metering plug",kind:"plug",aliases:["SmartPlug-N"],zha:"standard",zhaSources:[]},{id:"HS1SA-E",description:"Smart smoke alarm",kind:"smoke",aliases:["SMOK_V16","SMOK_V15","b5db59bfd81e4f1f95dc57fdbba17931","98293058552c49f38ad0748541ee96ba","SMOK_YDLV10","FB56-SMF02HM1.4","SmokeSensor-N-3.0","319fa36e7384414a9ea62cba8f6e7626","c3442b4ac59b4ba1a83119d938f283ab","SmokeSensor-EF-3.0","SMOK_HV14","SMOK_YDLV10N"],zha:"quirk",zhaSources:["smoke.py"]},{id:"HS3SA/HS1SA",description:"Smart smoke alarm",kind:"smoke",aliases:["SmokeSensor-N","SmokeSensor-EM","HS3SA","HS1SA"],zha:"quirk",zhaSources:["smoke.py"]},{id:"HS2SA-EF-3.0",description:"Smart smoke alarm",kind:"smoke",aliases:[],zha:"standard",zhaSources:[]},{id:"HS3CG",description:"Combustible gas sensor",kind:"gas",aliases:["GASSensor-N","GASSensor-N-3.0","d90d7c61c44d468a8e906ca0841e0a0c"],zha:"standard",zhaSources:[]},{id:"HS1CG-M",description:"Combustible gas sensor",kind:"gas",aliases:["GASSensor-EN"],zha:"standard",zhaSources:[]},{id:"HS1CG_H",description:"Smart combustible gas sensor",kind:"gas",aliases:["HY0022"],zha:"standard",zhaSources:[]},{id:"HS1CG",description:"Smart combustible gas sensor",kind:"gas",aliases:["RH3070"],zha:"standard",zhaSources:[]},{id:"HS1CG_M",description:"Combustible gas sensor",kind:"gas",aliases:["GAS_V15"],zha:"standard",zhaSources:[]},{id:"HS3DS",description:"Door sensor",kind:"contact",aliases:["DoorSensor-N","DoorSensor-N-3.0"],zha:"standard",zhaSources:[]},{id:"HS8DS-EFA",description:"Door sensor",kind:"contact",aliases:["HS8DS-EF2-3.0"],zha:"standard",zhaSources:[]},{id:"D1-EFA",description:"Smart door sensor",kind:"contact",aliases:["D1-EF2-3.0"],zha:"standard",zhaSources:[]},{id:"D1-E",description:"Smart door sensor",kind:"contact",aliases:[],zha:"standard",zhaSources:[]},{id:"HS1DS",description:"Door sensor",kind:"contact",aliases:["DoorSensor-EM","DoorSensor-EF-3.0"],zha:"standard",zhaSources:[]},{id:"Heiman-M1",description:"Door sensor",kind:"contact",aliases:["DOOR_TPV13","DOOR_TPV12"],zha:"standard",zhaSources:[]},{id:"HS1WL/HS3WL",description:"Water leakage sensor",kind:"leak",aliases:["WaterSensor-N","WaterSensor-EM","WaterSensor-N-3.0","WaterSensor-EF-3.0","WATER_TPV13","TY0207","HS1WL","HS3WL"],zha:"standard",zhaSources:[]},{id:"HS2WL",description:"Water leakage sensor",kind:"leak",aliases:["WaterSensor2-EF-3.0"],zha:"standard",zhaSources:[]},{id:"L1-E",description:"Smart Water leakage sensor",kind:"leak",aliases:[],zha:"standard",zhaSources:[]},{id:"HS1RC-N",description:"Smart remote controller",kind:"remote",aliases:["RC-N"],zha:"standard",zhaSources:[]},{id:"HM1RC-2-E",description:"Smart remote controller",kind:"remote",aliases:["RC-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS1RC-EM",description:"Smart remote controller",kind:"remote",aliases:["RC-EM"],zha:"standard",zhaSources:[]},{id:"HS1CA-E",description:"Smart carbon monoxide alarm",kind:"co",aliases:["COSensor-EM","COSensor-N","COSensor-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2WD-E",description:"Smart siren",kind:"siren",aliases:["WarningDevice","WarningDevice-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS1HT",description:"Smart temperature & humidity Sensor",kind:"climate",aliases:["HT-EM","TH-EM","TH-T_V14"],zha:"standard",zhaSources:[]},{id:"HS1HT-N",description:"Smart temperature & humidity Sensor",kind:"climate",aliases:["HT-N","HT-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2ESK-E",description:"Smart in wall plug",kind:"plug",aliases:["E_Socket","E8331510SSZB_C1"],zha:"standard",zhaSources:[]},{id:"HS1EB/HS1EB-E",description:"Smart emergency button",kind:"remote",aliases:["SOS-EM","SOS-EF-3.0","HS1EB","HS1EB-E"],zha:"standard",zhaSources:[]},{id:"HS2SS",description:"Smart scene switch",kind:"remote",aliases:["SceneSwitch-EM-3.0","SceneSwitch-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2WDSC-E",description:"Remote dimmer and temperature control",kind:"remote",aliases:["TempDimmerSw-EM-3.0"],zha:"standard",zhaSources:[]},{id:"HS2WDSR-E",description:"Remote dimmer and color control",kind:"remote",aliases:["ColorDimmerSw-EM-3.0"],zha:"standard",zhaSources:[]},{id:"HS3HT",description:"Temperature & humidity sensor with display",kind:"climate",aliases:["HS3HT-EFA-3.0"],zha:"standard",zhaSources:[]},{id:"H1-E",description:"Smart Temperature & humidity sensor",kind:"climate",aliases:[],zha:"standard",zhaSources:[]},{id:"HS1CG-E",description:"Combustible gas sensor",kind:"gas",aliases:["GASSensor-EM","358e4e3e03c644709905034dae81433e"],zha:"standard",zhaSources:[]},{id:"HS1CG-E_3.0",description:"Combustible gas sensor",kind:"gas",aliases:["GASSensor-EFR-3.0","GASSensor-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS1VS-N",description:"Vibration sensor",kind:"vibration",aliases:["Vibration-N"],zha:"standard",zhaSources:[]},{id:"HS1VS-EF",description:"Vibration sensor",kind:"vibration",aliases:["Vibration-EF_3.0","Vibration-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2AQ-EM",description:"Air quality monitor",kind:"air",aliases:["HS2AQ-EM-3.0"],zha:"standard",zhaSources:[]},{id:"HS1IRC",description:"Smart IR Control",kind:"remote",aliases:["IRControl-EM"],zha:"standard",zhaSources:[]},{id:"HS2IRC",description:"Smart IR Control",kind:"remote",aliases:["IRControl2-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2SW1A/HS2SW1A-N",description:"Smart switch - 1 gang with neutral wire",kind:"switch",aliases:["HS2SW1L-EF-3.0","HS2SW1L-EFR-3.0","HS2SW1A-N","HS6SW1A-W-EF-3.0","HS5SW1A-W-EF-3.0","HS2SW1A-EF-3.0","HS2SW1A-EFR-3.0","HS2SW1A"],zha:"standard",zhaSources:[]},{id:"HS2SW2A/HS2SW2A-N",description:"Smart switch - 2 gang with neutral wire",kind:"switch",aliases:["HS2SW2L-EF-3.0","HS2SW2L-EFR-3.0","HS2SW2A-N","HS6SW2A-W-EF-3.0","HS5SW2A-W-EF-3.0","RT0102","HS2SW2A-EF-3.0","HS2SW2A-EFR-3.0","HS2SW2A"],zha:"standard",zhaSources:[]},{id:"HS2SW3A/HS2SW3A-N",description:"Smart switch - 3 gang with neutral wire",kind:"switch",aliases:["HS2SW3L-EF-3.0","HS2SW3L-EFR-3.0","HS2SW3A-N","HS6SW3A-W-EF-3.0","HS5SW3A-W-EF-3.0","HS2SW3A-EF-3.0","HS2SW3A-EFR-3.0","HS2SW3A"],zha:"standard",zhaSources:[]},{id:"HS1RM-E",description:"Smart relay module - 2 gang with neutral wire",kind:"switch",aliases:["RelayModule-EF-3.0"],zha:"quirk",zhaSources:["hs1rm_e.py"]},{id:"HS2WDS",description:"LED 9W CCT E27",kind:"light",aliases:["TemperLight"],zha:"standard",zhaSources:[]},{id:"HS1RGB",description:"Bulb E26/E27, RGB+WW 2700K, globe, opal, 400lm",kind:"light",aliases:["ColorLight"],zha:"standard",zhaSources:[]},{id:"HS2CM-N-DC",description:"Gear window shade motor",kind:"cover",aliases:["CurtainMo-EF-3.0","CurtainMo-EF"],zha:"standard",zhaSources:[]},{id:"HS1MS-M",description:"Smart motion sensor",kind:"motion",aliases:["PIR_TPV16"],zha:"standard",zhaSources:[]},{id:"HS1MS-EF",description:"Smart motion sensor",kind:"motion",aliases:["TY0202"],zha:"standard",zhaSources:[]},{id:"HS9MS-E",description:"Smart motion sensor",kind:"motion",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2DB",description:"Smart doorbell button",kind:"remote",aliases:["DoorBell-EM"],zha:"standard",zhaSources:[]},{id:"HS2SS-E_V03",description:"Smart doorbell button",kind:"remote",aliases:["DoorBell-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS3AQ",description:"Smart air quality monitor",kind:"air",aliases:["HS3AQ-EFA-3.0"],zha:"standard",zhaSources:[]},{id:"HS2RNL",description:"Smart repeater & night light",kind:"light",aliases:["RouteLight-EF-3.0"],zha:"standard",zhaSources:[]},{id:"PIR_TPV12",description:"Motion sensor",kind:"motion",aliases:[],zha:"standard",zhaSources:[]},{id:"HS15A-M",description:"Smart smoke alarm relabeled for zipato",kind:"smoke",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2FD-EF1-3.0",description:"Fall Detection Sensor",kind:"fall",aliases:[],zha:"standard",zhaSources:[]},{id:"HS8OS-EF1-3.0",description:"Human presence sensor",kind:"motion",aliases:[],zha:"standard",zhaSources:[]},{id:"HS8MIS-EF1-3.0",description:"PIR sensor",kind:"motion",aliases:[],zha:"standard",zhaSources:[]},{id:"HS8MLS-EF1-3.0",description:"PIR sensor with night light",kind:"motion",aliases:["HS8MIS-86-EF1-3.0"],zha:"standard",zhaSources:[]},{id:"HS2AQ-EF-3.0",description:"Air quality monitor",kind:"air",aliases:[],zha:"standard",zhaSources:[]},{id:"HS1SA-E-PLUS",description:"Smart smoke alarm",kind:"smoke",aliases:["HS1SA-EF-3.0"],zha:"quirk",zhaSources:["hs1sa_efa.py"]},{id:"S1-TL",description:"Smart smoke alarm",kind:"smoke",aliases:[],zha:"quirk",zhaSources:["s1_tl.py"]},{id:"S1-M",description:"Smart smoke alarm",kind:"smoke",aliases:[],zha:"standard",zhaSources:[]},{id:"S1-TL-AI",description:"Smart smoke alarm",kind:"smoke",aliases:["SC6-EF2-AI"],zha:"standard",zhaSources:[]},{id:"S2-E",description:"Smart smoke alarm",kind:"smoke",aliases:[],zha:"standard",zhaSources:[]},{id:"HM-722ESY-E Plus",description:"Smart carbon monoxide alarm",kind:"co",aliases:["HM-722ESY-E-PLUS"],zha:"quirk",zhaSources:["hm_722_esy_e_plus.py"]},{id:"HS1CA-E-PLUS",description:"Smart carbon monoxide alarm",kind:"co",aliases:["HS1CA-E PLUS"],zha:"quirk",zhaSources:["hs1ca_e_plus.py"]},{id:"C1-M",description:"Smart carbon monoxide alarm",kind:"co",aliases:[],zha:"standard",zhaSources:[]},{id:"HS1SA-E Lover",description:"Smart smoke alarm",kind:"smoke",aliases:["Smokesensor-EF2-3.0","SmokeSensor-EF2-3.0"],zha:"quirk",zhaSources:["hs1sa_e_lover.py"]},{id:"HM-636THV-AC-M",description:"Smart smoke&CO alarm",kind:"smoke_co",aliases:[],zha:"quirk",zhaSources:["hm_636thv_ac_m.py"]},{id:"SC6",description:"Smart smoke&CO alarm",kind:"smoke_co",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2WD-EF",description:"Smart siren",kind:"siren",aliases:["WarningDevice-EFA1-3.0"],zha:"standard",zhaSources:[]},{id:"M1P-E",description:"Smart occupancy sensor",kind:"motion",aliases:["M1-PE"],zha:"standard",zhaSources:[]},{id:"HM-5HA-E",description:"Smart heat alarm",kind:"heat",aliases:["HM-5HA-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2VTD",description:"Smart 4 in 1 door sensor",kind:"contact",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2TD",description:"Smart 3 in 1 door sensor",kind:"contact",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2HT",description:"Smart temperature & humidity sensor",kind:"climate",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2NLV",description:"Smart notifier",kind:"light",aliases:[],zha:"standard",zhaSources:[]}]};var I=xe.models,$i=xe.generatedOn,Ce=s=>s.toLowerCase().replace(/[\s-]+/g,""),Ut=new Map(I.map(s=>[Ce(s.id),s])),Me=new Map;for(let s of I)for(let t of s.aliases){let e=Ce(t);Me.has(e)||Me.set(e,s)}function D(s){if(!s||s==="auto")return;let t=s.match(/\(([^()]+)\)\s*$/)?.[1],e=Ce(t??s);return Ut.get(e)??Me.get(e)}function F(s){let t=D(s.model_id)??D(s.model);if(t&&!(/^TS\d+$/i.test(s.model??"")&&!/heiman/i.test(s.manufacturer??"")))return t}function lt(s){return/heiman/i.test(s.manufacturer??"")&&!!F(s)}var de={smoke:"smoke",co:"co",smoke_co:"smoke",heat:"temperature",gas:"gas",leak:"water",contact:"door",motion:"motion",fall:"motion",vibration:"motion",climate:"temperature",air:"air",siren:"bell",plug:"power",switch:"power",light:"light",cover:"cover",remote:"remote"};var ce=new WeakMap;function He(s){if(s.devices&&s.entities&&Object.keys(s.devices).length>0)return{devices:Object.values(s.devices),entities:Object.values(s.entities)}}async function dt(s,t=!1){let e=He(s);if(e)return e;if(!s.callWS)return{devices:[],entities:[]};let i=s.connection??s;t&&ce.delete(i);let a=ce.get(i);return a||(a=Promise.all([s.callWS({type:"config/device_registry/list"}),s.callWS({type:"config/entity_registry/list"})]).then(([n,o])=>({devices:n,entities:o})),ce.set(i,a),a.catch(()=>ce.delete(i))),a}var b=s=>s.split(".")[0],ct=["switch","light","siren","cover","fan"];function ut(s,t,e){let i=b(s.entity_id),a=t.states[s.entity_id],n=String(a?.attributes.device_class??""),o=d=>[s.translation_key??"",s.entity_id.split(".")[1]].some(r=>d.test(r.toLowerCase()));if(ct.includes(i))return s.entity_category||o(/(?:^|_)(?:mute|temporary_mute|remote_mute|heartbeat|indicator|child_lock|radar_switch|selftest)(?:_|$)/)?void 0:!e||["plug","switch","light","cover","siren","motion"].includes(e)?"control":void 0;if(i==="event")return"action";if(!["binary_sensor","sensor"].includes(i))return;if(i==="binary_sensor")return n==="battery"||o(/(?:^|_)(?:battery_low|low_battery)(?:_|$)/)?"battery_low":n==="tamper"||o(/(?:^|_)tamper(?:_|$)/)?"tamper":n==="problem"||o(/(?:^|_)(?:fault|fault_state|sensor_fault_state)(?:_|$)/)?"fault":o(/(?:^|_)(?:test|self_test|self_check|selfcheck)(?:_|$)/)?"test":o(/(?:^|_)(?:muted|mute_state|sensor_mute_state)(?:_|$)/)?"muted":n==="smoke"?"smoke":n==="carbon_monoxide"?"co":n==="gas"?e==="co"?"co":"gas":n==="moisture"?"leak":["door","window","opening","garage_door"].includes(n)?"contact":["motion","occupancy","presence"].includes(n)?"motion":n==="vibration"?"vibration":n==="heat"||!n&&e==="heat"&&o(/(?:^|_)ias_zone(?:_\d+)?$/)?"heat":o(/(?:^|_)(?:smoke|smoke_alarm)(?:_\d+)?$/)?"smoke":o(/(?:^|_)(?:carbon_monoxide|co_alarm|co)(?:_\d+)?$/)?"co":o(/(?:^|_)(?:gas|gas_alarm)(?:_\d+)?$/)?"gas":o(/(?:^|_)(?:water_leak|water_leakage|moisture)(?:_\d+)?$/)?"leak":o(/(?:^|_)(?:contact|opening)(?:_\d+)?$/)?"contact":o(/(?:^|_)(?:occupancy|motion|presence)(?:_\d+)?$/)?"motion":o(/(?:^|_)(?:fall|fall_down|fall_detected)(?:_\d+)?$/)?"fall":o(/(?:^|_)vibration(?:_\d+)?$/)?"vibration":o(/(?:^|_)(?:heat|heat_alarm)(?:_\d+)?$/)?"heat":void 0;let l={temperature:"temperature",humidity:"humidity",battery:"battery",signal_strength:"signal",power:"power",energy:"energy",voltage:"voltage",current:"current",illuminance:"illuminance",carbon_dioxide:"co2",volatile_organic_compounds:"voc",volatile_organic_compounds_parts:"voc",pm25:"pm25"};if(l[n])return l[n];if(o(/(?:^|_)(?:fault_state|sensor_fault_state)(?:_\d+)?$/))return"fault";if(o(/(?:^|_)(?:linkquality|link_quality|rssi|lqi|signal_strength)(?:_\d+)?$/))return"signal";if(o(/(?:^|_)(?:action|last_action)(?:_\d+)?$/))return"action";if(o(/(?:^|_)(?:battery|battery_percentage)(?:_\d+)?$/))return"battery";if(o(/(?:^|_)(?:temperature|device_temperature|device_intenal_temperature)(?:_\d+)?$/))return"temperature";if(o(/(?:^|_)humidity(?:_\d+)?$/))return"humidity";if(o(/(?:^|_)(?:muted|mute_state)(?:_\d+)?$/))return"muted"}function qt(s,t,e,i={}){let a={};for(let n of[...s].sort((o,l)=>o.entity_id.localeCompare(l.entity_id))){if(n.disabled_by||n.hidden_by||n.hidden)continue;let o=ut(n,t,e);o&&(a[o]??=[]).push(n.entity_id)}for(let[n,o]of Object.entries(i))o&&(a[n]=[o]);return a}function W(s,t,e){let i=D(s.model),a=s.entity?e.entities.find(v=>v.entity_id===s.entity):void 0,n=s.device_id||a?.device_id,o=e.devices.filter(v=>{if(v.disabled_by)return!1;let y=F(v);return v.parent_device_id&&e.devices.some(g=>g.id===v.parent_device_id&&F(g)?.id===y?.id)?!1:i?y?.id===i.id:lt(v)}),l=n?e.devices.find(v=>v.id===n):o.length===1?o[0]:void 0,d;n&&!l?d="missing_device":l&&i&&F(l)?.id!==i.id?(d="model_mismatch",l=void 0):!l&&o.length>1?d="choose_device":l||(d="no_device");let r=i??(l?F(l):void 0),p=l?Gt(e,l.id):new Set,c=l?e.entities.filter(v=>v.device_id&&p.has(v.device_id)):[];s.entity&&!c.some(v=>v.entity_id===s.entity)&&c.push(a??{entity_id:s.entity});let _=qt(c,t,r?.kind,s.entities);if(s.entity&&!Object.values(_).some(v=>v?.includes(s.entity))&&b(s.entity)==="binary_sensor"&&r){let y={smoke_co:"smoke",climate:void 0,air:void 0}[r.kind]??(["smoke","co","heat","gas","leak","contact","motion","fall","vibration"].includes(r.kind)?r.kind:void 0);y&&!s.entities?.[y]&&(_[y]=[s.entity])}return d==="missing_device"||d==="model_mismatch"?{candidates:o,preset:r,entities:[],bindings:{},reason:d}:(Object.keys(_).length>0&&!l&&(d=void 0),{device:l,preset:r,candidates:o,entities:c,bindings:_,reason:d})}function pt(s,t,e){return s.filter(i=>!i.disabled_by&&!i.hidden_by&&!i.hidden&&t.states[i.entity_id]&&(["button","number","select","text","update","remote"].includes(b(i.entity_id))||i.entity_category==="config"||ct.includes(b(i.entity_id))&&ut(i,t,e)!=="control"))}function Gt(s,t){let e=new Set([t]),i=0;for(;e.size!==i;){i=e.size;for(let a of s.devices)a.parent_device_id&&e.has(a.parent_device_id)&&e.add(a.id)}return e}var ue={home:"Home",fire:"Fire safety",minimal:"Minimal",auto:"Automatic",model:"Product model",device:"Device",style:"Style",name:"Card name",language:"Language",search:"Search models or Zigbee aliases",choose:"Choose a device",choose_device:"Several devices match. Select one in the card editor.",no_device:"Select a model and a paired device in the card editor.",missing_device:"This device is no longer in Home Assistant.",model_mismatch:"The selected device does not match this model. Select its model or use Automatic.",no_entities:"No matching entities. Check the device or assign entities in the editor.",unknown:"Unknown",unavailable:"Unavailable",normal:"Normal",alarm:"Alarm",warning:"Attention",testing:"Self-test running",active:"Active",inactive:"Inactive",open:"Open",closed:"Closed",detected:"Detected",clear:"Clear",on:"On",off:"Off",settings:"Device settings",details:"Details",more_info:"More information",battery:"Battery",battery_low:"Low battery",signal:"Signal",temperature:"Temperature",humidity:"Humidity",smoke:"Smoke",co:"Carbon monoxide",smoke_co:"Smoke & CO",heat:"Heat",gas:"Combustible gas",leak:"Water leak",contact:"Door / window",motion:"Motion / presence",fall:"Fall",vibration:"Vibration",climate:"Temperature & humidity",air:"Air quality",siren:"Siren",plug:"Smart plug",switch:"Switch / relay",light:"Lighting",cover:"Curtain",remote:"Remote / button",power:"Power",energy:"Energy",voltage:"Voltage",current:"Current",illuminance:"Illuminance",co2:"CO\u2082",voc:"VOC",pm25:"PM2.5",action:"Last action",control:"Main control",tamper:"Tamper",fault:"Fault",test:"Self-test",muted:"Muted",updated:"Updated",show_battery:"Show battery",show_signal:"Show signal",show_details:"Show details",show_controls:"Show controls",advanced:"Entity assignments",assignments_help:"Entities are matched within this device. Override only when needed. Empty fields use automatic matching.",device_help:"A single matching device is selected automatically. Choose the instance when you have several.",registry_error:"Unable to read the device registry. Retry or assign entities below.",retry:"Retry",loading:"Loading devices\u2026",self_test:"Self-test",mute:"Hush",turn_on:"Turn on",turn_off:"Turn off",stop:"Stop",close:"Close",service_error:"The command failed. Please try again.",not_reported:"Not reported",connected:"Connected",controls_help:"Open the Home Assistant dialog to adjust this entity.",no_control:"This device has no exposed controls.",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"Paired HEIMAN device",no_matches:"No matching models",tracking:"Monitoring",partial:"Some readings unavailable",config_entity:"Primary entity (optional)",diagnostic:"Diagnostics",unavailable_readings:"Unavailable readings",empty:"No paired HEIMAN devices found",preview:"Preview",remote_self_test:"Remote self-test",temporary_mute:"Temporary hush",indicator:"Status indicator",siren_on:"Start siren",siren_off:"Stop siren",siren_options:"Siren settings",tone:"Sound profile",duration:"Duration",volume:"Volume",seconds:"s",device_default:"Device default",apply:"Apply",execute:"Run",more_settings:"More settings",sending:"Sending\u2026",command_sent:"Command sent. Waiting for the device to report its state.",invalid_value:"Enter a value within the device's supported range and step.",strobe:"Strobe",strobe_level:"Strobe intensity",temperature_offset:"Temperature offset",humidity_offset:"Humidity offset",sensitivity:"Sensitivity",identify:"Identify device",smoke_sound:"Smoke sound profile",co_sound:"CO sound profile",fire_sound:"Fire",burglar:"Burglar",emergency:"Emergency",police_panic:"Police panic",fire_panic:"Fire panic",emergency_panic:"Emergency panic",low:"Low",medium:"Medium",high:"High",very_high:"Very high"};var mt={home:"\u5BB6\u5C45\u98CE\u683C",fire:"\u6D88\u9632\u98CE\u683C",minimal:"\u7B80\u7EA6\u98CE\u683C",auto:"\u81EA\u52A8\u8BC6\u522B",model:"\u4EA7\u54C1\u578B\u53F7",device:"\u8BBE\u5907",style:"\u5361\u7247\u6837\u5F0F",name:"\u5361\u7247\u540D\u79F0",language:"\u8BED\u8A00",search:"\u641C\u7D22\u578B\u53F7\u6216 Zigbee \u578B\u53F7\u522B\u540D",choose:"\u8BF7\u9009\u62E9\u8BBE\u5907",choose_device:"\u5339\u914D\u5230\u591A\u53F0\u8BBE\u5907\uFF0C\u8BF7\u5728\u5361\u7247\u7F16\u8F91\u5668\u4E2D\u9009\u62E9\u5177\u4F53\u8BBE\u5907\u3002",no_device:"\u8BF7\u5728\u5361\u7247\u7F16\u8F91\u5668\u4E2D\u9009\u62E9\u578B\u53F7\u548C\u5DF2\u914D\u5BF9\u7684\u8BBE\u5907\u3002",missing_device:"Home Assistant \u4E2D\u5DF2\u627E\u4E0D\u5230\u6B64\u8BBE\u5907\u3002",model_mismatch:"\u6240\u9009\u8BBE\u5907\u4E0E\u578B\u53F7\u4E0D\u7B26\uFF0C\u8BF7\u9009\u62E9\u5BF9\u5E94\u578B\u53F7\u6216\u81EA\u52A8\u8BC6\u522B\u3002",no_entities:"\u672A\u5339\u914D\u5230\u5B9E\u4F53\uFF0C\u8BF7\u68C0\u67E5\u8BBE\u5907\u6216\u5728\u7F16\u8F91\u5668\u4E2D\u6307\u5B9A\u5B9E\u4F53\u3002",unknown:"\u672A\u77E5",unavailable:"\u4E0D\u53EF\u7528",normal:"\u6B63\u5E38",alarm:"\u62A5\u8B66",warning:"\u9700\u8981\u5173\u6CE8",testing:"\u6B63\u5728\u81EA\u68C0",active:"\u5DF2\u89E6\u53D1",inactive:"\u672A\u89E6\u53D1",open:"\u5DF2\u6253\u5F00",closed:"\u5DF2\u5173\u95ED",detected:"\u68C0\u6D4B\u5230\u6D3B\u52A8",clear:"\u672A\u68C0\u6D4B\u5230",on:"\u5DF2\u5F00\u542F",off:"\u5DF2\u5173\u95ED",settings:"\u8BBE\u5907\u8BBE\u7F6E",details:"\u8BE6\u7EC6\u4FE1\u606F",more_info:"\u66F4\u591A\u4FE1\u606F",battery:"\u7535\u6C60\u7535\u91CF",battery_low:"\u4F4E\u7535\u91CF",signal:"\u4FE1\u53F7",temperature:"\u6E29\u5EA6",humidity:"\u6E7F\u5EA6",smoke:"\u70DF\u96FE",co:"\u4E00\u6C27\u5316\u78B3",smoke_co:"\u70DF\u96FE\u4E0E\u4E00\u6C27\u5316\u78B3",heat:"\u9AD8\u6E29",gas:"\u53EF\u71C3\u6C14\u4F53",leak:"\u6F0F\u6C34",contact:"\u95E8\u7A97",motion:"\u4EBA\u4F53\u6D3B\u52A8",fall:"\u8DCC\u5012",vibration:"\u632F\u52A8",climate:"\u6E29\u6E7F\u5EA6",air:"\u7A7A\u6C14\u8D28\u91CF",siren:"\u58F0\u5149\u62A5\u8B66\u5668",plug:"\u667A\u80FD\u63D2\u5EA7",switch:"\u5F00\u5173\u4E0E\u7EE7\u7535\u5668",light:"\u7167\u660E",cover:"\u7A97\u5E18",remote:"\u9065\u63A7\u5668\u4E0E\u6309\u94AE",power:"\u529F\u7387",energy:"\u7528\u7535\u91CF",voltage:"\u7535\u538B",current:"\u7535\u6D41",illuminance:"\u7167\u5EA6",co2:"\u4E8C\u6C27\u5316\u78B3",voc:"\u6325\u53D1\u6027\u6709\u673A\u7269",pm25:"PM2.5",action:"\u6700\u8FD1\u64CD\u4F5C",control:"\u4E3B\u63A7\u5236\u5B9E\u4F53",tamper:"\u9632\u62C6",fault:"\u6545\u969C",test:"\u81EA\u68C0",muted:"\u5DF2\u6D88\u97F3",updated:"\u66F4\u65B0\u65F6\u95F4",show_battery:"\u663E\u793A\u7535\u91CF",show_signal:"\u663E\u793A\u4FE1\u53F7",show_details:"\u663E\u793A\u8BE6\u7EC6\u4FE1\u606F",show_controls:"\u663E\u793A\u63A7\u5236\u6309\u94AE",advanced:"\u5B9E\u4F53\u5339\u914D\u8BBE\u7F6E",assignments_help:"\u81EA\u52A8\u5339\u914D\u6B64\u8BBE\u5907\u7684\u5B9E\u4F53\u3002\u5339\u914D\u6709\u8BEF\u65F6\u53EF\u624B\u52A8\u6307\u5B9A\uFF0C\u7559\u7A7A\u5219\u81EA\u52A8\u5339\u914D\u3002",device_help:"\u53EA\u6709\u4E00\u53F0\u5339\u914D\u8BBE\u5907\u65F6\u81EA\u52A8\u9009\u62E9\uFF1B\u6709\u591A\u53F0\u65F6\u8BF7\u9009\u62E9\u5177\u4F53\u8BBE\u5907\u3002",registry_error:"\u65E0\u6CD5\u8BFB\u53D6\u8BBE\u5907\u5217\u8868\uFF0C\u8BF7\u91CD\u8BD5\u6216\u5728\u4E0B\u65B9\u624B\u52A8\u6307\u5B9A\u5B9E\u4F53\u3002",retry:"\u91CD\u8BD5",loading:"\u6B63\u5728\u52A0\u8F7D\u8BBE\u5907\u2026",self_test:"\u81EA\u68C0",mute:"\u6D88\u97F3",turn_on:"\u5F00\u542F",turn_off:"\u5173\u95ED",stop:"\u505C\u6B62",close:"\u5173\u95ED",service_error:"\u6307\u4EE4\u6267\u884C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",not_reported:"\u5C1A\u672A\u4E0A\u62A5",connected:"\u5DF2\u8FDE\u63A5",controls_help:"\u6253\u5F00 Home Assistant \u5BF9\u8BDD\u6846\u4EE5\u8C03\u6574\u6B64\u5B9E\u4F53\u3002",no_control:"\u6B64\u8BBE\u5907\u6CA1\u6709\u53EF\u7528\u7684\u63A7\u5236\u5B9E\u4F53\u3002",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"\u5DF2\u914D\u5BF9\u7684 HEIMAN \u8BBE\u5907",no_matches:"\u6CA1\u6709\u5339\u914D\u7684\u578B\u53F7",tracking:"\u76D1\u6D4B\u4E2D",partial:"\u90E8\u5206\u8BFB\u6570\u4E0D\u53EF\u7528",config_entity:"\u4E3B\u5B9E\u4F53\uFF08\u53EF\u9009\uFF09",diagnostic:"\u8BCA\u65AD\u4FE1\u606F",unavailable_readings:"\u4E0D\u53EF\u7528\u7684\u8BFB\u6570",empty:"\u5C1A\u672A\u627E\u5230\u5DF2\u914D\u5BF9\u7684 HEIMAN \u8BBE\u5907",preview:"\u9884\u89C8",remote_self_test:"\u8FDC\u7A0B\u81EA\u68C0",temporary_mute:"\u4E34\u65F6\u6D88\u97F3",indicator:"\u72B6\u6001\u6307\u793A\u706F",siren_on:"\u5F00\u542F\u8B66\u62A5",siren_off:"\u505C\u6B62\u8B66\u62A5",siren_options:"\u8B66\u97F3\u8BBE\u7F6E",tone:"\u8B66\u97F3\u6A21\u5F0F",duration:"\u6301\u7EED\u65F6\u95F4",volume:"\u97F3\u91CF",seconds:"\u79D2",device_default:"\u8BBE\u5907\u9ED8\u8BA4",apply:"\u5E94\u7528",execute:"\u6267\u884C",more_settings:"\u66F4\u591A\u8BBE\u7F6E",sending:"\u6B63\u5728\u53D1\u9001\u2026",command_sent:"\u6307\u4EE4\u5DF2\u53D1\u9001\uFF0C\u7B49\u5F85\u8BBE\u5907\u4E0A\u62A5\u72B6\u6001\u3002",invalid_value:"\u8BF7\u8F93\u5165\u8BBE\u5907\u5141\u8BB8\u8303\u56F4\u548C\u6B65\u957F\u5185\u7684\u6570\u503C\u3002",strobe:"\u95EA\u5149",strobe_level:"\u95EA\u5149\u5F3A\u5EA6",temperature_offset:"\u6E29\u5EA6\u6821\u51C6",humidity_offset:"\u6E7F\u5EA6\u6821\u51C6",sensitivity:"\u7075\u654F\u5EA6",identify:"\u8BC6\u522B\u8BBE\u5907",smoke_sound:"\u70DF\u96FE\u8B66\u97F3",co_sound:"CO \u8B66\u97F3",fire_sound:"\u706B\u8B66",burglar:"\u9632\u76D7\u8B66\u97F3",emergency:"\u7D27\u6025\u8B66\u97F3",police_panic:"\u8B66\u5BDF\u7D27\u6025\u8B66\u97F3",fire_panic:"\u706B\u707E\u7D27\u6025\u8B66\u97F3",emergency_panic:"\u7D27\u6025\u6C42\u52A9\u8B66\u97F3",low:"\u4F4E",medium:"\u4E2D",high:"\u9AD8",very_high:"\u5F88\u9AD8"};var ht={home:"Wohnen",fire:"Brandschutz",minimal:"Schlicht",auto:"Automatisch",model:"Produktmodell",device:"Ger\xE4t",style:"Darstellung",name:"Kartenname",language:"Sprache",search:"Modelle oder Zigbee-Modellnamen suchen",choose:"Ger\xE4t ausw\xE4hlen",choose_device:"Mehrere Ger\xE4te passen. W\xE4hlen Sie eines im Karteneditor aus.",no_device:"W\xE4hlen Sie im Karteneditor ein Modell und ein gekoppeltes Ger\xE4t aus.",missing_device:"Dieses Ger\xE4t ist nicht mehr in Home Assistant vorhanden.",model_mismatch:"Das gew\xE4hlte Ger\xE4t passt nicht zum Modell. W\xE4hlen Sie das richtige Modell oder Automatisch.",no_entities:"Keine passenden Entit\xE4ten. Pr\xFCfen Sie das Ger\xE4t oder weisen Sie Entit\xE4ten im Editor zu.",unknown:"Unbekannt",unavailable:"Nicht verf\xFCgbar",normal:"Normal",alarm:"Alarm",warning:"Bitte pr\xFCfen",testing:"Selbsttest l\xE4uft",active:"Aktiv",inactive:"Inaktiv",open:"Offen",closed:"Geschlossen",detected:"Erkannt",clear:"Nicht erkannt",on:"Ein",off:"Aus",settings:"Ger\xE4teeinstellungen",details:"Details",more_info:"Weitere Informationen",battery:"Batterie",battery_low:"Batterie schwach",signal:"Signal",temperature:"Temperatur",humidity:"Luftfeuchtigkeit",smoke:"Rauch",co:"Kohlenmonoxid",smoke_co:"Rauch und CO",heat:"\xDCberhitzung",gas:"Brennbares Gas",leak:"Wasserleck",contact:"T\xFCr / Fenster",motion:"Bewegung / Anwesenheit",fall:"Sturz",vibration:"Vibration",climate:"Temperatur und Feuchtigkeit",air:"Luftqualit\xE4t",siren:"Sirene",plug:"Smarte Steckdose",switch:"Schalter / Relais",light:"Beleuchtung",cover:"Vorhang",remote:"Fernbedienung / Taster",power:"Leistung",energy:"Energie",voltage:"Spannung",current:"Stromst\xE4rke",illuminance:"Beleuchtungsst\xE4rke",co2:"CO\u2082",voc:"VOC",pm25:"PM2.5",action:"Letzte Aktion",control:"Hauptsteuerung",tamper:"Manipulation",fault:"St\xF6rung",test:"Selbsttest",muted:"Stummgeschaltet",updated:"Aktualisiert",show_battery:"Batterie anzeigen",show_signal:"Signal anzeigen",show_details:"Details anzeigen",show_controls:"Bedienelemente anzeigen",advanced:"Entit\xE4tszuordnung",assignments_help:"Entit\xE4ten werden innerhalb dieses Ger\xE4ts zugeordnet. Nur bei Bedarf \xFCberschreiben. Leere Felder verwenden die automatische Zuordnung.",device_help:"Ein einzelnes passendes Ger\xE4t wird automatisch ausgew\xE4hlt. W\xE4hlen Sie bei mehreren Ger\xE4ten die gew\xFCnschte Instanz.",registry_error:"Das Ger\xE4teverzeichnis konnte nicht gelesen werden. Erneut versuchen oder unten Entit\xE4ten zuweisen.",retry:"Erneut versuchen",loading:"Ger\xE4te werden geladen\u2026",self_test:"Selbsttest",mute:"Stummschalten",turn_on:"Einschalten",turn_off:"Ausschalten",stop:"Stopp",close:"Schlie\xDFen",service_error:"Der Befehl ist fehlgeschlagen. Bitte erneut versuchen.",not_reported:"Noch nicht gemeldet",connected:"Verbunden",controls_help:"\xD6ffnen Sie den Home-Assistant-Dialog, um diese Entit\xE4t einzustellen.",no_control:"Dieses Ger\xE4t stellt keine Bedienelemente bereit.",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"Gekoppeltes HEIMAN-Ger\xE4t",no_matches:"Keine passenden Modelle",tracking:"\xDCberwachung aktiv",partial:"Einige Messwerte nicht verf\xFCgbar",config_entity:"Hauptentit\xE4t (optional)",diagnostic:"Diagnose",unavailable_readings:"Nicht verf\xFCgbare Messwerte",empty:"Keine gekoppelten HEIMAN-Ger\xE4te gefunden",preview:"Vorschau",remote_self_test:"Fernselbsttest",temporary_mute:"Vor\xFCbergehend stummschalten",indicator:"Statusanzeige",siren_on:"Sirene starten",siren_off:"Sirene stoppen",siren_options:"Sireneneinstellungen",tone:"Klangprofil",duration:"Dauer",volume:"Lautst\xE4rke",seconds:"s",device_default:"Ger\xE4tevorgabe",apply:"\xDCbernehmen",execute:"Ausf\xFChren",more_settings:"Weitere Einstellungen",sending:"Wird gesendet\u2026",command_sent:"Befehl gesendet. Warten auf die Statusmeldung des Ger\xE4ts.",invalid_value:"Geben Sie einen Wert im zul\xE4ssigen Bereich mit passender Schrittweite ein.",strobe:"Blitzlicht",strobe_level:"Blitzlichtst\xE4rke",temperature_offset:"Temperaturkorrektur",humidity_offset:"Feuchtigkeitskorrektur",sensitivity:"Empfindlichkeit",identify:"Ger\xE4t identifizieren",smoke_sound:"Rauchalarm-Klangprofil",co_sound:"CO-Alarm-Klangprofil",fire_sound:"Feueralarm",burglar:"Einbruchalarm",emergency:"Notfall",police_panic:"Polizeialarm",fire_panic:"Feuer-Notfallsignal",emergency_panic:"Notrufsignal",low:"Niedrig",medium:"Mittel",high:"Hoch",very_high:"Sehr hoch"};var gt={home:"Maison",fire:"S\xE9curit\xE9 incendie",minimal:"\xC9pur\xE9",auto:"Automatique",model:"Mod\xE8le du produit",device:"Appareil",style:"Style",name:"Nom de la carte",language:"Langue",search:"Rechercher un mod\xE8le ou un nom de mod\xE8le Zigbee",choose:"Choisir un appareil",choose_device:"Plusieurs appareils correspondent. Choisissez-en un dans l\u2019\xE9diteur de carte.",no_device:"Choisissez un mod\xE8le et un appareil appair\xE9 dans l\u2019\xE9diteur de carte.",missing_device:"Cet appareil n\u2019est plus pr\xE9sent dans Home Assistant.",model_mismatch:"L\u2019appareil choisi ne correspond pas \xE0 ce mod\xE8le. Choisissez le bon mod\xE8le ou Automatique.",no_entities:"Aucune entit\xE9 correspondante. V\xE9rifiez l\u2019appareil ou attribuez les entit\xE9s dans l\u2019\xE9diteur.",unknown:"Inconnu",unavailable:"Indisponible",normal:"Normal",alarm:"Alarme",warning:"\xC0 v\xE9rifier",testing:"Autotest en cours",active:"Actif",inactive:"Inactif",open:"Ouvert",closed:"Ferm\xE9",detected:"D\xE9tect\xE9",clear:"Non d\xE9tect\xE9",on:"Activ\xE9",off:"D\xE9sactiv\xE9",settings:"R\xE9glages de l\u2019appareil",details:"D\xE9tails",more_info:"Plus d\u2019informations",battery:"Batterie",battery_low:"Batterie faible",signal:"Signal",temperature:"Temp\xE9rature",humidity:"Humidit\xE9",smoke:"Fum\xE9e",co:"Monoxyde de carbone",smoke_co:"Fum\xE9e et CO",heat:"Chaleur",gas:"Gaz combustible",leak:"Fuite d\u2019eau",contact:"Porte / fen\xEAtre",motion:"Mouvement / pr\xE9sence",fall:"Chute",vibration:"Vibration",climate:"Temp\xE9rature et humidit\xE9",air:"Qualit\xE9 de l\u2019air",siren:"Sir\xE8ne",plug:"Prise connect\xE9e",switch:"Interrupteur / relais",light:"\xC9clairage",cover:"Rideau",remote:"T\xE9l\xE9commande / bouton",power:"Puissance",energy:"\xC9nergie",voltage:"Tension",current:"Intensit\xE9",illuminance:"\xC9clairement",co2:"CO\u2082",voc:"VOC",pm25:"PM2.5",action:"Derni\xE8re action",control:"Commande principale",tamper:"Sabotage",fault:"D\xE9faut",test:"Autotest",muted:"Son coup\xE9",updated:"Mis \xE0 jour",show_battery:"Afficher la batterie",show_signal:"Afficher le signal",show_details:"Afficher les d\xE9tails",show_controls:"Afficher les commandes",advanced:"Attribution des entit\xE9s",assignments_help:"Les entit\xE9s sont associ\xE9es \xE0 cet appareil. Ne les remplacez que si n\xE9cessaire. Un champ vide utilise l\u2019association automatique.",device_help:"Un seul appareil correspondant est s\xE9lectionn\xE9 automatiquement. Choisissez l\u2019appareil souhait\xE9 s\u2019il y en a plusieurs.",registry_error:"Impossible de lire le registre des appareils. R\xE9essayez ou attribuez les entit\xE9s ci-dessous.",retry:"R\xE9essayer",loading:"Chargement des appareils\u2026",self_test:"Autotest",mute:"Couper le son",turn_on:"Activer",turn_off:"D\xE9sactiver",stop:"Arr\xEAter",close:"Fermer",service_error:"La commande a \xE9chou\xE9. Veuillez r\xE9essayer.",not_reported:"Pas encore signal\xE9",connected:"Connect\xE9",controls_help:"Ouvrez la bo\xEEte de dialogue Home Assistant pour r\xE9gler cette entit\xE9.",no_control:"Cet appareil ne fournit aucune commande.",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"Appareil HEIMAN appair\xE9",no_matches:"Aucun mod\xE8le correspondant",tracking:"Surveillance active",partial:"Certaines mesures sont indisponibles",config_entity:"Entit\xE9 principale (facultatif)",diagnostic:"Diagnostic",unavailable_readings:"Mesures indisponibles",empty:"Aucun appareil HEIMAN appair\xE9 trouv\xE9",preview:"Aper\xE7u",remote_self_test:"Autotest \xE0 distance",temporary_mute:"Couper temporairement le son",indicator:"Voyant d\u2019\xE9tat",siren_on:"D\xE9marrer la sir\xE8ne",siren_off:"Arr\xEAter la sir\xE8ne",siren_options:"R\xE9glages de la sir\xE8ne",tone:"Profil sonore",duration:"Dur\xE9e",volume:"Volume",seconds:"s",device_default:"R\xE9glage de l\u2019appareil",apply:"Appliquer",execute:"Ex\xE9cuter",more_settings:"Autres r\xE9glages",sending:"Envoi en cours\u2026",command_sent:"Commande envoy\xE9e. En attente de l\u2019\xE9tat transmis par l\u2019appareil.",invalid_value:"Saisissez une valeur respectant la plage et le pas autoris\xE9s par l\u2019appareil.",strobe:"Flash",strobe_level:"Intensit\xE9 du flash",temperature_offset:"Correction de temp\xE9rature",humidity_offset:"Correction d\u2019humidit\xE9",sensitivity:"Sensibilit\xE9",identify:"Identifier l\u2019appareil",smoke_sound:"Profil sonore fum\xE9e",co_sound:"Profil sonore CO",fire_sound:"Incendie",burglar:"Intrusion",emergency:"Urgence",police_panic:"Alerte police",fire_panic:"Alerte incendie",emergency_panic:"Alerte d\u2019urgence",low:"Faible",medium:"Moyen",high:"\xC9lev\xE9",very_high:"Tr\xE8s \xE9lev\xE9"};var ft={home:"Hogar",fire:"Seguridad contra incendios",minimal:"Minimalista",auto:"Autom\xE1tico",model:"Modelo del producto",device:"Dispositivo",style:"Estilo",name:"Nombre de la tarjeta",language:"Idioma",search:"Buscar modelos o nombres de modelo Zigbee",choose:"Elegir un dispositivo",choose_device:"Coinciden varios dispositivos. Elija uno en el editor de la tarjeta.",no_device:"Elija un modelo y un dispositivo vinculado en el editor de la tarjeta.",missing_device:"Este dispositivo ya no est\xE1 en Home Assistant.",model_mismatch:"El dispositivo seleccionado no corresponde a este modelo. Elija el modelo correcto o Autom\xE1tico.",no_entities:"No hay entidades coincidentes. Compruebe el dispositivo o asigne las entidades en el editor.",unknown:"Desconocido",unavailable:"No disponible",normal:"Normal",alarm:"Alarma",warning:"Requiere atenci\xF3n",testing:"Autoprueba en curso",active:"Activo",inactive:"Inactivo",open:"Abierto",closed:"Cerrado",detected:"Detectado",clear:"No detectado",on:"Encendido",off:"Apagado",settings:"Ajustes del dispositivo",details:"Detalles",more_info:"M\xE1s informaci\xF3n",battery:"Bater\xEDa",battery_low:"Bater\xEDa baja",signal:"Se\xF1al",temperature:"Temperatura",humidity:"Humedad",smoke:"Humo",co:"Mon\xF3xido de carbono",smoke_co:"Humo y CO",heat:"Calor",gas:"Gas combustible",leak:"Fuga de agua",contact:"Puerta / ventana",motion:"Movimiento / presencia",fall:"Ca\xEDda",vibration:"Vibraci\xF3n",climate:"Temperatura y humedad",air:"Calidad del aire",siren:"Sirena",plug:"Enchufe inteligente",switch:"Interruptor / rel\xE9",light:"Iluminaci\xF3n",cover:"Cortina",remote:"Mando / bot\xF3n",power:"Potencia",energy:"Energ\xEDa",voltage:"Tensi\xF3n",current:"Corriente",illuminance:"Iluminancia",co2:"CO\u2082",voc:"VOC",pm25:"PM2.5",action:"\xDAltima acci\xF3n",control:"Control principal",tamper:"Manipulaci\xF3n",fault:"Fallo",test:"Autoprueba",muted:"Silenciado",updated:"Actualizado",show_battery:"Mostrar bater\xEDa",show_signal:"Mostrar se\xF1al",show_details:"Mostrar detalles",show_controls:"Mostrar controles",advanced:"Asignaci\xF3n de entidades",assignments_help:"Las entidades se vinculan a este dispositivo. C\xE1mbielas solo si es necesario. Los campos vac\xEDos usan la asignaci\xF3n autom\xE1tica.",device_help:"Se selecciona autom\xE1ticamente si solo hay un dispositivo coincidente. Elija la instancia si hay varios.",registry_error:"No se ha podido leer el registro de dispositivos. Reint\xE9ntelo o asigne las entidades a continuaci\xF3n.",retry:"Reintentar",loading:"Cargando dispositivos\u2026",self_test:"Autoprueba",mute:"Silenciar",turn_on:"Encender",turn_off:"Apagar",stop:"Detener",close:"Cerrar",service_error:"La orden ha fallado. Vuelva a intentarlo.",not_reported:"Sin datos recibidos",connected:"Conectado",controls_help:"Abra el di\xE1logo de Home Assistant para ajustar esta entidad.",no_control:"Este dispositivo no ofrece controles.",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"Dispositivo HEIMAN vinculado",no_matches:"No hay modelos coincidentes",tracking:"Supervisi\xF3n activa",partial:"Algunas lecturas no est\xE1n disponibles",config_entity:"Entidad principal (opcional)",diagnostic:"Diagn\xF3stico",unavailable_readings:"Lecturas no disponibles",empty:"No se han encontrado dispositivos HEIMAN vinculados",preview:"Vista previa",remote_self_test:"Autoprueba remota",temporary_mute:"Silenciar temporalmente",indicator:"Indicador de estado",siren_on:"Activar sirena",siren_off:"Detener sirena",siren_options:"Ajustes de la sirena",tone:"Perfil sonoro",duration:"Duraci\xF3n",volume:"Volumen",seconds:"s",device_default:"Valor del dispositivo",apply:"Aplicar",execute:"Ejecutar",more_settings:"M\xE1s ajustes",sending:"Enviando\u2026",command_sent:"Orden enviada. Esperando el estado comunicado por el dispositivo.",invalid_value:"Introduzca un valor dentro del rango y del incremento admitidos por el dispositivo.",strobe:"Destello",strobe_level:"Intensidad del destello",temperature_offset:"Correcci\xF3n de temperatura",humidity_offset:"Correcci\xF3n de humedad",sensitivity:"Sensibilidad",identify:"Identificar dispositivo",smoke_sound:"Perfil sonoro de humo",co_sound:"Perfil sonoro de CO",fire_sound:"Incendio",burglar:"Intrusi\xF3n",emergency:"Emergencia",police_panic:"Alerta policial",fire_panic:"Alerta de incendio",emergency_panic:"Alerta de emergencia",low:"Bajo",medium:"Medio",high:"Alto",very_high:"Muy alto"};var _t={home:"Casa",fire:"Sicurezza antincendio",minimal:"Essenziale",auto:"Automatico",model:"Modello del prodotto",device:"Dispositivo",style:"Stile",name:"Nome della scheda",language:"Lingua",search:"Cerca modelli o nomi di modello Zigbee",choose:"Scegli un dispositivo",choose_device:"Corrispondono pi\xF9 dispositivi. Scegline uno nell\u2019editor della scheda.",no_device:"Scegli un modello e un dispositivo associato nell\u2019editor della scheda.",missing_device:"Questo dispositivo non \xE8 pi\xF9 presente in Home Assistant.",model_mismatch:"Il dispositivo selezionato non corrisponde al modello. Scegli il modello corretto o Automatico.",no_entities:"Nessuna entit\xE0 corrispondente. Controlla il dispositivo o assegna le entit\xE0 nell\u2019editor.",unknown:"Sconosciuto",unavailable:"Non disponibile",normal:"Normale",alarm:"Allarme",warning:"Da controllare",testing:"Autotest in corso",active:"Attivo",inactive:"Inattivo",open:"Aperto",closed:"Chiuso",detected:"Rilevato",clear:"Non rilevato",on:"Acceso",off:"Spento",settings:"Impostazioni del dispositivo",details:"Dettagli",more_info:"Altre informazioni",battery:"Batteria",battery_low:"Batteria scarica",signal:"Segnale",temperature:"Temperatura",humidity:"Umidit\xE0",smoke:"Fumo",co:"Monossido di carbonio",smoke_co:"Fumo e CO",heat:"Calore",gas:"Gas combustibile",leak:"Perdita d\u2019acqua",contact:"Porta / finestra",motion:"Movimento / presenza",fall:"Caduta",vibration:"Vibrazione",climate:"Temperatura e umidit\xE0",air:"Qualit\xE0 dell\u2019aria",siren:"Sirena",plug:"Presa intelligente",switch:"Interruttore / rel\xE8",light:"Illuminazione",cover:"Tenda",remote:"Telecomando / pulsante",power:"Potenza",energy:"Energia",voltage:"Tensione",current:"Corrente",illuminance:"Illuminamento",co2:"CO\u2082",voc:"VOC",pm25:"PM2.5",action:"Ultima azione",control:"Comando principale",tamper:"Manomissione",fault:"Guasto",test:"Autotest",muted:"Silenziato",updated:"Aggiornato",show_battery:"Mostra batteria",show_signal:"Mostra segnale",show_details:"Mostra dettagli",show_controls:"Mostra comandi",advanced:"Assegnazione delle entit\xE0",assignments_help:"Le entit\xE0 vengono associate a questo dispositivo. Modificale solo se necessario. I campi vuoti usano l\u2019associazione automatica.",device_help:"Un solo dispositivo corrispondente viene selezionato automaticamente. Scegli l\u2019istanza se ce ne sono pi\xF9 di uno.",registry_error:"Impossibile leggere il registro dei dispositivi. Riprova o assegna le entit\xE0 qui sotto.",retry:"Riprova",loading:"Caricamento dei dispositivi\u2026",self_test:"Autotest",mute:"Silenzia",turn_on:"Accendi",turn_off:"Spegni",stop:"Arresta",close:"Chiudi",service_error:"Il comando non \xE8 riuscito. Riprova.",not_reported:"Nessun dato ricevuto",connected:"Connesso",controls_help:"Apri la finestra di Home Assistant per regolare questa entit\xE0.",no_control:"Questo dispositivo non espone comandi.",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"Dispositivo HEIMAN associato",no_matches:"Nessun modello corrispondente",tracking:"Monitoraggio attivo",partial:"Alcune letture non sono disponibili",config_entity:"Entit\xE0 principale (facoltativa)",diagnostic:"Diagnostica",unavailable_readings:"Letture non disponibili",empty:"Nessun dispositivo HEIMAN associato trovato",preview:"Anteprima",remote_self_test:"Autotest remoto",temporary_mute:"Silenzia temporaneamente",indicator:"Indicatore di stato",siren_on:"Avvia sirena",siren_off:"Arresta sirena",siren_options:"Impostazioni della sirena",tone:"Profilo sonoro",duration:"Durata",volume:"Volume",seconds:"s",device_default:"Valore del dispositivo",apply:"Applica",execute:"Esegui",more_settings:"Altre impostazioni",sending:"Invio in corso\u2026",command_sent:"Comando inviato. In attesa dello stato trasmesso dal dispositivo.",invalid_value:"Inserisci un valore nell\u2019intervallo e con l\u2019incremento supportati dal dispositivo.",strobe:"Lampeggio",strobe_level:"Intensit\xE0 del lampeggio",temperature_offset:"Correzione della temperatura",humidity_offset:"Correzione dell\u2019umidit\xE0",sensitivity:"Sensibilit\xE0",identify:"Identifica dispositivo",smoke_sound:"Profilo sonoro fumo",co_sound:"Profilo sonoro CO",fire_sound:"Incendio",burglar:"Intrusione",emergency:"Emergenza",police_panic:"Allerta polizia",fire_panic:"Allerta incendio",emergency_panic:"Allerta emergenza",low:"Basso",medium:"Medio",high:"Alto",very_high:"Molto alto"};var vt={home:"Wonen",fire:"Brandveiligheid",minimal:"Eenvoudig",auto:"Automatisch",model:"Productmodel",device:"Apparaat",style:"Stijl",name:"Kaartnaam",language:"Taal",search:"Zoek modellen of Zigbee-modelnamen",choose:"Kies een apparaat",choose_device:"Meerdere apparaten komen overeen. Kies er \xE9\xE9n in de kaarteditor.",no_device:"Kies een model en een gekoppeld apparaat in de kaarteditor.",missing_device:"Dit apparaat is niet meer aanwezig in Home Assistant.",model_mismatch:"Het gekozen apparaat past niet bij dit model. Kies het juiste model of Automatisch.",no_entities:"Geen passende entiteiten. Controleer het apparaat of wijs entiteiten toe in de editor.",unknown:"Onbekend",unavailable:"Niet beschikbaar",normal:"Normaal",alarm:"Alarm",warning:"Aandacht vereist",testing:"Zelftest wordt uitgevoerd",active:"Actief",inactive:"Inactief",open:"Open",closed:"Gesloten",detected:"Gedetecteerd",clear:"Niet gedetecteerd",on:"Aan",off:"Uit",settings:"Apparaatinstellingen",details:"Details",more_info:"Meer informatie",battery:"Batterij",battery_low:"Batterij bijna leeg",signal:"Signaal",temperature:"Temperatuur",humidity:"Luchtvochtigheid",smoke:"Rook",co:"Koolmonoxide",smoke_co:"Rook en CO",heat:"Hitte",gas:"Brandbaar gas",leak:"Waterlekkage",contact:"Deur / raam",motion:"Beweging / aanwezigheid",fall:"Val",vibration:"Trilling",climate:"Temperatuur en luchtvochtigheid",air:"Luchtkwaliteit",siren:"Sirene",plug:"Slim stopcontact",switch:"Schakelaar / relais",light:"Verlichting",cover:"Gordijn",remote:"Afstandsbediening / knop",power:"Vermogen",energy:"Energie",voltage:"Spanning",current:"Stroomsterkte",illuminance:"Verlichtingssterkte",co2:"CO\u2082",voc:"VOC",pm25:"PM2.5",action:"Laatste actie",control:"Hoofdbediening",tamper:"Sabotage",fault:"Storing",test:"Zelftest",muted:"Gedempt",updated:"Bijgewerkt",show_battery:"Batterij tonen",show_signal:"Signaal tonen",show_details:"Details tonen",show_controls:"Bediening tonen",advanced:"Entiteiten toewijzen",assignments_help:"Entiteiten worden binnen dit apparaat gekoppeld. Pas ze alleen aan als dat nodig is. Lege velden gebruiken automatische koppeling.",device_help:"E\xE9n passend apparaat wordt automatisch geselecteerd. Kies het gewenste apparaat als er meerdere zijn.",registry_error:"Kan het apparatenregister niet lezen. Probeer opnieuw of wijs hieronder entiteiten toe.",retry:"Opnieuw proberen",loading:"Apparaten laden\u2026",self_test:"Zelftest",mute:"Dempen",turn_on:"Inschakelen",turn_off:"Uitschakelen",stop:"Stoppen",close:"Sluiten",service_error:"De opdracht is mislukt. Probeer het opnieuw.",not_reported:"Nog niet gemeld",connected:"Verbonden",controls_help:"Open het Home Assistant-dialoogvenster om deze entiteit in te stellen.",no_control:"Dit apparaat biedt geen bediening.",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"Gekoppeld HEIMAN-apparaat",no_matches:"Geen passende modellen",tracking:"Bewaking actief",partial:"Sommige meetwaarden zijn niet beschikbaar",config_entity:"Hoofdentiteit (optioneel)",diagnostic:"Diagnostiek",unavailable_readings:"Niet-beschikbare meetwaarden",empty:"Geen gekoppelde HEIMAN-apparaten gevonden",preview:"Voorbeeld",remote_self_test:"Zelftest op afstand",temporary_mute:"Tijdelijk dempen",indicator:"Statuslampje",siren_on:"Sirene starten",siren_off:"Sirene stoppen",siren_options:"Sirene-instellingen",tone:"Geluidsprofiel",duration:"Duur",volume:"Volume",seconds:"s",device_default:"Apparaatstandaard",apply:"Toepassen",execute:"Uitvoeren",more_settings:"Meer instellingen",sending:"Verzenden\u2026",command_sent:"Opdracht verzonden. Wachten op de statusmelding van het apparaat.",invalid_value:"Voer een waarde in binnen het bereik en de stapgrootte van het apparaat.",strobe:"Flitslicht",strobe_level:"Flitssterkte",temperature_offset:"Temperatuurcorrectie",humidity_offset:"Vochtigheidscorrectie",sensitivity:"Gevoeligheid",identify:"Apparaat identificeren",smoke_sound:"Rookalarmgeluid",co_sound:"CO-alarmgeluid",fire_sound:"Brandalarm",burglar:"Inbraakalarm",emergency:"Noodsignaal",police_panic:"Politiealarm",fire_panic:"Brandnoodsignaal",emergency_panic:"Noodhulpsignaal",low:"Laag",medium:"Gemiddeld",high:"Hoog",very_high:"Zeer hoog"};var yt={home:"Casa",fire:"Seguran\xE7a contra inc\xEAndios",minimal:"Simples",auto:"Autom\xE1tico",model:"Modelo do produto",device:"Dispositivo",style:"Estilo",name:"Nome do cart\xE3o",language:"Idioma",search:"Pesquisar modelos ou nomes de modelo Zigbee",choose:"Escolher um dispositivo",choose_device:"Existem v\xE1rios dispositivos correspondentes. Escolha um no editor do cart\xE3o.",no_device:"Escolha um modelo e um dispositivo emparelhado no editor do cart\xE3o.",missing_device:"Este dispositivo j\xE1 n\xE3o est\xE1 no Home Assistant.",model_mismatch:"O dispositivo selecionado n\xE3o corresponde a este modelo. Escolha o modelo correto ou Autom\xE1tico.",no_entities:"N\xE3o existem entidades correspondentes. Verifique o dispositivo ou atribua entidades no editor.",unknown:"Desconhecido",unavailable:"Indispon\xEDvel",normal:"Normal",alarm:"Alarme",warning:"Requer aten\xE7\xE3o",testing:"Autoteste em curso",active:"Ativo",inactive:"Inativo",open:"Aberto",closed:"Fechado",detected:"Detetado",clear:"N\xE3o detetado",on:"Ligado",off:"Desligado",settings:"Defini\xE7\xF5es do dispositivo",details:"Detalhes",more_info:"Mais informa\xE7\xF5es",battery:"Bateria",battery_low:"Bateria fraca",signal:"Sinal",temperature:"Temperatura",humidity:"Humidade",smoke:"Fumo",co:"Mon\xF3xido de carbono",smoke_co:"Fumo e CO",heat:"Calor",gas:"G\xE1s combust\xEDvel",leak:"Fuga de \xE1gua",contact:"Porta / janela",motion:"Movimento / presen\xE7a",fall:"Queda",vibration:"Vibra\xE7\xE3o",climate:"Temperatura e humidade",air:"Qualidade do ar",siren:"Sirene",plug:"Tomada inteligente",switch:"Interruptor / rel\xE9",light:"Ilumina\xE7\xE3o",cover:"Cortina",remote:"Comando / bot\xE3o",power:"Pot\xEAncia",energy:"Energia",voltage:"Tens\xE3o",current:"Corrente",illuminance:"Ilumin\xE2ncia",co2:"CO\u2082",voc:"VOC",pm25:"PM2.5",action:"\xDAltima a\xE7\xE3o",control:"Comando principal",tamper:"Viola\xE7\xE3o",fault:"Falha",test:"Autoteste",muted:"Silenciado",updated:"Atualizado",show_battery:"Mostrar bateria",show_signal:"Mostrar sinal",show_details:"Mostrar detalhes",show_controls:"Mostrar comandos",advanced:"Atribui\xE7\xE3o de entidades",assignments_help:"As entidades s\xE3o associadas a este dispositivo. Altere-as apenas se necess\xE1rio. Os campos vazios usam a associa\xE7\xE3o autom\xE1tica.",device_help:"Um \xFAnico dispositivo correspondente \xE9 selecionado automaticamente. Escolha o pretendido se existirem v\xE1rios.",registry_error:"N\xE3o foi poss\xEDvel ler o registo de dispositivos. Tente novamente ou atribua entidades abaixo.",retry:"Tentar novamente",loading:"A carregar dispositivos\u2026",self_test:"Autoteste",mute:"Silenciar",turn_on:"Ligar",turn_off:"Desligar",stop:"Parar",close:"Fechar",service_error:"O comando falhou. Tente novamente.",not_reported:"Ainda n\xE3o comunicado",connected:"Ligado",controls_help:"Abra a janela do Home Assistant para ajustar esta entidade.",no_control:"Este dispositivo n\xE3o disponibiliza comandos.",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"Dispositivo HEIMAN emparelhado",no_matches:"Nenhum modelo correspondente",tracking:"Monitoriza\xE7\xE3o ativa",partial:"Algumas leituras est\xE3o indispon\xEDveis",config_entity:"Entidade principal (opcional)",diagnostic:"Diagn\xF3stico",unavailable_readings:"Leituras indispon\xEDveis",empty:"N\xE3o foram encontrados dispositivos HEIMAN emparelhados",preview:"Pr\xE9-visualiza\xE7\xE3o",remote_self_test:"Autoteste remoto",temporary_mute:"Silenciar temporariamente",indicator:"Indicador de estado",siren_on:"Iniciar sirene",siren_off:"Parar sirene",siren_options:"Defini\xE7\xF5es da sirene",tone:"Perfil sonoro",duration:"Dura\xE7\xE3o",volume:"Volume",seconds:"s",device_default:"Predefini\xE7\xE3o do dispositivo",apply:"Aplicar",execute:"Executar",more_settings:"Mais defini\xE7\xF5es",sending:"A enviar\u2026",command_sent:"Comando enviado. A aguardar o estado comunicado pelo dispositivo.",invalid_value:"Introduza um valor dentro do intervalo e do incremento suportados pelo dispositivo.",strobe:"Luz intermitente",strobe_level:"Intensidade da luz",temperature_offset:"Corre\xE7\xE3o da temperatura",humidity_offset:"Corre\xE7\xE3o da humidade",sensitivity:"Sensibilidade",identify:"Identificar dispositivo",smoke_sound:"Perfil sonoro de fumo",co_sound:"Perfil sonoro de CO",fire_sound:"Inc\xEAndio",burglar:"Intrus\xE3o",emergency:"Emerg\xEAncia",police_panic:"Alerta policial",fire_panic:"Alerta de inc\xEAndio",emergency_panic:"Alerta de emerg\xEAncia",low:"Baixo",medium:"M\xE9dio",high:"Alto",very_high:"Muito alto"};var bt={home:"Dom",fire:"Ochrona przeciwpo\u017Carowa",minimal:"Prosty",auto:"Automatycznie",model:"Model produktu",device:"Urz\u0105dzenie",style:"Styl",name:"Nazwa karty",language:"J\u0119zyk",search:"Szukaj modeli lub nazw modeli Zigbee",choose:"Wybierz urz\u0105dzenie",choose_device:"Pasuje kilka urz\u0105dze\u0144. Wybierz jedno w edytorze karty.",no_device:"Wybierz model i sparowane urz\u0105dzenie w edytorze karty.",missing_device:"Tego urz\u0105dzenia nie ma ju\u017C w Home Assistant.",model_mismatch:"Wybrane urz\u0105dzenie nie pasuje do tego modelu. Wybierz w\u0142a\u015Bciwy model lub tryb automatyczny.",no_entities:"Brak pasuj\u0105cych encji. Sprawd\u017A urz\u0105dzenie lub przypisz encje w edytorze.",unknown:"Nieznane",unavailable:"Niedost\u0119pne",normal:"Prawid\u0142owo",alarm:"Alarm",warning:"Wymaga uwagi",testing:"Trwa autotest",active:"Aktywne",inactive:"Nieaktywne",open:"Otwarte",closed:"Zamkni\u0119te",detected:"Wykryto",clear:"Nie wykryto",on:"W\u0142\u0105czone",off:"Wy\u0142\u0105czone",settings:"Ustawienia urz\u0105dzenia",details:"Szczeg\xF3\u0142y",more_info:"Wi\u0119cej informacji",battery:"Bateria",battery_low:"Niski poziom baterii",signal:"Sygna\u0142",temperature:"Temperatura",humidity:"Wilgotno\u015B\u0107",smoke:"Dym",co:"Tlenek w\u0119gla",smoke_co:"Dym i CO",heat:"Wysoka temperatura",gas:"Gaz palny",leak:"Wyciek wody",contact:"Drzwi / okno",motion:"Ruch / obecno\u015B\u0107",fall:"Upadek",vibration:"Wibracje",climate:"Temperatura i wilgotno\u015B\u0107",air:"Jako\u015B\u0107 powietrza",siren:"Syrena",plug:"Inteligentne gniazdko",switch:"Prze\u0142\u0105cznik / przeka\u017Anik",light:"O\u015Bwietlenie",cover:"Zas\u0142ona",remote:"Pilot / przycisk",power:"Moc",energy:"Energia",voltage:"Napi\u0119cie",current:"Nat\u0119\u017Cenie pr\u0105du",illuminance:"Nat\u0119\u017Cenie o\u015Bwietlenia",co2:"CO\u2082",voc:"VOC",pm25:"PM2.5",action:"Ostatnia czynno\u015B\u0107",control:"Sterowanie g\u0142\xF3wne",tamper:"Sabota\u017C",fault:"Usterka",test:"Autotest",muted:"Wyciszone",updated:"Zaktualizowano",show_battery:"Poka\u017C bateri\u0119",show_signal:"Poka\u017C sygna\u0142",show_details:"Poka\u017C szczeg\xF3\u0142y",show_controls:"Poka\u017C sterowanie",advanced:"Przypisanie encji",assignments_help:"Encje s\u0105 dopasowywane w obr\u0119bie tego urz\u0105dzenia. Zmieniaj je tylko w razie potrzeby. Puste pola oznaczaj\u0105 dopasowanie automatyczne.",device_help:"Jedno pasuj\u0105ce urz\u0105dzenie jest wybierane automatycznie. Gdy jest ich kilka, wybierz w\u0142a\u015Bciwe.",registry_error:"Nie mo\u017Cna odczyta\u0107 rejestru urz\u0105dze\u0144. Spr\xF3buj ponownie lub przypisz encje poni\u017Cej.",retry:"Spr\xF3buj ponownie",loading:"Wczytywanie urz\u0105dze\u0144\u2026",self_test:"Autotest",mute:"Wycisz",turn_on:"W\u0142\u0105cz",turn_off:"Wy\u0142\u0105cz",stop:"Zatrzymaj",close:"Zamknij",service_error:"Wykonanie polecenia nie powiod\u0142o si\u0119. Spr\xF3buj ponownie.",not_reported:"Jeszcze nie zg\u0142oszono",connected:"Po\u0142\u0105czono",controls_help:"Otw\xF3rz okno Home Assistant, aby zmieni\u0107 ustawienia tej encji.",no_control:"To urz\u0105dzenie nie udost\u0119pnia element\xF3w sterowania.",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"Sparowane urz\u0105dzenie HEIMAN",no_matches:"Brak pasuj\u0105cych modeli",tracking:"Monitorowanie aktywne",partial:"Niekt\xF3re odczyty s\u0105 niedost\u0119pne",config_entity:"Encja g\u0142\xF3wna (opcjonalnie)",diagnostic:"Diagnostyka",unavailable_readings:"Niedost\u0119pne odczyty",empty:"Nie znaleziono sparowanych urz\u0105dze\u0144 HEIMAN",preview:"Podgl\u0105d",remote_self_test:"Zdalny autotest",temporary_mute:"Wycisz tymczasowo",indicator:"Dioda stanu",siren_on:"Uruchom syren\u0119",siren_off:"Zatrzymaj syren\u0119",siren_options:"Ustawienia syreny",tone:"Profil d\u017Awi\u0119kowy",duration:"Czas trwania",volume:"G\u0142o\u015Bno\u015B\u0107",seconds:"s",device_default:"Domy\u015Blne urz\u0105dzenia",apply:"Zastosuj",execute:"Wykonaj",more_settings:"Wi\u0119cej ustawie\u0144",sending:"Wysy\u0142anie\u2026",command_sent:"Polecenie wys\u0142ano. Oczekiwanie na stan zg\u0142oszony przez urz\u0105dzenie.",invalid_value:"Wprowad\u017A warto\u015B\u0107 z zakresu i z krokiem obs\u0142ugiwanym przez urz\u0105dzenie.",strobe:"Lampa b\u0142yskowa",strobe_level:"Intensywno\u015B\u0107 b\u0142ysku",temperature_offset:"Korekta temperatury",humidity_offset:"Korekta wilgotno\u015Bci",sensitivity:"Czu\u0142o\u015B\u0107",identify:"Zidentyfikuj urz\u0105dzenie",smoke_sound:"Profil alarmu dymowego",co_sound:"Profil alarmu CO",fire_sound:"Po\u017Car",burglar:"W\u0142amanie",emergency:"Zagro\u017Cenie",police_panic:"Alarm policyjny",fire_panic:"Alarm po\u017Carowy",emergency_panic:"Alarm ratunkowy",low:"Niski",medium:"\u015Aredni",high:"Wysoki",very_high:"Bardzo wysoki"};var V={zh:"\u7B80\u4F53\u4E2D\u6587",en:"English",de:"Deutsch",fr:"Fran\xE7ais",es:"Espa\xF1ol",it:"Italiano",nl:"Nederlands",pt:"Portugu\xEAs",pl:"Polski"},si={en:ue,zh:mt,de:ht,fr:gt,es:ft,it:_t,nl:vt,pt:yt,pl:bt};function O(s,t){if(s?.language&&s.language!=="auto")return s.language;let e=(t?.locale?.language??t?.language??"en").toLowerCase().split(/[-_]/)[0];return Object.hasOwn(V,e)?e:"en"}var pe=(s,t)=>(si[s]??ue)[t]??ue[t];var Te=["smoke","co","heat","gas","leak","contact","motion","fall","vibration","temperature","humidity","battery","battery_low","tamper","fault","test","muted","signal","power","energy","voltage","current","illuminance","co2","voc","pm25","action","control"];function Re(s){if(!s||typeof s!="object")throw new Error("HEIMAN: configuration must be an object.");if(s.model!==void 0&&(typeof s.model!="string"||s.model!=="auto"&&!D(s.model)))throw new Error(`HEIMAN: unknown model ${String(s.model)}.`);if(s.style!==void 0&&!["home","fire","minimal"].includes(s.style))throw new Error("HEIMAN: style must be home, fire or minimal.");if(s.language!==void 0&&s.language!=="auto"&&!Object.hasOwn(V,s.language))throw new Error(`HEIMAN: language must be auto or one of ${Object.keys(V).join(", ")}.`);for(let t of["name","device_id","entity"])if(s[t]!==void 0&&typeof s[t]!="string")throw new Error(`HEIMAN: ${t} must be a string.`);for(let t of["show_battery","show_signal","show_details","show_controls"])if(s[t]!==void 0&&typeof s[t]!="boolean")throw new Error(`HEIMAN: ${t} must be a boolean.`);if(s.entity&&!/^\w+\.[\w]+$/.test(s.entity))throw new Error("HEIMAN: invalid entity ID.");if(s.entities!==void 0){if(!s.entities||typeof s.entities!="object"||Array.isArray(s.entities))throw new Error("HEIMAN: entities must map roles to entity IDs.");for(let[t,e]of Object.entries(s.entities))if(!Te.includes(t)||typeof e!="string"||!/^\w+\.[\w]+$/.test(e))throw new Error(`HEIMAN: invalid entity override for ${t}.`)}return{...s,type:"custom:heiman-device-card",model:D(s.model)?.id??"auto",style:s.style??"home",language:s.language??"auto",entities:{...s.entities}}}var B=class extends w{constructor(){super(...arguments);this._config=Re({type:"custom:heiman-device-card"});this._registry={devices:[],entities:[]};this._registryError=!1;this._loading=!1;this._request=0}static{this.properties={hass:{attribute:!1},_config:{state:!0},_registry:{state:!0},_registryError:{state:!0},_loading:{state:!0}}}setConfig(e){this._config=Re(e)}t(e){return pe(O(this._config,this.hass),e)}updated(e){this.lang=O(this._config,this.hass),e.has("hass")&&this._syncRegistry()}connectedCallback(){super.connectedCallback(),this.hass&&this._syncRegistry(!0)}disconnectedCallback(){this._request++,this._registryKey=void 0,super.disconnectedCallback()}async _syncRegistry(e=!1){let i=this.hass;if(!i)return;let a=He(i)??(this._devicesRef&&i.devices&&i.entities?{devices:Object.values(i.devices),entities:Object.values(i.entities)}:void 0);if(a){(e||this._devicesRef!==i.devices||this._entitiesRef!==i.entities)&&(this._request++,this._registry=a,this._devicesRef=i.devices,this._entitiesRef=i.entities,this._registryError=!1,this._loading=!1);return}let n=i.connection??i;if(!e&&n===this._registryKey)return;this._registryKey=n;let o=++this._request;this._loading=!0,this._registryError=!1;try{let l=await dt(i,e);o===this._request&&this.isConnected&&(this._registry=l)}catch{o===this._request&&this.isConnected&&(this._registryError=!0)}finally{o===this._request&&this.isConnected&&(this._loading=!1)}}_moreInfo(e){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}};var St=C`
  :host {
    display: block;
    height: 100%;
    font-family: var(
      --paper-font-body1_-_font-family,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif
    );
  }
  * {
    box-sizing: border-box;
  }
  ha-card {
    --surface: #faf9f5;
    --ink: #303b33;
    --muted: #757d73;
    --line: #e6e8df;
    --tile: #f0f2e9;
    --accent: #5b7354;
    --device-face: #fefefb;
    --device-edge: #e7e9e1;
    --device-stroke: #d6d9cf;
    --device-slot: #a0a89a;
    --status-color: #4d785c;
    --status-bg: #e6eee3;
    display: block;
    min-width: 0;
    height: 100%;
    overflow: hidden;
    color: var(--ink);
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: var(--ha-card-border-radius, 20px);
    box-shadow: var(--ha-card-box-shadow, none);
  }
  ha-card[data-dark] {
    --surface: #252c27;
    --ink: #e4e9e2;
    --muted: #a3afa1;
    --line: #3b443c;
    --tile: #303b32;
    --accent: #adca9f;
    --device-face: #dce2d8;
    --device-edge: #bcc5b7;
    --device-stroke: #a5b29f;
    --device-slot: #71816b;
    --status-color: #b6d8ac;
    --status-bg: #354b36;
  }
  ha-card.fire {
    --surface: #161f2c;
    --ink: #f0f4fa;
    --muted: #a2afc1;
    --line: #344152;
    --tile: #202d3e;
    --accent: #ff6e5f;
    --device-face: #dce3ec;
    --device-edge: #a9b7c8;
    --device-stroke: #93a3b7;
    --device-slot: #6b7d93;
    --status-color: #8cddbe;
    --status-bg: #203d37;
    border-top: 3px solid #ed6555;
    border-radius: var(--ha-card-border-radius, 16px);
  }
  ha-card.minimal {
    --surface: var(--ha-card-background, var(--card-background-color, #fff));
    --ink: var(--primary-text-color, #212121);
    --muted: var(--secondary-text-color, #616161);
    --line: var(--divider-color, #ddd);
    --tile: var(--secondary-background-color, #f5f5f5);
    --accent: var(--primary-color, #0288d1);
    border-radius: var(--ha-card-border-radius, 12px);
  }
  ha-card[data-severity="alarm"] {
    --status-color: #b32929;
    --status-bg: #fde5e1;
  }
  ha-card[data-severity="warning"] {
    --status-color: #875400;
    --status-bg: #fff0cf;
  }
  ha-card[data-severity="active"] {
    --status-color: #286c92;
    --status-bg: #e3eff7;
  }
  ha-card[data-severity="unknown"],
  ha-card[data-severity="unavailable"] {
    --status-color: var(--muted);
    --status-bg: var(--tile);
  }
  ha-card[data-severity="unavailable"] {
    filter: grayscale(1);
  }
  ha-card.fire[data-severity="alarm"],
  ha-card[data-dark][data-severity="alarm"] {
    --status-color: #ffaaa0;
    --status-bg: #4b292c;
  }
  ha-card.fire[data-severity="warning"],
  ha-card[data-dark][data-severity="warning"] {
    --status-color: #f4ce89;
    --status-bg: #493a26;
  }
  ha-card.fire[data-severity="active"],
  ha-card[data-dark][data-severity="active"] {
    --status-color: #a0d9ff;
    --status-bg: #233c54;
  }
  button {
    font: inherit;
    cursor: pointer;
    color: inherit;
  }
  button:disabled {
    cursor: default;
    opacity: 0.5;
  }
  button:focus-visible,
  summary:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
  }
  .body {
    padding: 22px 22px 18px;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  .brand {
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 2.4px;
    color: var(--accent);
  }
  .model {
    border: 1px solid var(--line);
    padding: 4px 8px;
    font-size: 10px;
    letter-spacing: 0.4px;
    border-radius: 6px;
    color: var(--muted);
    max-width: 68%;
    overflow-wrap: anywhere;
  }
  .heading {
    margin-top: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.4px;
    margin: 0;
    overflow-wrap: anywhere;
    line-height: 1.35;
  }
  .subheading {
    margin-top: 5px;
    color: var(--muted);
    font-size: 12px;
    overflow-wrap: anywhere;
  }
  .icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 0;
    border-radius: 50%;
    background: transparent;
    color: var(--muted);
    flex-shrink: 0;
  }
  .icon-button:hover {
    background: var(--tile);
  }
  .hero {
    display: flex;
    align-items: center;
    min-height: 145px;
    gap: 12px;
  }
  .illustration {
    width: 124px;
    flex: 0 0 124px;
    margin-left: -8px;
  }
  .product {
    display: block;
    width: 100%;
  }
  .status {
    min-width: 0;
  }
  .status-label {
    font-size: 27px;
    letter-spacing: -0.8px;
    font-weight: 600;
    line-height: 1.3;
    color: var(--status-color);
    overflow-wrap: anywhere;
  }
  .status-caption {
    color: var(--muted);
    margin-top: 7px;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .dot {
    width: 6px;
    height: 6px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--status-color);
  }
  .status-tag {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 8px;
    border-radius: 6px;
    background: var(--status-bg);
    color: var(--status-color);
    font-size: 11px;
    margin-top: 9px;
  }
  .metrics {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }
  .metric {
    border: 0;
    border-radius: 11px;
    text-align: left;
    padding: 12px;
    background: var(--tile);
    min-width: 0;
  }
  .metric:hover {
    filter: brightness(0.97);
  }
  .metric-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    color: var(--muted);
  }
  .metric-value {
    display: block;
    font-size: 20px;
    font-weight: 500;
    margin-top: 7px;
    letter-spacing: -0.5px;
    overflow-wrap: anywhere;
  }
  .alerts {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 12px;
  }
  .alert {
    display: inline-flex;
    gap: 5px;
    align-items: center;
    color: var(--status-color);
    background: var(--status-bg);
    padding: 5px 8px;
    border-radius: 6px;
    font-size: 12px;
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 14px;
  }
  .action {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    min-height: 42px;
    padding: 8px 12px;
    background: transparent;
    border: 1px solid var(--line);
    border-radius: 8px;
    font-size: 12px;
    flex: 1 1 auto;
  }
  .action:hover {
    background: var(--tile);
  }
  .footer {
    border-top: 1px solid var(--line);
    margin-top: 16px;
    padding-top: 12px;
    color: var(--muted);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    font-size: 10px;
  }
  .footer span {
    overflow-wrap: anywhere;
  }
  details {
    margin-top: 12px;
    font-size: 12px;
  }
  summary {
    cursor: pointer;
    color: var(--muted);
    padding: 7px 0;
  }
  .entity-row {
    display: flex;
    justify-content: space-between;
    gap: 14px;
    padding: 10px 0;
    text-align: left;
    width: 100%;
    background: transparent;
    border: 0;
    border-top: 1px solid var(--line);
    font-size: 12px;
  }
  .entity-row span {
    overflow-wrap: anywhere;
  }
  .entity-row span:first-child {
    color: var(--muted);
  }
  .entity-row span:last-child {
    text-align: right;
  }
  .empty {
    padding: 28px 22px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.7;
  }
  .empty .brand {
    margin-bottom: 16px;
  }
  .error {
    font-size: 12px;
    color: var(--error-color, #c13c34);
    margin-top: 10px;
  }
  .partial {
    font-size: 11px;
    color: var(--muted);
    margin: 10px 0 0;
  }
  @container (max-width: 280px) {
    .illustration {
      width: 90px;
      flex-basis: 90px;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
`;var kt={smoke:"M6 17h12M8 21h8M4 13h16M8 9c-4-4 4-4 0-8M16 9c-4-4 4-4 0-8",co:"M8 7a5 5 0 1 0 0 10M16 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z",temperature:"M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0ZM12 11v7",gas:"M12 2c1 6 7 7 7 13a7 7 0 0 1-14 0c0-4 3-6 4-8 0 4 2 4 3 5 1-4 0-7 0-10Z",water:"M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z",door:"M4 21h16M6 21V4l12-2v19M14 12h.01",motion:"M12 5h.01M9 10l3-2 3 4 3 1M12 9l-2 6-4 4M10 15l5 2 1 4",air:"M3 8h12a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h5a3 3 0 1 1-3 3",bell:"M5 17h14l-2-3V9a5 5 0 0 0-10 0v5l-2 3ZM10 21h4",power:"M12 2v9M7 5a8 8 0 1 0 10 0",light:"M9 18h6M10 22h4M8 15a7 7 0 1 1 8 0l-1 3H9l-1-3Z",cover:"M3 3h18v18H3V3ZM3 7h18M3 11h18M3 15h18M12 3v18",remote:"M7 2h10v20H7V2ZM10 6h4M10 11h.01M14 11h.01M10 16h.01M14 16h.01",battery:"M9 2h6M7 5h10v17H7V5ZM10 10h4M10 14h4",signal:"M4 20v-3M9 20v-7M14 20V9M19 20V4",check:"m5 12 4 4L19 6",info:"M12 11v6M12 7h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",alert:"m12 3 10 18H2L12 3ZM12 9v5M12 17h.01",settings:"M4 7h16M4 17h16M8 4v6M16 14v6",humidity:"M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13ZM9 17l6-6M9 11h.01M15 17h.01",energy:"m13 2-9 12h7l-1 8 10-13h-8l1-7Z",stop:"M6 6h12v12H6V6Z",chevron:"m9 5 7 7-7 7"},S=(s,t=20)=>x`<svg width=${t} height=${t} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${kt[s]??kt.info}></path></svg>`;function wt(s){let t=["smoke","co","smoke_co","heat","gas","siren","leak","motion","fall"].includes(s);return x`<svg class="product" viewBox="0 0 160 150" aria-hidden="true">
    <ellipse cx="80" cy="135" rx="47" ry="7" fill="currentColor" opacity=".08"></ellipse>
    ${t?x`
      <circle cx="80" cy="72" r="57" fill="var(--device-edge)" stroke="var(--device-stroke)" stroke-width="1"></circle>
      <circle cx="80" cy="68" r="53" fill="var(--device-face)" stroke="var(--device-stroke)" stroke-width="1"></circle>
      <circle cx="80" cy="68" r="40" fill="none" stroke="var(--device-stroke)" stroke-width="1"></circle>
      ${[0,1,2,3,4,5,6,7,8,9,10,11].map(e=>x`<path transform="rotate(${e*30} 80 68)" d="M74 23h12" stroke="var(--device-slot)" stroke-width="2.5" stroke-linecap="round"></path>`)}
      <text x="80" y="62" text-anchor="middle" font-size="8" font-family="Arial, sans-serif" font-weight="700" letter-spacing="1" fill="var(--device-slot)">HEIMAN</text>
      <circle cx="80" cy="80" r="10" fill="var(--device-edge)" stroke="var(--device-stroke)"></circle>
      <circle cx="80" cy="102" r="2" fill="var(--status-color)"></circle>
    `:x`
      <rect x="40" y="15" width="80" height="112" rx="22" fill="var(--device-edge)" stroke="var(--device-stroke)"></rect>
      <rect x="40" y="12" width="80" height="109" rx="22" fill="var(--device-face)" stroke="var(--device-stroke)"></rect>
      <text x="80" y="100" text-anchor="middle" font-size="8" font-family="Arial, sans-serif" font-weight="700" letter-spacing="1" fill="var(--device-slot)">HEIMAN</text>
      ${["climate","air"].includes(s)?x`<rect x="50" y="32" width="60" height="42" rx="6" fill="var(--device-edge)" stroke="var(--device-stroke)"></rect><path d="M61 45h14m-14 7h14m-14 7h14m10-14h13m-13 7h13" stroke="var(--device-slot)" stroke-width="2"></path>`:x`<circle cx="80" cy="57" r="17" fill="var(--device-edge)" stroke="var(--device-stroke)"></circle><path d="M80 45v12m-6-9a10 10 0 1 0 12 0" stroke="var(--device-slot)" stroke-width="2" fill="none" stroke-linecap="round"></path>`}
      <circle cx="80" cy="109" r="2" fill="var(--status-color)"></circle>
    `}
  </svg>`}var z=s=>!s||["unknown","unavailable","none",""].includes(s.state.toLowerCase()),M=s=>!!(s&&["on","true","1","detected","alarm","open"].includes(s.state.toLowerCase())),Ne={smoke:["smoke"],co:["co"],smoke_co:["smoke","co"],heat:["heat"],gas:["gas"],leak:["leak"],contact:["contact"],motion:["motion"],fall:["fall","motion"],vibration:["vibration"],climate:["temperature","humidity"],air:["co2","voc","pm25","temperature","humidity"],plug:["control"],switch:["control"],light:["control"],cover:["control"],remote:["action","battery"],siren:["control"]};function $t(s,t,e){let i=g=>g.flatMap(f=>t[f]??[]),a=Ne[s]??[],n=i(a),o=["smoke","co","heat","gas","leak"].includes(s)||s==="smoke_co",d=i(["smoke","co","heat","gas","leak"]).find(g=>b(g)==="binary_sensor"&&M(e.states[g])),r=["battery_low","tamper","fault"].filter(g=>(t[g]??[]).some(f=>{let $=e.states[f];return z($)?!1:g==="fault"&&b(f)==="sensor"?!["normal","clear","ok","off","0","false","no_fault"].includes($.state.toLowerCase()):M($)}));(t.battery??[]).some(g=>{let f=e.states[g];return!z(f)&&Number.isFinite(Number(f.state))&&Number(f.state)<=20})&&!r.includes("battery_low")&&r.push("battery_low");let p=g=>b(g)==="binary_sensor"&&["on","off","true","false","1","0","detected","clear","alarm"].includes(e.states[g]?.state.toLowerCase()),c=n.some(g=>z(e.states[g])||o&&!p(g)),_=n.find(g=>!z(e.states[g]))??n[0];if(d)return{severity:"alarm",key:"alarm",primary:d,alerts:r,partial:c};let v=o&&a.some(g=>!t[g]?.length);if(!_||v)return{severity:"unknown",key:"unknown",primary:_,alerts:r,partial:c};if(o&&c||n.every(g=>z(e.states[g]))){let g=n.some(f=>e.states[f]?.state==="unavailable");return{severity:g?"unavailable":"unknown",key:g?"unavailable":"unknown",primary:_,alerts:r,partial:c}}if(r.length)return{severity:"warning",key:"warning",primary:_,alerts:r,partial:c};if(i(["test"]).some(g=>M(e.states[g])))return{severity:"active",key:"testing",primary:_,alerts:r,partial:c};let y=n.some(g=>M(e.states[g]));if(s==="contact"||s==="cover"){let g=s==="cover"?n.some(f=>["open","opening","closing"].includes(e.states[f]?.state)):y;return{severity:g?"active":"normal",key:g?"open":"closed",primary:_,alerts:r,partial:c}}return["motion","fall","vibration"].includes(s)?{severity:s==="fall"&&y?"alarm":y?"active":"normal",key:y?"detected":"clear",primary:_,alerts:r,partial:c}:["plug","switch","light","siren"].includes(s)?{severity:y?"active":"normal",key:y?"on":"off",primary:_,alerts:r,partial:c}:s==="remote"?{severity:"normal",key:"tracking",primary:_,alerts:r,partial:c}:{severity:"normal",key:"normal",primary:_,alerts:r,partial:c}}function At(s,t){if(!t)return"\u2014";if(s.formatEntityState)try{return s.formatEntityState(t)}catch{}let e=t.attributes.unit_of_measurement;return`${t.state}${e?` ${String(e)}`:""}`}var me=class extends B{constructor(){super(...arguments);this._busy=!1;this._serviceError=!1;this._watchedEntities=new Set}static{this.styles=St}static{this.properties={_busy:{state:!0},_serviceError:{state:!0}}}shouldUpdate(e){if(e.size!==1||!e.has("hass"))return!0;let i=e.get("hass"),a=this.hass;if(!i||!a)return!0;for(let n of["devices","entities","areas","locale","language","themes","connection"])if(i[n]!==a[n])return!0;return[...this._watchedEntities].some(n=>i.states[n]!==a.states[n])}static getConfigElement(){return document.createElement("heiman-device-card-editor")}static getStubConfig(){return{type:"custom:heiman-device-card",model:"auto",style:"home"}}getCardSize(){return 7}getGridOptions(){return{columns:6,rows:"auto",min_columns:3}}render(){let e=this.hass;if(!e)return m;let i=W(this._config,e,this._registry),{device:a,preset:n,bindings:o,entities:l,reason:d}=i;this._watchedEntities=new Set([...l.map(h=>h.entity_id),...Object.values(o).flatMap(h=>h??[])]);let r=this._config.style??"home",p=Object.values(o).some(h=>h?.length);if(d||!n||!a&&!p)return u` <ha-card
        class=${r}
        data-severity="unknown"
        ?data-dark=${e.themes?.darkMode}
      >
        <div class="empty">
          <div class="brand">HEIMAN</div>
          <p>
            ${this.t(this._loading?"loading":this._registryError&&!p?"registry_error":d??"no_entities")}
          </p>
          ${this._registryError?u`<button class="action" @click=${()=>this._syncRegistry(!0)}>${this.t("retry")}</button>`:m}
        </div>
      </ha-card>`;let c=$t(n.kind,o,e),_=c.primary??this._config.entity??l.find(h=>!h.disabled_by&&!h.hidden_by&&!h.hidden)?.entity_id,v=this._config.name||a?.name_by_user||a?.name||n.id,y=a?.area_id?e.areas?.[a.area_id]?.name:void 0,g=l.find(h=>h.platform)?.platform,f=g==="zha"?"ZHA":g==="mqtt"?"MQTT":g,$=["temperature","humidity","co2","pm25","voc","power","energy","illuminance","action"];this._config.show_battery!==!1&&$.push("battery"),this._config.show_signal!==!1&&$.push("signal");let Oe=$.flatMap(h=>o[h]?.[0]?[{role:h,id:o[h][0]}]:[]),Le=this._config.show_controls!==!1?(o.control??[]).filter(h=>b(h)!=="siren"):[],je=[...new Map([...pt(l,e,n.kind),...l.filter(h=>b(h.entity_id)==="siren"&&!h.disabled_by&&!h.hidden_by&&!h.hidden),...(o.control??[]).filter(h=>b(h)==="siren").map(h=>l.find(q=>q.entity_id===h)??{entity_id:h})].map(h=>[h.entity_id,h])).values()],Fe=Object.values(o).flatMap(h=>h??[]).map(h=>e.states[h]?.last_updated).filter(h=>!!h).sort().at(-1),X=Fe?new Date(Fe):void 0,We=X&&Number.isFinite(X.getTime())?X.toLocaleTimeString(O(this._config,e),{hour:"2-digit",minute:"2-digit"}):void 0,_e=this._detailEntities();return u` <ha-card
      class=${r}
      data-severity=${c.severity}
      ?data-dark=${e.themes?.darkMode}
    >
      <div class="body">
        <div class="top">
          <span class="brand">HEIMAN</span
          ><span class="model">${n.id}</span>
        </div>
        <div class="heading">
          <div>
            <h2>${v}</h2>
            <div class="subheading">
              ${[y,this.t(n.kind)].filter(Boolean).join(" \xB7 ")}
            </div>
          </div>
          ${_?u`<button class="icon-button" aria-label=${this.t("more_info")} @click=${()=>this._moreInfo(_)}>${S("info")}</button>`:m}
        </div>
        <div class="hero" role="status" aria-live="polite" aria-atomic="true">
          <div class="illustration">${wt(n.kind)}</div>
          <div class="status">
            <div class="status-label">${this.t(c.key)}</div>
            <div class="status-caption">
              <span class="dot"></span>${this.t(n.kind)}
            </div>
            <div class="status-tag">
              ${S(c.severity==="alarm"||c.severity==="warning"?"alert":c.severity==="normal"?"check":de[n.kind],13)}${c.severity==="normal"?this.t("tracking"):this.t(c.key)}
            </div>
          </div>
        </div>
        ${c.alerts.length?u`<div class="alerts">${c.alerts.map(h=>u`<span class="alert">${S("alert",14)}${this.t(h)}</span>`)}</div>`:m}
        ${Oe.length?u`<div class="metrics">
                ${Oe.map(({role:h,id:q})=>u` <button
                      class="metric"
                      @click=${()=>this._moreInfo(q)}
                      aria-label=${`${this.t(h)}: ${this._display(e.states[q])}`}
                    >
                      <span class="metric-label"
                        >${S(this._metricIcon(h),15)}${this.t(h)}</span
                      >
                      <span class="metric-value"
                        >${this._display(e.states[q])}</span
                      >
                    </button>`)}
              </div>`:m}
        ${c.partial?u`<p class="partial">${this.t("partial")}</p>`:m}
        ${Le.length?u`<div class="actions">${Le.map(h=>this._renderControl(h))}</div>`:m}
        ${this._config.show_controls!==!1&&je.length?u`<heiman-entity-controls
                .hass=${e}
                .entities=${je}
                .language=${O(this._config,e)}
                .disabled=${c.severity==="unavailable"}
              ></heiman-entity-controls>`:m}
        ${this._serviceError?u`<div class="error" role="alert">${this.t("service_error")}</div>`:m}
        <div class="footer">
          <span>${f||"Home Assistant"}</span
          ><span
            title=${X?.toLocaleString(O(this._config,e))??""}
            >${We?`${this.t("updated")} ${We}`:this.t("not_reported")}</span
          >
        </div>
        ${this._config.show_details!==!1&&_e.length?u`<details class="readings">
                <summary>${this.t("details")} · ${_e.length}</summary>
                ${_e.map(h=>this._entityRow(h))}
              </details>`:m}
      </div>
    </ha-card>`}_detailEntities(){if(!this.hass)return[];let e=W(this._config,this.hass,this._registry),i=new Set;if(this._config.show_battery===!1)for(let a of e.bindings.battery??[])i.add(a);if(this._config.show_signal===!1)for(let a of e.bindings.signal??[])i.add(a);return[...new Set([...e.entities.filter(a=>!a.disabled_by&&!a.hidden_by&&!a.hidden).map(a=>a.entity_id),...Object.values(e.bindings).flatMap(a=>a??[])])].filter(a=>!i.has(a)).sort()}_display(e){return!e||e.state==="unknown"?this.t("unknown"):z(e)?this.t("unavailable"):["binary_sensor","switch","light","siren"].includes(b(e.entity_id))&&["on","off"].includes(e.state)?this.t(e.state):At(this.hass,e)}_metricIcon(e){return["power","energy","voltage","current"].includes(e)?"energy":["co2","pm25","voc"].includes(e)?"air":e==="illuminance"?"light":e==="action"?"remote":e}_entityRow(e){let i=this.hass?.states[e];return u`<button
      class="entity-row"
      @click=${()=>this._moreInfo(e)}
      title=${e}
    >
      <span>${i?.attributes.friendly_name??e}</span
      ><span>${this._display(i)}</span>
    </button>`}_renderControl(e){let i=this.hass?.states[e],a=b(e),n=String(i?.attributes.friendly_name??e),o=z(i)||this._busy;if(a==="cover"){let d=Number(i?.attributes.supported_features??0),r=[{flag:1,key:"open",service:"open_cover"},{flag:8,key:"stop",service:"stop_cover"},{flag:2,key:"close",service:"close_cover"}].filter(p=>d&p.flag);return r.length?r.map(p=>u`<button
            class="action"
            ?disabled=${o}
            aria-label=${`${this.t(p.key)} ${n}`}
            @click=${()=>this._command(e,p.service)}
          >
            ${S(p.key==="stop"?"stop":"cover",16)}${this.t(p.key)}
          </button>`):u`<button class="action" @click=${()=>this._moreInfo(e)}>
          ${S("cover",16)}${n}
        </button>`}if(a==="siren")return u`<button
        class="action"
        ?disabled=${o}
        @click=${()=>this._moreInfo(e)}
      >
        ${S("bell",16)}${n}
      </button>`;let l=i?.state==="on"?"turn_off":"turn_on";return u`<button
      class="action"
      ?disabled=${o}
      @click=${()=>this._command(e,l)}
    >
      ${S("power",16)}${n} · ${this.t(l)}
    </button>`}async _command(e,i){if(!(!this.hass||this._busy||z(this.hass.states[e]))){this._busy=!0,this._serviceError=!1;try{await this.hass.callService(b(e),i,{entity_id:e})}catch{this._serviceError=!0}finally{this._busy=!1}}}},Pe={type:"heiman-device-card",name:"HEIMAN Dashboard",description:`HEIMAN \xB7 Zigbee2MQTT / ZHA \xB7 ${I.length} models \xB7 \u5BB6\u5C45 / \u6D88\u9632 / \u7B80\u7EA6`,preview:!0};var he=class extends B{constructor(){super(...arguments);this._search="";this._inputError=""}static{this.properties={_search:{state:!0},_inputError:{state:!0}}}static{this.styles=C`
    :host {
      display: block;
      color: var(--primary-text-color, #222);
      font-family: var(--paper-font-body1_-_font-family, sans-serif);
    }
    * {
      box-sizing: border-box;
    }
    .intro {
      padding: 18px;
      background: var(--secondary-background-color, #f5f6f5);
      border-radius: 12px;
      margin-bottom: 20px;
    }
    .brand {
      color: var(--primary-color, #4a7057);
      letter-spacing: 2px;
      font-size: 13px;
      font-weight: 800;
    }
    .intro p {
      margin: 8px 0 0;
      font-size: 13px;
      line-height: 1.6;
      color: var(--secondary-text-color, #666);
    }
    label {
      display: block;
      font-size: 13px;
      font-weight: 500;
      margin: 16px 0 7px;
    }
    input,
    select {
      width: 100%;
      min-height: 44px;
      font: inherit;
      font-size: 14px;
      padding: 10px 12px;
      border: 1px solid var(--divider-color, #ddd);
      border-radius: 8px;
      background: var(--card-background-color, white);
      color: inherit;
    }
    input:focus-visible,
    select:focus-visible,
    button:focus-visible,
    summary:focus-visible {
      outline: 2px solid var(--primary-color, #4a7057);
      outline-offset: 2px;
    }
    input[type="search"] {
      margin-bottom: 8px;
    }
    .styles {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 8px;
    }
    .style {
      display: flex;
      flex-direction: column;
      text-align: center;
      overflow-wrap: anywhere;
      align-items: center;
      justify-content: center;
      gap: 6px;
      min-height: 62px;
      border: 2px solid transparent;
      border-radius: 9px;
      font: inherit;
      font-size: 12px;
      cursor: pointer;
      padding: 8px;
    }
    .style.home {
      color: #37583e;
      background: #edf1e7;
    }
    .style.fire {
      color: #ffb5a8;
      background: #1c293a;
    }
    .style.minimal {
      color: var(--primary-text-color, #333);
      background: var(--secondary-background-color, #f5f5f5);
    }
    .style[aria-pressed="true"] {
      border-color: var(--primary-color, #547c60);
    }
    .help {
      font-size: 12px;
      line-height: 1.6;
      color: var(--secondary-text-color, #666);
      margin-top: 8px;
    }
    .status {
      padding: 10px 12px;
      background: var(--secondary-background-color, #f4f5f5);
      border-radius: 8px;
      margin-top: 10px;
    }
    .toggles {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 4px 8px;
      margin: 16px 0;
    }
    .toggle {
      display: flex;
      gap: 8px;
      align-items: center;
      margin: 4px 0;
      font-size: 12px;
      cursor: pointer;
    }
    input[type="checkbox"] {
      width: 18px;
      min-height: 18px;
      margin: 0;
      accent-color: var(--primary-color, #547c60);
    }
    details {
      border-top: 1px solid var(--divider-color, #ddd);
      margin-top: 16px;
      padding-top: 14px;
    }
    summary {
      cursor: pointer;
      font-size: 14px;
    }
    .error {
      color: var(--error-color, #bd302a);
      font-size: 13px;
      margin-top: 10px;
    }
    .retry {
      font: inherit;
      cursor: pointer;
      padding: 6px 12px;
      margin-left: 8px;
    }
    .selection {
      display: flex;
      gap: 6px;
      align-items: center;
    }
    .count {
      font-size: 11px;
      color: var(--secondary-text-color, #777);
      float: right;
    }
  `}render(){let e=this.hass;if(!e)return m;let i=W(this._config,e,this._registry),a=this._search.toLowerCase().trim(),n=I.filter(r=>[r.id,r.description,this.t(r.kind),...r.aliases].some(p=>p.toLowerCase().includes(a))||r.id===this._config.model),o=[...new Set(n.map(r=>r.kind))],l=[...new Set([...i.preset?Ne[i.preset.kind]??[]:Te,"battery","battery_low","temperature","humidity","signal","fault","tamper","test","muted",...Object.keys(this._config.entities??{})])],d=i.device?this._registry.entities.filter(r=>r.device_id===i.device.id&&!r.disabled_by).map(r=>r.entity_id):Object.keys(e.states).slice(0,500);return u`
      <div class="intro">
        <div class="brand">HEIMAN DASHBOARD</div>
        <p>${this.t("device_help")}</p>
      </div>
      <label for="model"
        >${this.t("model")}<span class="count"
          >${n.length} / ${I.length}</span
        ></label
      >
      <input
        type="search"
        id="search"
        aria-label=${this.t("search")}
        placeholder=${this.t("search")}
        .value=${this._search}
        @input=${r=>{this._search=r.target.value}}
      />
      <select id="model" @change=${this._modelChanged}>
        <option value="auto" .selected=${this._config.model==="auto"}>
          ${this.t("auto")}
        </option>
        ${o.map(r=>u`<optgroup label=${this.t(r)}>${n.filter(p=>p.kind===r).map(p=>u`<option value=${p.id} .selected=${this._config.model===p.id}>${p.id}</option>`)}</optgroup>`)}
      </select>
      <label for="device">${this.t("device")}</label>
      <select id="device" @change=${this._deviceChanged}>
        <option value="" .selected=${!this._config.device_id}>
          ${this.t("auto")}${i.candidates.length===1?` \xB7 ${i.candidates[0].name_by_user||i.candidates[0].name||i.candidates[0].model}`:""}
        </option>
        ${this._config.device_id&&!i.candidates.some(r=>r.id===this._config.device_id)?u`<option value=${this._config.device_id} selected>${this._config.device_id}</option>`:m}
        ${i.candidates.map(r=>u`<option value=${r.id} .selected=${this._config.device_id===r.id}>${r.name_by_user||r.name||r.model} · ${r.model}</option>`)}
      </select>
      ${this._loading?u`<div class="help">${this.t("loading")}</div>`:m}
      ${this._registryError?u`<div class="error">${this.t("registry_error")}<button class="retry" @click=${()=>this._syncRegistry(!0)}>${this.t("retry")}</button></div>`:m}
      ${i.reason?u`<div class="help status">${this.t(i.reason)}</div>`:u`<div class="help status selection">${S(de[i.preset?.kind??"smoke"],16)}${i.preset?.id} · ${i.entities.length} ${this.t("details")}</div>`}
      <label>${this.t("style")}</label>
      <div class="styles" role="group" aria-label=${this.t("style")}>
        ${["home","fire","minimal"].map(r=>u`<button class=${`style ${r}`} aria-pressed=${String(this._config.style===r)} @click=${()=>this._change({style:r})}>${S(r==="home"?"door":r==="fire"?"smoke":"settings",18)}${this.t(r)}</button>`)}
      </div>
      <label for="name">${this.t("name")}</label>
      <input
        id="name"
        .value=${this._config.name??""}
        placeholder=${i.device?.name_by_user||i.device?.name||"HEIMAN"}
        @change=${r=>this._change({name:r.target.value||void 0})}
      />
      <label for="language">${this.t("language")}</label>
      <select
        id="language"
        @change=${r=>this._change({language:r.target.value})}
      >
        ${[["auto",this.t("auto")],...Object.entries(V)].map(([r,p])=>u`<option
              value=${r}
              .selected=${this._config.language===r}
            >
              ${p}
            </option>`)}
      </select>
      <div class="toggles">
        ${["show_battery","show_signal","show_controls","show_details"].map(r=>u`<label class="toggle"><input type="checkbox" .checked=${this._config[r]!==!1} @change=${p=>this._change({[r]:p.target.checked})} />${this.t(r)}</label>`)}
      </div>
      <details>
        <summary>${this.t("advanced")}</summary>
        <p class="help">${this.t("assignments_help")}</p>
        <datalist id="entity-options">
          ${d.sort().map(r=>u`<option value=${r}>${e.states[r]?.attributes.friendly_name??r}</option>`)}
        </datalist>
        <label for="primary">${this.t("config_entity")}</label>
        <input
          id="primary"
          list="entity-options"
          .value=${this._config.entity??""}
          placeholder="binary_sensor.…"
          @change=${r=>this._change({entity:r.target.value||void 0})}
        />
        ${l.map(r=>u`<label for=${`entity-${r}`}>${this.t(r)}</label><input id=${`entity-${r}`} list="entity-options" .value=${this._config.entities?.[r]??""} placeholder=${i.bindings[r]?.join(", ")??this.t("auto")} @change=${p=>this._overrideChanged(r,p.target.value)} /> `)}
      </details>
      ${this._inputError?u`<div class="error" role="alert">${this._inputError}</div>`:m}
    `}_change(e){let i={...this._config,...e};for(let a of Object.keys(i))i[a]===void 0&&delete i[a];try{this.setConfig(i),this._inputError=""}catch(a){this._inputError=a.message;return}this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_modelChanged(e){let i=e.target.value,a={...this._config,model:i,device_id:void 0,entity:void 0,entities:{}},n=this.hass?W(a,this.hass,this._registry):void 0;this._change({model:i,device_id:n?.candidates.length===1?n.candidates[0].id:void 0,entity:void 0,entities:{}})}_deviceChanged(e){this._change({device_id:e.target.value||void 0,entity:void 0,entities:{}})}_overrideChanged(e,i){let a={...this._config.entities};i?a[e]=i.trim():delete a[e],this._change({entities:a})}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Et=s=>(...t)=>({_$litDirective$:s,values:t}),ge=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var{I:zs}=ot;var zt=s=>s.strings===void 0;var ai={},xt=(s,t=ai)=>s._$AH=t;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var De=Et(class extends ge{constructor(s){if(super(s),s.type!==L.PROPERTY&&s.type!==L.ATTRIBUTE&&s.type!==L.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!zt(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===k||t===m)return t;let e=s.element,i=s.name;if(s.type===L.PROPERTY){if(t===e[i])return k}else if(s.type===L.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(i))return k}else if(s.type===L.ATTRIBUTE&&e.getAttribute(i)===t+"")return k;return xt(s),t}});var Mt=s=>!!(s&&s.state!=="unavailable");function U(s){let t=b(s.entity_id),e=`${s.translation_key??""}_${s.entity_id.split(".")[1]}`.toLowerCase();return t==="siren"||t==="select"&&/siren_for_automation/.test(e)?"siren":t==="button"&&/self_?test|remote_test|self_check/.test(e)?"self_test":["switch","button","select"].includes(t)&&/mute|silence|hush/.test(e)?"mute":/indicator|heartbeat|backlight|(?:^|_)led(?:_|$)/.test(e)?"indicator":"other"}function Ct(s){let t=U(s);if(t==="self_test")return"remote_self_test";if(t==="mute")return"temporary_mute";if(t==="indicator")return"indicator";if(t==="siren")return"siren";let e=`${s.translation_key??""}_${s.entity_id}`;if(/default_siren_tone/.test(e))return"tone";if(/default_siren_level/.test(e))return"volume";if(/default_strobe_level/.test(e))return"strobe_level";if(/default_strobe/.test(e))return"strobe";if(/temperature_offset/.test(e))return"temperature_offset";if(/humidity_offset/.test(e))return"humidity_offset";if(/sensitivity/.test(e))return"sensitivity";if(/identify/.test(e))return"identify"}function Ht(s,t){if(!t.trim())throw new Error("invalid_value");let e=Number(t),i=Number(s.attributes.min),a=Number(s.attributes.max),n=Number(s.attributes.step);if(!Number.isFinite(e)||Number.isFinite(i)&&e<i||Number.isFinite(a)&&e>a)throw new Error("invalid_value");if(Number.isFinite(n)&&n>0){let o=(e-(Number.isFinite(i)?i:0))/n;if(Math.abs(o-Math.round(o))>1e-6)throw new Error("invalid_value")}return e}function Ie(s){let t=s.attributes.available_tones;return Array.isArray(t)?t.filter(e=>typeof e=="string"||typeof e=="number").map((e,i)=>({value:String(i),label:String(e),serviceValue:e})):t&&typeof t=="object"?Object.entries(t).filter(([,e])=>typeof e=="string").map(([e,i])=>({value:e,label:String(i),serviceValue:String(i)})):[]}function Tt(s,t){let e=Number(s.attributes.supported_features??0),i={};if(e&4&&t.tone!==void 0&&t.tone!==""){let a=Ie(s).find(n=>n.value===t.tone);if(!a)throw new Error("invalid_value");i.tone=a.serviceValue}if(e&16&&t.duration?.trim()){let a=Number(t.duration);if(!Number.isInteger(a)||a<1||a>65535)throw new Error("invalid_value");i.duration=a}if(e&8&&t.volume?.trim()){let a=Number(t.volume);if(!Number.isFinite(a)||a<0||a>100)throw new Error("invalid_value");i.volume_level=a/100}return i}var fe=class extends w{constructor(){super(...arguments);this.entities=[];this.language="en";this.disabled=!1;this._pending=new Map;this._failed=!1;this._sequence=0;this._drafts=new Map;this._sirens=new Map}static{this.properties={hass:{attribute:!1},entities:{attribute:!1},language:{attribute:!1},disabled:{type:Boolean},_pending:{state:!0},_feedback:{state:!0},_failed:{state:!0}}}static{this.styles=C`
    :host {
      display: block;
      margin-top: 14px;
      font: inherit;
      color: var(--ink);
    }
    * {
      box-sizing: border-box;
    }
    button,
    input,
    select {
      font: inherit;
      color: inherit;
    }
    button,
    input,
    select {
      min-height: 40px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: var(--tile);
    }
    button {
      cursor: pointer;
      padding: 8px 12px;
      font-size: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }
    button:disabled,
    input:disabled,
    select:disabled {
      opacity: 0.5;
      cursor: default;
    }
    button:focus-visible,
    input:focus-visible,
    select:focus-visible,
    summary:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }
    .quick {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 10px;
    }
    .quick button {
      flex: 1 1 auto;
    }
    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 10px 0;
      border-top: 1px solid var(--line);
      font-size: 12px;
    }
    .row > span,
    .row > label {
      min-width: 0;
      overflow-wrap: anywhere;
    }
    .field {
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    select {
      padding: 8px;
      min-width: 90px;
      max-width: 100%;
      font-size: 12px;
    }
    .row > .field {
      max-width: 62%;
    }
    input[type="number"],
    input[type="text"] {
      min-width: 0;
      width: 92px;
      padding: 8px;
      font-size: 12px;
    }
    input[type="checkbox"] {
      appearance: none;
      min-height: 24px;
      width: 42px;
      height: 24px;
      flex-shrink: 0;
      padding: 0;
      position: relative;
      border-radius: 20px;
      background: var(--line);
      cursor: pointer;
    }
    input[type="checkbox"]::after {
      content: "";
      display: block;
      width: 16px;
      height: 16px;
      position: absolute;
      left: 3px;
      top: 3px;
      border-radius: 50%;
      background: var(--surface);
    }
    input[type="checkbox"]:checked {
      background: var(--accent);
    }
    input[type="checkbox"]:checked::after {
      left: 21px;
    }
    .state {
      color: var(--muted);
      font-size: 11px;
    }
    .siren {
      border: 1px solid var(--line);
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 10px;
    }
    .siren-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      margin-bottom: 8px;
    }
    .siren .quick {
      margin-bottom: 0;
    }
    .stop {
      border-color: var(--accent);
    }
    details {
      font-size: 12px;
      margin-top: 8px;
    }
    summary {
      padding: 8px 0;
      cursor: pointer;
      color: var(--muted);
    }
    .feedback {
      font-size: 12px;
      margin-top: 10px;
      color: var(--muted);
    }
    .feedback.error {
      color: var(--error-color, #c13c34);
    }
    form {
      margin: 0;
    }
  `}t(e){return pe(this.language,e)}label(e){let i=Ct(e);return e.name||(i?this.t(i):e.original_name||String(this.hass?.states[e.entity_id]?.attributes.friendly_name??e.entity_id))}blocked(e){return this.disabled||!Mt(this.hass?.states[e])}busy(e){return(this._pending.get(e)??0)>0}stateLabel(e,i=M(e)){return this.disabled||e.state==="unavailable"?this.t("unavailable"):this.t(e.state==="unknown"?"unknown":i?"on":"off")}render(){if(!this.hass||!this.entities.length)return m;let e=this.entities.filter(l=>this.hass.states[l.entity_id]),i=e.filter(l=>["self_test","mute"].includes(U(l))&&b(l.entity_id)!=="select"),a=e.filter(l=>U(l)==="siren"),n=e.filter(l=>U(l)==="indicator"),o=e.filter(l=>!i.includes(l)&&!a.includes(l)&&!n.includes(l));return u`
      ${i.length?u`<div class="quick">${i.map(l=>u`<button data-entity=${l.entity_id} ?disabled=${this.blocked(l.entity_id)||this.busy(l.entity_id)} @click=${()=>this._send(l.entity_id,b(l.entity_id)==="button"?"press":"turn_on")}>${S(U(l)==="self_test"?"check":"bell",16)}${this.label(l)}</button>`)}</div>`:m}
      ${a.map(l=>this.renderSiren(l))}
      ${n.map(l=>this.renderSetting(l))}
      ${o.length?u`<details class="advanced-settings">
              <summary>${this.t("more_settings")}</summary>
              ${o.map(l=>this.renderSetting(l))}
            </details>`:m}
      ${this._feedback?u`<div class=${`feedback${this._failed?" error":""}`} role=${this._failed?"alert":"status"}>${this.t(this._pending.size?"sending":this._feedback)}</div>`:m}
    `}renderSetting(e){let i=e.entity_id,a=this.hass.states[i],n=b(i),o=this.label(e),l=this.blocked(i)||this.busy(i);if(n==="switch")return u`<div class="row">
        <label for=${i}>${o}</label
        ><span class="field"
          ><span class="state">${this.stateLabel(a)}</span
          ><input
            id=${i}
            type="checkbox"
            role="switch"
            aria-label=${o}
            .checked=${De(M(a))}
            ?disabled=${l}
            @change=${d=>this._send(i,d.target.checked?"turn_on":"turn_off")}
        /></span>
      </div>`;if(n==="button")return u`<div class="row">
        <span>${o}</span
        ><button
          data-entity=${i}
          ?disabled=${l}
          @click=${()=>this._send(i,"press")}
        >
          ${this.t("execute")}
        </button>
      </div>`;if(n==="select"){let d=Array.isArray(a.attributes.options)?a.attributes.options.map(String):[];return u`<div class="row">
        <label for=${i}>${o}</label
        ><span class="field"
          ><select
            id=${i}
            aria-label=${o}
            .value=${De(a.state)}
            ?disabled=${l}
            @change=${r=>{let p=r.target.value;d.includes(p)&&this._send(i,"select_option",{option:p})}}
          >
            ${d.includes(a.state)?m:u`<option value=${a.state} selected disabled>${this.t(a.state==="unavailable"?"unavailable":"unknown")}</option>`}${d.map(r=>u`<option value=${r} .selected=${r===a.state}>${this.optionLabel(r)}</option>`)}
          </select></span
        >
      </div>`}if(n==="number"||n==="text"){let d=this._drafts.get(i)??(a.state==="unknown"||a.state==="unavailable"?"":a.state);return u`<form
        novalidate
        class="row"
        @submit=${r=>{r.preventDefault();try{let p=this._drafts.get(i)??d,c=n==="number"?Ht(a,p):p;this._send(i,"set_value",{value:c}).then(_=>{_&&(this._drafts.delete(i),this.requestUpdate())})}catch{this._feedback="invalid_value",this._failed=!0}}}
      >
        <label for=${i}>${o}</label
        ><span class="field"
          ><input
            id=${i}
            aria-label=${o}
            type=${n==="number"?"number":"text"}
            min=${a.attributes.min??m}
            max=${a.attributes.max??m}
            step=${a.attributes.step??"any"}
            .value=${d}
            placeholder=${this.t(this.blocked(i)?"unavailable":"unknown")}
            ?disabled=${l}
            required
            @input=${r=>this._drafts.set(i,r.target.value)}
          /><span class="state"
            >${a.attributes.unit_of_measurement??""}</span
          ><button type="submit" ?disabled=${l}>
            ${this.t("apply")}
          </button></span
        >
      </form>`}return u`<div class="row">
      <span>${o}</span
      ><button
        @click=${()=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i},bubbles:!0,composed:!0}))}
      >
        ${this.t("more_info")}
      </button>
    </div>`}renderSiren(e){let i=e.entity_id,a=this.hass.states[i],n=b(i)==="select",o=Number(a.attributes.supported_features??0),l=this._sirens.get(i)??{},d=n&&Array.isArray(a.attributes.options)?a.attributes.options.map(String):[],r=d.find(f=>["stop","off"].includes(f.toLowerCase())),p=n?d.filter(f=>f!==r).map(f=>({value:f,label:this.optionLabel(f)})):Ie(a),c=l.tone??(n?a.state!==r&&d.includes(a.state)?a.state:p[0]?.value??"":""),_=this.blocked(i),v=this.busy(i),y=(f,$)=>this._sirens.set(i,{...this._sirens.get(i),[f]:$}),g=()=>{try{if(n){if(!p.some(f=>f.value===c))throw new Error;this._send(i,"select_option",{option:c})}else{let f=this._sirens.get(i)??{};this._send(i,"turn_on",Tt(a,{...f,tone:f.tone??c}))}}catch{this._feedback="invalid_value",this._failed=!0}};return u`<div class="siren" data-entity=${i}>
      <div class="siren-title">
        <span>${S("bell",15)} ${this.t("siren")}</span
        ><span class="state"
          >${this.stateLabel(a,n?a.state!==r:M(a))}</span
        >
      </div>
      <div class="quick">
        ${n||o&1?u`<button class="siren-on" ?disabled=${_||v||n&&!p.length} @click=${g}>${this.t("siren_on")}</button>`:m}${n?r?u`<button class="stop siren-off" ?disabled=${_} @click=${()=>this._send(i,"select_option",{option:r},!0)}>${this.t("siren_off")}</button>`:m:o&2?u`<button class="stop siren-off" ?disabled=${_} @click=${()=>this._send(i,"turn_off",{},!0)}>${this.t("siren_off")}</button>`:m}
      </div>
      ${p.length||!n&&(o&8||o&16)?u`<details>
              <summary>${this.t("siren_options")}</summary>
              ${p.length?u`<div class="row">
                      <label for=${`tone-${i}`}>${this.t("tone")}</label
                      ><select
                        id=${`tone-${i}`}
                        aria-label=${this.t("tone")}
                        .value=${c}
                        ?disabled=${_||v}
                        @change=${f=>{y("tone",f.target.value),this.requestUpdate()}}
                      >
                        ${n?m:u`<option value="" .selected=${c===""}>${this.t("device_default")}</option>`}${p.map(f=>u`<option value=${f.value} .selected=${c===f.value}>${this.optionLabel(f.label)}</option>`)}
                      </select>
                    </div>`:m}${!n&&o&16?u`<div class="row">
                      <label for=${`duration-${i}`}
                        >${this.t("duration")}</label
                      ><span class="field"
                        ><input
                          id=${`duration-${i}`}
                          aria-label=${this.t("duration")}
                          type="number"
                          min="1"
                          max="65535"
                          step="1"
                          placeholder=${this.t("device_default")}
                          .value=${l.duration??""}
                          ?disabled=${_||v}
                          @input=${f=>y("duration",f.target.value)}
                        /><span class="state">${this.t("seconds")}</span></span
                      >
                    </div>`:m}${!n&&o&8?u`<div class="row">
                      <label for=${`volume-${i}`}>${this.t("volume")}</label
                      ><span class="field"
                        ><input
                          id=${`volume-${i}`}
                          aria-label=${this.t("volume")}
                          type="number"
                          min="0"
                          max="100"
                          step="1"
                          placeholder=${this.t("device_default")}
                          .value=${l.volume??""}
                          ?disabled=${_||v}
                          @input=${f=>y("volume",f.target.value)}
                        /><span class="state">%</span></span
                      >
                    </div>`:m}
            </details>`:m}
    </div>`}optionLabel(e){let i={stop:"stop",off:"off",on:"on",smoke_siren:"smoke_sound",co_siren:"co_sound",mute:"temporary_mute",low:"low",medium:"medium",high:"high","Low level sound":"low","Medium level sound":"medium","High level sound":"high","Very high level sound":"very_high","No Strobe":"off",Strobe:"on",Burglar:"burglar",Fire:"fire_sound",Emergency:"emergency","Police Panic":"police_panic","Fire Panic":"fire_panic","Emergency Panic":"emergency_panic"};return i[e]?this.t(i[e]):e}async _send(e,i,a={},n=!1){if(!this.hass||this.blocked(e)||this.busy(e)&&!n)return!1;let o=++this._sequence;this._pending=new Map(this._pending).set(e,(this._pending.get(e)??0)+1),this._feedback="sending",this._failed=!1;try{return await this.hass.callService(b(e),i,{...a,entity_id:e}),o===this._sequence&&(this._feedback="command_sent"),!0}catch{return o===this._sequence&&(this._feedback="service_error",this._failed=!0),!1}finally{let l=new Map(this._pending),d=(l.get(e)??1)-1;d?l.set(e,d):l.delete(e),this._pending=l}}};customElements.get("heiman-entity-controls")||customElements.define("heiman-entity-controls",fe);customElements.get("heiman-device-card-editor")||customElements.define("heiman-device-card-editor",he);customElements.get("heiman-device-card")||customElements.define("heiman-device-card",me);window.customCards??=[];window.customCards.some(s=>s.type===Pe.type)||window.customCards.push(Pe);console.info("HEIMAN Dashboard 0.1.0");
