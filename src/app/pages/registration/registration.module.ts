import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { RegistrationRoutes } from './registration.routing';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [SigninComponent, SignupComponent, ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(RegistrationRoutes),
    ProgressbarModule.forRoot(),
    CollapseModule.forRoot()
  ]
})

export class RegistrationModule { }
