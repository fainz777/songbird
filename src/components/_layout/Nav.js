import React from 'react';
import AppBar from '@material-ui/core/AppBar';

const nav = [
	'Разминка',
	'Воробьиные',
	'Лесные птицы',
	'Певчие птицы',
	'Хищные птицы',
	'Морские птицы'
];

export class Nav extends React.Component {
	navItems = nav.map((item, i) =>
	<li className={this.props.step === i ? 'selected' : ''} key={i}>{item}</li>
	);
	
	render() {
		return (
			<AppBar position="static">
				<nav>
					<ul>
						{this.navItems}
					</ul>
				</nav>
			</AppBar>

		);
	}
}
