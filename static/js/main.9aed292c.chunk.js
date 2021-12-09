(this["webpackJsonpglow-up-fe"]=this["webpackJsonpglow-up-fe"]||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a,c,r=n(2),s=n.n(r),o=n(58),i=n.n(o),d=(n(69),n(70),n(8)),l=(n(71),n(85)),b=n(30),j=n(92),u=Object(j.a)(a||(a=Object(b.a)(["\n  mutation createMood($mood: Int!, $description: String) {\n    createMood(input: { params: { mood: $mood, description: $description } }) {\n      user {\n        id\n      }\n    }\n  }\n"]))),h=Object(j.a)(c||(c=Object(b.a)(["\n  mutation addHabitEntries($idArr: [HabitEntryInput!]!) {\n    createHabitEntry(input: { params: $idArr }) {\n      user {\n        habitEntries {\n          habitId\n          status\n          date\n        }\n      }\n    }\n  }\n"]))),O=n(3),m=Object(r.createContext)({userHabits:[],setUserHabits:function(){},checkedHabitIds:[],setCheckedHabitIds:function(){},todaysMood:null,setTodaysMood:function(){},todaysHabits:[],setTodaysHabits:function(){},displayMood:function(){return""},getDayString:function(){return""},habitMap:null}),f=function(e){var t=e.children,n=Object(r.useState)([]),a=Object(d.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)([]),i=Object(d.a)(o,2),l=i[0],b=i[1],j=Object(r.useState)(null),u=Object(d.a)(j,2),h=u[0],f=u[1],p=Object(r.useState)([]),x=Object(d.a)(p,2),y=x[0],g=x[1],v=Object(r.useState)({1:"Exercise",2:"Meditate",3:"Floss",4:"Brush teeth x2",5:"Drink Water",6:"Socialize",7:"Eat Healthy",8:"Wash Dishes",9:"Write in Journal",10:"Take a Shower",11:"Stay off Social Media",12:"Make Bed",13:"Read",14:"Go Outside",15:"Plan Tomorrow"}),k=Object(d.a)(v,1)[0];return Object(O.jsx)(m.Provider,{value:{userHabits:c,setUserHabits:s,checkedHabitIds:l,setCheckedHabitIds:b,todaysMood:h,setTodaysMood:f,todaysHabits:y,setTodaysHabits:g,displayMood:function(e){switch(e){case 0:return"\ud83d\ude2d";case 1:return"\ud83d\ude41";case 2:return"\ud83d\ude10";case 3:return"\ud83d\ude42";case 4:return"\ud83d\ude01";default:return"\u2753"}},getDayString:function(e){var t=new Date((new Date).valueOf()-864e5*e),n=String(t.getDate()).padStart(2,"0"),a=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+"-"+a+"-"+n},habitMap:k},children:t})};n(73);function p(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(d.a)(c,2),o=s[0],i=s[1];return Object(r.useEffect)((function(){fetch("https://api.quotable.io/random?").then((function(e){return e.json()})).then((function(e){a(e.content),i(e.author)}))}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Feeling down? Here's a quote for you:"}),Object(O.jsxs)("p",{children:['"',n,'" -- ',o]})]})}function x(){var e=Object(r.useContext)(m),t=e.todaysMood,n=e.displayMood,a=(0,e.getDayString)(0);return Object(O.jsxs)("div",{className:"today-mood-container",children:[Object(O.jsxs)("h3",{children:["Today: ",a]}),Object(O.jsxs)("p",{children:["I am feeling: ",n(t.mood)]}),t.description&&Object(O.jsx)("p",{children:t.description}),t.mood<=3?Object(O.jsx)(p,{}):null]})}var y,g,v,k,w,N=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(d.a)(c,2),o=s[0],i=s[1],b=Object(r.useState)(!0),j=Object(d.a)(b,2),h=j[0],f=j[1],y=Object(l.a)(u),g=Object(d.a)(y,1)[0],v=Object(r.useContext)(m).todaysMood;return Object(O.jsx)("section",{className:"mood-form-container",children:v?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{}),v.mood<=2?Object(O.jsx)(p,{}):null]}):Object(O.jsxs)("form",{className:"mood-form",onSubmit:function(e){e.preventDefault(),n?(g({variables:{mood:parseInt(n),description:o}}),f(!0),a(""),i("")):f(!1)},children:[Object(O.jsx)("h2",{children:"How are you feeling today?"}),Object(O.jsxs)("div",{className:"moods-container",children:[Object(O.jsx)("input",{type:"radio","aria-label":"strongly positive",name:"mood",id:"strongly-positive",value:"4",onChange:function(e){return a(e.currentTarget.value)},checked:"4"===n}),Object(O.jsx)("label",{htmlFor:"strongly-positive",className:"mood-label",children:"\ud83d\ude01"}),Object(O.jsx)("input",{type:"radio","aria-label":"positive",name:"mood",id:"positive",value:"3",onChange:function(e){return a(e.currentTarget.value)},checked:"3"===n}),Object(O.jsx)("label",{htmlFor:"positive",className:"mood-label",children:"\ud83d\ude42"}),Object(O.jsx)("input",{type:"radio","aria-label":"neutral",name:"mood",id:"neutral",value:"2",onChange:function(e){return a(e.currentTarget.value)},checked:"2"===n}),Object(O.jsx)("label",{htmlFor:"neutral",className:"mood-label",children:"\ud83d\ude10"}),Object(O.jsx)("input",{type:"radio","aria-label":"negative",name:"mood",id:"negative",value:"1",onChange:function(e){return a(e.currentTarget.value)},checked:"1"===n}),Object(O.jsx)("label",{htmlFor:"negative",className:"mood-label",children:"\ud83d\ude41"}),Object(O.jsx)("input",{type:"radio","aria-label":"strongly negative",name:"mood",id:"strongly-negative",value:"0",onChange:function(e){return a(e.currentTarget.value)},checked:"0"===n}),Object(O.jsx)("label",{htmlFor:"strongly-negative",className:"mood-label",children:"\ud83d\ude2d"})]}),!h&&Object(O.jsx)("p",{className:"error-message",children:"**Please select your mood today!**"}),Object(O.jsx)("input",{type:"text",placeholder:"Describe your mood...",className:"mood-description",value:o,onChange:function(e){return i(e.currentTarget.value)}}),Object(O.jsx)("button",{className:"mood-submit-button",type:"submit",children:"\u2714 submit your mood"})]})})},S=(n(75),Object(j.a)(y||(y=Object(b.a)(["\n  query fetchUser {\n    fetchUser {\n      id\n      username\n\n      moods {\n        id\n        description\n        mood\n        createdAt\n      }\n\n      habitEntries {\n        id\n        date\n        habitId\n        status\n      }\n\n      journalEntries {\n        id\n        content\n        date\n      }\n    }\n  }\n"]))),Object(j.a)(g||(g=Object(b.a)(["\n  query fetchHabits {\n    fetchHabits {\n      id\n      name\n    }\n  }\n"])))),M=Object(j.a)(v||(v=Object(b.a)(["\n  query fetchUser {\n    fetchUser {\n      id\n      dailyMood {\n        id\n        mood\n        description\n      }\n\n      dailyHabits {\n        id\n        name\n      }\n    }\n  }\n"]))),H=Object(j.a)(k||(k=Object(b.a)(["\n  query fetchUser {\n    fetchUser {\n      weeklyHabits {\n        habitId\n        status\n        date\n        id\n      }\n      weeklyMoods {\n        createdAt\n        mood\n      }\n    }\n  }\n"]))),I=Object(j.a)(w||(w=Object(b.a)(["\n  query fetchUser {\n    fetchUser {\n      id\n      monthlyMoods {\n        id\n        createdAt\n        mood\n      }\n    }\n  }\n"]))),T=n(90),E=n(16);n(76);function C(e){var t=Object(r.useContext)(m),n=t.checkedHabitIds,a=t.setCheckedHabitIds,c=Object(r.useState)(e.checkedToday),s=Object(d.a)(c,2),o=s[0],i=s[1],l=Object(r.useState)({false:{backgroundColor:"#E7E7E7",color:"black"},true:{backgroundColor:"#86AE5B",color:"black"}}),b=Object(d.a)(l,1)[0];Object(r.useEffect)((function(){i(e.checkedToday)}),[e.checkedToday]);return Object(O.jsx)("button",{className:"habit-card-button",onClick:function(e){switch(e.preventDefault(),o){case!1:i(!0),a([].concat(Object(E.a)(n),[parseInt(e.currentTarget.id)]));break;case!0:i(!1);var t=n.filter((function(t){return t!==parseInt(e.currentTarget.id)}));a(t)}},id:e.id,style:o?b.true:b.false,children:e.name})}n.p;var D=function(){var e=Object(T.a)(S),t=e.loading,n=e.error,a=e.data,c=Object(r.useContext)(m),s=c.checkedHabitIds,o=c.setCheckedHabitIds,i=c.todaysHabits,b=Object(l.a)(h),j=Object(d.a)(b,1)[0];Object(r.useEffect)((function(){!t&&a&&o(i.map((function(e){return parseInt(e.id)})))}),[t,a]);return Object(O.jsxs)(O.Fragment,{children:[t&&Object(O.jsx)("h2",{children:"Loading..."}),n&&Object(O.jsx)("h2",{children:"Error! ".concat(n.message)}),Object(O.jsxs)("section",{className:"habit-form-container",children:[i.length?Object(O.jsx)("h2",{children:"Add more habits"}):Object(O.jsx)("h2",{className:"habit-form-question",children:"No check in yet. Go complete some!"}),Object(O.jsxs)("form",{className:"habit-form",onSubmit:function(e){e.preventDefault();var t=s.map((function(e){return{id:e}}));t.length?(j({variables:{idArr:t}}),alert("Great job")):(alert("No entry today? Tomorrow is another day!"),j({variables:{idArr:t}}))},children:[a&&a.fetchHabits.map((function(e){return Object(O.jsx)(C,{name:e.name,id:e.id,checkedToday:s.includes(parseInt(e.id))},e.id)})),Object(O.jsx)("button",{className:"habit-submit-button",type:"submit",children:"Submit"})]})]})]})},U=(n(77),n(28)),A=(n(78),n(17)),q=n(60);A.d.register(A.c,A.i,A.k,A.h,A.o,A.p,A.f);var F={0:"\ud83d\ude2d",1:"\ud83d\ude41",2:"\ud83d\ude10",3:"\ud83d\ude42",4:"\ud83d\ude01"},$={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Monthly Moods"}},scales:{yAxis:{ticks:{callback:function(e){return F[e]}}}}},J=function(){var e=(new Date).toLocaleString("default",{month:"long"}),t=Object(r.useState)([]),n=Object(d.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)([]),o=Object(d.a)(s,2),i=o[0],l=o[1],b=Object(T.a)(I),j=b.loading,u=b.data,h=b.error;Object(r.useEffect)((function(){if(!j&&u){var e=u.fetchUser.monthlyMoods.slice().sort((function(e,t){return parseInt(e.createdAt.slice(8,10))-parseInt(t.createdAt.slice(8,10))})).map((function(e){var t=new Date(e.createdAt);return new Intl.DateTimeFormat("en-US").format(t)})),t=u.fetchUser.monthlyMoods.slice().reverse().map((function(e){return e.mood}));c(e),l(t)}}),[u,j]);var m={labels:a,datasets:[{type:"line",label:"Moods",borderColor:"rgb(255, 99, 132)",borderWidth:2,fill:!1,data:i}]};return Object(O.jsxs)("section",{className:"graph-container",children:[Object(O.jsx)("h3",{className:"month-title",children:e}),i.length?Object(O.jsx)(q.a,{type:"line",data:m,options:$}):Object(O.jsx)("h2",{children:"There aren't any mood entries for this month yet!"}),h&&Object(O.jsx)("h2",{children:"Sorry, something went wrong!"})]})};n(79);function B(e){var t=Object(r.useContext)(m),n=t.displayMood,a=t.habitMap,c=e.habits.map((function(e){return Object(O.jsx)("p",{children:a[parseInt(e.habitId)]},e.id)}));return Object(O.jsxs)("div",{className:"weekly-card",children:[Object(O.jsx)("h5",{children:e.dayString}),Object(O.jsxs)("p",{children:["Mood:",n(e.mood)," "]}),Object(O.jsx)("div",{children:c})]})}n(80);function G(){var e=Object(T.a)(H),t=e.loading,n=e.error,a=e.data,c=Object(r.useState)([]),s=Object(d.a)(c,2),o=s[0],i=s[1],l=Object(r.useContext)(m).getDayString;Object(r.useEffect)((function(){if(!t&&a){for(var e=[],n=function(t){var n=l(t),c=a.fetchUser.weeklyHabits.filter((function(e){return e.date.slice(0,10)===n}));e.push(c)},c=1;c<=7;c++)n(c);var r=a.fetchUser.weeklyMoods.reduce((function(t,n,a){var c={mood:n,habits:e[a]};return t.push(c),t}),[]);i(r)}}),[t,a]);return t?Object(O.jsx)("h1",{children:"Loading"}):n?Object(O.jsx)("h1",{children:n.message}):Object(O.jsx)("div",{className:"weekcard-holder",children:o.map((function(e,t){return Object(O.jsx)(B,{mood:e.mood.mood,habits:e.habits,dayString:l(t+1)},t)}))})}var L=function(){var e=Object(r.useContext)(m),t=e.todaysMood,n=e.setTodaysMood,a=e.todaysHabits,c=e.setTodaysHabits,s=Object(T.a)(M),o=s.loading,i=s.error,d=s.data,l=s.refetch;Object(r.useEffect)((function(){l(),!o&&d&&(n(d.fetchUser.dailyMood),c(d.fetchUser.dailyHabits))}),[o,d]);return Object(O.jsxs)("main",{children:[o&&Object(O.jsx)("h2",{children:"Loading..."}),i&&Object(O.jsx)("h2",{children:"Error! ".concat(i.message)}),Object(O.jsxs)("section",{className:"dashboard-container",children:[Object(O.jsx)("h2",{className:"page-title",children:"My Dashboard"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:"page-quote",children:'"Every action you take is a vote for the type of person you wish to become."'}),Object(O.jsx)("p",{className:"page-quote author",children:"\u2015 James Clear"})]})]}),Object(O.jsxs)("article",{className:"today-container",children:[t?Object(O.jsx)(x,{}):Object(O.jsx)(U.b,{to:"/glow-up-fe/track",children:"\u2795 Enter your mood today!"}),a.length?Object(O.jsxs)("div",{className:"completed-habits-container",children:[Object(O.jsx)("h4",{children:"Habits I completed:"}),Object(O.jsx)("div",{className:"completed-habits",children:a.map((function(e){return Object(O.jsxs)("p",{className:"completed-habit",children:[Object(O.jsx)("span",{className:"material-icons check-icon",children:"done"}),e.name]},e.id)}))}),Object(O.jsx)(U.b,{to:"/glow-up-fe/track",children:"\u2795 Edit habits"})]}):Object(O.jsx)(U.b,{to:"/glow-up-fe/track",children:"\u2795 Enter your habits!"})]}),Object(O.jsxs)("section",{className:"week-container",children:[Object(O.jsx)("h3",{children:"This week..."}),Object(O.jsx)(G,{})]}),Object(O.jsx)(J,{})]})},W=n(9);var P=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)("h1",{children:"GlowUp"}),Object(O.jsxs)("nav",{className:"nav",children:[Object(O.jsx)(U.c,{to:"glow-up-fe/dashboard",children:"Dashboard"}),Object(O.jsx)(U.c,{to:"glow-up-fe/track",children:"Track"}),Object(O.jsx)(U.c,{to:"glow-up-fe/journal",children:"Journal"})]})]}),Object(O.jsx)(W.c,{children:Object(O.jsxs)(W.a,{path:"glow-up-fe",children:[Object(O.jsx)(W.a,{index:!0,element:Object(O.jsx)(L,{})}),Object(O.jsx)(W.a,{path:"track",element:Object(O.jsxs)("section",{className:"trackers-container",children:[Object(O.jsx)(N,{}),Object(O.jsx)(D,{})]})}),Object(O.jsx)(W.a,{path:"dashboard",element:Object(O.jsx)(L,{})})]})})]})},z=n(82),R=n(93),Y=n(91),K=new z.a({uri:"http://localhost:3001/graphql",cache:new R.a});i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(U.a,{children:Object(O.jsx)(Y.a,{client:K,children:Object(O.jsx)(f,{children:Object(O.jsx)(P,{})})})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.9aed292c.chunk.js.map