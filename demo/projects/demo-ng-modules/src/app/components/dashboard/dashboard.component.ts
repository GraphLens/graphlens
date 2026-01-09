import { Component, OnInit } from '@angular/core';

import { Hero } from '../../../../../../shared/types/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'app-dashboard',
    standalone: false,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
    heroes: Array<Hero> = [];

    constructor(
        private readonly heroService: HeroService
    ) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }
}
