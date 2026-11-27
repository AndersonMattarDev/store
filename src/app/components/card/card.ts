import { Component, Input } from '@angular/core';
import { CardLabel } from './card-label/card-label';
import { CardPricing } from './card-pricing/card-pricing';

@Component({
	imports: [CardLabel, CardPricing],
	selector: 'app-card',
	styleUrl: './card.css',
	templateUrl: './card.html',
})
export class CardComponent {
	@Input()
	gameCover: string = '';
	@Input()
	gameLabel: string = '';
	@Input()
	gameType: string = 'XPTO PS4';
	@Input()
	gamePrice: string = 'R$ 399,90';
}
