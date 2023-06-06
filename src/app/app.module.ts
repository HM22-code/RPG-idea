import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { KanbanBoardComponent } from './kanban/pages/kanban-board/kanban-board.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ThemeSwitcherComponent } from './core/components/theme-switcher/theme-switcher.component';
import { KanbanStatsComponent } from './kanban/pages/kanban-stats/kanban-stats.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
		KanbanBoardComponent,
		ThemeSwitcherComponent,
		KanbanStatsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		MatBadgeModule,
		MatListModule,
		DragDropModule,
		MatSlideToggleModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
