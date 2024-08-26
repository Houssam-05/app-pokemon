import { Routes } from '@angular/router';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { DetailsPokemonComponent } from './pokemon/details-pokemon/details-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';

export const routes: Routes = [
  { path: 'edit/pokemon/:id', component: EditPokemonComponent},
  { path: '', redirectTo:'pokemons',pathMatch:'full' },
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemons/:id' , component: DetailsPokemonComponent },
  {path:'**',component: PageNotFoundComponent}
  // { path: '**',redirectTo: 'pokemons' }
];
