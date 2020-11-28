import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from "../../pages/examples/register/register.component";
import {SigninComponent} from '../../pages/registration/signin/signin.component';
import {SignupComponent} from '../../pages/registration/signup/signup.component';
import {ProfileComponent} from "../../pages/registration/profile/profile.component";
import { FormsModule } from "@angular/forms";
import {AuthenticationLayoutRoutes} from './app-auth-layout.routing';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationLayoutRoutes),
    FormsModule
  ],
  declarations: [
    RegisterComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent
  ]
})
export class AppAuthLayoutModule { }
