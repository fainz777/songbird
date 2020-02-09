import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';



export class Question extends React.Component {
	render() {
		return (
			<Card>
				<CardContent>
					{this.props.isNextStepAvailable ? (
						<img alt={this.props.name} src={this.props.image} />
					) : (
						<Skeleton variant="circle" width={200} height={200} />
					)}
					<div>
						{this.props.isNextStepAvailable ? this.props.name : '******'}
					</div>
					<div>
						<audio src={this.props.song} controls />
					</div>
				</CardContent>
			</Card>
		);
	}
}
