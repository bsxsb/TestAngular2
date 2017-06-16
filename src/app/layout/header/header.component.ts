import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../../core/themes/themes.service';
import { SettingsService } from '../../core/settings/settings.service';
import { MenuService } from '../../core/menu/menu.service';
import { UserblockService } from "../sidebar/userblock/userblock.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public themes: ThemesService,public settings : SettingsService,public menu : MenuService,public userblockService: UserblockService) {
      themes.setTheme('D');
  }

  ngOnInit():void {
  }

  toggleUserBlock(event){
    event && event.preventDefault();
    this.userblockService.toggleVisibility();
  }

  toggleCollapsedSideabar() {
    this.settings.layout.isCollapsed = !this.settings.layout.isCollapsed;
  }

  isCollapsedText() {
    return this.settings.layout.isCollapsedText;
  }
}
