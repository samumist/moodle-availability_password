YUI.add("moodle-availability_password-popup",function(e,t){var n={MAINREGION:"#region-main",PASSWORDLINK:".availability_password-popup",PASSWORDFIELD:"#availability_password",ERRORMESSAGE:"#availability_password_error",CMCONTAINER:".activity",CMNAME:".instancename"};M.availability_password=M.availability_password||{},M.availability_password.popup={api:M.cfg.wwwroot+"/availability/condition/password/ajax.php",init:function(){e.one(n.MAINREGION).delegate("click",this.showPopup,n.PASSWORDLINK,this),e.one(n.MAINREGION).delegate("click",this.checkShowPopup,n.CMNAME,this),this.initActivityLinks()},showPopup:function(t){var r,i,s,o,u,a,f,l;t.preventDefault(),t.stopPropagation(),o=t.currentTarget.get("href"),u=o.match(/id=(\d+)/);if(!u)return;u=parseInt(u[1],10);if(!u)return;i="",a=t.currentTarget.ancestor(n.CMCONTAINER),a&&(f=a.one(n.CMNAME),f&&(i=f.getHTML())),r="",r+='<span class="availability_password_intro">'+M.util.get_string("passwordintro","availability_password",i)+"</span>",r+='<label for="availability_password">'+M.util.get_string("enterpasswordfor","availability_password",i)+"</label>",r+='<span id="availability_password_error"></span>',r+='<input type="password" id="availability_password">',s=(new M.core.dialogue({bodyContent:r,width:"350px",modal:!0})).show(),s.after("visibleChange",function(){s.get("visible")||s.destroy(!0)}),l=function(t){var r,i;t.preventDefault(),i=e.one(n.PASSWORDFIELD).get("value").trim();if(i.length===0)return;r={sesskey:M.cfg.sesskey,id:u,password:i},e.io(this.api,{data:r,on:{success:function(t,r){var i;try{i=JSON.parse(r.responseText)}catch(s){window.alert("Communication error");return}if(i.error){window.alert(i.error);return}i.success?i.redirect!==undefined?document.location=i.redirect:document.location.reload():(e.one(n.ERRORMESSAGE).setHTML(M.util.get_string("wrongpassword","availability_password")),e.one(n.PASSWORDFIELD).focus())}}})},s.addButton({label:M.util.get_string("submit","core"),section:e.WidgetStdMod.FOOTER,action:l,context:this}),s.addButton({label:M.util.get_string("cancel","core"),section:e.WidgetStdMod.FOOTER,action:function(e){e.preventDefault(),s.hide()}}),e.one(n.PASSWORDFIELD).focus().on("key",l,"enter",this)},checkShowPopup:function(e){var t,r;t=e.currentTarget;if(t.ancestor("a"))return;r=t.ancestor(n.CMCONTAINER).one(n.PASSWORDLINK),r&&(e.preventDefault(),e.stopPropagation(),this.showPopup({currentTarget:r,preventDefault:function(){},stopPropagation:function(){}}))},initActivityLinks:function(){e.one(n.MAINREGION).all(n.CMNAME).each(function(e){var t;if(e.ancestor("a"))return;t=e.ancestor(n.CMCONTAINER).one(n.PASSWORDLINK),t&&e.setStyle("cursor","pointer")})}}},"@VERSION@",{requires:["base","node","event","moodle-core-notification-dialogue","io-base"]});
