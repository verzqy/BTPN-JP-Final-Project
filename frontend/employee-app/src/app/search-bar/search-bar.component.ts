import { Component, Input, Output, OnInit, EventEmitter, Inject } from '@angular/core';
import { lookupListToken } from '../shared/providers';
import { MdDialog, MdDialogRef } from '@angular/material';
import { GlobalService } from '../shared/services/global.service';
// import { FilterDialogComponent } from '../shared/directives/filter-dialog.component';

@Component({
	selector: 'search-bar',
	templateUrl: 'search-bar.component.html',
	styleUrls: ['search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
	@Input() employeeCount;
	@Output() searchEmp = new EventEmitter();
	@Output() deleteClick = new EventEmitter();
	@Output() sortClick = new EventEmitter();
	sortFlag = false;

	constructor(
		private g: GlobalService,
		@Inject(lookupListToken) public lookupList,
		public dialog: MdDialog) { }

	ngOnInit() { }

	onSort() {
		this.sortClick.emit(this.sortFlag);
		this.sortFlag = !this.sortFlag;
	}

	onKeyUp($event) {
		this.searchEmp.emit($event);
	}

	openDeleteDialog() {
		let dialogRef = this.dialog.open(DeleteDialogComponent, {
			height: '140px',
			width: '200px'
		});
		dialogRef.afterClosed().subscribe(result => {
			if (result != undefined) {
				if (result.action == "delete") {
					this.onDelete();
				}
			}
		});
	}

	onDelete() {
		this.deleteClick.emit();
	}

}

@Component({
	selector: 'delete-dialog',
	template: `
	<div style="margin: auto; text-align: center;">
        <a>Are you sure delete this employee?</a>
		<div style="position: absolute; left: 20px; right: 20px; bottom: 20px;">
        	<button md-mini-fab color="primary" style="float:left; margin-right: 2px;" (click)="dialogRef.close({action:'no'})">NO</button>
			<button md-mini-fab color="accent" style="float:right" (click)="dialogRef.close({action:'delete'})">YES</button>
        </div>
	</div>`
})
export class DeleteDialogComponent {
	constructor(public dialogRef: MdDialogRef<DeleteDialogComponent>) { }
}