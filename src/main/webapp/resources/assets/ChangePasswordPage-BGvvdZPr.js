import{a as h,b,r as P,d as v,c as y,o as i,f as u,g as s,l as r,v as d,t as k,m as g,h as l,w as x}from"./index-HatRJsUW.js";import{a as V}from"./authApi-8J2peiPo.js";const S={class:"mt-5 mx-auto",style:{width:"500px"}},B=s("h1",{class:"my-5"},[s("i",{class:"fa-solid fa-lock"}),l(" 비밀번호 변경 ")],-1),I={class:"mb-3"},N=s("label",{for:"password",class:"form-label"},[s("i",{class:"fa-solid fa-lock"}),l(" 이전 비밀번호: ")],-1),U={class:"mb-3"},A=s("label",{for:"password",class:"form-label"},[s("i",{class:"fa-solid fa-lock"}),l(" 새 비밀번호: ")],-1),C={class:"mb-3"},D=s("label",{for:"password",class:"form-label"},[s("i",{class:"fa-solid fa-lock"}),l(" 새 비밀번호 확인: ")],-1),M={key:0,class:"text-danger"},T=["disabled"],E=s("i",{class:"fa-solid fa-check"},null,-1),z={__name:"ChangePasswordPage",setup(R){const p=h(),w=b(),o=P({id:w.id,oldPassword:"",newPassword:"",newPassword2:""}),m=v(()=>!o.oldPassword||!o.newPassword||!o.newPassword2),a=y(""),f=()=>a.value="",n=()=>a.value="",_=async()=>{if(o.newPassword!=o.newPassword2){a.value="새 비밀번호가 일치하지 않습니다.";return}try{await V.changePassword(o),alert("비밀번호를 수정했습니다."),p.push({name:"profile"})}catch(c){a.value=c.response.data}};return(c,e)=>(i(),u("div",S,[B,s("form",{onSubmit:x(_,["prevent"])},[s("div",I,[N,r(s("input",{type:"password",class:"form-control",placeholder:"이전 비밀번호","onUpdate:modelValue":e[0]||(e[0]=t=>o.oldPassword=t),onInput:f},null,544),[[d,o.oldPassword]])]),s("div",U,[A,r(s("input",{type:"password",class:"form-control",placeholder:"새 비밀번호","onUpdate:modelValue":e[1]||(e[1]=t=>o.newPassword=t),onInput:n},null,544),[[d,o.newPassword]])]),s("div",C,[D,r(s("input",{type:"password",class:"form-control",placeholder:"새 비밀번호 확인","onUpdate:modelValue":e[2]||(e[2]=t=>o.newPassword2=t),onInput:n},null,544),[[d,o.newPassword2]])]),a.value?(i(),u("div",M,k(a.value),1)):g("",!0),s("button",{type:"submit",class:"btn btn-primary mt-4",disabled:m.value},[E,l(" 확인 ")],8,T)],32)]))}};export{z as default};
