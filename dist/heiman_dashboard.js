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
 */var G=globalThis,Y=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol(),Re=new WeakMap,L=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Y&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=Re.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Re.set(t,e))}return e}toString(){return this.cssText}},Te=s=>new L(typeof s=="string"?s:s+"",void 0,oe),F=(s,...e)=>{let t=s.length===1?s[0]:e.reduce((i,r,a)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[a+1],s[0]);return new L(t,s,oe)},De=(s,e)=>{if(Y)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),r=G.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},ne=Y?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return Te(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var{is:nt,defineProperty:dt,getOwnPropertyDescriptor:ct,getOwnPropertyNames:lt,getOwnPropertySymbols:ht,getPrototypeOf:pt}=Object,Q=globalThis,Pe=Q.trustedTypes,ut=Pe?Pe.emptyScript:"",mt=Q.reactiveElementPolyfillSupport,W=(s,e)=>s,de={toAttribute(s,e){switch(e){case Boolean:s=s?ut:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Oe=(s,e)=>!nt(s,e),Ne={attribute:!0,type:String,converter:de,reflect:!1,useDefault:!1,hasChanged:Oe};Symbol.metadata??=Symbol("metadata"),Q.litPropertyMetadata??=new WeakMap;var $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ne){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&dt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){let{get:r,set:a}=ct(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:r,set(o){let l=r?.call(this);a?.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ne}static _$Ei(){if(this.hasOwnProperty(W("elementProperties")))return;let e=pt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(W("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){let t=this.properties,i=[...lt(t),...ht(t)];for(let r of i)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let r of i)t.unshift(ne(r))}else e!==void 0&&t.push(ne(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return De(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){let a=(i.converter?.toAttribute!==void 0?i.converter:de).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,t){let i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let a=i.getPropertyOptions(r),o=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:de;this._$Em=r;let l=o.fromAttribute(t,a.type);this[r]=l??this._$Ej?.get(r)??l,this._$Em=null}}requestUpdate(e,t,i,r=!1,a){if(e!==void 0){let o=this.constructor;if(r===!1&&(a=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??Oe)(a,t)||i.useDefault&&i.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:a},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),a!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,a]of i){let{wrapped:o}=a,l=this[r];o!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,a,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[W("elementProperties")]=new Map,$[W("finalized")]=new Map,mt?.({ReactiveElement:$}),(Q.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fe=globalThis,Ie=s=>s,J=fe.trustedTypes,Le=J?J.createPolicy("lit-html",{createHTML:s=>s}):void 0,Be="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,Ke="?"+E,ft=`<${Ke}>`,C=document,V=()=>C.createComment(""),j=s=>s===null||typeof s!="object"&&typeof s!="function",ge=Array.isArray,gt=s=>ge(s)||typeof s?.[Symbol.iterator]=="function",ce=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fe=/-->/g,We=/>/g,H=RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ue=/'/g,Ve=/"/g,qe=/^(?:script|style|textarea|title)$/i,_e=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),m=_e(1),w=_e(2),Ct=_e(3),M=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),je=new WeakMap,z=C.createTreeWalker(C,129);function Ze(s,e){if(!ge(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Le!==void 0?Le.createHTML(e):e}var _t=(s,e)=>{let t=s.length-1,i=[],r,a=e===2?"<svg>":e===3?"<math>":"",o=U;for(let l=0;l<t;l++){let d=s[l],n,h,c=-1,_=0;for(;_<d.length&&(o.lastIndex=_,h=o.exec(d),h!==null);)_=o.lastIndex,o===U?h[1]==="!--"?o=Fe:h[1]!==void 0?o=We:h[2]!==void 0?(qe.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=H):h[3]!==void 0&&(o=H):o===H?h[0]===">"?(o=r??U,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,n=h[1],o=h[3]===void 0?H:h[3]==='"'?Ve:Ue):o===Ve||o===Ue?o=H:o===Fe||o===We?o=U:(o=H,r=void 0);let g=o===H&&s[l+1].startsWith("/>")?" ":"";a+=o===U?d+ft:c>=0?(i.push(n),d.slice(0,c)+Be+d.slice(c)+E+g):d+E+(c===-2?l:g)}return[Ze(s,a+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},B=class s{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let a=0,o=0,l=e.length-1,d=this.parts,[n,h]=_t(e,t);if(this.el=s.createElement(n,i),z.currentNode=this.el.content,t===2||t===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=z.nextNode())!==null&&d.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(let c of r.getAttributeNames())if(c.endsWith(Be)){let _=h[o++],g=r.getAttribute(c).split(E),v=/([.?@])?(.*)/.exec(_);d.push({type:1,index:a,name:v[2],strings:g,ctor:v[1]==="."?he:v[1]==="?"?pe:v[1]==="@"?ue:P}),r.removeAttribute(c)}else c.startsWith(E)&&(d.push({type:6,index:a}),r.removeAttribute(c));if(qe.test(r.tagName)){let c=r.textContent.split(E),_=c.length-1;if(_>0){r.textContent=J?J.emptyScript:"";for(let g=0;g<_;g++)r.append(c[g],V()),z.nextNode(),d.push({type:2,index:++a});r.append(c[_],V())}}}else if(r.nodeType===8)if(r.data===Ke)d.push({type:2,index:a});else{let c=-1;for(;(c=r.data.indexOf(E,c+1))!==-1;)d.push({type:7,index:a}),c+=E.length-1}a++}}static createElement(e,t){let i=C.createElement("template");return i.innerHTML=e,i}};function D(s,e,t=s,i){if(e===M)return e;let r=i!==void 0?t._$Co?.[i]:t._$Cl,a=j(e)?void 0:e._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),a===void 0?r=void 0:(r=new a(s),r._$AT(s,t,i)),i!==void 0?(t._$Co??=[])[i]=r:t._$Cl=r),r!==void 0&&(e=D(s,r._$AS(s,e.values),r,i)),e}var le=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??C).importNode(t,!0);z.currentNode=r;let a=z.nextNode(),o=0,l=0,d=i[0];for(;d!==void 0;){if(o===d.index){let n;d.type===2?n=new K(a,a.nextSibling,this,e):d.type===1?n=new d.ctor(a,d.name,d.strings,this,e):d.type===6&&(n=new me(a,this,e)),this._$AV.push(n),d=i[++l]}o!==d?.index&&(a=z.nextNode(),o++)}return z.currentNode=C,r}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},K=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),j(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==M&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):gt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=B.createElement(Ze(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{let a=new le(r,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=je.get(e.strings);return t===void 0&&je.set(e.strings,t=new B(e)),t}k(e){ge(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,r=0;for(let a of e)r===t.length?t.push(i=new s(this.O(V()),this.O(V()),this,this.options)):i=t[r],i._$AI(a),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=Ie(e).nextSibling;Ie(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},P=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,a){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(e,t=this,i,r){let a=this.strings,o=!1;if(a===void 0)e=D(this,e,t,0),o=!j(e)||e!==this._$AH&&e!==M,o&&(this._$AH=e);else{let l=e,d,n;for(e=a[0],d=0;d<a.length-1;d++)n=D(this,l[i+d],t,d),n===M&&(n=this._$AH[d]),o||=!j(n)||n!==this._$AH[d],n===u?e=u:e!==u&&(e+=(n??"")+a[d+1]),this._$AH[d]=n}o&&!r&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},he=class extends P{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}},pe=class extends P{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}},ue=class extends P{constructor(e,t,i,r,a){super(e,t,i,r,a),this.type=5}_$AI(e,t=this){if((e=D(this,e,t,0)??u)===M)return;let i=this._$AH,r=e===u&&i!==u||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==u&&(i===u||r);r&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},me=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}};var vt=fe.litHtmlPolyfillSupport;vt?.(B,K),(fe.litHtmlVersions??=[]).push("3.3.3");var Ge=(s,e,t)=>{let i=t?.renderBefore??e,r=i._$litPart$;if(r===void 0){let a=t?.renderBefore??null;i._$litPart$=r=new K(e.insertBefore(V(),a),a,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ve=globalThis,x=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ge(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return M}};x._$litElement$=!0,x.finalized=!0,ve.litElementHydrateSupport?.({LitElement:x});var yt=ve.litElementPolyfillSupport;yt?.({LitElement:x});(ve.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ye={generatedOn:"2026-11-19",sources:{z2m:{repository:"Koenkk/zigbee-herdsman-converters",branch:"master",commit:"6cc34894cfcc289f67c0ac7c3ccf42e14be7f8dc",url:"https://github.com/Koenkk/zigbee-herdsman-converters/tree/6cc34894cfcc289f67c0ac7c3ccf42e14be7f8dc"},zha:{repository:"zigpy/zha-device-handlers",branch:"dev",commit:"b07fa76876e081d48744968f9fb806e7f1fee0ee",url:"https://github.com/zigpy/zha-device-handlers/tree/b07fa76876e081d48744968f9fb806e7f1fee0ee"}},models:[{id:"HS1MIS-3.0",description:"Smart occupancy sensor",kind:"motion",aliases:["PIRILLSensor-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS1CA-M",description:"Smart carbon monoxide alarm",kind:"co",aliases:["CO_V15","CO_YDLV10","CO_V16","1ccaa94c49a84abaa9e38687913947ba","CO_CTPG"],zha:"quirk",zhaSources:["smoke.py"]},{id:"HS-720ES-ZB",description:"Smart carbon monoxide alarm",kind:"co",aliases:["JM720ES-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS3MS",description:"Smart motion sensor",kind:"motion",aliases:["PIRSensor-N","PIRSensor-N-3.0","PIRSensor-EM","PIRSensor-EF-3.0","PIR_TPV13"],zha:"standard",zhaSources:[]},{id:"HS2SK",description:"Smart metering plug",kind:"plug",aliases:["SmartPlug","SmartPlug-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2SK_nxp",description:"Smart metering plug",kind:"plug",aliases:["SmartPlug-N"],zha:"standard",zhaSources:[]},{id:"HS1SA-E",description:"Smart smoke alarm",kind:"smoke",aliases:["SMOK_V16","SMOK_V15","b5db59bfd81e4f1f95dc57fdbba17931","98293058552c49f38ad0748541ee96ba","SMOK_YDLV10","FB56-SMF02HM1.4","SmokeSensor-N-3.0","319fa36e7384414a9ea62cba8f6e7626","c3442b4ac59b4ba1a83119d938f283ab","SmokeSensor-EF-3.0","SMOK_HV14","SMOK_YDLV10N"],zha:"quirk",zhaSources:["smoke.py"]},{id:"HS3SA/HS1SA",description:"Smart smoke alarm",kind:"smoke",aliases:["SmokeSensor-N","SmokeSensor-EM","HS3SA","HS1SA"],zha:"quirk",zhaSources:["smoke.py"]},{id:"HS2SA-EF-3.0",description:"Smart smoke alarm",kind:"smoke",aliases:[],zha:"standard",zhaSources:[]},{id:"HS3CG",description:"Combustible gas sensor",kind:"gas",aliases:["GASSensor-N","GASSensor-N-3.0","d90d7c61c44d468a8e906ca0841e0a0c"],zha:"standard",zhaSources:[]},{id:"HS1CG-M",description:"Combustible gas sensor",kind:"gas",aliases:["GASSensor-EN"],zha:"standard",zhaSources:[]},{id:"HS1CG_H",description:"Smart combustible gas sensor",kind:"gas",aliases:["HY0022"],zha:"standard",zhaSources:[]},{id:"HS1CG",description:"Smart combustible gas sensor",kind:"gas",aliases:["RH3070"],zha:"standard",zhaSources:[]},{id:"HS1CG_M",description:"Combustible gas sensor",kind:"gas",aliases:["GAS_V15"],zha:"standard",zhaSources:[]},{id:"HS3DS",description:"Door sensor",kind:"contact",aliases:["DoorSensor-N","DoorSensor-N-3.0"],zha:"standard",zhaSources:[]},{id:"HS8DS-EFA",description:"Door sensor",kind:"contact",aliases:["HS8DS-EF2-3.0"],zha:"standard",zhaSources:[]},{id:"D1-EFA",description:"Smart door sensor",kind:"contact",aliases:["D1-EF2-3.0"],zha:"standard",zhaSources:[]},{id:"D1-E",description:"Smart door sensor",kind:"contact",aliases:[],zha:"standard",zhaSources:[]},{id:"HS1DS",description:"Door sensor",kind:"contact",aliases:["DoorSensor-EM","DoorSensor-EF-3.0"],zha:"standard",zhaSources:[]},{id:"Heiman-M1",description:"Door sensor",kind:"contact",aliases:["DOOR_TPV13","DOOR_TPV12"],zha:"standard",zhaSources:[]},{id:"HS1WL/HS3WL",description:"Water leakage sensor",kind:"leak",aliases:["WaterSensor-N","WaterSensor-EM","WaterSensor-N-3.0","WaterSensor-EF-3.0","WATER_TPV13","TY0207","HS1WL","HS3WL"],zha:"standard",zhaSources:[]},{id:"HS2WL",description:"Water leakage sensor",kind:"leak",aliases:["WaterSensor2-EF-3.0"],zha:"standard",zhaSources:[]},{id:"L1-E",description:"Smart Water leakage sensor",kind:"leak",aliases:[],zha:"standard",zhaSources:[]},{id:"HS1RC-N",description:"Smart remote controller",kind:"remote",aliases:["RC-N"],zha:"standard",zhaSources:[]},{id:"HM1RC-2-E",description:"Smart remote controller",kind:"remote",aliases:["RC-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS1RC-EM",description:"Smart remote controller",kind:"remote",aliases:["RC-EM"],zha:"standard",zhaSources:[]},{id:"HS1CA-E",description:"Smart carbon monoxide alarm",kind:"co",aliases:["COSensor-EM","COSensor-N","COSensor-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2WD-E",description:"Smart siren",kind:"siren",aliases:["WarningDevice","WarningDevice-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS1HT",description:"Smart temperature & humidity Sensor",kind:"climate",aliases:["HT-EM","TH-EM","TH-T_V14"],zha:"standard",zhaSources:[]},{id:"HS1HT-N",description:"Smart temperature & humidity Sensor",kind:"climate",aliases:["HT-N","HT-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2ESK-E",description:"Smart in wall plug",kind:"plug",aliases:["E_Socket","E8331510SSZB_C1"],zha:"standard",zhaSources:[]},{id:"HS1EB/HS1EB-E",description:"Smart emergency button",kind:"remote",aliases:["SOS-EM","SOS-EF-3.0","HS1EB","HS1EB-E"],zha:"standard",zhaSources:[]},{id:"HS2SS",description:"Smart scene switch",kind:"remote",aliases:["SceneSwitch-EM-3.0","SceneSwitch-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2WDSC-E",description:"Remote dimmer and temperature control",kind:"remote",aliases:["TempDimmerSw-EM-3.0"],zha:"standard",zhaSources:[]},{id:"HS2WDSR-E",description:"Remote dimmer and color control",kind:"remote",aliases:["ColorDimmerSw-EM-3.0"],zha:"standard",zhaSources:[]},{id:"HS3HT",description:"Temperature & humidity sensor with display",kind:"climate",aliases:["HS3HT-EFA-3.0"],zha:"standard",zhaSources:[]},{id:"H1-E",description:"Smart Temperature & humidity sensor",kind:"climate",aliases:[],zha:"standard",zhaSources:[]},{id:"HS1CG-E",description:"Combustible gas sensor",kind:"gas",aliases:["GASSensor-EM","358e4e3e03c644709905034dae81433e"],zha:"standard",zhaSources:[]},{id:"HS1CG-E_3.0",description:"Combustible gas sensor",kind:"gas",aliases:["GASSensor-EFR-3.0","GASSensor-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS1VS-N",description:"Vibration sensor",kind:"vibration",aliases:["Vibration-N"],zha:"standard",zhaSources:[]},{id:"HS1VS-EF",description:"Vibration sensor",kind:"vibration",aliases:["Vibration-EF_3.0","Vibration-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2AQ-EM",description:"Air quality monitor",kind:"air",aliases:["HS2AQ-EM-3.0"],zha:"standard",zhaSources:[]},{id:"HS1IRC",description:"Smart IR Control",kind:"remote",aliases:["IRControl-EM"],zha:"standard",zhaSources:[]},{id:"HS2IRC",description:"Smart IR Control",kind:"remote",aliases:["IRControl2-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2SW1A/HS2SW1A-N",description:"Smart switch - 1 gang with neutral wire",kind:"switch",aliases:["HS2SW1L-EF-3.0","HS2SW1L-EFR-3.0","HS2SW1A-N","HS6SW1A-W-EF-3.0","HS5SW1A-W-EF-3.0","HS2SW1A-EF-3.0","HS2SW1A-EFR-3.0","HS2SW1A"],zha:"standard",zhaSources:[]},{id:"HS2SW2A/HS2SW2A-N",description:"Smart switch - 2 gang with neutral wire",kind:"switch",aliases:["HS2SW2L-EF-3.0","HS2SW2L-EFR-3.0","HS2SW2A-N","HS6SW2A-W-EF-3.0","HS5SW2A-W-EF-3.0","RT0102","HS2SW2A-EF-3.0","HS2SW2A-EFR-3.0","HS2SW2A"],zha:"standard",zhaSources:[]},{id:"HS2SW3A/HS2SW3A-N",description:"Smart switch - 3 gang with neutral wire",kind:"switch",aliases:["HS2SW3L-EF-3.0","HS2SW3L-EFR-3.0","HS2SW3A-N","HS6SW3A-W-EF-3.0","HS5SW3A-W-EF-3.0","HS2SW3A-EF-3.0","HS2SW3A-EFR-3.0","HS2SW3A"],zha:"standard",zhaSources:[]},{id:"HS1RM-E",description:"Smart relay module - 2 gang with neutral wire",kind:"switch",aliases:["RelayModule-EF-3.0"],zha:"quirk",zhaSources:["hs1rm_e.py"]},{id:"HS2WDS",description:"LED 9W CCT E27",kind:"light",aliases:["TemperLight"],zha:"standard",zhaSources:[]},{id:"HS1RGB",description:"Bulb E26/E27, RGB+WW 2700K, globe, opal, 400lm",kind:"light",aliases:["ColorLight"],zha:"standard",zhaSources:[]},{id:"HS2CM-N-DC",description:"Gear window shade motor",kind:"cover",aliases:["CurtainMo-EF-3.0","CurtainMo-EF"],zha:"standard",zhaSources:[]},{id:"HS1MS-M",description:"Smart motion sensor",kind:"motion",aliases:["PIR_TPV16"],zha:"standard",zhaSources:[]},{id:"HS1MS-EF",description:"Smart motion sensor",kind:"motion",aliases:["TY0202"],zha:"standard",zhaSources:[]},{id:"HS9MS-E",description:"Smart motion sensor",kind:"motion",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2DB",description:"Smart doorbell button",kind:"remote",aliases:["DoorBell-EM"],zha:"standard",zhaSources:[]},{id:"HS2SS-E_V03",description:"Smart doorbell button",kind:"remote",aliases:["DoorBell-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS3AQ",description:"Smart air quality monitor",kind:"air",aliases:["HS3AQ-EFA-3.0"],zha:"standard",zhaSources:[]},{id:"HS2RNL",description:"Smart repeater & night light",kind:"light",aliases:["RouteLight-EF-3.0"],zha:"standard",zhaSources:[]},{id:"PIR_TPV12",description:"Motion sensor",kind:"motion",aliases:[],zha:"standard",zhaSources:[]},{id:"HS15A-M",description:"Smart smoke alarm relabeled for zipato",kind:"smoke",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2FD-EF1-3.0",description:"Fall Detection Sensor",kind:"fall",aliases:[],zha:"standard",zhaSources:[]},{id:"HS8OS-EF1-3.0",description:"Human presence sensor",kind:"motion",aliases:[],zha:"standard",zhaSources:[]},{id:"HS8MIS-EF1-3.0",description:"PIR sensor",kind:"motion",aliases:[],zha:"standard",zhaSources:[]},{id:"HS8MLS-EF1-3.0",description:"PIR sensor with night light",kind:"motion",aliases:["HS8MIS-86-EF1-3.0"],zha:"standard",zhaSources:[]},{id:"HS2AQ-EF-3.0",description:"Air quality monitor",kind:"air",aliases:[],zha:"standard",zhaSources:[]},{id:"HS1SA-E-PLUS",description:"Smart smoke alarm",kind:"smoke",aliases:["HS1SA-EF-3.0"],zha:"quirk",zhaSources:["hs1sa_efa.py"]},{id:"S1-TL",description:"Smart smoke alarm",kind:"smoke",aliases:[],zha:"quirk",zhaSources:["s1_tl.py"]},{id:"S1-M",description:"Smart smoke alarm",kind:"smoke",aliases:[],zha:"standard",zhaSources:[]},{id:"S1-TL-AI",description:"Smart smoke alarm",kind:"smoke",aliases:["SC6-EF2-AI"],zha:"standard",zhaSources:[]},{id:"S2-E",description:"Smart smoke alarm",kind:"smoke",aliases:[],zha:"standard",zhaSources:[]},{id:"HM-722ESY-E Plus",description:"Smart carbon monoxide alarm",kind:"co",aliases:["HM-722ESY-E-PLUS"],zha:"quirk",zhaSources:["hm_722_esy_e_plus.py"]},{id:"HS1CA-E-PLUS",description:"Smart carbon monoxide alarm",kind:"co",aliases:["HS1CA-E PLUS"],zha:"quirk",zhaSources:["hs1ca_e_plus.py"]},{id:"C1-M",description:"Smart carbon monoxide alarm",kind:"co",aliases:[],zha:"standard",zhaSources:[]},{id:"HS1SA-E Lover",description:"Smart smoke alarm",kind:"smoke",aliases:["Smokesensor-EF2-3.0","SmokeSensor-EF2-3.0"],zha:"quirk",zhaSources:["hs1sa_e_lover.py"]},{id:"HM-636THV-AC-M",description:"Smart smoke&CO alarm",kind:"smoke_co",aliases:[],zha:"quirk",zhaSources:["hm_636thv_ac_m.py"]},{id:"SC6",description:"Smart smoke&CO alarm",kind:"smoke_co",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2WD-EF",description:"Smart siren",kind:"siren",aliases:["WarningDevice-EFA1-3.0"],zha:"standard",zhaSources:[]},{id:"M1P-E",description:"Smart occupancy sensor",kind:"motion",aliases:["M1-PE"],zha:"standard",zhaSources:[]},{id:"HM-5HA-E",description:"Smart heat alarm",kind:"heat",aliases:["HM-5HA-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2VTD",description:"Smart 4 in 1 door sensor",kind:"contact",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2TD",description:"Smart 3 in 1 door sensor",kind:"contact",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2HT",description:"Smart temperature & humidity sensor",kind:"climate",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2NLV",description:"Smart notifier",kind:"light",aliases:[],zha:"standard",zhaSources:[]}]};var T=ye.models,Bt=ye.generatedOn,be=s=>s.toLowerCase().replace(/[\s-]+/g,""),bt=new Map(T.map(s=>[be(s.id),s])),Se=new Map;for(let s of T)for(let e of s.aliases){let t=be(e);Se.has(t)||Se.set(t,s)}function R(s){if(!s||s==="auto")return;let e=s.match(/\(([^()]+)\)\s*$/)?.[1],t=be(e??s);return bt.get(t)??Se.get(t)}function N(s){let e=R(s.model_id)??R(s.model);if(e&&!(/^TS\d+$/i.test(s.model??"")&&!/heiman/i.test(s.manufacturer??"")))return e}function Ye(s){return/heiman/i.test(s.manufacturer??"")&&!!N(s)}var X={smoke:"smoke",co:"co",smoke_co:"smoke",heat:"temperature",gas:"gas",leak:"water",contact:"door",motion:"motion",fall:"motion",vibration:"motion",climate:"temperature",air:"air",siren:"bell",plug:"power",switch:"power",light:"light",cover:"cover",remote:"remote"};var ee=new WeakMap;function $e(s){if(s.devices&&s.entities&&Object.keys(s.devices).length>0)return{devices:Object.values(s.devices),entities:Object.values(s.entities)}}async function Qe(s,e=!1){let t=$e(s);if(t)return t;if(!s.callWS)return{devices:[],entities:[]};let i=s.connection??s;e&&ee.delete(i);let r=ee.get(i);return r||(r=Promise.all([s.callWS({type:"config/device_registry/list"}),s.callWS({type:"config/entity_registry/list"})]).then(([a,o])=>({devices:a,entities:o})),ee.set(i,r),r.catch(()=>ee.delete(i))),r}var S=s=>s.split(".")[0],Je=["switch","light","siren","cover","fan"];function Xe(s,e,t){let i=S(s.entity_id),r=e.states[s.entity_id],a=String(r?.attributes.device_class??""),o=d=>[s.translation_key??"",s.entity_id.split(".")[1]].some(n=>d.test(n.toLowerCase()));if(Je.includes(i))return s.entity_category||o(/(?:^|_)(?:mute|temporary_mute|remote_mute|heartbeat|indicator|child_lock|radar_switch|selftest)(?:_|$)/)?void 0:!t||["plug","switch","light","cover","siren","motion"].includes(t)?"control":void 0;if(i==="event")return"action";if(!["binary_sensor","sensor"].includes(i))return;if(i==="binary_sensor")return a==="battery"||o(/(?:^|_)(?:battery_low|low_battery)(?:_|$)/)?"battery_low":a==="tamper"||o(/(?:^|_)tamper(?:_|$)/)?"tamper":a==="problem"||o(/(?:^|_)(?:fault|fault_state|sensor_fault_state)(?:_|$)/)?"fault":o(/(?:^|_)(?:test|self_test|self_check|selfcheck)(?:_|$)/)?"test":o(/(?:^|_)(?:muted|mute_state|sensor_mute_state)(?:_|$)/)?"muted":a==="smoke"?"smoke":a==="carbon_monoxide"?"co":a==="gas"?t==="co"?"co":"gas":a==="moisture"?"leak":["door","window","opening","garage_door"].includes(a)?"contact":["motion","occupancy","presence"].includes(a)?"motion":a==="vibration"?"vibration":a==="heat"||!a&&t==="heat"&&o(/(?:^|_)ias_zone(?:_\d+)?$/)?"heat":o(/(?:^|_)(?:smoke|smoke_alarm)(?:_\d+)?$/)?"smoke":o(/(?:^|_)(?:carbon_monoxide|co_alarm|co)(?:_\d+)?$/)?"co":o(/(?:^|_)(?:gas|gas_alarm)(?:_\d+)?$/)?"gas":o(/(?:^|_)(?:water_leak|water_leakage|moisture)(?:_\d+)?$/)?"leak":o(/(?:^|_)(?:contact|opening)(?:_\d+)?$/)?"contact":o(/(?:^|_)(?:occupancy|motion|presence)(?:_\d+)?$/)?"motion":o(/(?:^|_)(?:fall|fall_down|fall_detected)(?:_\d+)?$/)?"fall":o(/(?:^|_)vibration(?:_\d+)?$/)?"vibration":o(/(?:^|_)(?:heat|heat_alarm)(?:_\d+)?$/)?"heat":void 0;let l={temperature:"temperature",humidity:"humidity",battery:"battery",signal_strength:"signal",power:"power",energy:"energy",voltage:"voltage",current:"current",illuminance:"illuminance",carbon_dioxide:"co2",volatile_organic_compounds:"voc",volatile_organic_compounds_parts:"voc",pm25:"pm25"};if(l[a])return l[a];if(o(/(?:^|_)(?:fault_state|sensor_fault_state)(?:_\d+)?$/))return"fault";if(o(/(?:^|_)(?:linkquality|link_quality|rssi|lqi|signal_strength)(?:_\d+)?$/))return"signal";if(o(/(?:^|_)(?:action|last_action)(?:_\d+)?$/))return"action";if(o(/(?:^|_)(?:battery|battery_percentage)(?:_\d+)?$/))return"battery";if(o(/(?:^|_)(?:temperature|device_temperature|device_intenal_temperature)(?:_\d+)?$/))return"temperature";if(o(/(?:^|_)humidity(?:_\d+)?$/))return"humidity";if(o(/(?:^|_)(?:muted|mute_state)(?:_\d+)?$/))return"muted"}function $t(s,e,t,i={}){let r={};for(let a of[...s].sort((o,l)=>o.entity_id.localeCompare(l.entity_id))){if(a.disabled_by||a.hidden_by||a.hidden)continue;let o=Xe(a,e,t);o&&(r[o]??=[]).push(a.entity_id)}for(let[a,o]of Object.entries(i))o&&(r[a]=[o]);return r}function O(s,e,t){let i=R(s.model),r=s.entity?t.entities.find(g=>g.entity_id===s.entity):void 0,a=s.device_id||r?.device_id,o=t.devices.filter(g=>{if(g.disabled_by)return!1;let v=N(g);return g.parent_device_id&&t.devices.some(p=>p.id===g.parent_device_id&&N(p)?.id===v?.id)?!1:i?v?.id===i.id:Ye(g)}),l=a?t.devices.find(g=>g.id===a):o.length===1?o[0]:void 0,d;a&&!l?d="missing_device":l&&i&&N(l)?.id!==i.id?(d="model_mismatch",l=void 0):!l&&o.length>1?d="choose_device":l||(d="no_device");let n=i??(l?N(l):void 0),h=l?kt(t,l.id):new Set,c=l?t.entities.filter(g=>g.device_id&&h.has(g.device_id)):[];s.entity&&!c.some(g=>g.entity_id===s.entity)&&c.push(r??{entity_id:s.entity});let _=$t(c,e,n?.kind,s.entities);if(s.entity&&!Object.values(_).some(g=>g?.includes(s.entity))&&S(s.entity)==="binary_sensor"&&n){let v={smoke_co:"smoke",climate:void 0,air:void 0}[n.kind]??(["smoke","co","heat","gas","leak","contact","motion","fall","vibration"].includes(n.kind)?n.kind:void 0);v&&!s.entities?.[v]&&(_[v]=[s.entity])}return d==="missing_device"||d==="model_mismatch"?{candidates:o,preset:n,entities:[],bindings:{},reason:d}:(Object.keys(_).length>0&&!l&&(d=void 0),{device:l,preset:n,candidates:o,entities:c,bindings:_,reason:d})}function et(s,e,t){return s.filter(i=>!i.disabled_by&&!i.hidden_by&&!i.hidden&&e.states[i.entity_id]&&(["button","number","select","text","update","remote"].includes(S(i.entity_id))||i.entity_category==="config"||Je.includes(S(i.entity_id))&&Xe(i,e,t)!=="control"))}function kt(s,e){let t=new Set([e]),i=0;for(;t.size!==i;){i=t.size;for(let r of s.devices)r.parent_device_id&&t.has(r.parent_device_id)&&t.add(r.id)}return t}var Et={home:"Home",fire:"Fire safety",minimal:"Minimal",auto:"Automatic",model:"Product model",device:"Device",style:"Style",name:"Card name",language:"Language",search:"Search models or Zigbee aliases",choose:"Choose a device",choose_device:"Several devices match. Select one in the card editor.",no_device:"Select a model and a paired device in the card editor.",missing_device:"This device is no longer in Home Assistant.",model_mismatch:"The selected device does not match this model. Select its model or use Automatic.",no_entities:"No matching entities. Check the device or assign entities in the editor.",unknown:"Unknown",unavailable:"Unavailable",normal:"Normal",alarm:"Alarm",warning:"Attention",testing:"Self-test running",active:"Active",inactive:"Inactive",open:"Open",closed:"Closed",detected:"Detected",clear:"Clear",on:"On",off:"Off",settings:"Device settings",details:"Details",more_info:"More information",battery:"Battery",battery_low:"Low battery",signal:"Signal",temperature:"Temperature",humidity:"Humidity",smoke:"Smoke",co:"Carbon monoxide",smoke_co:"Smoke & CO",heat:"Heat",gas:"Combustible gas",leak:"Water leak",contact:"Door / window",motion:"Motion / presence",fall:"Fall",vibration:"Vibration",climate:"Temperature & humidity",air:"Air quality",siren:"Siren",plug:"Smart plug",switch:"Switch / relay",light:"Lighting",cover:"Curtain",remote:"Remote / button",power:"Power",energy:"Energy",voltage:"Voltage",current:"Current",illuminance:"Illuminance",co2:"CO\u2082",voc:"VOC",pm25:"PM2.5",action:"Last action",control:"Main control",tamper:"Tamper",fault:"Fault",test:"Self-test",muted:"Muted",updated:"Updated",show_battery:"Show battery",show_signal:"Show signal",show_details:"Show details",show_controls:"Show controls",advanced:"Entity assignments",assignments_help:"Entities are matched within this device. Override only when needed. Empty fields use automatic matching.",device_help:"A single matching device is selected automatically. Choose the instance when you have several.",registry_error:"Unable to read the device registry. Retry or assign entities below.",retry:"Retry",loading:"Loading devices\u2026",self_test:"Self-test",mute:"Hush",turn_on:"Turn on",turn_off:"Turn off",stop:"Stop",close:"Close",service_error:"The command failed. Please try again.",not_reported:"Not reported",connected:"Connected",controls_help:"Open the Home Assistant dialog to adjust this entity.",no_control:"This device has no exposed controls.",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"Paired HEIMAN device",no_matches:"No matching models",tracking:"Monitoring",partial:"Some readings unavailable",config_entity:"Primary entity (optional)",diagnostic:"Diagnostics",unavailable_readings:"Unavailable readings",empty:"No paired HEIMAN devices found",preview:"Preview"},wt={home:"\u5BB6\u5C45\u98CE\u683C",fire:"\u6D88\u9632\u98CE\u683C",minimal:"\u7B80\u7EA6\u98CE\u683C",auto:"\u81EA\u52A8\u8BC6\u522B",model:"\u4EA7\u54C1\u578B\u53F7",device:"\u8BBE\u5907",style:"\u5361\u7247\u6837\u5F0F",name:"\u5361\u7247\u540D\u79F0",language:"\u8BED\u8A00",search:"\u641C\u7D22\u578B\u53F7\u6216 Zigbee \u578B\u53F7\u522B\u540D",choose:"\u8BF7\u9009\u62E9\u8BBE\u5907",choose_device:"\u5339\u914D\u5230\u591A\u53F0\u8BBE\u5907\uFF0C\u8BF7\u5728\u5361\u7247\u7F16\u8F91\u5668\u4E2D\u9009\u62E9\u5177\u4F53\u8BBE\u5907\u3002",no_device:"\u8BF7\u5728\u5361\u7247\u7F16\u8F91\u5668\u4E2D\u9009\u62E9\u578B\u53F7\u548C\u5DF2\u914D\u5BF9\u7684\u8BBE\u5907\u3002",missing_device:"Home Assistant \u4E2D\u5DF2\u627E\u4E0D\u5230\u6B64\u8BBE\u5907\u3002",model_mismatch:"\u6240\u9009\u8BBE\u5907\u4E0E\u578B\u53F7\u4E0D\u7B26\uFF0C\u8BF7\u9009\u62E9\u5BF9\u5E94\u578B\u53F7\u6216\u81EA\u52A8\u8BC6\u522B\u3002",no_entities:"\u672A\u5339\u914D\u5230\u5B9E\u4F53\uFF0C\u8BF7\u68C0\u67E5\u8BBE\u5907\u6216\u5728\u7F16\u8F91\u5668\u4E2D\u6307\u5B9A\u5B9E\u4F53\u3002",unknown:"\u672A\u77E5",unavailable:"\u4E0D\u53EF\u7528",normal:"\u6B63\u5E38",alarm:"\u62A5\u8B66",warning:"\u9700\u8981\u5173\u6CE8",testing:"\u6B63\u5728\u81EA\u68C0",active:"\u5DF2\u89E6\u53D1",inactive:"\u672A\u89E6\u53D1",open:"\u5DF2\u6253\u5F00",closed:"\u5DF2\u5173\u95ED",detected:"\u68C0\u6D4B\u5230\u6D3B\u52A8",clear:"\u672A\u68C0\u6D4B\u5230",on:"\u5DF2\u5F00\u542F",off:"\u5DF2\u5173\u95ED",settings:"\u8BBE\u5907\u8BBE\u7F6E",details:"\u8BE6\u7EC6\u4FE1\u606F",more_info:"\u66F4\u591A\u4FE1\u606F",battery:"\u7535\u6C60\u7535\u91CF",battery_low:"\u4F4E\u7535\u91CF",signal:"\u4FE1\u53F7",temperature:"\u6E29\u5EA6",humidity:"\u6E7F\u5EA6",smoke:"\u70DF\u96FE",co:"\u4E00\u6C27\u5316\u78B3",smoke_co:"\u70DF\u96FE\u4E0E\u4E00\u6C27\u5316\u78B3",heat:"\u9AD8\u6E29",gas:"\u53EF\u71C3\u6C14\u4F53",leak:"\u6F0F\u6C34",contact:"\u95E8\u7A97",motion:"\u4EBA\u4F53\u6D3B\u52A8",fall:"\u8DCC\u5012",vibration:"\u632F\u52A8",climate:"\u6E29\u6E7F\u5EA6",air:"\u7A7A\u6C14\u8D28\u91CF",siren:"\u58F0\u5149\u62A5\u8B66\u5668",plug:"\u667A\u80FD\u63D2\u5EA7",switch:"\u5F00\u5173\u4E0E\u7EE7\u7535\u5668",light:"\u7167\u660E",cover:"\u7A97\u5E18",remote:"\u9065\u63A7\u5668\u4E0E\u6309\u94AE",power:"\u529F\u7387",energy:"\u7528\u7535\u91CF",voltage:"\u7535\u538B",current:"\u7535\u6D41",illuminance:"\u7167\u5EA6",co2:"\u4E8C\u6C27\u5316\u78B3",voc:"\u6325\u53D1\u6027\u6709\u673A\u7269",pm25:"PM2.5",action:"\u6700\u8FD1\u64CD\u4F5C",control:"\u4E3B\u63A7\u5236\u5B9E\u4F53",tamper:"\u9632\u62C6",fault:"\u6545\u969C",test:"\u81EA\u68C0",muted:"\u5DF2\u6D88\u97F3",updated:"\u66F4\u65B0\u65F6\u95F4",show_battery:"\u663E\u793A\u7535\u91CF",show_signal:"\u663E\u793A\u4FE1\u53F7",show_details:"\u663E\u793A\u8BE6\u7EC6\u4FE1\u606F",show_controls:"\u663E\u793A\u63A7\u5236\u6309\u94AE",advanced:"\u5B9E\u4F53\u5339\u914D\u8BBE\u7F6E",assignments_help:"\u81EA\u52A8\u5339\u914D\u6B64\u8BBE\u5907\u7684\u5B9E\u4F53\u3002\u5339\u914D\u6709\u8BEF\u65F6\u53EF\u624B\u52A8\u6307\u5B9A\uFF0C\u7559\u7A7A\u5219\u81EA\u52A8\u5339\u914D\u3002",device_help:"\u53EA\u6709\u4E00\u53F0\u5339\u914D\u8BBE\u5907\u65F6\u81EA\u52A8\u9009\u62E9\uFF1B\u6709\u591A\u53F0\u65F6\u8BF7\u9009\u62E9\u5177\u4F53\u8BBE\u5907\u3002",registry_error:"\u65E0\u6CD5\u8BFB\u53D6\u8BBE\u5907\u5217\u8868\uFF0C\u8BF7\u91CD\u8BD5\u6216\u5728\u4E0B\u65B9\u624B\u52A8\u6307\u5B9A\u5B9E\u4F53\u3002",retry:"\u91CD\u8BD5",loading:"\u6B63\u5728\u52A0\u8F7D\u8BBE\u5907\u2026",self_test:"\u81EA\u68C0",mute:"\u6D88\u97F3",turn_on:"\u5F00\u542F",turn_off:"\u5173\u95ED",stop:"\u505C\u6B62",close:"\u5173\u95ED",service_error:"\u6307\u4EE4\u6267\u884C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",not_reported:"\u5C1A\u672A\u4E0A\u62A5",connected:"\u5DF2\u8FDE\u63A5",controls_help:"\u6253\u5F00 Home Assistant \u5BF9\u8BDD\u6846\u4EE5\u8C03\u6574\u6B64\u5B9E\u4F53\u3002",no_control:"\u6B64\u8BBE\u5907\u6CA1\u6709\u53EF\u7528\u7684\u63A7\u5236\u5B9E\u4F53\u3002",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"\u5DF2\u914D\u5BF9\u7684 HEIMAN \u8BBE\u5907",no_matches:"\u6CA1\u6709\u5339\u914D\u7684\u578B\u53F7",tracking:"\u76D1\u6D4B\u4E2D",partial:"\u90E8\u5206\u8BFB\u6570\u4E0D\u53EF\u7528",config_entity:"\u4E3B\u5B9E\u4F53\uFF08\u53EF\u9009\uFF09",diagnostic:"\u8BCA\u65AD\u4FE1\u606F",unavailable_readings:"\u4E0D\u53EF\u7528\u7684\u8BFB\u6570",empty:"\u5C1A\u672A\u627E\u5230\u5DF2\u914D\u5BF9\u7684 HEIMAN \u8BBE\u5907",preview:"\u9884\u89C8"};function q(s,e){return s?.language&&s.language!=="auto"?s.language:(e?.locale?.language??e?.language??"en").startsWith("zh")?"zh":"en"}var tt=(s,e)=>(s==="zh"?wt:Et)[e];var ke=["smoke","co","heat","gas","leak","contact","motion","fall","vibration","temperature","humidity","battery","battery_low","tamper","fault","test","muted","signal","power","energy","voltage","current","illuminance","co2","voc","pm25","action","control"];function Ee(s){if(!s||typeof s!="object")throw new Error("HEIMAN: configuration must be an object.");if(s.model!==void 0&&(typeof s.model!="string"||s.model!=="auto"&&!R(s.model)))throw new Error(`HEIMAN: unknown model ${String(s.model)}.`);if(s.style!==void 0&&!["home","fire","minimal"].includes(s.style))throw new Error("HEIMAN: style must be home, fire or minimal.");if(s.language!==void 0&&!["auto","zh","en"].includes(s.language))throw new Error("HEIMAN: language must be auto, zh or en.");for(let e of["name","device_id","entity"])if(s[e]!==void 0&&typeof s[e]!="string")throw new Error(`HEIMAN: ${e} must be a string.`);for(let e of["show_battery","show_signal","show_details","show_controls"])if(s[e]!==void 0&&typeof s[e]!="boolean")throw new Error(`HEIMAN: ${e} must be a boolean.`);if(s.entity&&!/^\w+\.[\w]+$/.test(s.entity))throw new Error("HEIMAN: invalid entity ID.");if(s.entities!==void 0){if(!s.entities||typeof s.entities!="object"||Array.isArray(s.entities))throw new Error("HEIMAN: entities must map roles to entity IDs.");for(let[e,t]of Object.entries(s.entities))if(!ke.includes(e)||typeof t!="string"||!/^\w+\.[\w]+$/.test(t))throw new Error(`HEIMAN: invalid entity override for ${e}.`)}return{...s,type:"custom:heiman-device-card",model:R(s.model)?.id??"auto",style:s.style??"home",language:s.language??"auto",entities:{...s.entities}}}var I=class extends x{constructor(){super(...arguments);this._config=Ee({type:"custom:heiman-device-card"});this._registry={devices:[],entities:[]};this._registryError=!1;this._loading=!1;this._request=0}static{this.properties={hass:{attribute:!1},_config:{state:!0},_registry:{state:!0},_registryError:{state:!0},_loading:{state:!0}}}setConfig(t){this._config=Ee(t)}t(t){return tt(q(this._config,this.hass),t)}updated(t){t.has("hass")&&this._syncRegistry()}connectedCallback(){super.connectedCallback(),this.hass&&this._syncRegistry(!0)}disconnectedCallback(){this._request++,this._registryKey=void 0,super.disconnectedCallback()}async _syncRegistry(t=!1){let i=this.hass;if(!i)return;let r=$e(i)??(this._devicesRef&&i.devices&&i.entities?{devices:Object.values(i.devices),entities:Object.values(i.entities)}:void 0);if(r){(t||this._devicesRef!==i.devices||this._entitiesRef!==i.entities)&&(this._request++,this._registry=r,this._devicesRef=i.devices,this._entitiesRef=i.entities,this._registryError=!1,this._loading=!1);return}let a=i.connection??i;if(!t&&a===this._registryKey)return;this._registryKey=a;let o=++this._request;this._loading=!0,this._registryError=!1;try{let l=await Qe(i,t);o===this._request&&this.isConnected&&(this._registry=l)}catch{o===this._request&&this.isConnected&&(this._registryError=!0)}finally{o===this._request&&this.isConnected&&(this._loading=!1)}}_moreInfo(t){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}};var it=F`
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
`;var st={smoke:"M6 17h12M8 21h8M4 13h16M8 9c-4-4 4-4 0-8M16 9c-4-4 4-4 0-8",co:"M8 7a5 5 0 1 0 0 10M16 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z",temperature:"M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0ZM12 11v7",gas:"M12 2c1 6 7 7 7 13a7 7 0 0 1-14 0c0-4 3-6 4-8 0 4 2 4 3 5 1-4 0-7 0-10Z",water:"M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z",door:"M4 21h16M6 21V4l12-2v19M14 12h.01",motion:"M12 5h.01M9 10l3-2 3 4 3 1M12 9l-2 6-4 4M10 15l5 2 1 4",air:"M3 8h12a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h5a3 3 0 1 1-3 3",bell:"M5 17h14l-2-3V9a5 5 0 0 0-10 0v5l-2 3ZM10 21h4",power:"M12 2v9M7 5a8 8 0 1 0 10 0",light:"M9 18h6M10 22h4M8 15a7 7 0 1 1 8 0l-1 3H9l-1-3Z",cover:"M3 3h18v18H3V3ZM3 7h18M3 11h18M3 15h18M12 3v18",remote:"M7 2h10v20H7V2ZM10 6h4M10 11h.01M14 11h.01M10 16h.01M14 16h.01",battery:"M9 2h6M7 5h10v17H7V5ZM10 10h4M10 14h4",signal:"M4 20v-3M9 20v-7M14 20V9M19 20V4",check:"m5 12 4 4L19 6",info:"M12 11v6M12 7h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",alert:"m12 3 10 18H2L12 3ZM12 9v5M12 17h.01",settings:"M4 7h16M4 17h16M8 4v6M16 14v6",humidity:"M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13ZM9 17l6-6M9 11h.01M15 17h.01",energy:"m13 2-9 12h7l-1 8 10-13h-8l1-7Z",stop:"M6 6h12v12H6V6Z",chevron:"m9 5 7 7-7 7"},b=(s,e=20)=>w`<svg width=${e} height=${e} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${st[s]??st.info}></path></svg>`;function rt(s){let e=["smoke","co","smoke_co","heat","gas","siren","leak","motion","fall"].includes(s);return w`<svg class="product" viewBox="0 0 160 150" aria-hidden="true">
    <ellipse cx="80" cy="135" rx="47" ry="7" fill="currentColor" opacity=".08"></ellipse>
    ${e?w`
      <circle cx="80" cy="72" r="57" fill="var(--device-edge)" stroke="var(--device-stroke)" stroke-width="1"></circle>
      <circle cx="80" cy="68" r="53" fill="var(--device-face)" stroke="var(--device-stroke)" stroke-width="1"></circle>
      <circle cx="80" cy="68" r="40" fill="none" stroke="var(--device-stroke)" stroke-width="1"></circle>
      ${[0,1,2,3,4,5,6,7,8,9,10,11].map(t=>w`<path transform="rotate(${t*30} 80 68)" d="M74 23h12" stroke="var(--device-slot)" stroke-width="2.5" stroke-linecap="round"></path>`)}
      <text x="80" y="62" text-anchor="middle" font-size="8" font-family="Arial, sans-serif" font-weight="700" letter-spacing="1" fill="var(--device-slot)">HEIMAN</text>
      <circle cx="80" cy="80" r="10" fill="var(--device-edge)" stroke="var(--device-stroke)"></circle>
      <circle cx="80" cy="102" r="2" fill="var(--status-color)"></circle>
    `:w`
      <rect x="40" y="15" width="80" height="112" rx="22" fill="var(--device-edge)" stroke="var(--device-stroke)"></rect>
      <rect x="40" y="12" width="80" height="109" rx="22" fill="var(--device-face)" stroke="var(--device-stroke)"></rect>
      <text x="80" y="100" text-anchor="middle" font-size="8" font-family="Arial, sans-serif" font-weight="700" letter-spacing="1" fill="var(--device-slot)">HEIMAN</text>
      ${["climate","air"].includes(s)?w`<rect x="50" y="32" width="60" height="42" rx="6" fill="var(--device-edge)" stroke="var(--device-stroke)"></rect><path d="M61 45h14m-14 7h14m-14 7h14m10-14h13m-13 7h13" stroke="var(--device-slot)" stroke-width="2"></path>`:w`<circle cx="80" cy="57" r="17" fill="var(--device-edge)" stroke="var(--device-stroke)"></circle><path d="M80 45v12m-6-9a10 10 0 1 0 12 0" stroke="var(--device-slot)" stroke-width="2" fill="none" stroke-linecap="round"></path>`}
      <circle cx="80" cy="109" r="2" fill="var(--status-color)"></circle>
    `}
  </svg>`}var k=s=>!s||["unknown","unavailable","none",""].includes(s.state.toLowerCase()),te=s=>!!(s&&["on","true","1","detected","alarm","open"].includes(s.state.toLowerCase())),we={smoke:["smoke"],co:["co"],smoke_co:["smoke","co"],heat:["heat"],gas:["gas"],leak:["leak"],contact:["contact"],motion:["motion"],fall:["fall","motion"],vibration:["vibration"],climate:["temperature","humidity"],air:["co2","voc","pm25","temperature","humidity"],plug:["control"],switch:["control"],light:["control"],cover:["control"],remote:["action","battery"],siren:["control"]};function at(s,e,t){let i=p=>p.flatMap(y=>e[y]??[]),r=we[s]??[],a=i(r),o=["smoke","co","heat","gas","leak"].includes(s)||s==="smoke_co",d=i(["smoke","co","heat","gas","leak"]).find(p=>S(p)==="binary_sensor"&&te(t.states[p])),n=["battery_low","tamper","fault"].filter(p=>(e[p]??[]).some(y=>{let A=t.states[y];return k(A)?!1:p==="fault"&&S(y)==="sensor"?!["normal","clear","ok","off","0","false","no_fault"].includes(A.state.toLowerCase()):te(A)}));(e.battery??[]).some(p=>{let y=t.states[p];return!k(y)&&Number.isFinite(Number(y.state))&&Number(y.state)<=20})&&!n.includes("battery_low")&&n.push("battery_low");let h=p=>S(p)==="binary_sensor"&&["on","off","true","false","1","0","detected","clear","alarm"].includes(t.states[p]?.state.toLowerCase()),c=a.some(p=>k(t.states[p])||o&&!h(p)),_=a.find(p=>!k(t.states[p]))??a[0];if(d)return{severity:"alarm",key:"alarm",primary:d,alerts:n,partial:c};let g=o&&r.some(p=>!e[p]?.length);if(!_||g)return{severity:"unknown",key:"unknown",primary:_,alerts:n,partial:c};if(o&&c||a.every(p=>k(t.states[p]))){let p=a.some(y=>t.states[y]?.state==="unavailable");return{severity:p?"unavailable":"unknown",key:p?"unavailable":"unknown",primary:_,alerts:n,partial:c}}if(n.length)return{severity:"warning",key:"warning",primary:_,alerts:n,partial:c};if(i(["test"]).some(p=>te(t.states[p])))return{severity:"active",key:"testing",primary:_,alerts:n,partial:c};let v=a.some(p=>te(t.states[p]));if(s==="contact"||s==="cover"){let p=s==="cover"?a.some(y=>["open","opening","closing"].includes(t.states[y]?.state)):v;return{severity:p?"active":"normal",key:p?"open":"closed",primary:_,alerts:n,partial:c}}return["motion","fall","vibration"].includes(s)?{severity:s==="fall"&&v?"alarm":v?"active":"normal",key:v?"detected":"clear",primary:_,alerts:n,partial:c}:["plug","switch","light","siren"].includes(s)?{severity:v?"active":"normal",key:v?"on":"off",primary:_,alerts:n,partial:c}:s==="remote"?{severity:"normal",key:"tracking",primary:_,alerts:n,partial:c}:{severity:"normal",key:"normal",primary:_,alerts:n,partial:c}}function ot(s,e){if(!e)return"\u2014";if(s.formatEntityState)try{return s.formatEntityState(e)}catch{}let t=e.attributes.unit_of_measurement;return`${e.state}${t?` ${String(t)}`:""}`}var ie=class extends I{constructor(){super(...arguments);this._busy=!1;this._serviceError=!1;this._watchedEntities=new Set}static{this.styles=it}static{this.properties={_busy:{state:!0},_serviceError:{state:!0}}}shouldUpdate(t){if(t.size!==1||!t.has("hass"))return!0;let i=t.get("hass"),r=this.hass;if(!i||!r)return!0;for(let a of["devices","entities","areas","locale","language","themes","connection"])if(i[a]!==r[a])return!0;return[...this._watchedEntities].some(a=>i.states[a]!==r.states[a])}static getConfigElement(){return document.createElement("heiman-device-card-editor")}static getStubConfig(){return{type:"custom:heiman-device-card",model:"auto",style:"home"}}getCardSize(){return 7}getGridOptions(){return{columns:6,rows:"auto",min_columns:3}}render(){let t=this.hass;if(!t)return u;let i=O(this._config,t,this._registry),{device:r,preset:a,bindings:o,entities:l,reason:d}=i;this._watchedEntities=new Set([...l.map(f=>f.entity_id),...Object.values(o).flatMap(f=>f??[])]);let n=this._config.style??"home",h=Object.values(o).some(f=>f?.length);if(d||!a||!r&&!h)return m` <ha-card
        class=${n}
        data-severity="unknown"
        ?data-dark=${t.themes?.darkMode}
      >
        <div class="empty">
          <div class="brand">HEIMAN</div>
          <p>
            ${this.t(this._loading?"loading":this._registryError&&!h?"registry_error":d??"no_entities")}
          </p>
          ${this._registryError?m`<button class="action" @click=${()=>this._syncRegistry(!0)}>${this.t("retry")}</button>`:u}
        </div>
      </ha-card>`;let c=at(a.kind,o,t),_=c.primary??this._config.entity??l.find(f=>!f.disabled_by&&!f.hidden_by&&!f.hidden)?.entity_id,g=this._config.name||r?.name_by_user||r?.name||a.id,v=r?.area_id?t.areas?.[r.area_id]?.name:void 0,p=l.find(f=>f.platform)?.platform,y=p==="zha"?"ZHA":p==="mqtt"?"MQTT":p,A=["temperature","humidity","co2","pm25","voc","power","energy","illuminance","action"];this._config.show_battery!==!1&&A.push("battery"),this._config.show_signal!==!1&&A.push("signal");let Ae=A.flatMap(f=>o[f]?.[0]?[{role:f,id:o[f][0]}]:[]),He=this._config.show_controls!==!1?o.control??[]:[],ze=et(l,t,a.kind),Ce=Object.values(o).flatMap(f=>f??[]).map(f=>t.states[f]?.last_updated).filter(f=>!!f).sort().at(-1),Z=Ce?new Date(Ce):void 0,Me=Z&&Number.isFinite(Z.getTime())?Z.toLocaleTimeString(q(this._config,t),{hour:"2-digit",minute:"2-digit"}):void 0,re=this._detailEntities();return m` <ha-card
      class=${n}
      data-severity=${c.severity}
      ?data-dark=${t.themes?.darkMode}
    >
      <div class="body">
        <div class="top">
          <span class="brand">HEIMAN</span
          ><span class="model">${a.id}</span>
        </div>
        <div class="heading">
          <div>
            <h2>${g}</h2>
            <div class="subheading">
              ${[v,this.t(a.kind)].filter(Boolean).join(" \xB7 ")}
            </div>
          </div>
          ${_?m`<button class="icon-button" aria-label=${this.t("more_info")} @click=${()=>this._moreInfo(_)}>${b("info")}</button>`:u}
        </div>
        <div class="hero" role="status" aria-live="polite" aria-atomic="true">
          <div class="illustration">${rt(a.kind)}</div>
          <div class="status">
            <div class="status-label">${this.t(c.key)}</div>
            <div class="status-caption">
              <span class="dot"></span>${this.t(a.kind)}
            </div>
            <div class="status-tag">
              ${b(c.severity==="alarm"||c.severity==="warning"?"alert":c.severity==="normal"?"check":X[a.kind],13)}${c.severity==="normal"?this.t("tracking"):this.t(c.key)}
            </div>
          </div>
        </div>
        ${c.alerts.length?m`<div class="alerts">${c.alerts.map(f=>m`<span class="alert">${b("alert",14)}${this.t(f)}</span>`)}</div>`:u}
        ${Ae.length?m`<div class="metrics">
                ${Ae.map(({role:f,id:ae})=>m` <button
                      class="metric"
                      @click=${()=>this._moreInfo(ae)}
                      aria-label=${`${this.t(f)}: ${this._display(t.states[ae])}`}
                    >
                      <span class="metric-label"
                        >${b(this._metricIcon(f),15)}${this.t(f)}</span
                      >
                      <span class="metric-value"
                        >${this._display(t.states[ae])}</span
                      >
                    </button>`)}
              </div>`:u}
        ${c.partial?m`<p class="partial">${this.t("partial")}</p>`:u}
        ${He.length?m`<div class="actions">${He.map(f=>this._renderControl(f))}</div>`:u}
        ${this._config.show_controls!==!1&&ze.length?m`<details class="settings">
                <summary>${this.t("settings")}</summary>
                ${ze.map(f=>this._entityRow(f.entity_id))}
              </details>`:u}
        ${this._serviceError?m`<div class="error" role="alert">${this.t("service_error")}</div>`:u}
        <div class="footer">
          <span>${y||"Home Assistant"}</span
          ><span
            title=${Z?.toLocaleString(q(this._config,t))??""}
            >${Me?`${this.t("updated")} ${Me}`:this.t("not_reported")}</span
          >
        </div>
        ${this._config.show_details!==!1&&re.length?m`<details class="readings">
                <summary>${this.t("details")} · ${re.length}</summary>
                ${re.map(f=>this._entityRow(f))}
              </details>`:u}
      </div>
    </ha-card>`}_detailEntities(){if(!this.hass)return[];let t=O(this._config,this.hass,this._registry),i=new Set;if(this._config.show_battery===!1)for(let r of t.bindings.battery??[])i.add(r);if(this._config.show_signal===!1)for(let r of t.bindings.signal??[])i.add(r);return[...new Set([...t.entities.filter(r=>!r.disabled_by&&!r.hidden_by&&!r.hidden).map(r=>r.entity_id),...Object.values(t.bindings).flatMap(r=>r??[])])].filter(r=>!i.has(r)).sort()}_display(t){return!t||t.state==="unknown"?this.t("unknown"):k(t)?this.t("unavailable"):["binary_sensor","switch","light","siren"].includes(S(t.entity_id))&&["on","off"].includes(t.state)?this.t(t.state):ot(this.hass,t)}_metricIcon(t){return["power","energy","voltage","current"].includes(t)?"energy":["co2","pm25","voc"].includes(t)?"air":t==="illuminance"?"light":t==="action"?"remote":t}_entityRow(t){let i=this.hass?.states[t];return m`<button
      class="entity-row"
      @click=${()=>this._moreInfo(t)}
      title=${t}
    >
      <span>${i?.attributes.friendly_name??t}</span
      ><span>${this._display(i)}</span>
    </button>`}_renderControl(t){let i=this.hass?.states[t],r=S(t),a=String(i?.attributes.friendly_name??t),o=k(i)||this._busy;if(r==="cover"){let d=Number(i?.attributes.supported_features??0),n=[{flag:1,key:"open",service:"open_cover"},{flag:8,key:"stop",service:"stop_cover"},{flag:2,key:"close",service:"close_cover"}].filter(h=>d&h.flag);return n.length?n.map(h=>m`<button
            class="action"
            ?disabled=${o}
            aria-label=${`${this.t(h.key)} ${a}`}
            @click=${()=>this._command(t,h.service)}
          >
            ${b(h.key==="stop"?"stop":"cover",16)}${this.t(h.key)}
          </button>`):m`<button class="action" @click=${()=>this._moreInfo(t)}>
          ${b("cover",16)}${a}
        </button>`}if(r==="siren")return m`<button
        class="action"
        ?disabled=${o}
        @click=${()=>this._moreInfo(t)}
      >
        ${b("bell",16)}${a}
      </button>`;let l=i?.state==="on"?"turn_off":"turn_on";return m`<button
      class="action"
      ?disabled=${o}
      @click=${()=>this._command(t,l)}
    >
      ${b("power",16)}${a} · ${this.t(l)}
    </button>`}async _command(t,i){if(!(!this.hass||this._busy||k(this.hass.states[t]))){this._busy=!0,this._serviceError=!1;try{await this.hass.callService(S(t),i,{entity_id:t})}catch{this._serviceError=!0}finally{this._busy=!1}}}},xe={type:"heiman-device-card",name:"HEIMAN Dashboard",description:`HEIMAN \xB7 Zigbee2MQTT / ZHA \xB7 ${T.length} models \xB7 \u5BB6\u5C45 / \u6D88\u9632 / \u7B80\u7EA6`,preview:!0};var se=class extends I{constructor(){super(...arguments);this._search="";this._inputError=""}static{this.properties={_search:{state:!0},_inputError:{state:!0}}}static{this.styles=F`
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
  `}render(){let t=this.hass;if(!t)return u;let i=O(this._config,t,this._registry),r=this._search.toLowerCase().trim(),a=T.filter(n=>[n.id,n.description,this.t(n.kind),...n.aliases].some(h=>h.toLowerCase().includes(r))||n.id===this._config.model),o=[...new Set(a.map(n=>n.kind))],l=[...new Set([...i.preset?we[i.preset.kind]??[]:ke,"battery","battery_low","temperature","humidity","signal","fault","tamper","test","muted",...Object.keys(this._config.entities??{})])],d=i.device?this._registry.entities.filter(n=>n.device_id===i.device.id&&!n.disabled_by).map(n=>n.entity_id):Object.keys(t.states).slice(0,500);return m`
      <div class="intro">
        <div class="brand">HEIMAN DASHBOARD</div>
        <p>${this.t("device_help")}</p>
      </div>
      <label for="model"
        >${this.t("model")}<span class="count"
          >${a.length} / ${T.length}</span
        ></label
      >
      <input
        type="search"
        id="search"
        aria-label=${this.t("search")}
        placeholder=${this.t("search")}
        .value=${this._search}
        @input=${n=>{this._search=n.target.value}}
      />
      <select id="model" @change=${this._modelChanged}>
        <option value="auto" .selected=${this._config.model==="auto"}>
          ${this.t("auto")}
        </option>
        ${o.map(n=>m`<optgroup label=${this.t(n)}>${a.filter(h=>h.kind===n).map(h=>m`<option value=${h.id} .selected=${this._config.model===h.id}>${h.id}</option>`)}</optgroup>`)}
      </select>
      <label for="device">${this.t("device")}</label>
      <select id="device" @change=${this._deviceChanged}>
        <option value="" .selected=${!this._config.device_id}>
          ${this.t("auto")}${i.candidates.length===1?` \xB7 ${i.candidates[0].name_by_user||i.candidates[0].name||i.candidates[0].model}`:""}
        </option>
        ${this._config.device_id&&!i.candidates.some(n=>n.id===this._config.device_id)?m`<option value=${this._config.device_id} selected>${this._config.device_id}</option>`:u}
        ${i.candidates.map(n=>m`<option value=${n.id} .selected=${this._config.device_id===n.id}>${n.name_by_user||n.name||n.model} · ${n.model}</option>`)}
      </select>
      ${this._loading?m`<div class="help">${this.t("loading")}</div>`:u}
      ${this._registryError?m`<div class="error">${this.t("registry_error")}<button class="retry" @click=${()=>this._syncRegistry(!0)}>${this.t("retry")}</button></div>`:u}
      ${i.reason?m`<div class="help status">${this.t(i.reason)}</div>`:m`<div class="help status selection">${b(X[i.preset?.kind??"smoke"],16)}${i.preset?.id} · ${i.entities.length} ${this.t("details")}</div>`}
      <label>${this.t("style")}</label>
      <div class="styles" role="group" aria-label=${this.t("style")}>
        ${["home","fire","minimal"].map(n=>m`<button class=${`style ${n}`} aria-pressed=${String(this._config.style===n)} @click=${()=>this._change({style:n})}>${b(n==="home"?"door":n==="fire"?"smoke":"settings",18)}${this.t(n)}</button>`)}
      </div>
      <label for="name">${this.t("name")}</label>
      <input
        id="name"
        .value=${this._config.name??""}
        placeholder=${i.device?.name_by_user||i.device?.name||"HEIMAN"}
        @change=${n=>this._change({name:n.target.value||void 0})}
      />
      <label for="language">${this.t("language")}</label>
      <select
        id="language"
        @change=${n=>this._change({language:n.target.value})}
      >
        ${[["auto",this.t("auto")],["zh","\u7B80\u4F53\u4E2D\u6587"],["en","English"]].map(([n,h])=>m`<option
              value=${n}
              .selected=${this._config.language===n}
            >
              ${h}
            </option>`)}
      </select>
      <div class="toggles">
        ${["show_battery","show_signal","show_controls","show_details"].map(n=>m`<label class="toggle"><input type="checkbox" .checked=${this._config[n]!==!1} @change=${h=>this._change({[n]:h.target.checked})} />${this.t(n)}</label>`)}
      </div>
      <details>
        <summary>${this.t("advanced")}</summary>
        <p class="help">${this.t("assignments_help")}</p>
        <datalist id="entity-options">
          ${d.sort().map(n=>m`<option value=${n}>${t.states[n]?.attributes.friendly_name??n}</option>`)}
        </datalist>
        <label for="primary">${this.t("config_entity")}</label>
        <input
          id="primary"
          list="entity-options"
          .value=${this._config.entity??""}
          placeholder="binary_sensor.…"
          @change=${n=>this._change({entity:n.target.value||void 0})}
        />
        ${l.map(n=>m`<label for=${`entity-${n}`}>${this.t(n)}</label><input id=${`entity-${n}`} list="entity-options" .value=${this._config.entities?.[n]??""} placeholder=${i.bindings[n]?.join(", ")??this.t("auto")} @change=${h=>this._overrideChanged(n,h.target.value)} /> `)}
      </details>
      ${this._inputError?m`<div class="error" role="alert">${this._inputError}</div>`:u}
    `}_change(t){let i={...this._config,...t};for(let r of Object.keys(i))i[r]===void 0&&delete i[r];try{this.setConfig(i),this._inputError=""}catch(r){this._inputError=r.message;return}this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_modelChanged(t){let i=t.target.value,r={...this._config,model:i,device_id:void 0,entity:void 0,entities:{}},a=this.hass?O(r,this.hass,this._registry):void 0;this._change({model:i,device_id:a?.candidates.length===1?a.candidates[0].id:void 0,entity:void 0,entities:{}})}_deviceChanged(t){this._change({device_id:t.target.value||void 0,entity:void 0,entities:{}})}_overrideChanged(t,i){let r={...this._config.entities};i?r[t]=i.trim():delete r[t],this._change({entities:r})}};customElements.get("heiman-device-card-editor")||customElements.define("heiman-device-card-editor",se);customElements.get("heiman-device-card")||customElements.define("heiman-device-card",ie);window.customCards??=[];window.customCards.some(s=>s.type===xe.type)||window.customCards.push(xe);console.info("HEIMAN Dashboard 0.1.0");
