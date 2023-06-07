import {
	CdkDragDrop,
	moveItemInArray,
	transferArrayItem
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../../components/task-dialog/task-dialog.component';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

export interface DialogData {
	title: string;
	description: string;
}

@Component({
	selector: 'app-kanban-board',
	templateUrl: './kanban-board.component.html',
	styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent {
	todo = [
		'Get to work',
		'Pick up groceries',
		'Go home',
		'Fall asleep',
		'Wake up'
	];
	done = [
		'Get up',
		'Brush teeth',
		'Take a shower',
		'Check e-mail',
		'Walk dog'
	];
	progress = [
		'Abort code',
		'Block user',
		'Code theme',
		'Delete data',
		'Update code'
	];

	constructor(public dialog: MatDialog) {}

	drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		} else {
			transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		}
	}

	openCreateDialog(column: string[]): void {
		const dialogRef = this.dialog.open(TaskDialogComponent, {
			width: '350px',
			height: '400px',
			data: { title: '', description: '' }
		});

		dialogRef.backdropClick().subscribe(() => {
			dialogRef.close({
				submit: false
			});
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result.submit == true) {
				column.push(result.form.title);
			}
		});
	}

	openEditDialog(column: string[], item: any): void {
		const dialogRef = this.dialog.open(TaskDialogComponent, {
			width: '350px',
			height: '400px',
			data: { title: item, description: '' }
		});

		dialogRef.backdropClick().subscribe(() => {
			dialogRef.close({
				submit: false
			});
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result.submit == true) {
				column[column.indexOf(item)] = result.form.title;
			}
		});
	}
}
