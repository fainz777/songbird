import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Question } from "../Question";
import { Answers } from "../Answers";
import { BirdInfo } from "../BirdInfo";

export class Main extends React.Component {
	render() {
		const song = this.props.birds[this.props.guessIndex].audio;
		const name = this.props.birds[this.props.guessIndex].name;
		const image = this.props.birds[this.props.guessIndex].image;
		console.log('Main: ', this.props);
		return (
			<main>
				<Grid container spacing={3} alignItems="stretch">
					<Grid item xs={12}>
						<Question
							song={song}
							name={name}
							image={image}
							isNextStepAvailable={this.props.isNextStepAvailable}/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Answers
							birds={this.props.birds}
							answer={this.props.answer}
							tries={this.props.tries}
							onClick={this.props.onClick} />
					</Grid>

					<Grid item xs={12} sm={6}>
						<BirdInfo data={isNaN(this.props.answer) ? null : this.props.birds[this.props.answer]} />
					</Grid>
				</Grid>
			</main>
		);
	}
}
