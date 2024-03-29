import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    isDarkTheme!: Observable<boolean>;
    darkmode!: boolean;

    constructor(
        private themeService: ThemeService
    ) {}

    ngOnInit() {
        this.isDarkTheme = this.themeService.isDarkTheme;
    }

    toggleDarkTheme(checked: boolean) {
        this.themeService.setDarkTheme(checked);
        this.darkmode = checked;
    }

}
