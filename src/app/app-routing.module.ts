import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPasswordResetStepComponent } from './Authentification/auth-password-reset-step/auth-password-reset-step.component';
import { AuthPasswordResetComponent } from './Authentification/auth-password-reset/auth-password-reset.component';
import { AuthSigninComponent } from './Authentification/auth-signin/auth-signin.component';
import { AuthSignupComponent } from './Authentification/auth-signup/auth-signup.component';
import { ChangeSimCardComponent } from './back-office/change-sim-card/change-sim-card.component';
import { DashboardComponent } from './back-office/dashboard/dashboard.component';

const routes: Routes = [
  {
    path : 'Dashboard',
    component : DashboardComponent
  },
  {
    path :'inscription',
    component : AuthSignupComponent
  },
  {
    path:'',
    component : AuthSigninComponent
  },
  {
    path:'mot-de-passe-oublie',
    component : AuthPasswordResetComponent
  },
  {
    path:'mot-de-passe-verification',
    component : AuthPasswordResetStepComponent
  },
  {
    path:'changer-carte-sim',
    component : ChangeSimCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
