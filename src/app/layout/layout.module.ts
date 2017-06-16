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
import { UserblockComponent } from './sidebar/userblock/userblock.component';
import { UserblockService } from "./sidebar/userblock/userblock.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    UserblockService
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UserblockComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {

}
