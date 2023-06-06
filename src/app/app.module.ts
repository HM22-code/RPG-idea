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

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
		KanbanBoardComponent
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
		DragDropModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
