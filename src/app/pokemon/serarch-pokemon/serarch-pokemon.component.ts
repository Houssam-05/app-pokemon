import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-serarch-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './serarch-pokemon.component.html',
  styleUrl: './serarch-pokemon.component.css'
})
export class SerarchPokemonComponent implements OnInit {
  searchterms=new Subject<string>();
  pokemons$:Observable<Pokemon[]> | undefined;
  constructor(private router:Router) {}
  ngOnInit():void{
  }
  search(term:string){

  }
  goToDetail(pokemon:Pokemon){
    const link=['/pokemon',pokemon.id];
    this.router.navigate(link)

  }

}
