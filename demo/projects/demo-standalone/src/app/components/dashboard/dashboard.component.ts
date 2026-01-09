import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Hero } from '../../../../../../shared/types/hero';
import { HeroService } from '../../services/hero.service';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        RouterLink,
        HeroSearchComponent
    ],
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
