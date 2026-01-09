import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrl: './messages.component.css'
})
export class MessagesComponent {
    constructor(
        protected readonly messageService: MessageService
    ) {}
}
