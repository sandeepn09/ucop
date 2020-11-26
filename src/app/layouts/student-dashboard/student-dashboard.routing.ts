import { Routes } from "@angular/router";
import {SdashboardComponent} from '../../student/sdashboard/sdashboard.component';

export const StudentDashboardRoutes: Routes = [
    {
      path: "",
      children: [
        {
          path: "sdashboard",
          component: SdashboardComponent
        }
      ]
    }
  ];