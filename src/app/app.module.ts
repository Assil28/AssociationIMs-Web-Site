import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Standalone component
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { MembresComponent } from './membres/membres.component';

@NgModule({
  declarations: [
    AppComponent, // Composant principal
    HomeComponent, // Déclarer HomeComponent
    MembresComponent // Déclarer MembresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configurer les routes
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
