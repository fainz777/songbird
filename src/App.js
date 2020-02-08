import React from 'react';
import Container from '@material-ui/core/Container';
import {SongBirdGameService} from "./services/songBirdGameService";
import {Header} from './components/_layout/Header';
import {Main} from "./components/_layout/Main";

import './App.css';

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
			isNextStepAvailable: false
		};
	}

	handleClick(i) {
		this.setState({answer: i});
		console.log('App handle click: ', i, this);
		if (i === this.state.guessIndex) {
			this.setState({
				isNextStepAvailable: true
			});
		} else {
			console.log('incorrect');
		}
	}

	goNextStep() {
		const step = this.state.step + 1;
		this.setState({
			step: step,
			guessIndex: SongBirdGameService.getGuessedIndex(this.state.birdsData, step),
			answer: null,
		});
	}

	render() {
		console.log('render start: ', this.state);
		console.log('render birds: ',this.state.birdsData[this.state.step])
		return (
			<Container maxWidth="lg">
				<Header
					score={this.state.score}
					step={this.state.step} />
				<Main
					birds={this.state.birdsData[this.state.step]}
					guessIndex={this.state.guessIndex}
					answer={this.state.answer}
					onClick={this.handleClick.bind(this)}/>

				<button onClick={this.goNextStep.bind(this)}>Next step</button>
				<br/><br/>
			</Container>
		);
	}
}

export default App;
