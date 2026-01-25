import { Component, Input, input } from '@angular/core';


@Component({
    selector: 'app-title',
    standalone: false,
    templateUrl: './title.component.html',
    styleUrl: './title.component.css'
})
export class TitleComponent {
    @Input({ required: true }) public title!: string;
}
