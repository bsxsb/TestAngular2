import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatrixComponent } from './matrix/matrix.component';

const routes: Routes = [
  { path: '', component: MatrixComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [MatrixComponent]
})
export class MatrixModule { }
