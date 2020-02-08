import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import {AnswerItem} from "./AnswerItem";

export class Answers extends React.Component {
	render () {
		console.log('Answers: ', this.props);
		const listItems = this.props.birds.map((bird, i) => {
			const arr = this.props.tries;
			// debugger;
			const itemClass = this.props.tries.includes(i) ? 'red' :
				(this.props.answer === i ? 'green' : '');

			return (
				<AnswerItem
					key={i}
					i={i}
					birdName={bird.name}
					itemClass={itemClass}
					onClick={this.props.onClick}
				/>
			);
			}
		);

		return (
			<Card>
				<List component="nav">
					{listItems}
				</List>
			</Card>
		);
	}
}
