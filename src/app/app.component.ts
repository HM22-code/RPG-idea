import { Component, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './core/services/theme.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

    @HostBinding('class') className = '';
    title = 'todolist-front';
    isDarkTheme!: Observable<boolean>;

    constructor(
        private themeService: ThemeService,
        private overlay: OverlayContainer
    ) {}

    ngOnInit() {
        this.isDarkTheme = this.themeService.isDarkTheme;
        this.isDarkTheme.subscribe((darkMode) => {
            const darkClassName = 'dark-theme';
            this.className = darkMode ? darkClassName : '';
            if (darkMode) {
                this.overlay.getContainerElement().classList.add(darkClassName);
            } else {
                this.overlay.getContainerElement().classList.remove(darkClassName);
            }
        });
    }
}
