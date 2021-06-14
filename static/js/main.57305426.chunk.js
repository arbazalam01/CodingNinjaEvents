(this.webpackJsonpevent=this.webpackJsonpevent||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(12),r=n.n(s),i=(n(87),n(15)),o=n(143),l=n(72),j=n(150),d=n(151),b=n(152),x=n(70),h=n.n(x),u=n(71),O=n.n(u),g=n(117),m=n(153),p=n(144),v=n(2),f=Object(o.a)({root:{flexGrow:1}});var _=function(e){var t=e.event_change,n=e.value,c=f();return Object(v.jsx)(g.a,{className:c.root,children:Object(v.jsxs)(m.a,{value:n,onChange:function(e,n){t(n)},indicatorColor:"secondary",textColor:"secondary",variant:"fullWidth",centered:!0,children:[Object(v.jsx)(p.a,{icon:Object(v.jsx)("img",{style:{width:"20px"},src:"https://www.codingninjas.com/assets-landing/images/all-events-selected.svg"}),label:"All Events",value:"ALL_EVENTS"}),Object(v.jsx)(p.a,{icon:Object(v.jsx)("img",{style:{width:"20px"},src:"https://www.codingninjas.com/assets-landing/images/webinar-unselected.svg",alt:""}),label:"Webinar",value:"WEBINAR"}),Object(v.jsx)(p.a,{icon:Object(v.jsx)("img",{style:{width:"20px"},src:"https://www.codingninjas.com/assets-landing/images/coding-events-unselected.svg",alt:""}),label:"Coding Event",value:"CODING_EVENT"}),Object(v.jsx)(p.a,{icon:Object(v.jsx)("img",{style:{width:"20px"},src:"https://files.codingninjas.in/bootcamp_events_unselected-5397.png",alt:""}),label:"Bootcamp Event",value:"BOOTCAMP_EVENT"}),Object(v.jsx)(p.a,{icon:Object(v.jsx)("img",{style:{width:"20px"},src:"https://files.codingninjas.in/workshop_selected-5396.png",alt:""}),label:"Workshop",value:"WORKSHOP"})]})})},y=n(73),S=n(46),w=n.n(S),N=n(145),E=n(68),C=n.n(E),A=Object(o.a)({tags:{color:"#424242",fontSize:"14px",padding:"6px 12px",fontWeight:400,borderRadius:"2px",background:"#eee",marginBottom:"10px",marginRight:"5px",cursor:"Pointer"},selectd_tags:{color:"#fff",background:"#fa7328",fontSize:"14px",padding:"6px 12px",fontWeight:400,borderRadius:"2px",marginBottom:"10px",marginRight:"5px",cursor:"Pointer"}});var k=function(e){e.set_tags;var t=e.setSelectedtags,n=e.selectedtags,a=Object(c.useState)([]),s=Object(i.a)(a,2),r=s[0],o=s[1],l=A();Object(c.useEffect)((function(){w.a.get("https://api.codingninjas.com/api/v3/event_tags").then((function(e){o(e.data.data.tags)})).catch((function(e){console.log(e)}))}),[]);var j=function(e){var c=[],a=e.target.innerHTML;n.includes(a)?(c=n.filter((function(e){return e!==a})),t(c)):t((function(e){return[].concat(Object(y.a)(e),[a])}))};return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Tags"}),Object(v.jsx)(b.a,{component:"span",children:Object(v.jsxs)(N.a,{"aria-label":"delete",className:l.margin,size:"small",onClick:function(){console.log("Clicked"),t([])},children:[Object(v.jsx)(C.a,{}),"Clear All"]})}),r.map((function(e,t){var c=l.tags;return n.includes(e)&&(c=l.selectd_tags),Object(v.jsx)(b.a,{className:c,component:"div",onClick:j,children:e},t)}))]})},T=n(146),L=n(154),W=n(148),R=n(147),B=n(156),P=n(149),G=Object(o.a)({root:{maxWidth:500},media:{height:120},title:{fontSize:"18px",letterSpacing:".2px",fontWeight:700},tags:{color:"#424242",fontSize:"14px",padding:"6px 12px",fontWeight:400,borderRadius:"2px",background:"#eee",marginRight:"5px",marginTop:"5px"},tagcontainer:{marginTop:"20px"},card_detail:{display:"flex",justifyContent:"space-between"},avatars:{display:"flex"}});var z=function(e){var t=e.image,n=e.title,c=e.desc,a=e.alltags,s=e.venue,r=e.fees,i=e.start_date,o=e.registered_users,l=e.status,d=G(),x=new Date(1e3*i),h=x.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric"});return h+=" "+x.toLocaleDateString(),Object(v.jsxs)(T.a,{className:d.root,children:[Object(v.jsx)(R.a,{className:d.media,image:t,title:n}),Object(v.jsxs)(W.a,{children:[Object(v.jsx)(P.a,{className:d.title,gutterBottom:!0,component:"p",children:n}),Object(v.jsxs)(b.a,{className:d.card_detail,children:[Object(v.jsxs)(b.a,{children:[Object(v.jsx)(P.a,{variant:"body2",color:"textSecondary",component:"p",children:"Starts On"}),Object(v.jsx)(P.a,{variant:"body2",color:"textPrimary",component:"p",children:h})]}),Object(v.jsxs)(b.a,{children:[Object(v.jsx)(P.a,{variant:"body2",color:"textSecondary",component:"p",children:"Entry Fee"}),Object(v.jsx)(P.a,{variant:"body2",color:"textPrimary",component:"p",children:r?"\u20b9 ".concat(r):"Free"})]}),Object(v.jsxs)(b.a,{children:[Object(v.jsx)(P.a,{variant:"body2",color:"textSecondary",component:"p",children:"Venue"}),Object(v.jsx)(P.a,{variant:"body2",color:"textPrimary",component:"p",children:s})]})]}),Object(v.jsx)(b.a,{mt:2,children:Object(v.jsx)(P.a,{variant:"body2",color:"textSecondary",component:"p",children:c})}),Object(v.jsx)(b.a,{container:!0,className:d.tagcontainer,children:a.map((function(e,t){return Object(v.jsx)(b.a,{className:d.tags,component:"span",children:e},t)}))}),Object(v.jsxs)(j.a,{container:!0,children:[Object(v.jsxs)(j.a,{item:!0,xs:9,children:[Object(v.jsx)(b.a,{className:d.avatars,mt:5,children:o.top_users.map((function(e,t){return Object(v.jsx)(L.a,{title:e.name,children:Object(v.jsx)(B.a,{alt:"",src:e.image_url})},t)}))}),Object(v.jsxs)(P.a,{variant:"body2",color:"textSecondary",component:"p",children:["and ",Object(v.jsx)("b",{children:o.other_users_count})," others registered"]})]}),"Upcoming"===l?Object(v.jsx)(j.a,{item:!0,xs:3,children:Object(v.jsx)(b.a,{height:30,mt:7,clone:!0,children:Object(v.jsx)("img",{src:"https://files.codingninjas.in/0000000000001272.png",alt:""})})}):""]})]})]})};var U=function(e){var t=e.AllEvents;return Object(v.jsx)("div",{children:Object(v.jsx)(j.a,{container:!0,spacing:3,children:Array.isArray(t)&&t.length?t.map((function(e,t){return Object(v.jsx)(j.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(z,{title:e.name,image:e.cover_picture,desc:e.short_desc,alltags:e.card_tags,venue:e.venue,fees:e.fees,start_date:e.event_start_time,registered_users:e.registered_users,status:e.event_sub_category})},t)})):Object(v.jsx)(b.a,{mt:30,ml:45,children:Object(v.jsx)("h1",{children:"No events found"})})})})},V=Object(o.a)({root:{flexGrow:1}});var D=function(e){var t=e.event_sub_change,n=e.value,c=V();return Object(v.jsx)(g.a,{className:c.root,children:Object(v.jsxs)(m.a,{value:n,onChange:function(e,n){t(n)},indicatorColor:"secondary",textColor:"secondary",children:[Object(v.jsx)(p.a,{label:"Upcoming",value:"Upcoming"}),Object(v.jsx)(p.a,{label:"Archived",value:"Archived"}),Object(v.jsx)(p.a,{label:"All Time Favorites",value:"All Time Favorites"})]})})},F=n(155),I=Object(o.a)({root:{"& > * + *":{marginTop:2}}});var M=function(e){var t=e.count,n=e.offset_change,a=I(),s=Object(c.useState)(1),r=Object(i.a)(s,2),o=r[0],l=r[1];return Object(v.jsx)("div",{className:a.root,children:Object(v.jsx)(F.a,{color:"secondary",count:t,page:o,onChange:function(e,t){l(t),n(20*(t-1))}})})};var H=function(e){var t=e.icon,n=e.settheme,c=e.theme;return Object(v.jsxs)(j.a,{container:!0,children:[Object(v.jsx)(j.a,{item:!0,xs:5,children:Object(v.jsx)(b.a,{height:125,width:200,clone:!0,children:Object(v.jsx)("img",{src:"https://www.codingninjas.com/assets-landing/images/CNLOGO.svg",alt:""})})}),Object(v.jsx)(j.a,{item:!0,xs:5,children:Object(v.jsxs)(b.a,{mt:4,children:[Object(v.jsx)(P.a,{variant:"h4",component:"h1",children:"Events & News"}),Object(v.jsx)(P.a,{variant:"body2",component:"p",children:"Learn, Compete & Grow"})]})}),Object(v.jsx)(j.a,{item:!0,xs:2,children:Object(v.jsxs)(b.a,{mt:3,children:[Object(v.jsx)(N.a,{edge:"end",color:"inherit","aria-label":"mode",onClick:function(){return n(!c)},children:t}),Object(v.jsxs)(P.a,{children:["Click on ",c?"Moon":"Sun"," Icon to change to"," ",c?"Dark":"Light"," theme"]})]})})]})},J=Object(o.a)((function(e){return{root:{flexGrow:1}}})),K={palette:{type:"light"}},q={palette:{type:"dark"}};var Q=function(){var e=J(),t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)("ALL_EVENTS"),o=Object(i.a)(r,2),x=o[0],u=o[1],g=Object(c.useState)("Upcoming"),m=Object(i.a)(g,2),p=m[0],f=m[1],y=Object(c.useState)([]),S=Object(i.a)(y,2),N=S[0],E=S[1],C=Object(c.useState)(0),A=Object(i.a)(C,2),T=A[0],L=A[1],W=Object(c.useState)(""),R=Object(i.a)(W,2),B=R[0],P=R[1],G=Object(c.useState)(!0),z=Object(i.a)(G,2),V=z[0],F=z[1],I=Object(c.useState)(0),Q=Object(i.a)(I,2),X=Q[0],Y=Q[1],Z=V?Object(v.jsx)(O.a,{}):Object(v.jsx)(h.a,{}),$=Object(l.a)(V?K:q);return Object(c.useEffect)((function(){var e="";N.map((function(t){return e+=t+","})),P(e)}),[N]),Object(c.useEffect)((function(){w.a.get("https://api.codingninjas.com/api/v3/events?event_category=".concat(x,"&event_sub_category=").concat(p,"&tag_list=").concat(B,"&offset=").concat(T)).then((function(e){s(e.data.data.events),Y(e.data.data.page_count)})).catch((function(e){console.log(e)}))}),[x,B,p,T]),Object(v.jsxs)("div",{className:e.root,children:[Object(v.jsx)(H,{icon:Z,settheme:F,theme:V}),Object(v.jsxs)(j.a,{container:!0,spacing:3,children:[Object(v.jsx)(d.a,{theme:$,children:Object(v.jsxs)(j.a,{item:!0,xs:12,children:[Object(v.jsx)(_,{event_change:function(e){return u(e)},value:x}),Object(v.jsx)(D,{event_sub_change:function(e){return f(e)},value:p})]})}),Object(v.jsxs)(j.a,{item:!0,xs:9,children:[Object(v.jsx)(d.a,{theme:$,children:Object(v.jsx)(U,{AllEvents:a})}),Array.isArray(a)&&a.length?Object(v.jsx)(b.a,{mt:2,ml:70,children:Object(v.jsx)(M,{count:X,offset_change:function(e){return L(e)}})}):""]}),Object(v.jsx)(j.a,{item:!0,xs:2,children:Object(v.jsx)(k,{setSelectedtags:E,selectedtags:N})})]})]})};r.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(Q,{})}),document.getElementById("root"))},87:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.57305426.chunk.js.map