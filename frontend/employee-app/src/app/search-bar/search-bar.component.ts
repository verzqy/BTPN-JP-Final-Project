import { Component, Input, Output, OnInit, EventEmitter, Inject } from '@angular/core';
import { lookupListToken } from '../shared/providers';
import { MdDialog, MdDialogRef } from '@angular/material';
import { GlobalService } from '../shared/services/global.service';

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
	@Output() filterEmp = new EventEmitter();
	sortFlag = false;
	filterValue = { gender: "", location: "" }

	constructor(
		private g: GlobalService,
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

	openFilterDialog() {
		let dialogRef = this.dialog.open(FilterDialogComponent, {
			height: '300px',
			width: '300px'
		});
		if (this.filterValue.gender != "") {
			dialogRef.componentInstance.genderChecked = true;
			dialogRef.componentInstance.genderName = this.filterValue.gender;
		} else {
			dialogRef.componentInstance.genderChecked = false;
		}
		if (this.filterValue.location != "") {
			dialogRef.componentInstance.locationChecked = true;
			dialogRef.componentInstance.locationName = this.filterValue.location;
		} else {
			dialogRef.componentInstance.locationChecked = false;
		}
		dialogRef.afterClosed().subscribe(result => {
			if (result != undefined) {
				if (result.action == "filter") {
					this.filterValue.gender = result.genderValue;
					this.filterValue.location = result.locationvalue;
					this.filterEmp.emit(this.filterValue);

				}
			}
		});
	}

	onFilter() {
		//filter method here
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

@Component({
	selector: 'filter-dialog',
	template: `
	<div style="margin: auto">
	<div>
		<div style="margin-top: 40px">
			<md-checkbox [disableRipple]=true [(ngModel)]="genderChecked"></md-checkbox>
			<md-select style="width: 200px" placeholder="Gender" [(ngModel)]="genderName" [disabled]="!genderChecked">
            	<md-option *ngFor="let gender of lookupList.gender" value="{{gender}}">{{gender}}</md-option>
        	</md-select>
		</div>
		<div style="margin-top: 40px">
    		<md-checkbox [disableRipple]=true [(ngModel)]="locationChecked"></md-checkbox>
			<md-select style="width: 200px" placeholder="Location" [(ngModel)]="locationName" [disabled]="!locationChecked">
            	<md-option *ngFor="let location of g.locations" value="{{location.locationCity}}">{{location.locationCity}}</md-option>
        	</md-select>
		</div>
	</div>
		<div style="position: absolute; right: 10px; bottom: 10px;">
			<button md-raised-button color="accent" style="float:right; margin-right: 2px;" (click)="filterSubmit()">FILTER</button>
			<button md-raised-button style="float:right" (click)="dialogRef.close({action:'cancel'})">CANCEL</button>
    </div>
	</div>`
})
export class FilterDialogComponent {
	constructor(public dialogRef: MdDialogRef<DeleteDialogComponent>,
		private g: GlobalService,
		@Inject(lookupListToken) public lookupList) { }

	genderChecked;
	locationChecked;
	genderName = "Male";
	locationName = "Bali";

	filterSubmit() {
		if (!this.genderChecked) {
			this.genderName = "";
		}
		if (!this.locationChecked) {
			this.locationName = "";
		}
		this.dialogRef.close({ action: 'filter', genderValue: this.genderName, locationvalue: this.locationName })
	}
}