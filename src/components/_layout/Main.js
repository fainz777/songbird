import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Question } from "../Question";
import { Answers } from "../Answers";
import { BirdInfo } from "../BirdInfo";

export class Main extends React.Component {
	render() {
		console.log('Main birds: ', this.props.birds);
		const song = this.props.birds[this.props.guessIndex].audio
		return (
			<main>
				<Grid container spacing={3} alignItems="stretch">
					<Grid item xs={12}>
						<Question song={song} />
					</Grid>

					<Grid item xs={12} sm={6}>
						<Answers
							birds={this.props.birds}
							onClick={this.props.onClick} />
					</Grid>

					<Grid item xs={12} sm={6}>
						===> {this.props.answer}
						<BirdInfo data={isNaN(this.props.answer) ? null : this.props.birds[this.props.answer]} />
					</Grid>
				</Grid>
			</main>
		);
	}
}
