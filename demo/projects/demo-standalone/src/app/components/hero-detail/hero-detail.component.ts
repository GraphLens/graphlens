import { Component, OnInit } from '@angular/core';
import { Location, UpperCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Hero } from '../../../../../../shared/types/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'app-hero-detail',
    imports: [
        FormsModule,
        UpperCasePipe
    ],
    templateUrl: './hero-detail.component.html',
    styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit {
    hero?: Hero;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly heroService: HeroService,
        private readonly location: Location
    ) {}

    ngOnInit(): void {
        this.getHero();
    }

    getHero(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
    }

    saveHeroName(): void {
        if (this.hero) {
            this.heroService.updateHero(this.hero)
                .subscribe(() => this.goBack());
        }
    }

    goBack(): void {
        this.location.back();
    }
}
