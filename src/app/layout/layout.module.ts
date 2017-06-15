import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
    MdButtonModule,
    MdIconModule,
    MdIconRegistry,
} from '@angular/material';

import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {

}
