(this.webpackJsonprasberryfront=this.webpackJsonprasberryfront||[]).push([[0],{122:function(e,t,n){e.exports=n(165)},127:function(e,t,n){},159:function(e,t){},165:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),i=n.n(r),c=(n(127),n(110)),l=n(18),s=n(19);function u(){var e=Object(l.a)(["    \n    .hv-100{\n        height: 100vh;\n    }\n    .display-block{\n      display: block;\n    }\n    button{\n      border: none !important;\n    }    \n"]);return u=function(){return e},e}var d=Object(s.a)(u()),m=n(97),f=function(e){var t=e.title,n=void 0===t?"Gensi":t,a=e.children;Object(c.a)(e,["title","children"]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,null,o.a.createElement("title",null,n),o.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",integrity:"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",crossorigin:"anonymous"}),o.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"})),o.a.createElement(d,null),a)},p=n(51),h=n(13),v=n(33);function g(){var e=Object(l.a)(['\n  display: block;\n  padding: 15px 30px;\n\n  & .content-loader-send {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    & .label {\n      font-weight: bold;\n      margin-left: 5px;\n    }\n  }\n\n  & .phone-group {\n    position: relative;\n    & .btn-action {\n      position: absolute;\n      top: 16px;\n      right: 0px;\n      height: 40px;\n    }\n  }\n\n  & .temperature-content.active {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    & .content-loader-temperature {\n      display: "flex";\n      justify-content: flex-start;\n      align-items: center;\n      & .label {\n        display: inline-flex;\n        transform: translateY(-6px);\n        margin-left: 15px;\n        font-weight: bold;\n      }\n    }\n  }\n\n  & .temp {\n    pointer-events: none;\n  }\n\n  & .success {\n    background-color: #b3ffca;\n    border-radius: 3px;\n  }\n\n  & .warning {\n    background-color: #fff2b3;\n    border-radius: 3px;\n  }\n\n  & .danger {\n    background-color: #ffb3b3;\n    border-radius: 3px;\n  }\n']);return g=function(){return e},e}function b(){var e=Object(l.a)(["\n  background-color: #394fe4;\n  width: 100%;\n  min-height: 70px;\n  display: flex;\n  padding: 10px 15px;\n  align-items: center;\n  justify-content: left;\n  & .logo {\n    width: 70px;\n    margin-right: 15px;\n  }\n  & .title {\n    color: #ffffff;\n    font-size: 1.7em;\n    margin: 0;\n  }\n"]);return b=function(){return e},e}function E(){var e=Object(l.a)(["\n  background-color: white;\n"]);return E=function(){return e},e}function y(){var e=Object(l.a)(["\n  background-color: blue;\n"]);return y=function(){return e},e}function k(){var e=Object(l.a)(['\n  .Mui-disabled.MuiInputBase-input {\n    background-color: #efefef;\n    color: #555555;\n  }\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  min-height: 100vh;\n  background-image: url("/img/covid-bg.svg");\n  background-color: #4156fa;\n  background-repeat: repeat;\n  background-position: center;\n  background-size: cover;\n  & .container.custom {\n    max-width: 600px;\n    box-shadow: 0px 0px 3px 3px #293aad;\n    padding: 0px;\n    background-color: #ffffff;\n  }\n']);return k=function(){return e},e}function x(){var e=Object(l.a)(["\n  display: block;\n  width: 300px;\n  padding: 15px;\n  & .display {\n    display: flex;\n    margin: 0 auto;\n    background-color: #efefef;\n    border: 1px solid rgba(0, 0, 0, 0.26);\n    height: 50px;\n    font-size: 1.5em;\n    color: #000000;\n    justify-content: center;\n    align-items: center;\n    border-radius: 8px;\n    margin-bottom: 5px;\n  }\n  & .keys-row {\n    display: flex;\n    & .key-col {\n      width: calc(100% / 3);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      & .btn-action {\n        width: 100px;\n        height: 80px;\n        font-size: 2em;\n        margin: 5px;\n        outline: none;\n        border-radius: 8px;\n        &:not(.default) {\n          background-color: #3e3e3e;\n          color: #ffffff;\n        }\n      }\n    }\n  }\n"]);return x=function(){return e},e}var N=s.b.div(x()),j=s.b.div(k()),O=(s.b.div(y()),s.b.div(E()),s.b.div(b())),w=s.b.div(g()),C=n(208),I=n(204),S=n(209),D=n(210),W=n(203),U=n(207),z=n(200),_=n(205),T=n(211),L=n(15),M=n(20),R=n(100),A=function(){function e(t,n){Object(L.a)(this,e),this.collection=t,this.config=n}return Object(M.a)(e,[{key:"getURL",value:function(e){return"".concat(this.config.apisURL,"/").concat(this.config.prefix,"/").concat(e)}},{key:"getHeaders",value:function(){return{"Content-Type":"application/json","Array-Wheres":JSON.stringify(Object(R.get)(this.config,"arrayWheres",[]))}}},{key:"checkStatus",value:function(e){if(e.status>=200&&e.status<300)return e;throw new Error(e.statusText)}},{key:"parseJSON",value:function(e){return e.json()}},{key:"request",value:function(e){var t=this,n=e.url,a=e.data,o=void 0===a?null:a,r=e.method,i=void 0===r?"GET":r;return new Promise((function(e,a){var r={headers:t.getHeaders(),method:i,body:o?JSON.stringify(o):null};fetch(n,r).then(t.checkStatus).then((function(n){e(t.parseJSON(n))})).catch(a)}))}},{key:"get",value:function(){var e=this.getURL(this.collection);return this.request({url:e})}},{key:"update",value:function(e,t){var n=this.getURL(this.collection);return this.request({url:"".concat(n,"/").concat(t),method:"PUT",data:e})}},{key:"delete",value:function(e){var t=this.getURL(this.collection);return this.request({url:"".concat(t,"/").concat(e),method:"DELETE"})}},{key:"add",value:function(e){var t=this.getURL(this.collection);return this.request({url:"".concat(t),method:"POST",data:e})}}]),e}(),q="AND",B="OR",P=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(L.a)(this,e),this.collection=t,this.config=Object(h.a)({},n),this.config.arrayWheres=[],this}return Object(M.a)(e,[{key:"get",value:function(){var e=new A(this.collection,this.config,this.arrayWheres).get(this.arrayWheres);return e.onSnapshot=function(){},e}},{key:"where",value:function(e,t,n){return this.config.arrayWheres.push({field:e,condition:t,value:n,type:q}),this}},{key:"orWhere",value:function(e,t,n){return this.config.arrayWheres.push({field:e,condition:t,value:n,type:B}),this}},{key:"findById",value:function(e){return this.doc(e)}},{key:"doc",value:function(e){var t=this;return{set:function(n){return new A(t.collection,t.config).update(n,e)},delete:function(){return new A(t.collection,t.config).delete(e)}}}},{key:"set",value:function(e){new A(this.collection,this.config).set()}},{key:"limit",value:function(){}},{key:"groupBy",value:function(){}},{key:"find",value:function(){}},{key:"add",value:function(e){return new A(this.collection,this.config).add(e)}},{key:"update",value:function(e){return this.doc(e)}},{key:"delete",value:function(e){this.doc(e)}}]),e}(),F=function(){function e(t){Object(L.a)(this,e),this.config=t}return Object(M.a)(e,[{key:"collection",value:function(e){if("string"!==typeof e)throw new Error("collection param must be string type.");return new P(e,this.config)}}]),e}(),H=n(101),J=n.n(H),Y=null,G=function(e){return Y=J()(e)},V=function(e){Y.emit("message",e)},K=function(e){Y.on("message",(function(t){"function"==typeof e&&e(t)}))},Q=new(function(){function e(t){Object(L.a)(this,e),this.url=t}return Object(M.a)(e,[{key:"initializeApp",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.config=e,this.config.socket=G(e.socketURL),this.config.sendMessage=V,this.config.onMessage=K}},{key:"database",value:function(){return new F(this.config)}},{key:"socket",value:function(){var e=this;return{sendMessage:function(t){e.config.sendMessage(t)},onMessage:function(t){e.config.onMessage(t)}}}}]),e}()),Z=n(67),$=n(68),X=n.n($),ee=n(102),te=n(44),ne=n.n(te),ae=function e(t){var n=this;Object(L.a)(this,e),this.getListHealthEntities=function(){return n.db.collection("health_entities").get()},this.addUser=function(e){var t=e.temperatura,a=e.documento,o=e.nombres,r=e.apellidos,i=e.eps,c=e.telefono,l=e.rh,s=e.fecha_nacimiento,u=e.tipo;return n.db.collection("user").add({temperatura:t,documento:a,nombres:o,apellidos:r,eps:i,rh:l,fecha_nacimiento:s,telefono:c,tipo:u})},this.getUserByDocument=function(e){return n.db.collection("user").where("documento","=",e).get()},this.getIndexData=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.length>e?t[e]:"Indefinido"},this.validForm=function(e,t){var n=e.documento,a=e.telefono,o=e.eps,r=e.tipo,i=e.sintomas;return 0==t?{res:!1,message:"Por favor realice de nuevo la lectura de la temperatura.",title:"Temperatura no leida."}:"string"!==typeof a||""==a.trim()?{res:!1,message:"Por favor ingrese su tel\xe9fono."}:"string"!==typeof o||""==o.trim()?{res:!1,message:"Por favor seleccione su eps."}:"string"!==typeof r||""==r.trim()?{res:!1,message:"Por favor seleccione el tipo de usuario."}:"string"!==typeof i||""==i.trim()?{res:!1,message:"Por favor seleccione su estado/s\xedntomas."}:"string"!==typeof n||""==n.trim()?{res:!1,message:"No hemos detectado la lectura de su documento , por favor realice la lectura nuevamente."}:{res:!0}},this.sendForm=function(e,t,a,o,r){var i=n.validForm(e,t);if(!i.res)return ne.a.fire(i.title?i.title:"Complete el formulario",i.message,"error"),void r();var c=e.documento,l=e.sintomas;n.getUserByDocument(c).then(function(){var i=Object(ee.a)(X.a.mark((function i(s){var u;return X.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(u=null,!(s.code>0)){i.next=8;break}return i.next=4,n.updateUser(s.data[0].id,e);case 4:(u=i.sent).code>0&&(u=s.data[0]),i.next=16;break;case 8:return i.next=10,n.addUser(e);case 10:if(!((u=i.sent).code>0)){i.next=16;break}return i.next=14,n.getUserByDocument(c);case 14:u=(u=i.sent).code>0?u.data[0]:null;case 16:if(!u){i.next=23;break}return i.next=19,n.addHistory(u,l,a,t);case 19:i.sent.code>0?(ne.a.fire({position:"center",icon:"success",title:"Se ha registrado el historial correctamente.",showConfirmButton:!1,timer:2e3}),r()):(ne.a.fire({position:"center",icon:"error",title:"Lo sentimos, no se pudo registrar el historial.",showConfirmButton:!1,timer:2e3}),r()),i.next=25;break;case 23:ne.a.fire("Error","Lo sentimos, no pudimos enviar la informaci\xf3n.","error"),r();case 25:"function"===typeof o&&o(u);case 26:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}())},this.updateUser=function(e,t){var a=t.temperatura,o=t.documento,r=t.nombres,i=t.apellidos,c=t.eps,l=t.telefono,s=t.rh,u=t.fecha_nacimiento,d=t.tipo;return n.db.collection("user").update(e).set({temperatura:a,documento:o,nombres:r,apellidos:i,eps:c,telefono:l,rh:s,fecha_nacimiento:u,tipo:d})},this.addHistory=function(e,t,a,o){return n.db.collection("history").add({documento:e.documento,temperatura:o,sintomas:t,dispositivo:a})},this.db=t},oe=n(103),re=n.n(oe),ie=n(107),ce=n.n(ie),le=n(108),se=n.n(le),ue="WELCOME",de="SET_GROUP",me="GET_TEMPERATURE",fe=function(){var e=function(e){var t={},n=document.createElement("a");n.href=e;for(var a=n.search.substring(1).split("&"),o=0;o<a.length;o++){var r=a[o].split("=");t[r[0]]=decodeURIComponent(r[1])}return t}(window.location.href).device;return e||1},pe=function(){var e=Q.socket(),t=null,n=Object(a.useRef)(""),r=Object(a.useRef)(null),i=Object(a.useState)({documento:"",nombres:"",apellidos:"",eps:"",telefono:"",tipo:"",sintomas:"",fecha_nacimiento:"",rh:""}),c=Object(v.a)(i,2),l=c[0],s=c[1],u=Object(a.useState)(!1),d=Object(v.a)(u,2),m=d[0],f=d[1],g=Object(a.useState)(!1),b=Object(v.a)(g,2),E=b[0],y=b[1],k=Object(a.useState)(0),x=Object(v.a)(k,2),L=x[0],M=x[1],R=Object(a.useState)([]),A=Object(v.a)(R,2),q=A[0],B=A[1],P=Object(a.useState)(!1),F=Object(v.a)(P,2),H=F[0],J=F[1],Y=function(e){n=e};Object(a.useEffect)((function(){ee(),G()}),[]);var G=function(){var e=["telefono","eps","tipo","sintomas"];document.querySelector("body").addEventListener("keydown",(function(t){var a=t.key||String.fromCharCode(t.keyCode),o=t.target.name;r.current&&clearTimeout(r.current),e.includes(o)&&null==r.current||(r.current=setTimeout((function(){clearInterval(r.current),r.current=null}),200),t.preventDefault(),Y(n+a),13!==t.keyCode&&13!==t.which||(K(n),Y("")))}))},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n={},a=e.findIndex((function(e){return"M"==="".concat(e).toUpperCase()||"F"=="".concat(e).toUpperCase()}));return n.documento=t.getIndexData(0,e),a>=0&&(3==a?(n.nombres=t.getIndexData(2,e),n.apellidos=t.getIndexData(1,e),n.fecha_nacimiento=t.getIndexData(4,e),n.rh=t.getIndexData(5,e)):4==a?(n.nombres="".concat(t.getIndexData(2,e)," ").concat(t.getIndexData(3,e)),n.apellidos="".concat(t.getIndexData(1,e)),n.fecha_nacimiento=t.getIndexData(5,e),n.rh=t.getIndexData(6,e)):5==a&&(n.nombres="".concat(t.getIndexData(3,e)," ").concat(t.getIndexData(4,e)),n.apellidos="".concat(t.getIndexData(1,e)," ").concat(t.getIndexData(2,e)),n.fecha_nacimiento=t.getIndexData(6,e),n.rh=t.getIndexData(7,e).replace("Enter",""))),n.eps="",n.telefono="",n.tipo="",n.sintomas="",n},K=function(n){var a=n.replace("[object Object]","").replace(/\Shift/g,"").split("Tab");try{var o={type:me,data:V(a)};J(!0),e.sendMessage(o),t.getUserByDocument(o.data.documento).then((function(e){if(e.code>0){var t=e.data[0];t.fecha_nacimiento=re()(t.fecha_nacimiento).format("YYYY-MM-DD"),s(Object(h.a)(Object(h.a)({},o.data),t))}else s(Object(h.a)(Object(h.a)({},a),o.data))}))}catch(r){console.error("Error al parcear el objeto:",r)}},$=function(e){var t=e.target,n=t.name,a=t.value;s(Object(h.a)(Object(h.a)({},l),{},Object(p.a)({},n,a)))},X=function(t){if(t.type===ue)e.sendMessage({type:de,dispositivo:fe()});else if(t.type===me){if(J(!1),!t.temperature)return;M(t.temperature)}},ee=function(){Q.initializeApp({apisURL:Z.apiurl,socketURL:Z.socketurl,prefix:"api"}),(t=new ae(Q.database())).getListHealthEntities().then((function(e){e.code>0&&B(e.data)})),e.onMessage(X)},te=function(){f(!0),(t=new ae(Q.database())).sendForm(l,L,fe(),(function(){s({documento:"",nombres:"",apellidos:"",eps:"",telefono:"",tipo:"",sintomas:"",fecha_nacimiento:"",rh:""}),M(0),f(!1)}),(function(){f(!1)}))},ne=function(e){"A"!=e?"C"!=e?l.telefono.length>18||s(Object(h.a)(Object(h.a)({},l),{},{telefono:l.telefono+e})):s(Object(h.a)(Object(h.a)({},l),{},{telefono:""})):y(!1)};return o.a.createElement(j,null,o.a.createElement(U.a,{onClose:function(){return y(!1)},open:E},o.a.createElement(N,null,o.a.createElement("div",{className:"display"},l.telefono),o.a.createElement("div",{className:"keys-buttons"},o.a.createElement("div",{className:"keys-row"},o.a.createElement("div",{className:"key-col"},o.a.createElement(z.a,{className:"btn-action",variant:"contained",color:"default",onClick:function(){return ne(7)}},"7")),o.a.createElement("div",{className:"key-col"},o.a.createElement(z.a,{className:"btn-action",variant:"contained",color:"default",onClick:function(){return ne(8)}},"8")),o.a.createElement("div",{className:"key-col"},o.a.createElement(z.a,{className:"btn-action",variant:"contained",color:"default",onClick:function(){return ne(9)}},"9"))),o.a.createElement("div",{className:"keys-row"},o.a.createElement("div",{className:"key-col"},o.a.createElement(z.a,{className:"btn-action",variant:"contained",color:"default",onClick:function(){return ne(4)}},"4")),o.a.createElement("div",{className:"key-col"},o.a.createElement(z.a,{className:"btn-action",variant:"contained",color:"default",onClick:function(){return ne(5)}},"5")),o.a.createElement("div",{className:"key-col"},o.a.createElement(z.a,{className:"btn-action",variant:"contained",color:"default",onClick:function(){return ne(6)}},"6"))),o.a.createElement("div",{className:"keys-row"},o.a.createElement("div",{className:"key-col"},o.a.createElement(z.a,{className:"btn-action",variant:"contained",color:"default",onClick:function(){return ne(1)}},"1")),o.a.createElement("div",{className:"key-col"},o.a.createElement(z.a,{className:"btn-action",variant:"contained",color:"default",onClick:function(){return ne(2)}},"2")),o.a.createElement("div",{className:"key-col"},o.a.createElement(z.a,{className:"btn-action",variant:"contained",color:"default",onClick:function(){return ne(3)}},"3"))),o.a.createElement("div",{className:"keys-row"},o.a.createElement("div",{className:"key-col"},o.a.createElement(z.a,{className:"btn-action",variant:"contained",color:"default",onClick:function(){return ne(0)}},"0")),o.a.createElement("div",{className:"key-col"},o.a.createElement(z.a,{className:"btn-action default",variant:"contained",color:"secondary",onClick:function(){return ne("C")}},o.a.createElement(ce.a,null))),o.a.createElement("div",{className:"key-col"},o.a.createElement(z.a,{className:"btn-action default",variant:"contained",color:"primary",onClick:function(){return ne("A")}},o.a.createElement(se.a,null))))))),o.a.createElement("div",{className:"container custom"},o.a.createElement(O,null,o.a.createElement("img",{src:"".concat(".","/img/covid-logo.svg"),className:"logo animate__animated animate__bounce"}),o.a.createElement("h1",{className:"title"},"COVID-19 - Analizer")),o.a.createElement(w,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 pb-3"},o.a.createElement(_.a,{severity:"info"},o.a.createElement(T.a,null,"Informaci\xf3n"),"Esta informaci\xf3n solo ser\xe1 usada para efectos de cerco epidemiol\xf3gico por ",o.a.createElement("strong",null,"Covid-19"),".")),o.a.createElement("div",{className:"col-md-4 temperature-content ".concat(H?"active":"")},H?o.a.createElement("div",{className:"content-loader-temperature"},o.a.createElement("div",{className:"spinner-border text-primary",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading...")),o.a.createElement("span",{className:"label"},"Leyendo...")):o.a.createElement(C.a,{label:"Temperatura",id:"temperatura",margin:"normal",name:"temperatura",value:L,fullWidth:!0,size:"small",className:L<=37?"success temp":L>=38?"danger temp":L>37?"warning temp":"temp",variant:"outlined"})),o.a.createElement("div",{className:"col-md-8"},o.a.createElement(C.a,{label:"Documento",id:"documento",name:"documento",margin:"normal",fullWidth:!0,onChange:$,size:"small",value:l.documento,required:!0,disabled:!0,variant:"outlined"})),o.a.createElement("div",{className:"col-6"},o.a.createElement(C.a,{label:"Nombres",id:"nombres",name:"nombres",margin:"normal",fullWidth:!0,value:l.nombres,size:"small",disabled:!0,onChange:$,variant:"outlined"})),o.a.createElement("div",{className:"col-6"},o.a.createElement(C.a,{label:"Apellidos",id:"apellidos",name:"apellidos",disabled:!0,value:l.apellidos,margin:"normal",fullWidth:!0,onChange:$,size:"small",variant:"outlined"})),o.a.createElement("div",{className:"col-6"},o.a.createElement(C.a,{label:"Fecha Nacimiento",id:"fecha_nacimiento",name:"fecha_nacimiento",value:l.fecha_nacimiento,onChange:$,margin:"normal",fullWidth:!0,size:"small",disabled:!0,variant:"outlined"})),o.a.createElement("div",{className:"col-6"},o.a.createElement(C.a,{label:"RH",id:"rh",name:"rh",value:l.rh,onChange:$,margin:"normal",fullWidth:!0,size:"small",disabled:!0,variant:"outlined"})),o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"phone-group"},o.a.createElement(C.a,{label:"Tel\xe9fono",id:"telefono",name:"telefono",value:l.telefono,onChange:$,margin:"normal",fullWidth:!0,required:!0,size:"small",disabled:!0,variant:"outlined"}),o.a.createElement(z.a,{className:"btn-action",variant:"contained",color:"primary",onClick:function(){return y(!0)}},"#"))),o.a.createElement("div",{className:"col-6 pt-3"},o.a.createElement(W.a,{variant:"outlined",fullWidth:!0,name:"eps",size:"small",required:!0},o.a.createElement(S.a,{id:"labelEps"},"Eps"),o.a.createElement(I.a,{labelId:"labelEps",id:"eps",name:"eps",fullWidth:!0,size:"small",value:l.eps,disabled:m,onChange:$,label:"Eps"},q.map((function(e){return o.a.createElement(D.a,{key:e.id,value:e.nit},e.comercial_name)}))))),o.a.createElement("div",{className:"col-6 pt-3"},o.a.createElement(W.a,{variant:"outlined",name:"tipo",fullWidth:!0,size:"small",disabled:m,required:!0},o.a.createElement(S.a,{id:"labelTipo"},"Tipo"),o.a.createElement(I.a,{labelId:"labelTipo",id:"tipo",name:"tipo",fullWidth:!0,size:"small",onChange:$,value:l.tipo,label:"Tipo"},o.a.createElement(D.a,{value:""},o.a.createElement("em",null,"Ninguno")),o.a.createElement(D.a,{value:"E"},"Empleado"),o.a.createElement(D.a,{value:"V"},"Visitante")))),o.a.createElement("div",{className:"col-6 pt-3"},o.a.createElement(W.a,{variant:"outlined",fullWidth:!0,name:"sintomas",size:"small",disabled:m,required:!0},o.a.createElement(S.a,{id:"labelSintomas"},"S\xedntomas"),o.a.createElement(I.a,{labelId:"labelSintomas",id:"sintomas",name:"sintomas",fullWidth:!0,size:"small",value:l.sintomas,onChange:$,label:"S\xedntomas"},o.a.createElement(D.a,{value:"S"},"Con S\xedntomas"),o.a.createElement(D.a,{value:"N"},"S\xedn S\xedntomas")))),o.a.createElement("div",{className:"col-12 pt-3 text-right"},m&&o.a.createElement("div",{className:"content-loader-send"},o.a.createElement("div",{className:"spinner-border text-primary",role:"status"},o.a.createElement("span",{className:"sr-only"}," Enviando...")),o.a.createElement("span",{className:"label"}," Enviando...")),!m&&o.a.createElement(o.a.Fragment,null,o.a.createElement(z.a,{variant:"contained",size:"large",color:"default",className:"mr-3",onClick:function(){M(0),J(!1),s({documento:"",nombres:"",apellidos:"",eps:"",telefono:"",tipo:"",sintomas:"",fecha_nacimiento:"",rh:""})}},"Limpiar"),o.a.createElement(z.a,{variant:"contained",size:"large",color:"primary",onClick:te},"Enviar")))))))};var he=function(e){return o.a.createElement(f,{title:"COVID-19 Analizer"},o.a.createElement(pe,e))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e){e.exports=JSON.parse('{"apiurl":"http://vmi304306.contaboserver.net:82","socketurl":"http://localhost:80"}')}},[[122,1,2]]]);
//# sourceMappingURL=main.62600606.chunk.js.map