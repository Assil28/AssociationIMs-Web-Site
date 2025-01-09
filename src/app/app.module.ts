import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Standalone component
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { MembresComponent } from './membres/membres.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    RouterModule.forRoot(routes),
    HomeComponent,
    MembresComponent
     // Import the standalone component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
