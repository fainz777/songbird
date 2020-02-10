import React from 'react';
import Card from '@material-ui/core/Card';
import Skeleton from '@material-ui/lab/Skeleton';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Twitter from '@material-ui/icons/Twitter';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export class Question extends React.Component {
	render() {
		console.log('this.myRef: ', this.myRef);
		console.log('this.myRef.audio: ', this.myRef.audio);
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
						) : (
							<Avatar className="bird-avatar">
								<Twitter style={{ fontSize: '3rem', color: '#333' }} />
							</Avatar>
						)
					}

					title={
						<Typography variant="h5" gutterBottom>
							{this.props.isNextStepAvailable ? this.props.name : '******'}
						</Typography>
					}
					subheader={
						<AudioPlayer
							showLoopControl={false}
							showJumpControls={false}
							showVolumeControl={false}
							ref={this.myRef}
							src={this.props.song}
						/>
					}
				/>

			</Card>
		);
	}
}
