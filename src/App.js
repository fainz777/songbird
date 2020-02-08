import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DoubleArrow from '@material-ui/icons/DoubleArrow';
import {SongBirdGameService} from "./services/songBirdGameService";
import {Header} from './components/_layout/Header';
import {Main} from "./components/_layout/Main";

import './App.css';

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
			isNextStepAvailable: false,
			tries: []
		};
	}

	handleClick(i) {
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
			// ToDo: refactor
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
			isNextStepAvailable: false,
			tries: []
		});
	}

	render() {
		const isNextStepAvailable = this.state.isNextStepAvailable;
console.log('App: ', this.state);
		return (
			<Container maxWidth="lg">
				<Header
					score={this.state.score}
					step={this.state.step} />
				<Main
					birds={this.state.birdsData[this.state.step]}
					guessIndex={this.state.guessIndex}
					answer={this.state.answer}
					isNextStepAvailable={this.state.isNextStepAvailable}
					tries={this.state.tries}
					onClick={this.handleClick.bind(this)}/>

				{isNextStepAvailable ? (
					<Button
						variant="contained"
						color="primary"
						endIcon={<DoubleArrow />}
						onClick={this.goNextStep.bind(this)}>Next step</Button>
				) : (null)}
			</Container>
		);
	}
}

export default App;
