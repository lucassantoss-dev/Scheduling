import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SchedulingFormComponent } from '../../shared/scheduling/scheduling-form/scheduling-form.component';
import { ScheduleService } from '../../core/schedule.service';

@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {

	constructor(
		public dialog: MatDialog,
    private scheduleService: ScheduleService
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
      this.scheduleService.patchHourInDate(result.date, result.hour).subscribe({
        next: () => {
        }, error: (error: Error) => {
          console.error('erorr', error);
        }
      })
		})
	}
}
