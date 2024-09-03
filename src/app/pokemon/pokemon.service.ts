import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly apiUrl = 'https://tyradex.vercel.app/api/v1/pokemon';

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<any> {
    console.log('Fetching Pokemon list');
    return this.http.get(this.apiUrl)
    // .pipe(
    //   tap((response) => this.log(response)),
    //   catchError((error) => this.handleError<Pokemon[]>(error, []))
    // );
  }

  // getPokemonList(): Observable<Pokemon[]> {
  //   console.log('Fetching Pokemon list');
  //   return this.http.get<Pokemon[]>(this.apiUrl).pipe(
  //     tap((response) => this.log(response)),
  //     catchError((error) => this.handleError<Pokemon[]>(error, []))
  //   );
  // }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${pokemonId}`)
    // .pipe(
  //     tap((response) => this.log(response)),
  //     catchError((error) => this.handleError<Pokemon>(error, undefined))
  //   );
  }
  searchPokemonList(term:string):Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`.api/pokemon/?name=${term}`).pipe(

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

  // private log(response: Pokemon[] | Pokemon | undefined): void {
  //   console.table(response);
  // }

  // private handleError<T>(error: any, result: T): Observable<T> {
  //   console.error('An error occurred:', error);
  //   return of(result);
  // }
}
