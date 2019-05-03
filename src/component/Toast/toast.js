import React from "react";
import './toast.less'

export default class Toast extends React.Component {
	constructor(props) {
		super(props);
	}

	checkToast(n) {
		switch(n) {
			case 0:
				return (<div className="icon">
				          <div className="success-icon"></div>
			           </div>)
				break;
			case 1:
				return (<div className="icon">
				          <div className="fail-icon"></div>
			           </div>)
				break;
		    case 2:
				return (<div className="icon">
				          <div className="warning-icon"></div>
			           </div>)
				break;
		    case 3:
				return (
			            <div className="loading-icon">
				          <span></span>
				          <span></span>
				          <span></span>
				          <span></span>
				          <span></span>
				          <span></span>
				          <span></span>
				          <span></span>
				          <span></span>
				          <span></span>
				          <span></span>
				          <span></span>
				        </div>
			        )
				break;
			default:
			    return null
		}
	}

	render() {

		let {
			type,content,opacity = 0
		} = this.props.setting;

		let style = {
			"background": `rgba(0,0,0,${opacity})`
		}

		return(
			<div className="mask" style={style}>
			    <div className="toast">
			        {this.checkToast(type)}
			        <div className="msg">{content}</div>
			    </div>
			</div>
		);
	}
}