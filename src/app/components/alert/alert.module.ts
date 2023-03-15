import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DstAlertComponent} from "./alert.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    DstAlertComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    DstAlertComponent
  ]
})
export class DstAlertModule { }
