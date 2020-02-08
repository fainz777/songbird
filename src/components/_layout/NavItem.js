import React, {Component} from 'react';

export class NavItem extends Component {
	render() {
		return (
			<li className={this.props.step === this.props.i ? 'selected' : ''} key={this.props.i}>
				{this.props.item}
			</li>
		);
	}
}
