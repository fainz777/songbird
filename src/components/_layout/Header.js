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
					<h1>SongBird</h1>
					<div>Score: 11</div>
				</Grid>
				<Nav/>
			</header>
		);
	}
}
