(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(4),r=t(2),o=t(0),c=t.n(o),u=t(14),i=t.n(u),l=(t(20),function(e){var n=e.notification;return(null===n||void 0===n?void 0:n.message)?c.a.createElement("div",{className:n.type},n.message):null}),s=function(e){var n=e.filter,t=e.handleFilterChange;return c.a.createElement("div",null,"filter shown with ",c.a.createElement("input",{value:n,onChange:t}))},m=function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,"name: ",c.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),c.a.createElement("div",null,"number: ",c.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add")))},d=function(e){return c.a.createElement("div",null,e.person.name," ",e.person.number,c.a.createElement("button",{"data-id":e.person.id,onClick:e.handleDelete},"delete"))},f=function(e){return e.persons.map((function(n){if(-1!==n.name.toLowerCase().indexOf(e.filter.toLowerCase()))return c.a.createElement(d,{key:n.name,person:n,handleDelete:e.handleDelete})}))},h=t(3),p=t.n(h),b=function(){return p.a.get("".concat("/api/persons")).then((function(e){return e.data}))},E=function(e){return p.a.post("".concat("/api/persons"),e).then((function(e){return e.data}))},g=function(e){return p.a.delete("".concat("/api/persons","/").concat(e)).then((function(e){return e.data}))},v=function(e){return p.a.put("".concat("/api/persons","/").concat(e.id),e).then((function(e){return e.data}))},w=function(){var e=Object(o.useState)([]),n=Object(r.a)(e,2),t=n[0],u=n[1],i=Object(o.useState)({}),d=Object(r.a)(i,2),h=d[0],p=d[1],w=Object(o.useState)(""),O=Object(r.a)(w,2),j=O[0],C=O[1],y=Object(o.useState)(""),N=Object(r.a)(y,2),S=N[0],k=N[1],D=Object(o.useState)(""),T=Object(r.a)(D,2),x=T[0],F=T[1];Object(o.useEffect)((function(){b().then((function(e){return u(e)})).catch((function(e){p({message:"Error while fetching phonebook",type:"error"}),setTimeout((function(){p(null)}),5e3),console.error(e)}))}),[]);return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(l,{notification:h}),c.a.createElement(s,{value:j,handleFilterChange:function(e){C(e.target.value)}}),c.a.createElement("h2",null,"add a new"),c.a.createElement(m,{handleSubmit:function(e){if(e.preventDefault(),t.some((function(e){return e.name===S}))){if(window.confirm("".concat(S," is already added to phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===S})),r=Object(a.a)(Object(a.a)({},n),{},{number:x});v(r).then((function(e){u(t.map((function(n){return n.id!==e.id?n:e}))),k(""),F(""),p({message:"Updated ".concat(n.name),type:"success"}),setTimeout((function(){p({})}),3e3)})).catch((function(e){p({message:"Error while updating number",type:"error"}),setTimeout((function(){p(null)}),5e3),console.error(e)}))}}else E({name:S,number:x}).then((function(e){u(t.concat(e)),k(""),F(""),p({message:"Added ".concat(e.name),type:"success"}),setTimeout((function(){p(null)}),3e3)})).catch((function(e){p({message:"Error while creating person",type:"error"}),setTimeout((function(){p(null)}),5e3),console.error(e)}))},newName:S,handleNameChange:function(e){k(e.target.value)},newNumber:x,handleNumberChange:function(e){F(e.target.value)}}),c.a.createElement("h2",null,"Numbers"),c.a.createElement(f,{persons:t,filter:j,handleDelete:function(e){var n=t.find((function(n){return n.id===e.target.dataset.id}));window.confirm("Delete ".concat(n.name," ?"))&&g(n.id).then((function(e){u(t.filter((function(e){return e.id!==n.id})))})).catch((function(e){p({message:"Error while deleting person",type:"error"}),setTimeout((function(){p(null)}),5e3),console.error(e)}))}}))};i.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6d0c1e3b.chunk.js.map