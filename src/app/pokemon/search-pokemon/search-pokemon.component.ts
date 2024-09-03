import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounce, debounceTime, distinct, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './search-pokemon.component.html',
  styleUrl: './search-pokemon.component.css'
})
export class SerarchPokemonComponent implements OnInit {
  searchTerms=new Subject<string>();
  pokemons$:Observable<Pokemon[]> | undefined;
  constructor(private router:Router,
    private pokemonService:PokemonService
  ) {}
  ngOnInit():void{
    this.pokemons$=this.searchTerms.pipe(
    // {.."a".."ab"....."abz"..."abz"....}

    debounceTime(300),
   // {.."a".."ab"....."abz"..."abz"....}

    distinctUntilChanged(),
    switchMap((term)=>this.pokemonService.searchPokemonList(term))
    // {....pokemonList(ab)........ pokemonList(abc).......}
    );
  }
  search(term:string){
    this.searchTerms.next(term);



  }
  goToDetail(pokemon:Pokemon){
    const link=['/pokemon', pokemon.pokedex_id];
    this.router.navigate(link)

  }

}
