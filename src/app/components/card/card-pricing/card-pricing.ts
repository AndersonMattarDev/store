import { Component, Input } from '@angular/core';

@Component({
	imports: [],
	selector: 'app-card-pricing',
	styleUrl: './card-pricing.css',
	templateUrl: './card-pricing.html',
})
export class CardPricing {
	@Input()
	gameType: string = 'digital PS4';
	@Input()
	gamePrice: string = 'R$ 399,90';
}
