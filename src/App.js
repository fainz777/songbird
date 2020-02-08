import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DoubleArrow from '@material-ui/icons/DoubleArrow';
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
			isNextStepAvailable: false,
		});
	}

	render() {
		const isNextStepAvailable = this.state.isNextStepAvailable;
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
