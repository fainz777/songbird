import React from 'react';
import Card from '@material-ui/core/Card';
import MobileStepper from '@material-ui/core/MobileStepper';

import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";

export class Nav extends React.Component {
	render() {
		let step = this.props.step + 1;
		step = step > this.props.totalSteps ? this.props.totalSteps : step;

		let activeStepIndex = this.props.step;
		activeStepIndex = activeStepIndex === this.props.totalSteps ? (activeStepIndex - 1) : activeStepIndex;

		return (
			<Card>
				<CardContent>
					<Typography
						gutterBottom
						variant="h4"
						component="h2"
						style={{textAlign: 'center'}}>
						{step} / {this.props.totalSteps}
					</Typography>
					<MobileStepper
						variant="progress"
						position="static"
						steps={this.props.totalSteps}
						activeStep={activeStepIndex} />
				</CardContent>
			</Card>
		);
	}
}
