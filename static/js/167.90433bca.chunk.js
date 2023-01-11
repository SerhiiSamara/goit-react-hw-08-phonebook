"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[167],{5167:function(e,n,r){r.r(n),r.d(n,{default:function(){return Q}});var i=r(2791),t=r(9434),a=r(7698),l=r(4087),s=r(896),o=r(5946),d=r(3204),u=r(1473),c=r(4585),m=r(2406),h=r(7886),x=r(184),v=function(){var e=(0,t.I0)();return(0,x.jsx)(a.x,{children:(0,x.jsx)(s.M,{mb:"20px",children:(0,x.jsxs)(c.l,{children:[(0,x.jsx)(m.x,{children:"Find contacts by name"}),(0,x.jsx)(h.I,{type:"text",name:"filter",htmlSize:30,width:"auto",bg:"white",onChange:function(n){return e((0,u.M)(n.target.value))}})]})})})},p=r(9439),f=r(5162),b=r(3306),y=function(e){return e.contacts.items},j=function(e){return e.filter},Z=function(e){return e.contacts.isLoading},g=function(e){return e.contacts.error},I=function(){var e=(0,t.I0)(),n=(0,t.v9)(y),r=(0,i.useState)(""),l=(0,p.Z)(r,2),s=l[0],o=l[1],d=(0,i.useState)(""),u=(0,p.Z)(d,2),v=u[0],j=u[1],Z=function(e){switch(e.target.name){case"name":o(e.target.value);break;case"number":j(e.target.value)}};return(0,x.jsx)(a.x,{children:(0,x.jsxs)("form",{onSubmit:function(r){r.preventDefault();var i=r.currentTarget;n.map((function(e){return e.name})).includes(i.elements.name.value)?alert("".concat(i.elements.name.value," is already in contacts.")):(e((0,f.uK)({name:i.elements.name.value,number:i.elements.number.value})),o(""),j(""))},children:[(0,x.jsxs)(c.l,{children:[(0,x.jsx)(m.x,{children:"Name"}),(0,x.jsx)(h.I,{type:"text",name:"name",value:s,placeholder:"Enter email",htmlSize:30,width:"auto",bg:"white",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:Z})]}),(0,x.jsxs)(c.l,{children:[(0,x.jsx)(m.x,{children:"Number"}),(0,x.jsx)(h.I,{type:"tel",name:"number",value:v,placeholder:"Enter email",htmlSize:30,width:"auto",bg:"white",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:Z})]}),(0,x.jsx)(b.z,{type:"submit",colorScheme:"blue",children:"Add contact"})]})})},N=r(1413),k=r(4942),R=r(4925),q=r(4363),C=r(9886);var _=r(7872),S=r(9219),F=r(9477),P=r(795),L=["children","styleType","stylePosition","spacing"],w=["as"],T=["as"],z=(0,C.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),O=(0,p.Z)(z,2),G=O[0],D=O[1],B=(0,_.G)((function(e,n){var r=(0,S.jC)("List",e),t=(0,F.Lr)(e),a=t.children,l=t.styleType,s=void 0===l?"none":l,o=t.stylePosition,d=t.spacing,u=(0,R.Z)(t,L),c=function(e){return i.Children.toArray(e).filter((function(e){return(0,i.isValidElement)(e)}))}(a),m=d?(0,k.Z)({},"& > *:not(style) ~ *:not(style)",{mt:d}):{};return(0,x.jsx)(G,{value:r,children:(0,x.jsx)(P.m.ul,(0,N.Z)((0,N.Z)({ref:n,listStyleType:s,listStylePosition:o,role:"list",__css:(0,N.Z)((0,N.Z)({},r.container),m)},u),{},{children:c}))})}));B.displayName="List";var H=(0,_.G)((function(e,n){e.as;var r=(0,R.Z)(e,w);return(0,x.jsx)(B,(0,N.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},r))}));H.displayName="OrderedList",(0,_.G)((function(e,n){e.as;var r=(0,R.Z)(e,T);return(0,x.jsx)(B,(0,N.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},r))})).displayName="UnorderedList";var M=(0,_.G)((function(e,n){var r=D();return(0,x.jsx)(P.m.li,(0,N.Z)((0,N.Z)({ref:n},e),{},{__css:r.item}))}));M.displayName="ListItem",(0,_.G)((function(e,n){var r=D();return(0,x.jsx)(q.J,(0,N.Z)((0,N.Z)({ref:n,role:"presentation"},e),{},{__css:r.icon}))})).displayName="ListIcon";var A=r(176),E=function(e){var n=e.name,r=e.number,i=e.id,s=(0,t.I0)();return(0,x.jsx)(a.x,{children:(0,x.jsx)(l.xu,{children:(0,x.jsxs)(A.k,{children:[(0,x.jsxs)(A.k,{children:[(0,x.jsx)(l.xu,{w:"200px",mb:"15px",children:(0,x.jsxs)(m.x,{fontSize:"16px",children:[n,": "]})}),(0,x.jsx)(l.xu,{w:"100px",children:(0,x.jsx)(m.x,{fontSize:"16px",children:r})})]}),(0,x.jsx)(b.z,{type:"button",colorScheme:"blue",size:"sm",onClick:function(){return s((0,f.GK)(i))},children:"Delete"})]})})})},J=function(){var e=(0,t.v9)(y),n=(0,t.v9)(j),r=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,x.jsx)(a.x,{children:(0,x.jsx)(H,{pt:"10px",children:r.map((function(e){var n=e.name,r=e.number,i=e.id;return(0,x.jsx)(s.M,{children:(0,x.jsx)(M,{children:(0,x.jsx)(E,{name:n,number:r,id:i})},i)})}))})})};function Q(){var e=(0,t.v9)(y),n=(0,t.I0)(),r=(0,t.v9)(Z),u=(0,t.v9)(g);return(0,i.useEffect)((function(){n((0,f.yF)())}),[n]),(0,x.jsxs)(a.x,{children:[(0,x.jsxs)(l.xu,{w:"300px",mr:"auto",ml:"auto",mb:"40px",children:[(0,x.jsx)(s.M,{mt:"30px",mb:"15px",children:(0,x.jsx)(o.X,{as:"h6",size:"md",children:"Phonebook"})}),(0,x.jsx)(I,{})]}),(0,x.jsxs)(l.xu,{w:"500px",mr:"auto",ml:"auto",children:[(0,x.jsx)(s.M,{mb:"15px",children:(0,x.jsx)(o.X,{as:"h6",size:"md",children:"Contacts"})}),(0,x.jsx)(v,{}),r&&!u&&(0,x.jsx)(s.M,{children:(0,x.jsx)(d.$,{color:"red.500"})}),e.length>0&&(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(J,{})}),u&&(0,x.jsx)("h2",{children:"ERROR..."}),e.length<=0&&!u&&!r&&(0,x.jsx)("h4",{children:"Sorry. Your phonebok is empty."})]})]})}},4585:function(e,n,r){r.d(n,{l:function(){return h}});var i=r(1413),t=r(4925),a=r(2701),l=r(7872),s=r(9219),o=r(9477),d=r(795),u=r(6992),c=r(184),m=["className","children","requiredIndicator","optionalIndicator"],h=(0,l.G)((function(e,n){var r,l=(0,s.mq)("FormLabel",e),h=(0,o.Lr)(e),v=(h.className,h.children),p=h.requiredIndicator,f=void 0===p?(0,c.jsx)(x,{}):p,b=h.optionalIndicator,y=void 0===b?null:b,j=(0,t.Z)(h,m),Z=(0,a.NJ)(),g=null!=(r=null==Z?void 0:Z.getLabelProps(j,n))?r:(0,i.Z)({ref:n},j);return(0,c.jsxs)(d.m.label,(0,i.Z)((0,i.Z)({},g),{},{className:(0,u.cx)("chakra-form__label",h.className),__css:(0,i.Z)({display:"block",textAlign:"start"},l),children:[v,(null==Z?void 0:Z.isRequired)?f:y]}))}));h.displayName="FormLabel";var x=(0,l.G)((function(e,n){var r=(0,a.NJ)(),t=(0,a.e)();if(!(null==r?void 0:r.isRequired))return null;var l=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,n)),{},{__css:t.requiredIndicator,className:l}))}));x.displayName="RequiredIndicator"},2701:function(e,n,r){r.d(n,{NJ:function(){return N},e:function(){return j}});var i=r(1413),t=r(4925),a=r(9439),l=r(9886),s=r(4591),o=r(7872),d=r(9219),u=r(9477),c=r(795),m=r(6992),h=r(2791),x=r(184),v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],f=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,a.Z)(f,2),y=b[0],j=b[1],Z=(0,l.k)({strict:!1,name:"FormControlContext"}),g=(0,a.Z)(Z,2),I=g[0],N=g[1];var k=(0,o.G)((function(e,n){var r=(0,d.jC)("Form",e),l=function(e){var n=e.id,r=e.isRequired,l=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,t.Z)(e,v),c=(0,h.useId)(),x=n||"field-".concat(c),p="".concat(x,"-label"),f="".concat(x,"-feedback"),b="".concat(x,"-helptext"),y=(0,h.useState)(!1),j=(0,a.Z)(y,2),Z=j[0],g=j[1],I=(0,h.useState)(!1),N=(0,a.Z)(I,2),k=N[0],R=N[1],q=(0,h.useState)(!1),C=(0,a.Z)(q,2),_=C[0],S=C[1],F=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,s.lq)(n,(function(e){e&&R(!0)}))})}),[b]),P=(0,h.useCallback)((function(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},r),{},{ref:t,"data-focus":(0,m.PB)(_),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(d),id:null!=(e=r.id)?e:p,htmlFor:null!=(n=r.htmlFor)?n:x})}),[x,o,_,l,d,p]),L=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:f},e),{},{ref:(0,s.lq)(n,(function(e){e&&g(!0)})),"aria-live":"polite"})}),[f]),w=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),T=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!l,isReadOnly:!!d,isDisabled:!!o,isFocused:!!_,onFocus:function(){return S(!0)},onBlur:function(){return S(!1)},hasFeedbackText:Z,setHasFeedbackText:g,hasHelpText:k,setHasHelpText:R,id:x,labelId:p,feedbackId:f,helpTextId:b,htmlProps:u,getHelpTextProps:F,getErrorMessageProps:L,getRootProps:w,getLabelProps:P,getRequiredIndicatorProps:T}}((0,u.Lr)(e)),o=l.getRootProps,f=(l.htmlProps,(0,t.Z)(l,p)),b=(0,m.cx)("chakra-form-control",e.className);return(0,x.jsx)(I,{value:f,children:(0,x.jsx)(y,{value:r,children:(0,x.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},o({},n)),{},{className:b,__css:r.container}))})})}));k.displayName="FormControl",(0,o.G)((function(e,n){var r=N(),t=j(),a=(0,m.cx)("chakra-form__helper-text",e.className);return(0,x.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getHelpTextProps(e,n)),{},{__css:t.helperText,className:a}))})).displayName="FormHelperText"},7886:function(e,n,r){r.d(n,{I:function(){return p}});var i=r(1413),t=r(4925),a=r(2701),l=r(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var n=function(e){var n,r,s,d=(0,a.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,h=e.required,x=e.isRequired,v=e.isInvalid,p=e.isReadOnly,f=e.isDisabled,b=e.onFocus,y=e.onBlur,j=(0,t.Z)(e,o),Z=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&Z.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&Z.push(d.helpTextId);return(0,i.Z)((0,i.Z)({},j),{},{"aria-describedby":Z.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(n=null!=c?c:f)?n:null==d?void 0:d.isDisabled,isReadOnly:null!=(r=null!=m?m:p)?r:null==d?void 0:d.isReadOnly,isRequired:null!=(s=null!=h?h:x)?s:null==d?void 0:d.isRequired,isInvalid:null!=v?v:null==d?void 0:d.isInvalid,onFocus:(0,l.v0)(null==d?void 0:d.onFocus,b),onBlur:(0,l.v0)(null==d?void 0:d.onBlur,y)})}(e),r=n.isDisabled,d=n.isInvalid,u=n.isReadOnly,c=n.isRequired,m=(0,t.Z)(n,s);return(0,i.Z)((0,i.Z)({},m),{},{disabled:r,readOnly:u,required:c,"aria-invalid":(0,l.Qm)(d),"aria-required":(0,l.Qm)(c),"aria-readonly":(0,l.Qm)(u)})}var u=r(7872),c=r(9219),m=r(9477),h=r(795),x=r(184),v=["htmlSize"],p=(0,u.G)((function(e,n){var r=e.htmlSize,a=(0,t.Z)(e,v),s=(0,c.jC)("Input",a),o=d((0,m.Lr)(a)),u=(0,l.cx)("chakra-input",e.className);return(0,x.jsx)(h.m.input,(0,i.Z)((0,i.Z)({size:r},o),{},{__css:s.field,ref:n,className:u}))}));p.displayName="Input",p.id="Input"},5946:function(e,n,r){r.d(n,{X:function(){return m}});var i=r(1413),t=r(4925),a=r(7872),l=r(9219),s=r(9477),o=r(795),d=r(6992),u=r(184),c=["className"],m=(0,a.G)((function(e,n){var r=(0,l.mq)("Heading",e),a=(0,s.Lr)(e),m=(a.className,(0,t.Z)(a,c));return(0,u.jsx)(o.m.h2,(0,i.Z)((0,i.Z)({ref:n,className:(0,d.cx)("chakra-heading",e.className)},m),{},{__css:r}))}));m.displayName="Heading"}}]);
//# sourceMappingURL=167.90433bca.chunk.js.map