import { Routes } from '@angular/router';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { DetailsPokemonComponent } from './pokemon/details-pokemon/details-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo:'login',pathMatch:'full' },
  {path:'',component:LoginComponent},
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemons/:id' , component: DetailsPokemonComponent },
  { path: 'edit/pokemon/:id', component: EditPokemonComponent,canActivate:[authGuard]},

  // { path: '**',redirectTo: 'pokemons' }
];
