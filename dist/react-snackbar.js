var React = require("react");

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Snackbar[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Snackbar.prototype=Object.create(____SuperProtoOf____Class0);Snackbar.prototype.constructor=Snackbar;Snackbar.__superConstructor__=____Class0;

	function Snackbar(props) {"use strict";
		____Class0.call(this,props)
		this.state = { show: false}
	}

	Object.defineProperty(Snackbar.prototype,"hideSnackbar",{writable:true,configurable:true,value:function() {"use strict";
		this.setState({show: false})
		}});
 
 	Object.defineProperty(Snackbar.prototype,"componentWillReceiveProps",{writable:true,configurable:true,value:function(nextProps) {"use strict";
		if(this.state.show === null || this.state.show != nextProps.show
		&& this.props.children === nextProps.children
		&& this.props.delay === nextProps.delay){
	 		this.setState({
	 			show: nextProps.show
	 		})
	 		setTimeout( function()  {
	 			this.hideSnackbar()
 			}.bind(this), nextProps.delay ? nextProps.delay : 3000)
		}
 	}});
 	
	Object.defineProperty(Snackbar.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";
		return (
				React.createElement("div", {className: "main"}, 
					React.createElement("div", {onClick: this.hideSnackbar.bind(this), className: "react-snackbar-container"}, 
						this.state.show  ? 
						React.createElement("div", {className: "react-snackbar"}, 
							this.props.children
						)
						: null
					)
				)
		)
	}});


module.exports = Snackbar;