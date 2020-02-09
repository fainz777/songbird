import React from 'react';
import {NavItem} from './NavItem';
import Card from '@material-ui/core/Card';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


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

		console.log('nav this.props.step: ', this.props.step);
		return (
			<Card>
				<Stepper activeStep={this.props.step}>
					{nav.map((label, index) => {
						const stepProps = {};
						const labelProps = {};
						// if (isStepOptional(index)) {
						// 	labelProps.optional = <Typography variant="caption">Optional</Typography>;
						// }
						// if (isStepSkipped(index)) {
						// 	stepProps.completed = false;
						// }
						return (
							<Step key={label} {...stepProps}>
								<StepLabel {...labelProps}>{label}</StepLabel>
							</Step>
						);
					})}
				</Stepper>
			</Card>
		);
	}
}
