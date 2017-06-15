import { Component,HostBinding,OnInit } from '@angular/core';
import { SettingsService } from './core/settings/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @HostBinding('class.aside-collapsed') get isCollapsed() { return this.settings.layout.isCollapsed; }
  @HostBinding('class.layout-fixed') get isFixed() { return this.settings.layout.isFixed; }

  constructor(public settings:SettingsService) {

  }

  ngOnInit() {

  }
}
