(this["webpackJsonpfunnel-state-machine"]=this["webpackJsonpfunnel-state-machine"]||[]).push([[0],{27:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var i=n(7),c=n.n(i),r=n(21),a=n.n(r),o=(n(27),n(15)),d=n(33),s=n(5),j=c.a.createContext({});var u,l=function(t){var e=t.stateMachine,n=t.children,i=Object(d.a)(e),c=Object(o.a)(i,2),r=c[0],a=c[1];return Object(s.jsx)(j.Provider,{value:{currentState:r,send:a},children:n})},b=function(t){var e=t.state,n=t.children,c=Object(i.useContext)(j),r=c.currentState,a=c.send;return r.matches(e)?Object(s.jsx)("div",{children:n(a)}):Object(s.jsx)("div",{})},O=function(t){var e=t.add_participant,n=t.additional_information,c=t.proceed_to_payment,r=Object(i.useState)(1),a=Object(o.a)(r,2),d=a[0],j=a[1];return Object(s.jsxs)("div",{children:[Object(s.jsxs)("h2",{children:["Register participant number ",d]}),Object(s.jsx)("button",{onClick:function(){j((function(t){return t+1})),e()},children:"Continue registering"}),Object(s.jsx)("button",{onClick:n,children:"Add additional information"}),Object(s.jsx)("button",{onClick:c,children:"Proceed to Payment"})]})},h=n(13),f=n(34),x="SELECT_ACTIVITY",p="SUBMIT_ATTENDEE",m="ADD_ATTENDEE",_="ADD_INFO",v="SUBMIT_ADDITIONNAL_INFORMATION",y=Object(f.a)({id:"funnel-state-machine",initial:"activity",states:{activity:{on:Object(h.a)({},x,"register_attendee")},register_attendee:{on:(u={},Object(h.a)(u,m,"register_attendee"),Object(h.a)(u,_,"additional_information"),Object(h.a)(u,p,"payment"),u)},additional_information:{on:Object(h.a)({},v,"payment")},payment:{type:"final"}}});n(29);var g=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(l,{stateMachine:y,children:[Object(s.jsx)(b,{state:"activity",children:function(t){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Activity Step"}),Object(s.jsx)("button",{onClick:function(){return t(x)},children:"next"})]})}}),Object(s.jsx)(b,{state:"register_attendee",children:function(t){return Object(s.jsx)(O,{add_participant:function(){return t(m)},additional_information:function(){return t(_)},proceed_to_payment:function(){return t(p)}})}}),Object(s.jsx)(b,{state:"additional_information",children:function(t){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Additional information"}),Object(s.jsx)("button",{onClick:function(){return t(v)},children:"next"})]})}}),Object(s.jsx)(b,{state:"payment",children:function(){return Object(s.jsx)("h2",{children:"payment"})}})]})})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),r(t),a(t)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),C()}},[[30,1,2]]]);
//# sourceMappingURL=main.8a6028e1.chunk.js.map