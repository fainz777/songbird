import React, {Component} from 'react';

export class NavItem extends Component {
	render() {
		return (
			<li className={this.props.step === this.props.current ? 'selected' : ''} key={this.props.current}>
				{this.props.item}
			</li>
		);
	}
}
