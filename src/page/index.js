import React, {Component} from 'react';

import  './css/App.less';

import $ from '@/component/Toast/index';
import $1 from '@/component/Dialog/index'; 

import logo from './img/logo.svg';


export default class App extends Component {
	toast() {
		$.toast({
			type:0,
			content: "我是默认Toast",
			time: 1000,
			opacity: .5,
			onSucc() {
				console.log("我是Toast的回调！")
			}
		});
		
		// $.toast("我是默认Toast");
	}
	 
	dialog() {
		$1.dialog({
			type: 0,
			opacity:0.5,
			title: "我是title",
			content: "我是content",
			btnSucc: "我是成功",
			btnFail: "我是取消",
 
			onClose(e) {
				console.log("我是蒙层的关闭回调！");
				$1.hide();
			},
			onSucc(e) {
	            e.stopPropagation();
	            $.toast("我是默认Toast");
				//console.log("我是成功的回调！");
			},
			onFail(e) {
				e.stopPropagation();
				console.log("我是失败的回调！");
			}
		});
	}
	
	loading() {
		
		$.toast({
			type:3,
			content: "我是默认loading",
			time: 1000,
			opacity: .5,
			onSucc() {
				console.log("我是loading的回调！")
			}
		});

		setTimeout(() => { //3s后隐藏
			$.hide();
		}, 3000);
	}
	 
	render() {
		return(
			<div>
		        <div className="App">
		            <div className="App-header">
		                <img src={logo} className="App-logo2"/>
		            </div>
		            
		            <div>
		                <button onClick={this.toast}>点击弹出Toast</button>
		            </div>
		            <div>
		                <button onClick={this.dialog}>点击弹出dialog</button>
		            </div>
		            <div>
		                <button onClick={this.loading}>点击弹出loading</button>
		            </div>
		        </div>
		    </div>
		);
	}
}