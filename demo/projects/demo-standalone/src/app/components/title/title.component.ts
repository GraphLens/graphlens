import { Component, input } from '@angular/core';


@Component({
    selector: 'app-title',
    standalone: true,
    templateUrl: './title.component.html',
    styleUrl: './title.component.css'
})
export class TitleComponent {
    public title = input.required<string>();
}
