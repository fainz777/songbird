import React from 'react';
import Card from '@material-ui/core/Card';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export class Question extends React.Component {
	render() {
		return (
			<Card>
				<CardHeader
					avatar={
						this.props.isNextStepAvailable ? (
							<Avatar
								alt={this.props.name}
								src={this.props.image}
								className="bird-avatar"
							/>
							// <img alt={this.props.name} src={this.props.image} height={100} />
						) : (
							<Skeleton variant="circle" width={100} height={100} />
						)
					}

					title={
						<Typography variant="h5" gutterBottom>
							{this.props.isNextStepAvailable ? this.props.name : '******'}
						</Typography>
					}
					subheader={
						<audio src={this.props.song} controls />
					}
				/>
			</Card>
		);
	}
}
