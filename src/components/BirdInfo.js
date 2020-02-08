import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function emptyCard() {
	return (
		<CardContent>
			Послушайте плеер.<br/>
			Выберите птицу из списка
		</CardContent>

	);
}

function cardInfoOutput(bird) {
	return (
		<div>
			<CardMedia
				style={{'height': '240px'}}
				image={bird.image}
				title={bird.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{bird.name}
				</Typography>
				<Typography gutterBottom variant="h5" component="h2">
					{bird.species}
				</Typography>
				<audio
					src={bird.audio}
					controls/>
				<Typography variant="body2" color="textSecondary" component="p">
					{bird.description}
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

				{/*<CardContent>*/}
					{cardContent}
				{/*</CardContent>*/}
			</Card>
		);
	}
}
