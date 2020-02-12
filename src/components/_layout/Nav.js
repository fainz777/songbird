import React from 'react';
import {NavItem} from './NavItem';
import Card from '@material-ui/core/Card';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
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


				{/*<br/><br/>

				<Stepper activeStep={this.props.step} alternativeLabel>
					{nav.map((label, index) => {
						const stepProps = {};
						const labelProps = {};
						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>*/}
			</Card>
		);
	}
}
