import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MessagesComponent } from './components/messages/messages.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        RouterLink,
        MessagesComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'GraphLens Demo';
}
