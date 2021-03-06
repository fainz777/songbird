import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function emptyCard() {
	return (
		<CardContent>
			<Typography variant="body1" color="textSecondary" component="p">
				Послушайте плеер.<br/>
				Выберите птицу из списка
			</Typography>
		</CardContent>

	);
}

function cardInfoOutput(bird) {
	return (
		<div>
			<CardMedia
				style={{'height': '400px'}}
				image={bird.image}
				title={bird.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{bird.name}
				</Typography>
				<Typography variant="subtitle1" gutterBottom>
					{bird.species}
				</Typography>
				<AudioPlayer
					autoPlayAfterSrcChange={false}
					showLoopControl={false}
					showJumpControls={false}
					showVolumeControl={false}
					src={bird.audio}
				/>
				<Typography variant="body1" color="textSecondary" component="p">
					{bird.description}
				</Typography>
				<Typography variant="body1" color="textSecondary" component="p">
					<a href={bird.url} target="_blank" rel="noopener noreferrer">Узнать больше</a>
				</Typography>
			</CardContent>
		</div>

);
}

function birdInfoOutput(bird) {
	if (bird) {
		return cardInfoOutput(bird);
	} else {
		return emptyCard();
	}
}

export class BirdInfo extends React.Component {
	render() {
		const bird = this.props.data;
		const cardContent = birdInfoOutput(bird);

		return (
			<Card>
				{cardContent}
			</Card>
		);
	}
}
