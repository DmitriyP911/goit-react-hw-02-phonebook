(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{13:function(t,e,a){t.exports={main:"phonebookStyles_main__3TuG0"}},15:function(t,e,a){t.exports=a(28)},2:function(t,e,a){t.exports={form:"formStyles_form__M-BKd",label:"formStyles_label__3g4NS",input:"formStyles_input__3eC_R",button:"formStyles_button__33nyX"}},28:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(12),o=a.n(r),l=a(14),s=a(4),u=a(7),i=a(8),m=a(10),b=a(9),d=a(6),f=a(1),h=a.n(f),p=a(2),_=a.n(p),v=function(t){Object(m.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleAddContact=function(e){t.setState(Object(d.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(s.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(i.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.number;return c.a.createElement("form",{className:_.a.form,onSubmit:this.handleSubmit},c.a.createElement("label",{className:_.a.label,htmlFor:h.a.generate()},"Name"),c.a.createElement("input",{className:_.a.input,value:e,name:"name",type:"text",onChange:this.handleAddContact}),c.a.createElement("label",{className:_.a.label,htmlFor:h.a.generate()},"Number"),c.a.createElement("input",{className:_.a.input,value:a,name:"number",type:"text",onChange:this.handleAddContact}),c.a.createElement("button",{className:_.a.button,type:"submit",disabled:""===this.state.name||""===this.state.number&&!0},"Add conact"))}}]),a}(n.Component),y=a(3),E=a.n(y),C=function(t){var e=t.value,a=t.contactsFilter;return c.a.createElement("div",{className:E.a.contacts},c.a.createElement("h2",null,"Contacts"),c.a.createElement("input",{className:E.a.input,name:"search",value:e,type:"text",onChange:a}))},S=function(t){var e=t.contactsArr,a=t.onDelete;return c.a.createElement("ul",null,e.map((function(t){return c.a.createElement("li",{className:E.a.li,key:h.a.generate()},c.a.createElement("p",null,t.name),c.a.createElement("p",null,"Number: ",t.number),c.a.createElement("button",{className:E.a.button,onClick:function(){return a(t.id)}},"delete"))})))},g=a(13),N=a.n(g),j=function(t){Object(m.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleAddContact=function(e){var a=Object(s.a)(Object(s.a)({},e),{},{id:h.a.generate()});t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[a])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.contactsFilter=function(e){t.setState({filter:e.target.value})},t}return Object(i.a)(a,[{key:"render",value:function(){var t=this.state,e=t.contacts,a=t.filter,n=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,a);return c.a.createElement("div",{className:N.a.main},c.a.createElement(v,{onAddContact:this.handleAddContact}),this.state.contacts.length>0&&c.a.createElement("div",null,c.a.createElement(C,{value:a,contactsFilter:this.contactsFilter}),c.a.createElement(S,{contactsArr:n,onDelete:this.deleteContact})))}}]),a}(n.Component);o.a.render(c.a.createElement(j,null),document.getElementById("root"))},3:function(t,e,a){t.exports={contacts:"contactsStyle_contacts__3D68N",input:"contactsStyle_input__2CG2s",li:"contactsStyle_li__NZ65S",button:"contactsStyle_button__1weRa"}}},[[15,1,2]]]);
//# sourceMappingURL=main.14ccb3f2.chunk.js.map