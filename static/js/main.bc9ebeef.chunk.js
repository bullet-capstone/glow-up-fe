(this["webpackJsonpglow-up-fe"]=this["webpackJsonpglow-up-fe"]||[]).push([[0],{150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var a,c,r,o,s,i,l,d,j,b=n(0),u=n.n(b),h=n(58),O=n.n(h),m=(n(150),n(151),n(7)),x=(n(152),n(208)),f=n(33),p=n(223),y=Object(p.a)(a||(a=Object(f.a)(["\n  mutation CreateMood($mood: Int!, $description: String) {\n    createMood(input: { params: { mood: $mood, description: $description } }) {\n      user {\n        id\n      }\n    }\n  }\n"]))),g=Object(p.a)(c||(c=Object(f.a)(["\n  mutation AddHabitEntries($idArr: [HabitEntryInput!]!) {\n    createHabitEntry(input: { params: $idArr }) {\n      user {\n        dailyHabits {\n          id\n          name\n        }\n      }\n    }\n  }\n"]))),v=Object(p.a)(r||(r=Object(f.a)(["\n  mutation createJournalEntry($content: String!) {\n    createJournalEntry(input: { params: { content: $content } }) {\n      user {\n        journalEntries {\n          id\n          content\n          date\n        }\n      }\n    }\n  }\n"]))),k=(Object(p.a)(o||(o=Object(f.a)(["\n  query fetchUser {\n    fetchUser {\n      id\n      username\n    }\n  }\n"]))),Object(p.a)(s||(s=Object(f.a)(["\n  query FetchHabits {\n    fetchHabits {\n      id\n      name\n    }\n  }\n"])))),w=Object(p.a)(i||(i=Object(f.a)(["\n  query FetchDailyEntries {\n    fetchUser {\n      id\n      dailyMood {\n        id\n        mood\n        description\n      }\n\n      dailyHabits {\n        id\n        name\n      }\n    }\n  }\n"]))),S=Object(p.a)(l||(l=Object(f.a)(["\n  query fetchWeeklyEntries {\n    fetchUser {\n      weeklyHabits {\n        habitId\n        date\n        id\n      }\n      weeklyMoods {\n        createdAt\n        mood\n      }\n    }\n  }\n"]))),N=Object(p.a)(d||(d=Object(f.a)(["\n  query fetchMonthlyEntries {\n    fetchUser {\n      id\n      monthlyMoods {\n        id\n        createdAt\n        mood\n      }\n    }\n  }\n"]))),E=Object(p.a)(j||(j=Object(f.a)(["\n  query fetchJournalEntries {\n    fetchUser {\n      id\n      journalEntries {\n        id\n        content\n        date\n      }\n    }\n  }\n"]))),M=n(207),C=n(1),H=Object(b.createContext)({checkedHabitIds:[],setCheckedHabitIds:function(){},todaysMood:null,setTodaysMood:function(){},todaysHabits:[],setTodaysHabits:function(){},displayMood:function(){return""},getDayString:function(){return""},habitMap:null,dailyQueryError:null}),I=function(e){var t=e.children,n=Object(b.useState)([]),a=Object(m.a)(n,2),c=a[0],r=a[1],o=Object(b.useState)(null),s=Object(m.a)(o,2),i=s[0],l=s[1],d=Object(b.useState)([]),j=Object(m.a)(d,2),u=j[0],h=j[1],O=Object(b.useState)(null),x=Object(m.a)(O,2),f=x[0],p=x[1],y=Object(b.useState)({1:"Exercise",2:"Meditate",3:"Floss",4:"Brush teeth x2",5:"Drink Water",6:"Socialize",7:"Eat Healthy",8:"Wash Dishes",9:"Write in Journal",10:"Take a Shower",11:"Stay off Social Media",12:"Make Bed",13:"Read",14:"Go Outside",15:"Plan Tomorrow"}),g=Object(m.a)(y,1)[0],v=Object(M.a)(w),k=v.loading,S=v.error,N=v.data;return Object(b.useEffect)((function(){!k&&N?(l(N.fetchUser.dailyMood),h(N.fetchUser.dailyHabits),r(N.fetchUser.dailyHabits.map((function(e){return parseInt(e.id)})))):S&&p(S)}),[k,N,S]),Object(C.jsx)(H.Provider,{value:{checkedHabitIds:c,setCheckedHabitIds:r,todaysMood:i,setTodaysMood:l,todaysHabits:u,setTodaysHabits:h,displayMood:function(e){switch(e){case 0:return"\ud83d\ude2d";case 1:return"\ud83d\ude41";case 2:return"\ud83d\ude10";case 3:return"\ud83d\ude42";case 4:return"\ud83d\ude01";default:return"\u2753"}},getDayString:function(e){var t=new Date((new Date).valueOf()-864e5*e),n=String(t.getDate()).padStart(2,"0"),a=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+"-"+a+"-"+n},habitMap:g,dailyQueryError:f},children:t})};n(155);function T(){var e=Object(b.useContext)(H),t=e.todaysMood,n=e.displayMood,a=(0,e.getDayString)(0);return Object(C.jsxs)("div",{className:"today-mood-container",children:[Object(C.jsxs)("h3",{children:["Today: ",a]}),Object(C.jsxs)("p",{children:["I am feeling: ",n(t.mood)]}),t.description&&Object(C.jsx)("p",{children:t.description})]})}function D(){var e=Object(b.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],c=Object(b.useState)(""),r=Object(m.a)(c,2),o=r[0],s=r[1];return Object(b.useEffect)((function(){fetch("https://api.quotable.io/random?maxLength=200").then((function(e){return e.json()})).then((function(e){a(e.content),s(e.author)}))}),[]),Object(C.jsxs)("div",{className:"quote-container",children:[Object(C.jsx)("p",{className:"quote-prompt",children:"Feeling down? Here's a quote for you:"}),Object(C.jsxs)("p",{className:"quote-body",children:['"',n,'" -- ',o]})]})}var F=function(){var e=Object(b.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],c=Object(b.useState)(""),r=Object(m.a)(c,2),o=r[0],s=r[1],i=Object(b.useState)(!0),l=Object(m.a)(i,2),d=l[0],j=l[1],u=Object(x.a)(y,{refetchQueries:[w,"FetchDailyEntries"]}),h=Object(m.a)(u,1)[0],O=Object(b.useContext)(H).todaysMood;return Object(C.jsx)("section",{className:"mood-form-container",children:O?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(T,{}),O.mood<=2?Object(C.jsx)(D,{}):null]}):Object(C.jsxs)("form",{className:"mood-form",onSubmit:function(e){e.preventDefault(),n?(h({variables:{mood:parseInt(n),description:o}}),j(!0),a(""),s("")):j(!1)},children:[Object(C.jsx)("h2",{children:"How are you feeling today?"}),Object(C.jsxs)("div",{className:"moods-container",children:[Object(C.jsx)("input",{type:"radio","aria-label":"strongly positive",name:"mood",id:"strongly-positive",value:"4",onChange:function(e){return a(e.currentTarget.value)},checked:"4"===n}),Object(C.jsx)("label",{htmlFor:"strongly-positive",className:"mood-label",children:"\ud83d\ude01"}),Object(C.jsx)("input",{type:"radio","aria-label":"positive",name:"mood",id:"positive",value:"3",onChange:function(e){return a(e.currentTarget.value)},checked:"3"===n}),Object(C.jsx)("label",{htmlFor:"positive",className:"mood-label",children:"\ud83d\ude42"}),Object(C.jsx)("input",{type:"radio","aria-label":"neutral",name:"mood",id:"neutral",value:"2",onChange:function(e){return a(e.currentTarget.value)},checked:"2"===n}),Object(C.jsx)("label",{htmlFor:"neutral",className:"mood-label",children:"\ud83d\ude10"}),Object(C.jsx)("input",{type:"radio","aria-label":"negative",name:"mood",id:"negative",value:"1",onChange:function(e){return a(e.currentTarget.value)},checked:"1"===n}),Object(C.jsx)("label",{htmlFor:"negative",className:"mood-label",children:"\ud83d\ude41"}),Object(C.jsx)("input",{type:"radio","aria-label":"strongly negative",name:"mood",id:"strongly-negative",value:"0",onChange:function(e){return a(e.currentTarget.value)},checked:"0"===n}),Object(C.jsx)("label",{htmlFor:"strongly-negative",className:"mood-label",children:"\ud83d\ude2d"})]}),!d&&Object(C.jsx)("p",{className:"error-message",children:"**Please select your mood today!**"}),Object(C.jsx)("input",{type:"text",placeholder:"Describe your mood...",className:"mood-description",value:o,onChange:function(e){return s(e.currentTarget.value)}}),Object(C.jsx)("button",{className:"mood-submit-button",type:"submit",children:"\u2714 submit your mood"})]})})},U=(n(156),n(22));n(157);function A(e){var t=Object(b.useContext)(H),n=t.checkedHabitIds,a=t.setCheckedHabitIds,c=Object(b.useState)(e.checkedToday),r=Object(m.a)(c,2),o=r[0],s=r[1],i=Object(b.useState)({false:{backgroundColor:"#E7E7E7",color:"black"},true:{backgroundColor:"#86AE5B",color:"black"}}),l=Object(m.a)(i,1)[0];Object(b.useEffect)((function(){s(e.checkedToday)}),[e.checkedToday]);return Object(C.jsx)("button",{className:"habit-card-button",onClick:function(e){switch(e.preventDefault(),o){case!1:s(!0),a([].concat(Object(U.a)(n),[parseInt(e.currentTarget.id)]));break;case!0:s(!1);var t=n.filter((function(t){return t!==parseInt(e.currentTarget.id)}));a(t)}},id:e.id,style:o?l.true:l.false,children:e.name})}n.p;var q=function(){var e=Object(M.a)(k),t=e.loading,n=e.error,a=e.data,c=Object(b.useContext)(H).checkedHabitIds,r=Object(x.a)(g,{refetchQueries:[w,"FetchDailyEntries"]}),o=Object(m.a)(r,1)[0];return Object(C.jsxs)(C.Fragment,{children:[t&&Object(C.jsx)("h2",{children:"Loading..."}),n?Object(C.jsx)("h2",{children:"Error! ".concat(n.message)}):Object(C.jsxs)("section",{className:"habit-form-container",children:[c.length?Object(C.jsx)("h2",{children:"Add more habits"}):Object(C.jsx)("h2",{className:"habit-form-question",children:"No check in yet. Go complete some!"}),Object(C.jsxs)("form",{className:"habit-form",onSubmit:function(e){e.preventDefault();var t=c.map((function(e){return{id:e}}));t.length?(o({variables:{idArr:t}}),alert("Great job")):(alert("No entry today? Tomorrow is another day!"),o({variables:{idArr:t}}))},children:[a&&a.fetchHabits.map((function(e){return Object(C.jsx)(A,{name:e.name,id:e.id,checkedToday:c.includes(parseInt(e.id))},e.id)})),Object(C.jsx)("button",{className:"habit-submit-button",type:"submit",children:"Submit"})]})]})]})},W=(n(158),n(48)),J=(n(159),n(28)),G=n(131);J.d.register(J.c,J.i,J.k,J.h,J.o,J.p,J.f);var $={0:"\ud83d\ude2d",1:"\ud83d\ude41",2:"\ud83d\ude10",3:"\ud83d\ude42",4:"\ud83d\ude01"},B={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Monthly Moods"}},scales:{yAxis:{ticks:{callback:function(e){return $[e]}}}}},L=function(){var e=(new Date).toLocaleString("default",{month:"long"}),t=Object(b.useState)([]),n=Object(m.a)(t,2),a=n[0],c=n[1],r=Object(b.useState)([]),o=Object(m.a)(r,2),s=o[0],i=o[1],l=Object(M.a)(N),d=l.loading,j=l.data,u=l.error;Object(b.useEffect)((function(){if(!d&&j){var e=j.fetchUser.monthlyMoods.slice().sort((function(e,t){return parseInt(e.createdAt.slice(8,10))-parseInt(t.createdAt.slice(8,10))})).map((function(e){var t=new Date(e.createdAt);return new Intl.DateTimeFormat("en-US").format(t)})),t=j.fetchUser.monthlyMoods.slice().reverse().map((function(e){return e.mood}));c(e),i(t)}}),[j,d]);var h={labels:a,datasets:[{type:"line",label:"Moods",borderColor:"rgb(255, 99, 132)",borderWidth:2,fill:!1,data:s}]};return Object(C.jsxs)("section",{className:"graph-container",children:[Object(C.jsx)("h3",{className:"month-title",children:e}),!!s.length&&Object(C.jsx)(G.a,{type:"line",data:h,options:B}),!s.length&&!u&&Object(C.jsx)("h2",{children:"There aren't any mood entries for this month yet!"}),u&&Object(C.jsx)("h2",{children:"Sorry, something went wrong!"})]})};n(160);function Q(e){var t,n=Object(b.useContext)(H),a=n.displayMood,c=n.habitMap;return e.habits.length&&(t=e.habits.sort().map((function(e,t){return Object(C.jsxs)("p",{className:"weekly-card-habit",children:["\u2729 ",c[parseInt(e.habitId)]]},t)}))),Object(C.jsxs)("div",{className:"weekly-card",children:[Object(C.jsx)("h4",{children:e.dayString}),Object(C.jsxs)("p",{className:"weekly-card-mood",children:["Mood: ",a(e.mood)," "]}),Object(C.jsx)("div",{children:e.habits.length?t:"No habit entries for this day."})]})}n(161);function z(){var e=Object(M.a)(S),t=e.loading,n=e.error,a=e.data,c=Object(b.useState)({}),r=Object(m.a)(c,2),o=r[0],s=r[1],i=Object(b.useContext)(H).getDayString;Object(b.useEffect)((function(){if(!t&&a){for(var e={},n=1;n<=7;n++)e[i(n)]={mood:999,habits:[]};Object.keys(e).forEach((function(t){var n=a.fetchUser.weeklyMoods.find((function(e){return e.createdAt.slice(0,10)===t})),c=a.fetchUser.weeklyHabits.filter((function(e){return e.date.slice(0,10)===t}));n&&(e[t].mood=n.mood),c.length&&(e[t].habits=c)})),s(e)}}),[t,a,i]);var l=Object.keys(o).map((function(e,t){return Object(C.jsx)(Q,{mood:o[e].mood,habits:o[e].habits,dayString:e},t)}));return t?Object(C.jsx)("h1",{children:"Loading"}):n?Object(C.jsx)("h1",{children:n.message}):Object(C.jsx)("div",{className:"weekcard-holder",children:l})}var P=function(){var e=Object(b.useContext)(H),t=e.todaysMood,n=e.todaysHabits;return Object(C.jsxs)("main",{children:[Object(C.jsxs)("section",{className:"dashboard-container",children:[Object(C.jsx)("h2",{className:"page-title",children:"My Dashboard"}),Object(C.jsxs)("div",{children:[Object(C.jsx)("p",{className:"page-quote",children:'"Every action you take is a vote for the type of person you wish to become."'}),Object(C.jsx)("p",{className:"page-quote author",children:"\u2015 James Clear"})]})]}),Object(C.jsxs)("article",{className:"today-container",children:[t?Object(C.jsx)(T,{}):Object(C.jsx)(W.b,{to:"/glow-up-fe/track",children:"\u2795 Enter your mood today!"}),n.length?Object(C.jsxs)("div",{className:"completed-habits-container",children:[Object(C.jsx)("h4",{children:"Habits I completed:"}),Object(C.jsx)("div",{className:"completed-habits",children:n.map((function(e){return Object(C.jsxs)("p",{className:"completed-habit",children:[Object(C.jsx)("span",{className:"material-icons check-icon",children:"done"}),e.name]},e.id)}))}),Object(C.jsx)(W.b,{to:"/glow-up-fe/track",children:"\u2795 Edit habits"})]}):Object(C.jsx)(W.b,{to:"/glow-up-fe/track",children:"\u2795 Enter your habits!"})]}),Object(C.jsxs)("section",{className:"week-container",children:[Object(C.jsx)("h3",{children:"This week..."}),Object(C.jsx)(z,{})]}),Object(C.jsx)(L,{})]})},R=(n(162),n(163),n(234)),Y=n(232),K=n(224),V={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,height:350,bgcolor:"background.paper",border:"2px solid grey",borderRadius:5,boxShadow:24,p:4},X=function(){var e=b.useState(!1),t=Object(m.a)(e,2),n=t[0],a=t[1],c=function(){return a(!1)},r=Object(x.a)(v,{refetchQueries:[E,"fetchJournalEntries"]}),o=Object(m.a)(r,1)[0],s=Object(b.useState)(""),i=Object(m.a)(s,2),l=i[0],d=i[1],j=Object(b.useState)(!0),u=Object(m.a)(j,2),h=u[0],O=u[1];return Object(C.jsxs)("section",{className:"journal-entry-form-container",children:[Object(C.jsx)(Y.a,{style:{color:"white",backgroundColor:"rgba(220, 79, 61, 0.8)"},onClick:function(){return a(!0)},children:"Write in your journal"}),Object(C.jsx)(K.a,{open:n,onClose:c,"aria-labelledby":"journal-entry","aria-describedby":"journal-entry-modal",children:Object(C.jsx)(R.a,{sx:V,children:Object(C.jsxs)("form",{className:"journal-entry-form",id:"journal-entry-modal",onSubmit:function(e){e.preventDefault(),l?(o({variables:{content:l}}),O(!0),d(""),c()):O(!1)},children:[Object(C.jsx)("h2",{id:"journal-entry",children:"What's on your mind?"}),Object(C.jsx)("textarea",{name:"journalEntry",id:"journalEntryInput",value:l,onChange:function(e){return d(e.currentTarget.value)}}),!h&&Object(C.jsx)("p",{children:"Write something"}),Object(C.jsx)("button",{className:"journal-entry-submit-button",type:"submit",children:"Submit"})]})})})]})},Z=n(228),_=n(235),ee=n(237),te=n(236),ne=n(128),ae=n.n(ne),ce=function(){var e,t=Object(M.a)(E),n=t.loading,a=t.data,c=t.error,r=Object(b.useState)([]),o=Object(m.a)(r,2),s=o[0],i=o[1];return Object(b.useEffect)((function(){!n&&a&&i(a.fetchUser.journalEntries)}),[n,a]),s.length&&(e=s.map((function(e){var t=new Date(e.date).toLocaleString("en-US");return Object(C.jsxs)(Z.a,{children:[Object(C.jsx)(_.a,{expandIcon:Object(C.jsx)(ae.a,{}),"aria-controls":"panel".concat(e.id,"-content"),id:e.id,children:Object(C.jsxs)(te.a,{children:["Journal Entry ",t]})}),Object(C.jsx)(ee.a,{children:Object(C.jsx)(te.a,{children:e.content})})]},e.id)}))),Object(C.jsxs)("section",{children:[Object(C.jsxs)("div",{className:"journal-title-container",children:[Object(C.jsx)("h1",{className:"journal-title",children:"My Journal"}),Object(C.jsx)(X,{})]}),e,n&&Object(C.jsx)("h2",{children:"Loading..."}),c&&Object(C.jsx)("h2",{children:"Oops, something went wrong!"})]})},re=n(238),oe=n(240),se=n(241),ie=n(226),le=n(129),de=n.n(le),je=n(239),be=n(229),ue=n(130),he=n(231),Oe=Object(ue.a)({typography:{fontFamily:"Quicksand"},palette:{text:{primary:"#FFFFFF"},primary:{main:"#658C9B"}}}),me=["dashboard","track","journal"],xe=function(){var e=b.useState(null),t=Object(m.a)(e,2),n=t[0],a=t[1],c=function(){a(null)};return Object(C.jsx)(he.a,{theme:Oe,children:Object(C.jsx)(re.a,{position:"static",children:Object(C.jsx)(je.a,{maxWidth:"xl",children:Object(C.jsxs)(oe.a,{disableGutters:!0,children:[Object(C.jsx)(te.a,{variant:"h5",noWrap:!0,component:"div",sx:{mr:2,display:{xs:"none",md:"flex"}},children:"GlowUp"}),Object(C.jsxs)(R.a,{sx:{flexGrow:0,display:{xs:"flex",md:"none"}},children:[Object(C.jsx)(se.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)},color:"inherit",children:Object(C.jsx)(de.a,{})}),Object(C.jsx)(ie.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(n),onClose:c,sx:{display:{xs:"block",md:"none"}},children:me.map((function(e){return Object(C.jsx)(W.c,{to:"glow-up-fe/".concat(e),children:Object(C.jsx)(be.a,{onClick:c,children:Object(C.jsx)(te.a,{textAlign:"center",sx:{color:"#658C9B"},children:e.toUpperCase()})},e)})}))})]}),Object(C.jsx)(te.a,{variant:"h5",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}},children:"GlowUp"}),Object(C.jsx)(R.a,{sx:{flexGrow:0,display:{xs:"none",md:"flex"}},children:me.map((function(e){return Object(C.jsx)(W.c,{to:"glow-up-fe/".concat(e),children:Object(C.jsx)(Y.a,{onClick:c,sx:{my:2,color:"white",display:"block"},children:e},e)})}))})]})})})})},fe=n(18);var pe=function(){return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(xe,{}),Object(C.jsx)(fe.c,{children:Object(C.jsxs)(fe.a,{path:"glow-up-fe",children:[Object(C.jsx)(fe.a,{index:!0,element:Object(C.jsx)(P,{})}),Object(C.jsx)(fe.a,{path:"track",element:Object(C.jsxs)("section",{className:"trackers-container",children:[Object(C.jsx)(F,{}),Object(C.jsx)(q,{})]})}),Object(C.jsx)(fe.a,{path:"dashboard",element:Object(C.jsx)(P,{})}),Object(C.jsx)(fe.a,{path:"journal",element:Object(C.jsx)(ce,{})})]})})]})},ye=n(176),ge=n(225),ve=n(222),ke=new ye.a({uri:"http://localhost:3001/graphql",cache:new ge.a});O.a.render(Object(C.jsx)(u.a.StrictMode,{children:Object(C.jsx)(W.a,{children:Object(C.jsx)(ve.a,{client:ke,children:Object(C.jsx)(I,{children:Object(C.jsx)(pe,{})})})})}),document.getElementById("root"))}},[[171,1,2]]]);
//# sourceMappingURL=main.bc9ebeef.chunk.js.map