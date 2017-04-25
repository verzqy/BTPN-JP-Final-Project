import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
	selector: 'search-bar',
	templateUrl: 'search-bar.component.html',
	styleUrls: ['search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
	@Input() deleteVisible;
	@Input() employeeCount;
	@Output() deleteClick = new EventEmitter();
	@Output() sortClick = new EventEmitter();
	sortFlag = false;

	ngOnInit() { }

	onDelete() {
		this.deleteClick.emit();
	}

	onSort() {
		this.sortClick.emit(this.sortFlag);
		this.sortFlag = !this.sortFlag;
	}
}