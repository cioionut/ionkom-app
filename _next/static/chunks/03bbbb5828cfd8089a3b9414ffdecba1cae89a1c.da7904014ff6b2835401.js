(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"5M6V":function(e,t,n){"use strict";n.d(t,"b",(function(){return we})),n.d(t,"a",(function(){return Ce}));var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),u=n("YFqc"),c=n.n(u),s=n("nOHt"),l=n("wx14"),f=n("zLVn"),d=n("TSYQ"),p=n.n(d),v=n("JCAc"),h=/-(.)/g;var b=n("vUet"),m=function(e){return e[0].toUpperCase()+(t=e,t.replace(h,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var y=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.as,i=Object(f.a)(e,["bsPrefix","className","as"]);n=Object(b.a)(n,"navbar-brand");var u=o||(i.href?"a":"span");return a.a.createElement(u,Object(l.a)({},i,{ref:t,className:p()(r,n)}))}));y.displayName="NavbarBrand";var x=y,g=n("7j6X"),E=n("GEtZ");function O(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=Object(E.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function j(e,t,n,r){null==n&&(n=function(e){var t=Object(g.a)(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var a=O(e,n,r),o=Object(E.a)(e,"transitionend",t);return function(){a(),o()}}var w=n("dI71"),C=(n("17x9"),n("i8i4")),S=n.n(C),N=!1,k=a.a.createContext(null),_=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(w.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[S.a.findDOMNode(this),r],o=a[0],i=a[1],u=this.getTimeouts(),c=r?u.appear:u.enter;!e&&!n||N?this.safeSetState({status:"entered"},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:"entering"},(function(){t.props.onEntering(o,i),t.onTransitionEnd(c,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:S.a.findDOMNode(this);t&&!N?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:S.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(f.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(k.Provider,{value:null},"function"===typeof n?n(e,r):a.a.cloneElement(a.a.Children.only(n),r))},t}(a.a.Component);function P(){}_.contextType=k,_.propTypes={},_.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:P,onEntering:P,onEntered:P,onExit:P,onExiting:P,onExited:P},_.UNMOUNTED="unmounted",_.EXITED="exited",_.ENTERING="entering",_.ENTERED="entered",_.EXITING="exiting";var M=_;var I,T=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};var R={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function A(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=R[e];return n+parseInt(Object(g.a)(t,r[0]),10)+parseInt(Object(g.a)(t,r[1]),10)}var D=((I={}).exited="collapse",I.exiting="collapsing",I.entering="collapsing",I.entered="collapse show",I),L={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:A},K=a.a.forwardRef((function(e,t){var n=e.onEnter,o=e.onEntering,i=e.onEntered,u=e.onExit,c=e.onExiting,s=e.className,d=e.children,v=e.dimension,h=void 0===v?"height":v,b=e.getDimensionValue,m=void 0===b?A:b,y=Object(f.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),x="function"===typeof h?h():h,g=Object(r.useMemo)((function(){return T((function(e){e.style[x]="0"}),n)}),[x,n]),E=Object(r.useMemo)((function(){return T((function(e){var t="scroll"+x[0].toUpperCase()+x.slice(1);e.style[x]=e[t]+"px"}),o)}),[x,o]),O=Object(r.useMemo)((function(){return T((function(e){e.style[x]=null}),i)}),[x,i]),w=Object(r.useMemo)((function(){return T((function(e){e.style[x]=m(x,e)+"px",e.offsetHeight}),u)}),[u,m,x]),C=Object(r.useMemo)((function(){return T((function(e){e.style[x]=null}),c)}),[x,c]);return a.a.createElement(M,Object(l.a)({ref:t,addEndListener:j},y,{"aria-expanded":y.role?y.in:null,onEnter:g,onEntering:E,onEntered:O,onExit:w,onExiting:C}),(function(e,t){return a.a.cloneElement(d,Object(l.a)({},t,{className:p()(s,d.props.className,D[e],"width"===x&&"width")}))}))}));K.defaultProps=L;var q=K,H=a.a.createContext(null);H.displayName="NavbarContext";var U=H,F=a.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,o=Object(f.a)(e,["children","bsPrefix"]);return r=Object(b.a)(r,"navbar-collapse"),a.a.createElement(U.Consumer,null,(function(e){return a.a.createElement(q,Object(l.a)({in:!(!e||!e.expanded)},o),a.a.createElement("div",{ref:t,className:r},n))}))}));F.displayName="NavbarCollapse";var J=F,W=n("ZCiN"),B=a.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.children,u=e.label,c=e.as,s=void 0===c?"button":c,d=e.onClick,v=Object(f.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(b.a)(n,"navbar-toggler");var h=Object(r.useContext)(U)||{},m=h.onToggle,y=h.expanded,x=Object(W.a)((function(e){d&&d(e),m&&m()}));return"button"===s&&(v.type="button"),a.a.createElement(s,Object(l.a)({},v,{ref:t,onClick:x,"aria-label":u,className:p()(o,n,!y&&"collapsed")}),i||a.a.createElement("span",{className:n+"-icon"}))}));B.displayName="NavbarToggle",B.defaultProps={label:"Toggle navigation"};var V=B,Z=a.a.createContext(null),Y=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},X=Z,z=function(e,t){var n=void 0===t?{}:t,r=n.displayName,o=void 0===r?m(e):r,i=n.Component,u=n.defaultProps,c=a.a.forwardRef((function(t,n){var r=t.className,o=t.bsPrefix,u=t.as,c=void 0===u?i||"div":u,s=Object(f.a)(t,["className","bsPrefix","as"]),d=Object(b.a)(o,e);return a.a.createElement(c,Object(l.a)({ref:n,className:p()(r,d)},s))}));return c.defaultProps=u,c.displayName=o,c}("navbar-text",{Component:"span"}),G=a.a.forwardRef((function(e,t){var n=Object(v.a)(e,{expanded:"onToggle"}),o=n.bsPrefix,i=n.expand,u=n.variant,c=n.bg,s=n.fixed,d=n.sticky,h=n.className,m=n.children,y=n.as,x=void 0===y?"nav":y,g=n.expanded,E=n.onToggle,O=n.onSelect,j=n.collapseOnSelect,w=Object(f.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),C=Object(b.a)(o,"navbar"),S=Object(r.useCallback)((function(){O&&O.apply(void 0,arguments),j&&g&&E&&E(!1)}),[O,j,g,E]);void 0===w.role&&"nav"!==x&&(w.role="navigation");var N=C+"-expand";"string"===typeof i&&(N=N+"-"+i);var k=Object(r.useMemo)((function(){return{onToggle:function(){return E&&E(!g)},bsPrefix:C,expanded:!!g}}),[C,g,E]);return a.a.createElement(U.Provider,{value:k},a.a.createElement(X.Provider,{value:S},a.a.createElement(x,Object(l.a)({ref:t},w,{className:p()(h,C,i&&N,u&&C+"-"+u,c&&"bg-"+c,d&&"sticky-"+d,s&&"fixed-"+s)}),m)))}));G.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},G.displayName="Navbar",G.Brand=x,G.Toggle=V,G.Collapse=J,G.Text=z;var Q=G,$=(n("K9S6"),a.a.createContext(null));$.displayName="CardContext";var ee=$,te=n("Zeqi"),ne=n("YGJp"),re=n("lcWJ"),ae=a.a.createContext(null);ae.displayName="NavContext";var oe=ae,ie=a.a.createContext(null),ue=function(){},ce=a.a.forwardRef((function(e,t){var n,o,i=e.as,u=void 0===i?"ul":i,c=e.onSelect,s=e.activeKey,d=e.role,p=e.onKeyDown,v=Object(f.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),h=Object(ne.a)(),b=Object(r.useRef)(!1),m=Object(r.useContext)(X),y=Object(r.useContext)(ie);y&&(d=d||"tablist",s=y.activeKey,n=y.getControlledId,o=y.getControllerId);var x=Object(r.useRef)(null),g=function(e){var t=x.current;if(!t)return null;var n=Object(te.a)(t,"[data-rb-event-key]:not(.disabled)"),r=t.querySelector(".active");if(!r)return null;var a=n.indexOf(r);if(-1===a)return null;var o=a+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},E=function(e,t){null!=e&&(c&&c(e,t),m&&m(e,t))};Object(r.useEffect)((function(){if(x.current&&b.current){var e=x.current.querySelector("[data-rb-event-key].active");e&&e.focus()}b.current=!1}));var O=Object(re.a)(t,x);return a.a.createElement(X.Provider,{value:E},a.a.createElement(oe.Provider,{value:{role:d,activeKey:Y(s),getControlledId:n||ue,getControllerId:o||ue}},a.a.createElement(u,Object(l.a)({},v,{onKeyDown:function(e){var t;switch(p&&p(e),e.key){case"ArrowLeft":case"ArrowUp":t=g(-1);break;case"ArrowRight":case"ArrowDown":t=g(1);break;default:return}t&&(e.preventDefault(),E(t.dataset.rbEventKey,e),b.current=!0,h())},ref:O,role:d}))))})),se=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.children,i=e.as,u=void 0===i?"div":i,c=Object(f.a)(e,["bsPrefix","className","children","as"]);return n=Object(b.a)(n,"nav-item"),a.a.createElement(u,Object(l.a)({},c,{ref:t,className:p()(r,n)}),o)}));se.displayName="NavItem";var le=se;function fe(e){return!e||"#"===e.trim()}var de=a.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,o=e.disabled,i=e.onKeyDown,u=Object(f.a)(e,["as","disabled","onKeyDown"]),c=function(e){var t=u.href,n=u.onClick;(o||fe(t))&&e.preventDefault(),o?e.stopPropagation():n&&n(e)};return fe(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),o&&(u.tabIndex=-1,u["aria-disabled"]=!0),a.a.createElement(r,Object(l.a)({ref:t},u,{onClick:c,onKeyDown:T((function(e){" "===e.key&&(e.preventDefault(),c(e))}),i)}))}));de.displayName="SafeAnchor";var pe=de,ve=(n("2W6z"),a.a.forwardRef((function(e,t){var n=e.active,o=e.className,i=e.eventKey,u=e.onSelect,c=e.onClick,s=e.as,d=Object(f.a)(e,["active","className","eventKey","onSelect","onClick","as"]),v=Y(i,d.href),h=Object(r.useContext)(X),b=Object(r.useContext)(oe),m=n;if(b){d.role||"tablist"!==b.role||(d.role="tab");var y=b.getControllerId(v),x=b.getControlledId(v);d["data-rb-event-key"]=v,d.id=y||d.id,d["aria-controls"]=x||d["aria-controls"],m=null==n&&null!=v?b.activeKey===v:n}"tab"===d.role&&(d.tabIndex=m?d.tabIndex:-1,d["aria-selected"]=m);var g=Object(W.a)((function(e){c&&c(e),null!=v&&(u&&u(v,e),h&&h(v,e))}));return a.a.createElement(s,Object(l.a)({},d,{ref:t,onClick:g,className:p()(o,m&&"active")}))})));ve.defaultProps={disabled:!1};var he=ve,be={disabled:!1,as:pe},me=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,o=e.className,i=e.href,u=e.eventKey,c=e.onSelect,s=e.as,d=Object(f.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(b.a)(n,"nav-link"),a.a.createElement(he,Object(l.a)({},d,{href:i,ref:t,eventKey:u,as:s,disabled:r,onSelect:c,className:p()(o,n,r&&"disabled")}))}));me.displayName="NavLink",me.defaultProps=be;var ye=me,xe=a.a.forwardRef((function(e,t){var n,o,i,u=Object(v.a)(e,{activeKey:"onSelect"}),c=u.as,s=void 0===c?"div":c,d=u.bsPrefix,h=u.variant,m=u.fill,y=u.justify,x=u.navbar,g=u.className,E=u.children,O=u.activeKey,j=Object(f.a)(u,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),w=Object(b.a)(d,"nav"),C=!1,S=Object(r.useContext)(U),N=Object(r.useContext)(ee);return S?(o=S.bsPrefix,C=null==x||x):N&&(i=N.cardHeaderBsPrefix),a.a.createElement(ce,Object(l.a)({as:s,ref:t,activeKey:O,className:p()(g,(n={},n[w]=!C,n[o+"-nav"]=C,n[i+"-"+h]=!!i,n[w+"-"+h]=!!h,n[w+"-fill"]=m,n[w+"-justified"]=y,n))},j),E)}));xe.displayName="Nav",xe.defaultProps={justify:!1,fill:!1},xe.Item=le,xe.Link=ye;var ge=xe,Ee=n("Tred"),Oe=n.n(Ee),je=a.a.createElement,we="ionkom";function Ce(e){var t=e.children,n=(e.home,Object(s.useRouter)());return je(a.a.Fragment,null,je(i.a,null,je("link",{rel:"icon",href:"/favicon.ico"})),je(Q,{collapseOnSelect:!0,bg:"white",expand:"lg",className:"align-items-center p-3 px-md-4 mb-3 ".concat(Oe.a.borderBottom," ").concat(Oe.a.boxShadow)},je(c.a,{href:"/",passHref:!0},je(Q.Brand,{className:Oe.a.logoFont},we)),je(Q.Toggle,{"aria-controls":"responsive-navbar-nav"}),je(Q.Collapse,{id:"responsive-navbar-nav"},je(ge,{className:"ml-auto",activeKey:n.pathname},je(c.a,{href:"/",passHref:!0},je(ge.Link,null,"Home")),je(c.a,{href:"/services",passHref:!0},je(ge.Link,null,"Services")),je(c.a,{href:"/about",passHref:!0},je(ge.Link,null,"About"))))),je("main",null,t))}},"7j6X":function(e,t,n){"use strict";var r=n("dZvc");function a(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var o=/([A-Z])/g;var i=/^ms-/;function u(e){return function(e){return e.replace(o,"-$1").toLowerCase()}(e).replace(i,"-ms-")}var c=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(u(t))||a(e).getPropertyValue(u(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!c.test(e))}(a)?n+=u(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(u(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var s=d[u];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],f=r[s]||new Set;f.has(l)?o=!1:(f.add(l),r[s]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function v(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}v.rewind=function(){};var h=v;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},GEtZ:function(e,t,n){"use strict";var r=n("SJxq"),a=!1,o=!1;try{var i={get passive(){return a=!0},get once(){return o=a=!0}};r.a&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(s){}var u=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!o){var i=r.once,u=r.capture,c=n;!o&&i&&(c=n.__once||function e(r){this.removeEventListener(t,e,u),n.call(this,r)},n.__once=c),e.addEventListener(t,c,a?r:u)}e.addEventListener(t,n,r)};var c=function(e,t,n,r){var a=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};t.a=function(e,t,n,r){return u(e,t,n,r),function(){c(e,t,n,r)}}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("wx14"),a=n("zLVn"),o=n("q1tI");n("QLaP");function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function c(e,t){return Object.keys(t).reduce((function(n,c){var s,l=n,f=l[i(c)],d=l[c],p=Object(a.a)(l,[i(c),c].map(u)),v=t[c],h=function(e,t,n){var r=Object(o.useRef)(void 0!==e),a=Object(o.useState)(t),i=a[0],u=a[1],c=void 0!==e,s=r.current;return r.current=c,!c&&s&&i!==t&&u(t),[c?e:i,Object(o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),u(e)}),[n])]}(d,f,e[v]),b=h[0],m=h[1];return Object(r.a)({},p,((s={})[c]=b,s[v]=m,s))}),e)}n("dI71");function s(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function l(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function f(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}s.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,o.default)(r)};var r,a=n("pvIh"),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,o,i,u){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,a,o,i,u],l=0;(c=new Error(t.replace(/%s/g,(function(){return s[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},SJxq:function(e,t,n){"use strict";t.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Tred:function(e,t,n){e.exports={logoFont:"layout_logoFont__-S6f2",boxShadow:"layout_boxShadow__3xPa-",borderTop:"layout_borderTop__2VYWy",borderBottom:"layout_borderBottom__UtgeQ"}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},YGJp:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(){return Object(r.useReducer)((function(e){return!e}),!1)[1]}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},Zeqi:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return r(e.querySelectorAll(t))}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),u=n("elyg"),c=n("nOHt"),s=new Map,l=window.IntersectionObserver,f={};var d=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function p(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var v=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],s=a[1],v=(0,c.useRouter)(),h=v&&v.pathname||"/",b=i.default.useMemo((function(){var t=(0,u.resolveHref)(h,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,u.resolveHref)(h,e.as):o||a}}),[h,e.href,e.as]),m=b.href,y=b.as;i.default.useEffect((function(){if(t&&l&&o&&o.tagName&&(0,u.isLocalURL)(m)&&!f[m+"%"+y])return d(o,(function(){p(v,m,y)}))}),[t,o,m,y,v]);var x=e.children,g=e.replace,E=e.shallow,O=e.scroll;"string"===typeof x&&(x=i.default.createElement("a",null,x));var j=i.Children.only(x),w={ref:function(e){e&&s(e),j&&"object"===typeof j&&j.ref&&("function"===typeof j.ref?j.ref(e):"object"===typeof j.ref&&(j.ref.current=e))},onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,v,m,y,g,E,O)}};return t&&(w.onMouseEnter=function(e){(0,u.isLocalURL)(m)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),p(v,m,y,{priority:!0}))}),(e.passHref||"a"===j.type&&!("href"in j.props))&&(w.href=(0,u.addBasePath)((0,u.addLocale)(y,v&&v.locale,v&&v.defaultLocale))),i.default.cloneElement(j,w)};t.default=v},dI71:function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lcWJ:function(e,t,n){"use strict";var r=n("q1tI"),a=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=a(e),r=a(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var u=a||"<<anonymous>>",c=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+c+"` was not specified in `"+u+"`."):null;for(var s=arguments.length,l=Array(s>6?s-6:0),f=6;f<s;f++)l[f-6]=arguments[f];return e.apply(void 0,[n,r,u,o,c].concat(l))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("wx14");var r=n("q1tI"),a=n.n(r),o=a.a.createContext({});o.Consumer,o.Provider;function i(e,t){var n=Object(r.useContext)(o);return e||n[t]||t}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);