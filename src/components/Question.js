import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export class Question extends React.Component {
	render() {
		return (
			<Card>
				<CardContent>
					<img src="placeholder.jpg" alt=""/>
					<div>******</div>
					<div>
						<audio src={this.props.song} controls />
					</div>
				</CardContent>
			</Card>
		);
	}
}
