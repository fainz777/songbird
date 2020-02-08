import React, {Component} from 'react';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

export class AnswerItem extends Component {
	render() {
		return (
			<ListItem
				button
				className={this.props.itemClass}
				onClick={() => this.props.onClick(this.props.i)} >
				<ListItemText primary={this.props.birdName} />
			</ListItem>
		);
	}
}
