import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { TitleContainerComponent } from './components/title-container/title-container.component';
import { TitleComponent } from './components/title/title.component';
import { MessagesComponent } from './components/messages/messages.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        RouterLink,
        TitleContainerComponent,
        TitleComponent,
        MessagesComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    public title = 'GraphLens Demo with Standalone API';
}
