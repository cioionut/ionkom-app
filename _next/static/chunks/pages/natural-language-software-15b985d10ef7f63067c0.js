_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"6c8n":function(e,t,n){e.exports={nluContent:"nluinaction_nluContent__vjRet",submitBtn:"nluinaction_submitBtn__APT7N"}},"BO/t":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,r,a,i){var c=r||"<<anonymous>>",o=i||n;if(null==t[n])return new Error("The "+a+" `"+o+"` is required to make `"+c+"` accessible for users of assistive technologies such as screen readers.");for(var s=arguments.length,l=Array(s>5?s-5:0),u=5;u<s;u++)l[u-5]=arguments[u];return e.apply(void 0,[t,n,r,a,i].concat(l))}},e.exports=t.default},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return a}))},MBJH:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),i=n("TSYQ"),c=n.n(i),o=n("q1tI"),s=n.n(o),l=n("vUet"),u=s.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,o=e.striped,u=e.bordered,d=e.borderless,h=e.hover,b=e.size,f=e.variant,m=e.responsive,j=Object(a.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),p=Object(l.a)(n,"table"),O=c()(i,p,f&&p+"-"+f,b&&p+"-"+b,o&&p+"-striped",u&&p+"-bordered",d&&p+"-borderless",h&&p+"-hover"),x=s.a.createElement("table",Object(r.a)({},j,{className:O,ref:t}));if(m){var v=p+"-responsive";return"string"===typeof m&&(v=v+"-"+m),s.a.createElement("div",{className:v},x)}return x}));t.a=u},SrO9:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/natural-language-software",function(){return n("WWsS")}])},WWsS:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ce}));var r,a=n("nKUr"),i=n("g4pe"),c=n.n(i),o=n("5M6V"),s=n("1OyB"),l=n("vuIU"),u=n("JX7q"),d=n("Ji7U"),h=n("md7G"),b=n("foSv"),f=n("7vrA"),m=n("3Z9Z"),j=n("JI6e"),p=n("QojX"),O=n("cWnB"),x=n("q1tI"),v=n.n(x),y=n("wx14"),g=n("zLVn"),E=(n("BO/t"),n("JCAc")),_=n("+YzT"),w=n("iKII"),N=n("Mj5q"),C=n("Qdst"),S=n("ILyh"),I=function(e){var t=Object(E.a)(e,{activeKey:"onSelect"}),n=t.id,r=t.generateChildId,a=t.onSelect,i=t.activeKey,c=t.transition,o=t.mountOnEnter,s=t.unmountOnExit,l=t.children,u=Object(x.useMemo)((function(){return r||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,r]),d=Object(x.useMemo)((function(){return{onSelect:a,activeKey:i,transition:c,mountOnEnter:o||!1,unmountOnExit:s||!1,getControlledId:function(e){return u(e,"tabpane")},getControllerId:function(e){return u(e,"tab")}}}),[a,i,c,o,s,u]);return v.a.createElement(C.a.Provider,{value:d},v.a.createElement(S.a.Provider,{value:a||null},l))},P=n("TSYQ"),k=n.n(P),U=n("vUet"),R=v.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.as,a=void 0===r?"div":r,i=e.className,c=Object(g.a)(e,["bsPrefix","as","className"]),o=Object(U.a)(n,"tab-content");return v.a.createElement(a,Object(y.a)({ref:t},c,{className:k()(i,o)}))})),T=n("YECM"),K=n("dRu9"),L=n("z+q/"),A=((r={})[K.b]="show",r[K.a]="show",r),q=v.a.forwardRef((function(e,t){var n=e.className,r=e.children,a=Object(g.a)(e,["className","children"]),i=Object(x.useCallback)((function(e){Object(L.a)(e),a.onEnter&&a.onEnter(e)}),[a]);return v.a.createElement(K.e,Object(y.a)({ref:t,addEndListener:T.a},a,{onEnter:i}),(function(e,t){return v.a.cloneElement(r,Object(y.a)({},t,{className:k()("fade",n,r.props.className,A[e])}))}))}));q.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},q.displayName="Fade";var F=q;var B=v.a.forwardRef((function(e,t){var n=function(e){var t=Object(x.useContext)(C.a);if(!t)return e;var n=t.activeKey,r=t.getControlledId,a=t.getControllerId,i=Object(g.a)(t,["activeKey","getControlledId","getControllerId"]),c=!1!==e.transition&&!1!==i.transition,o=Object(S.b)(e.eventKey);return Object(y.a)({},e,{active:null==e.active&&null!=o?Object(S.b)(n)===o:e.active,id:r(e.eventKey),"aria-labelledby":a(e.eventKey),transition:c&&(e.transition||i.transition||F),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:i.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:i.unmountOnExit})}(e),r=n.bsPrefix,a=n.className,i=n.active,c=n.onEnter,o=n.onEntering,s=n.onEntered,l=n.onExit,u=n.onExiting,d=n.onExited,h=n.mountOnEnter,b=n.unmountOnExit,f=n.transition,m=n.as,j=void 0===m?"div":m,p=(n.eventKey,Object(g.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),O=Object(U.a)(r,"tab-pane");if(!i&&!f&&b)return null;var E=v.a.createElement(j,Object(y.a)({},p,{ref:t,role:"tabpanel","aria-hidden":!i,className:k()(a,O,{active:i})}));return f&&(E=v.a.createElement(f,{in:i,onEnter:c,onEntering:o,onEntered:s,onExit:l,onExiting:u,onExited:d,mountOnEnter:h,unmountOnExit:b},E)),v.a.createElement(C.a.Provider,{value:null},v.a.createElement(S.a.Provider,{value:null},E))}));B.displayName="TabPane";var J=B;function M(e,t){var n=0;return v.a.Children.map(e,(function(e){return v.a.isValidElement(e)?t(e,n++):e}))}function z(e){var t;return function(e,t){var n=0;v.a.Children.forEach(e,(function(e){v.a.isValidElement(e)&&t(e,n++)}))}(e,(function(e){null==t&&(t=e.props.eventKey)})),t}function X(e){var t=e.props,n=t.title,r=t.eventKey,a=t.disabled,i=t.tabClassName,c=t.id;return null==n?null:v.a.createElement(N.a,{as:w.a,eventKey:r,disabled:a,id:c,className:i},n)}var D=function(e){var t=Object(E.a)(e,{activeKey:"onSelect"}),n=t.id,r=t.onSelect,a=t.transition,i=t.mountOnEnter,c=t.unmountOnExit,o=t.children,s=t.activeKey,l=void 0===s?z(o):s,u=Object(g.a)(t,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return v.a.createElement(I,{id:n,activeKey:l,onSelect:r,transition:a,mountOnEnter:i,unmountOnExit:c},v.a.createElement(_.a,Object(y.a)({},u,{role:"tablist",as:"nav"}),M(o,X)),v.a.createElement(R,null,M(o,(function(e){var t=Object(y.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,v.a.createElement(J,t)}))))};D.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},D.displayName="Tabs";var V=D,W=n("dI71"),Y=function(e){function t(){return e.apply(this,arguments)||this}return Object(W.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(v.a.Component);Y.Container=I,Y.Content=R,Y.Pane=J;var G=Y,Q=n("MBJH");function H(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(b.a)(e);if(t){var a=Object(b.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var Z=function(e){Object(d.a)(n,e);var t=H(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.entities||[];return Object(a.jsx)("div",{children:Object(a.jsxs)(V,{defaultActiveKey:"entities",id:"uncontrolled-tab-example",children:[Object(a.jsx)(G,{eventKey:"entities",title:"Entities",children:Object(a.jsxs)(Q.a,{hover:!0,responsive:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Value"}),Object(a.jsx)("th",{scope:"col",children:"Type Name"}),Object(a.jsx)("th",{scope:"col",children:"Confidence Score"})]})}),Object(a.jsx)("tbody",{children:e.map((function(e,t){return Object(a.jsxs)("tr",{scope:"row",children:[Object(a.jsx)("td",{children:e.entity_value}),Object(a.jsx)("td",{children:e.entity_type}),Object(a.jsx)("td",{children:parseFloat(e.confidence_score).toFixed(3)})]},t)}))})]})}),Object(a.jsx)(G,{eventKey:"intent",title:"Intent",children:Object(a.jsxs)(Q.a,{hover:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Type"}),Object(a.jsx)("th",{children:"Confidence Score"})]})}),Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:this.props.intent.intent_type}),Object(a.jsx)("td",{children:parseFloat(this.props.intent.confidence_score).toFixed(3)})]},"0")})]})})]})})}}]),n}(x.Component),$=n("6c8n"),ee=n.n($),te={entities:[{confidence_score:.9827150702476501,end:38,entity_type:"fromloc.city_name",entity_value:"pittsburgh",start:28},{confidence_score:.6288758516311646,end:55,entity_type:"toloc.city_name",entity_value:"new york city",start:42},{confidence_score:.28884461522102356,end:68,entity_type:"depart_date.day_name",entity_value:"wednesday",start:59},{confidence_score:.2609766125679016,end:76,entity_type:"depart_time.period_of_day",entity_value:"morning",start:69}],intent:{confidence_score:"0.9987360835075378",intent_type:"atis_flight"},text:"please show me flights from pittsburgh to new york city on wednesday morning serving breakfast"};function ne(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(b.a)(e);if(t){var a=Object(b.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var re=function(e){Object(d.a)(n,e);var t=ne(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).startUtt="please show me flights from pittsburgh to new york city on wednesday morning serving breakfast",r.urlStr="https://cionlu-atis.herokuapp.com/api/v1/nlu",r.handleUtteranceChange=r.handleUtteranceChange.bind(Object(u.a)(r)),r.handleSubmitFrom=r.handleSubmitFrom.bind(Object(u.a)(r)),r.state={nluResponse:te},r}return Object(l.a)(n,[{key:"handleUtteranceChange",value:function(e){var t=e.target.value;"\n"===t.charAt(t.length-1)?this.handleSubmitFrom(e):this.setState({utterance:e.target.value})}},{key:"handleSubmitFrom",value:function(e){var t=this;e.preventDefault();var n=new URL(this.urlStr),r={utterance:this.state.utterance};n.search=new URLSearchParams(r),fetch(n,{method:"GET",mode:"cors"}).then((function(e){if(200===e.status)return e.json()})).then((function(e){e&&t.setState({nluResponse:e})})).catch((function(e){return console.error("Error:",e)}))}},{key:"componentDidMount",value:function(){var e=this;this.setState({utterance:this.startUtt});var t=new URL(this.urlStr),n={utterance:this.startUtt};t.search=new URLSearchParams(n),fetch(t,{method:"GET"}).then((function(e){if(200===e.status)return e.json()})).then((function(t){t&&e.setState({nluResponse:t})})).catch((function(e){return console.error("Error:",e)}))}},{key:"render",value:function(){return Object(a.jsxs)(f.a,{className:ee.a.nluContent,children:[Object(a.jsx)(m.a,{className:"justify-content-center",children:Object(a.jsx)(j.a,{xs:"auto",children:Object(a.jsx)("h3",{children:"Natural Language API demo"})})}),Object(a.jsx)(m.a,{children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)("h5",{children:"State something"}),Object(a.jsx)(p.a,{onSubmit:this.handleSubmitFrom,children:Object(a.jsxs)(p.a.Group,{children:[Object(a.jsx)(p.a.Control,{as:"textarea",rows:"3",name:"utterance",id:"utterance",value:this.state.utterance,onChange:this.handleUtteranceChange,placeholder:this.startUtt}),Object(a.jsx)(O.a,{className:"float-right ".concat(ee.a.submitBtn),color:"primary",type:"submit",children:"Analyze"})]})})]})}),Object(a.jsx)(m.a,{className:"mt-3",children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)("h5",{id:"nluInAction",children:"See Language Understanding in action"}),Object(a.jsx)(Z,{intent:this.state.nluResponse.intent,entities:this.state.nluResponse.entities})]})})]})}}]),n}(v.a.Component),ae=n("Xodn"),ie=n.n(ae);function ce(e){var t=e.currentUrl,n="Natural Language Understanding | ".concat(o.b," NLU AI");return Object(a.jsxs)(o.a,{home:!0,children:[Object(a.jsxs)(c.a,{children:[Object(a.jsx)("title",{children:n}),Object(a.jsx)("meta",{property:"og:site_name",content:n}),Object(a.jsx)("meta",{property:"og:title",content:"".concat(n)}),Object(a.jsx)("meta",{property:"og:url",content:"https://ionkom.com/"}),Object(a.jsx)("meta",{name:"description",content:"Natural Language Understanding service uses machine learning to predict text insights like user intention and domain specific entities. You can extract information about people, places, and events and use them to better understand customer conversations."}),Object(a.jsx)("link",{rel:"canonical",href:t},"canonical")]}),Object(a.jsxs)(f.a,{children:[Object(a.jsx)(m.a,{children:Object(a.jsx)(j.a,{children:Object(a.jsx)("h1",{children:"Natural Language Understanding"})})}),Object(a.jsx)(m.a,{children:Object(a.jsx)(j.a,{children:Object(a.jsx)("p",{className:ie.a.textContent,children:"Find the meaning from unstructured text using Ionkom machine learning."})})}),Object(a.jsx)(m.a,{children:Object(a.jsx)(j.a,{children:Object(a.jsx)(O.a,{href:"#nluInAction",children:"Try it for free"})})}),Object(a.jsxs)(m.a,{className:"mt-5 pt-5",children:[Object(a.jsxs)(j.a,{md:7,sm:12,children:[Object(a.jsx)("h2",{children:"Intelligent text analysis"}),Object(a.jsx)("p",{className:ie.a.textContent,children:"Natural Language Understanding (NLU) enables computers to understand human language contained in unstructured data and deliver critical insights."}),Object(a.jsx)("p",{className:ie.a.textContent,children:"NLU uses machine learning to predict text insights like user intention and domain specific entities. You can extract information about people, places, and events, and use them to better understand customer conversations."})]}),Object(a.jsx)(j.a,{md:5,sm:12,className:"mt-3",children:Object(a.jsx)("img",{src:"/img/paper-2935367_640.png",alt:"natural language understanding",width:"50%"})})]}),Object(a.jsxs)(m.a,{className:"mt-5 pt-5",children:[Object(a.jsxs)(j.a,{md:4,sm:12,children:[Object(a.jsx)("h3",{children:"Chatbots and customer support"}),Object(a.jsx)("p",{className:ie.a.textContent,children:"Combining Language Understanding and Dialog System - Ionkom AI enable customers to create conversational interfaces for various scenarios like banking, travel and entertainment. In cloud natural language models always learn, you can benefit from the latest versions using provided APIs."})]}),Object(a.jsxs)(j.a,{md:4,sm:12,children:[Object(a.jsx)("h3",{children:"Enterprise-ready, available on premise"}),Object(a.jsx)("p",{className:ie.a.textContent,children:"The service is ready to be deployed in existing commercial applications and can scale with enterprise quality and performance. The service meets international compliance standards, support unlimited API calls, making it highly accessible in your organization."})]}),Object(a.jsxs)(j.a,{md:4,sm:12,children:[Object(a.jsx)("h3",{children:"Custom language solution"}),Object(a.jsx)("p",{className:ie.a.textContent,children:"Quickly build a custom language solution, just bring your data, no coding skils required. With our support the models can benefit from always learning. Active learning support is used to continuously improve the quality of the natural language models."})]})]}),Object(a.jsx)(m.a,{className:"mt-3 pt-3",children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)("h3",{children:"Two classifiers one model"}),Object(a.jsx)("p",{className:ie.a.textContent,children:"Underlying ML Technology - The algorithm uses state of the art natural language understanding approaches. It uses a sequence to sequence neural network, that encode the meaning of a sentence and two decoders, one for intent detection and another for slot filling (or entity recognition) that decode the captured meaning."}),Object(a.jsxs)("ul",{className:ie.a.textContent,children:[Object(a.jsx)("li",{children:Object(a.jsx)("p",{children:"Intent detection: Classify text by sentence meaning. Find out what your customers want, in the example bellow 'flight' will be the predicted intention."})}),Object(a.jsx)("li",{children:Object(a.jsx)("p",{children:"Entity Recognition: Extract relevant information from unstructured text. Entities can be places, dates, persons in a general context or more precise like in the example bellow entities dependent from sentence context like 'from location' and 'to location'."})})]})]})}),Object(a.jsx)("hr",{})]}),Object(a.jsx)(re,{})]})}},Xodn:function(e,t,n){e.exports={textContent:"nlu_textContent__3rKjN"}},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},md7G:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return i}));var a=n("JX7q");function i(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(a.a)(e):t}},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))}},[["SrO9",0,2,1,3,4]]]);