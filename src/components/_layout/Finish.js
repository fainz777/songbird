import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GratsImg from '../../assets/img/grats.webp'

export class Finish extends Component {
	render() {
		const isMaxScore = this.props.score === this.props.maxScore;
		return (
			<main>
				<Grid container spacing={3} alignItems="stretch">
					<Grid item xs={12}>
						<Card>
							<CardContent style={{textAlign: 'center'}}>
								<Typography variant="h2" gutterBottom>
									Поздравляем!
								</Typography>
								<Typography variant="body1" gutterBottom>
									Вы прошли викторину и набрали {this.props.score} из {this.props.maxScore} возможных баллов
								</Typography>
								{isMaxScore ? (<img src={GratsImg} alt="Minions congratulate you!" />) : (null) }
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</main>
		);
	}
}
