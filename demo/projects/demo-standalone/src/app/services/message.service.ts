import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    messages: Array<string> = [];

    add(message: string) {
        this.messages.push(message);
    }

    clear() {
        this.messages = [];
    }
}
