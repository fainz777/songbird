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



export class Answers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
		};
	}
	
	listItems = answers.map((answer, i) =>
	<ListItem button onClick={() => {console.log('click', i); this.setState({value: i})}} key={i}>
		<ListItemText primary={answer} />
	</ListItem>
	);
	
	render () {
		return (
			<Card>
				<CardContent>
					<List component="nav">
						{this.listItems}
						<ListItem button onClick={() => {console.log('click'); this.setState({value: 'test'})}} key={'11'}>
							<ListItemText primary={'answer'} />
						</ListItem>
					</List>
				</CardContent>
				<div>==> {this.state.value}</div>
			</Card>
		);
	}
}
