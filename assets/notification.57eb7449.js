import{r as e,d as t,o as i,a as o,e as n,w as a,f as l,h as s,l as u}from"./vendor.88f548bf.js";const c=s("页面通知"),r=s("桌面通知"),d=s("根据状态通知"),f={setup(s){const f=e(!1);function m(){u({title:"您有新消息",message:"显示消息",offset:120})}function p(){y("您有新消息！",{body:"你的好友XX上线了！",icon:"",tag:"",data:"可以是任意数据类型",dir:"auto",vibrate:[200,100,200],silent:!1,noscreen:!1,sticky:!1,requireInteraction:!1,unique:!0})}function w(){setTimeout((()=>{document.hidden?p():m()}),3e3)}const v={},y=(e,t)=>{const i=window.Notification||window.mozNotification||window.webkitNotification;null==i||i.requestPermission((i=>{var o;if("granted"===i){const{duration:i,tag:n,unique:a}=t,l=a&&n;l&&(null==(o=v[n])||o.close());const s=new Notification(e,t);l&&(v[n]=s),i&&setTimeout((()=>{s.close(),delete v[n]}),i)}"denied"===i&&console.log("用户拒绝了推送")}))};return(e,s)=>{const u=t("el-button"),v=t("el-switch");return i(),o("div",null,[n(u,{type:"primary",onClick:m},{default:a((()=>[c])),_:1}),n(u,{type:"primary",onClick:p},{default:a((()=>[r])),_:1}),n(u,{type:"primary",onClick:w},{default:a((()=>[d])),_:1}),l("div",null,[n(v,{modelValue:f.value,"onUpdate:modelValue":s[0]||(s[0]=e=>f.value=e),interior:"","active-text":"是","inactive-text":"否"},null,8,["modelValue"])])])}}};export{f as default};
