import React from 'react';
import {NavItem} from './NavItem';
import Card from '@material-ui/core/Card';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import MobileStepper from '@material-ui/core/MobileStepper';

import CardContent from '@material-ui/core/CardContent';

const nav = [
	'Разминка',
	'Воробьиные',
	'Лесные птицы',
	'Певчие птицы',
	'Хищные птицы',
	'Морские птицы'
];

export class Nav extends React.Component {
	render() {
		const navItems = nav.map((item, i) =>
			<NavItem
				step={this.props.step}
				key={i}
				current={i}
				item={item} />
		);

		return (
			<Card>
					<MobileStepper
						variant="progress"
						position="static"
						steps={nav.length}
						activeStep={this.props.step} />

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
