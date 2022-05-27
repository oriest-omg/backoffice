import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './back-office/dashboard/dashboard.component';
import { MenuComponent } from './back-office/menu/menu.component';
import { AuthSignupComponent } from './Authentification/auth-signup/auth-signup.component';
import { AuthSigninComponent } from './Authentification/auth-signin/auth-signin.component';
import { AuthPasswordResetComponent } from './Authentification/auth-password-reset/auth-password-reset.component';
import { AuthPasswordResetStepComponent } from './Authentification/auth-password-reset-step/auth-password-reset-step.component';
import { SettingComponent } from './Authentification/layout/Modal/setting/setting.component';
import { ChangeSimCardComponent } from './back-office/change-sim-card/change-sim-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    AuthSignupComponent,
    AuthSigninComponent,
    AuthPasswordResetComponent,
    AuthPasswordResetStepComponent,
    SettingComponent,
    ChangeSimCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
