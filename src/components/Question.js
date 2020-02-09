import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';

export class Question extends React.Component {
	render() {
		return (
			<Card>
				<CardHeader
					avatar={
						this.props.isNextStepAvailable ? (
							<img alt={this.props.name} src={this.props.image} height={100} />
						) : (
							<Skeleton variant="circle" width={100} height={100} />
						)
					}

					title={this.props.isNextStepAvailable ? this.props.name : '******'}
					subheader={
						<audio src={this.props.song} controls />
					}
				/>
			</Card>
		);
	}
}
