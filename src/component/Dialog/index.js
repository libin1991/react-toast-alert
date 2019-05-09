import React from "react";
import ReactDOM from 'react-dom';
import Dialog from './dialog';

export default class Global {
	static toastEle='';
	static toast(option) {
		var setting={
			type:0,
		 	content:"默认信息",
		 	time:2000,
		 	opacity:0,
		 	onSucc:()=>{}
		};
		
		if(typeof option =="string"){
			setting={...setting,content:option}
		}else{
			setting={...setting,...option}
		}
		
		this.show(setting);
		
		if(setting.type!==3){   //loading需要手动关闭
			setTimeout(() => {
				this.hide();
				setting.onSucc();
			}, setting.time);
		}
	}
	
	static dialog(option) {
		 var setting={
		 	type:0,
		 	title:"我是默认title",
		 	content:"我是默认content",
		 	btnSucc:"我是默认btn",
		 	CloseShow:false,
		 	onClose(){
		 		console.log("蒙层回调");
		    },
		 	onSucc(){
		 		console.log("成功回调");
		    },
		    onFail(){
		    	console.log("失败回调");
		    }
		 };
		 
		 setting={...setting,...option};
		 
		 this.show(setting);
	}
   
	
	static show(setting) {
		var div = document.createElement('div');
		var id = document.createAttribute("id");

		this.toastEle='pluginEle-'+ new Date().getTime();
		
		id.value = this.toastEle;
		div.setAttributeNode(id);
		document.body.appendChild(div);
		

		ReactDOM.render(<Dialog setting={setting} />, div);
			
	}
	
	static hide() {
		var toastEle = document.querySelector("#"+this.toastEle);
		if(toastEle){
			ReactDOM.unmountComponentAtNode(toastEle);
		    document.body.removeChild(toastEle);
		}
	}
}

