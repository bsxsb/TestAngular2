import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from "./menu/menu.service";
import { SettingsService } from "./settings/settings.service";
import { ThemesService } from "./themes/themes.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MenuService,
    SettingsService,
    ThemesService
  ],
  declarations: []
})
export class CoreModule { }
