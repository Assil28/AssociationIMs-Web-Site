import { Routes } from '@angular/router';
import { MembresComponent } from './membres/membres.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'membres', component: MembresComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },

];
