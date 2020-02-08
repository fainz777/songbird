import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function emptyCard() {
	return (
		<div>
			Послушайте плеер.<br/>
			Выберите птицу из списка
		</div>

	);
}

function cardInfoOutput(bird) {
	return (
		<div>
			<img src={bird.image} alt=""/>
			<div>{bird.name}</div>
			<div>bird.species</div>
			<audio
				src={bird.audio}
				controls/>
			<div>{bird.description}</div>
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
				<CardContent>
					{cardContent}
				</CardContent>
			</Card>
		);
	}
}
