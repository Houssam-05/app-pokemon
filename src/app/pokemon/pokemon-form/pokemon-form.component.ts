import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [CommonModule, FormsModule,PokemonTypeColorPipe],
  templateUrl:'./pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon!: Pokemon;  // '!' assure TypeScript que cette propriété sera initialisée.
  types!: string[];            // '!' assure que cette propriété sera initialisée.
  isAddForm!: boolean;         // '!' assure que cette propriété sera initialisée.

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add');
  }

  // hasType(types: string[]): string[] {
  //   // Retourne un tableau de types qui sont présents dans 'this.pokemon.types'
  //   return types.filter(type => this.pokemon.types.includes(type));
  // }

  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked;

    // if (isChecked) {
    //   this.pokemon.types.push(type);
    // } else {
    //   const index = this.pokemon.types.indexOf(type);
    //   this.pokemon.types.splice(index, 1);
    // }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length === 1 ) {
      return false;
    }

    if (this.pokemon.types.length > 2 ) {
      return false;
    }

    return true;
  }
  onSubmit(){
    console.log('Submit form !');
  }

}



