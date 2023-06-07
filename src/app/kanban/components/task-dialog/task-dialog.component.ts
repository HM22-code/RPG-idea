import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
	DialogData,
	KanbanBoardComponent
} from '../../pages/kanban-board/kanban-board.component';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
	selector: 'app-task-dialog',
	templateUrl: './task-dialog.component.html',
	styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent {
	form: FormGroup;

	constructor(
		private fb: FormBuilder,
		public dialogRef: MatDialogRef<TaskDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData
	) {
		this.form = this.fb.group({
			title: [data.title, Validators.required],
			description: [data.description, Validators.required]
		});
	}

	onNoClick(): void {
		this.dialogRef.close({
			submit: false
		});
	}

	onSubmitClick(form: NgForm) {
		this.dialogRef.close({
			submit: true,
			form: form
		});
	}
}
