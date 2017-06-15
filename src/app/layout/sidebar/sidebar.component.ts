import { Component, OnInit ,Injector} from '@angular/core';
import { Router } from '@angular/router';

import { MenuService,MenuItem } from "../../core/menu/menu.service";
import { SettingsService } from "../../core/settings/settings.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: MenuItem[];
  router: Router;

  constructor(public menu: MenuService, public settings: SettingsService, public injector: Injector) {
    menu.menuItems.subscribe(result => this.menuItems = result.menu);

  }

  ngOnInit() {
    this.router = this.injector.get(Router);

    this.router.events.subscribe((val) => {
      // scroll view to top
      window.scrollTo(0, 0);
    });
  }

  isSidebarCollapsed() {
    return this.settings.layout.isCollapsed;
  }
  isSidebarCollapsedText() {
    return this.settings.layout.isCollapsedText;
  }
  isEnabledHover() {
    return this.settings.layout.asideHover;
  }

}
