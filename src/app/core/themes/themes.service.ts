import { Injectable } from '@angular/core';

declare const require: any;
const themeA = require('../../../assets/styles/theme-a.scss');
const themeB = require('../../../assets/styles/theme-b.scss');
const themeC = require('../../../assets/styles/theme-c.scss');
const themeD = require('../../../assets/styles/theme-d.scss');
const themeE = require('../../../assets/styles/theme-e.scss');
const themeF = require('../../../assets/styles/theme-f.scss');
const themeG = require('../../../assets/styles/theme-g.scss');
const themeH = require('../../../assets/styles/theme-h.scss');

@Injectable()
export class ThemesService {

    styleTag: any;
    defaultTheme: string = 'A';

    constructor() {
        this.createStyle();
        this.setTheme(this.defaultTheme);
    }

    private createStyle() {
        const head = document.head || document.getElementsByTagName('head')[0];
        this.styleTag = document.createElement('style');
        this.styleTag.type = 'text/css';
        this.styleTag.id = 'appthemes';
        head.appendChild(this.styleTag);
    }

    setTheme(name) {
        switch (name) {
            case 'A':
                this.injectStylesheet(themeA);
                break;
            case 'B':
                this.injectStylesheet(themeB);
                break;
            case 'C':
                this.injectStylesheet(themeC);
                break;
            case 'D':
                this.injectStylesheet(themeD);
                break;
            case 'E':
                this.injectStylesheet(themeE);
                break;
            case 'F':
                this.injectStylesheet(themeF);
                break;
            case 'G':
                this.injectStylesheet(themeG);
                break;
            case 'H':
                this.injectStylesheet(themeH);
                break;
        }
    }

    injectStylesheet(css) {
        this.styleTag.innerHTML = css;
    }

    getDefaultTheme() {
        return this.defaultTheme;
    }

}
