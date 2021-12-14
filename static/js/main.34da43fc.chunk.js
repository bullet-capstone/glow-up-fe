(this["webpackJsonpglow-up-fe"]=this["webpackJsonpglow-up-fe"]||[]).push([[0],{123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var a,c,r,s,o,i,l,d,j,b=n(0),u=n.n(b),h=n(63),O=n.n(h),m=(n(123),n(124),n(5)),f=(n(125),n(167)),x=n(30),p=n(176),y=Object(p.a)(a||(a=Object(x.a)(["\n  mutation CreateMood($mood: Int!, $description: String) {\n    createMood(input: { params: { mood: $mood, description: $description } }) {\n      user {\n        id\n      }\n    }\n  }\n"]))),g=Object(p.a)(c||(c=Object(x.a)(["\n  mutation AddHabitEntries($idArr: [HabitEntryInput!]!) {\n    createHabitEntry(input: { params: $idArr }) {\n      user {\n        dailyHabits {\n          id\n          name\n        }\n      }\n    }\n  }\n"]))),v=Object(p.a)(r||(r=Object(x.a)(["\n  mutation createJournalEntry($content: String!) {\n    createJournalEntry(input: { params: { content: $content } }) {\n      user {\n        journalEntries {\n          id\n          content\n          date\n        }\n      }\n    }\n  }\n"]))),k=(Object(p.a)(s||(s=Object(x.a)(["\n  query fetchUser {\n    fetchUser {\n      id\n      username\n    }\n  }\n"]))),Object(p.a)(o||(o=Object(x.a)(["\n  query FetchHabits {\n    fetchHabits {\n      id\n      name\n    }\n  }\n"])))),N=Object(p.a)(i||(i=Object(x.a)(["\n  query FetchDailyEntries {\n    fetchUser {\n      id\n      dailyMood {\n        id\n        mood\n        description\n      }\n\n      dailyHabits {\n        id\n        name\n      }\n    }\n  }\n"]))),S=Object(p.a)(l||(l=Object(x.a)(["\n  query fetchWeeklyEntries {\n    fetchUser {\n      weeklyHabits {\n        habitId\n        date\n        id\n      }\n      weeklyMoods {\n        createdAt\n        mood\n      }\n    }\n  }\n"]))),w=Object(p.a)(d||(d=Object(x.a)(["\n  query fetchMonthlyEntries {\n    fetchUser {\n      id\n      monthlyMoods {\n        id\n        createdAt\n        mood\n      }\n    }\n  }\n"]))),E=Object(p.a)(j||(j=Object(x.a)(["\n  query fetchJournalEntries {\n    fetchUser {\n      id\n      journalEntries {\n        id\n        content\n        date\n      }\n    }\n  }\n"]))),M=n(166),H=n(2),I=Object(b.createContext)({checkedHabitIds:[],setCheckedHabitIds:function(){},todaysMood:null,setTodaysMood:function(){},todaysHabits:[],setTodaysHabits:function(){},displayMood:function(){return""},getDayString:function(){return""},habitMap:null,dailyQueryError:null}),T=function(e){var t=e.children,n=Object(b.useState)([]),a=Object(m.a)(n,2),c=a[0],r=a[1],s=Object(b.useState)(null),o=Object(m.a)(s,2),i=o[0],l=o[1],d=Object(b.useState)([]),j=Object(m.a)(d,2),u=j[0],h=j[1],O=Object(b.useState)(null),f=Object(m.a)(O,2),x=f[0],p=f[1],y=Object(b.useState)({1:"Exercise",2:"Meditate",3:"Floss",4:"Brush teeth x2",5:"Drink Water",6:"Socialize",7:"Eat Healthy",8:"Wash Dishes",9:"Write in Journal",10:"Take a Shower",11:"Stay off Social Media",12:"Make Bed",13:"Read",14:"Go Outside",15:"Plan Tomorrow"}),g=Object(m.a)(y,1)[0],v=Object(M.a)(N),k=v.loading,S=v.error,w=v.data;return Object(b.useEffect)((function(){!k&&w?(l(w.fetchUser.dailyMood),h(w.fetchUser.dailyHabits),r(w.fetchUser.dailyHabits.map((function(e){return parseInt(e.id)})))):S&&p(S)}),[k,w,S]),Object(H.jsx)(I.Provider,{value:{checkedHabitIds:c,setCheckedHabitIds:r,todaysMood:i,setTodaysMood:l,todaysHabits:u,setTodaysHabits:h,displayMood:function(e){switch(e){case 0:return"\ud83d\ude2d";case 1:return"\ud83d\ude41";case 2:return"\ud83d\ude10";case 3:return"\ud83d\ude42";case 4:return"\ud83d\ude01";default:return"\u2753"}},getDayString:function(e){var t=new Date((new Date).valueOf()-864e5*e),n=String(t.getDate()).padStart(2,"0"),a=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+"-"+a+"-"+n},habitMap:g,dailyQueryError:x},children:t})};n(128);function C(){var e=Object(b.useContext)(I),t=e.todaysMood,n=e.displayMood,a=(0,e.getDayString)(0);return Object(H.jsxs)("div",{className:"today-mood-container",children:[Object(H.jsxs)("h3",{children:["Today: ",a]}),Object(H.jsxs)("p",{children:["I am feeling: ",n(t.mood)]}),t.description&&Object(H.jsx)("p",{children:t.description})]})}function D(){var e=Object(b.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],c=Object(b.useState)(""),r=Object(m.a)(c,2),s=r[0],o=r[1];return Object(b.useEffect)((function(){fetch("https://api.quotable.io/random?maxLength=200").then((function(e){return e.json()})).then((function(e){a(e.content),o(e.author)}))}),[]),Object(H.jsxs)("div",{className:"quote-container",children:[Object(H.jsx)("p",{className:"quote-prompt",children:"Feeling down? Here's a quote for you:"}),Object(H.jsxs)("p",{className:"quote-body",children:['"',n,'" -- ',s]})]})}var U=function(){var e=Object(b.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],c=Object(b.useState)(""),r=Object(m.a)(c,2),s=r[0],o=r[1],i=Object(b.useState)(!0),l=Object(m.a)(i,2),d=l[0],j=l[1],u=Object(f.a)(y,{refetchQueries:[N,"FetchDailyEntries"]}),h=Object(m.a)(u,1)[0],O=Object(b.useContext)(I).todaysMood;return Object(H.jsx)("section",{className:"mood-form-container",children:O?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(C,{}),O.mood<=2?Object(H.jsx)(D,{}):null]}):Object(H.jsxs)("form",{className:"mood-form",onSubmit:function(e){e.preventDefault(),n?(h({variables:{mood:parseInt(n),description:s}}),j(!0),a(""),o("")):j(!1)},children:[Object(H.jsx)("h2",{children:"How are you feeling today?"}),Object(H.jsxs)("div",{className:"moods-container",children:[Object(H.jsx)("input",{type:"radio","aria-label":"strongly positive",name:"mood",id:"strongly-positive",value:"4",onChange:function(e){return a(e.currentTarget.value)},checked:"4"===n}),Object(H.jsx)("label",{htmlFor:"strongly-positive",className:"mood-label",children:"\ud83d\ude01"}),Object(H.jsx)("input",{type:"radio","aria-label":"positive",name:"mood",id:"positive",value:"3",onChange:function(e){return a(e.currentTarget.value)},checked:"3"===n}),Object(H.jsx)("label",{htmlFor:"positive",className:"mood-label",children:"\ud83d\ude42"}),Object(H.jsx)("input",{type:"radio","aria-label":"neutral",name:"mood",id:"neutral",value:"2",onChange:function(e){return a(e.currentTarget.value)},checked:"2"===n}),Object(H.jsx)("label",{htmlFor:"neutral",className:"mood-label",children:"\ud83d\ude10"}),Object(H.jsx)("input",{type:"radio","aria-label":"negative",name:"mood",id:"negative",value:"1",onChange:function(e){return a(e.currentTarget.value)},checked:"1"===n}),Object(H.jsx)("label",{htmlFor:"negative",className:"mood-label",children:"\ud83d\ude41"}),Object(H.jsx)("input",{type:"radio","aria-label":"strongly negative",name:"mood",id:"strongly-negative",value:"0",onChange:function(e){return a(e.currentTarget.value)},checked:"0"===n}),Object(H.jsx)("label",{htmlFor:"strongly-negative",className:"mood-label",children:"\ud83d\ude2d"})]}),!d&&Object(H.jsx)("p",{className:"error-message",children:"**Please select your mood today!**"}),Object(H.jsx)("input",{type:"text",placeholder:"Describe your mood...",className:"mood-description",value:s,onChange:function(e){return o(e.currentTarget.value)}}),Object(H.jsx)("button",{className:"mood-submit-button",type:"submit",children:"\u2714 submit your mood"})]})})},q=(n(129),n(16));n(130);function A(e){var t=Object(b.useContext)(I),n=t.checkedHabitIds,a=t.setCheckedHabitIds,c=Object(b.useState)(e.checkedToday),r=Object(m.a)(c,2),s=r[0],o=r[1],i=Object(b.useState)({false:{backgroundColor:"#E7E7E7",color:"black"},true:{backgroundColor:"#86AE5B",color:"black"}}),l=Object(m.a)(i,1)[0];Object(b.useEffect)((function(){o(e.checkedToday)}),[e.checkedToday]);return Object(H.jsx)("button",{className:"habit-card-button",onClick:function(e){switch(e.preventDefault(),s){case!1:o(!0),a([].concat(Object(q.a)(n),[parseInt(e.currentTarget.id)]));break;case!0:o(!1);var t=n.filter((function(t){return t!==parseInt(e.currentTarget.id)}));a(t)}},id:e.id,style:s?l.true:l.false,children:e.name})}n.p;var F=function(){var e=Object(M.a)(k),t=e.loading,n=e.error,a=e.data,c=Object(b.useContext)(I).checkedHabitIds,r=Object(f.a)(g,{refetchQueries:[N,"FetchDailyEntries"]}),s=Object(m.a)(r,1)[0];return Object(H.jsxs)(H.Fragment,{children:[t&&Object(H.jsx)("h2",{children:"Loading..."}),n?Object(H.jsx)("h2",{children:"Error! ".concat(n.message)}):Object(H.jsxs)("section",{className:"habit-form-container",children:[c.length?Object(H.jsx)("h2",{children:"Add more habits"}):Object(H.jsx)("h2",{className:"habit-form-question",children:"No check in yet. Go complete some!"}),Object(H.jsxs)("form",{className:"habit-form",onSubmit:function(e){e.preventDefault();var t=c.map((function(e){return{id:e}}));t.length?(s({variables:{idArr:t}}),alert("Great job")):(alert("No entry today? Tomorrow is another day!"),s({variables:{idArr:t}}))},children:[a&&a.fetchHabits.map((function(e){return Object(H.jsx)(A,{name:e.name,id:e.id,checkedToday:c.includes(parseInt(e.id))},e.id)})),Object(H.jsx)("button",{className:"habit-submit-button",type:"submit",children:"Submit"})]})]})]})},J=(n(131),n(46)),$=(n(132),n(24)),W=n(110);$.d.register($.c,$.i,$.k,$.h,$.o,$.p,$.f);var L={0:"\ud83d\ude2d",1:"\ud83d\ude41",2:"\ud83d\ude10",3:"\ud83d\ude42",4:"\ud83d\ude01"},Q={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Monthly Moods"}},scales:{yAxis:{ticks:{callback:function(e){return L[e]}}}}},B=function(){var e=(new Date).toLocaleString("default",{month:"long"}),t=Object(b.useState)([]),n=Object(m.a)(t,2),a=n[0],c=n[1],r=Object(b.useState)([]),s=Object(m.a)(r,2),o=s[0],i=s[1],l=Object(M.a)(w),d=l.loading,j=l.data,u=l.error;Object(b.useEffect)((function(){if(!d&&j){var e=j.fetchUser.monthlyMoods.slice().sort((function(e,t){return parseInt(e.createdAt.slice(8,10))-parseInt(t.createdAt.slice(8,10))})).map((function(e){var t=new Date(e.createdAt);return new Intl.DateTimeFormat("en-US").format(t)})),t=j.fetchUser.monthlyMoods.slice().reverse().map((function(e){return e.mood}));c(e),i(t)}}),[j,d]);var h={labels:a,datasets:[{type:"line",label:"Moods",borderColor:"rgb(255, 99, 132)",borderWidth:2,fill:!1,data:o}]};return Object(H.jsxs)("section",{className:"graph-container",children:[Object(H.jsx)("h3",{className:"month-title",children:e}),!!o.length&&Object(H.jsx)(W.a,{type:"line",data:h,options:Q}),!o.length&&!u&&Object(H.jsx)("h2",{children:"There aren't any mood entries for this month yet!"}),u&&Object(H.jsx)("h2",{children:"Sorry, something went wrong!"})]})};n(133);function G(e){var t,n=Object(b.useContext)(I),a=n.displayMood,c=n.habitMap;return e.habits.length&&(t=e.habits.sort().map((function(e,t){return Object(H.jsxs)("p",{className:"weekly-card-habit",children:["\u2729 ",c[parseInt(e.habitId)]]},t)}))),Object(H.jsxs)("div",{className:"weekly-card",children:[Object(H.jsx)("h4",{children:e.dayString}),Object(H.jsxs)("p",{className:"weekly-card-mood",children:["Mood: ",a(e.mood)," "]}),Object(H.jsx)("div",{children:e.habits.length?t:"No habit entries for this day."})]})}n(134);function P(){var e=Object(M.a)(S),t=e.loading,n=e.error,a=e.data,c=Object(b.useState)({}),r=Object(m.a)(c,2),s=r[0],o=r[1],i=Object(b.useContext)(I).getDayString;Object(b.useEffect)((function(){if(!t&&a){for(var e={},n=1;n<=7;n++)e[i(n)]={mood:999,habits:[]};Object.keys(e).forEach((function(t){var n=a.fetchUser.weeklyMoods.find((function(e){return e.createdAt.slice(0,10)===t})),c=a.fetchUser.weeklyHabits.filter((function(e){return e.date.slice(0,10)===t}));n&&(e[t].mood=n.mood),c.length&&(e[t].habits=c)})),o(e)}}),[t,a,i]);var l=Object.keys(s).map((function(e,t){return Object(H.jsx)(G,{mood:s[e].mood,habits:s[e].habits,dayString:e},t)}));return t?Object(H.jsx)("h1",{children:"Loading"}):n?Object(H.jsx)("h1",{children:n.message}):Object(H.jsx)("div",{className:"weekcard-holder",children:l})}var z=function(){var e=Object(b.useContext)(I),t=e.todaysMood,n=e.todaysHabits;return Object(H.jsxs)("main",{children:[Object(H.jsxs)("section",{className:"dashboard-container",children:[Object(H.jsx)("h2",{className:"page-title",children:"My Dashboard"}),Object(H.jsxs)("div",{children:[Object(H.jsx)("p",{className:"page-quote",children:'"Every action you take is a vote for the type of person you wish to become."'}),Object(H.jsx)("p",{className:"page-quote author",children:"\u2015 James Clear"})]})]}),Object(H.jsxs)("article",{className:"today-container",children:[t?Object(H.jsx)(C,{}):Object(H.jsx)(J.b,{to:"/glow-up-fe/track",children:"\u2795 Enter your mood today!"}),n.length?Object(H.jsxs)("div",{className:"completed-habits-container",children:[Object(H.jsx)("h4",{children:"Habits I completed:"}),Object(H.jsx)("div",{className:"completed-habits",children:n.map((function(e){return Object(H.jsxs)("p",{className:"completed-habit",children:[Object(H.jsx)("span",{className:"material-icons check-icon",children:"done"}),e.name]},e.id)}))}),Object(H.jsx)(J.b,{to:"/glow-up-fe/track",children:"\u2795 Edit habits"})]}):Object(H.jsx)(J.b,{to:"/glow-up-fe/track",children:"\u2795 Enter your habits!"})]}),Object(H.jsxs)("section",{className:"week-container",children:[Object(H.jsx)("h3",{children:"This week..."}),Object(H.jsx)(P,{})]}),Object(H.jsx)(B,{})]})},R=(n(135),function(){var e=Object(f.a)(v,{refetchQueries:[E,"fetchJournalEntries"]}),t=Object(m.a)(e,1)[0],n=Object(b.useState)(""),a=Object(m.a)(n,2),c=a[0],r=a[1],s=Object(b.useState)(!0),o=Object(m.a)(s,2),i=o[0],l=o[1];return Object(H.jsx)("section",{className:"journal-entry-form-container",children:Object(H.jsxs)("form",{className:"journal-entry-form",onSubmit:function(e){e.preventDefault(),c?(t({variables:{content:c}}),l(!0),r("")):l(!1)},children:[Object(H.jsx)("h2",{children:"What's on your mind?"}),Object(H.jsxs)("div",{className:"journal-entry-container",children:[Object(H.jsx)("textarea",{name:"journalEntry",id:"journalEntryInput",value:c,onChange:function(e){return r(e.currentTarget.value)}}),!i&&Object(H.jsx)("p",{children:"Write something"}),Object(H.jsx)("button",{className:"journal-entry-submit-button",type:"submit",children:"Submit"})]})]})})}),Y=n(177),K=n(179),V=n(183),X=n(181),Z=n(108),_=n.n(Z),ee=function(){var e,t=Object(M.a)(E),n=t.loading,a=t.data,c=t.error,r=Object(b.useState)([]),s=Object(m.a)(r,2),o=s[0],i=s[1];return Object(b.useEffect)((function(){!n&&a&&i(a.fetchUser.journalEntries)}),[n,a]),o.length&&(e=o.map((function(e){var t=new Date(e.date).toLocaleString("en-US");return Object(H.jsxs)(Y.a,{children:[Object(H.jsx)(K.a,{expandIcon:Object(H.jsx)(_.a,{}),"aria-controls":"panel".concat(e.id,"-content"),id:e.id,children:Object(H.jsxs)(X.a,{children:["Journal Entry ",t]})}),Object(H.jsx)(V.a,{children:Object(H.jsx)(X.a,{children:e.content})})]},e.id)}))),Object(H.jsxs)("section",{children:[n&&Object(H.jsx)("h2",{children:"Loading..."}),c&&Object(H.jsx)("h2",{children:"Oops, something went wrong!"}),Object(H.jsx)("div",{className:"journal-title-container",children:Object(H.jsx)("h1",{className:"journal-title",children:"My Journal"})}),Object(H.jsx)(R,{}),e]})},te=n(12);var ne=function(){return Object(H.jsxs)("div",{className:"App",children:[Object(H.jsxs)("header",{className:"header",children:[Object(H.jsx)("h1",{children:"GlowUp"}),Object(H.jsxs)("nav",{className:"nav",children:[Object(H.jsx)(J.c,{to:"glow-up-fe/dashboard",children:"Dashboard"}),Object(H.jsx)(J.c,{to:"glow-up-fe/track",children:"Track"}),Object(H.jsx)(J.c,{to:"glow-up-fe/journal",children:"Journal"})]})]}),Object(H.jsx)(te.c,{children:Object(H.jsxs)(te.a,{path:"glow-up-fe",children:[Object(H.jsx)(te.a,{index:!0,element:Object(H.jsx)(z,{})}),Object(H.jsx)(te.a,{path:"track",element:Object(H.jsxs)("section",{className:"trackers-container",children:[Object(H.jsx)(U,{}),Object(H.jsx)(F,{})]})}),Object(H.jsx)(te.a,{path:"dashboard",element:Object(H.jsx)(z,{})}),Object(H.jsx)(te.a,{path:"journal",element:Object(H.jsx)(ee,{})})]})})]})},ae=n(148),ce=n(178),re=n(175),se=new ae.a({uri:"http://localhost:3001/graphql",cache:new ce.a});O.a.render(Object(H.jsx)(u.a.StrictMode,{children:Object(H.jsx)(J.a,{children:Object(H.jsx)(re.a,{client:se,children:Object(H.jsx)(T,{children:Object(H.jsx)(ne,{})})})})}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.34da43fc.chunk.js.map