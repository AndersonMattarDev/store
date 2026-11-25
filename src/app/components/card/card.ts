import { Component } from '@angular/core';
import { CardLabel } from './card-label/card-label';
import { CardPricing } from './card-pricing/card-pricing';

@Component({
	imports: [CardLabel, CardPricing],
	selector: 'app-card',
	styleUrl: './card.css',
	templateUrl: './card.html',
})
export class CardComponent {}
