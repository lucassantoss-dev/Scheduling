import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SchedulingFormComponent } from '../../shared/scheduling/scheduling-form/scheduling-form.component';

@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
	
	constructor(
		public dialog: MatDialog
	) {

	}

	ngOnInit(): void {
		
	}

	createScheduling(): void {
		const dialogRef = this.dialog.open(SchedulingFormComponent, {
			width: '800px',
			height: '510px',
			disableClose: true
		})

		dialogRef.afterClosed().subscribe(result => {
			console.log('result', result);
		})
	}
}
