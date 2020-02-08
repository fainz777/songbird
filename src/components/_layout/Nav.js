import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {NavItem} from './NavItem';

const nav = [
	'Разминка',
	'Воробьиные',
	'Лесные птицы',
	'Певчие птицы',
	'Хищные птицы',
	'Морские птицы'
];

export class Nav extends React.Component {
	render() {
		const navItems = nav.map((item, i) =>
			<NavItem
				step={this.props.step}
				key={i}
				current={i}
				item={item} />
		);

		console.log('nav this.props.step: ', this.props.step);
		return (
			<AppBar position="static">
				<nav>
					<ul>
						{navItems}
					</ul>
				</nav>
			</AppBar>

		);
	}
}
