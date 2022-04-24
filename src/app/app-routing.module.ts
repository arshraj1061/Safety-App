import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'homescreen', //Later on channge to welcome
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'homescreen',
    loadChildren: () => import('./homescreen/homescreen.module').then( m => m.HomescreenPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'accident',
    loadChildren: () => import('./accident/accident.module').then( m => m.AccidentPageModule)
  },
  {
    path: 'fire-incident',
    loadChildren: () => import('./fire-incident/fire-incident.module').then( m => m.FireIncidentPageModule)
  },
  {
    path: 'natural-disaster',
    loadChildren: () => import('./natural-disaster/natural-disaster.module').then( m => m.NaturalDisasterPageModule)
  },
  {
    path: 'harassment',
    loadChildren: () => import('./harassment/harassment.module').then( m => m.HarassmentPageModule)
  },
  {
    path: 'emergency-contacts',
    loadChildren: () => import('./emergency-contacts/emergency-contacts.module').then( m => m.EmergencyContactsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
