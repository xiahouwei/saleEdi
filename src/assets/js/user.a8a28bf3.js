(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"06b0":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"saleedi-user-info"},[n("van-cell-group",{staticClass:"urser-info-form fx-edi-block"},[n("van-field",{attrs:{label:"联系人",readonly:""},model:{value:e.urserName,callback:function(t){e.urserName=t},expression:"urserName"}}),n("van-field",{attrs:{label:"联系电话","right-icon":"edit",readonly:""},on:{"click-right-icon":e.editphoneClick},model:{value:e.telephone,callback:function(t){e.telephone=t},expression:"telephone"}}),n("van-field",{attrs:{label:"邮箱","right-icon":e.showMailEditIcon,placeholder:"请输入邮箱地址,非必填"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),n("div",[n("van-button",{staticClass:"info-btn",attrs:{type:"primary",round:""},on:{click:e.saveHandler}},[e._v("保存")]),n("van-button",{staticClass:"info-btn",attrs:{type:"warning",round:""},on:{click:e.unBindClick}},[e._v("解除绑定")])],1),n("van-actionsheet",{attrs:{actions:e.actions,"cancel-text":"取消"},on:{select:e.onSelect},model:{value:e.unBindMenuShow,callback:function(t){e.unBindMenuShow=t},expression:"unBindMenuShow"}})],1)},a=[],o=(n("7f7f"),{name:"userInfo",data:function(){return{urserName:"",telephone:"",email:"",unBindMenuShow:!1,actions:[{name:"企业一"},{name:"企业二"},{name:"企业三"}]}},created:function(){this.getUser()},computed:{showMailEditIcon:function(){return""!==this.mail&&void 0!==this.mail?"":"edit"}},methods:{unBindClick:function(){this.unBindMenuShow=!0},onSelect:function(e){var t=this;this.$dialog.confirm({message:"是否解绑".concat(e.name)}).then(function(){t.unBindMenuShow=!1,t.$toast("解绑成功")}).catch(function(){})},editphoneClick:function(){return!1},getUser:function(){var e=this;this.$fxHttp.requestPost({url:"".concat(this.$fxBaseApi.url,"/getUser")}).then(function(t){e.urserName=t.userName,e.telephone=t.telephone,e.email=t.email})},saveHandler:function(){var e=this,t={id:this.userId,email:this.email};this.$fxHttp.requestPost({url:"".concat(this.$fxBaseApi.url,"/updateUser"),data:t}).then(function(t){e.$toast.success("保存成功")})}}}),s=o,r=(n("9813"),n("0c7c")),c=Object(r["a"])(s,i,a,!1,null,"bde958ee",null);t["default"]=c.exports},1464:function(e,t,n){},"7f7f":function(e,t,n){var i=n("86cc").f,a=Function.prototype,o=/^\s*function ([^ (]*)/,s="name";s in a||n("9e1e")&&i(a,s,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},9813:function(e,t,n){"use strict";var i=n("ca3a"),a=n.n(i);a.a},a218:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"saleedi-user-info-edit"},[i("van-cell-group",{staticClass:"urser-info-edit-form"},[i("van-field",{staticClass:"login-cell",attrs:{readonly:""},model:{value:e.urserName,callback:function(t){e.urserName=t},expression:"urserName"}},[i("img",{staticClass:"login-cell-icon",attrs:{slot:"left-icon",src:n("c3cd")},slot:"left-icon"})]),i("van-field",{staticClass:"login-cell",attrs:{placeholder:"请输入手机号，必填","error-message":e.errorMessage.phoneNumber,type:"number",pattern:"\\d*"},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}},[i("img",{staticClass:"login-cell-icon phoneNumber-icon",attrs:{slot:"left-icon",src:n("eedf")},slot:"left-icon"}),i("van-button",{staticClass:"verification-btn",attrs:{slot:"button",size:"small",type:"primary",round:"",disabled:e.verificationTimeComputed},on:{click:e.getVerificationCode},slot:"button"},[e._v("\n\t\t\t\t\t验证码\n\t\t\t\t\t"),i("span",{directives:[{name:"show",rawName:"v-show",value:e.verificationTimeComputed,expression:"verificationTimeComputed"}]},[e._v(" ( "+e._s(e.verificationTime)+" ) ")])])],1),i("van-field",{staticClass:"login-cell",attrs:{placeholder:"请输入验证码",type:"number","error-message":e.errorMessage.verificationCode},model:{value:e.verificationCode,callback:function(t){e.verificationCode=t},expression:"verificationCode"}},[i("img",{staticClass:"login-cell-icon",attrs:{slot:"left-icon",src:n("e74c")},slot:"left-icon"})])],1),i("div",[i("van-button",{staticClass:"info-btn",attrs:{type:"primary",round:""}},[e._v("保存")]),i("van-button",{staticClass:"info-btn",attrs:{type:"warning",round:""}},[e._v("取消")])],1)],1)},a=[],o={name:"userInfo",data:function(){return{urserName:"孙博文",phoneNumber:"",verificationCode:"",errorMessage:{urserName:"",phoneNumber:"",verificationCode:""},verificationTime:""}},destroyed:function(){this.clearVerificationTime()},computed:{verificationTimeComputed:function(){return!(""===this.verificationTime||this.verificationTime<0)}},methods:{loginHanle:function(){var e=this;this.validate().then(function(t){t&&e.loginPose()})}}},s=o,r=(n("d004"),n("0c7c")),c=Object(r["a"])(s,i,a,!1,null,"63273118",null);t["default"]=c.exports},c3cd:function(e,t,n){e.exports=n.p+"src/assets/img/icon-ursename.17a1193a.png"},ca3a:function(e,t,n){},d004:function(e,t,n){"use strict";var i=n("1464"),a=n.n(i);a.a},e74c:function(e,t,n){e.exports=n.p+"src/assets/img/icon-verification.05f555d5.png"},eedf:function(e,t,n){e.exports=n.p+"src/assets/img/icon-phoneNumber.dcb18ba6.png"}}]);
//# sourceMappingURL=user.a8a28bf3.js.map