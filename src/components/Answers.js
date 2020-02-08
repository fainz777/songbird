import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import {AnswerItem} from "./AnswerItem";

export class Answers extends React.Component {
	render () {
		const listItems = this.props.birds.map((bird, i) =>
			<AnswerItem
				i={i}
				birdName={bird.name}
				onClick={() => this.props.onClick(i)}
			/>
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
