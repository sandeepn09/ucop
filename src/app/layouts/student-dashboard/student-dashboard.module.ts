import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {StudentDashboardRoutes} from '../student-dashboard/student-dashboard.routing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(StudentDashboardRoutes),
    FormsModule
  ]
})
export class StudentDashboardModule { }
