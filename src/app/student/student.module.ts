import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdashboardComponent } from './sdashboard/sdashboard.component';
import { ProgressbarModule } from "ngx-bootstrap/progressbar";


@NgModule({
  declarations: [SdashboardComponent],
  imports: [
    CommonModule,
    ProgressbarModule.forRoot(),
  ]
})
export class StudentModule { }
