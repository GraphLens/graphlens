import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, catchError, tap } from 'rxjs';

import { Hero } from '../../../../../shared/types/hero';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes';
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    getHeroes(): Observable<Array<Hero>> {
        this.log('fetch heroes');
        return this.http.get<Array<Hero>>(this.heroesUrl)
            .pipe(
                tap(_ => this.log('fetch heroes')),
                catchError(this.handleError<Array<Hero>>('getHeroes', []))
            );
    }

    getHero(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get<Hero>(url)
            .pipe(
                tap(_ => this.log(`fetch hero id=${id}`)),
                catchError(this.handleError<Hero>(`getHero id=${id}`))
            );
    }

    updateHero(hero: Hero): Observable<any> {
        return this.http.put(this.heroesUrl, hero, this.httpOptions)
            .pipe(
                tap(_ => this.log(`update hero id=${hero.id}`)),
                catchError(this.handleError<any>('updateHero'))
            );
    }

    addHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
            .pipe(
                tap((newHero: Hero) => this.log(`add hero w/ id=${newHero.id}`)),
                catchError(this.handleError<Hero>('addHero'))
            );
    }

    deleteHero(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete<Hero>(url, this.httpOptions)
            .pipe(
                tap(_ => this.log(`deleted hero id=${id}`)),
                catchError(this.handleError<Hero>('deleteHero'))
            );
    }

    searchHeroes(term: string): Observable<Hero[]> {
        if (!term.trim()) {
            return of([]);
        }

        return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
            .pipe(
                tap(x => x.length ?
                    this.log(`found heroes matching "${term}"`) :
                    this.log(`no heroes matching "${term}"`)),
                catchError(this.handleError<Hero[]>('searchHeroes', []))
            );
    }

    private log(message: string): void {
        this.messageService.add(`HeroService: ${message}`);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     *
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // ToDo: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // ToDo: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
