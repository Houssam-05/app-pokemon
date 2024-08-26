import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app/app.component';
import { InMemoryDataService } from './app/in-memory-data.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Configure le service HttpClient
    // Ajout du module InMemoryWebApi avec la configuration du service en mémoire
    { provide: HttpClientInMemoryWebApiModule, useFactory: () => HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService) }
  ]

}).catch(err => console.error(err));
