import { Component, Input, Output, OnInit, EventEmitter, Inject } from '@angular/core';
import { lookupListToken } from '../shared/providers';

@Component({
	selector: 'search-bar',
	templateUrl: 'search-bar.component.html',
	styleUrls: ['search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
	@Input() selectedEmployeeId;
	@Input() employeeCount;
	@Output() searchEmp = new EventEmitter();
	@Output() deleteClick = new EventEmitter();
	@Output() sortClick = new EventEmitter();
	sortFlag = false;

	constructor(
		@Inject(lookupListToken) public lookupList) { }

	ngOnInit() { }

	onDelete() {
		this.deleteClick.emit();
	}

	onSort() {
		this.sortClick.emit(this.sortFlag);
		this.sortFlag = !this.sortFlag;
	}

	onKeyUp($event) {
		this.searchEmp.emit($event);
	}
}