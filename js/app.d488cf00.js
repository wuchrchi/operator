(function(){"use strict";var e={5087:function(e,t,a){var n=a(3751),s=a(641);function o(e,t,a,n,o,r){const i=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.Wv)(i)}var r={name:"App"},i=a(6262);const l=(0,i.A)(r,[["render",o]]);var c=l;async function u(){const e=await a.e(53).then(a.t.bind(a,5371,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}a(5524);var d=a(7204),m=(0,d.$N)(),f=a(5220);const p={class:"light body"},h=(0,s.Lk)("header",{class:"title"},[(0,s.Lk)("div",{class:"logo"},[(0,s.Lk)("img",{src:"/assets/logo.png",alt:"Dash Board Demo",class:"titleIcon"})]),(0,s.Lk)("h1",{class:"titleText"},"Dash Board")],-1),v={class:"rowSection"},k={class:"outlineBox",key:"login"},b={class:"login"},g={class:"btnGroup"},L=(0,s.Lk)("span",{class:"material-symbols-outlined"}," login",-1),C=(0,s.Lk)("label",{for:""},"登入",-1),w={id:"selectChannel",key:"selectChannel",class:"outlineBox"},y={class:"login"},x=(0,s.Lk)("h2",null,"選擇平台",-1),F={class:"backButtonGroup"},T=(0,s.Lk)("span",{class:"material-symbols-outlined"}," arrow_back",-1),_={class:"selectPermissions"},E={id:"forgotpsd",key:"forgotpsd",class:"outlineBox"},B={class:"login"},X=(0,s.Lk)("h2",null,"忘記帳號與密碼",-1),A={class:"backButtonGroup"},P=(0,s.Lk)("span",{class:"material-symbols-outlined"}," arrow_back",-1),O=(0,s.Lk)("label",{class:"centertext"}," 提交",-1),D=(0,s.Lk)("footer",null,[(0,s.Lk)("p",null,"夾子練習用©2024")],-1),I={key:0,class:"confirmationModal"},S={class:"confirmationContent"},W=(0,s.Lk)("p",null,"確定登出?",-1),j={class:"confirmationButtons"},V=(0,s.Lk)("span",{class:"material-symbols-outlined"}," cancel",-1),$=(0,s.Lk)("label",{class:"centertext"}," 取消",-1),z=(0,s.Lk)("span",{class:"material-symbols-outlined"}," logout",-1),G=(0,s.Lk)("label",{class:"centertext"}," 登出",-1);function K(e,t,a,o,r,i){const l=(0,s.g2)("md-outlined-text-field"),c=(0,s.g2)("md-filled-button"),u=(0,s.g2)("md-text-button"),d=(0,s.g2)("md-icon-button");return(0,s.uX)(),(0,s.CE)("div",p,[h,(0,s.Lk)("section",v,[(0,s.bF)(n.eB,{name:"smart-animate",mode:"out-in"},{default:(0,s.k6)((()=>[r.isLoginVisible?((0,s.uX)(),(0,s.CE)("div",k,[(0,s.Lk)("div",b,[(0,s.Lk)("form",{onSubmit:t[2]||(t[2]=(0,n.D$)(((...e)=>i.login&&i.login(...e)),["prevent"]))},[(0,s.bF)(l,{type:"account",name:"account",label:"帳號",id:"account",class:"input",modelValue:r.account,"onUpdate:modelValue":t[0]||(t[0]=e=>r.account=e)},null,8,["modelValue"]),(0,s.bF)(l,{type:"account",name:"Password",label:"密碼",id:"Password",class:"input",modelValue:r.account,"onUpdate:modelValue":t[1]||(t[1]=e=>r.account=e)},null,8,["modelValue"]),(0,s.Lk)("div",g,[(0,s.bF)(c,{href:"#",class:"basicBtn",onClick:(0,n.D$)(i.login,["prevent"])},{default:(0,s.k6)((()=>[L,C])),_:1},8,["onClick"]),(0,s.bF)(u,{href:"#",class:"basicBtn forgotPsd",onClick:(0,n.D$)(i.showForgotPassword,["prevent"])},{default:(0,s.k6)((()=>[(0,s.eW)("忘記帳號與密碼")])),_:1},8,["onClick"])])],32)])])):r.isLoginVisible||r.isForgotPasswordVisible?((0,s.uX)(),(0,s.CE)("div",E,[(0,s.Lk)("div",B,[X,(0,s.Lk)("div",A,[(0,s.bF)(d,{href:"#",onClick:(0,n.D$)(i.showLogin,["prevent"])},{default:(0,s.k6)((()=>[P])),_:1},8,["onClick"])]),(0,s.Lk)("form",{onSubmit:t[5]||(t[5]=(0,n.D$)(((...e)=>i.submitForgotPassword&&i.submitForgotPassword(...e)),["prevent"])),class:"forgot"},[(0,s.bF)(l,{type:"text",name:"email",label:"請輸入信箱",id:"email",class:"input",modelValue:r.email,"onUpdate:modelValue":t[4]||(t[4]=e=>r.email=e)},null,8,["modelValue"]),(0,s.bF)(c,{href:"#",class:"basicBtn",onClick:(0,n.D$)(i.submitForgotPassword,["prevent"])},{default:(0,s.k6)((()=>[O])),_:1},8,["onClick"])],32)])])):((0,s.uX)(),(0,s.CE)("div",w,[(0,s.Lk)("div",y,[x,(0,s.Lk)("div",F,[(0,s.bF)(d,{href:"#",onClick:(0,n.D$)(i.showLogoutConfirmation,["prevent"])},{default:(0,s.k6)((()=>[T])),_:1},8,["onClick"])]),(0,s.Lk)("div",_,[(0,s.bF)(c,{class:"basicBtn"},{default:(0,s.k6)((()=>[(0,s.eW)("Admin")])),_:1}),(0,s.bF)(c,{class:"basicBtn",onClick:t[3]||(t[3]=e=>i.navigateTo("/HomePage"))},{default:(0,s.k6)((()=>[(0,s.eW)("operator")])),_:1}),(0,s.bF)(c,{class:"basicBtn",to:"homepage"},{default:(0,s.k6)((()=>[(0,s.eW)("Universal")])),_:1})])])]))])),_:1})]),D,r.showConfirmation?((0,s.uX)(),(0,s.CE)("div",I,[(0,s.Lk)("div",S,[W,(0,s.Lk)("div",j,[(0,s.bF)(c,{class:"basicBtn cancel",onClick:(0,n.D$)(i.hideLogoutConfirmation,["prevent"])},{default:(0,s.k6)((()=>[V,$])),_:1},8,["onClick"]),(0,s.bF)(c,{class:"basicBtn send",onClick:i.logout},{default:(0,s.k6)((()=>[z,G])),_:1},8,["onClick"])])])])):(0,s.Q3)("",!0)])}a(4114);var M={name:"LoginPage",data(){return{account:"",password:"",email:"",isLoginVisible:!0,isForgotPasswordVisible:!1,showConfirmation:!1}},methods:{login(){this.isLoginVisible=!1},showForgotPassword(){this.isLoginVisible=!1,this.isForgotPasswordVisible=!0},showLogin(){this.isLoginVisible=!0,this.isForgotPasswordVisible=!1,this.$router.push("/")},submitForgotPassword(){console.log("提交忘記密碼請求，電子郵件:",this.email)},showLogoutConfirmation(){this.showConfirmation=!0},hideLogoutConfirmation(){this.showConfirmation=!1},logout(){this.hideLogoutConfirmation(),this.showLogin()},navigateTo(e){this.$router.push(e)}}};const N=(0,i.A)(M,[["render",K]]);var H=N;const Q={class:"light homeBody"},R={class:"main"},U={class:"mainContent"},Y={class:"rightContent"},q={class:"leftContent"};function Z(e,t,a,n,o,r){const i=(0,s.g2)("navBar"),l=(0,s.g2)("appDrawer"),c=(0,s.g2)("tvComponents"),u=(0,s.g2)("powerMeter"),d=(0,s.g2)("alarmReport"),m=(0,s.g2)("mapcomponents"),f=(0,s.g2)("controlPanel"),p=(0,s.g2)("chartGroup");return(0,s.uX)(),(0,s.CE)("div",Q,[(0,s.bF)(i),(0,s.Lk)("section",R,[(0,s.bF)(l),(0,s.Lk)("div",U,[(0,s.Lk)("section",Y,[(0,s.bF)(c),(0,s.bF)(u),(0,s.bF)(d)]),(0,s.Lk)("section",q,[(0,s.bF)(m),(0,s.bF)(f),(0,s.bF)(p)])])])])}const J=(0,s.Lk)("div",{class:"leadingIcon"},[(0,s.Lk)("div",null,[(0,s.Lk)("img",{src:"/assets/logo.png",alt:"logo",class:"icon"})]),(0,s.Lk)("p",null,"您好，使用者")],-1),ee={class:"toolBtns light-medium-contras"},te=(0,s.Lk)("span",{class:"material-symbols-outlined"},"apps",-1),ae=(0,s.Lk)("span",{class:"material-symbols-outlined"},"circle_notifications",-1),ne=(0,s.Lk)("span",{class:"material-symbols-outlined"},"person",-1);function se(e,t,a,n,o,r){const i=(0,s.g2)("md-filled-icon-button");return(0,s.uX)(),(0,s.CE)("nav",null,[J,(0,s.Lk)("div",ee,[(0,s.bF)(i,{href:"#",class:""},{default:(0,s.k6)((()=>[te])),_:1}),(0,s.bF)(i,{href:"#",class:""},{default:(0,s.k6)((()=>[ae])),_:1}),(0,s.bF)(i,{href:"#",class:""},{default:(0,s.k6)((()=>[ne])),_:1})])])}var oe={name:"navBar",data(){return{}}};const re=(0,i.A)(oe,[["render",se]]);var ie=re,le=a(33);const ce=(0,s.Lk)("div",{class:"h3Bgc"},[(0,s.Lk)("h3",null,"案場")],-1),ue={class:"scrollableContent"},de={class:"projectTitle"},me={class:"md-list-item-text fieldName"},fe=(0,s.Lk)("div",{class:"iconPostion"},[(0,s.Lk)("span",{class:"material-symbols-outlined"},"arrow_drop_up")],-1),pe={class:"md-list-item-text"};function he(e,t,a,n,o,r){const i=(0,s.g2)("SearchBar"),l=(0,s.g2)("md-list-item"),c=(0,s.g2)("md-list"),u=(0,s.g2)("md-app-drawer");return(0,s.uX)(),(0,s.Wv)(u,{"md-permanent":"full"},{default:(0,s.k6)((()=>[(0,s.bF)(i),ce,(0,s.Lk)("section",ue,[(0,s.bF)(c,{class:"drawerList"},{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.data,((e,t)=>((0,s.uX)(),(0,s.Wv)(l,{key:t,class:"projectField"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",de,[(0,s.Lk)("span",me,(0,le.v_)(t),1),fe]),(0,s.bF)(c,{class:"drawerList"},{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e,((e,t)=>((0,s.uX)(),(0,s.Wv)(l,{key:t,class:"projectName"},{default:(0,s.k6)((()=>[(0,s.Lk)("span",pe,(0,le.v_)(e),1)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1024)))),128))])),_:1})])])),_:1})}const ve={class:"searchBar"},ke=(0,s.Lk)("div",{class:"leadingIcon"},[(0,s.Lk)("span",{class:"material-symbols-outlined"},"search")],-1);function be(e,t,a,o,r,i){return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",ve,[ke,(0,s.bo)((0,s.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>r.searchQuery=e),placeholder:"查詢案場",class:"search-input"},null,512),[[n.Jo,r.searchQuery]])])])}var ge={name:"SearchBar",data(){return{searchQuery:""}},methods:{performSearch(){console.log("Searching for:",this.searchQuery)}}};const Le=(0,i.A)(ge,[["render",be]]);var Ce=Le,we={name:"AppDrawer",components:{SearchBar:Ce},data(){return{data:{"A公司":["案場1","案場2","案場3"],"B公司":["案場1","案場2","案場3"],"C公司":["案場1","案場2","案場3"],"D公司":["案場1","案場2","案場3"],"E公司":["案場1","案場2","案場3"],"F公司":["案場1","案場2","案場3"],"G公司":["案場1","案場2","案場3"],"H公司":["案場1","案場2","案場3"],"I公司":["案場1","案場2","案場3"]}}}};const ye=(0,i.A)(we,[["render",he]]);var xe=ye;const Fe={class:"tvWall"},Te=(0,s.Lk)("h3",{class:"tvTitle"},"輪播牆",-1),_e={class:"carousel"},Ee={class:"sTitle"},Be={class:"gridName"},Xe={class:"gridParameter"},Ae={class:"dots"},Pe=["onClick"];function Oe(e,t,a,o,r,i){return(0,s.uX)(),(0,s.CE)("div",Fe,[Te,(0,s.Lk)("div",_e,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.sections,((e,t)=>(0,s.bo)(((0,s.uX)(),(0,s.CE)("div",{class:"bigBox",key:t},[(0,s.Lk)("h4",Ee,(0,le.v_)(e.title),1),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.boxes,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:"smallBox",key:t},[(0,s.Lk)("div",Be,(0,le.v_)(e.name),1),(0,s.Lk)("div",Xe,(0,le.v_)(e.parameter),1)])))),128))])),[[n.aG,r.currentIndex===t]]))),128))]),(0,s.Lk)("div",Ae,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.sections,((e,t)=>((0,s.uX)(),(0,s.CE)("span",{key:t,class:(0,le.C4)(["dot",{active:r.currentIndex===t}]),onClick:e=>r.currentIndex=t},null,10,Pe)))),128))])])}var De={name:"tvComponents",data(){return{currentIndex:0,sections:[{title:"第一大格子標題",boxes:[{name:"小格子1",parameter:"參數1"},{name:"小格子2",parameter:"參數2"},{name:"小格子3",parameter:"參數3"},{name:"小格子4",parameter:"參數4"}]},{title:"第二大格子標題",boxes:[{name:"小格子5",parameter:"參數5"},{name:"小格子6",parameter:"參數6"},{name:"小格子7",parameter:"參數7"},{name:"小格子8",parameter:"參數8"}]},{title:"第三大格子標題",boxes:[{name:"小格子9",parameter:"參數5"},{name:"小格子10",parameter:"參數6"},{name:"小格子11",parameter:"參數7"},{name:"小格子12",parameter:"參數8"}]},{title:"第四大格子標題",boxes:[{name:"小格子13",parameter:"參數5"},{name:"小格子14",parameter:"參數6"},{name:"小格子15",parameter:"參數7"},{name:"小格子16",parameter:"參數8"}]}]}}};const Ie=(0,i.A)(De,[["render",Oe]]);var Se=Ie;const We={class:"meterGroup"},je={class:"mHTitle"},Ve={class:"mBox"},$e={class:"mTitle"},ze={class:"blurContainer",style:{"backdrop-filter":"blur(10px)"}},Ge={class:"dots"},Ke=["onClick"],Me=(0,s.Lk)("div",{class:"dots"},[(0,s.Lk)("span",{class:"['dot', { 'active': currentPage[index] === pageIndex - 1 }]"})],-1);function Ne(e,t,a,n,o,r){const i=(0,s.g2)("meterComponents");return(0,s.uX)(),(0,s.CE)("section",We,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.chartConfigs,((t,a)=>((0,s.uX)(),(0,s.CE)("div",{key:a,class:"powerMeter"},[(0,s.Lk)("h3",je,(0,le.v_)(t.title),1),(0,s.Lk)("div",Ve,[(0,s.Lk)("h4",$e,(0,le.v_)(t.subtitle),1),(0,s.Lk)("div",ze,[(0,s.bF)(i,{min:t.min,max:t.max,value:t.value},null,8,["min","max","value"])])]),(0,s.Lk)("div",Ge,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.sections,((t,a)=>((0,s.uX)(),(0,s.CE)("span",{key:a,class:(0,le.C4)(["dot",{active:e.currentIndex===a}]),onClick:t=>e.currentIndex=a},null,10,Ke)))),128))])])))),128)),Me])}const He={ref:"chartContainer",style:{width:"100%",height:"15vh"}};function Qe(e,t,a,n,o,r){return(0,s.uX)(),(0,s.CE)("div",He,null,512)}var Re=a(3680),Ue={name:"metertComponents",props:["min","max","value"],mounted(){this.initChart()},methods:{initChart(){const e=Re.Ts(this.$refs.chartContainer),t={backgroundColor:"transparent",tooltip:{formatter:"{a} <br/>{b} : {c}V"},series:[{name:"Temperature",type:"gauge",min:this.min,max:this.max,radius:"100%",center:["50%","55%"],axisLine:{lineStyle:{width:10,color:[[.7,"#FF8A75"],[.8,"#B4F1BE"],[1,"#FF8A75"]]}},axisTick:{show:!1},detail:{formatter:"{value} V",fontSize:16,offsetCenter:[0,"60%"],color:"#00210C"},data:[{value:this.value,name:""}],splitLine:{length:10,distance:-10,lineStyle:{width:2,color:"#fff"}},pointer:{width:2,itemStyle:{color:"#00210C"}}}]};e.setOption(t)}}};const Ye=(0,i.A)(Ue,[["render",Qe]]);var qe=Ye,Ze={name:"powerMeter",components:{meterComponents:qe},data(){return{chartConfigs:[{title:"電壓錶",subtitle:"電錶 1",min:0,max:400,value:100},{title:"電壓錶",subtitle:"電錶 2",min:0,max:500,value:250},{title:"電壓錶",subtitle:"電錶 3",min:0,max:100,value:50}]}}};const Je=(0,i.A)(Ze,[["render",Ne]]);var et=Je;const tt={class:"tvWall"},at=(0,s.Lk)("h3",{class:"tvTitle"},"警報&預警",-1),nt={class:"alertBox"},st=(0,s.Lk)("div",{class:"alertHeader"},[(0,s.Lk)("span",{class:"alertTitle"},"發生日期"),(0,s.Lk)("span",{class:"alertTitle"},"告警狀態"),(0,s.Lk)("span",{class:"alertTitle"},"查看詳細")],-1),ot={class:"scrollableContent"},rt={class:"alertContent"},it={class:"alertDate"},lt={class:"alertStatus"},ct={class:"alertStatus"},ut=(0,s.Lk)("span",{class:"material-symbols-outlined"},"search",-1);function dt(e,t,a,n,o,r){const i=(0,s.g2)("md-filled-button"),l=(0,s.g2)("md-list-item"),c=(0,s.g2)("md-list");return(0,s.uX)(),(0,s.CE)("div",tt,[at,(0,s.Lk)("div",nt,[st,(0,s.Lk)("section",ot,[(0,s.bF)(c,{class:"alertList"},{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.alerts,((e,t)=>((0,s.uX)(),(0,s.Wv)(l,{key:t,class:"alertItem"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",rt,[(0,s.Lk)("span",it,(0,le.v_)(e.date),1),(0,s.Lk)("span",lt,(0,le.v_)(e.statusText),1),(0,s.Lk)("div",ct,[(0,s.bF)(i,{href:"#",class:"basicBtn details",onClick:t=>r.viewDetails(e)},{default:(0,s.k6)((()=>[ut,(0,s.eW)(" 查看詳情 ")])),_:2},1032,["onClick"])])])])),_:2},1024)))),128))])),_:1})])])])}var mt={name:"alarmReport",data(){return{alerts:[{date:"2024-09-11 14:30",statusText:"告警"},{date:"2024-09-10 09:15",statusText:"預警"},{date:"2024-09-10 09:15",statusText:"預警"},{date:"2024-09-10 09:15",statusText:"預警"},{date:"2024-09-10 09:15",statusText:"預警"},{date:"2024-09-10 09:15",statusText:"預警"},{date:"2024-09-10 09:15",statusText:"預警"},{date:"2024-09-10 09:15",statusText:"預警"},{date:"2024-09-10 09:15",statusText:"預警"},{date:"2024-09-10 09:15",statusText:"預警"},{date:"2024-09-10 09:15",statusText:"預警"},{date:"2024-09-10 09:15",statusText:"預警"},{date:"2024-09-10 09:15",statusText:"預警"},{date:"2024-09-10 09:15",statusText:"預警"},{date:"2024-09-10 09:15",statusText:"預警"},{date:"2024-09-10 09:15",statusText:"預警"},{date:"2024-09-10 09:15",statusText:"預警"},{date:"2024-09-10 09:15",statusText:"預警"}]}},methods:{viewDetails(e){console.log("查看告警詳情:",e)}}};const ft=(0,i.A)(mt,[["render",dt]]);var pt=ft;const ht={class:"mapWall"},vt=(0,s.Lk)("h3",{class:"mapTitle"},"地圖",-1),kt=(0,s.Lk)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28899.84636233186!2d121.26050297431641!3d25.119431100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a19ac48f7c55%3A0x84dd51a4b42a392f!2z5Y-w54Gj6Zu75Yqb5YWs5Y-4IOael-WPo-eZvOmbu-W7oA!5e0!3m2!1szh-TW!2stw!4v1726723377690!5m2!1szh-TW!2stw",width:"100%",height:"100%",style:{"border-radius":"10px",border:"none"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1),bt=[vt,kt];function gt(e,t,a,n,o,r){return(0,s.uX)(),(0,s.CE)("div",ht,bt)}var Lt={name:"mapComponents"};const Ct=(0,i.A)(Lt,[["render",gt]]);var wt=Ct;const yt={class:"mointerWall"},xt=(0,s.Lk)("h3",{class:"tvTitle"},"監視",-1),Ft={class:"mointerGp"},Tt={class:"firstLinegp"},_t={class:"mointerTitle"},Et={class:"secLinegp"},Bt={class:"mointerTitle"},Xt=(0,s.Lk)("span",{class:"material-symbols-outlined"},"touch_app",-1);function At(e,t,a,n,o,r){const i=(0,s.g2)("md-filled-button");return(0,s.uX)(),(0,s.CE)("div",yt,[xt,(0,s.Lk)("div",Ft,[(0,s.Lk)("div",Tt,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.firstLineAlerts,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:"mointer"},[(0,s.Lk)("span",_t,(0,le.v_)(e.info),1),(0,s.Lk)("div",{ref_for:!0,ref:"chartFirst-"+t,style:{width:"100%",height:"100%"}},null,512)])))),128))]),(0,s.Lk)("div",Et,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.secondLineAlerts,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:"mointer mointersec"},[(0,s.Lk)("span",Bt,(0,le.v_)(e.info),1),(0,s.Lk)("div",{ref_for:!0,ref:"chartSecond-"+t,style:{width:"100%",height:"100%"}},null,512),(0,s.bF)(i,{href:"#",class:"basicBtn",onClick:t=>r.viewDetails(e)},{default:(0,s.k6)((()=>[Xt,(0,s.eW)(" 執行 ")])),_:2},1032,["onClick"])])))),128))])])])}var Pt={name:"controlPanel",data(){return{firstLineAlerts:[{info:"監控1",value:130},{info:"監控2",value:90},{info:"監控3",value:75},{info:"監控4",value:75},{info:"監控5",value:75}],secondLineAlerts:[{info:"監控6",value:130},{info:"監控7",value:90},{info:"監控8",value:75},{info:"監控9",value:75},{info:"監控10",value:75}]}},mounted(){this.$nextTick((()=>{this.firstLineAlerts.forEach(((e,t)=>{this.initChart(t,"chartFirst-")})),this.secondLineAlerts.forEach(((e,t)=>{this.initChart(t,"chartSecond-")}))}))},methods:{initChart(e,t){const a=this.$refs[`${t}${e}`][0],n="chartFirst-"===t?this.firstLineAlerts[e].value:this.secondLineAlerts[e].value,s={series:[{type:"gauge",pointer:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},detail:{backgroundColor:"#fff",borderColor:"#999",borderWidth:2,lineHeight:40,height:40,borderRadius:8,offsetCenter:[0,0],formatter:"{value} hrs",rich:{value:{fontSize:50,fontWeight:"bolder",color:"#777"}}},data:[{value:n}]}]},o=Re.Ts(a);o.setOption(s)},viewDetails(e){console.log("查看詳情: ",e)}}};const Ot=(0,i.A)(Pt,[["render",At]]);var Dt=Ot;const It={class:"chartWall"},St=(0,s.Lk)("h3",{class:"chartTitle"},"圖錶預覽",-1),Wt={ref:"chartContainer",class:"chartContainer"};function jt(e,t,a,n,o,r){return(0,s.uX)(),(0,s.CE)("div",It,[St,(0,s.Lk)("div",Wt,null,512)])}var Vt={name:"chartGroup",data(){return{timeData:["2024/6/12 2:00","2024/6/12 3:00","2024/6/12 4:00","2024/6/12 5:00","2024/6/12 6:00","2024/6/12 7:00","2024/6/12 8:00","2024/6/12 9:00","2024/6/12 10:00","2024/6/12 11:00","2024/6/12 12:00","2024/6/12 13:00","2024/6/12 14:00","2024/6/12 15:00","2024/6/12 16:00","2024/6/12 17:00","2024/6/12 18:00","2024/6/12 19:00","2024/6/12 20:00","2024/6/12 21:00","2024/6/12 22:00","2024/6/12 23:00","2024/6/13 0:00","2024/6/13 1:00","2024/6/13 2:00","2024/6/13 3:00","2024/6/13 4:00","2024/6/13 5:00","2024/6/13 6:00","2024/6/13 7:00","2024/6/13 8:00","2024/6/13 9:00","2024/6/13 10:00","2024/6/13 11:00","2024/6/13 12:00","2024/6/13 13:00","2024/6/13 14:00","2024/6/13 15:00","2024/6/13 16:00","2024/6/13 17:00","2024/6/13 18:00","2024/6/13 19:00","2024/6/13 20:00","2024/6/13 21:00","2024/6/13 22:00","2024/6/13 23:00","2024/6/14 0:00","2024/6/14 1:00","2024/6/14 2:00","2024/6/14 3:00","2024/6/14 4:00","2024/6/14 5:00","2024/6/14 6:00","2024/6/14 7:00","2024/6/14 8:00","2024/6/14 9:00","2024/6/14 10:00","2024/6/14 11:00","2024/6/14 12:00","2024/6/14 13:00","2024/6/14 14:00","2024/6/14 15:00","2024/6/14 16:00","2024/6/14 17:00","2024/6/14 18:00","2024/6/14 19:00","2024/6/14 20:00","2024/6/14 21:00","2024/6/14 22:00","2024/6/14 23:00"],chartData:[100,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500,200,150,300,400,500]}},mounted(){this.initChart(),window.addEventListener("resize",this.resizeChart)},methods:{initChart(){this.chart=Re.Ts(this.$refs.chartContainer);const e={tooltip:{trigger:"axis"},xAxis:{type:"category",data:this.timeData},yAxis:{type:"value"},series:[{data:this.chartData,type:"line",symbolSize:8}]};this.chart.setOption(e)},resizeChart(){this.chart&&this.chart.resize()}}};const $t=(0,i.A)(Vt,[["render",jt]]);var zt=$t,Gt={name:"HomePage",components:{navBar:ie,appDrawer:xe,tvComponents:Se,powerMeter:et,alarmReport:pt,mapcomponents:wt,controlPanel:Dt,chartGroup:zt}};const Kt=(0,i.A)(Gt,[["render",Z]]);var Mt=Kt;a(3124),a(4748);const Nt=[{path:"/",component:H},{path:"/HomePage",component:Mt}],Ht=(0,f.aE)({history:(0,f.LA)("/operator/"),routes:Nt});u();const Qt=(0,n.Ef)(c);Qt.use(Ht),Qt.use(m),Qt.mount("#app")}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,s,o){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],o=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(i=!1,o<r&&(r=o));if(i){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,s,o]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};a.t=function(n,s){if(1&s&&(n=this(n)),8&s)return n;if("object"===typeof n&&n){if(4&s&&n.__esModule)return n;if(16&s&&"function"===typeof n.then)return n}var o=Object.create(null);a.r(o);var r={};e=e||[null,t({}),t([]),t(t)];for(var i=2&s&&n;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){r[e]=function(){return n[e]}}));return r["default"]=function(){return n},a.d(o,r),o}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/webfontloader.8c90aaed.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="operator:";a.l=function(n,s,o,r){if(e[n])e[n].push(s);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[s];var m=function(t,a){i.onerror=i.onload=null,clearTimeout(f);var s=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(e){return e(a)})),t)return t(a)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/operator/"}(),function(){var e={524:0};a.f.j=function(t,n){var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var o=new Promise((function(a,n){s=e[t]=[a,n]}));n.push(s[2]=o);var r=a.p+a.u(t),i=new Error,l=function(n){if(a.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",i.name="ChunkLoadError",i.type=o,i.request=r,s[1](i)}};a.l(r,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,o,r=n[0],i=n[1],l=n[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(l)var u=l(a)}for(t&&t(n);c<r.length;c++)o=r[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},n=self["webpackChunkoperator"]=self["webpackChunkoperator"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(5087)}));n=a.O(n)})();
//# sourceMappingURL=app.d488cf00.js.map