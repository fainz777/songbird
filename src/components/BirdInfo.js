import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export class BirdInfo extends React.Component {
	render() {
		return (
			<Card>
				<CardContent>
					<img src="https://live.staticflickr.com/65535/49339376578_e933426455.jpg" alt=""/>
					<div>Дятел</div>
					<div>Dendrocopos major</div>
					<audio src="https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3" controls />
					<div>
						Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.
					</div>
				</CardContent>
			</Card>
		);
	}
}
