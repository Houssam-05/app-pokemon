import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-edit-pokemon',
  standalone:true,
  imports:[CommonModule,FormsModule,PokemonFormComponent],
  template: `
    <h2 class="center">Editer {{pokemon?.name?.fr}}</h2>

<p *ngIf="pokemon" class="center">
  <img [src]="pokemon.sprites?.regular" alt="{{pokemon?.name?.fr}}">
</p>

<app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
      .subscribe(pokemon => this.pokemon = pokemon);
    } else {
      this.pokemon = undefined;
    }
  }

}
