import { Routes } from "@angular/router";

import { LoginComponent } from "../../pages/examples/login/login.component";
import { PricingComponent } from "../../pages/examples/pricing/pricing.component";
import { LockComponent } from "../../pages/examples/lock/lock.component";
import { RegisterComponent } from "../../pages/examples/register/register.component";
import { PresentationComponent } from "../../pages/presentation/presentation.component";
import {SigninComponent} from '../../pages/registration/signin/signin.component';
import {SignupComponent} from '../../pages/registration/signup/signup.component';

export const AuthLayoutRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "login",
        component: LoginComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "lock",
        component: LockComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "register",
        component: RegisterComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "pricing",
        component: PricingComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "signin",
        component: SigninComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "signup",
        component: SignupComponent
      }
    ]
  }
];
