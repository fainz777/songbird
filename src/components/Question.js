import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export class Question extends React.Component {
	render() {
		return (
			<Card>
				<CardContent>
					<img src="placeholder.jpg" alt=""/>
					<div>******</div>
					<div>
						<audio src="https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3" controls />
					</div>
				</CardContent>
			</Card>
		);
	}
}
