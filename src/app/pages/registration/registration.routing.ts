import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from '../registration/signin/signin.component';
import {SignupComponent} from '../registration/signup/signup.component';

const routes: Routes = [];

export const RegistrationRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "signin",
        component: SigninComponent
      },
      {
        path: "signup",
        component: SignupComponent
      }
    ]
  }
];
