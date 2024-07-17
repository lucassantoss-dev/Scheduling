import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ScheduleFormComponent } from '../form/schedule-form.component';
import { AlertService } from '../../../../../core/alert.service';

@Component({
    selector: 'app-schedule-view',
    templateUrl: './schedule-view.component.html',
    styleUrl: './schedule-view.component.scss'
})
export class ScheduleViewComponent implements OnInit {
    loading: boolean = false;
    dataSource!: MatTableDataSource<any>;
    displayedColumns: string[] = ["codigo", "name", "description", "action"];
    @ViewChild(MatPaginator) paginatior !: MatPaginator;
    @ViewChild(MatSort) sort !: MatSort;

    constructor(
        public dialog: MatDialog,
    ) {
    }

    ngOnInit(): void {
    }

    Filterchange(data: Event): void {
        const value = (data.target as HTMLInputElement).value;
        this.dataSource.filter = value;
    }



    createHour(): void {
        const dialogRef = this.dialog.open(ScheduleFormComponent, {
            width: '900px',
            height: '350px',
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
