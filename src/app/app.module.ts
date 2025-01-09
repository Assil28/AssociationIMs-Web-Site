import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Standalone component

@NgModule({
  imports: [
    BrowserModule,
    AppComponent, // Import the standalone component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
