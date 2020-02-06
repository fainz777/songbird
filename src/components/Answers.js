import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const answers = ['Ворон',
	'Журавль',
	'Ласточка',
	'Козодой',
	'Кукушка',
	'Синица'
];

const listItems = answers.map((answer) =>
	<ListItem button>
		<ListItemText primary={answer} />
	</ListItem>
);

export class Answers extends React.Component {
	render () {
		return (
			<Card>
				<CardContent>
					<List component="nav">
						{listItems}
					</List>
				</CardContent>
			</Card>
		);
	}
}
