import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanBoardComponent } from '../kanban/pages/kanban-board/kanban-board.component';

const routes: Routes = [
	{ path: 'app-kanban-board', component: KanbanBoardComponent },
	{ path: '', redirectTo: '/app-kanban-board', pathMatch: 'full' } // redirect to `first-component
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
