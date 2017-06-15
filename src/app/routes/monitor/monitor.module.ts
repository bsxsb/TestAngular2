import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitorComponent } from "./monitor/monitor.component";

const routes: Routes = [
  { path: '', component: MonitorComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    MonitorComponent
  ],
  exports: [

  ]
})
export class MonitorModule { }
