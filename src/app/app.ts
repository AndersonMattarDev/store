import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar';
import { HomeComponent } from './pages/home/home';

@Component({
	imports: [RouterOutlet, MenuBarComponent, HomeComponent],
	selector: 'app-root',
	styleUrl: './app.css',
	templateUrl: './app.html',
})
export class App {
	protected readonly title = signal('store');
}
