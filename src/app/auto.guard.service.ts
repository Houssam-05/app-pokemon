import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string | undefined;

  login(username: string, password: string): Observable<boolean> {
    // Logique d'authentification simulée
    const isAuthenticated = (username === 'houssam' && password === 'houssam');
    return of(isAuthenticated).pipe(
      delay(1000),
      tap(isAuthenticated => this.isLoggedIn = isAuthenticated)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}

