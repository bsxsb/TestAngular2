import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitorComponent } from "./monitor/monitor.component";
import { MonitordetailComponent } from './monitor/monitordetail/monitordetail.component';

const routes: Routes = [
  { path: '', component: MonitorComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    MonitorComponent,
    MonitordetailComponent
  ],
  exports: [

  ]
})
export class MonitorModule { }
