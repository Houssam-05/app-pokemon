import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router, RouterLink } from '@angular/router';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { SerarchPokemonComponent } from '../search-pokemon/search-pokemon.component';


@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, PokemonTypeColorPipe,SerarchPokemonComponent,],
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  pokemonsList: Pokemon[] = [];
  // pokemonsList: any[] = [];

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(dataFromAPI => {
      dataFromAPI.forEach((pokemon: Pokemon) => {
        if (pokemon.pokedex_id !== 0 && pokemon.pokedex_id <= 10) {
          this.pokemonsList.push(pokemon)
          console.log(pokemon);
        }
      });

    });
  }

  goToPokemon(pokemon: Pokemon) {
    // Assuming that you want to navigate to a detailed view of the selected Pokemon,
    // and the route expects an ID as a parameter, you might do something like this:
    this.router.navigate(['/pokemons', pokemon.pokedex_id]);
  }
}
