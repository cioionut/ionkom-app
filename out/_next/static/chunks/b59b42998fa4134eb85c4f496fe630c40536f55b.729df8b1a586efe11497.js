(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"5M6V":function(e,t,n){"use strict";n.d(t,"b",(function(){return Qe})),n.d(t,"a",(function(){return Xe}));var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),u=n("nOHt"),s=n("YFqc"),c=n.n(s),l=a.a.createElement,f=function(e){var t=e.href,n=e.as,r=void 0===n?t:n,a=e.passHref,o=void 0!==a&&a,i=e.children;return l(c.a,{href:t,as:"".concat("/ionkom-app").concat(r),passHref:o},i)};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var v=n("TSYQ"),h=n.n(v);n("QLaP");function m(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function y(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function b(e,t){return Object.keys(t).reduce((function(n,a){var o,i=n,u=i[m(a)],s=i[a],c=d(i,[m(a),a].map(y)),l=t[a],f=function(e,t,n){var a=Object(r.useRef)(void 0!==e),o=Object(r.useState)(t),i=o[0],u=o[1],s=void 0!==e,c=a.current;return a.current=s,!s&&c&&i!==t&&u(t),[s?e:i,Object(r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),u(e)}),[n])]}(s,u,e[l]),v=f[0],h=f[1];return p({},c,((o={})[a]=v,o[l]=h,o))}),e)}function x(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function g(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function E(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function w(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}g.__suppressDeprecationWarning=!0,E.__suppressDeprecationWarning=!0,w.__suppressDeprecationWarning=!0;var C=/-(.)/g;var S=a.a.createContext({});S.Consumer,S.Provider;function k(e,t){var n=Object(r.useContext)(S);return e||n[t]||t}var N=function(e){return e[0].toUpperCase()+(t=e,t.replace(C,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var O=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.as,i=d(e,["bsPrefix","className","as"]);n=k(n,"navbar-brand");var u=o||(i.href?"a":"span");return(a.a.createElement(u,p({},i,{ref:t,className:h()(r,n)})))}));O.displayName="NavbarBrand";var P=O;function _(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var j=/([A-Z])/g;var R=/^ms-/;function T(e){return function(e){return e.replace(j,"-$1").toLowerCase()}(e).replace(R,"-ms-")}var I=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var M=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(T(t))||function(e,t){return _(e).getComputedStyle(e,t)}(e).getPropertyValue(T(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!I.test(e))}(a)?n+=T(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(T(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},D=!("undefined"===typeof window||!window.document||!window.document.createElement),A=!1,K=!1;try{var L={get passive(){return A=!0},get once(){return K=A=!0}};D&&(window.addEventListener("test",L,L),window.removeEventListener("test",L,!0))}catch(Ze){}var U=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!K){var a=r.once,o=r.capture,i=n;!K&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,A?r:o)}e.addEventListener(t,n,r)};var q=function(e,t,n,r){var a=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var H=function(e,t,n,r){return U(e,t,n,r),function(){q(e,t,n,r)}};D&&window;function F(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=H(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}var W=function(e,t,n){null==n&&(n=function(e){var t=M(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var r=F(e,n),a=H(e,"transitionend",t);return function(){r(),a()}},B=(n("17x9"),n("i8i4")),V=n.n(B),Y=!1,J=a.a.createContext(null),Q="unmounted",X="exited",Z="entering",$="entered",z=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a=X,r.appearStatus=Z):a=$:a=t.unmountOnExit||t.mountOnEnter?Q:X,r.state={status:a},r.nextCallback=null,r}x(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===Q?{status:X}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==Z&&n!==$&&(t=Z):n!==Z&&n!==$||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===Z?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===X&&this.setState({status:Q})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[V.a.findDOMNode(this),r],o=a[0],i=a[1],u=this.getTimeouts(),s=r?u.appear:u.enter;!e&&!n||Y?this.safeSetState({status:$},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:Z},(function(){t.props.onEntering(o,i),t.onTransitionEnd(s,(function(){t.safeSetState({status:$},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:V.a.findDOMNode(this);t&&!Y?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:X},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:X},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:V.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===Q)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,d(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return(a.a.createElement(J.Provider,{value:null},"function"===typeof n?n(e,r):a.a.cloneElement(a.a.Children.only(n),r)))},t}(a.a.Component);function G(){}z.contextType=J,z.propTypes={},z.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:G,onEntering:G,onEntered:G,onExit:G,onExiting:G,onExited:G},z.UNMOUNTED=Q,z.EXITED=X,z.ENTERING=Z,z.ENTERED=$,z.EXITING="exiting";var ee=z;var te,ne=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};var re={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function ae(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=re[e];return n+parseInt(M(t,r[0]),10)+parseInt(M(t,r[1]),10)}var oe=((te={})[X]="collapse",te.exiting="collapsing",te[Z]="collapsing",te[$]="collapse show",te),ie={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:ae},ue=a.a.forwardRef((function(e,t){var n=e.onEnter,o=e.onEntering,i=e.onEntered,u=e.onExit,s=e.onExiting,c=e.className,l=e.children,f=e.dimension,v=void 0===f?"height":f,m=e.getDimensionValue,y=void 0===m?ae:m,b=d(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),x="function"===typeof v?v():v,g=Object(r.useMemo)((function(){return ne((function(e){e.style[x]="0"}),n)}),[x,n]),E=Object(r.useMemo)((function(){return ne((function(e){var t="scroll"+x[0].toUpperCase()+x.slice(1);e.style[x]=e[t]+"px"}),o)}),[x,o]),w=Object(r.useMemo)((function(){return ne((function(e){e.style[x]=null}),i)}),[x,i]),C=Object(r.useMemo)((function(){return ne((function(e){e.style[x]=y(x,e)+"px",e.offsetHeight}),u)}),[u,y,x]),S=Object(r.useMemo)((function(){return ne((function(e){e.style[x]=null}),s)}),[x,s]);return a.a.createElement(ee,p({ref:t,addEndListener:W},b,{"aria-expanded":b.role?b.in:null,onEnter:g,onEntering:E,onEntered:w,onExit:C,onExiting:S}),(function(e,t){return a.a.cloneElement(l,p({},t,{className:h()(c,l.props.className,oe[e],"width"===x&&"width")}))}))}));ue.defaultProps=ie;var se=ue,ce=a.a.createContext(null);ce.displayName="NavbarContext";var le=ce,fe=a.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,o=d(e,["children","bsPrefix"]);return r=k(r,"navbar-collapse"),a.a.createElement(le.Consumer,null,(function(e){return a.a.createElement(se,p({in:!(!e||!e.expanded)},o),a.a.createElement("div",{ref:t,className:r},n))}))}));fe.displayName="NavbarCollapse";var pe=fe;var de=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function ve(e){var t=de(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var he=a.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.children,u=e.label,s=e.as,c=void 0===s?"button":s,l=e.onClick,f=d(e,["bsPrefix","className","children","label","as","onClick"]);n=k(n,"navbar-toggler");var v=Object(r.useContext)(le)||{},m=v.onToggle,y=v.expanded,b=ve((function(e){l&&l(e),m&&m()}));return"button"===c&&(f.type="button"),a.a.createElement(c,p({},f,{ref:t,onClick:b,"aria-label":u,className:h()(o,n,!y&&"collapsed")}),i||a.a.createElement("span",{className:n+"-icon"}))}));he.displayName="NavbarToggle",he.defaultProps={label:"Toggle navigation"};var me=he,ye=a.a.createContext(null),be=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},xe=ye,ge=function(e,t){var n=void 0===t?{}:t,r=n.displayName,o=void 0===r?N(e):r,i=n.Component,u=n.defaultProps,s=a.a.forwardRef((function(t,n){var r=t.className,o=t.bsPrefix,u=t.as,s=void 0===u?i||"div":u,c=d(t,["className","bsPrefix","as"]),l=k(o,e);return a.a.createElement(s,p({ref:n,className:h()(r,l)},c))}));return s.defaultProps=u,s.displayName=o,s}("navbar-text",{Component:"span"}),Ee=a.a.forwardRef((function(e,t){var n=b(e,{expanded:"onToggle"}),o=n.bsPrefix,i=n.expand,u=n.variant,s=n.bg,c=n.fixed,l=n.sticky,f=n.className,v=n.children,m=n.as,y=void 0===m?"nav":m,x=n.expanded,g=n.onToggle,E=n.onSelect,w=n.collapseOnSelect,C=d(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),S=k(o,"navbar"),N=Object(r.useCallback)((function(){E&&E.apply(void 0,arguments),w&&x&&g&&g(!1)}),[E,w,x,g]);void 0===C.role&&"nav"!==y&&(C.role="navigation");var O=S+"-expand";"string"===typeof i&&(O=O+"-"+i);var P=Object(r.useMemo)((function(){return{onToggle:function(){return g&&g(!x)},bsPrefix:S,expanded:!!x}}),[S,x,g]);return(a.a.createElement(le.Provider,{value:P},a.a.createElement(xe.Provider,{value:N},a.a.createElement(y,p({ref:t},C,{className:h()(f,S,i&&O,u&&S+"-"+u,s&&"bg-"+s,l&&"sticky-"+l,c&&"fixed-"+c)}),v))))}));Ee.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},Ee.displayName="Navbar",Ee.Brand=P,Ee.Toggle=me,Ee.Collapse=pe,Ee.Text=ge;var we=Ee,Ce=(n("K9S6"),a.a.createContext(null));Ce.displayName="CardContext";var Se=Ce,ke=Function.prototype.bind.call(Function.prototype.call,[].slice);var Ne=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var Oe=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=Ne(e),r=Ne(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},Pe=a.a.createContext(null);Pe.displayName="NavContext";var _e=Pe,je=a.a.createContext(null),Re=function(){},Te=a.a.forwardRef((function(e,t){var n,o,i=e.as,u=void 0===i?"ul":i,s=e.onSelect,c=e.activeKey,l=e.role,f=e.onKeyDown,v=d(e,["as","onSelect","activeKey","role","onKeyDown"]),h=Object(r.useReducer)((function(e){return!e}),!1)[1],m=Object(r.useRef)(!1),y=Object(r.useContext)(xe),b=Object(r.useContext)(je);b&&(l=l||"tablist",c=b.activeKey,n=b.getControlledId,o=b.getControllerId);var x=Object(r.useRef)(null),g=function(e){var t=x.current;if(!t)return null;var n,r=(n="[data-rb-event-key]:not(.disabled)",ke(t.querySelectorAll(n))),a=t.querySelector(".active");if(!a)return null;var o=r.indexOf(a);if(-1===o)return null;var i=o+e;return i>=r.length&&(i=0),i<0&&(i=r.length-1),r[i]},E=function(e,t){null!=e&&(s&&s(e,t),y&&y(e,t))};Object(r.useEffect)((function(){if(x.current&&m.current){var e=x.current.querySelector("[data-rb-event-key].active");e&&e.focus()}m.current=!1}));var w=Oe(t,x);return(a.a.createElement(xe.Provider,{value:E},a.a.createElement(_e.Provider,{value:{role:l,activeKey:be(c),getControlledId:n||Re,getControllerId:o||Re}},a.a.createElement(u,p({},v,{onKeyDown:function(e){var t;switch(f&&f(e),e.key){case"ArrowLeft":case"ArrowUp":t=g(-1);break;case"ArrowRight":case"ArrowDown":t=g(1);break;default:return}t&&(e.preventDefault(),E(t.dataset.rbEventKey,e),m.current=!0,h())},ref:w,role:l})))))})),Ie=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.children,i=e.as,u=void 0===i?"div":i,s=d(e,["bsPrefix","className","children","as"]);return n=k(n,"nav-item"),a.a.createElement(u,p({},s,{ref:t,className:h()(r,n)}),o)}));Ie.displayName="NavItem";var Me=Ie;function De(e){return!e||"#"===e.trim()}var Ae=a.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,o=e.disabled,i=e.onKeyDown,u=d(e,["as","disabled","onKeyDown"]),s=function(e){var t=u.href,n=u.onClick;(o||De(t))&&e.preventDefault(),o?e.stopPropagation():n&&n(e)};return De(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),o&&(u.tabIndex=-1,u["aria-disabled"]=!0),a.a.createElement(r,p({ref:t},u,{onClick:s,onKeyDown:ne((function(e){" "===e.key&&(e.preventDefault(),s(e))}),i)}))}));Ae.displayName="SafeAnchor";var Ke=Ae,Le=(n("2W6z"),a.a.forwardRef((function(e,t){var n=e.active,o=e.className,i=e.eventKey,u=e.onSelect,s=e.onClick,c=e.as,l=d(e,["active","className","eventKey","onSelect","onClick","as"]),f=be(i,l.href),v=Object(r.useContext)(xe),m=Object(r.useContext)(_e),y=n;if(m){l.role||"tablist"!==m.role||(l.role="tab");var b=m.getControllerId(f),x=m.getControlledId(f);l["data-rb-event-key"]=f,l.id=b||l.id,l["aria-controls"]=x||l["aria-controls"],y=null==n&&null!=f?m.activeKey===f:n}"tab"===l.role&&(l.tabIndex=y?l.tabIndex:-1,l["aria-selected"]=y);var g=ve((function(e){s&&s(e),null!=f&&(u&&u(f,e),v&&v(f,e))}));return(a.a.createElement(c,p({},l,{ref:t,onClick:g,className:h()(o,y&&"active")})))})));Le.defaultProps={disabled:!1};var Ue=Le,qe={disabled:!1,as:Ke},He=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,o=e.className,i=e.href,u=e.eventKey,s=e.onSelect,c=e.as,l=d(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=k(n,"nav-link"),a.a.createElement(Ue,p({},l,{href:i,ref:t,eventKey:u,as:c,disabled:r,onSelect:s,className:h()(o,n,r&&"disabled")}))}));He.displayName="NavLink",He.defaultProps=qe;var Fe=He,We=a.a.forwardRef((function(e,t){var n,o,i,u=b(e,{activeKey:"onSelect"}),s=u.as,c=void 0===s?"div":s,l=u.bsPrefix,f=u.variant,v=u.fill,m=u.justify,y=u.navbar,x=u.className,g=u.children,E=u.activeKey,w=d(u,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),C=k(l,"nav"),S=!1,N=Object(r.useContext)(le),O=Object(r.useContext)(Se);return N?(o=N.bsPrefix,S=null==y||y):O&&(i=O.cardHeaderBsPrefix),a.a.createElement(Te,p({as:c,ref:t,activeKey:E,className:h()(x,(n={},n[C]=!S,n[o+"-nav"]=S,n[i+"-"+f]=!!i,n[C+"-"+f]=!!f,n[C+"-fill"]=v,n[C+"-justified"]=m,n))},w),g)}));We.displayName="Nav",We.defaultProps={justify:!1,fill:!1},We.Item=Me,We.Link=Fe;var Be=We,Ve=n("Tred"),Ye=n.n(Ve),Je=a.a.createElement,Qe="ionkom";function Xe(e){var t=e.children,n=(e.home,Object(u.useRouter)());return Je(a.a.Fragment,null,Je(i.a,null,Je("link",{rel:"icon",href:"/favicon.ico"})),Je(we,{bg:"white",expand:"lg",className:"align-items-center p-3 px-md-4 mb-3 ".concat(Ye.a.borderBottom," ").concat(Ye.a.boxShadow)},Je(f,{href:"/",passHref:!0},Je(we.Brand,{className:Ye.a.logoFont},Qe)),Je(Be,{className:"ml-auto",activeKey:n.pathname},Je(f,{href:"/",passHref:!0},Je(Be.Link,null,"Home")),Je(f,{href:"/services",passHref:!0},Je(Be.Link,null,"Services")),Je(f,{href:"/about",passHref:!0},Je(Be.Link,null,"About")))),Je("main",null,t))}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=c,t.default=void 0;var r=s(n("q1tI")),a=s(n("Xuae")),o=n("lwAK"),i=n("FYa8"),u=n("/0+H");function s(e){return e&&e.__esModule?e:{default:e}}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,s=f.length;u<s;u++){var c=f[u];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?o=!1:n.add(c);else{var l=a.props[c],p=r[c]||new Set;p.has(l)?o=!1:(p.add(l),r[c]=p)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var d=(0,a.default)();function v(e){var t=e.children;return(r.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,u.isInAmpMode)(e)},t)}))})))}v.rewind=d.rewind;var h=v;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}))};var r,a=n("pvIh"),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,o,i,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,a,o,i,u],l=0;(s=new Error(t.replace(/%s/g,(function(){return c[l++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Tred:function(e,t,n){e.exports={logoFont:"layout_logoFont__-S6f2",boxShadow:"layout_boxShadow__3xPa-",borderTop:"layout_borderTop__2VYWy",borderBottom:"layout_borderBottom__UtgeQ"}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),o=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),s=n("Nsbk"),c=n("RIqP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(u){i(c,u);var s=l(c);function c(e){var o;return r(this,c),o=s.call(this,e),p&&(t.add(a(o)),n(a(o))),o}return o(c,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(c,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(f.Component))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),o=n("7W2i"),i=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}var c=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var f,p=l(n("q1tI")),d=n("QmWs"),v=n("g/15"),h=c(n("nOHt")),m=n("elyg");function y(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var b=new Map,x=window.IntersectionObserver,g={};function E(){return f||(x?f=new x((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){o(n,e);var t=s(n);function n(e){var a;return r(this,n),(a=t.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var t=null,n=null,r=null;return function(a,o){if(r&&a===t&&o===n)return r;var i=e(a,o);return t=a,n=o,r=i,i}}((function(e,t){return{href:(0,m.addBasePath)(y(e)),as:t?(0,m.addBasePath)(y(t)):t}})),a.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),i=o.href,u=o.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var s=window.location.pathname;i=(0,d.resolve)(s,i),u=u?(0,d.resolve)(s,u):i,e.preventDefault();var c=a.props.scroll;null==c&&(c=u.indexOf("#")<0),h.default[a.props.replace?"replace":"push"](i,u,{shallow:a.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,a=(0,d.resolve)(e,n);return[a,r?(0,d.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&x&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=E();return n?(n.observe(e),b.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),i={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),p.default.cloneElement(o,i)}}]),n}(p.Component);t.default=w},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var u=a||"<<anonymous>>",s=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+s+"` was not specified in `"+u+"`."):null;for(var c=arguments.length,l=Array(c>6?c-6:0),f=6;f<c;f++)l[f-6]=arguments[f];return e.apply(void 0,[n,r,u,o,s].concat(l))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default}}]);