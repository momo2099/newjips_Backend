import{b as w,a as y,c,r as x,d as k,e as V,o as u,f as p,g as a,h as e,t as f,l as d,v as m,m as N,i as S,j as P,w as B}from"./index-DpW3z1B6.js";import{a as C}from"./authApi-CubL-0Av.js";const U={class:"mt-5 mx-auto",style:{width:"500px"}},j=a("h1",null,[a("i",{class:"fa-solid fa-user-gear my-3"}),e(" 회원 정보")],-1),A={class:"mb-3 mt-3"},D=["src"],E={class:"mb-3 mt-3"},M=a("label",{for:"avatar",class:"form-label"},[a("i",{class:"fa-solid fa-user-astronaut"}),e(" 아바타 이미지: ")],-1),T={class:"mb-3 mt-3"},R=a("label",{for:"name",class:"form-label"},[a("i",{class:"fa-solid fa-circle-user"}),e(" name ")],-1),$={class:"mb-3 mt-3"},q=a("label",{for:"email",class:"form-label"},[a("i",{class:"fa-solid fa-envelope"}),e(" email ")],-1),z={class:"mb-3"},F=a("label",{for:"password",class:"form-label"},[a("i",{class:"fa-solid fa-lock"}),e(" 비밀번호: ")],-1),G={key:0,class:"text-danger"},H={class:"text-center"},I=["disabled"],J=a("i",{class:"fa-solid fa-user-plus"},null,-1),K=a("i",{class:"fa-solid fa-lock"},null,-1),W={__name:"ProfilePage",setup(L){const t=w(),_=y(),r=c(null),v=c(`/api/member/${t.id}/avatar`),s=x({id:t.id,name:t.name,email:t.email,password:"",avatar:null}),i=c(""),h=k(()=>!s.email||!s.password),b=async()=>{if(r.value.files.length>0&&(s.avatar=r.value.files[0]),console.log(t),!!confirm("수정하시겠습니까?"))try{await C.update(s),i.value="",t.changeProfile(s),alert("정보를 수정하였습니다."),_.go(0)}catch(n){console.log(n),i.value=n.response.data}};return(n,o)=>{const g=V("router-link");return u(),p("div",U,[j,a("form",{onSubmit:B(b,["prevent"])},[a("div",A,[a("img",{src:v.value,class:"avatar avatar-lg me-4"},null,8,D),e(" "+f(s.id),1)]),a("div",E,[M,a("input",{type:"file",class:"form-control",ref_key:"avatar",ref:r,id:"avatar",accept:"image/png, image/jpeg"},null,512)]),a("div",T,[R,d(a("input",{type:"text",class:"form-control",placeholder:"Name",id:"name","onUpdate:modelValue":o[0]||(o[0]=l=>s.name=l)},null,512),[[m,s.name]])]),a("div",$,[q,d(a("input",{type:"email",class:"form-control",placeholder:"Email",id:"email","onUpdate:modelValue":o[1]||(o[1]=l=>s.email=l)},null,512),[[m,s.email]])]),a("div",z,[F,d(a("input",{type:"password",class:"form-control",placeholder:"비밀번호",id:"password","onUpdate:modelValue":o[2]||(o[2]=l=>s.password=l)},null,512),[[m,s.password]])]),i.value?(u(),p("div",G,f(i.value),1)):N("",!0),a("div",H,[a("button",{type:"submit",class:"btn btn-primary mt-4 me-3",disabled:h.value},[J,e(" 확인 ")],8,I),S(g,{class:"btn btn-primary mt-4",to:"/auth/changepassword"},{default:P(()=>[K,e(" 비밀번호 변경 ")]),_:1})])],32)])}}};export{W as default};
