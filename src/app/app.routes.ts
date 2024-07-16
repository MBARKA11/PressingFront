import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"home", component:HomeComponent},
    {path:"dashboard", component:DashboardComponent},
];
