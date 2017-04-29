import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'navigator-bar',
    template: `
	<div class="top-bar-div">
    <md-tab-group>
        <md-tab>
            <ng-template md-tab-label>
                <md-icon svgIcon="person" class="nav-bar-icon"></md-icon>
            </ng-template>
            <!--<detail-employee [selectedEmployee]="selectedEmployee"></detail-employee>-->
        </md-tab>
        <md-tab disabled>
            <ng-template md-tab-label>
                <md-icon svgIcon="restore" class="nav-bar-icon"></md-icon>
            </ng-template>
            <h1>Under Construction</h1>
        </md-tab>
        <md-tab disabled>
            <ng-template md-tab-label>
                <md-icon svgIcon="layers" class="nav-bar-icon"></md-icon>
            </ng-template>
            <h1>Under Construction</h1>
        </md-tab>
        <md-tab disabled>
            <ng-template md-tab-label>
                <md-icon svgIcon="people" class="nav-bar-icon"></md-icon>
            </ng-template>
            <h1>Under Construction</h1>
        </md-tab>
        <md-tab disabled>
            <ng-template md-tab-label>
                <md-icon svgIcon="home" class="nav-bar-icon"></md-icon>
            </ng-template>
            <h1>Under Construction</h1>
        </md-tab>
        <md-tab disabled>
            <ng-template md-tab-label>
                <md-icon svgIcon="location" class="nav-bar-icon"></md-icon>
            </ng-template>
            <h1>Under Construction</h1>
        </md-tab>
    </md-tab-group>
	</div>`,
    styles: [`
	.top-bar-div {
    	box-sizing: border-box;
    	position: absolute;
    	height: 50px;
    	width: 100%;
    	top: 0px;   
    	left: 0px;
    	bottom: 0px;
    	padding: 1px 0px 0px 2px;
    	background-color: #34a0ed;
	}

	.nav-bar-icon {
    	padding: 5px 0px 0px 0px;
	}`]
})

export class NavigatorBarComponent implements OnInit {

    ngOnInit() { }
}