import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Hero } from '../../../../../../shared/types/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'app-heroes',
    imports: [
        RouterLink
    ],
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private readonly heroService: HeroService
    ) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    addHero(heroName: string): void {
        heroName = heroName.trim();

        if (!heroName) {
            return;
        }

        this.heroService.addHero({ name: heroName } as Hero)
            .subscribe(hero => this.heroes.push(hero));
    }

    deleteHero(hero: Hero): void {
        this.heroes = this.heroes.filter(_hero => _hero !== hero);
        this.heroService.deleteHero(hero.id).subscribe();
    }
}
