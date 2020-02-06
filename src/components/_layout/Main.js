import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Question } from "../Question";
import { Answers } from "../Answers";
import { BirdInfo } from "../BirdInfo";

export class Main extends React.Component {
	render() {
		return (
			<main>
				<Grid container spacing={3} alignItems="stretch">
					<Grid item xs={12}>
						<Question />
					</Grid>

					<Grid item xs={6}>
						<Answers />
					</Grid>

					<Grid item xs={6}>
						<BirdInfo/>
					</Grid>
				</Grid>
			</main>
		);
	}
}
