import {Component} from '@angular/core';

@Component({
	selector: 'app-navbar', //html tag t o call component.
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
	title = 'The Gallery';
}