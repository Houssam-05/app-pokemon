import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auto.guard.service'; // Vérifiez que le chemin du service est correct

import {  FormsModule, NgModel } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule,],
  styles: [],

})
export class LoginComponent implements OnInit {

  message: string = 'Vous êtes déconnecté';
  name: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Pas besoin de redéfinir `auth`, vous pouvez directement utiliser `authService`
  }

  setMessage() {
    this.message = this.authService.isLoggedIn ? 'Vous êtes connecté' : 'Identifiant ou mot de passe incorrect';
  }

  login() {
    this.message = "Tentative de connexion en cours...";
    this.authService.login(this.name, this.password).subscribe((isLoggedIn: boolean) => {
      this.setMessage();
      if (isLoggedIn) {
        this.router.navigate(['/pokemons']);
      } else {
        this.password = ''; // Réinitialise le mot de passe en cas d'échec
      }
    });
  }

  logout() {
    this.authService.logout();
    this.message = 'Vous êtes déconnecté';
  }

}
