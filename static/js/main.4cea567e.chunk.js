(this["webpackJsonpglow-up-fe"]=this["webpackJsonpglow-up-fe"]||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a,c,r,s,i,o,l=n(2),d=n.n(l),b=n(58),j=n.n(b),u=(n(69),n(70),n(8)),h=(n(71),n(82)),m=n(31),O=n(89),p=Object(O.a)(a||(a=Object(m.a)(["\n  mutation createMood($mood: Int!, $description: String) {\n    createMood(input: { params: { mood: $mood, description: $description } }) {\n      user {\n        id\n      }\n    }\n  }\n"]))),f=Object(O.a)(c||(c=Object(m.a)(["\n  mutation addHabitEntries($idArr: [HabitEntryInput!]!) {\n    createHabitEntry(input: { params: $idArr }) {\n      user {\n        habitEntries {\n          habitId\n          status\n          date\n        }\n      }\n    }\n  }\n"]))),x=n(3),g=function(){var e=Object(l.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(l.useState)(""),r=Object(u.a)(c,2),s=r[0],i=r[1],o=Object(l.useState)(!0),d=Object(u.a)(o,2),b=d[0],j=d[1],m=Object(h.a)(p),O=Object(u.a)(m,1)[0],f=Object(l.useState)(!1),g=Object(u.a)(f,2),v=g[0],y=g[1];return Object(x.jsx)("section",{className:"mood-form-container",children:v?Object(x.jsx)("article",{className:"mood-form",children:Object(x.jsx)("h2",{children:"Thank you for submitting your mood today!"})}):Object(x.jsxs)("form",{className:"mood-form",onSubmit:function(e){e.preventDefault(),n?(O({variables:{mood:parseInt(n),description:s}}),j(!0),a(""),i(""),y(!0)):j(!1)},children:[Object(x.jsx)("h2",{children:"How are you feeling today?"}),Object(x.jsxs)("div",{className:"moods-container",children:[Object(x.jsx)("input",{type:"radio","aria-label":"strongly positive",name:"mood",id:"strongly-positive",value:"4",onChange:function(e){return a(e.currentTarget.value)},checked:"4"===n}),Object(x.jsx)("label",{htmlFor:"strongly-positive",className:"mood-label",children:"\ud83d\ude01"}),Object(x.jsx)("input",{type:"radio","aria-label":"positive",name:"mood",id:"positive",value:"3",onChange:function(e){return a(e.currentTarget.value)},checked:"3"===n}),Object(x.jsx)("label",{htmlFor:"positive",className:"mood-label",children:"\ud83d\ude42"}),Object(x.jsx)("input",{type:"radio","aria-label":"neutral",name:"mood",id:"neutral",value:"2",onChange:function(e){return a(e.currentTarget.value)},checked:"2"===n}),Object(x.jsx)("label",{htmlFor:"neutral",className:"mood-label",children:"\ud83d\ude10"}),Object(x.jsx)("input",{type:"radio","aria-label":"negative",name:"mood",id:"negative",value:"1",onChange:function(e){return a(e.currentTarget.value)},checked:"1"===n}),Object(x.jsx)("label",{htmlFor:"negative",className:"mood-label",children:"\ud83d\ude41"}),Object(x.jsx)("input",{type:"radio","aria-label":"strongly negative",name:"mood",id:"strongly-negative",value:"0",onChange:function(e){return a(e.currentTarget.value)},checked:"0"===n}),Object(x.jsx)("label",{htmlFor:"strongly-negative",className:"mood-label",children:"\ud83d\ude2d"})]}),!b&&Object(x.jsx)("p",{className:"error-message",children:"**Please select your mood today!**"}),Object(x.jsx)("input",{type:"text",placeholder:"Today, I am feeling...",className:"mood-description",value:s,onChange:function(e){return i(e.currentTarget.value)}}),Object(x.jsx)("button",{className:"mood-submit-button",type:"submit",children:"Submit"})]})})},v=(n(74),Object(l.createContext)({userHabits:[],setUserHabits:function(){},checkedHabitIds:[],setCheckedHabitIds:function(){}})),y=function(e){var t=e.children,n=Object(l.useState)([]),a=Object(u.a)(n,2),c=a[0],r=a[1],s=Object(l.useState)([]),i=Object(u.a)(s,2),o=i[0],d=i[1];return Object(x.jsx)(v.Provider,{value:{userHabits:c,setUserHabits:r,checkedHabitIds:o,setCheckedHabitIds:d},children:t})},k=(Object(O.a)(r||(r=Object(m.a)(["\n  query fetchUser {\n    fetchUser {\n      id\n      username\n\n      moods {\n        id\n        description\n        mood\n        createdAt\n      }\n\n      habitEntries {\n        id\n        date\n        habitId\n        status\n      }\n\n      journalEntries {\n        id\n        content\n        date\n      }\n    }\n  }\n"]))),Object(O.a)(s||(s=Object(m.a)(["\n  query fetchHabits {\n    fetchHabits {\n      id\n      name\n    }\n  }\n"])))),w=Object(O.a)(i||(i=Object(m.a)(["\n  query fetchUser {\n    fetchUser {\n      id\n      dailyMood {\n        id\n        mood\n        description\n      }\n\n      dailyHabits {\n        id\n        name\n      }\n    }\n  }\n"]))),N=Object(O.a)(o||(o=Object(m.a)(["\n  query fetchUser {\n    fetchUser {\n      id\n      monthlyMoods {\n        id\n        createdAt\n        mood\n      }\n    }\n  }\n"]))),S=n(87),H=n(16);n(75);function I(e){var t=Object(l.useContext)(v),n=t.checkedHabitIds,a=t.setCheckedHabitIds,c=Object(l.useState)(n.includes(parseInt(e.id))),r=Object(u.a)(c,2),s=r[0],i=r[1],o=Object(l.useState)({backgroundColor:"#e4dfdd",color:"black"}),d=Object(u.a)(o,2),b=d[0],j=d[1];return Object(x.jsx)("button",{className:"habit-card-button",onClick:function(e){switch(e.preventDefault(),s){case!1:i(!0),a([].concat(Object(H.a)(n),[parseInt(e.currentTarget.id)])),j({backgroundColor:"#4a5582",color:"#fff"});break;case!0:i(!1);var t=n.filter((function(t){return t!==parseInt(e.currentTarget.id)}));a(t),j({backgroundColor:"#e4dfdd",color:"black"})}},id:e.id,style:b,children:e.name})}n.p;var C=function(){var e=Object(S.a)(k),t=e.error,n=e.data,a=Object(l.useContext)(v).checkedHabitIds,c=Object(h.a)(f),r=Object(u.a)(c,1)[0];return Object(x.jsxs)("section",{className:"habit-form-container",children:[Object(x.jsx)("h2",{className:"habit-form-question",children:"What have you accomplished?"}),n?Object(x.jsxs)("form",{className:"habit-form",onSubmit:function(e){e.preventDefault();var t=a.map((function(e){return{id:e}}));t.length?(r({variables:{idArr:t}}),alert("Great job")):alert("You have not selected any habit")},children:[n.fetchHabits.map((function(e){return Object(x.jsx)(I,{name:e.name,id:e.id},e.id)})),Object(x.jsx)("button",{className:"habit-submit-button",type:"submit",children:"Submit"})]}):Object(x.jsx)("h2",{children:t})]})},T=(n(76),n(27)),M=(n(77),n(17)),U=n(60);M.d.register(M.c,M.i,M.k,M.h,M.o,M.p,M.f);var A={0:"\ud83d\ude2d",1:"\ud83d\ude41",2:"\ud83d\ude10",3:"\ud83d\ude42",4:"\ud83d\ude01"},E={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Monthly Moods"}},scales:{yAxis:{ticks:{callback:function(e){return A[e]}}}}},D=function(){var e=Object(S.a)(N),t=e.loading,n=e.data,a=e.error,c=Object(l.useState)([]),r=Object(u.a)(c,2),s=r[0],i=r[1],o=Object(l.useState)([]),d=Object(u.a)(o,2),b=d[0],j=d[1];Object(l.useEffect)((function(){if(!t&&n){var e=n.fetchUser.monthlyMoods.slice().sort((function(e,t){return parseInt(e.createdAt.slice(8,10))-parseInt(t.createdAt.slice(8,10))})).map((function(e){var t=new Date(e.createdAt);return new Intl.DateTimeFormat("en-US").format(t)})),a=n.fetchUser.monthlyMoods.slice().reverse().map((function(e){return e.mood}));i(e),j(a)}}),[n,t]);var h={labels:s,datasets:[{type:"line",label:"Moods",borderColor:"rgb(255, 99, 132)",borderWidth:2,fill:!1,data:b}]},m=(new Date).toLocaleString("default",{month:"long"});return Object(x.jsxs)("section",{className:"graph-container",children:[Object(x.jsx)("h3",{className:"month-title",children:m}),!!b.length&&Object(x.jsx)(U.a,{type:"line",data:h,options:E}),a&&Object(x.jsx)("h2",{children:"Sorry, something went wrong!"})]})},F=function(){var e=Object(l.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(l.useState)([]),r=Object(u.a)(c,2),s=r[0],i=r[1],o=Object(S.a)(w),d=o.loading,b=o.error,j=o.data;Object(l.useEffect)((function(){!d&&j&&(a(j.fetchUser.dailyMood),i(j.fetchUser.dailyHabits),console.log("is this running"))}),[d,j]);var h=new Date,m=String(h.getDate()).padStart(2,"0"),O=String(h.getMonth()+1).padStart(2,"0")+"/"+m+"/"+h.getFullYear();return Object(x.jsxs)("main",{children:[b&&Object(x.jsx)("h2",{children:"Oops, something went wrong!"}),Object(x.jsxs)("section",{className:"dashboard-container",children:[Object(x.jsx)("h2",{className:"page-title",children:"My Dashboard"}),Object(x.jsxs)("article",{className:"today-container",children:[n?Object(x.jsxs)("div",{children:[Object(x.jsxs)("h3",{children:["Today ",O]}),Object(x.jsxs)("p",{children:["I am feeling: ",function(){if(n)switch(n.mood){case 0:return"\ud83d\ude2d";case 1:return"\ud83d\ude41";case 2:return"\ud83d\ude10";case 3:return"\ud83d\ude42";case 4:return"\ud83d\ude01";default:return"\u2753"}}()]})]}):Object(x.jsx)(T.b,{to:"/glow-up-fe/",children:"\u2795 Enter your mood today!"}),s.length?Object(x.jsxs)("div",{className:"completed-habits",children:[Object(x.jsx)("h4",{children:"Habits I completed:"}),s.map((function(e){return Object(x.jsxs)("p",{children:["\u2705 ",e.name]},e.id)})),Object(x.jsx)(T.b,{to:"/glow-up-fe/habit-tracker",children:"\u2795 Add more habits"})]}):Object(x.jsx)(T.b,{to:"/glow-up-fe/habit-tracker",children:"\u2795 Enter your habits!"})]})]}),Object(x.jsx)("section",{className:"week-container",children:Object(x.jsx)("h3",{children:"This week..."})}),Object(x.jsx)(D,{})]})},q=n(9);var $=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("header",{className:"header",children:[Object(x.jsx)("h1",{children:"GlowUp"}),Object(x.jsxs)("nav",{className:"nav",children:[Object(x.jsx)(T.c,{to:"glow-up-fe/",children:"Mood Tracker"}),Object(x.jsx)(T.c,{to:"glow-up-fe/habit-tracker",children:"Habit Tracker"}),Object(x.jsx)(T.c,{to:"glow-up-fe/journal",children:"Journal"}),Object(x.jsx)(T.c,{to:"glow-up-fe/dashboard",children:"Dashboard"})]})]}),Object(x.jsx)(q.c,{children:Object(x.jsxs)(q.a,{path:"glow-up-fe",children:[Object(x.jsx)(q.a,{index:!0,element:Object(x.jsx)(g,{})}),Object(x.jsx)(q.a,{path:"habit-tracker",element:Object(x.jsx)(C,{})}),Object(x.jsx)(q.a,{path:"dashboard",element:Object(x.jsx)(F,{})})]})})]})},J=n(79),G=n(90),P=n(88),W=new J.a({uri:"https://glowup-be.herokuapp.com/graphql",cache:new G.a});j.a.render(Object(x.jsx)(d.a.StrictMode,{children:Object(x.jsx)(T.a,{children:Object(x.jsx)(P.a,{client:W,children:Object(x.jsx)(y,{children:Object(x.jsx)($,{})})})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.4cea567e.chunk.js.map