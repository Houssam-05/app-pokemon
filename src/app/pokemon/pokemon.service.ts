import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly apiUrl = 'api/pokemons';

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]> {
    console.log('Fetching Pokemon list');
    return this.http.get<Pokemon[]>(this.apiUrl).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError<Pokemon[]>(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError<Pokemon>(error, undefined))
    );
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy',
    ];
  }

  private log(response: Pokemon[] | Pokemon | undefined): void {
    console.table(response);
  }

  private handleError<T>(error: any, result: T): Observable<T> {
    console.error('An error occurred:', error);
    return of(result);
  }
}
