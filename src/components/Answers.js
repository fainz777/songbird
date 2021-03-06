import React from 'react';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import {AnswerItem} from "./AnswerItem";

export class Answers extends React.Component {
	render () {
		const listItems = this.props.birds.map((bird, i) => {
			const itemClass = this.props.tries.includes(i) ? 'wrong-answer' :
				(this.props.answer === i ? 'correct-answer' : '');

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
