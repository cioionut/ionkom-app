_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"1OyB":function(t,e,n){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return a}))},"6c8n":function(t,e,n){t.exports={nluContent:"nluinaction_nluContent__vjRet",submitBtn:"nluinaction_submitBtn__APT7N"}},"BO/t":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,n,a,r,o){var i=a||"<<anonymous>>",c=o||n;if(null==e[n])return new Error("The "+r+" `"+c+"` is required to make `"+i+"` accessible for users of assistive technologies such as screen readers.");for(var u=arguments.length,s=Array(u>5?u-5:0),l=5;l<u;l++)s[l-5]=arguments[l];return t.apply(void 0,[e,n,a,r,o].concat(s))}},t.exports=e.default},JX7q:function(t,e,n){"use strict";function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return a}))},Ji7U:function(t,e,n){"use strict";function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}n.d(e,"a",(function(){return r}))},MBJH:function(t,e,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),i=n.n(o),c=n("q1tI"),u=n.n(c),s=n("vUet"),l=u.a.forwardRef((function(t,e){var n=t.bsPrefix,o=t.className,c=t.striped,l=t.bordered,d=t.borderless,f=t.hover,m=t.size,p=t.variant,h=t.responsive,b=Object(r.a)(t,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),v=Object(s.a)(n,"table"),y=i()(o,v,p&&v+"-"+p,m&&v+"-"+m,c&&v+"-striped",l&&v+"-bordered",d&&v+"-borderless",f&&v+"-hover"),E=u.a.createElement("table",Object(a.a)({},b,{className:y,ref:e}));if(h){var O=v+"-responsive";return"string"===typeof h&&(O=O+"-"+h),u.a.createElement("div",{className:O},E)}return E}));e.a=l},SrO9:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/natural-language-software",function(){return n("WWsS")}])},WWsS:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return ut}));var a,r=n("q1tI"),o=n.n(r),i=n("g4pe"),c=n.n(i),u=(n("YFqc"),n("5M6V")),s=n("1OyB"),l=n("vuIU"),d=n("JX7q"),f=n("Ji7U"),m=n("md7G"),p=n("foSv"),h=n("7vrA"),b=n("3Z9Z"),v=n("JI6e"),y=n("QojX"),E=n("cWnB"),O=n("wx14"),g=n("zLVn"),x=(n("BO/t"),n("JCAc")),_=n("+YzT"),j=n("iKII"),w=n("Mj5q"),C=n("Qdst"),N=n("ILyh"),S=function(t){var e=Object(x.a)(t,{activeKey:"onSelect"}),n=e.id,a=e.generateChildId,i=e.onSelect,c=e.activeKey,u=e.transition,s=e.mountOnEnter,l=e.unmountOnExit,d=e.children,f=Object(r.useMemo)((function(){return a||function(t,e){return n?n+"-"+e+"-"+t:null}}),[n,a]),m=Object(r.useMemo)((function(){return{onSelect:i,activeKey:c,transition:u,mountOnEnter:s||!1,unmountOnExit:l||!1,getControlledId:function(t){return f(t,"tabpane")},getControllerId:function(t){return f(t,"tab")}}}),[i,c,u,s,l,f]);return o.a.createElement(C.a.Provider,{value:m},o.a.createElement(N.a.Provider,{value:i||null},d))},P=n("TSYQ"),R=n.n(P),k=n("vUet"),U=o.a.forwardRef((function(t,e){var n=t.bsPrefix,a=t.as,r=void 0===a?"div":a,i=t.className,c=Object(g.a)(t,["bsPrefix","as","className"]),u=Object(k.a)(n,"tab-content");return o.a.createElement(r,Object(O.a)({ref:e},c,{className:R()(i,u)}))})),K=n("YECM"),I=n("dRu9"),T=n("z+q/"),F=((a={})[I.b]="show",a[I.a]="show",a),L=o.a.forwardRef((function(t,e){var n=t.className,a=t.children,i=Object(g.a)(t,["className","children"]),c=Object(r.useCallback)((function(t){Object(T.a)(t),i.onEnter&&i.onEnter(t)}),[i]);return o.a.createElement(I.e,Object(O.a)({ref:e,addEndListener:K.a},i,{onEnter:c}),(function(t,e){return o.a.cloneElement(a,Object(O.a)({},e,{className:R()("fade",n,a.props.className,F[t])}))}))}));L.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},L.displayName="Fade";var B=L;var J=o.a.forwardRef((function(t,e){var n=function(t){var e=Object(r.useContext)(C.a);if(!e)return t;var n=e.activeKey,a=e.getControlledId,o=e.getControllerId,i=Object(g.a)(e,["activeKey","getControlledId","getControllerId"]),c=!1!==t.transition&&!1!==i.transition,u=Object(N.b)(t.eventKey);return Object(O.a)({},t,{active:null==t.active&&null!=u?Object(N.b)(n)===u:t.active,id:a(t.eventKey),"aria-labelledby":o(t.eventKey),transition:c&&(t.transition||i.transition||B),mountOnEnter:null!=t.mountOnEnter?t.mountOnEnter:i.mountOnEnter,unmountOnExit:null!=t.unmountOnExit?t.unmountOnExit:i.unmountOnExit})}(t),a=n.bsPrefix,i=n.className,c=n.active,u=n.onEnter,s=n.onEntering,l=n.onEntered,d=n.onExit,f=n.onExiting,m=n.onExited,p=n.mountOnEnter,h=n.unmountOnExit,b=n.transition,v=n.as,y=void 0===v?"div":v,E=(n.eventKey,Object(g.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),x=Object(k.a)(a,"tab-pane");if(!c&&!b&&h)return null;var _=o.a.createElement(y,Object(O.a)({},E,{ref:e,role:"tabpanel","aria-hidden":!c,className:R()(i,x,{active:c})}));return b&&(_=o.a.createElement(b,{in:c,onEnter:u,onEntering:s,onEntered:l,onExit:d,onExiting:f,onExited:m,mountOnEnter:p,unmountOnExit:h},_)),o.a.createElement(C.a.Provider,{value:null},o.a.createElement(N.a.Provider,{value:null},_))}));J.displayName="TabPane";var q=J;function M(t,e){var n=0;return o.a.Children.map(t,(function(t){return o.a.isValidElement(t)?e(t,n++):t}))}function A(t){var e;return function(t,e){var n=0;o.a.Children.forEach(t,(function(t){o.a.isValidElement(t)&&e(t,n++)}))}(t,(function(t){null==e&&(e=t.props.eventKey)})),e}function X(t){var e=t.props,n=e.title,a=e.eventKey,r=e.disabled,i=e.tabClassName,c=e.id;return null==n?null:o.a.createElement(w.a,{as:j.a,eventKey:a,disabled:r,id:c,className:i},n)}var z=function(t){var e=Object(x.a)(t,{activeKey:"onSelect"}),n=e.id,a=e.onSelect,r=e.transition,i=e.mountOnEnter,c=e.unmountOnExit,u=e.children,s=e.activeKey,l=void 0===s?A(u):s,d=Object(g.a)(e,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return o.a.createElement(S,{id:n,activeKey:l,onSelect:a,transition:r,mountOnEnter:i,unmountOnExit:c},o.a.createElement(_.a,Object(O.a)({},d,{role:"tablist",as:"nav"}),M(u,X)),o.a.createElement(U,null,M(u,(function(t){var e=Object(O.a)({},t.props);return delete e.title,delete e.disabled,delete e.tabClassName,o.a.createElement(q,e)}))))};z.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},z.displayName="Tabs";var D=z,Y=n("dI71"),V=function(t){function e(){return t.apply(this,arguments)||this}return Object(Y.a)(e,t),e.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},e}(o.a.Component);V.Container=S,V.Content=U,V.Pane=q;var G=V,W=n("MBJH"),Q=o.a.createElement;function H(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(p.a)(t);if(e){var r=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(m.a)(this,n)}}var Z=function(t){Object(f.a)(n,t);var e=H(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.entities||[];return Q("div",null,Q(D,{defaultActiveKey:"entities",id:"uncontrolled-tab-example"},Q(G,{eventKey:"entities",title:"Entities"},Q(W.a,{hover:!0,responsive:!0},Q("thead",null,Q("tr",null,Q("th",{scope:"col"},"Value"),Q("th",{scope:"col"},"Type Name"),Q("th",{scope:"col"},"Confidence Score"))),Q("tbody",null,t.map((function(t,e){return Q("tr",{scope:"row",key:e},Q("td",null,t.entity_value),Q("td",null,t.entity_type),Q("td",null,parseFloat(t.confidence_score).toFixed(3)))}))))),Q(G,{eventKey:"intent",title:"Intent"},Q(W.a,{hover:!0},Q("thead",null,Q("tr",null,Q("th",null,"Type"),Q("th",null,"Confidence Score"))),Q("tbody",null,Q("tr",{key:"0"},Q("td",null,this.props.intent.intent_type),Q("td",null,parseFloat(this.props.intent.confidence_score).toFixed(3))))))))}}]),n}(r.Component),$=n("6c8n"),tt=n.n($),et={entities:[{confidence_score:.9827150702476501,end:38,entity_type:"fromloc.city_name",entity_value:"pittsburgh",start:28},{confidence_score:.6288758516311646,end:55,entity_type:"toloc.city_name",entity_value:"new york city",start:42},{confidence_score:.28884461522102356,end:68,entity_type:"depart_date.day_name",entity_value:"wednesday",start:59},{confidence_score:.2609766125679016,end:76,entity_type:"depart_time.period_of_day",entity_value:"morning",start:69}],intent:{confidence_score:"0.9987360835075378",intent_type:"atis_flight"},text:"please show me flights from pittsburgh to new york city on wednesday morning serving breakfast"},nt=o.a.createElement;function at(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=Object(p.a)(t);if(e){var r=Object(p.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(m.a)(this,n)}}var rt=function(t){Object(f.a)(n,t);var e=at(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).startUtt="please show me flights from pittsburgh to new york city on wednesday morning serving breakfast",a.urlStr="https://cionlu-atis.herokuapp.com/api/v1/nlu",a.handleUtteranceChange=a.handleUtteranceChange.bind(Object(d.a)(a)),a.handleSubmitFrom=a.handleSubmitFrom.bind(Object(d.a)(a)),a.state={nluResponse:et},a}return Object(l.a)(n,[{key:"handleUtteranceChange",value:function(t){var e=t.target.value;"\n"===e.charAt(e.length-1)?this.handleSubmitFrom(t):this.setState({utterance:t.target.value})}},{key:"handleSubmitFrom",value:function(t){var e=this;t.preventDefault();var n=new URL(this.urlStr),a={utterance:this.state.utterance};n.search=new URLSearchParams(a),fetch(n,{method:"GET",mode:"cors"}).then((function(t){if(200===t.status)return t.json()})).then((function(t){t&&e.setState({nluResponse:t})})).catch((function(t){return console.error("Error:",t)}))}},{key:"componentDidMount",value:function(){var t=this;this.setState({utterance:this.startUtt});var e=new URL(this.urlStr),n={utterance:this.startUtt};e.search=new URLSearchParams(n),fetch(e,{method:"GET"}).then((function(t){if(200===t.status)return t.json()})).then((function(e){e&&t.setState({nluResponse:e})})).catch((function(t){return console.error("Error:",t)}))}},{key:"render",value:function(){return nt(h.a,{className:tt.a.nluContent},nt(b.a,{className:"justify-content-center"},nt(v.a,{xs:"auto"},nt("h1",null,"Natural Language API demo"))),nt(b.a,null,nt(v.a,null,nt("h5",null,"State something"),nt(y.a,{onSubmit:this.handleSubmitFrom},nt(y.a.Group,null,nt(y.a.Control,{as:"textarea",rows:"3",name:"utterance",id:"utterance",value:this.state.utterance,onChange:this.handleUtteranceChange,placeholder:this.startUtt}),nt(E.a,{className:"float-right ".concat(tt.a.submitBtn),color:"primary",type:"submit"},"Analyze"))))),nt(b.a,{className:"mt-3"},nt(v.a,null,nt("h5",null,"See Language Understanding in action"),nt(Z,{intent:this.state.nluResponse.intent,entities:this.state.nluResponse.entities}))))}}]),n}(o.a.Component),ot=n("Xodn"),it=n.n(ot),ct=o.a.createElement;function ut(t){var e=t.currentUrl,n="Natural Language Understanding | ".concat(u.b," artificial intelligence");return ct(u.a,{home:!0},ct(c.a,null,ct("title",null,n),ct("meta",{property:"og:site_name",content:n}),ct("meta",{property:"og:title",content:"".concat(n)}),ct("meta",{property:"og:url",content:"https://ionkom.com/"}),ct("meta",{name:"description",content:"Natural Language software uses machine learning to predict text insights like user intention and domain specific entities. You can extract information about people, places, and events and use them to better understand customer conversations."}),ct("link",{rel:"canonical",href:e,key:"canonical"})),ct(h.a,null,ct(b.a,null,ct(v.a,null,ct("h1",null,"Natural Language Understanding"))),ct(b.a,null,ct(v.a,null,ct("p",{className:it.a.textContent},"Find the meaning from unstructured text using ionkom machine learning."))),ct(b.a,null,ct(v.a,null,ct(E.a,null,"Try it for free"))),ct(b.a,{className:"mt-5 pt-5"},ct(v.a,{md:6,sm:12},ct("h2",null,"Intelligent text analysis"),ct("p",{className:it.a.textContent},"Natural Language software uses machine learning to predict text insights like user intention and domain specific entities. You can extract information about people, places, and events and use them to better understand customer conversations.")),ct(v.a,{md:6,sm:12},ct("img",{src:"/img/paper-2935367_640.png",alt:"natural language understanding",width:"40%"}))),ct(b.a,{className:"mt-5 pt-5"},ct(v.a,{md:4,sm:12},ct("h3",null,"Intent Detection"),ct("p",{className:it.a.textContent},"Classify text by sentence meaning. Find out what your customers want, in the example bellow 'flight' will be the predicted intention")),ct(v.a,{md:4,sm:12},ct("h3",null,"Entity Recognition"),ct("p",{className:it.a.textContent},"Extract relevant information from unstructured text. Entities can be places, dates, persons in a general context or more precise like in the example bellow entities dependent from sentence context like 'from location' and 'to location'.")),ct(v.a,{md:4,sm:12},ct("h3",null,"Custom training"),ct("p",{className:it.a.textContent},"Use our models to learn from your data"))),ct("hr",null)),ct(rt,null))}},Xodn:function(t,e,n){t.exports={textContent:"nlu_textContent__3rKjN"}},foSv:function(t,e,n){"use strict";function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return a}))},md7G:function(t,e,n){"use strict";function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return o}));var r=n("JX7q");function o(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?Object(r.a)(t):e}},vuIU:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}n.d(e,"a",(function(){return r}))}},[["SrO9",0,2,1,3,4]]]);