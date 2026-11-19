import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card';

@Component({
	imports: [CardComponent],
	selector: 'app-home',
	styleUrl: './home.css',
	templateUrl: './home.html',
})
export class HomeComponent {}
