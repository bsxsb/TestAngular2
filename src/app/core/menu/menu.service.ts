import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishLast';

@Injectable()
export class MenuService {

  menuItems: Observable<MenuResponse>;

  constructor(private http : Http) {
    this.menuItems = this.getMenu();
  }

  getMenu(): Observable<MenuResponse> {
    const menuItems = this.http.get("../../../assets/json/menus.json")
      .map(res => res.json() as MenuResponse)
      .publishLast();
    menuItems.connect();
    return menuItems;
  }
}

export interface MenuItem {
  text: string,
  heading?: boolean,
  link?: string,     // internal route links
  elink?: string,    // used only for external links
  target?: string,   // anchor target="_blank|_self|_parent|_top|framename"
  icon?: string,
  alert?: string,
  submenu?: MenuItem[]
}

export type MenuResponse = { [name: string]: MenuItem[] };
