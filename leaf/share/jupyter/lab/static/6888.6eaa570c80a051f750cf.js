"use strict";(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[6888],{16888:(t,e,n)=>{n.d(e,{Be:()=>y,Dv:()=>et,Gn:()=>j,K0:()=>E,Qf:()=>Tt,R_:()=>$t,SQ:()=>c,SS:()=>L,Um:()=>Gt,c:()=>N,c6:()=>B,il:()=>ee,kU:()=>u,l:()=>m,mi:()=>Ct,n$:()=>Jt,nF:()=>Nt,nY:()=>Y,pp:()=>f,qp:()=>p,qz:()=>g,ri:()=>D,tC:()=>K,uj:()=>R,vw:()=>Q,x0:()=>tt,y1:()=>M,ze:()=>H});var s=n(72104);var r=n(74405);var i=n(54986);var o=n(96006);var l=n.n(o);var a=n(14043);var h;const f=new s.md;function u(t){return r.r$.define({combine:t?e=>e.concat(t):undefined})}class c{constructor(t,e,n=[]){this.data=t;if(!r.yy.prototype.hasOwnProperty("tree"))Object.defineProperty(r.yy.prototype,"tree",{get(){return g(this)}});this.parser=e;this.extension=[T.of(this),r.yy.languageData.of(((t,e,n)=>t.facet(d(t,e,n))))].concat(n)}isActiveAt(t,e,n=-1){return d(t,e,n)==this.data}findRegions(t){let e=t.facet(T);if((e===null||e===void 0?void 0:e.data)==this.data)return[{from:0,to:t.doc.length}];if(!e||!e.allowsNesting)return[];let n=[];let r=(t,e)=>{if(t.prop(f)==this.data){n.push({from:e,to:e+t.length});return}let i=t.prop(s.md.mounted);if(i){if(i.tree.prop(f)==this.data){if(i.overlay)for(let t of i.overlay)n.push({from:t.from+e,to:t.to+e});else n.push({from:e,to:e+t.length});return}else if(i.overlay){let t=n.length;r(i.tree,i.overlay[0].from+e);if(n.length>t)return}}for(let n=0;n<t.children.length;n++){let i=t.children[n];if(i instanceof s.mp)r(i,t.positions[n]+e)}};r(g(t),0);return n}get allowsNesting(){return true}}c.setState=r.Py.define();function d(t,e,n){let r=t.facet(T);if(!r)return null;let i=r.data;if(r.allowsNesting){for(let r=g(t).topNode;r;r=r.enter(e,n,s.vj.ExcludeBuffers))i=r.type.prop(f)||i}return i}class p extends c{constructor(t,e){super(t,e);this.parser=e}static define(t){let e=u(t.languageData);return new p(e,t.parser.configure({props:[f.add((t=>t.isTop?e:undefined))]}))}configure(t){return new p(this.data,this.parser.configure(t))}get allowsNesting(){return this.parser.hasWrappers()}}function g(t){let e=t.field(c.state,false);return e?e.tree:s.mp.empty}function m(t,e,n=50){var s;let r=(s=t.field(c.state,false))===null||s===void 0?void 0:s.context;return!r?null:r.isDone(e)||r.work(n,e)?r.tree:null}function k(t,e=t.doc.length){var n;return((n=t.field(c.state,false))===null||n===void 0?void 0:n.context.isDone(e))||false}function w(t,e=t.viewport.to,n=100){let s=m(t.state,e,n);if(s!=g(t.state))t.dispatch({});return!!s}function v(t){var e;return((e=t.plugin(O))===null||e===void 0?void 0:e.isWorking())||false}class b{constructor(t,e=t.length){this.doc=t;this.length=e;this.cursorPos=0;this.string="";this.cursor=t.iter()}syncTo(t){this.string=this.cursor.next(t-this.cursorPos).value;this.cursorPos=t+this.string.length;return this.cursorPos-this.string.length}chunk(t){this.syncTo(t);return this.string}get lineChunks(){return true}read(t,e){let n=this.cursorPos-this.string.length;if(t<n||e>=this.cursorPos)return this.doc.sliceString(t,e);else return this.string.slice(t-n,e-n)}}let x=null;class y{constructor(t,e,n=[],s,r,i,o,l){this.parser=t;this.state=e;this.fragments=n;this.tree=s;this.treeLen=r;this.viewport=i;this.skipped=o;this.scheduleOn=l;this.parse=null;this.tempSkipped=[]}static create(t,e,n){return new y(t,e,[],s.mp.empty,0,n,[],null)}startParse(){return this.parser.startParse(new b(this.state.doc),this.fragments)}work(t,e){if(e!=null&&e>=this.state.doc.length)e=undefined;if(this.tree!=s.mp.empty&&this.isDone(e!==null&&e!==void 0?e:this.state.doc.length)){this.takeTree();return true}return this.withContext((()=>{var n;if(typeof t=="number"){let e=Date.now()+t;t=()=>Date.now()>e}if(!this.parse)this.parse=this.startParse();if(e!=null&&(this.parse.stoppedAt==null||this.parse.stoppedAt>e)&&e<this.state.doc.length)this.parse.stopAt(e);for(;;){let r=this.parse.advance();if(r){this.fragments=this.withoutTempSkipped(s.i9.addTree(r,this.fragments,this.parse.stoppedAt!=null));this.treeLen=(n=this.parse.stoppedAt)!==null&&n!==void 0?n:this.state.doc.length;this.tree=r;this.parse=null;if(this.treeLen<(e!==null&&e!==void 0?e:this.state.doc.length))this.parse=this.startParse();else return true}if(t())return false}}))}takeTree(){let t,e;if(this.parse&&(t=this.parse.parsedPos)>=this.treeLen){if(this.parse.stoppedAt==null||this.parse.stoppedAt>t)this.parse.stopAt(t);this.withContext((()=>{while(!(e=this.parse.advance())){}}));this.treeLen=t;this.tree=e;this.fragments=this.withoutTempSkipped(s.i9.addTree(this.tree,this.fragments,true));this.parse=null}}withContext(t){let e=x;x=this;try{return t()}finally{x=e}}withoutTempSkipped(t){for(let e;e=this.tempSkipped.pop();)t=S(t,e.from,e.to);return t}changes(t,e){let{fragments:n,tree:r,treeLen:i,viewport:o,skipped:l}=this;this.takeTree();if(!t.empty){let e=[];t.iterChangedRanges(((t,n,s,r)=>e.push({fromA:t,toA:n,fromB:s,toB:r})));n=s.i9.applyChanges(n,e);r=s.mp.empty;i=0;o={from:t.mapPos(o.from,-1),to:t.mapPos(o.to,1)};if(this.skipped.length){l=[];for(let e of this.skipped){let n=t.mapPos(e.from,1),s=t.mapPos(e.to,-1);if(n<s)l.push({from:n,to:s})}}}return new y(this.parser,e,n,r,i,o,l,this.scheduleOn)}updateViewport(t){if(this.viewport.from==t.from&&this.viewport.to==t.to)return false;this.viewport=t;let e=this.skipped.length;for(let n=0;n<this.skipped.length;n++){let{from:e,to:s}=this.skipped[n];if(e<t.to&&s>t.from){this.fragments=S(this.fragments,e,s);this.skipped.splice(n--,1)}}if(this.skipped.length>=e)return false;this.reset();return true}reset(){if(this.parse){this.takeTree();this.parse=null}}skipUntilInView(t,e){this.skipped.push({from:t,to:e})}static getSkippingParser(t){return new class extends s._b{createParse(e,n,r){let i=r[0].from,o=r[r.length-1].to;let l={parsedPos:i,advance(){let e=x;if(e){for(let t of r)e.tempSkipped.push(t);if(t)e.scheduleOn=e.scheduleOn?Promise.all([e.scheduleOn,t]):t}this.parsedPos=o;return new s.mp(s.Jq.none,[],[],o-i)},stoppedAt:null,stopAt(){}};return l}}}isDone(t){t=Math.min(t,this.state.doc.length);let e=this.fragments;return this.treeLen>=t&&e.length&&e[0].from==0&&e[0].to>=t}static get(){return x}}function S(t,e,n){return s.i9.applyChanges(t,[{fromA:e,toA:n,fromB:e,toB:n}])}class A{constructor(t){this.context=t;this.tree=t.tree}apply(t){if(!t.docChanged&&this.tree==this.context.tree)return this;let e=this.context.changes(t.changes,t.state);let n=this.context.treeLen==t.startState.doc.length?undefined:Math.max(t.changes.mapPos(this.context.treeLen),e.viewport.to);if(!e.work(20,n))e.takeTree();return new A(e)}static init(t){let e=Math.min(3e3,t.doc.length);let n=y.create(t.facet(T).parser,t,{from:0,to:e});if(!n.work(20,e))n.takeTree();return new A(n)}}c.state=r.QQ.define({create:A.init,update(t,e){for(let n of e.effects)if(n.is(c.setState))return n.value;if(e.startState.facet(T)!=e.state.facet(T))return A.init(e.state);return t.apply(e)}});let P=t=>{let e=setTimeout((()=>t()),500);return()=>clearTimeout(e)};if(typeof requestIdleCallback!="undefined")P=t=>{let e=-1,n=setTimeout((()=>{e=requestIdleCallback(t,{timeout:500-100})}),100);return()=>e<0?clearTimeout(n):cancelIdleCallback(e)};const C=typeof navigator!="undefined"&&((h=navigator.scheduling)===null||h===void 0?void 0:h.isInputPending)?()=>navigator.scheduling.isInputPending():null;const O=i.lg.fromClass(class t{constructor(t){this.view=t;this.working=null;this.workScheduled=0;this.chunkEnd=-1;this.chunkBudget=-1;this.work=this.work.bind(this);this.scheduleWork()}update(t){let e=this.view.state.field(c.state).context;if(e.updateViewport(t.view.viewport)||this.view.viewport.to>e.treeLen)this.scheduleWork();if(t.docChanged){if(this.view.hasFocus)this.chunkBudget+=50;this.scheduleWork()}this.checkAsyncSchedule(e)}scheduleWork(){if(this.working)return;let{state:t}=this.view,e=t.field(c.state);if(e.tree!=e.context.tree||!e.context.isDone(t.doc.length))this.working=P(this.work)}work(t){this.working=null;let e=Date.now();if(this.chunkEnd<e&&(this.chunkEnd<0||this.view.hasFocus)){this.chunkEnd=e+3e4;this.chunkBudget=3e3}if(this.chunkBudget<=0)return;let{state:n,viewport:{to:s}}=this.view,r=n.field(c.state);if(r.tree==r.context.tree&&r.context.isDone(s+1e5))return;let i=Date.now()+Math.min(this.chunkBudget,100,t&&!C?Math.max(25,t.timeRemaining()-5):1e9);let o=r.context.treeLen<s&&n.doc.length>s+1e3;let l=r.context.work((()=>C&&C()||Date.now()>i),s+(o?0:1e5));this.chunkBudget-=Date.now()-e;if(l||this.chunkBudget<=0){r.context.takeTree();this.view.dispatch({effects:c.setState.of(new A(r.context))})}if(this.chunkBudget>0&&!(l&&!o))this.scheduleWork();this.checkAsyncSchedule(r.context)}checkAsyncSchedule(t){if(t.scheduleOn){this.workScheduled++;t.scheduleOn.then((()=>this.scheduleWork())).catch((t=>(0,i.OO)(this.view.state,t))).then((()=>this.workScheduled--));t.scheduleOn=null}}destroy(){if(this.working)this.working()}isWorking(){return!!(this.working||this.workScheduled>0)}},{eventHandlers:{focus(){this.scheduleWork()}}});const T=r.r$.define({combine(t){return t.length?t[0]:null},enables:[c.state,O]});class D{constructor(t,e=[]){this.language=t;this.support=e;this.extension=[t,e]}}class B{constructor(t,e,n,s,r,i=undefined){this.name=t;this.alias=e;this.extensions=n;this.filename=s;this.loadFunc=r;this.support=i;this.loading=null}load(){return this.loading||(this.loading=this.loadFunc().then((t=>this.support=t),(t=>{this.loading=null;throw t})))}static of(t){let{load:e,support:n}=t;if(!e){if(!n)throw new RangeError("Must pass either 'load' or 'support' to LanguageDescription.of");e=()=>Promise.resolve(n)}return new B(t.name,(t.alias||[]).concat(t.name).map((t=>t.toLowerCase())),t.extensions||[],t.filename,e,n)}static matchFilename(t,e){for(let s of t)if(s.filename&&s.filename.test(e))return s;let n=/\.([^.]+)$/.exec(e);if(n)for(let s of t)if(s.extensions.indexOf(n[1])>-1)return s;return null}static matchLanguageName(t,e,n=true){e=e.toLowerCase();for(let s of t)if(s.alias.some((t=>t==e)))return s;if(n)for(let s of t)for(let t of s.alias){let n=e.indexOf(t);if(n>-1&&(t.length>2||!/\w/.test(e[n-1])&&!/\w/.test(e[n+t.length])))return s}return null}}const I=r.r$.define();const N=r.r$.define({combine:t=>{if(!t.length)return"  ";if(!/^(?: +|\t+)$/.test(t[0]))throw new Error("Invalid indent unit: "+JSON.stringify(t[0]));return t[0]}});function M(t){let e=t.facet(N);return e.charCodeAt(0)==9?t.tabSize*e.length:e.length}function L(t,e){let n="",s=t.tabSize;if(t.facet(N).charCodeAt(0)==9)while(e>=s){n+="\t";e-=s}for(let r=0;r<e;r++)n+=" ";return n}function E(t,e){if(t instanceof r.yy)t=new j(t);for(let s of t.state.facet(I)){let n=s(t,e);if(n!=null)return n}let n=g(t.state);return n?U(t,n,e):null}function $(t,e,n){let s=Object.create(null);let r=new j(t,{overrideIndentation:t=>{var e;return(e=s[t])!==null&&e!==void 0?e:-1}});let i=[];for(let o=e;o<=n;){let e=t.doc.lineAt(o);o=e.to+1;let n=E(r,e.from);if(n==null)continue;if(!/\S/.test(e.text))n=0;let l=/^\s*/.exec(e.text)[0];let a=L(t,n);if(l!=a){s[e.from]=n;i.push({from:e.from,to:e.from+l.length,insert:a})}}return t.changes(i)}class j{constructor(t,e={}){this.state=t;this.options=e;this.unit=M(t)}lineAt(t,e=1){let n=this.state.doc.lineAt(t);let{simulateBreak:s,simulateDoubleBreak:r}=this.options;if(s!=null&&s>=n.from&&s<=n.to){if(r&&s==t)return{text:"",from:t};else if(e<0?s<t:s<=t)return{text:n.text.slice(s-n.from),from:s};else return{text:n.text.slice(0,s-n.from),from:n.from}}return n}textAfterPos(t,e=1){if(this.options.simulateDoubleBreak&&t==this.options.simulateBreak)return"";let{text:n,from:s}=this.lineAt(t,e);return n.slice(t-s,Math.min(n.length,t+100-s))}column(t,e=1){let{text:n,from:s}=this.lineAt(t,e);let r=this.countColumn(n,t-s);let i=this.options.overrideIndentation?this.options.overrideIndentation(s):-1;if(i>-1)r+=i-this.countColumn(n,n.search(/\S|$/));return r}countColumn(t,e=t.length){return(0,r.IS)(t,this.state.tabSize,e)}lineIndent(t,e=1){let{text:n,from:s}=this.lineAt(t,e);let r=this.options.overrideIndentation;if(r){let t=r(s);if(t>-1)return t}return this.countColumn(n,n.search(/\S|$/))}get simulatedBreak(){return this.options.simulateBreak||null}}const R=new s.md;function U(t,e,n){return q(e.resolveInner(n).enterUnfinishedNodesBefore(n),n,t)}function W(t){return t.pos==t.options.simulateBreak&&t.options.simulateDoubleBreak}function _(t){let e=t.type.prop(R);if(e)return e;let n=t.firstChild,r;if(n&&(r=n.type.prop(s.md.closedBy))){let e=t.lastChild,n=e&&r.indexOf(e.name)>-1;return t=>G(t,true,1,undefined,n&&!W(t)?e.from:undefined)}return t.parent==null?z:null}function q(t,e,n){for(;t;t=t.parent){let s=_(t);if(s)return s(F.create(n,e,t))}return null}function z(){return 0}class F extends j{constructor(t,e,n){super(t.state,t.options);this.base=t;this.pos=e;this.node=n}static create(t,e,n){return new F(t,e,n)}get textAfter(){return this.textAfterPos(this.pos)}get baseIndent(){let t=this.state.doc.lineAt(this.node.from);for(;;){let e=this.node.resolve(t.from);while(e.parent&&e.parent.from==e.from)e=e.parent;if(V(e,this.node))break;t=this.state.doc.lineAt(e.from)}return this.lineIndent(t.from)}continue(){let t=this.node.parent;return t?q(t,this.pos,this.base):0}}function V(t,e){for(let n=e;n;n=n.parent)if(t==n)return true;return false}function J(t){let e=t.node;let n=e.childAfter(e.from),s=e.lastChild;if(!n)return null;let r=t.options.simulateBreak;let i=t.state.doc.lineAt(n.from);let o=r==null||r<=i.from?i.to:Math.min(i.to,r);for(let l=n.to;;){let t=e.childAfter(l);if(!t||t==s)return null;if(!t.type.isSkipped)return t.from<o?n:null;l=t.to}}function Q({closing:t,align:e=true,units:n=1}){return s=>G(s,e,n,t)}function G(t,e,n,s,r){let i=t.textAfter,o=i.match(/^\s*/)[0].length;let l=s&&i.slice(o,o+s.length)==s||r==t.pos+o;let a=e?J(t):null;if(a)return l?t.column(a.from):t.column(a.to);return t.baseIndent+(l?0:t.unit*n)}const H=t=>t.baseIndent;function K({except:t,units:e=1}={}){return n=>{let s=t&&t.test(n.textAfter);return n.baseIndent+(s?0:e*n.unit)}}const X=200;function Y(){return r.yy.transactionFilter.of((t=>{if(!t.docChanged||!t.isUserEvent("input.type")&&!t.isUserEvent("input.complete"))return t;let e=t.startState.languageDataAt("indentOnInput",t.startState.selection.main.head);if(!e.length)return t;let n=t.newDoc,{head:s}=t.newSelection.main,r=n.lineAt(s);if(s>r.from+X)return t;let i=n.sliceString(r.from,s);if(!e.some((t=>t.test(i))))return t;let{state:o}=t,l=-1,a=[];for(let{head:h}of o.selection.ranges){let t=o.doc.lineAt(h);if(t.from==l)continue;l=t.from;let e=E(o,t.from);if(e==null)continue;let n=/^\s*/.exec(t.text)[0];let s=L(o,e);if(n!=s)a.push({from:t.from,to:t.from+n.length,insert:s})}return a.length?[t,{changes:a,sequential:true}]:t}))}const Z=r.r$.define();const tt=new s.md;function et(t){let e=t.firstChild,n=t.lastChild;return e&&e.to<n.from?{from:e.to,to:n.type.isError?t.to:n.from}:null}function nt(t,e,n){let s=g(t);if(s.length<n)return null;let r=s.resolveInner(n);let i=null;for(let o=r;o;o=o.parent){if(o.to<=n||o.from>n)continue;if(i&&o.from<e)break;let r=o.type.prop(tt);if(r&&(o.to<s.length-50||s.length==t.doc.length||!st(o))){let s=r(o,t);if(s&&s.from<=n&&s.from>=e&&s.to>n)i=s}}return i}function st(t){let e=t.lastChild;return e&&e.to==t.to&&e.type.isError}function rt(t,e,n){for(let s of t.facet(Z)){let r=s(t,e,n);if(r)return r}return nt(t,e,n)}function it(t,e){let n=e.mapPos(t.from,1),s=e.mapPos(t.to,-1);return n>=s?undefined:{from:n,to:s}}const ot=r.Py.define({map:it});const lt=r.Py.define({map:it});function at(t){let e=[];for(let{head:n}of t.state.selection.ranges){if(e.some((t=>t.from<=n&&t.to>=n)))continue;e.push(t.lineBlockAt(n))}return e}const ht=r.QQ.define({create(){return i.p.none},update(t,e){t=t.map(e.changes);for(let n of e.effects){if(n.is(ot)&&!ct(t,n.value.from,n.value.to))t=t.update({add:[St.range(n.value.from,n.value.to)]});else if(n.is(lt))t=t.update({filter:(t,e)=>n.value.from!=t||n.value.to!=e,filterFrom:n.value.from,filterTo:n.value.to})}if(e.selection){let n=false,{head:s}=e.selection.main;t.between(s,s,((t,e)=>{if(t<s&&e>s)n=true}));if(n)t=t.update({filterFrom:s,filterTo:s,filter:(t,e)=>e<=s||t>=s})}return t},provide:t=>i.tk.decorations.from(t),toJSON(t,e){let n=[];t.between(0,e.doc.length,((t,e)=>{n.push(t,e)}));return n},fromJSON(t){if(!Array.isArray(t)||t.length%2)throw new RangeError("Invalid JSON for fold state");let e=[];for(let n=0;n<t.length;){let s=t[n++],r=t[n++];if(typeof s!="number"||typeof r!="number")throw new RangeError("Invalid JSON for fold state");e.push(St.range(s,r))}return i.p.set(e,true)}});function ft(t){return t.field(ht,false)||RangeSet.empty}function ut(t,e,n){var s;let r=null;(s=t.field(ht,false))===null||s===void 0?void 0:s.between(e,n,((t,e)=>{if(!r||r.from>t)r={from:t,to:e}}));return r}function ct(t,e,n){let s=false;t.between(e,e,((t,r)=>{if(t==e&&r==n)s=true}));return s}function dt(t,e){return t.field(ht,false)?e:e.concat(r.Py.appendConfig.of(yt()))}const pt=t=>{for(let e of at(t)){let n=rt(t.state,e.from,e.to);if(n){t.dispatch({effects:dt(t.state,[ot.of(n),mt(t,n)])});return true}}return false};const gt=t=>{if(!t.state.field(ht,false))return false;let e=[];for(let n of at(t)){let s=ut(t.state,n.from,n.to);if(s)e.push(lt.of(s),mt(t,s,false))}if(e.length)t.dispatch({effects:e});return e.length>0};function mt(t,e,n=true){let s=t.state.doc.lineAt(e.from).number,r=t.state.doc.lineAt(e.to).number;return i.tk.announce.of(`${t.state.phrase(n?"Folded lines":"Unfolded lines")} ${s} ${t.state.phrase("to")} ${r}.`)}const kt=t=>{let{state:e}=t,n=[];for(let s=0;s<e.doc.length;){let r=t.lineBlockAt(s),i=rt(e,r.from,r.to);if(i)n.push(ot.of(i));s=(i?t.lineBlockAt(i.to):r).to+1}if(n.length)t.dispatch({effects:dt(t.state,n)});return!!n.length};const wt=t=>{let e=t.state.field(ht,false);if(!e||!e.size)return false;let n=[];e.between(0,t.state.doc.length,((t,e)=>{n.push(lt.of({from:t,to:e}))}));t.dispatch({effects:n});return true};const vt=[{key:"Ctrl-Shift-[",mac:"Cmd-Alt-[",run:pt},{key:"Ctrl-Shift-]",mac:"Cmd-Alt-]",run:gt},{key:"Ctrl-Alt-[",run:kt},{key:"Ctrl-Alt-]",run:wt}];const bt={placeholderDOM:null,placeholderText:"…"};const xt=r.r$.define({combine(t){return(0,r.BO)(t,bt)}});function yt(t){let e=[ht,Ot];if(t)e.push(xt.of(t));return e}const St=i.p.replace({widget:new class extends i.l9{toDOM(t){let{state:e}=t,n=e.facet(xt);let s=e=>{let n=t.lineBlockAt(t.posAtDOM(e.target));let s=ut(t.state,n.from,n.to);if(s)t.dispatch({effects:lt.of(s)});e.preventDefault()};if(n.placeholderDOM)return n.placeholderDOM(t,s);let r=document.createElement("span");r.textContent=n.placeholderText;r.setAttribute("aria-label",e.phrase("folded code"));r.title=e.phrase("unfold");r.className="cm-foldPlaceholder";r.onclick=s;return r}}});const At={openText:"⌄",closedText:"›",markerDOM:null,domEventHandlers:{},foldingChanged:()=>false};class Pt extends i.SJ{constructor(t,e){super();this.config=t;this.open=e}eq(t){return this.config==t.config&&this.open==t.open}toDOM(t){if(this.config.markerDOM)return this.config.markerDOM(this.open);let e=document.createElement("span");e.textContent=this.open?this.config.openText:this.config.closedText;e.title=t.state.phrase(this.open?"Fold line":"Unfold line");return e}}function Ct(t={}){let e=Object.assign(Object.assign({},At),t);let n=new Pt(e,true),s=new Pt(e,false);let o=i.lg.fromClass(class{constructor(t){this.from=t.viewport.from;this.markers=this.buildMarkers(t)}update(t){if(t.docChanged||t.viewportChanged||t.startState.facet(T)!=t.state.facet(T)||t.startState.field(ht,false)!=t.state.field(ht,false)||g(t.startState)!=g(t.state)||e.foldingChanged(t))this.markers=this.buildMarkers(t.view)}buildMarkers(t){let e=new r.f_;for(let r of t.viewportLineBlocks){let i=ut(t.state,r.from,r.to)?s:rt(t.state,r.from,r.to)?n:null;if(i)e.add(r.from,r.from,i)}return e.finish()}});let{domEventHandlers:l}=e;return[o,(0,i.v5)({class:"cm-foldGutter",markers(t){var e;return((e=t.plugin(o))===null||e===void 0?void 0:e.markers)||r.Xs.empty},initialSpacer(){return new Pt(e,false)},domEventHandlers:Object.assign(Object.assign({},l),{click:(t,e,n)=>{if(l.click&&l.click(t,e,n))return true;let s=ut(t.state,e.from,e.to);if(s){t.dispatch({effects:lt.of(s)});return true}let r=rt(t.state,e.from,e.to);if(r){t.dispatch({effects:ot.of(r)});return true}return false}})}),yt()]}const Ot=i.tk.baseTheme({".cm-foldPlaceholder":{backgroundColor:"#eee",border:"1px solid #ddd",color:"#888",borderRadius:".2em",margin:"0 1px",padding:"0 1px",cursor:"pointer"},".cm-foldGutter span":{padding:"0 1px",cursor:"pointer"}});class Tt{constructor(t,e){let n;function s(t){let e=a.V.newName();(n||(n=Object.create(null)))["."+e]=t;return e}const r=typeof e.all=="string"?e.all:e.all?s(e.all):undefined;const i=e.scope;this.scope=i instanceof c?t=>t.prop(f)==i.data:i?t=>t==i:undefined;this.style=(0,o.tagHighlighter)(t.map((t=>({tag:t.tag,class:t.class||s(Object.assign({},t,{tag:null}))}))),{all:r}).style;this.module=n?new a.V(n):null;this.themeType=e.themeType}static define(t,e){return new Tt(t,e||{})}}const Dt=r.r$.define();const Bt=r.r$.define({combine(t){return t.length?[t[0]]:null}});function It(t){let e=t.facet(Dt);return e.length?e:t.facet(Bt)}function Nt(t,e){let n=[Et],s;if(t instanceof Tt){if(t.module)n.push(i.tk.styleModule.of(t.module));s=t.themeType}if(e===null||e===void 0?void 0:e.fallback)n.push(Bt.of(t));else if(s)n.push(Dt.computeN([i.tk.darkTheme],(e=>e.facet(i.tk.darkTheme)==(s=="dark")?[t]:[])));else n.push(Dt.of(t));return n}function Mt(t,e,n){let s=It(t);let r=null;if(s)for(let i of s){if(!i.scope||n&&i.scope(n)){let t=i.style(e);if(t)r=r?r+" "+t:t}}return r}class Lt{constructor(t){this.markCache=Object.create(null);this.tree=g(t.state);this.decorations=this.buildDeco(t,It(t.state))}update(t){let e=g(t.state),n=It(t.state);let s=n!=It(t.startState);if(e.length<t.view.viewport.to&&!s&&e.type==this.tree.type){this.decorations=this.decorations.map(t.changes)}else if(e!=this.tree||t.viewportChanged||s){this.tree=e;this.decorations=this.buildDeco(t.view,n)}}buildDeco(t,e){if(!e||!this.tree.length)return i.p.none;let n=new r.f_;for(let{from:s,to:r}of t.visibleRanges){(0,o.highlightTree)(this.tree,e,((t,e,s)=>{n.add(t,e,this.markCache[s]||(this.markCache[s]=i.p.mark({class:s})))}),s,r)}return n.finish()}}const Et=r.Wl.high(i.lg.fromClass(Lt,{decorations:t=>t.decorations}));const $t=Tt.define([{tag:o.tags.meta,color:"#7a757a"},{tag:o.tags.link,textDecoration:"underline"},{tag:o.tags.heading,textDecoration:"underline",fontWeight:"bold"},{tag:o.tags.emphasis,fontStyle:"italic"},{tag:o.tags.strong,fontWeight:"bold"},{tag:o.tags.strikethrough,textDecoration:"line-through"},{tag:o.tags.keyword,color:"#708"},{tag:[o.tags.atom,o.tags.bool,o.tags.url,o.tags.contentSeparator,o.tags.labelName],color:"#219"},{tag:[o.tags.literal,o.tags.inserted],color:"#164"},{tag:[o.tags.string,o.tags.deleted],color:"#a11"},{tag:[o.tags.regexp,o.tags.escape,o.tags.special(o.tags.string)],color:"#e40"},{tag:o.tags.definition(o.tags.variableName),color:"#00f"},{tag:o.tags.local(o.tags.variableName),color:"#30a"},{tag:[o.tags.typeName,o.tags.namespace],color:"#085"},{tag:o.tags.className,color:"#167"},{tag:[o.tags.special(o.tags.variableName),o.tags.macroName],color:"#256"},{tag:o.tags.definition(o.tags.propertyName),color:"#00c"},{tag:o.tags.comment,color:"#940"},{tag:o.tags.invalid,color:"#f00"}]);const jt=i.tk.baseTheme({"&.cm-focused .cm-matchingBracket":{backgroundColor:"#328c8252"},"&.cm-focused .cm-nonmatchingBracket":{backgroundColor:"#bb555544"}});const Rt=1e4,Ut="()[]{}";const Wt=r.r$.define({combine(t){return(0,r.BO)(t,{afterCursor:true,brackets:Ut,maxScanDistance:Rt,renderMatch:zt})}});const _t=i.p.mark({class:"cm-matchingBracket"}),qt=i.p.mark({class:"cm-nonmatchingBracket"});function zt(t){let e=[];let n=t.matched?_t:qt;e.push(n.range(t.start.from,t.start.to));if(t.end)e.push(n.range(t.end.from,t.end.to));return e}const Ft=r.QQ.define({create(){return i.p.none},update(t,e){if(!e.docChanged&&!e.selection)return t;let n=[];let s=e.state.facet(Wt);for(let r of e.state.selection.ranges){if(!r.empty)continue;let t=Gt(e.state,r.head,-1,s)||r.head>0&&Gt(e.state,r.head-1,1,s)||s.afterCursor&&(Gt(e.state,r.head,1,s)||r.head<e.state.doc.length&&Gt(e.state,r.head+1,-1,s));if(t)n=n.concat(s.renderMatch(t,e.state))}return i.p.set(n,true)},provide:t=>i.tk.decorations.from(t)});const Vt=[Ft,jt];function Jt(t={}){return[Wt.of(t),Vt]}function Qt(t,e,n){let r=t.prop(e<0?s.md.openedBy:s.md.closedBy);if(r)return r;if(t.name.length==1){let s=n.indexOf(t.name);if(s>-1&&s%2==(e<0?1:0))return[n[s+e]]}return null}function Gt(t,e,n,s={}){let r=s.maxScanDistance||Rt,i=s.brackets||Ut;let o=g(t),l=o.resolveInner(e,n);for(let a=l;a;a=a.parent){let s=Qt(a.type,n,i);if(s&&a.from<a.to)return Ht(t,e,n,a,s,i)}return Kt(t,e,n,o,l.type,r,i)}function Ht(t,e,n,s,r,i){let o=s.parent,l={from:s.from,to:s.to};let a=0,h=o===null||o===void 0?void 0:o.cursor();if(h&&(n<0?h.childBefore(s.from):h.childAfter(s.to)))do{if(n<0?h.to<=s.from:h.from>=s.to){if(a==0&&r.indexOf(h.type.name)>-1&&h.from<h.to){return{start:l,end:{from:h.from,to:h.to},matched:true}}else if(Qt(h.type,n,i)){a++}else if(Qt(h.type,-n,i)){if(a==0)return{start:l,end:h.from==h.to?undefined:{from:h.from,to:h.to},matched:false};a--}}}while(n<0?h.prevSibling():h.nextSibling());return{start:l,matched:false}}function Kt(t,e,n,s,r,i,o){let l=n<0?t.sliceDoc(e-1,e):t.sliceDoc(e,e+1);let a=o.indexOf(l);if(a<0||a%2==0!=n>0)return null;let h={from:n<0?e-1:e,to:n>0?e+1:e};let f=t.doc.iterRange(e,n>0?t.doc.length:0),u=0;for(let c=0;!f.next().done&&c<=i;){let t=f.value;if(n<0)c+=t.length;let i=e+c*n;for(let e=n>0?0:t.length-1,l=n>0?t.length:-1;e!=l;e+=n){let l=o.indexOf(t[e]);if(l<0||s.resolveInner(i+e,1).type!=r)continue;if(l%2==0==n>0){u++}else if(u==1){return{start:h,end:{from:i+e,to:i+e+1},matched:l>>1==a>>1}}else{u--}}if(n>0)c+=t.length}return f.done?{start:h,matched:false}:null}function Xt(t,e,n,s=0,r=0){if(e==null){e=t.search(/[^\s\u00a0]/);if(e==-1)e=t.length}let i=r;for(let o=s;o<e;o++){if(t.charCodeAt(o)==9)i+=n-i%n;else i++}return i}class Yt{constructor(t,e,n){this.string=t;this.tabSize=e;this.indentUnit=n;this.pos=0;this.start=0;this.lastColumnPos=0;this.lastColumnValue=0}eol(){return this.pos>=this.string.length}sol(){return this.pos==0}peek(){return this.string.charAt(this.pos)||undefined}next(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)}eat(t){let e=this.string.charAt(this.pos);let n;if(typeof t=="string")n=e==t;else n=e&&(t instanceof RegExp?t.test(e):t(e));if(n){++this.pos;return e}}eatWhile(t){let e=this.pos;while(this.eat(t)){}return this.pos>e}eatSpace(){let t=this.pos;while(/[\s\u00a0]/.test(this.string.charAt(this.pos)))++this.pos;return this.pos>t}skipToEnd(){this.pos=this.string.length}skipTo(t){let e=this.string.indexOf(t,this.pos);if(e>-1){this.pos=e;return true}}backUp(t){this.pos-=t}column(){if(this.lastColumnPos<this.start){this.lastColumnValue=Xt(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue);this.lastColumnPos=this.start}return this.lastColumnValue}indentation(){return Xt(this.string,null,this.tabSize)}match(t,e,n){if(typeof t=="string"){let s=t=>n?t.toLowerCase():t;let r=this.string.substr(this.pos,t.length);if(s(r)==s(t)){if(e!==false)this.pos+=t.length;return true}else return null}else{let n=this.string.slice(this.pos).match(t);if(n&&n.index>0)return null;if(n&&e!==false)this.pos+=n[0].length;return n}}current(){return this.string.slice(this.start,this.pos)}}function Zt(t){return{token:t.token,blankLine:t.blankLine||(()=>{}),startState:t.startState||(()=>true),copyState:t.copyState||te,indent:t.indent||(()=>null),languageData:t.languageData||{},tokenTable:t.tokenTable||le}}function te(t){if(typeof t!="object")return t;let e={};for(let n in t){let s=t[n];e[n]=s instanceof Array?s.slice():s}return e}class ee extends c{constructor(t){let e=u(t.languageData);let n=Zt(t),r;let i=new class extends s._b{createParse(t,e,n){return new ie(r,t,e,n)}};super(e,i,[I.of(((t,e)=>this.getIndent(t,e)))]);this.topNode=me(e);r=this;this.streamParser=n;this.stateAfter=new s.md({perNode:true});this.tokenTable=t.tokenTable?new ce(n.tokenTable):de}static define(t){return new ee(t)}getIndent(t,e){let n=g(t.state),s=n.resolve(e);while(s&&s.type!=this.topNode)s=s.parent;if(!s)return null;let r=ne(this,n,0,s.from,e),i,o;if(r){o=r.state;i=r.pos+1}else{o=this.streamParser.startState(t.unit);i=0}if(e-i>1e4)return null;while(i<e){let n=t.state.doc.lineAt(i),s=Math.min(e,n.to);if(n.length){let e=new Yt(n.text,t.state.tabSize,t.unit);while(e.pos<s-n.from)oe(this.streamParser.token,e,o)}else{this.streamParser.blankLine(o,t.unit)}if(s==e)break;i=n.to+1}let{text:l}=t.lineAt(e);return this.streamParser.indent(o,/^\s*(.*)/.exec(l)[1],t)}get allowsNesting(){return false}}function ne(t,e,n,r,i){let o=n>=r&&n+e.length<=i&&e.prop(t.stateAfter);if(o)return{state:t.streamParser.copyState(o),pos:n+e.length};for(let l=e.children.length-1;l>=0;l--){let o=e.children[l],a=n+e.positions[l];let h=o instanceof s.mp&&a<i&&ne(t,o,a,r,i);if(h)return h}return null}function se(t,e,n,r,i){if(i&&n<=0&&r>=e.length)return e;if(!i&&e.type==t.topNode)i=true;for(let o=e.children.length-1;o>=0;o--){let l=e.positions[o],a=e.children[o],h;if(l<r&&a instanceof s.mp){if(!(h=se(t,a,n-l,r-l,i)))break;return!i?h:new s.mp(e.type,e.children.slice(0,o).concat(h),e.positions.slice(0,o+1),l+h.length)}}return null}function re(t,e,n,r){for(let s of e){let e=s.from+(s.openStart?25:0),r=s.to-(s.openEnd?25:0);let i=e<=n&&r>n&&ne(t,s.tree,0-s.offset,n,r),o;if(i&&(o=se(t,s.tree,n+s.offset,i.pos+s.offset,false)))return{state:i.state,tree:o}}return{state:t.streamParser.startState(r?M(r):4),tree:s.mp.empty}}class ie{constructor(t,e,n,s){this.lang=t;this.input=e;this.fragments=n;this.ranges=s;this.stoppedAt=null;this.chunks=[];this.chunkPos=[];this.chunk=[];this.chunkReused=undefined;this.rangeIndex=0;this.to=s[s.length-1].to;let r=y.get(),i=s[0].from;let{state:o,tree:l}=re(t,n,i,r===null||r===void 0?void 0:r.state);this.state=o;this.parsedPos=this.chunkStart=i+l.length;for(let a=0;a<l.children.length;a++){this.chunks.push(l.children[a]);this.chunkPos.push(l.positions[a])}if(r&&this.parsedPos<r.viewport.from-1e5){this.state=this.lang.streamParser.startState(M(r.state));r.skipUntilInView(this.parsedPos,r.viewport.from);this.parsedPos=r.viewport.from}this.moveRangeIndex()}advance(){let t=y.get();let e=this.stoppedAt==null?this.to:Math.min(this.to,this.stoppedAt);let n=Math.min(e,this.chunkStart+2048);if(t)n=Math.min(n,t.viewport.to);while(this.parsedPos<n)this.parseLine(t);if(this.chunkStart<this.parsedPos)this.finishChunk();if(this.parsedPos>=e)return this.finish();if(t&&this.parsedPos>=t.viewport.to){t.skipUntilInView(this.parsedPos,e);return this.finish()}return null}stopAt(t){this.stoppedAt=t}lineAfter(t){let e=this.input.chunk(t);if(!this.input.lineChunks){let t=e.indexOf("\n");if(t>-1)e=e.slice(0,t)}else if(e=="\n"){e=""}return t+e.length<=this.to?e:e.slice(0,this.to-t)}nextLine(){let t=this.parsedPos,e=this.lineAfter(t),n=t+e.length;for(let s=this.rangeIndex;;){let t=this.ranges[s].to;if(t>=n)break;e=e.slice(0,t-(n-e.length));s++;if(s==this.ranges.length)break;let r=this.ranges[s].from;let i=this.lineAfter(r);e+=i;n=r+i.length}return{line:e,end:n}}skipGapsTo(t,e,n){for(;;){let s=this.ranges[this.rangeIndex].to,r=t+e;if(n>0?s>r:s>=r)break;let i=this.ranges[++this.rangeIndex].from;e+=i-s}return e}moveRangeIndex(){while(this.ranges[this.rangeIndex].to<this.parsedPos)this.rangeIndex++}emitToken(t,e,n,s,r){if(this.ranges.length>1){r=this.skipGapsTo(e,r,1);e+=r;let t=this.chunk.length;r=this.skipGapsTo(n,r,-1);n+=r;s+=this.chunk.length-t}this.chunk.push(t,e,n,s);return r}parseLine(t){let{line:e,end:n}=this.nextLine(),s=0,{streamParser:r}=this.lang;let i=new Yt(e,t?t.state.tabSize:4,t?M(t.state):2);if(i.eol()){r.blankLine(this.state,i.indentUnit)}else{while(!i.eol()){let t=oe(r.token,i,this.state);if(t)s=this.emitToken(this.lang.tokenTable.resolve(t),this.parsedPos+i.start,this.parsedPos+i.pos,4,s);if(i.start>1e4)break}}this.parsedPos=n;this.moveRangeIndex();if(this.parsedPos<this.to)this.parsedPos++}finishChunk(){let t=s.mp.build({buffer:this.chunk,start:this.chunkStart,length:this.parsedPos-this.chunkStart,nodeSet:he,topID:0,maxBufferLength:2048,reused:this.chunkReused});t=new s.mp(t.type,t.children,t.positions,t.length,[[this.lang.stateAfter,this.lang.streamParser.copyState(this.state)]]);this.chunks.push(t);this.chunkPos.push(this.chunkStart-this.ranges[0].from);this.chunk=[];this.chunkReused=undefined;this.chunkStart=this.parsedPos}finish(){return new s.mp(this.lang.topNode,this.chunks,this.chunkPos,this.parsedPos-this.ranges[0].from).balance()}}function oe(t,e,n){e.start=e.pos;for(let s=0;s<10;s++){let s=t(e,n);if(e.pos>e.start)return s}throw new Error("Stream parser failed to advance stream.")}const le=Object.create(null);const ae=[s.Jq.none];const he=new s.Lj(ae);const fe=[];const ue=Object.create(null);for(let[ke,we]of[["variable","variableName"],["variable-2","variableName.special"],["string-2","string.special"],["def","variableName.definition"],["tag","tagName"],["attribute","attributeName"],["type","typeName"],["builtin","variableName.standard"],["qualifier","modifier"],["error","invalid"],["header","heading"],["property","propertyName"]])ue[ke]=ge(le,we);class ce{constructor(t){this.extra=t;this.table=Object.assign(Object.create(null),ue)}resolve(t){return!t?0:this.table[t]||(this.table[t]=ge(this.extra,t))}}const de=new ce(le);function pe(t,e){if(fe.indexOf(t)>-1)return;fe.push(t);console.warn(e)}function ge(t,e){let n=null;for(let s of e.split(".")){let e=t[s]||o.tags[s];if(!e){pe(s,`Unknown highlighting tag ${s}`)}else if(typeof e=="function"){if(!n)pe(s,`Modifier ${s} used at start of tag`);else n=e(n)}else{if(n)pe(s,`Tag ${s} used as modifier`);else n=e}}if(!n)return 0;let r=e.replace(/ /g,"_"),i=s.Jq.define({id:ae.length,name:r,props:[(0,o.styleTags)({[r]:n})]});ae.push(i);return i.id}function me(t){let e=s.Jq.define({id:ae.length,name:"Document",props:[f.add((()=>t))]});ae.push(e);return e}}}]);
//# sourceMappingURL=6888.6eaa570c80a051f750cf.js.map?v=6eaa570c80a051f750cf