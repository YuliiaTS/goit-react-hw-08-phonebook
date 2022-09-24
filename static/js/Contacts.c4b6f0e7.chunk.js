"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[315],{7347:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a="Contacts_main__KdbGM",r=n(5861),s=n(885),i=n(4687),c=n.n(i),u=n(2791),o=n(1465),l=n(255),d=(0,o.LC)({reducerPath:"contactsApi",baseQuery:(0,l.ni)({baseUrl:"https://6325cb284cd1a2834c44a048.mockapi.io"}),tagTypes:["Contacts"],endpoints:function(e){return{getContacts:e.query({query:function(){return"/contacts"},providesTags:["Contacts"]}),addContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:{name:e.name,number:e.number}}},invalidatesTags:["Contacts"]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:["Contacts"]})}}}),m=d.useGetContactsQuery,p=d.useAddContactMutation,b=d.useDeleteContactMutation,h="ContactForm_label__-cVXI",f="ContactForm_addBtn__CACuJ",C=n(3329);function v(){var e=(0,u.useState)(""),t=(0,s.Z)(e,2),n=t[0],a=t[1],i=(0,u.useState)(""),o=(0,s.Z)(i,2),l=o[0],d=o[1],b=m().data,v=p(),x=(0,s.Z)(v,2),_=x[0],g=x[1],j=g.isLoading,y=g.error,L=function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!b.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))){e.next=5;break}return alert("".concat(n," is already in contacts ")),e.abrupt("return");case 5:return e.prev=5,e.next=8,_({name:n,number:l});case 8:a(""),d(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(y);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}();return(0,C.jsxs)("form",{onSubmit:L,children:[(0,C.jsxs)("label",{className:h,children:["Name",(0,C.jsx)("input",{onChange:function(e){return a(e.target.value)},type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,C.jsxs)("label",{className:h,children:["Number",(0,C.jsx)("input",{onChange:function(e){return d(e.target.value)},type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,C.jsx)("button",{className:f,type:"submit",disabled:j,children:"Add contact"})]})}var x=n(1405),_=n(2007),g=n.n(_),j="ContactList_list__csErn",y="ContactList_item__EZYHO",L="ContactList_btn__6Piat";function k(e){var t=e.id,n=e.name,a=e.number,r=b(),i=(0,s.Z)(r,2),c=i[0],u=i[1].isLoading;return(0,C.jsxs)("li",{className:y,id:t,children:[n,": ",a,(0,C.jsx)("button",{className:L,type:"button",onClick:function(){return c(t)},disabled:u,children:"Delete"})]})}function w(){var e=m(),t=e.data,n=e.isLoading,a=(0,x.v9)((function(e){return e.filter})),r=null===t||void 0===t?void 0:t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return(0,C.jsx)("ul",{className:j,children:n?(0,C.jsx)("p",{children:"Loading..."}):r.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,C.jsx)(k,{id:t,name:n,number:a},t)}))})}k.propType={id:g().string.isRequired,name:g().string.isRequired,number:g().string.isRequired};var N=n(3166),q="Filter_label__vEd1E";function A(){var e=(0,x.I0)(),t=(0,x.v9)((function(e){return e.filter}));return(0,C.jsxs)("label",{className:q,children:["Find contact by name",(0,C.jsx)("input",{type:"text",value:t,onChange:function(t){return e((0,N.M6)(t.target.value))}})]})}function Z(){return(0,C.jsxs)("div",{className:a,children:[(0,C.jsx)("h1",{children:"Phonebook"}),(0,C.jsx)(v,{}),(0,C.jsx)("h2",{children:"Contacts"}),(0,C.jsx)(A,{}),(0,C.jsx)(w,{})]})}}}]);
//# sourceMappingURL=Contacts.c4b6f0e7.chunk.js.map