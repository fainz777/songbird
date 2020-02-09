import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export class Finish extends Component {
	render() {
		return (
			<main>
				<Grid container spacing={3} alignItems="stretch">
					<Grid item xs={12}>
						<Card>
							<CardContent>
								<Typography variant="h2" gutterBottom>
									Поздравляем!
								</Typography>
								<Typography variant="body1" gutterBottom>
									Вы прошли викторину и набрали {this.props.score} из {this.props.maxScore} возможных баллов
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</main>
		);
	}
}
