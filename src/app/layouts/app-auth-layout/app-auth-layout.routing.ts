import { Routes } from "@angular/router";
import { RegisterComponent } from "../../pages/examples/register/register.component";
import {SigninComponent} from '../../pages/registration/signin/signin.component';
import {SignupComponent} from '../../pages/registration/signup/signup.component';
import {ProfileComponent} from "../../pages/registration/profile/profile.component";

export const AuthenticationLayoutRoutes: Routes = [
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
    },
    {
      path: "",
      children: [
        {
          path: "profile",
          component: ProfileComponent
        }
      ]
    }
  ];