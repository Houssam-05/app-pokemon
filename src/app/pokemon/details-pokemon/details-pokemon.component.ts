import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { PokemonService } from '../pokemon.service';





@Component({
  selector: 'app-details-pokemon',
  standalone: true,
  imports: [CommonModule,PokemonTypeColorPipe],
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.css']
})
export class DetailsPokemonComponent implements OnInit {

  pokemonsList: Pokemon[] = []; // Initialisation de la liste ici
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute,private router:Router,private pokemonservice:PokemonService) { }

  ngOnInit(): void {

    const pokemonId: string | null = this.route.snapshot.paramMap.get('id'); // Correction ici
    if (pokemonId) {
      this.pokemonservice.getPokemonById(+pokemonId)
      .subscribe(pokemon=>this.pokemon=pokemon);
    }
  }
  goToPokemonList(){
    this.router.navigate(['/pokemons']);


  }
  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }
}
