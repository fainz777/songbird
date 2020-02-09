import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import DoubleArrow from '@material-ui/icons/DoubleArrow';
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import {SongBirdGameService} from "./services/songBirdGameService";
import {Header} from './components/_layout/Header';
import {Main} from "./components/_layout/Main";
import {Finish} from "./components/_layout/Finish";

import './App.css';
import Grid from "@material-ui/core/Grid";
import {Nav} from "./components/_layout/Nav";

const price = 5;
const penalty = 1;

class App extends React.Component {
	constructor(props) {
		super(props);
		const birdsData = SongBirdGameService.getData();

		this.state = {
			birdsData: birdsData,
			score: 0,
			step: 0,
			guessIndex: SongBirdGameService.getGuessedIndex(birdsData, 0),
			answer: null,
			clickedIndex: null,
			isNextStepAvailable: false,
			tries: [],
			isFinish: false,
			maxScore: price * birdsData.length,
		};
	}

	handleClick(i) {
		this.setState({clickedIndex: i});
		if (this.state.tries.includes(i) || this.state.answer === this.state.guessIndex) {
			return;
		}

		this.setState({answer: i});

		if (i === this.state.guessIndex) {
			const score = this.state.score + price - penalty * this.state.tries.length;
			this.setState({score: score});

			this.setState({
				isNextStepAvailable: true
			});
		} else {
			const tries = [...this.state.tries];
			tries.push(i);
			this.setState({tries: tries});
		}
	}

	goNextStep() {
		const step = this.state.step + 1;
		this.setState({
			step: step,
			guessIndex: SongBirdGameService.getGuessedIndex(this.state.birdsData, step),
			answer: null,
			clickedIndex: null,
			isNextStepAvailable: false,
			tries: []
		});

		if (step === this.state.birdsData.length) {
			this.setState({isFinish: true});
		}
	}

	startNewGame() {
		this.setState({
			step: 0,
			score: 0,
			guessIndex: SongBirdGameService.getGuessedIndex(this.state.birdsData, 0),
			answer: null,
			clickedIndex: null,
			isNextStepAvailable: false,
			tries: [],
			isFinish: false,
		});
	}

	render() {
		const isNextStepAvailable = this.state.isNextStepAvailable;
		const isFinish = this.state.isFinish;

		return (
			<Container maxWidth="lg">
				<Header
					score={this.state.score}
					step={this.state.step} />

				{isFinish ? (
					<Finish
						score={this.state.score}
						maxScore={this.state.maxScore}
					/>
				) : (
					<Main
						birds={this.state.birdsData[this.state.step]}
						guessIndex={this.state.guessIndex}
						answer={this.state.answer}
						clickedIndex={this.state.clickedIndex}
						isNextStepAvailable={this.state.isNextStepAvailable}
						tries={this.state.tries}
						onClick={this.handleClick.bind(this)}/>
				)}
				<Grid container spacing={3} alignItems="stretch">
					<Grid item xs={12}>
						<div className="buttons-wrapper">
							{isNextStepAvailable ? (
								<Button
									variant="contained"
									color="primary"
									endIcon={<DoubleArrow />}
									onClick={this.goNextStep.bind(this)}>Далее</Button>
							) : (null)}

							{isFinish ? (
								<Button
									variant="contained"
									color="primary"
									startIcon={<EmojiEvents />}
									onClick={this.startNewGame.bind(this)}>Новая игра</Button>
							) : (null)}
						</div>
					</Grid>
				</Grid>
			</Container>
		);
	}
}

export default App;
