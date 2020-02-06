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

const navItems = nav.map((item) =>
	<li>{item}</li>
);

export class Nav extends React.Component {
	render() {
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
