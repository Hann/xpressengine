webpackJsonp([8],{224:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var s=a(6),n=l(s),i=a(15),d=l(i);$(function(){$(".__xe_settingEmail").click(function(){$(".__xe_emailView").slideToggle(),$("#__xe_emailSetting").slideToggle()})}),$(function(){var e=n.default.createClass({displayName:"EmailBox",componentDidMount:function(){this.loadCommentsFromServer()},getInitialState:function(){return{mails:[],selected:this.props.email}},loadCommentsFromServer:function(){$.ajax({url:this.props.url.mail.list,type:"get",dataType:"json",data:{userId:this.props.userId},context:this,success:function(e){this.setState({mails:e.mails})},error:function(e){XE.toast("danger","오류!.",".__xe_alertEmailModal")}})},handleChange:function(e){this.setState($.extend(this.state,{selected:e}))},handleAddEmail:function(e){$.ajax({url:this.props.url.mail.add,type:"post",dataType:"json",data:{userId:this.props.userId,address:e.address},context:this,success:function(e){var t=this.state.mails;t[t.length]=e.mail,this.setState({mails:t}),XE.toast("success","추가되었습니다.",".__xe_alertEmailModal")},error:function(e){XE.toast("danger",e.responseJSON.message,".__xe_alertEmailModal")}})},handleDeleteEmail:function(e){$.ajax({url:this.props.url.mail.delete,type:"post",dataType:"json",data:{userId:this.props.userId,address:e.address},context:this,success:function(t){var a=this.state.mails.indexOf(e);this.state.mails.splice(a,1),this.setState(this.state.mails),XE.toast("success","삭제하였습니다.",".__xe_alertEmailModal")},error:function(e){XE.toast("danger",e.responseJSON.message,".__xe_alertEmailModal")}})},render:function(){return n.default.createElement("div",null,n.default.createElement(t,{box:this,selected:this.state.selected,selectedOrigin:this.props.email,mails:this.state.mails,onChange:this.handleChange,onDeleteEmail:this.handleDeleteEmail}),n.default.createElement(l,{onAddEmail:this.handleAddEmail}))}}),t=n.default.createClass({displayName:"EmailList",handleChange:function(e){this.props.onChange(e)},render:function(){var e=this.props.mails,t=this.props.selected,l=this.props.selectedOrigin,s=this,i=null,d=e.map(function(e,d){var r=n.default.createElement(a,{box:s.props.box,seq:d,isSelected:e.address==t,isSelectedOrigin:e.address==l,mail:e,onChange:s.handleChange,onDeleteEmail:s.props.onDeleteEmail});if(e.address!=t)return r;i=r});return n.default.createElement("ul",{className:"list-group"},i,d)}}),a=n.default.createClass({displayName:"EmailItem",componentDidMount:function(){this.$deleteBtn=$(d.default.findDOMNode(this.refs.deleteBtn)),this.$deleteConfirmBtn=$(d.default.findDOMNode(this.refs.deleteConfirmBtn)),this.$deleteCancelBtn=$(d.default.findDOMNode(this.refs.deleteCancelBtn))},handleChange:function(e){this.props.onChange(this.props.mail.address)},handleDelete:function(){this.$deleteBtn.hide(),this.$deleteConfirmBtn.show(),this.$deleteCancelBtn.show()},handleDeleteConfirm:function(){this.props.onDeleteEmail(this.props.mail)},handleDeleteCancel:function(){this.$deleteBtn.show(),this.$deleteConfirmBtn.hide(),this.$deleteCancelBtn.hide()},render:function(){var e=this.props.mail,t=null;return this.props.isSelectedOrigin||(t=n.default.createElement("span",{className:"pull-right"},n.default.createElement("a",{ref:"deleteBtn",href:"#",className:"btn btn-sm btn-link",onClick:this.handleDelete},"삭제"),n.default.createElement("a",{ref:"deleteConfirmBtn",href:"#",style:{display:"none"},className:"btn btn-sm btn-link",onClick:this.handleDeleteConfirm},"삭제확인"),n.default.createElement("a",{ref:"deleteCancelBtn",href:"#",style:{display:"none"},className:"btn btn-sm btn-link",onClick:this.handleDeleteCancel},"취소"))),n.default.createElement("li",{className:"list-group-item clearfix"},n.default.createElement("label",null,n.default.createElement("input",{type:"radio",ref:"input",onChange:this.handleChange,name:"email",value:e.address,checked:this.props.isSelected})," "+e.address),t)}}),l=n.default.createClass({displayName:"EmailInserter",handleClick:function(e){e.preventDefault();var t=$(d.default.findDOMNode(this.refs.input)),a=t.val();a&&(t.val(""),this.props.onAddEmail({address:a}))},render:function(){return n.default.createElement("div",{className:"input-group input-group-sm",style:{marginBottom:"20px"}},n.default.createElement("input",{type:"text",className:"form-control",id:"__xe_addedEmailInput",ref:"input",placeholder:"이메일을 입력하세요"}),n.default.createElement("span",{className:"input-group-btn"},n.default.createElement("buttion",{id:"__xe_emailAddBtn",className:"btn btn-default",type:"button",onClick:this.handleClick,ref:"btn"},"추가")))}}),s=$("#__xe_emailSetting");d.default.render(n.default.createElement(e,{url:url,userId:s.data("userId"),email:s.data("email")}),s.get(0))})}},[224]);