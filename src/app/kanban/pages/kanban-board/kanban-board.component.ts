import {
	CdkDragDrop,
	moveItemInArray,
	transferArrayItem
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

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
}
