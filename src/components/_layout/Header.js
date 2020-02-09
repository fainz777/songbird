import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Nav} from "./Nav";

export class Header extends  React.Component {
	render() {
		return (
			<header>
				<Grid
					container
					direction="row"
					justify="space-between"
					alignItems="center"
				>
					<Grid item xs={3}>
						<h1>SongBird</h1>
					</Grid>
					<Grid item xs={3}>
						<div>Score: {this.props.score}</div>
					</Grid>
				</Grid>
				<Grid container spacing={3} alignItems="stretch">
					<Grid item xs={12}>
						<Nav step={this.props.step} />
					</Grid>
				</Grid>
			</header>
		);
	}
}
