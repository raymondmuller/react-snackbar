var React = require("react");

class Snackbar extends React.Component {

	constructor(props) {
		super(props)
		this.state = { show: false}
	}

	hideSnackbar() {
		this.setState({show: false})
		}
 
 	componentWillReceiveProps(nextProps) {
		if(this.state.show === null || this.state.show != nextProps.show
		&& this.props.children === nextProps.children
		&& this.props.delay === nextProps.delay){
	 		this.setState({
	 			show: nextProps.show
	 		})
	 		setTimeout( () => {
	 			this.hideSnackbar()
 			}, nextProps.delay ? nextProps.delay : 3000)
		}
 	}
 	
	render() {
		return (
				<div className="main" >
					<div onClick={this.hideSnackbar.bind(this)} className="react-snackbar-container">
						{this.state.show  ? 
						<div className="react-snackbar">
							{this.props.children}
						</div>
						: null }
					</div>
				</div>
		)
	}
}

module.exports = Snackbar;