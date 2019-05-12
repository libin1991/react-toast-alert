import React from "react";
import './dialog.less'

export default class Toast extends React.Component {
 
	render() {
		let {
			content,opacity,title,btnSucc,btnFail,onClose,onSucc,onFail
		} = this.props.setting;

		let style = {
			"background": `rgba(0,0,0,${opacity})`
		}

		return(
			<div className="mask vue-alert" onClick={(e)=>{onClose(e)}} style={style}>
				<div className="alert">
					<div className="title1">{title}</div>
					<p className="title2">{content}</p>
					<div className="btnlist onepx-top-border">
						<div className="ok" onClick={(e)=>{onSucc(e)}}>{btnSucc}</div>
						<div className="abort onepx-left-border" onClick={(e)=>{onFail(e)}}>{btnFail}</div>
					</div>
				</div>
			</div>
		);
	}
}