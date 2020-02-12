import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Nav} from "./Nav";
import Typography from '@material-ui/core/Typography';

export class Header extends  React.Component {
	render() {
		return (
			<header>
				<Grid
					spacing={3}
					container
					direction="row"
					justify="space-between"
					alignItems="center"
				>
					<Grid item xs={12} sm={3}>
						<h1 className="logo">SongBird</h1>
					</Grid>
					<Grid item xs={12} sm={3}>
						<Typography variant="h4" gutterBottom>
							<div className="score">Score: {this.props.score}</div>
						</Typography>
					</Grid>
				</Grid>
				<Grid container spacing={3} alignItems="stretch">
					<Grid item xs={12}>
						<Nav
							step={this.props.step}
							totalSteps={this.props.totalSteps} />
					</Grid>
				</Grid>
			</header>
		);
	}
}
