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
 */var ae=globalThis,ne=ae.ShadowRoot&&(ae.ShadyCSS===void 0||ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,we=Symbol(),tt=new WeakMap,Q=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==we)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ne&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=tt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&tt.set(e,t))}return t}toString(){return this.cssText}},it=s=>new Q(typeof s=="string"?s:s+"",void 0,we),R=(s,...t)=>{let e=s.length===1?s[0]:t.reduce((i,a,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+s[o+1],s[0]);return new Q(e,s,we)},st=(s,t)=>{if(ne)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),a=ae.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=e.cssText,s.appendChild(i)}},ke=ne?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return it(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var{is:Ot,defineProperty:It,getOwnPropertyDescriptor:Lt,getOwnPropertyNames:jt,getOwnPropertySymbols:Ft,getPrototypeOf:Wt}=Object,oe=globalThis,at=oe.trustedTypes,Bt=at?at.emptyScript:"",Vt=oe.reactiveElementPolyfillSupport,Y=(s,t)=>s,$e={toAttribute(s,t){switch(t){case Boolean:s=s?Bt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},ot=(s,t)=>!Ot(s,t),nt={attribute:!0,type:String,converter:$e,reflect:!1,useDefault:!1,hasChanged:ot};Symbol.metadata??=Symbol("metadata"),oe.litPropertyMetadata??=new WeakMap;var E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=nt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),a=this.getPropertyDescriptor(t,i,e);a!==void 0&&It(this.prototype,t,a)}}static getPropertyDescriptor(t,e,i){let{get:a,set:o}=Lt(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:a,set(r){let d=a?.call(this);o?.call(this,r),this.requestUpdate(t,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??nt}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;let t=Wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){let e=this.properties,i=[...jt(e),...Ft(e)];for(let a of i)this.createProperty(a,e[a])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,a]of e)this.elementProperties.set(i,a)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let a=this._$Eu(e,i);a!==void 0&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let a of i)e.unshift(ke(a))}else t!==void 0&&e.push(ke(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return st(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(a!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:$e).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(t,e){let i=this.constructor,a=i._$Eh.get(t);if(a!==void 0&&this._$Em!==a){let o=i.getPropertyOptions(a),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:$e;this._$Em=a;let d=r.fromAttribute(e,o.type);this[a]=d??this._$Ej?.get(a)??d,this._$Em=null}}requestUpdate(t,e,i,a=!1,o){if(t!==void 0){let r=this.constructor;if(a===!1&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??ot)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:a,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),o!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),a===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[a,o]of i){let{wrapped:r}=o,d=this[a];r!==!0||this._$AL.has(a)||d===void 0||this.C(a,void 0,o,d)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[Y("elementProperties")]=new Map,E[Y("finalized")]=new Map,Vt?.({ReactiveElement:E}),(oe.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ee=globalThis,rt=s=>s,re=Ee.trustedTypes,lt=re?re.createPolicy("lit-html",{createHTML:s=>s}):void 0,xe="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,ze="?"+x,Ut=`<${ze}>`,D=document,X=()=>D.createComment(""),ee=s=>s===null||typeof s!="object"&&typeof s!="function",Me=Array.isArray,ht=s=>Me(s)||typeof s?.[Symbol.iterator]=="function",Ae=`[ 	
\f\r]`,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,ct=/>/g,N=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,pt=/"/g,gt=/^(?:script|style|textarea|title)$/i,Ce=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),p=Ce(1),M=Ce(2),mi=Ce(3),w=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),mt=new WeakMap,P=D.createTreeWalker(D,129);function ft(s,t){if(!Me(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return lt!==void 0?lt.createHTML(t):t}var _t=(s,t)=>{let e=s.length-1,i=[],a,o=t===2?"<svg>":t===3?"<math>":"",r=J;for(let d=0;d<e;d++){let l=s[d],n,c,u=-1,f=0;for(;f<l.length&&(r.lastIndex=f,c=r.exec(l),c!==null);)f=r.lastIndex,r===J?c[1]==="!--"?r=dt:c[1]!==void 0?r=ct:c[2]!==void 0?(gt.test(c[2])&&(a=RegExp("</"+c[2],"g")),r=N):c[3]!==void 0&&(r=N):r===N?c[0]===">"?(r=a??J,u=-1):c[1]===void 0?u=-2:(u=r.lastIndex-c[2].length,n=c[1],r=c[3]===void 0?N:c[3]==='"'?pt:ut):r===pt||r===ut?r=N:r===dt||r===ct?r=J:(r=N,a=void 0);let v=r===N&&s[d+1].startsWith("/>")?" ":"";o+=r===J?l+Ut:u>=0?(i.push(n),l.slice(0,u)+xe+l.slice(u)+x+v):l+x+(u===-2?d:v)}return[ft(s,o+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},te=class s{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let o=0,r=0,d=t.length-1,l=this.parts,[n,c]=_t(t,e);if(this.el=s.createElement(n,i),P.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(a=P.nextNode())!==null&&l.length<d;){if(a.nodeType===1){if(a.hasAttributes())for(let u of a.getAttributeNames())if(u.endsWith(xe)){let f=c[r++],v=a.getAttribute(u).split(x),b=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:b[2],strings:v,ctor:b[1]==="."?de:b[1]==="?"?ce:b[1]==="@"?ue:I}),a.removeAttribute(u)}else u.startsWith(x)&&(l.push({type:6,index:o}),a.removeAttribute(u));if(gt.test(a.tagName)){let u=a.textContent.split(x),f=u.length-1;if(f>0){a.textContent=re?re.emptyScript:"";for(let v=0;v<f;v++)a.append(u[v],X()),P.nextNode(),l.push({type:2,index:++o});a.append(u[f],X())}}}else if(a.nodeType===8)if(a.data===ze)l.push({type:2,index:o});else{let u=-1;for(;(u=a.data.indexOf(x,u+1))!==-1;)l.push({type:7,index:o}),u+=x.length-1}o++}}static createElement(t,e){let i=D.createElement("template");return i.innerHTML=t,i}};function O(s,t,e=s,i){if(t===w)return t;let a=i!==void 0?e._$Co?.[i]:e._$Cl,o=ee(t)?void 0:t._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),o===void 0?a=void 0:(a=new o(s),a._$AT(s,e,i)),i!==void 0?(e._$Co??=[])[i]=a:e._$Cl=a),a!==void 0&&(t=O(s,a._$AS(s,t.values),a,i)),t}var le=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,a=(t?.creationScope??D).importNode(e,!0);P.currentNode=a;let o=P.nextNode(),r=0,d=0,l=i[0];for(;l!==void 0;){if(r===l.index){let n;l.type===2?n=new V(o,o.nextSibling,this,t):l.type===1?n=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(n=new pe(o,this,t)),this._$AV.push(n),l=i[++d]}r!==l?.index&&(o=P.nextNode(),r++)}return P.currentNode=D,a}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},V=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,a){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),ee(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ht(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&ee(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=te.createElement(ft(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(e);else{let o=new le(a,this),r=o.u(this.options);o.p(e),this.T(r),this._$AH=o}}_$AC(t){let e=mt.get(t.strings);return e===void 0&&mt.set(t.strings,e=new te(t)),e}k(t){Me(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,a=0;for(let o of t)a===e.length?e.push(i=new s(this.O(X()),this.O(X()),this,this.options)):i=e[a],i._$AI(o),a++;a<e.length&&(this._$AR(i&&i._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=rt(t).nextSibling;rt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},I=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,a,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(t,e=this,i,a){let o=this.strings,r=!1;if(o===void 0)t=O(this,t,e,0),r=!ee(t)||t!==this._$AH&&t!==w,r&&(this._$AH=t);else{let d=t,l,n;for(t=o[0],l=0;l<o.length-1;l++)n=O(this,d[i+l],e,l),n===w&&(n=this._$AH[l]),r||=!ee(n)||n!==this._$AH[l],n===m?t=m:t!==m&&(t+=(n??"")+o[l+1]),this._$AH[l]=n}r&&!a&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},de=class extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}},ce=class extends I{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}},ue=class extends I{constructor(t,e,i,a,o){super(t,e,i,a,o),this.type=5}_$AI(t,e=this){if((t=O(this,t,e,0)??m)===w)return;let i=this._$AH,a=t===m&&i!==m||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==m&&(i===m||a);a&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},pe=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}},vt={M:xe,P:x,A:ze,C:1,L:_t,R:le,D:ht,V:O,I:V,H:I,N:ce,U:ue,B:de,F:pe},qt=Ee.litHtmlPolyfillSupport;qt?.(te,V),(Ee.litHtmlVersions??=[]).push("3.3.3");var yt=(s,t,e)=>{let i=e?.renderBefore??t,a=i._$litPart$;if(a===void 0){let o=e?.renderBefore??null;i._$litPart$=a=new V(t.insertBefore(X(),o),o,void 0,e??{})}return a._$AI(s),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var He=globalThis,k=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=yt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}};k._$litElement$=!0,k.finalized=!0,He.litElementHydrateSupport?.({LitElement:k});var Gt=He.litElementPolyfillSupport;Gt?.({LitElement:k});(He.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Te={generatedOn:"2026-11-19",sources:{z2m:{repository:"Koenkk/zigbee-herdsman-converters",branch:"master",commit:"6cc34894cfcc289f67c0ac7c3ccf42e14be7f8dc",url:"https://github.com/Koenkk/zigbee-herdsman-converters/tree/6cc34894cfcc289f67c0ac7c3ccf42e14be7f8dc"},zha:{repository:"zigpy/zha-device-handlers",branch:"dev",commit:"b07fa76876e081d48744968f9fb806e7f1fee0ee",url:"https://github.com/zigpy/zha-device-handlers/tree/b07fa76876e081d48744968f9fb806e7f1fee0ee"}},models:[{id:"HS1MIS-3.0",description:"Smart occupancy sensor",kind:"motion",aliases:["PIRILLSensor-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS1CA-M",description:"Smart carbon monoxide alarm",kind:"co",aliases:["CO_V15","CO_YDLV10","CO_V16","1ccaa94c49a84abaa9e38687913947ba","CO_CTPG"],zha:"quirk",zhaSources:["smoke.py"]},{id:"HS-720ES-ZB",description:"Smart carbon monoxide alarm",kind:"co",aliases:["JM720ES-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS3MS",description:"Smart motion sensor",kind:"motion",aliases:["PIRSensor-N","PIRSensor-N-3.0","PIRSensor-EM","PIRSensor-EF-3.0","PIR_TPV13"],zha:"standard",zhaSources:[]},{id:"HS2SK",description:"Smart metering plug",kind:"plug",aliases:["SmartPlug","SmartPlug-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2SK_nxp",description:"Smart metering plug",kind:"plug",aliases:["SmartPlug-N"],zha:"standard",zhaSources:[]},{id:"HS1SA-E",description:"Smart smoke alarm",kind:"smoke",aliases:["SMOK_V16","SMOK_V15","b5db59bfd81e4f1f95dc57fdbba17931","98293058552c49f38ad0748541ee96ba","SMOK_YDLV10","FB56-SMF02HM1.4","SmokeSensor-N-3.0","319fa36e7384414a9ea62cba8f6e7626","c3442b4ac59b4ba1a83119d938f283ab","SmokeSensor-EF-3.0","SMOK_HV14","SMOK_YDLV10N"],zha:"quirk",zhaSources:["smoke.py"]},{id:"HS3SA/HS1SA",description:"Smart smoke alarm",kind:"smoke",aliases:["SmokeSensor-N","SmokeSensor-EM","HS3SA","HS1SA"],zha:"quirk",zhaSources:["smoke.py"]},{id:"HS2SA-EF-3.0",description:"Smart smoke alarm",kind:"smoke",aliases:[],zha:"standard",zhaSources:[]},{id:"HS3CG",description:"Combustible gas sensor",kind:"gas",aliases:["GASSensor-N","GASSensor-N-3.0","d90d7c61c44d468a8e906ca0841e0a0c"],zha:"standard",zhaSources:[]},{id:"HS1CG-M",description:"Combustible gas sensor",kind:"gas",aliases:["GASSensor-EN"],zha:"standard",zhaSources:[]},{id:"HS1CG_H",description:"Smart combustible gas sensor",kind:"gas",aliases:["HY0022"],zha:"standard",zhaSources:[]},{id:"HS1CG",description:"Smart combustible gas sensor",kind:"gas",aliases:["RH3070"],zha:"standard",zhaSources:[]},{id:"HS1CG_M",description:"Combustible gas sensor",kind:"gas",aliases:["GAS_V15"],zha:"standard",zhaSources:[]},{id:"HS3DS",description:"Door sensor",kind:"contact",aliases:["DoorSensor-N","DoorSensor-N-3.0"],zha:"standard",zhaSources:[]},{id:"HS8DS-EFA",description:"Door sensor",kind:"contact",aliases:["HS8DS-EF2-3.0"],zha:"standard",zhaSources:[]},{id:"D1-EFA",description:"Smart door sensor",kind:"contact",aliases:["D1-EF2-3.0"],zha:"standard",zhaSources:[]},{id:"D1-E",description:"Smart door sensor",kind:"contact",aliases:[],zha:"standard",zhaSources:[]},{id:"HS1DS",description:"Door sensor",kind:"contact",aliases:["DoorSensor-EM","DoorSensor-EF-3.0"],zha:"standard",zhaSources:[]},{id:"Heiman-M1",description:"Door sensor",kind:"contact",aliases:["DOOR_TPV13","DOOR_TPV12"],zha:"standard",zhaSources:[]},{id:"HS1WL/HS3WL",description:"Water leakage sensor",kind:"leak",aliases:["WaterSensor-N","WaterSensor-EM","WaterSensor-N-3.0","WaterSensor-EF-3.0","WATER_TPV13","TY0207","HS1WL","HS3WL"],zha:"standard",zhaSources:[]},{id:"HS2WL",description:"Water leakage sensor",kind:"leak",aliases:["WaterSensor2-EF-3.0"],zha:"standard",zhaSources:[]},{id:"L1-E",description:"Smart Water leakage sensor",kind:"leak",aliases:[],zha:"standard",zhaSources:[]},{id:"HS1RC-N",description:"Smart remote controller",kind:"remote",aliases:["RC-N"],zha:"standard",zhaSources:[]},{id:"HM1RC-2-E",description:"Smart remote controller",kind:"remote",aliases:["RC-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS1RC-EM",description:"Smart remote controller",kind:"remote",aliases:["RC-EM"],zha:"standard",zhaSources:[]},{id:"HS1CA-E",description:"Smart carbon monoxide alarm",kind:"co",aliases:["COSensor-EM","COSensor-N","COSensor-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2WD-E",description:"Smart siren",kind:"siren",aliases:["WarningDevice","WarningDevice-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS1HT",description:"Smart temperature & humidity Sensor",kind:"climate",aliases:["HT-EM","TH-EM","TH-T_V14"],zha:"standard",zhaSources:[]},{id:"HS1HT-N",description:"Smart temperature & humidity Sensor",kind:"climate",aliases:["HT-N","HT-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2ESK-E",description:"Smart in wall plug",kind:"plug",aliases:["E_Socket","E8331510SSZB_C1"],zha:"standard",zhaSources:[]},{id:"HS1EB/HS1EB-E",description:"Smart emergency button",kind:"remote",aliases:["SOS-EM","SOS-EF-3.0","HS1EB","HS1EB-E"],zha:"standard",zhaSources:[]},{id:"HS2SS",description:"Smart scene switch",kind:"remote",aliases:["SceneSwitch-EM-3.0","SceneSwitch-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2WDSC-E",description:"Remote dimmer and temperature control",kind:"remote",aliases:["TempDimmerSw-EM-3.0"],zha:"standard",zhaSources:[]},{id:"HS2WDSR-E",description:"Remote dimmer and color control",kind:"remote",aliases:["ColorDimmerSw-EM-3.0"],zha:"standard",zhaSources:[]},{id:"HS3HT",description:"Temperature & humidity sensor with display",kind:"climate",aliases:["HS3HT-EFA-3.0"],zha:"standard",zhaSources:[]},{id:"H1-E",description:"Smart Temperature & humidity sensor",kind:"climate",aliases:[],zha:"standard",zhaSources:[]},{id:"HS1CG-E",description:"Combustible gas sensor",kind:"gas",aliases:["GASSensor-EM","358e4e3e03c644709905034dae81433e"],zha:"standard",zhaSources:[]},{id:"HS1CG-E_3.0",description:"Combustible gas sensor",kind:"gas",aliases:["GASSensor-EFR-3.0","GASSensor-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS1VS-N",description:"Vibration sensor",kind:"vibration",aliases:["Vibration-N"],zha:"standard",zhaSources:[]},{id:"HS1VS-EF",description:"Vibration sensor",kind:"vibration",aliases:["Vibration-EF_3.0","Vibration-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2AQ-EM",description:"Air quality monitor",kind:"air",aliases:["HS2AQ-EM-3.0"],zha:"standard",zhaSources:[]},{id:"HS1IRC",description:"Smart IR Control",kind:"remote",aliases:["IRControl-EM"],zha:"standard",zhaSources:[]},{id:"HS2IRC",description:"Smart IR Control",kind:"remote",aliases:["IRControl2-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2SW1A/HS2SW1A-N",description:"Smart switch - 1 gang with neutral wire",kind:"switch",aliases:["HS2SW1L-EF-3.0","HS2SW1L-EFR-3.0","HS2SW1A-N","HS6SW1A-W-EF-3.0","HS5SW1A-W-EF-3.0","HS2SW1A-EF-3.0","HS2SW1A-EFR-3.0","HS2SW1A"],zha:"standard",zhaSources:[]},{id:"HS2SW2A/HS2SW2A-N",description:"Smart switch - 2 gang with neutral wire",kind:"switch",aliases:["HS2SW2L-EF-3.0","HS2SW2L-EFR-3.0","HS2SW2A-N","HS6SW2A-W-EF-3.0","HS5SW2A-W-EF-3.0","RT0102","HS2SW2A-EF-3.0","HS2SW2A-EFR-3.0","HS2SW2A"],zha:"standard",zhaSources:[]},{id:"HS2SW3A/HS2SW3A-N",description:"Smart switch - 3 gang with neutral wire",kind:"switch",aliases:["HS2SW3L-EF-3.0","HS2SW3L-EFR-3.0","HS2SW3A-N","HS6SW3A-W-EF-3.0","HS5SW3A-W-EF-3.0","HS2SW3A-EF-3.0","HS2SW3A-EFR-3.0","HS2SW3A"],zha:"standard",zhaSources:[]},{id:"HS1RM-E",description:"Smart relay module - 2 gang with neutral wire",kind:"switch",aliases:["RelayModule-EF-3.0"],zha:"quirk",zhaSources:["hs1rm_e.py"]},{id:"HS2WDS",description:"LED 9W CCT E27",kind:"light",aliases:["TemperLight"],zha:"standard",zhaSources:[]},{id:"HS1RGB",description:"Bulb E26/E27, RGB+WW 2700K, globe, opal, 400lm",kind:"light",aliases:["ColorLight"],zha:"standard",zhaSources:[]},{id:"HS2CM-N-DC",description:"Gear window shade motor",kind:"cover",aliases:["CurtainMo-EF-3.0","CurtainMo-EF"],zha:"standard",zhaSources:[]},{id:"HS1MS-M",description:"Smart motion sensor",kind:"motion",aliases:["PIR_TPV16"],zha:"standard",zhaSources:[]},{id:"HS1MS-EF",description:"Smart motion sensor",kind:"motion",aliases:["TY0202"],zha:"standard",zhaSources:[]},{id:"HS9MS-E",description:"Smart motion sensor",kind:"motion",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2DB",description:"Smart doorbell button",kind:"remote",aliases:["DoorBell-EM"],zha:"standard",zhaSources:[]},{id:"HS2SS-E_V03",description:"Smart doorbell button",kind:"remote",aliases:["DoorBell-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS3AQ",description:"Smart air quality monitor",kind:"air",aliases:["HS3AQ-EFA-3.0"],zha:"standard",zhaSources:[]},{id:"HS2RNL",description:"Smart repeater & night light",kind:"light",aliases:["RouteLight-EF-3.0"],zha:"standard",zhaSources:[]},{id:"PIR_TPV12",description:"Motion sensor",kind:"motion",aliases:[],zha:"standard",zhaSources:[]},{id:"HS15A-M",description:"Smart smoke alarm relabeled for zipato",kind:"smoke",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2FD-EF1-3.0",description:"Fall Detection Sensor",kind:"fall",aliases:[],zha:"standard",zhaSources:[]},{id:"HS8OS-EF1-3.0",description:"Human presence sensor",kind:"motion",aliases:[],zha:"standard",zhaSources:[]},{id:"HS8MIS-EF1-3.0",description:"PIR sensor",kind:"motion",aliases:[],zha:"standard",zhaSources:[]},{id:"HS8MLS-EF1-3.0",description:"PIR sensor with night light",kind:"motion",aliases:["HS8MIS-86-EF1-3.0"],zha:"standard",zhaSources:[]},{id:"HS2AQ-EF-3.0",description:"Air quality monitor",kind:"air",aliases:[],zha:"standard",zhaSources:[]},{id:"HS1SA-E-PLUS",description:"Smart smoke alarm",kind:"smoke",aliases:["HS1SA-EF-3.0"],zha:"quirk",zhaSources:["hs1sa_efa.py"]},{id:"S1-TL",description:"Smart smoke alarm",kind:"smoke",aliases:[],zha:"quirk",zhaSources:["s1_tl.py"]},{id:"S1-M",description:"Smart smoke alarm",kind:"smoke",aliases:[],zha:"standard",zhaSources:[]},{id:"S1-TL-AI",description:"Smart smoke alarm",kind:"smoke",aliases:["SC6-EF2-AI"],zha:"standard",zhaSources:[]},{id:"S2-E",description:"Smart smoke alarm",kind:"smoke",aliases:[],zha:"standard",zhaSources:[]},{id:"HM-722ESY-E Plus",description:"Smart carbon monoxide alarm",kind:"co",aliases:["HM-722ESY-E-PLUS"],zha:"quirk",zhaSources:["hm_722_esy_e_plus.py"]},{id:"HS1CA-E-PLUS",description:"Smart carbon monoxide alarm",kind:"co",aliases:["HS1CA-E PLUS"],zha:"quirk",zhaSources:["hs1ca_e_plus.py"]},{id:"C1-M",description:"Smart carbon monoxide alarm",kind:"co",aliases:[],zha:"standard",zhaSources:[]},{id:"HS1SA-E Lover",description:"Smart smoke alarm",kind:"smoke",aliases:["Smokesensor-EF2-3.0","SmokeSensor-EF2-3.0"],zha:"quirk",zhaSources:["hs1sa_e_lover.py"]},{id:"HM-636THV-AC-M",description:"Smart smoke&CO alarm",kind:"smoke_co",aliases:[],zha:"quirk",zhaSources:["hm_636thv_ac_m.py"]},{id:"SC6",description:"Smart smoke&CO alarm",kind:"smoke_co",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2WD-EF",description:"Smart siren",kind:"siren",aliases:["WarningDevice-EFA1-3.0"],zha:"standard",zhaSources:[]},{id:"M1P-E",description:"Smart occupancy sensor",kind:"motion",aliases:["M1-PE"],zha:"standard",zhaSources:[]},{id:"HM-5HA-E",description:"Smart heat alarm",kind:"heat",aliases:["HM-5HA-EF-3.0"],zha:"standard",zhaSources:[]},{id:"HS2VTD",description:"Smart 4 in 1 door sensor",kind:"contact",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2TD",description:"Smart 3 in 1 door sensor",kind:"contact",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2HT",description:"Smart temperature & humidity sensor",kind:"climate",aliases:[],zha:"standard",zhaSources:[]},{id:"HS2NLV",description:"Smart notifier",kind:"light",aliases:[],zha:"standard",zhaSources:[]}]};var j=Te.models,zi=Te.generatedOn,Ne=s=>s.toLowerCase().replace(/[\s-]+/g,""),Zt=new Map(j.map(s=>[Ne(s.id),s])),Re=new Map;for(let s of j)for(let t of s.aliases){let e=Ne(t);Re.has(e)||Re.set(e,s)}function L(s){if(!s||s==="auto")return;let t=s.match(/\(([^()]+)\)\s*$/)?.[1],e=Ne(t??s);return Zt.get(e)??Re.get(e)}function U(s){let t=L(s.model_id)??L(s.model);if(t&&!(/^TS\d+$/i.test(s.model??"")&&!/heiman/i.test(s.manufacturer??"")))return t}function bt(s){return/heiman/i.test(s.manufacturer??"")&&!!U(s)}var me={smoke:"smoke",co:"co",smoke_co:"smoke",heat:"temperature",gas:"gas",leak:"water",contact:"door",motion:"motion",fall:"motion",vibration:"motion",climate:"temperature",air:"air",siren:"bell",plug:"power",switch:"power",light:"light",cover:"cover",remote:"remote"};var he=new WeakMap;function Pe(s){if(s.devices&&s.entities&&Object.keys(s.devices).length>0)return{devices:Object.values(s.devices),entities:Object.values(s.entities)}}async function St(s,t=!1){let e=Pe(s);if(e)return e;if(!s.callWS)return{devices:[],entities:[]};let i=s.connection??s;t&&he.delete(i);let a=he.get(i);return a||(a=Promise.all([s.callWS({type:"config/device_registry/list"}),s.callWS({type:"config/entity_registry/list"})]).then(([o,r])=>({devices:o,entities:r})),he.set(i,a),a.catch(()=>he.delete(i))),a}var y=s=>s.split(".")[0],wt=["switch","light","siren","cover","fan"];function kt(s,t,e){let i=y(s.entity_id),a=t.states[s.entity_id],o=String(a?.attributes.device_class??""),r=l=>[s.translation_key??"",s.entity_id.split(".")[1]].some(n=>l.test(n.toLowerCase()));if(wt.includes(i))return s.entity_category||r(/(?:^|_)(?:mute|temporary_mute|remote_mute|heartbeat|indicator|child_lock|radar_switch|selftest)(?:_|$)/)?void 0:!e||["plug","switch","light","cover","siren","motion"].includes(e)?"control":void 0;if(i==="event")return"action";if(!["binary_sensor","sensor"].includes(i))return;if(i==="binary_sensor")return o==="battery"||r(/(?:^|_)(?:battery_low|low_battery)(?:_|$)/)?"battery_low":o==="tamper"||r(/(?:^|_)tamper(?:_|$)/)?"tamper":o==="problem"||r(/(?:^|_)(?:fault|fault_state|sensor_fault_state)(?:_|$)/)?"fault":r(/(?:^|_)(?:test|self_test|self_check|selfcheck)(?:_|$)/)?"test":r(/(?:^|_)(?:muted|mute_state|sensor_mute_state)(?:_|$)/)?"muted":o==="smoke"?"smoke":o==="carbon_monoxide"?"co":o==="gas"?e==="co"?"co":"gas":o==="moisture"?"leak":["door","window","opening","garage_door"].includes(o)?"contact":["motion","occupancy","presence"].includes(o)?"motion":o==="vibration"?"vibration":o==="heat"||!o&&e==="heat"&&r(/(?:^|_)ias_zone(?:_\d+)?$/)?"heat":r(/(?:^|_)(?:smoke|smoke_alarm)(?:_\d+)?$/)?"smoke":r(/(?:^|_)(?:carbon_monoxide|co_alarm|co)(?:_\d+)?$/)?"co":r(/(?:^|_)(?:gas|gas_alarm)(?:_\d+)?$/)?"gas":r(/(?:^|_)(?:water_leak|water_leakage|moisture)(?:_\d+)?$/)?"leak":r(/(?:^|_)(?:contact|opening)(?:_\d+)?$/)?"contact":r(/(?:^|_)(?:occupancy|motion|presence)(?:_\d+)?$/)?"motion":r(/(?:^|_)(?:fall|fall_down|fall_detected)(?:_\d+)?$/)?"fall":r(/(?:^|_)vibration(?:_\d+)?$/)?"vibration":r(/(?:^|_)(?:heat|heat_alarm)(?:_\d+)?$/)?"heat":void 0;let d={temperature:"temperature",humidity:"humidity",battery:"battery",signal_strength:"signal",power:"power",energy:"energy",voltage:"voltage",current:"current",illuminance:"illuminance",carbon_dioxide:"co2",volatile_organic_compounds:"voc",volatile_organic_compounds_parts:"voc",pm25:"pm25"};if(d[o])return d[o];if(r(/(?:^|_)(?:fault_state|sensor_fault_state)(?:_\d+)?$/))return"fault";if(r(/(?:^|_)(?:linkquality|link_quality|rssi|lqi|signal_strength)(?:_\d+)?$/))return"signal";if(r(/(?:^|_)(?:action|last_action)(?:_\d+)?$/))return"action";if(r(/(?:^|_)(?:battery|battery_percentage)(?:_\d+)?$/))return"battery";if(r(/(?:^|_)(?:temperature|device_temperature|device_intenal_temperature)(?:_\d+)?$/))return"temperature";if(r(/(?:^|_)humidity(?:_\d+)?$/))return"humidity";if(r(/(?:^|_)(?:muted|mute_state)(?:_\d+)?$/))return"muted"}function Qt(s,t,e,i={}){let a={};for(let o of[...s].sort((r,d)=>r.entity_id.localeCompare(d.entity_id))){if(o.disabled_by||o.hidden_by||o.hidden)continue;let r=kt(o,t,e);r&&(a[r]??=[]).push(o.entity_id)}for(let[o,r]of Object.entries(i))r&&(a[o]=[r]);return a}function q(s,t,e){let i=L(s.model),a=s.entity?e.entities.find(v=>v.entity_id===s.entity):void 0,o=s.device_id||a?.device_id,r=e.devices.filter(v=>{if(v.disabled_by)return!1;let b=U(v);return v.parent_device_id&&e.devices.some(g=>g.id===v.parent_device_id&&U(g)?.id===b?.id)?!1:i?b?.id===i.id:bt(v)}),d=o?e.devices.find(v=>v.id===o):r.length===1?r[0]:void 0,l;o&&!d?l="missing_device":d&&i&&U(d)?.id!==i.id?(l="model_mismatch",d=void 0):!d&&r.length>1?l="choose_device":d||(l="no_device");let n=i??(d?U(d):void 0),c=d?Yt(e,d.id):new Set,u=d?e.entities.filter(v=>v.device_id&&c.has(v.device_id)):[];s.entity&&!u.some(v=>v.entity_id===s.entity)&&u.push(a??{entity_id:s.entity});let f=Qt(u,t,n?.kind,s.entities);if(s.entity&&!Object.values(f).some(v=>v?.includes(s.entity))&&y(s.entity)==="binary_sensor"&&n){let b={smoke_co:"smoke",climate:void 0,air:void 0}[n.kind]??(["smoke","co","heat","gas","leak","contact","motion","fall","vibration"].includes(n.kind)?n.kind:void 0);b&&!s.entities?.[b]&&(f[b]=[s.entity])}return l==="missing_device"||l==="model_mismatch"?{candidates:r,preset:n,entities:[],bindings:{},reason:l}:(Object.keys(f).length>0&&!d&&(l=void 0),{device:d,preset:n,candidates:r,entities:u,bindings:f,reason:l})}function $t(s,t,e){return s.filter(i=>!i.disabled_by&&!i.hidden_by&&!i.hidden&&t.states[i.entity_id]&&(["button","number","select","text","update","remote"].includes(y(i.entity_id))||i.entity_category==="config"||wt.includes(y(i.entity_id))&&kt(i,t,e)!=="control"))}function Yt(s,t){let e=new Set([t]),i=0;for(;e.size!==i;){i=e.size;for(let a of s.devices)a.parent_device_id&&e.has(a.parent_device_id)&&e.add(a.id)}return e}var ie={language_name:"English",follow_system:"Follow Home Assistant",home:"Home",fire:"Fire safety",minimal:"Minimal",auto:"Automatic",model:"Product model",device:"Device",style:"Style",name:"Card name",language:"Language",search:"Search models or Zigbee aliases",choose:"Choose a device",choose_device:"Several devices match. Select one in the card editor.",no_device:"Select a model and a paired device in the card editor.",missing_device:"This device is no longer in Home Assistant.",model_mismatch:"The selected device does not match this model. Select its model or use Automatic.",no_entities:"No matching entities. Check the device or assign entities in the editor.",unknown:"Unknown",unavailable:"Unavailable",normal:"Normal",alarm:"Alarm",warning:"Attention",testing:"Self-test running",active:"Active",inactive:"Inactive",open:"Open",closed:"Closed",detected:"Detected",clear:"Clear",on:"On",off:"Off",device_control:"Device control",details:"Details",more_info:"More information",battery:"Battery",battery_low:"Low battery",signal:"Signal",temperature:"Temperature",humidity:"Humidity",smoke:"Smoke",co:"Carbon monoxide",smoke_co:"Smoke & CO",heat:"Heat",gas:"Combustible gas",leak:"Water leak",contact:"Door / window",motion:"Motion / presence",fall:"Fall",vibration:"Vibration",climate:"Temperature & humidity",air:"Air quality",siren:"Siren",plug:"Smart plug",switch:"Switch / relay",light:"Lighting",cover:"Curtain",remote:"Remote / button",power:"Power",energy:"Energy",voltage:"Voltage",current:"Current",illuminance:"Illuminance",co2:"CO\u2082",voc:"VOC",pm25:"PM2.5",action:"Last action",control:"Main control",tamper:"Tamper",fault:"Fault",test:"Self-test",muted:"Muted",updated:"Updated",show_battery:"Show battery",show_signal:"Show signal",show_details:"Show details",show_controls:"Show controls",advanced:"Entity assignments",assignments_help:"Entities are matched within this device. Override only when needed. Empty fields use automatic matching.",device_help:"A single matching device is selected automatically. Choose the instance when you have several.",registry_error:"Unable to read the device registry. Retry or assign entities below.",retry:"Retry",loading:"Loading devices\u2026",self_test:"Self-test",mute:"Hush",turn_on:"Turn on",turn_off:"Turn off",stop:"Stop",close:"Close",service_error:"The command failed. Please try again.",not_reported:"Not reported",connected:"Connected",controls_help:"Open the Home Assistant dialog to adjust this entity.",no_control:"This device has no exposed controls.",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"Paired HEIMAN device",no_matches:"No matching models",tracking:"Monitoring",partial:"Some readings unavailable",config_entity:"Primary entity (optional)",diagnostic:"Diagnostics",unavailable_readings:"Unavailable readings",empty:"No paired HEIMAN devices found",preview:"Preview",remote_self_test:"Remote self-test",temporary_mute:"Temporary hush",indicator:"Status indicator",siren_on:"Start siren",siren_off:"Stop siren",siren_options:"Siren settings",tone:"Sound profile",duration:"Duration",volume:"Volume",seconds:"s",device_default:"Device default",apply:"Apply",execute:"Run",sending:"Sending\u2026",command_sent:"Command sent. Waiting for the device to report its state.",invalid_value:"Enter a value within the device's supported range and step.",strobe:"Strobe",strobe_level:"Strobe intensity",temperature_offset:"Temperature offset",humidity_offset:"Humidity offset",sensitivity:"Sensitivity",identify:"Identify device",smoke_sound:"Smoke sound profile",co_sound:"CO sound profile",fire_sound:"Fire",burglar:"Burglar",emergency:"Emergency",police_panic:"Police panic",fire_panic:"Fire panic",emergency_panic:"Emergency panic",low:"Low",medium:"Medium",high:"High",very_high:"Very high"};var De={language_name:"\u7B80\u4F53\u4E2D\u6587",follow_system:"\u8DDF\u968F Home Assistant",home:"\u5BB6\u5C45\u98CE\u683C",fire:"\u6D88\u9632\u98CE\u683C",minimal:"\u7B80\u7EA6\u98CE\u683C",auto:"\u81EA\u52A8\u8BC6\u522B",model:"\u4EA7\u54C1\u578B\u53F7",device:"\u8BBE\u5907",style:"\u5361\u7247\u6837\u5F0F",name:"\u5361\u7247\u540D\u79F0",language:"\u8BED\u8A00",search:"\u641C\u7D22\u578B\u53F7\u6216 Zigbee \u578B\u53F7\u522B\u540D",choose:"\u8BF7\u9009\u62E9\u8BBE\u5907",choose_device:"\u5339\u914D\u5230\u591A\u53F0\u8BBE\u5907\uFF0C\u8BF7\u5728\u5361\u7247\u7F16\u8F91\u5668\u4E2D\u9009\u62E9\u5177\u4F53\u8BBE\u5907\u3002",no_device:"\u8BF7\u5728\u5361\u7247\u7F16\u8F91\u5668\u4E2D\u9009\u62E9\u578B\u53F7\u548C\u5DF2\u914D\u5BF9\u7684\u8BBE\u5907\u3002",missing_device:"Home Assistant \u4E2D\u5DF2\u627E\u4E0D\u5230\u6B64\u8BBE\u5907\u3002",model_mismatch:"\u6240\u9009\u8BBE\u5907\u4E0E\u578B\u53F7\u4E0D\u7B26\uFF0C\u8BF7\u9009\u62E9\u5BF9\u5E94\u578B\u53F7\u6216\u81EA\u52A8\u8BC6\u522B\u3002",no_entities:"\u672A\u5339\u914D\u5230\u5B9E\u4F53\uFF0C\u8BF7\u68C0\u67E5\u8BBE\u5907\u6216\u5728\u7F16\u8F91\u5668\u4E2D\u6307\u5B9A\u5B9E\u4F53\u3002",unknown:"\u672A\u77E5",unavailable:"\u4E0D\u53EF\u7528",normal:"\u6B63\u5E38",alarm:"\u62A5\u8B66",warning:"\u9700\u8981\u5173\u6CE8",testing:"\u6B63\u5728\u81EA\u68C0",active:"\u5DF2\u89E6\u53D1",inactive:"\u672A\u89E6\u53D1",open:"\u5DF2\u6253\u5F00",closed:"\u5DF2\u5173\u95ED",detected:"\u68C0\u6D4B\u5230\u6D3B\u52A8",clear:"\u672A\u68C0\u6D4B\u5230",on:"\u5DF2\u5F00\u542F",off:"\u5DF2\u5173\u95ED",device_control:"\u8BBE\u5907\u63A7\u5236",details:"\u8BE6\u7EC6\u4FE1\u606F",more_info:"\u66F4\u591A\u4FE1\u606F",battery:"\u7535\u6C60\u7535\u91CF",battery_low:"\u4F4E\u7535\u91CF",signal:"\u4FE1\u53F7",temperature:"\u6E29\u5EA6",humidity:"\u6E7F\u5EA6",smoke:"\u70DF\u96FE",co:"\u4E00\u6C27\u5316\u78B3",smoke_co:"\u70DF\u96FE\u4E0E\u4E00\u6C27\u5316\u78B3",heat:"\u9AD8\u6E29",gas:"\u53EF\u71C3\u6C14\u4F53",leak:"\u6F0F\u6C34",contact:"\u95E8\u7A97",motion:"\u4EBA\u4F53\u6D3B\u52A8",fall:"\u8DCC\u5012",vibration:"\u632F\u52A8",climate:"\u6E29\u6E7F\u5EA6",air:"\u7A7A\u6C14\u8D28\u91CF",siren:"\u58F0\u5149\u62A5\u8B66\u5668",plug:"\u667A\u80FD\u63D2\u5EA7",switch:"\u5F00\u5173\u4E0E\u7EE7\u7535\u5668",light:"\u7167\u660E",cover:"\u7A97\u5E18",remote:"\u9065\u63A7\u5668\u4E0E\u6309\u94AE",power:"\u529F\u7387",energy:"\u7528\u7535\u91CF",voltage:"\u7535\u538B",current:"\u7535\u6D41",illuminance:"\u7167\u5EA6",co2:"\u4E8C\u6C27\u5316\u78B3",voc:"\u6325\u53D1\u6027\u6709\u673A\u7269",pm25:"PM2.5",action:"\u6700\u8FD1\u64CD\u4F5C",control:"\u4E3B\u63A7\u5236\u5B9E\u4F53",tamper:"\u9632\u62C6",fault:"\u6545\u969C",test:"\u81EA\u68C0",muted:"\u5DF2\u6D88\u97F3",updated:"\u66F4\u65B0\u65F6\u95F4",show_battery:"\u663E\u793A\u7535\u91CF",show_signal:"\u663E\u793A\u4FE1\u53F7",show_details:"\u663E\u793A\u8BE6\u7EC6\u4FE1\u606F",show_controls:"\u663E\u793A\u63A7\u5236\u6309\u94AE",advanced:"\u5B9E\u4F53\u5339\u914D\u8BBE\u7F6E",assignments_help:"\u81EA\u52A8\u5339\u914D\u6B64\u8BBE\u5907\u7684\u5B9E\u4F53\u3002\u5339\u914D\u6709\u8BEF\u65F6\u53EF\u624B\u52A8\u6307\u5B9A\uFF0C\u7559\u7A7A\u5219\u81EA\u52A8\u5339\u914D\u3002",device_help:"\u53EA\u6709\u4E00\u53F0\u5339\u914D\u8BBE\u5907\u65F6\u81EA\u52A8\u9009\u62E9\uFF1B\u6709\u591A\u53F0\u65F6\u8BF7\u9009\u62E9\u5177\u4F53\u8BBE\u5907\u3002",registry_error:"\u65E0\u6CD5\u8BFB\u53D6\u8BBE\u5907\u5217\u8868\uFF0C\u8BF7\u91CD\u8BD5\u6216\u5728\u4E0B\u65B9\u624B\u52A8\u6307\u5B9A\u5B9E\u4F53\u3002",retry:"\u91CD\u8BD5",loading:"\u6B63\u5728\u52A0\u8F7D\u8BBE\u5907\u2026",self_test:"\u81EA\u68C0",mute:"\u6D88\u97F3",turn_on:"\u5F00\u542F",turn_off:"\u5173\u95ED",stop:"\u505C\u6B62",close:"\u5173\u95ED",service_error:"\u6307\u4EE4\u6267\u884C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",not_reported:"\u5C1A\u672A\u4E0A\u62A5",connected:"\u5DF2\u8FDE\u63A5",controls_help:"\u6253\u5F00 Home Assistant \u5BF9\u8BDD\u6846\u4EE5\u8C03\u6574\u6B64\u5B9E\u4F53\u3002",no_control:"\u6B64\u8BBE\u5907\u6CA1\u6709\u53EF\u7528\u7684\u63A7\u5236\u5B9E\u4F53\u3002",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"\u5DF2\u914D\u5BF9\u7684 HEIMAN \u8BBE\u5907",no_matches:"\u6CA1\u6709\u5339\u914D\u7684\u578B\u53F7",tracking:"\u76D1\u6D4B\u4E2D",partial:"\u90E8\u5206\u8BFB\u6570\u4E0D\u53EF\u7528",config_entity:"\u4E3B\u5B9E\u4F53\uFF08\u53EF\u9009\uFF09",diagnostic:"\u8BCA\u65AD\u4FE1\u606F",unavailable_readings:"\u4E0D\u53EF\u7528\u7684\u8BFB\u6570",empty:"\u5C1A\u672A\u627E\u5230\u5DF2\u914D\u5BF9\u7684 HEIMAN \u8BBE\u5907",preview:"\u9884\u89C8",remote_self_test:"\u8FDC\u7A0B\u81EA\u68C0",temporary_mute:"\u4E34\u65F6\u6D88\u97F3",indicator:"\u72B6\u6001\u6307\u793A\u706F",siren_on:"\u5F00\u542F\u8B66\u62A5",siren_off:"\u505C\u6B62\u8B66\u62A5",siren_options:"\u8B66\u97F3\u8BBE\u7F6E",tone:"\u8B66\u97F3\u6A21\u5F0F",duration:"\u6301\u7EED\u65F6\u95F4",volume:"\u97F3\u91CF",seconds:"\u79D2",device_default:"\u8BBE\u5907\u9ED8\u8BA4",apply:"\u5E94\u7528",execute:"\u6267\u884C",sending:"\u6B63\u5728\u53D1\u9001\u2026",command_sent:"\u6307\u4EE4\u5DF2\u53D1\u9001\uFF0C\u7B49\u5F85\u8BBE\u5907\u4E0A\u62A5\u72B6\u6001\u3002",invalid_value:"\u8BF7\u8F93\u5165\u8BBE\u5907\u5141\u8BB8\u8303\u56F4\u548C\u6B65\u957F\u5185\u7684\u6570\u503C\u3002",strobe:"\u95EA\u5149",strobe_level:"\u95EA\u5149\u5F3A\u5EA6",temperature_offset:"\u6E29\u5EA6\u6821\u51C6",humidity_offset:"\u6E7F\u5EA6\u6821\u51C6",sensitivity:"\u7075\u654F\u5EA6",identify:"\u8BC6\u522B\u8BBE\u5907",smoke_sound:"\u70DF\u96FE\u8B66\u97F3",co_sound:"CO \u8B66\u97F3",fire_sound:"\u706B\u8B66",burglar:"\u9632\u76D7\u8B66\u97F3",emergency:"\u7D27\u6025\u8B66\u97F3",police_panic:"\u8B66\u5BDF\u7D27\u6025\u8B66\u97F3",fire_panic:"\u706B\u707E\u7D27\u6025\u8B66\u97F3",emergency_panic:"\u7D27\u6025\u6C42\u52A9\u8B66\u97F3",low:"\u4F4E",medium:"\u4E2D",high:"\u9AD8",very_high:"\u5F88\u9AD8"};var Oe={language_name:"Deutsch",follow_system:"Home Assistant folgen",home:"Wohnen",fire:"Brandschutz",minimal:"Schlicht",auto:"Automatisch",model:"Produktmodell",device:"Ger\xE4t",style:"Darstellung",name:"Kartenname",language:"Sprache",search:"Modelle oder Zigbee-Modellnamen suchen",choose:"Ger\xE4t ausw\xE4hlen",choose_device:"Mehrere Ger\xE4te passen. W\xE4hlen Sie eines im Karteneditor aus.",no_device:"W\xE4hlen Sie im Karteneditor ein Modell und ein gekoppeltes Ger\xE4t aus.",missing_device:"Dieses Ger\xE4t ist nicht mehr in Home Assistant vorhanden.",model_mismatch:"Das gew\xE4hlte Ger\xE4t passt nicht zum Modell. W\xE4hlen Sie das richtige Modell oder Automatisch.",no_entities:"Keine passenden Entit\xE4ten. Pr\xFCfen Sie das Ger\xE4t oder weisen Sie Entit\xE4ten im Editor zu.",unknown:"Unbekannt",unavailable:"Nicht verf\xFCgbar",normal:"Normal",alarm:"Alarm",warning:"Bitte pr\xFCfen",testing:"Selbsttest l\xE4uft",active:"Aktiv",inactive:"Inaktiv",open:"Offen",closed:"Geschlossen",detected:"Erkannt",clear:"Nicht erkannt",on:"Ein",off:"Aus",device_control:"Ger\xE4testeuerung",details:"Details",more_info:"Weitere Informationen",battery:"Batterie",battery_low:"Batterie schwach",signal:"Signal",temperature:"Temperatur",humidity:"Luftfeuchtigkeit",smoke:"Rauch",co:"Kohlenmonoxid",smoke_co:"Rauch und CO",heat:"\xDCberhitzung",gas:"Brennbares Gas",leak:"Wasserleck",contact:"T\xFCr / Fenster",motion:"Bewegung / Anwesenheit",fall:"Sturz",vibration:"Vibration",climate:"Temperatur und Feuchtigkeit",air:"Luftqualit\xE4t",siren:"Sirene",plug:"Smarte Steckdose",switch:"Schalter / Relais",light:"Beleuchtung",cover:"Vorhang",remote:"Fernbedienung / Taster",power:"Leistung",energy:"Energie",voltage:"Spannung",current:"Stromst\xE4rke",illuminance:"Beleuchtungsst\xE4rke",co2:"CO\u2082",voc:"VOC",pm25:"PM2.5",action:"Letzte Aktion",control:"Hauptsteuerung",tamper:"Manipulation",fault:"St\xF6rung",test:"Selbsttest",muted:"Stummgeschaltet",updated:"Aktualisiert",show_battery:"Batterie anzeigen",show_signal:"Signal anzeigen",show_details:"Details anzeigen",show_controls:"Bedienelemente anzeigen",advanced:"Entit\xE4tszuordnung",assignments_help:"Entit\xE4ten werden innerhalb dieses Ger\xE4ts zugeordnet. Nur bei Bedarf \xFCberschreiben. Leere Felder verwenden die automatische Zuordnung.",device_help:"Ein einzelnes passendes Ger\xE4t wird automatisch ausgew\xE4hlt. W\xE4hlen Sie bei mehreren Ger\xE4ten die gew\xFCnschte Instanz.",registry_error:"Das Ger\xE4teverzeichnis konnte nicht gelesen werden. Erneut versuchen oder unten Entit\xE4ten zuweisen.",retry:"Erneut versuchen",loading:"Ger\xE4te werden geladen\u2026",self_test:"Selbsttest",mute:"Stummschalten",turn_on:"Einschalten",turn_off:"Ausschalten",stop:"Stopp",close:"Schlie\xDFen",service_error:"Der Befehl ist fehlgeschlagen. Bitte erneut versuchen.",not_reported:"Noch nicht gemeldet",connected:"Verbunden",controls_help:"\xD6ffnen Sie den Home-Assistant-Dialog, um diese Entit\xE4t einzustellen.",no_control:"Dieses Ger\xE4t stellt keine Bedienelemente bereit.",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"Gekoppeltes HEIMAN-Ger\xE4t",no_matches:"Keine passenden Modelle",tracking:"\xDCberwachung aktiv",partial:"Einige Messwerte nicht verf\xFCgbar",config_entity:"Hauptentit\xE4t (optional)",diagnostic:"Diagnose",unavailable_readings:"Nicht verf\xFCgbare Messwerte",empty:"Keine gekoppelten HEIMAN-Ger\xE4te gefunden",preview:"Vorschau",remote_self_test:"Fernselbsttest",temporary_mute:"Vor\xFCbergehend stummschalten",indicator:"Statusanzeige",siren_on:"Sirene starten",siren_off:"Sirene stoppen",siren_options:"Sireneneinstellungen",tone:"Klangprofil",duration:"Dauer",volume:"Lautst\xE4rke",seconds:"s",device_default:"Ger\xE4tevorgabe",apply:"\xDCbernehmen",execute:"Ausf\xFChren",sending:"Wird gesendet\u2026",command_sent:"Befehl gesendet. Warten auf die Statusmeldung des Ger\xE4ts.",invalid_value:"Geben Sie einen Wert im zul\xE4ssigen Bereich mit passender Schrittweite ein.",strobe:"Blitzlicht",strobe_level:"Blitzlichtst\xE4rke",temperature_offset:"Temperaturkorrektur",humidity_offset:"Feuchtigkeitskorrektur",sensitivity:"Empfindlichkeit",identify:"Ger\xE4t identifizieren",smoke_sound:"Rauchalarm-Klangprofil",co_sound:"CO-Alarm-Klangprofil",fire_sound:"Feueralarm",burglar:"Einbruchalarm",emergency:"Notfall",police_panic:"Polizeialarm",fire_panic:"Feuer-Notfallsignal",emergency_panic:"Notrufsignal",low:"Niedrig",medium:"Mittel",high:"Hoch",very_high:"Sehr hoch"};var Ie={language_name:"Fran\xE7ais",follow_system:"Suivre Home Assistant",home:"Maison",fire:"S\xE9curit\xE9 incendie",minimal:"\xC9pur\xE9",auto:"Automatique",model:"Mod\xE8le du produit",device:"Appareil",style:"Style",name:"Nom de la carte",language:"Langue",search:"Rechercher un mod\xE8le ou un nom de mod\xE8le Zigbee",choose:"Choisir un appareil",choose_device:"Plusieurs appareils correspondent. Choisissez-en un dans l\u2019\xE9diteur de carte.",no_device:"Choisissez un mod\xE8le et un appareil appair\xE9 dans l\u2019\xE9diteur de carte.",missing_device:"Cet appareil n\u2019est plus pr\xE9sent dans Home Assistant.",model_mismatch:"L\u2019appareil choisi ne correspond pas \xE0 ce mod\xE8le. Choisissez le bon mod\xE8le ou Automatique.",no_entities:"Aucune entit\xE9 correspondante. V\xE9rifiez l\u2019appareil ou attribuez les entit\xE9s dans l\u2019\xE9diteur.",unknown:"Inconnu",unavailable:"Indisponible",normal:"Normal",alarm:"Alarme",warning:"\xC0 v\xE9rifier",testing:"Autotest en cours",active:"Actif",inactive:"Inactif",open:"Ouvert",closed:"Ferm\xE9",detected:"D\xE9tect\xE9",clear:"Non d\xE9tect\xE9",on:"Activ\xE9",off:"D\xE9sactiv\xE9",device_control:"Contr\xF4le de l\u2019appareil",details:"D\xE9tails",more_info:"Plus d\u2019informations",battery:"Batterie",battery_low:"Batterie faible",signal:"Signal",temperature:"Temp\xE9rature",humidity:"Humidit\xE9",smoke:"Fum\xE9e",co:"Monoxyde de carbone",smoke_co:"Fum\xE9e et CO",heat:"Chaleur",gas:"Gaz combustible",leak:"Fuite d\u2019eau",contact:"Porte / fen\xEAtre",motion:"Mouvement / pr\xE9sence",fall:"Chute",vibration:"Vibration",climate:"Temp\xE9rature et humidit\xE9",air:"Qualit\xE9 de l\u2019air",siren:"Sir\xE8ne",plug:"Prise connect\xE9e",switch:"Interrupteur / relais",light:"\xC9clairage",cover:"Rideau",remote:"T\xE9l\xE9commande / bouton",power:"Puissance",energy:"\xC9nergie",voltage:"Tension",current:"Intensit\xE9",illuminance:"\xC9clairement",co2:"CO\u2082",voc:"VOC",pm25:"PM2.5",action:"Derni\xE8re action",control:"Commande principale",tamper:"Sabotage",fault:"D\xE9faut",test:"Autotest",muted:"Son coup\xE9",updated:"Mis \xE0 jour",show_battery:"Afficher la batterie",show_signal:"Afficher le signal",show_details:"Afficher les d\xE9tails",show_controls:"Afficher les commandes",advanced:"Attribution des entit\xE9s",assignments_help:"Les entit\xE9s sont associ\xE9es \xE0 cet appareil. Ne les remplacez que si n\xE9cessaire. Un champ vide utilise l\u2019association automatique.",device_help:"Un seul appareil correspondant est s\xE9lectionn\xE9 automatiquement. Choisissez l\u2019appareil souhait\xE9 s\u2019il y en a plusieurs.",registry_error:"Impossible de lire le registre des appareils. R\xE9essayez ou attribuez les entit\xE9s ci-dessous.",retry:"R\xE9essayer",loading:"Chargement des appareils\u2026",self_test:"Autotest",mute:"Couper le son",turn_on:"Activer",turn_off:"D\xE9sactiver",stop:"Arr\xEAter",close:"Fermer",service_error:"La commande a \xE9chou\xE9. Veuillez r\xE9essayer.",not_reported:"Pas encore signal\xE9",connected:"Connect\xE9",controls_help:"Ouvrez la bo\xEEte de dialogue Home Assistant pour r\xE9gler cette entit\xE9.",no_control:"Cet appareil ne fournit aucune commande.",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"Appareil HEIMAN appair\xE9",no_matches:"Aucun mod\xE8le correspondant",tracking:"Surveillance active",partial:"Certaines mesures sont indisponibles",config_entity:"Entit\xE9 principale (facultatif)",diagnostic:"Diagnostic",unavailable_readings:"Mesures indisponibles",empty:"Aucun appareil HEIMAN appair\xE9 trouv\xE9",preview:"Aper\xE7u",remote_self_test:"Autotest \xE0 distance",temporary_mute:"Couper temporairement le son",indicator:"Voyant d\u2019\xE9tat",siren_on:"D\xE9marrer la sir\xE8ne",siren_off:"Arr\xEAter la sir\xE8ne",siren_options:"R\xE9glages de la sir\xE8ne",tone:"Profil sonore",duration:"Dur\xE9e",volume:"Volume",seconds:"s",device_default:"R\xE9glage de l\u2019appareil",apply:"Appliquer",execute:"Ex\xE9cuter",sending:"Envoi en cours\u2026",command_sent:"Commande envoy\xE9e. En attente de l\u2019\xE9tat transmis par l\u2019appareil.",invalid_value:"Saisissez une valeur respectant la plage et le pas autoris\xE9s par l\u2019appareil.",strobe:"Flash",strobe_level:"Intensit\xE9 du flash",temperature_offset:"Correction de temp\xE9rature",humidity_offset:"Correction d\u2019humidit\xE9",sensitivity:"Sensibilit\xE9",identify:"Identifier l\u2019appareil",smoke_sound:"Profil sonore fum\xE9e",co_sound:"Profil sonore CO",fire_sound:"Incendie",burglar:"Intrusion",emergency:"Urgence",police_panic:"Alerte police",fire_panic:"Alerte incendie",emergency_panic:"Alerte d\u2019urgence",low:"Faible",medium:"Moyen",high:"\xC9lev\xE9",very_high:"Tr\xE8s \xE9lev\xE9"};var Le={language_name:"Espa\xF1ol",follow_system:"Seguir Home Assistant",home:"Hogar",fire:"Seguridad contra incendios",minimal:"Minimalista",auto:"Autom\xE1tico",model:"Modelo del producto",device:"Dispositivo",style:"Estilo",name:"Nombre de la tarjeta",language:"Idioma",search:"Buscar modelos o nombres de modelo Zigbee",choose:"Elegir un dispositivo",choose_device:"Coinciden varios dispositivos. Elija uno en el editor de la tarjeta.",no_device:"Elija un modelo y un dispositivo vinculado en el editor de la tarjeta.",missing_device:"Este dispositivo ya no est\xE1 en Home Assistant.",model_mismatch:"El dispositivo seleccionado no corresponde a este modelo. Elija el modelo correcto o Autom\xE1tico.",no_entities:"No hay entidades coincidentes. Compruebe el dispositivo o asigne las entidades en el editor.",unknown:"Desconocido",unavailable:"No disponible",normal:"Normal",alarm:"Alarma",warning:"Requiere atenci\xF3n",testing:"Autoprueba en curso",active:"Activo",inactive:"Inactivo",open:"Abierto",closed:"Cerrado",detected:"Detectado",clear:"No detectado",on:"Encendido",off:"Apagado",device_control:"Control del dispositivo",details:"Detalles",more_info:"M\xE1s informaci\xF3n",battery:"Bater\xEDa",battery_low:"Bater\xEDa baja",signal:"Se\xF1al",temperature:"Temperatura",humidity:"Humedad",smoke:"Humo",co:"Mon\xF3xido de carbono",smoke_co:"Humo y CO",heat:"Calor",gas:"Gas combustible",leak:"Fuga de agua",contact:"Puerta / ventana",motion:"Movimiento / presencia",fall:"Ca\xEDda",vibration:"Vibraci\xF3n",climate:"Temperatura y humedad",air:"Calidad del aire",siren:"Sirena",plug:"Enchufe inteligente",switch:"Interruptor / rel\xE9",light:"Iluminaci\xF3n",cover:"Cortina",remote:"Mando / bot\xF3n",power:"Potencia",energy:"Energ\xEDa",voltage:"Tensi\xF3n",current:"Corriente",illuminance:"Iluminancia",co2:"CO\u2082",voc:"VOC",pm25:"PM2.5",action:"\xDAltima acci\xF3n",control:"Control principal",tamper:"Manipulaci\xF3n",fault:"Fallo",test:"Autoprueba",muted:"Silenciado",updated:"Actualizado",show_battery:"Mostrar bater\xEDa",show_signal:"Mostrar se\xF1al",show_details:"Mostrar detalles",show_controls:"Mostrar controles",advanced:"Asignaci\xF3n de entidades",assignments_help:"Las entidades se vinculan a este dispositivo. C\xE1mbielas solo si es necesario. Los campos vac\xEDos usan la asignaci\xF3n autom\xE1tica.",device_help:"Se selecciona autom\xE1ticamente si solo hay un dispositivo coincidente. Elija la instancia si hay varios.",registry_error:"No se ha podido leer el registro de dispositivos. Reint\xE9ntelo o asigne las entidades a continuaci\xF3n.",retry:"Reintentar",loading:"Cargando dispositivos\u2026",self_test:"Autoprueba",mute:"Silenciar",turn_on:"Encender",turn_off:"Apagar",stop:"Detener",close:"Cerrar",service_error:"La orden ha fallado. Vuelva a intentarlo.",not_reported:"Sin datos recibidos",connected:"Conectado",controls_help:"Abra el di\xE1logo de Home Assistant para ajustar esta entidad.",no_control:"Este dispositivo no ofrece controles.",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"Dispositivo HEIMAN vinculado",no_matches:"No hay modelos coincidentes",tracking:"Supervisi\xF3n activa",partial:"Algunas lecturas no est\xE1n disponibles",config_entity:"Entidad principal (opcional)",diagnostic:"Diagn\xF3stico",unavailable_readings:"Lecturas no disponibles",empty:"No se han encontrado dispositivos HEIMAN vinculados",preview:"Vista previa",remote_self_test:"Autoprueba remota",temporary_mute:"Silenciar temporalmente",indicator:"Indicador de estado",siren_on:"Activar sirena",siren_off:"Detener sirena",siren_options:"Ajustes de la sirena",tone:"Perfil sonoro",duration:"Duraci\xF3n",volume:"Volumen",seconds:"s",device_default:"Valor del dispositivo",apply:"Aplicar",execute:"Ejecutar",sending:"Enviando\u2026",command_sent:"Orden enviada. Esperando el estado comunicado por el dispositivo.",invalid_value:"Introduzca un valor dentro del rango y del incremento admitidos por el dispositivo.",strobe:"Destello",strobe_level:"Intensidad del destello",temperature_offset:"Correcci\xF3n de temperatura",humidity_offset:"Correcci\xF3n de humedad",sensitivity:"Sensibilidad",identify:"Identificar dispositivo",smoke_sound:"Perfil sonoro de humo",co_sound:"Perfil sonoro de CO",fire_sound:"Incendio",burglar:"Intrusi\xF3n",emergency:"Emergencia",police_panic:"Alerta policial",fire_panic:"Alerta de incendio",emergency_panic:"Alerta de emergencia",low:"Bajo",medium:"Medio",high:"Alto",very_high:"Muy alto"};var je={language_name:"Italiano",follow_system:"Segui Home Assistant",home:"Casa",fire:"Sicurezza antincendio",minimal:"Essenziale",auto:"Automatico",model:"Modello del prodotto",device:"Dispositivo",style:"Stile",name:"Nome della scheda",language:"Lingua",search:"Cerca modelli o nomi di modello Zigbee",choose:"Scegli un dispositivo",choose_device:"Corrispondono pi\xF9 dispositivi. Scegline uno nell\u2019editor della scheda.",no_device:"Scegli un modello e un dispositivo associato nell\u2019editor della scheda.",missing_device:"Questo dispositivo non \xE8 pi\xF9 presente in Home Assistant.",model_mismatch:"Il dispositivo selezionato non corrisponde al modello. Scegli il modello corretto o Automatico.",no_entities:"Nessuna entit\xE0 corrispondente. Controlla il dispositivo o assegna le entit\xE0 nell\u2019editor.",unknown:"Sconosciuto",unavailable:"Non disponibile",normal:"Normale",alarm:"Allarme",warning:"Da controllare",testing:"Autotest in corso",active:"Attivo",inactive:"Inattivo",open:"Aperto",closed:"Chiuso",detected:"Rilevato",clear:"Non rilevato",on:"Acceso",off:"Spento",device_control:"Controllo dispositivo",details:"Dettagli",more_info:"Altre informazioni",battery:"Batteria",battery_low:"Batteria scarica",signal:"Segnale",temperature:"Temperatura",humidity:"Umidit\xE0",smoke:"Fumo",co:"Monossido di carbonio",smoke_co:"Fumo e CO",heat:"Calore",gas:"Gas combustibile",leak:"Perdita d\u2019acqua",contact:"Porta / finestra",motion:"Movimento / presenza",fall:"Caduta",vibration:"Vibrazione",climate:"Temperatura e umidit\xE0",air:"Qualit\xE0 dell\u2019aria",siren:"Sirena",plug:"Presa intelligente",switch:"Interruttore / rel\xE8",light:"Illuminazione",cover:"Tenda",remote:"Telecomando / pulsante",power:"Potenza",energy:"Energia",voltage:"Tensione",current:"Corrente",illuminance:"Illuminamento",co2:"CO\u2082",voc:"VOC",pm25:"PM2.5",action:"Ultima azione",control:"Comando principale",tamper:"Manomissione",fault:"Guasto",test:"Autotest",muted:"Silenziato",updated:"Aggiornato",show_battery:"Mostra batteria",show_signal:"Mostra segnale",show_details:"Mostra dettagli",show_controls:"Mostra comandi",advanced:"Assegnazione delle entit\xE0",assignments_help:"Le entit\xE0 vengono associate a questo dispositivo. Modificale solo se necessario. I campi vuoti usano l\u2019associazione automatica.",device_help:"Un solo dispositivo corrispondente viene selezionato automaticamente. Scegli l\u2019istanza se ce ne sono pi\xF9 di uno.",registry_error:"Impossibile leggere il registro dei dispositivi. Riprova o assegna le entit\xE0 qui sotto.",retry:"Riprova",loading:"Caricamento dei dispositivi\u2026",self_test:"Autotest",mute:"Silenzia",turn_on:"Accendi",turn_off:"Spegni",stop:"Arresta",close:"Chiudi",service_error:"Il comando non \xE8 riuscito. Riprova.",not_reported:"Nessun dato ricevuto",connected:"Connesso",controls_help:"Apri la finestra di Home Assistant per regolare questa entit\xE0.",no_control:"Questo dispositivo non espone comandi.",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"Dispositivo HEIMAN associato",no_matches:"Nessun modello corrispondente",tracking:"Monitoraggio attivo",partial:"Alcune letture non sono disponibili",config_entity:"Entit\xE0 principale (facoltativa)",diagnostic:"Diagnostica",unavailable_readings:"Letture non disponibili",empty:"Nessun dispositivo HEIMAN associato trovato",preview:"Anteprima",remote_self_test:"Autotest remoto",temporary_mute:"Silenzia temporaneamente",indicator:"Indicatore di stato",siren_on:"Avvia sirena",siren_off:"Arresta sirena",siren_options:"Impostazioni della sirena",tone:"Profilo sonoro",duration:"Durata",volume:"Volume",seconds:"s",device_default:"Valore del dispositivo",apply:"Applica",execute:"Esegui",sending:"Invio in corso\u2026",command_sent:"Comando inviato. In attesa dello stato trasmesso dal dispositivo.",invalid_value:"Inserisci un valore nell\u2019intervallo e con l\u2019incremento supportati dal dispositivo.",strobe:"Lampeggio",strobe_level:"Intensit\xE0 del lampeggio",temperature_offset:"Correzione della temperatura",humidity_offset:"Correzione dell\u2019umidit\xE0",sensitivity:"Sensibilit\xE0",identify:"Identifica dispositivo",smoke_sound:"Profilo sonoro fumo",co_sound:"Profilo sonoro CO",fire_sound:"Incendio",burglar:"Intrusione",emergency:"Emergenza",police_panic:"Allerta polizia",fire_panic:"Allerta incendio",emergency_panic:"Allerta emergenza",low:"Basso",medium:"Medio",high:"Alto",very_high:"Molto alto"};var Fe={language_name:"Nederlands",follow_system:"Home Assistant volgen",home:"Wonen",fire:"Brandveiligheid",minimal:"Eenvoudig",auto:"Automatisch",model:"Productmodel",device:"Apparaat",style:"Stijl",name:"Kaartnaam",language:"Taal",search:"Zoek modellen of Zigbee-modelnamen",choose:"Kies een apparaat",choose_device:"Meerdere apparaten komen overeen. Kies er \xE9\xE9n in de kaarteditor.",no_device:"Kies een model en een gekoppeld apparaat in de kaarteditor.",missing_device:"Dit apparaat is niet meer aanwezig in Home Assistant.",model_mismatch:"Het gekozen apparaat past niet bij dit model. Kies het juiste model of Automatisch.",no_entities:"Geen passende entiteiten. Controleer het apparaat of wijs entiteiten toe in de editor.",unknown:"Onbekend",unavailable:"Niet beschikbaar",normal:"Normaal",alarm:"Alarm",warning:"Aandacht vereist",testing:"Zelftest wordt uitgevoerd",active:"Actief",inactive:"Inactief",open:"Open",closed:"Gesloten",detected:"Gedetecteerd",clear:"Niet gedetecteerd",on:"Aan",off:"Uit",device_control:"Apparaatbediening",details:"Details",more_info:"Meer informatie",battery:"Batterij",battery_low:"Batterij bijna leeg",signal:"Signaal",temperature:"Temperatuur",humidity:"Luchtvochtigheid",smoke:"Rook",co:"Koolmonoxide",smoke_co:"Rook en CO",heat:"Hitte",gas:"Brandbaar gas",leak:"Waterlekkage",contact:"Deur / raam",motion:"Beweging / aanwezigheid",fall:"Val",vibration:"Trilling",climate:"Temperatuur en luchtvochtigheid",air:"Luchtkwaliteit",siren:"Sirene",plug:"Slim stopcontact",switch:"Schakelaar / relais",light:"Verlichting",cover:"Gordijn",remote:"Afstandsbediening / knop",power:"Vermogen",energy:"Energie",voltage:"Spanning",current:"Stroomsterkte",illuminance:"Verlichtingssterkte",co2:"CO\u2082",voc:"VOC",pm25:"PM2.5",action:"Laatste actie",control:"Hoofdbediening",tamper:"Sabotage",fault:"Storing",test:"Zelftest",muted:"Gedempt",updated:"Bijgewerkt",show_battery:"Batterij tonen",show_signal:"Signaal tonen",show_details:"Details tonen",show_controls:"Bediening tonen",advanced:"Entiteiten toewijzen",assignments_help:"Entiteiten worden binnen dit apparaat gekoppeld. Pas ze alleen aan als dat nodig is. Lege velden gebruiken automatische koppeling.",device_help:"E\xE9n passend apparaat wordt automatisch geselecteerd. Kies het gewenste apparaat als er meerdere zijn.",registry_error:"Kan het apparatenregister niet lezen. Probeer opnieuw of wijs hieronder entiteiten toe.",retry:"Opnieuw proberen",loading:"Apparaten laden\u2026",self_test:"Zelftest",mute:"Dempen",turn_on:"Inschakelen",turn_off:"Uitschakelen",stop:"Stoppen",close:"Sluiten",service_error:"De opdracht is mislukt. Probeer het opnieuw.",not_reported:"Nog niet gemeld",connected:"Verbonden",controls_help:"Open het Home Assistant-dialoogvenster om deze entiteit in te stellen.",no_control:"Dit apparaat biedt geen bediening.",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"Gekoppeld HEIMAN-apparaat",no_matches:"Geen passende modellen",tracking:"Bewaking actief",partial:"Sommige meetwaarden zijn niet beschikbaar",config_entity:"Hoofdentiteit (optioneel)",diagnostic:"Diagnostiek",unavailable_readings:"Niet-beschikbare meetwaarden",empty:"Geen gekoppelde HEIMAN-apparaten gevonden",preview:"Voorbeeld",remote_self_test:"Zelftest op afstand",temporary_mute:"Tijdelijk dempen",indicator:"Statuslampje",siren_on:"Sirene starten",siren_off:"Sirene stoppen",siren_options:"Sirene-instellingen",tone:"Geluidsprofiel",duration:"Duur",volume:"Volume",seconds:"s",device_default:"Apparaatstandaard",apply:"Toepassen",execute:"Uitvoeren",sending:"Verzenden\u2026",command_sent:"Opdracht verzonden. Wachten op de statusmelding van het apparaat.",invalid_value:"Voer een waarde in binnen het bereik en de stapgrootte van het apparaat.",strobe:"Flitslicht",strobe_level:"Flitssterkte",temperature_offset:"Temperatuurcorrectie",humidity_offset:"Vochtigheidscorrectie",sensitivity:"Gevoeligheid",identify:"Apparaat identificeren",smoke_sound:"Rookalarmgeluid",co_sound:"CO-alarmgeluid",fire_sound:"Brandalarm",burglar:"Inbraakalarm",emergency:"Noodsignaal",police_panic:"Politiealarm",fire_panic:"Brandnoodsignaal",emergency_panic:"Noodhulpsignaal",low:"Laag",medium:"Gemiddeld",high:"Hoog",very_high:"Zeer hoog"};var We={language_name:"Portugu\xEAs",follow_system:"Seguir o Home Assistant",home:"Casa",fire:"Seguran\xE7a contra inc\xEAndios",minimal:"Simples",auto:"Autom\xE1tico",model:"Modelo do produto",device:"Dispositivo",style:"Estilo",name:"Nome do cart\xE3o",language:"Idioma",search:"Pesquisar modelos ou nomes de modelo Zigbee",choose:"Escolher um dispositivo",choose_device:"Existem v\xE1rios dispositivos correspondentes. Escolha um no editor do cart\xE3o.",no_device:"Escolha um modelo e um dispositivo emparelhado no editor do cart\xE3o.",missing_device:"Este dispositivo j\xE1 n\xE3o est\xE1 no Home Assistant.",model_mismatch:"O dispositivo selecionado n\xE3o corresponde a este modelo. Escolha o modelo correto ou Autom\xE1tico.",no_entities:"N\xE3o existem entidades correspondentes. Verifique o dispositivo ou atribua entidades no editor.",unknown:"Desconhecido",unavailable:"Indispon\xEDvel",normal:"Normal",alarm:"Alarme",warning:"Requer aten\xE7\xE3o",testing:"Autoteste em curso",active:"Ativo",inactive:"Inativo",open:"Aberto",closed:"Fechado",detected:"Detetado",clear:"N\xE3o detetado",on:"Ligado",off:"Desligado",device_control:"Controlo do dispositivo",details:"Detalhes",more_info:"Mais informa\xE7\xF5es",battery:"Bateria",battery_low:"Bateria fraca",signal:"Sinal",temperature:"Temperatura",humidity:"Humidade",smoke:"Fumo",co:"Mon\xF3xido de carbono",smoke_co:"Fumo e CO",heat:"Calor",gas:"G\xE1s combust\xEDvel",leak:"Fuga de \xE1gua",contact:"Porta / janela",motion:"Movimento / presen\xE7a",fall:"Queda",vibration:"Vibra\xE7\xE3o",climate:"Temperatura e humidade",air:"Qualidade do ar",siren:"Sirene",plug:"Tomada inteligente",switch:"Interruptor / rel\xE9",light:"Ilumina\xE7\xE3o",cover:"Cortina",remote:"Comando / bot\xE3o",power:"Pot\xEAncia",energy:"Energia",voltage:"Tens\xE3o",current:"Corrente",illuminance:"Ilumin\xE2ncia",co2:"CO\u2082",voc:"VOC",pm25:"PM2.5",action:"\xDAltima a\xE7\xE3o",control:"Comando principal",tamper:"Viola\xE7\xE3o",fault:"Falha",test:"Autoteste",muted:"Silenciado",updated:"Atualizado",show_battery:"Mostrar bateria",show_signal:"Mostrar sinal",show_details:"Mostrar detalhes",show_controls:"Mostrar comandos",advanced:"Atribui\xE7\xE3o de entidades",assignments_help:"As entidades s\xE3o associadas a este dispositivo. Altere-as apenas se necess\xE1rio. Os campos vazios usam a associa\xE7\xE3o autom\xE1tica.",device_help:"Um \xFAnico dispositivo correspondente \xE9 selecionado automaticamente. Escolha o pretendido se existirem v\xE1rios.",registry_error:"N\xE3o foi poss\xEDvel ler o registo de dispositivos. Tente novamente ou atribua entidades abaixo.",retry:"Tentar novamente",loading:"A carregar dispositivos\u2026",self_test:"Autoteste",mute:"Silenciar",turn_on:"Ligar",turn_off:"Desligar",stop:"Parar",close:"Fechar",service_error:"O comando falhou. Tente novamente.",not_reported:"Ainda n\xE3o comunicado",connected:"Ligado",controls_help:"Abra a janela do Home Assistant para ajustar esta entidade.",no_control:"Este dispositivo n\xE3o disponibiliza comandos.",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"Dispositivo HEIMAN emparelhado",no_matches:"Nenhum modelo correspondente",tracking:"Monitoriza\xE7\xE3o ativa",partial:"Algumas leituras est\xE3o indispon\xEDveis",config_entity:"Entidade principal (opcional)",diagnostic:"Diagn\xF3stico",unavailable_readings:"Leituras indispon\xEDveis",empty:"N\xE3o foram encontrados dispositivos HEIMAN emparelhados",preview:"Pr\xE9-visualiza\xE7\xE3o",remote_self_test:"Autoteste remoto",temporary_mute:"Silenciar temporariamente",indicator:"Indicador de estado",siren_on:"Iniciar sirene",siren_off:"Parar sirene",siren_options:"Defini\xE7\xF5es da sirene",tone:"Perfil sonoro",duration:"Dura\xE7\xE3o",volume:"Volume",seconds:"s",device_default:"Predefini\xE7\xE3o do dispositivo",apply:"Aplicar",execute:"Executar",sending:"A enviar\u2026",command_sent:"Comando enviado. A aguardar o estado comunicado pelo dispositivo.",invalid_value:"Introduza um valor dentro do intervalo e do incremento suportados pelo dispositivo.",strobe:"Luz intermitente",strobe_level:"Intensidade da luz",temperature_offset:"Corre\xE7\xE3o da temperatura",humidity_offset:"Corre\xE7\xE3o da humidade",sensitivity:"Sensibilidade",identify:"Identificar dispositivo",smoke_sound:"Perfil sonoro de fumo",co_sound:"Perfil sonoro de CO",fire_sound:"Inc\xEAndio",burglar:"Intrus\xE3o",emergency:"Emerg\xEAncia",police_panic:"Alerta policial",fire_panic:"Alerta de inc\xEAndio",emergency_panic:"Alerta de emerg\xEAncia",low:"Baixo",medium:"M\xE9dio",high:"Alto",very_high:"Muito alto"};var Be={language_name:"Polski",follow_system:"U\u017Cywaj j\u0119zyka Home Assistant",home:"Dom",fire:"Ochrona przeciwpo\u017Carowa",minimal:"Prosty",auto:"Automatycznie",model:"Model produktu",device:"Urz\u0105dzenie",style:"Styl",name:"Nazwa karty",language:"J\u0119zyk",search:"Szukaj modeli lub nazw modeli Zigbee",choose:"Wybierz urz\u0105dzenie",choose_device:"Pasuje kilka urz\u0105dze\u0144. Wybierz jedno w edytorze karty.",no_device:"Wybierz model i sparowane urz\u0105dzenie w edytorze karty.",missing_device:"Tego urz\u0105dzenia nie ma ju\u017C w Home Assistant.",model_mismatch:"Wybrane urz\u0105dzenie nie pasuje do tego modelu. Wybierz w\u0142a\u015Bciwy model lub tryb automatyczny.",no_entities:"Brak pasuj\u0105cych encji. Sprawd\u017A urz\u0105dzenie lub przypisz encje w edytorze.",unknown:"Nieznane",unavailable:"Niedost\u0119pne",normal:"Prawid\u0142owo",alarm:"Alarm",warning:"Wymaga uwagi",testing:"Trwa autotest",active:"Aktywne",inactive:"Nieaktywne",open:"Otwarte",closed:"Zamkni\u0119te",detected:"Wykryto",clear:"Nie wykryto",on:"W\u0142\u0105czone",off:"Wy\u0142\u0105czone",device_control:"Sterowanie urz\u0105dzeniem",details:"Szczeg\xF3\u0142y",more_info:"Wi\u0119cej informacji",battery:"Bateria",battery_low:"Niski poziom baterii",signal:"Sygna\u0142",temperature:"Temperatura",humidity:"Wilgotno\u015B\u0107",smoke:"Dym",co:"Tlenek w\u0119gla",smoke_co:"Dym i CO",heat:"Wysoka temperatura",gas:"Gaz palny",leak:"Wyciek wody",contact:"Drzwi / okno",motion:"Ruch / obecno\u015B\u0107",fall:"Upadek",vibration:"Wibracje",climate:"Temperatura i wilgotno\u015B\u0107",air:"Jako\u015B\u0107 powietrza",siren:"Syrena",plug:"Inteligentne gniazdko",switch:"Prze\u0142\u0105cznik / przeka\u017Anik",light:"O\u015Bwietlenie",cover:"Zas\u0142ona",remote:"Pilot / przycisk",power:"Moc",energy:"Energia",voltage:"Napi\u0119cie",current:"Nat\u0119\u017Cenie pr\u0105du",illuminance:"Nat\u0119\u017Cenie o\u015Bwietlenia",co2:"CO\u2082",voc:"VOC",pm25:"PM2.5",action:"Ostatnia czynno\u015B\u0107",control:"Sterowanie g\u0142\xF3wne",tamper:"Sabota\u017C",fault:"Usterka",test:"Autotest",muted:"Wyciszone",updated:"Zaktualizowano",show_battery:"Poka\u017C bateri\u0119",show_signal:"Poka\u017C sygna\u0142",show_details:"Poka\u017C szczeg\xF3\u0142y",show_controls:"Poka\u017C sterowanie",advanced:"Przypisanie encji",assignments_help:"Encje s\u0105 dopasowywane w obr\u0119bie tego urz\u0105dzenia. Zmieniaj je tylko w razie potrzeby. Puste pola oznaczaj\u0105 dopasowanie automatyczne.",device_help:"Jedno pasuj\u0105ce urz\u0105dzenie jest wybierane automatycznie. Gdy jest ich kilka, wybierz w\u0142a\u015Bciwe.",registry_error:"Nie mo\u017Cna odczyta\u0107 rejestru urz\u0105dze\u0144. Spr\xF3buj ponownie lub przypisz encje poni\u017Cej.",retry:"Spr\xF3buj ponownie",loading:"Wczytywanie urz\u0105dze\u0144\u2026",self_test:"Autotest",mute:"Wycisz",turn_on:"W\u0142\u0105cz",turn_off:"Wy\u0142\u0105cz",stop:"Zatrzymaj",close:"Zamknij",service_error:"Wykonanie polecenia nie powiod\u0142o si\u0119. Spr\xF3buj ponownie.",not_reported:"Jeszcze nie zg\u0142oszono",connected:"Po\u0142\u0105czono",controls_help:"Otw\xF3rz okno Home Assistant, aby zmieni\u0107 ustawienia tej encji.",no_control:"To urz\u0105dzenie nie udost\u0119pnia element\xF3w sterowania.",source_zha:"ZHA",source_mqtt:"MQTT",unknown_model:"Sparowane urz\u0105dzenie HEIMAN",no_matches:"Brak pasuj\u0105cych modeli",tracking:"Monitorowanie aktywne",partial:"Niekt\xF3re odczyty s\u0105 niedost\u0119pne",config_entity:"Encja g\u0142\xF3wna (opcjonalnie)",diagnostic:"Diagnostyka",unavailable_readings:"Niedost\u0119pne odczyty",empty:"Nie znaleziono sparowanych urz\u0105dze\u0144 HEIMAN",preview:"Podgl\u0105d",remote_self_test:"Zdalny autotest",temporary_mute:"Wycisz tymczasowo",indicator:"Dioda stanu",siren_on:"Uruchom syren\u0119",siren_off:"Zatrzymaj syren\u0119",siren_options:"Ustawienia syreny",tone:"Profil d\u017Awi\u0119kowy",duration:"Czas trwania",volume:"G\u0142o\u015Bno\u015B\u0107",seconds:"s",device_default:"Domy\u015Blne urz\u0105dzenia",apply:"Zastosuj",execute:"Wykonaj",sending:"Wysy\u0142anie\u2026",command_sent:"Polecenie wys\u0142ano. Oczekiwanie na stan zg\u0142oszony przez urz\u0105dzenie.",invalid_value:"Wprowad\u017A warto\u015B\u0107 z zakresu i z krokiem obs\u0142ugiwanym przez urz\u0105dzenie.",strobe:"Lampa b\u0142yskowa",strobe_level:"Intensywno\u015B\u0107 b\u0142ysku",temperature_offset:"Korekta temperatury",humidity_offset:"Korekta wilgotno\u015Bci",sensitivity:"Czu\u0142o\u015B\u0107",identify:"Zidentyfikuj urz\u0105dzenie",smoke_sound:"Profil alarmu dymowego",co_sound:"Profil alarmu CO",fire_sound:"Po\u017Car",burglar:"W\u0142amanie",emergency:"Zagro\u017Cenie",police_panic:"Alarm policyjny",fire_panic:"Alarm po\u017Carowy",emergency_panic:"Alarm ratunkowy",low:"Niski",medium:"\u015Aredni",high:"Wysoki",very_high:"Bardzo wysoki"};var G={zh:De.language_name,en:ie.language_name,de:Oe.language_name,fr:Ie.language_name,es:Le.language_name,it:je.language_name,nl:Fe.language_name,pt:We.language_name,pl:Be.language_name},ri={en:ie,zh:De,de:Oe,fr:Ie,es:Le,it:je,nl:Fe,pt:We,pl:Be};function F(s,t){if(s?.language&&s.language!=="auto")return s.language;let e=(t?.locale?.language??t?.language??"en").toLowerCase().split(/[-_]/)[0];return Object.hasOwn(G,e)?e:"en"}var ge=(s,t)=>(ri[s]??ie)[t]??ie[t];var Ve=["smoke","co","heat","gas","leak","contact","motion","fall","vibration","temperature","humidity","battery","battery_low","tamper","fault","test","muted","signal","power","energy","voltage","current","illuminance","co2","voc","pm25","action","control"];function Ue(s){if(!s||typeof s!="object")throw new Error("HEIMAN: configuration must be an object.");if(s.model!==void 0&&(typeof s.model!="string"||s.model!=="auto"&&!L(s.model)))throw new Error(`HEIMAN: unknown model ${String(s.model)}.`);if(s.style!==void 0&&!["home","fire","minimal"].includes(s.style))throw new Error("HEIMAN: style must be home, fire or minimal.");if(s.language!==void 0&&s.language!=="auto"&&!Object.hasOwn(G,s.language))throw new Error(`HEIMAN: language must be auto or one of ${Object.keys(G).join(", ")}.`);for(let t of["name","device_id","entity"])if(s[t]!==void 0&&typeof s[t]!="string")throw new Error(`HEIMAN: ${t} must be a string.`);for(let t of["show_battery","show_signal","show_details","show_controls"])if(s[t]!==void 0&&typeof s[t]!="boolean")throw new Error(`HEIMAN: ${t} must be a boolean.`);if(s.entity&&!/^\w+\.[\w]+$/.test(s.entity))throw new Error("HEIMAN: invalid entity ID.");if(s.entities!==void 0){if(!s.entities||typeof s.entities!="object"||Array.isArray(s.entities))throw new Error("HEIMAN: entities must map roles to entity IDs.");for(let[t,e]of Object.entries(s.entities))if(!Ve.includes(t)||typeof e!="string"||!/^\w+\.[\w]+$/.test(e))throw new Error(`HEIMAN: invalid entity override for ${t}.`)}return{...s,type:"custom:heiman-device-card",model:L(s.model)?.id??"auto",style:s.style??"home",language:s.language??"auto",entities:{...s.entities}}}var K=class extends k{constructor(){super(...arguments);this._config=Ue({type:"custom:heiman-device-card"});this._registry={devices:[],entities:[]};this._registryError=!1;this._loading=!1;this._request=0}static{this.properties={hass:{attribute:!1},_config:{state:!0},_registry:{state:!0},_registryError:{state:!0},_loading:{state:!0}}}setConfig(e){this._config=Ue(e)}t(e){return ge(F(this._config,this.hass),e)}updated(e){this.lang=F(this._config,this.hass),e.has("hass")&&this._syncRegistry()}connectedCallback(){super.connectedCallback(),this.hass&&this._syncRegistry(!0)}disconnectedCallback(){this._request++,this._registryKey=void 0,super.disconnectedCallback()}async _syncRegistry(e=!1){let i=this.hass;if(!i)return;let a=Pe(i)??(this._devicesRef&&i.devices&&i.entities?{devices:Object.values(i.devices),entities:Object.values(i.entities)}:void 0);if(a){(e||this._devicesRef!==i.devices||this._entitiesRef!==i.entities)&&(this._request++,this._registry=a,this._devicesRef=i.devices,this._entitiesRef=i.entities,this._registryError=!1,this._loading=!1);return}let o=i.connection??i;if(!e&&o===this._registryKey)return;this._registryKey=o;let r=++this._request;this._loading=!0,this._registryError=!1;try{let d=await St(i,e);r===this._request&&this.isConnected&&(this._registry=d)}catch{r===this._request&&this.isConnected&&(this._registryError=!0)}finally{r===this._request&&this.isConnected&&(this._loading=!1)}}_moreInfo(e){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}};var At=R`
  :host {
    display: block;
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
    padding: 14px 16px 8px;
  }
  .top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
  .brand-line {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }
  .source-badge {
    font-size: 9px;
    line-height: 1.4;
    padding: 1px 5px;
    border: 1px solid var(--line);
    border-radius: 4px;
    color: var(--muted);
    background: var(--tile);
  }
  .updated {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    flex-shrink: 0;
    white-space: nowrap;
    font-size: 10px;
    color: var(--muted);
  }
  .brand {
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 1.7px;
    color: var(--accent);
  }
  .model {
    font-size: 10px;
    color: var(--muted);
    text-align: right;
    min-width: 0;
    flex: 1;
    overflow-wrap: anywhere;
  }
  .heading {
    margin-top: 9px;
    display: flex;
    align-items: center;
    gap: 9px;
  }
  .identity {
    min-width: 0;
    flex: 1;
  }
  h2 {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.2px;
    margin: 0;
    overflow-wrap: anywhere;
    line-height: 1.35;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .subheading {
    margin-top: 3px;
    color: var(--muted);
    font-size: 11px;
    overflow-wrap: anywhere;
  }
  .icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    border-radius: 10px;
    background: transparent;
    color: var(--muted);
    flex-shrink: 0;
  }
  .icon-button:hover {
    background: var(--tile);
  }
  .overview {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
    margin-top: 9px;
  }
  .illustration {
    width: 48px;
    flex: 0 0 48px;
  }
  .product {
    display: block;
    width: 100%;
  }
  .status {
    min-width: 0;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 8px;
    border-radius: 6px;
    background: var(--status-bg);
    color: var(--status-color);
  }
  .status-label {
    font-size: 12px;
    font-weight: 600;
    line-height: 1.3;
    color: var(--status-color);
    overflow-wrap: anywhere;
  }
  ha-card[data-severity="alarm"] {
    border-color: var(--status-color);
    box-shadow: inset 3px 0 var(--status-color);
  }
  .metrics {
    display: grid;
    grid-template-columns: repeat(var(--metric-columns), minmax(0, 1fr));
    gap: 1px;
    margin-top: 10px;
    background: var(--line);
    border: 1px solid var(--line);
    border-radius: 8px;
    overflow: hidden;
  }
  .metric {
    border: 0;
    text-align: left;
    padding: 7px 8px;
    background: var(--tile);
    min-width: 0;
  }
  .metric:hover {
    filter: brightness(0.97);
  }
  .metric-label {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    color: var(--muted);
    overflow-wrap: anywhere;
  }
  .metric-label svg {
    flex-shrink: 0;
    width: 12px;
    height: 12px;
  }
  .metric-value {
    display: block;
    font-size: 15px;
    font-weight: 500;
    margin-top: 3px;
    overflow-wrap: anywhere;
  }
  .alerts {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }
  .alert {
    display: inline-flex;
    gap: 5px;
    align-items: center;
    color: var(--status-color);
    background: var(--status-bg);
    padding: 4px 7px;
    border-radius: 6px;
    font-size: 11px;
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;
  }
  .action {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    min-height: 36px;
    padding: 6px 8px;
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
    margin-top: 5px;
    color: var(--muted);
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: flex-end;
    flex-wrap: wrap;
    font-size: 10px;
  }
  .panel-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border: 0;
    background: transparent;
    border-radius: 6px;
    min-height: 36px;
    padding: 6px;
    font-size: 11px;
    color: var(--muted);
  }
  .panel-toggle:hover,
  .panel-toggle[aria-expanded="true"] {
    color: var(--accent);
    background: var(--tile);
  }
  .details-toggle[aria-expanded="true"] svg {
    transform: rotate(90deg);
  }
  [hidden] {
    display: none !important;
  }
  .readings {
    padding-top: 4px;
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
    font-size: 10px;
    color: var(--muted);
  }
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
`;var Et={smoke:"M6 17h12M8 21h8M4 13h16M8 9c-4-4 4-4 0-8M16 9c-4-4 4-4 0-8",co:"M8 7a5 5 0 1 0 0 10M16 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z",temperature:"M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0ZM12 11v7",gas:"M12 2c1 6 7 7 7 13a7 7 0 0 1-14 0c0-4 3-6 4-8 0 4 2 4 3 5 1-4 0-7 0-10Z",water:"M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z",door:"M4 21h16M6 21V4l12-2v19M14 12h.01",motion:"M12 5h.01M9 10l3-2 3 4 3 1M12 9l-2 6-4 4M10 15l5 2 1 4",air:"M3 8h12a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h5a3 3 0 1 1-3 3",bell:"M5 17h14l-2-3V9a5 5 0 0 0-10 0v5l-2 3ZM10 21h4",power:"M12 2v9M7 5a8 8 0 1 0 10 0",light:"M9 18h6M10 22h4M8 15a7 7 0 1 1 8 0l-1 3H9l-1-3Z",cover:"M3 3h18v18H3V3ZM3 7h18M3 11h18M3 15h18M12 3v18",remote:"M7 2h10v20H7V2ZM10 6h4M10 11h.01M14 11h.01M10 16h.01M14 16h.01",battery:"M9 2h6M7 5h10v17H7V5ZM10 10h4M10 14h4",signal:"M4 20v-3M9 20v-7M14 20V9M19 20V4",check:"m5 12 4 4L19 6",info:"M12 11v6M12 7h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",alert:"m12 3 10 18H2L12 3ZM12 9v5M12 17h.01",settings:"M4 7h16M4 17h16M8 4v6M16 14v6",clock:"M12 7v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",humidity:"M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13ZM9 17l6-6M9 11h.01M15 17h.01",energy:"m13 2-9 12h7l-1 8 10-13h-8l1-7Z",stop:"M6 6h12v12H6V6Z",chevron:"m9 5 7 7-7 7"},S=(s,t=20)=>M`<svg width=${t} height=${t} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${Et[s]??Et.info}></path></svg>`;function qe(s){let t=["smoke","co","smoke_co","heat","gas","siren","leak","motion","fall"].includes(s);return M`<svg class="product" viewBox="0 0 160 150" aria-hidden="true">
    <ellipse cx="80" cy="135" rx="47" ry="7" fill="currentColor" opacity=".08"></ellipse>
    ${t?M`
      <circle cx="80" cy="72" r="57" fill="var(--device-edge)" stroke="var(--device-stroke)" stroke-width="1"></circle>
      <circle cx="80" cy="68" r="53" fill="var(--device-face)" stroke="var(--device-stroke)" stroke-width="1"></circle>
      <circle cx="80" cy="68" r="40" fill="none" stroke="var(--device-stroke)" stroke-width="1"></circle>
      ${[0,1,2,3,4,5,6,7,8,9,10,11].map(e=>M`<path transform="rotate(${e*30} 80 68)" d="M74 23h12" stroke="var(--device-slot)" stroke-width="2.5" stroke-linecap="round"></path>`)}
      <text x="80" y="62" text-anchor="middle" font-size="8" font-family="Arial, sans-serif" font-weight="700" letter-spacing="1" fill="var(--device-slot)">HEIMAN</text>
      <circle cx="80" cy="80" r="10" fill="var(--device-edge)" stroke="var(--device-stroke)"></circle>
      <circle cx="80" cy="102" r="2" fill="var(--status-color)"></circle>
    `:M`
      <rect x="40" y="15" width="80" height="112" rx="22" fill="var(--device-edge)" stroke="var(--device-stroke)"></rect>
      <rect x="40" y="12" width="80" height="109" rx="22" fill="var(--device-face)" stroke="var(--device-stroke)"></rect>
      <text x="80" y="100" text-anchor="middle" font-size="8" font-family="Arial, sans-serif" font-weight="700" letter-spacing="1" fill="var(--device-slot)">HEIMAN</text>
      ${["climate","air"].includes(s)?M`<rect x="50" y="32" width="60" height="42" rx="6" fill="var(--device-edge)" stroke="var(--device-stroke)"></rect><path d="M61 45h14m-14 7h14m-14 7h14m10-14h13m-13 7h13" stroke="var(--device-slot)" stroke-width="2"></path>`:M`<circle cx="80" cy="57" r="17" fill="var(--device-edge)" stroke="var(--device-stroke)"></circle><path d="M80 45v12m-6-9a10 10 0 1 0 12 0" stroke="var(--device-slot)" stroke-width="2" fill="none" stroke-linecap="round"></path>`}
      <circle cx="80" cy="109" r="2" fill="var(--status-color)"></circle>
    `}
  </svg>`}var $=s=>!s||["unknown","unavailable","none",""].includes(s.state.toLowerCase()),z=s=>!!(s&&["on","true","1","detected","alarm","open"].includes(s.state.toLowerCase())),Ge={smoke:["smoke"],co:["co"],smoke_co:["smoke","co"],heat:["heat"],gas:["gas"],leak:["leak"],contact:["contact"],motion:["motion"],fall:["fall","motion"],vibration:["vibration"],climate:["temperature","humidity"],air:["co2","voc","pm25","temperature","humidity"],plug:["control"],switch:["control"],light:["control"],cover:["control"],remote:["action","battery"],siren:["control"]};function xt(s,t,e){let i=g=>g.flatMap(_=>t[_]??[]),a=Ge[s]??[],o=i(a),r=["smoke","co","heat","gas","leak"].includes(s)||s==="smoke_co",l=i(["smoke","co","heat","gas","leak"]).find(g=>y(g)==="binary_sensor"&&z(e.states[g])),n=["battery_low","tamper","fault"].filter(g=>(t[g]??[]).some(_=>{let A=e.states[_];return $(A)?!1:g==="fault"&&y(_)==="sensor"?!["normal","clear","ok","off","0","false","no_fault"].includes(A.state.toLowerCase()):z(A)}));(t.battery??[]).some(g=>{let _=e.states[g];return!$(_)&&Number.isFinite(Number(_.state))&&Number(_.state)<=20})&&!n.includes("battery_low")&&n.push("battery_low");let c=g=>y(g)==="binary_sensor"&&["on","off","true","false","1","0","detected","clear","alarm"].includes(e.states[g]?.state.toLowerCase()),u=o.some(g=>$(e.states[g])||r&&!c(g)),f=o.find(g=>!$(e.states[g]))??o[0];if(l)return{severity:"alarm",key:"alarm",primary:l,alerts:n,partial:u};let v=r&&a.some(g=>!t[g]?.length);if(!f||v)return{severity:"unknown",key:"unknown",primary:f,alerts:n,partial:u};if(r&&u||o.every(g=>$(e.states[g]))){let g=o.some(_=>e.states[_]?.state==="unavailable");return{severity:g?"unavailable":"unknown",key:g?"unavailable":"unknown",primary:f,alerts:n,partial:u}}if(n.length)return{severity:"warning",key:"warning",primary:f,alerts:n,partial:u};if(i(["test"]).some(g=>z(e.states[g])))return{severity:"active",key:"testing",primary:f,alerts:n,partial:u};let b=o.some(g=>z(e.states[g]));if(s==="contact"||s==="cover"){let g=s==="cover"?o.some(_=>["open","opening","closing"].includes(e.states[_]?.state)):b;return{severity:g?"active":"normal",key:g?"open":"closed",primary:f,alerts:n,partial:u}}return["motion","fall","vibration"].includes(s)?{severity:s==="fall"&&b?"alarm":b?"active":"normal",key:b?"detected":"clear",primary:f,alerts:n,partial:u}:["plug","switch","light","siren"].includes(s)?{severity:b?"active":"normal",key:b?"on":"off",primary:f,alerts:n,partial:u}:s==="remote"?{severity:"normal",key:"tracking",primary:f,alerts:n,partial:u}:{severity:"normal",key:"normal",primary:f,alerts:n,partial:u}}function zt(s,t){if(!t)return"\u2014";if(s.formatEntityState)try{return s.formatEntityState(t)}catch{}let e=t.attributes.unit_of_measurement;return`${t.state}${e?` ${String(e)}`:""}`}var fe=class extends K{constructor(){super(...arguments);this._busy=!1;this._serviceError=!1;this._settingsOpen=!1;this._detailsOpen=!1;this._watchedEntities=new Set}static{this.styles=At}static{this.properties={_busy:{state:!0},_serviceError:{state:!0},_settingsOpen:{state:!0},_detailsOpen:{state:!0}}}shouldUpdate(e){if(e.size!==1||!e.has("hass"))return!0;let i=e.get("hass"),a=this.hass;if(!i||!a)return!0;for(let o of["devices","entities","areas","locale","language","themes","connection"])if(i[o]!==a[o])return!0;return[...this._watchedEntities].some(o=>i.states[o]!==a.states[o])}static getConfigElement(){return document.createElement("heiman-device-card-editor")}static getStubConfig(){return{type:"custom:heiman-device-card",model:"auto",style:"home"}}getCardSize(){return 3}getGridOptions(){return{columns:12,rows:"auto",min_columns:6}}render(){let e=this.hass;if(!e)return m;let i=q(this._config,e,this._registry),{device:a,preset:o,bindings:r,entities:d,reason:l}=i;this._watchedEntities=new Set([...d.map(h=>h.entity_id),...Object.values(r).flatMap(h=>h??[])]);let n=this._config.style??"home",c=Object.values(r).some(h=>h?.length);if(l||!o||!a&&!c)return p` <ha-card
        class=${n}
        data-severity="unknown"
        ?data-dark=${e.themes?.darkMode}
      >
        <div class="empty">
          <div class="brand">HEIMAN</div>
          <p>
            ${this.t(this._loading?"loading":this._registryError&&!c?"registry_error":l??"no_entities")}
          </p>
          ${this._registryError?p`<button class="action" @click=${()=>this._syncRegistry(!0)}>${this.t("retry")}</button>`:m}
        </div>
      </ha-card>`;let u=xt(o.kind,r,e),f=u.primary??this._config.entity??d.find(h=>!h.disabled_by&&!h.hidden_by&&!h.hidden)?.entity_id,v=this._config.name||a?.name_by_user||a?.name||o.id,b=a?.area_id?e.areas?.[a.area_id]?.name:void 0,g=d.find(h=>h.platform)?.platform,_=g==="zha"?"ZHA":g==="mqtt"?"MQTT":g,A=["temperature","humidity","co2","pm25","voc","power","energy","illuminance","action"];this._config.show_battery!==!1&&A.push("battery"),this._config.show_signal!==!1&&A.push("signal");let C=A.flatMap(h=>r[h]?.[0]?[{role:h,id:r[h][0]}]:[]),se=C.length===4?2:Math.min(C.length,3),Ye=this._config.show_controls!==!1?(r.control??[]).filter(h=>y(h)!=="siren"):[],Je=[...new Map([...$t(d,e,o.kind),...d.filter(h=>y(h.entity_id)==="siren"&&!h.disabled_by&&!h.hidden_by&&!h.hidden),...(r.control??[]).filter(h=>y(h)==="siren").map(h=>d.find(T=>T.entity_id===h)??{entity_id:h})].map(h=>[h.entity_id,h])).values()],Xe=Object.values(r).flatMap(h=>h??[]).map(h=>e.states[h]?.last_updated).filter(h=>!!h).sort().at(-1),H=Xe?new Date(Xe):void 0,Z=H&&Number.isFinite(H.getTime())?H.toLocaleTimeString(F(this._config,e),{hour:"2-digit",minute:"2-digit"}):void 0,et=this._detailEntities(),be=this._config.show_controls!==!1&&Je.length>0,Se=this._config.show_details!==!1&&et.length>0;return p` <ha-card
      class=${n}
      data-severity=${u.severity}
      ?data-dark=${e.themes?.darkMode}
    >
      <div class="body">
        <div class="top">
          <span class="brand-line"
            ><span class="brand">HEIMAN</span
            ><span class="source-badge">${_||"HA"}</span></span
          >
          <span class="model">${o.id}</span>
          <time
            class="updated"
            datetime=${Z&&H?H.toISOString():m}
            aria-label=${Z?`${this.t("updated")} ${Z}`:this.t("not_reported")}
            title=${Z&&H?`${this.t("updated")} ${H.toLocaleString(F(this._config,e))}`:this.t("not_reported")}
          >
            ${S("clock",11)}${Z||"\u2014"}
          </time>
        </div>
        <div class="heading">
          ${f?p`<button class="illustration icon-button" aria-label=${this.t("more_info")} @click=${()=>this._moreInfo(f)}>${qe(o.kind)}</button>`:p`<div class="illustration">${qe(o.kind)}</div>`}
          <div class="identity">
            <h2 title=${v}>${v}</h2>
            <div class="subheading">
              ${[b,this.t(o.kind)].filter(Boolean).join(" \xB7 ")}
            </div>
          </div>
        </div>
        <div
          class="overview"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <div class="status">
            ${S(u.severity==="alarm"||u.severity==="warning"?"alert":u.severity==="normal"?"check":me[o.kind],14)}<span
              class="status-label"
              >${this.t(u.key)}</span
            >
          </div>
          ${u.alerts.length?p`<div class="alerts">${u.alerts.map(h=>p`<span class="alert">${this.t(h)}</span>`)}</div>`:m}
          ${u.partial?p`<span class="partial">${this.t("partial")}</span>`:m}
        </div>
        ${C.length?p`<div
                class="metrics"
                style=${`--metric-columns: ${se}`}
              >
                ${C.map(({role:h,id:T},Dt)=>p` <button
                      class="metric"
                      @click=${()=>this._moreInfo(T)}
                      aria-label=${`${this.t(h)}: ${this._display(e.states[T])}`}
                      title=${`${this.t(h)}: ${this._display(e.states[T])}`}
                      style=${Dt===C.length-1&&C.length%se?`grid-column: span ${se-C.length%se+1}`:m}
                    >
                      <span class="metric-label"
                        >${S(this._metricIcon(h),15)}${this.t(h)}</span
                      >
                      <span class="metric-value"
                        >${$(e.states[T])?"\u2014":this._display(e.states[T])}</span
                      >
                    </button>`)}
              </div>`:m}
        ${Ye.length?p`<div class="actions">${Ye.map(h=>this._renderControl(h))}</div>`:m}
        ${be||Se?p`<div class="footer">
                ${be?p`<button
                        class="panel-toggle settings-toggle"
                        aria-expanded=${this._settingsOpen}
                        aria-controls="device-settings"
                        @click=${()=>{this._settingsOpen=!this._settingsOpen,this._detailsOpen=!1}}
                      >
                        ${S("settings",13)}${this.t("device_control")}
                      </button>`:m}
                ${Se?p`<button
                        class="panel-toggle details-toggle"
                        aria-expanded=${this._detailsOpen}
                        aria-controls="entity-readings"
                        @click=${()=>{this._detailsOpen=!this._detailsOpen,this._settingsOpen=!1}}
                      >
                        ${this.t("details")}${S("chevron",12)}
                      </button>`:m}
              </div>`:m}
        ${be?p`<heiman-entity-controls
                id="device-settings"
                .hass=${e}
                .entities=${Je}
                .language=${F(this._config,e)}
                .disabled=${u.severity==="unavailable"}
                .expanded=${this._settingsOpen}
                .urgent=${u.severity==="alarm"}
              ></heiman-entity-controls>`:m}
        ${this._serviceError?p`<div class="error" role="alert">${this.t("service_error")}</div>`:m}
        ${Se?p`<div
                class="readings"
                id="entity-readings"
                ?hidden=${!this._detailsOpen}
              >
                ${et.map(h=>this._entityRow(h))}
              </div>`:m}
      </div>
    </ha-card>`}_detailEntities(){if(!this.hass)return[];let e=q(this._config,this.hass,this._registry),i=new Set;if(this._config.show_battery===!1)for(let a of e.bindings.battery??[])i.add(a);if(this._config.show_signal===!1)for(let a of e.bindings.signal??[])i.add(a);return[...new Set([...e.entities.filter(a=>!a.disabled_by&&!a.hidden_by&&!a.hidden).map(a=>a.entity_id),...Object.values(e.bindings).flatMap(a=>a??[])])].filter(a=>!i.has(a)).sort()}_display(e){return!e||e.state==="unknown"?this.t("unknown"):$(e)?this.t("unavailable"):["binary_sensor","switch","light","siren"].includes(y(e.entity_id))&&["on","off"].includes(e.state)?this.t(e.state):zt(this.hass,e)}_metricIcon(e){return["power","energy","voltage","current"].includes(e)?"energy":["co2","pm25","voc"].includes(e)?"air":e==="illuminance"?"light":e==="action"?"remote":e}_entityRow(e){let i=this.hass?.states[e];return p`<button
      class="entity-row"
      @click=${()=>this._moreInfo(e)}
      title=${e}
    >
      <span>${i?.attributes.friendly_name??e}</span
      ><span>${this._display(i)}</span>
    </button>`}_renderControl(e){let i=this.hass?.states[e],a=y(e),o=String(i?.attributes.friendly_name??e),r=$(i)||this._busy;if(a==="cover"){let l=Number(i?.attributes.supported_features??0),n=[{flag:1,key:"open",service:"open_cover"},{flag:8,key:"stop",service:"stop_cover"},{flag:2,key:"close",service:"close_cover"}].filter(c=>l&c.flag);return n.length?n.map(c=>p`<button
            class="action"
            ?disabled=${r}
            aria-label=${`${this.t(c.key)} ${o}`}
            @click=${()=>this._command(e,c.service)}
          >
            ${S(c.key==="stop"?"stop":"cover",16)}${this.t(c.key)}
          </button>`):p`<button class="action" @click=${()=>this._moreInfo(e)}>
          ${S("cover",16)}${o}
        </button>`}if(a==="siren")return p`<button
        class="action"
        ?disabled=${r}
        @click=${()=>this._moreInfo(e)}
      >
        ${S("bell",16)}${o}
      </button>`;let d=i?.state==="on"?"turn_off":"turn_on";return p`<button
      class="action"
      ?disabled=${r}
      @click=${()=>this._command(e,d)}
    >
      ${S("power",16)}${o} · ${this.t(d)}
    </button>`}async _command(e,i){if(!(!this.hass||this._busy||$(this.hass.states[e]))){this._busy=!0,this._serviceError=!1;try{await this.hass.callService(y(e),i,{entity_id:e})}catch{this._serviceError=!0}finally{this._busy=!1}}}},Ke={type:"heiman-device-card",name:"HEIMAN Dashboard",description:`HEIMAN \xB7 Zigbee2MQTT / ZHA \xB7 ${j.length} models \xB7 Home / Fire safety / Minimal`,preview:!0};var _e=class extends K{constructor(){super(...arguments);this._search="";this._inputError=""}static{this.properties={_search:{state:!0},_inputError:{state:!0}}}static{this.styles=R`
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
  `}render(){let e=this.hass;if(!e)return m;let i=q(this._config,e,this._registry),a=this._search.toLowerCase().trim(),o=j.filter(n=>[n.id,n.description,this.t(n.kind),...n.aliases].some(c=>c.toLowerCase().includes(a))||n.id===this._config.model),r=[...new Set(o.map(n=>n.kind))],d=[...new Set([...i.preset?Ge[i.preset.kind]??[]:Ve,"battery","battery_low","temperature","humidity","signal","fault","tamper","test","muted",...Object.keys(this._config.entities??{})])],l=i.device?this._registry.entities.filter(n=>n.device_id===i.device.id&&!n.disabled_by).map(n=>n.entity_id):Object.keys(e.states).slice(0,500);return p`
      <div class="intro">
        <div class="brand">HEIMAN DASHBOARD</div>
        <p>${this.t("device_help")}</p>
      </div>
      <label for="model"
        >${this.t("model")}<span class="count"
          >${o.length} / ${j.length}</span
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
        ${r.map(n=>p`<optgroup label=${this.t(n)}>${o.filter(c=>c.kind===n).map(c=>p`<option value=${c.id} .selected=${this._config.model===c.id}>${c.id}</option>`)}</optgroup>`)}
      </select>
      <label for="device">${this.t("device")}</label>
      <select id="device" @change=${this._deviceChanged}>
        <option value="" .selected=${!this._config.device_id}>
          ${this.t("auto")}${i.candidates.length===1?` \xB7 ${i.candidates[0].name_by_user||i.candidates[0].name||i.candidates[0].model}`:""}
        </option>
        ${this._config.device_id&&!i.candidates.some(n=>n.id===this._config.device_id)?p`<option value=${this._config.device_id} selected>${this._config.device_id}</option>`:m}
        ${i.candidates.map(n=>p`<option value=${n.id} .selected=${this._config.device_id===n.id}>${n.name_by_user||n.name||n.model} · ${n.model}</option>`)}
      </select>
      ${this._loading?p`<div class="help">${this.t("loading")}</div>`:m}
      ${this._registryError?p`<div class="error">${this.t("registry_error")}<button class="retry" @click=${()=>this._syncRegistry(!0)}>${this.t("retry")}</button></div>`:m}
      ${i.reason?p`<div class="help status">${this.t(i.reason)}</div>`:p`<div class="help status selection">${S(me[i.preset?.kind??"smoke"],16)}${i.preset?.id} · ${i.entities.length} ${this.t("details")}</div>`}
      <label>${this.t("style")}</label>
      <div class="styles" role="group" aria-label=${this.t("style")}>
        ${["home","fire","minimal"].map(n=>p`<button class=${`style ${n}`} aria-pressed=${String(this._config.style===n)} @click=${()=>this._change({style:n})}>${S(n==="home"?"door":n==="fire"?"smoke":"settings",18)}${this.t(n)}</button>`)}
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
        ${[["auto",this.t("follow_system")],...Object.entries(G)].map(([n,c])=>p`<option
              value=${n}
              .selected=${this._config.language===n}
            >
              ${c}
            </option>`)}
      </select>
      <div class="toggles">
        ${["show_battery","show_signal","show_controls","show_details"].map(n=>p`<label class="toggle"><input type="checkbox" .checked=${this._config[n]!==!1} @change=${c=>this._change({[n]:c.target.checked})} />${this.t(n)}</label>`)}
      </div>
      <details>
        <summary>${this.t("advanced")}</summary>
        <p class="help">${this.t("assignments_help")}</p>
        <datalist id="entity-options">
          ${l.sort().map(n=>p`<option value=${n}>${e.states[n]?.attributes.friendly_name??n}</option>`)}
        </datalist>
        <label for="primary">${this.t("config_entity")}</label>
        <input
          id="primary"
          list="entity-options"
          .value=${this._config.entity??""}
          placeholder="binary_sensor.…"
          @change=${n=>this._change({entity:n.target.value||void 0})}
        />
        ${d.map(n=>p`<label for=${`entity-${n}`}>${this.t(n)}</label><input id=${`entity-${n}`} list="entity-options" .value=${this._config.entities?.[n]??""} placeholder=${i.bindings[n]?.join(", ")??this.t("auto")} @change=${c=>this._overrideChanged(n,c.target.value)} /> `)}
      </details>
      ${this._inputError?p`<div class="error" role="alert">${this._inputError}</div>`:m}
    `}_change(e){let i={...this._config,...e};for(let a of Object.keys(i))i[a]===void 0&&delete i[a];try{this.setConfig(i),this._inputError=""}catch(a){this._inputError=a.message;return}this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_modelChanged(e){let i=e.target.value,a={...this._config,model:i,device_id:void 0,entity:void 0,entities:{}},o=this.hass?q(a,this.hass,this._registry):void 0;this._change({model:i,device_id:o?.candidates.length===1?o.candidates[0].id:void 0,entity:void 0,entities:{}})}_deviceChanged(e){this._change({device_id:e.target.value||void 0,entity:void 0,entities:{}})}_overrideChanged(e,i){let a={...this._config.entities};i?a[e]=i.trim():delete a[e],this._change({entities:a})}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Mt=s=>(...t)=>({_$litDirective$:s,values:t}),ve=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var{I:Hs}=vt;var Ct=s=>s.strings===void 0;var li={},Ht=(s,t=li)=>s._$AH=t;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ze=Mt(class extends ve{constructor(s){if(super(s),s.type!==W.PROPERTY&&s.type!==W.ATTRIBUTE&&s.type!==W.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ct(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===w||t===m)return t;let e=s.element,i=s.name;if(s.type===W.PROPERTY){if(t===e[i])return w}else if(s.type===W.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(i))return w}else if(s.type===W.ATTRIBUTE&&e.getAttribute(i)===t+"")return w;return Ht(s),t}});var Tt=s=>!!(s&&s.state!=="unavailable");function B(s){let t=y(s.entity_id),e=`${s.translation_key??""}_${s.entity_id.split(".")[1]}`.toLowerCase();return t==="siren"||t==="select"&&/siren_for_automation/.test(e)?"siren":t==="button"&&/self_?test|remote_test|self_check/.test(e)?"self_test":["switch","button","select"].includes(t)&&/mute|silence|hush/.test(e)?"mute":/indicator|heartbeat|backlight|(?:^|_)led(?:_|$)/.test(e)?"indicator":"other"}function Rt(s){let t=B(s);if(t==="self_test")return"remote_self_test";if(t==="mute")return"temporary_mute";if(t==="indicator")return"indicator";if(t==="siren")return"siren";let e=`${s.translation_key??""}_${s.entity_id}`;if(/default_siren_tone/.test(e))return"tone";if(/default_siren_level/.test(e))return"volume";if(/default_strobe_level/.test(e))return"strobe_level";if(/default_strobe/.test(e))return"strobe";if(/temperature_offset/.test(e))return"temperature_offset";if(/humidity_offset/.test(e))return"humidity_offset";if(/sensitivity/.test(e))return"sensitivity";if(/identify/.test(e))return"identify"}function Nt(s,t){if(!t.trim())throw new Error("invalid_value");let e=Number(t),i=Number(s.attributes.min),a=Number(s.attributes.max),o=Number(s.attributes.step);if(!Number.isFinite(e)||Number.isFinite(i)&&e<i||Number.isFinite(a)&&e>a)throw new Error("invalid_value");if(Number.isFinite(o)&&o>0){let r=(e-(Number.isFinite(i)?i:0))/o;if(Math.abs(r-Math.round(r))>1e-6)throw new Error("invalid_value")}return e}function Qe(s){let t=s.attributes.available_tones;return Array.isArray(t)?t.filter(e=>typeof e=="string"||typeof e=="number").map((e,i)=>({value:String(i),label:String(e),serviceValue:e})):t&&typeof t=="object"?Object.entries(t).filter(([,e])=>typeof e=="string").map(([e,i])=>({value:e,label:String(i),serviceValue:String(i)})):[]}function Pt(s,t){let e=Number(s.attributes.supported_features??0),i={};if(e&4&&t.tone!==void 0&&t.tone!==""){let a=Qe(s).find(o=>o.value===t.tone);if(!a)throw new Error("invalid_value");i.tone=a.serviceValue}if(e&16&&t.duration?.trim()){let a=Number(t.duration);if(!Number.isInteger(a)||a<1||a>65535)throw new Error("invalid_value");i.duration=a}if(e&8&&t.volume?.trim()){let a=Number(t.volume);if(!Number.isFinite(a)||a<0||a>100)throw new Error("invalid_value");i.volume_level=a/100}return i}var ye=class extends k{constructor(){super(...arguments);this.entities=[];this.language="en";this.disabled=!1;this.expanded=!0;this.urgent=!1;this._pending=new Map;this._failed=!1;this._sequence=0;this._drafts=new Map;this._sirens=new Map}static{this.properties={hass:{attribute:!1},entities:{attribute:!1},language:{attribute:!1},disabled:{type:Boolean},expanded:{type:Boolean},urgent:{type:Boolean},_pending:{state:!0},_feedback:{state:!0},_failed:{state:!0}}}static{this.styles=R`
    :host {
      display: block;
      font: inherit;
      color: var(--ink);
    }
    * {
      box-sizing: border-box;
    }
    [hidden] {
      display: none !important;
    }
    .full {
      border-top: 1px solid var(--line);
      padding-top: 10px;
      margin-top: 4px;
    }
    .emergency {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding: 4px 0 6px;
    }
    .emergency button {
      flex: 1;
      border-color: var(--status-color);
      color: var(--status-color);
      background: var(--status-bg);
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
  `}t(e){return ge(this.language,e)}label(e){let i=Rt(e);return(i?this.t(i):void 0)||e.name||e.original_name||String(this.hass?.states[e.entity_id]?.attributes.friendly_name??e.entity_id)}blocked(e){return this.disabled||!Tt(this.hass?.states[e])}busy(e){return(this._pending.get(e)??0)>0}stateLabel(e,i=z(e)){return this.disabled||e.state==="unavailable"?this.t("unavailable"):this.t(e.state==="unknown"?"unknown":i?"on":"off")}render(){if(!this.hass||!this.entities.length)return m;let e=this.entities.filter(n=>this.hass.states[n.entity_id]),i=e.filter(n=>["self_test","mute"].includes(B(n))&&y(n.entity_id)!=="select"),a=e.filter(n=>B(n)==="siren"),o=e.filter(n=>B(n)==="indicator"),r=e.filter(n=>!i.includes(n)&&!a.includes(n)&&!o.includes(n)),d=a.filter(n=>{let c=this.hass.states[n.entity_id];return y(n.entity_id)==="siren"?z(c):Array.isArray(c.attributes.options)&&c.attributes.options.includes(c.state)&&!["stop","off"].includes(c.state.toLowerCase())}),l=this.urgent?i.filter(n=>B(n)==="mute"):[];return p`
      ${!this.expanded&&(d.length||l.length)?p`<div class="emergency">
              ${l.map(n=>p`<button data-entity=${n.entity_id} ?disabled=${this.blocked(n.entity_id)||this.busy(n.entity_id)} @click=${()=>this._send(n.entity_id,y(n.entity_id)==="button"?"press":"turn_on")}>${S("bell",14)}${this.label(n)}</button>`)}${d.map(n=>{let c=this.hass.states[n.entity_id];if(y(n.entity_id)==="siren")return Number(c.attributes.supported_features)&2?p`<button
                          class="emergency-stop"
                          data-entity=${n.entity_id}
                          ?disabled=${this.blocked(n.entity_id)}
                          @click=${()=>this._send(n.entity_id,"turn_off",{},!0)}
                        >
                          ${S("stop",14)}${this.t("siren_off")}
                        </button>`:m;let u=c.attributes.options.find(f=>["stop","off"].includes(f.toLowerCase()));return u?p`<button
                        class="emergency-stop"
                        data-entity=${n.entity_id}
                        ?disabled=${this.blocked(n.entity_id)}
                        @click=${()=>this._send(n.entity_id,"select_option",{option:u},!0)}
                      >
                        ${S("stop",14)}${this.t("siren_off")}
                      </button>`:m})}
            </div>`:m}
      <div class="full" ?hidden=${!this.expanded}>
        ${i.length?p`<div class="quick">${i.map(n=>p`<button data-entity=${n.entity_id} ?disabled=${this.blocked(n.entity_id)||this.busy(n.entity_id)} @click=${()=>this._send(n.entity_id,y(n.entity_id)==="button"?"press":"turn_on")}>${S(B(n)==="self_test"?"check":"bell",16)}${this.label(n)}</button>`)}</div>`:m}
        ${a.map(n=>this.renderSiren(n))}
        ${o.map(n=>this.renderSetting(n))}
        ${r.map(n=>this.renderSetting(n))}
      </div>
      ${this._feedback?p`<div class=${`feedback${this._failed?" error":""}`} role=${this._failed?"alert":"status"}>${this.t(this._pending.size?"sending":this._feedback)}</div>`:m}
    `}renderSetting(e){let i=e.entity_id,a=this.hass.states[i],o=y(i),r=this.label(e),d=this.blocked(i)||this.busy(i);if(o==="switch")return p`<div class="row">
        <label for=${i}>${r}</label
        ><span class="field"
          ><span class="state">${this.stateLabel(a)}</span
          ><input
            id=${i}
            type="checkbox"
            role="switch"
            aria-label=${r}
            .checked=${Ze(z(a))}
            ?disabled=${d}
            @change=${l=>this._send(i,l.target.checked?"turn_on":"turn_off")}
        /></span>
      </div>`;if(o==="button")return p`<div class="row">
        <span>${r}</span
        ><button
          data-entity=${i}
          ?disabled=${d}
          @click=${()=>this._send(i,"press")}
        >
          ${this.t("execute")}
        </button>
      </div>`;if(o==="select"){let l=Array.isArray(a.attributes.options)?a.attributes.options.map(String):[];return p`<div class="row">
        <label for=${i}>${r}</label
        ><span class="field"
          ><select
            id=${i}
            aria-label=${r}
            .value=${Ze(a.state)}
            ?disabled=${d}
            @change=${n=>{let c=n.target.value;l.includes(c)&&this._send(i,"select_option",{option:c})}}
          >
            ${l.includes(a.state)?m:p`<option value=${a.state} selected disabled>${this.t(a.state==="unavailable"?"unavailable":"unknown")}</option>`}${l.map(n=>p`<option value=${n} .selected=${n===a.state}>${this.optionLabel(n)}</option>`)}
          </select></span
        >
      </div>`}if(o==="number"||o==="text"){let l=this._drafts.get(i)??(a.state==="unknown"||a.state==="unavailable"?"":a.state);return p`<form
        novalidate
        class="row"
        @submit=${n=>{n.preventDefault();try{let c=this._drafts.get(i)??l,u=o==="number"?Nt(a,c):c;this._send(i,"set_value",{value:u}).then(f=>{f&&(this._drafts.delete(i),this.requestUpdate())})}catch{this._feedback="invalid_value",this._failed=!0}}}
      >
        <label for=${i}>${r}</label
        ><span class="field"
          ><input
            id=${i}
            aria-label=${r}
            type=${o==="number"?"number":"text"}
            min=${a.attributes.min??m}
            max=${a.attributes.max??m}
            step=${a.attributes.step??"any"}
            .value=${l}
            placeholder=${this.t(this.blocked(i)?"unavailable":"unknown")}
            ?disabled=${d}
            required
            @input=${n=>this._drafts.set(i,n.target.value)}
          /><span class="state"
            >${a.attributes.unit_of_measurement??""}</span
          ><button type="submit" ?disabled=${d}>
            ${this.t("apply")}
          </button></span
        >
      </form>`}return p`<div class="row">
      <span>${r}</span
      ><button
        @click=${()=>this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i},bubbles:!0,composed:!0}))}
      >
        ${this.t("more_info")}
      </button>
    </div>`}renderSiren(e){let i=e.entity_id,a=this.hass.states[i],o=y(i)==="select",r=Number(a.attributes.supported_features??0),d=this._sirens.get(i)??{},l=o&&Array.isArray(a.attributes.options)?a.attributes.options.map(String):[],n=l.find(_=>["stop","off"].includes(_.toLowerCase())),c=o?l.filter(_=>_!==n).map(_=>({value:_,label:this.optionLabel(_)})):Qe(a),u=d.tone??(o?a.state!==n&&l.includes(a.state)?a.state:c[0]?.value??"":""),f=this.blocked(i),v=this.busy(i),b=(_,A)=>this._sirens.set(i,{...this._sirens.get(i),[_]:A}),g=()=>{try{if(o){if(!c.some(_=>_.value===u))throw new Error;this._send(i,"select_option",{option:u})}else{let _=this._sirens.get(i)??{};this._send(i,"turn_on",Pt(a,{..._,tone:_.tone??u}))}}catch{this._feedback="invalid_value",this._failed=!0}};return p`<div class="siren" data-entity=${i}>
      <div class="siren-title">
        <span>${S("bell",15)} ${this.t("siren")}</span
        ><span class="state"
          >${this.stateLabel(a,o?a.state!==n:z(a))}</span
        >
      </div>
      <div class="quick">
        ${o||r&1?p`<button class="siren-on" ?disabled=${f||v||o&&!c.length} @click=${g}>${this.t("siren_on")}</button>`:m}${o?n?p`<button class="stop siren-off" ?disabled=${f} @click=${()=>this._send(i,"select_option",{option:n},!0)}>${this.t("siren_off")}</button>`:m:r&2?p`<button class="stop siren-off" ?disabled=${f} @click=${()=>this._send(i,"turn_off",{},!0)}>${this.t("siren_off")}</button>`:m}
      </div>
      ${c.length||!o&&(r&8||r&16)?p`<details>
              <summary>${this.t("siren_options")}</summary>
              ${c.length?p`<div class="row">
                      <label for=${`tone-${i}`}>${this.t("tone")}</label
                      ><select
                        id=${`tone-${i}`}
                        aria-label=${this.t("tone")}
                        .value=${u}
                        ?disabled=${f||v}
                        @change=${_=>{b("tone",_.target.value),this.requestUpdate()}}
                      >
                        ${o?m:p`<option value="" .selected=${u===""}>${this.t("device_default")}</option>`}${c.map(_=>p`<option value=${_.value} .selected=${u===_.value}>${this.optionLabel(_.label)}</option>`)}
                      </select>
                    </div>`:m}${!o&&r&16?p`<div class="row">
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
                          .value=${d.duration??""}
                          ?disabled=${f||v}
                          @input=${_=>b("duration",_.target.value)}
                        /><span class="state">${this.t("seconds")}</span></span
                      >
                    </div>`:m}${!o&&r&8?p`<div class="row">
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
                          .value=${d.volume??""}
                          ?disabled=${f||v}
                          @input=${_=>b("volume",_.target.value)}
                        /><span class="state">%</span></span
                      >
                    </div>`:m}
            </details>`:m}
    </div>`}optionLabel(e){let i={stop:"stop",Stop:"stop",off:"off",on:"on",smoke_siren:"smoke_sound",co_siren:"co_sound",mute:"temporary_mute",low:"low",medium:"medium",high:"high","Low level sound":"low","Medium level sound":"medium","High level sound":"high","Very high level sound":"very_high","Low level strobe":"low","Medium level strobe":"medium","High level strobe":"high","Very high level strobe":"very_high","No Strobe":"off",Strobe:"on",Burglar:"burglar",Fire:"fire_sound",Emergency:"emergency","Police Panic":"police_panic","Fire Panic":"fire_panic","Emergency Panic":"emergency_panic"};return i[e]?this.t(i[e]):e}async _send(e,i,a={},o=!1){if(!this.hass||this.blocked(e)||this.busy(e)&&!o)return!1;let r=++this._sequence;this._pending=new Map(this._pending).set(e,(this._pending.get(e)??0)+1),this._feedback="sending",this._failed=!1;try{return await this.hass.callService(y(e),i,{...a,entity_id:e}),r===this._sequence&&(this._feedback="command_sent"),!0}catch{return r===this._sequence&&(this._feedback="service_error",this._failed=!0),!1}finally{let d=new Map(this._pending),l=(d.get(e)??1)-1;l?d.set(e,l):d.delete(e),this._pending=d}}};customElements.get("heiman-entity-controls")||customElements.define("heiman-entity-controls",ye);customElements.get("heiman-device-card-editor")||customElements.define("heiman-device-card-editor",_e);customElements.get("heiman-device-card")||customElements.define("heiman-device-card",fe);window.customCards??=[];window.customCards.some(s=>s.type===Ke.type)||window.customCards.push(Ke);console.info("HEIMAN Dashboard 0.1.0");
