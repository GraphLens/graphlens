import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

import { Hero } from '../../../../../../shared/types/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'app-hero-search',
    imports: [
        AsyncPipe,
        RouterLink
    ],
    templateUrl: './hero-search.component.html',
    styleUrl: './hero-search.component.css'
})
export class HeroSearchComponent implements OnInit {
    heroes$!: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private readonly heroService: HeroService
    ) {}

    ngOnInit(): void {
        this.heroes$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this.heroService.searchHeroes(term)),
        );
    }

    searchHeroes(term: string): void {
        this.searchTerms.next(term);
    }
}
