import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router, RouterLink } from '@angular/router';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule, RouterLink, PokemonTypeColorPipe],
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  pokemonsList: Pokemon[]=[];

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(pokemonsList=>this.pokemonsList=pokemonsList);
    console.log("Pokemon[1]" + this.pokemonsList[1].name);
  }

  goToPokemon(pokemon: Pokemon) {
    // Assuming that you want to navigate to a detailed view of the selected Pokemon,
    // and the route expects an ID as a parameter, you might do something like this:
    this.router.navigate(['/pokemons', pokemon.id]);
  }
}
