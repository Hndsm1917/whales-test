import{d as x,_ as p,o as n,c as r,a as t,r as m,n as S,b as T,e as f,f as d,g as E,h as g,i as l,t as C,j as $,p as U,k as L,u as V,l as h,w as v,F as y,m as k}from"./index-3ccb647f.js";const O=x("user",{state:()=>({user:null}),actions:{login(){this.user=!0}}});const q=["primary"],A=["left","center"],R={props:{type:{type:String,default:"button"},text:{type:String,required:!0},to:{type:String,default:void 0},target:{type:String,default:void 0},theme:{type:String,default:"primary",validator(e){return q.includes(e)}},align:{type:String,default:"left",validator(e){return A.includes(e)}}},emits:["click"],methods:{emitClick(e){this.$emit("click",e)}}},M=["type"],N={class:"ui-button__wrapper"},j={class:"ui-button__inner"},H=["innerHTML"];function F(e,o,s,i,a,c){return n(),r("button",{class:S(["ui-button",[`ui-button--theme--${s.theme}`,`ui-button--align--${s.align}`]]),type:s.type,onClick:o[0]||(o[0]=(..._)=>c.emitClick&&c.emitClick(..._))},[t("span",N,[t("span",j,[m(e.$slots,"icon",{},void 0,!0),t("span",{class:"ui-button__font ui-button__font--text",innerHTML:s.text},null,8,H)])])],10,M)}const z=p(R,[["render",F],["__scopeId","data-v-bc732d5a"]]);const G=T({name:"CTab"}),J={class:"c-tab"},K={class:"c-tab__heading"},Q={class:"c-tab__sub-heading"},W={class:"c-tab__content"};function X(e,o,s,i,a,c){return n(),r("div",J,[t("div",K,[m(e.$slots,"heading",{},void 0,!0)]),t("div",Q,[m(e.$slots,"sub-heading",{},void 0,!0)]),t("div",W,[m(e.$slots,"content",{},void 0,!0)])])}const Y=p(G,[["render",X],["__scopeId","data-v-60159cc8"]]),I=(e,o)=>{const s=e[o];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((i,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+o)))})},Z={props:{name:{type:String,required:!0},path:{type:String,default:void 0}},computed:{icon(){return this.path?f(()=>I(Object.assign({}),`../../assets/svg/${this.path}/${this.name}.svg`)):f(()=>I(Object.assign({"../../assets/svg/human-black.svg":()=>g(()=>import("./human-black-6ecdaa47.js"),["assets/human-black-6ecdaa47.js","assets/index-3ccb647f.js","assets/index-b810d5d8.css"]),"../../assets/svg/human-green.svg":()=>g(()=>import("./human-green-88a761d2.js"),["assets/human-green-88a761d2.js","assets/index-3ccb647f.js","assets/index-b810d5d8.css"]),"../../assets/svg/progress-bar-tongue.svg":()=>g(()=>import("./progress-bar-tongue-6dd56a47.js"),["assets/progress-bar-tongue-6dd56a47.js","assets/index-3ccb647f.js","assets/index-b810d5d8.css"]),"../../assets/svg/wallet.svg":()=>g(()=>import("./wallet-34698edb.js"),["assets/wallet-34698edb.js","assets/index-3ccb647f.js","assets/index-b810d5d8.css"])}),`../../assets/svg/${this.name}.svg`))}}};function ee(e,o,s,i,a,c){return n(),d(E(c.icon))}const D=p(Z,[["render",ee]]);const te=T({name:"ProgressBar",components:{Icon:D},props:{count:{type:Number,default:0,required:!0}}}),se=e=>(U("data-v-c1c159c7"),e=e(),L(),e),ne={class:"wrapper"},ae=se(()=>t("div",{class:"progress-bar__wrapper"},[t("div",{class:"progress-bar__line"},[t("div",{class:"progress-bar__token"})]),t("div",{class:"progress-bar__tongue"})],-1)),oe={class:"content__wrapper"},ce={class:"count"},re={class:"icon"};function _e(e,o,s,i,a,c){const _=l("Icon");return n(),r("div",ne,[ae,t("div",oe,[t("span",ce,C(e.count),1),t("div",re,[e.count!==0?(n(),d(_,{key:0,name:"human-black",class:"icon__img"})):$("",!0),e.count===0?(n(),d(_,{key:1,name:"human-green",class:"icon__img"})):$("",!0)])])])}const ie=p(te,[["render",_e],["__scopeId","data-v-c1c159c7"]]),ue={components:{ProgressBar:ie,UiButton:z,CTab:Y,Icon:D},setup(){const e=V();return{userStore:O(),telegramStore:e}},computed:{balance(){return`Баланс: ${this.tabsData[this.currentTabID].balance} USDT`}},data(){return{currentTabID:0,tabsData:[{heading:"Dom 1",balance:8375609385,items:[{count:10},{count:400},{count:20},{count:80},{count:49201}]},{heading:"Dom 2",balance:8375,items:[{count:80},{count:0}]},{heading:"Dom 3",balance:324324,items:[{count:10}]}]}},methods:{setCurrentTabId(e){this.currentTabID=e},login(){this.userStore.login()}}},le={class:"page"},de={class:"page__info"},pe={class:"page__font page__font--balance"},ge={key:0,class:"page__block"},me=t("span",{class:"page__font page__font--block"}," Чтобы занять место в очереди, войдите ",-1),be=[me],he={key:1,class:"page__ratings ratings"},ve=t("div",{class:"ratings__header"},[t("span",{class:"rating__font"},"Ваши места:"),t("span",{class:"rating__font"},"Чел. в очереди осталось:")],-1),fe={class:"ratings__list"};function $e(e,o,s,i,a,c){const _=l("UiButton"),w=l("Icon"),B=l("ProgressBar"),P=l("CTab");return n(),r("div",le,[h(P,{class:"page__tab",currentIndex:a.currentTabID},{heading:v(()=>[(n(!0),r(y,null,k(a.tabsData,(b,u)=>(n(),d(_,{key:u,class:S(["page__btn page__btn--tab",{"page__btn--tab--active":a.currentTabID===u}]),text:b.heading,onClick:ye=>c.setCurrentTabId(u)},null,8,["class","text","onClick"]))),128))]),"sub-heading":v(()=>[h(_,{onClick:c.login,class:"page__btn page__btn--enter",text:"Войти 10 USDT"},null,8,["onClick"]),t("div",de,[t("span",pe,C(c.balance),1),h(w,{class:"page__icon page__icon--wallet",name:"wallet"})])]),content:v(()=>[i.userStore.user===null?(n(),r("div",ge,be)):(n(),r("div",he,[ve,t("div",fe,[(n(!0),r(y,null,k(a.tabsData[a.currentTabID].items,(b,u)=>(n(),d(B,{key:u,class:"ratings__item",count:b.count},null,8,["count"]))),128))])]))]),_:1},8,["currentIndex"])])}const Ie=p(ue,[["render",$e]]);export{Ie as default};
