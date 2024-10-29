import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { ThemeSwitcherComponent } from './core/components/theme-switcher/theme-switcher.component';
import { KanbanBoardComponent } from './kanban/pages/kanban-board/kanban-board.component';
import { KanbanStatsComponent } from './kanban/pages/kanban-stats/kanban-stats.component';
import { TaskDialogComponent } from './kanban/components/task-dialog/task-dialog.component';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';

import { MaterialModule } from './material/material.module';
import { CdkModule } from './cdk/cdk.module';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
		KanbanBoardComponent,
		ThemeSwitcherComponent,
		KanbanStatsComponent,
		TaskDialogComponent,
		ConfirmDialogComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		CdkModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
