import { Component, Input } from '@angular/core';

@Component({
	imports: [],
	selector: 'app-card-label',
	styleUrl: './card-label.css',
	templateUrl: './card-label.html',
})
export class CardLabel {
	@Input()
	gameLabel: string = '';
}
