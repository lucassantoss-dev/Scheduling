import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../../core/schedule.service';
import { ScheduleApiInterface } from '../../../domain/model/schedule/schedule-api-interface';
import { ScheduleInterface } from '../../../domain/model/schedule/schedule-interface';
import { PatientService } from '../../../core/patient.service';
import { PatientObjectApiInterface } from '../../../domain/model/patient/patient-object-api-interface';
import { format, getDay, parse, parseISO, startOfDay, setHours } from 'date-fns';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PhysioterapistService } from '../../../core/physioterapist.service';
import { PhysioterapistObjectApiInterface } from '../../../domain/model/physioterapist/physioterapist-object-api-interface';
import { SubcategoryService } from '../../../core/subcategory.service';
import { SubcategoryObjectApiInterface } from '../../../domain/model/subcategory/subcategory-object-api-interface';


@Component({
	selector: 'app-scheduling-view',
	templateUrl: './scheduling-view.component.html',
	styleUrl: './scheduling-view.component.scss'
})
export class SchedulingViewComponent implements OnInit {
	public schedulesByDate: { [key: number]: ScheduleInterface[] } = {};
	public filteredSchedules: { [key: number]: ScheduleInterface[] } = {};
	public currentDate: Date = new Date();
	public daysOfWeek: string[] = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
	public filters = {
		dayOfWeek: '',
		patientName: '',
		specificDate: ''
	};

	constructor(
		private scheduleService: ScheduleService,
		private patientService: PatientService,
		private physioterapistService: PhysioterapistService,
		private subcategoryService: SubcategoryService
	) { }

	ngOnInit(): void {
		this.getAllSchedules();
	}

	getPatientName(patientId: string) {
		return this.patientService.getPatientsById(patientId).pipe(
			map((patient: PatientObjectApiInterface) => patient.data ? patient.data.name : patientId),
			catchError(() => of(patientId))
		);
	}

	getPhysioterapistName(physioId: string) {
		return this.physioterapistService.getPhysioById(physioId).pipe(
			map((physio: PhysioterapistObjectApiInterface) => physio.data ? physio.data.name : physioId),
			catchError(() => of(physioId))
		);
	}

	getSubcategoryName(subcategoryId: string) {
		return this.subcategoryService.getSubcategoryById(subcategoryId).pipe(
			map((subcategory: SubcategoryObjectApiInterface) => subcategory.data ? subcategory.data.subcategory_name : subcategoryId),
			catchError(() => of(subcategoryId))
		);
	}

	getAllSchedules(): void {
		this.scheduleService.getAllSchedules().subscribe({
			next: (schedule: ScheduleApiInterface) => {
				const scheduleObservables = schedule.data.map((infos: ScheduleInterface) => {
					const parsedDate = new Date(infos.date);
					parsedDate.setDate(parsedDate.getDate() + 1); 
					const formattedDate = format(parsedDate, 'dd/MM/yyyy');
					const dayOfWeek = getDay(parsedDate);

					if (parsedDate >= this.currentDate) {
						return forkJoin({
							patient: this.getPatientName(infos.patient),
							physiotherapist: this.getPhysioterapistName(infos.physiotherapist),
							subcategory: this.getSubcategoryName(infos.subcategory)
						}).pipe(
							map(({ patient, physiotherapist, subcategory }) => ({
								...infos,
								patient,
								date: formattedDate,
								hour: infos.hour,
								physiotherapist,
								subcategory,
								dayOfWeek
							}))
						);
					} else {
						return of(null);
					}
				});

				forkJoin(scheduleObservables).subscribe({
					next: (scheduleInformations) => {
						scheduleInformations
							.filter(schedule => schedule !== null)
							.forEach(schedule => {
								if (!schedule) {
									return;
								}
								if (!this.schedulesByDate[schedule.dayOfWeek]) {
									this.schedulesByDate[schedule.dayOfWeek] = [];
								}
								this.schedulesByDate[schedule.dayOfWeek].push(schedule as ScheduleInterface);
							});

						this.applyFilters();
					},
					error: (err) => {
						console.error('Error processing schedules', err);
					}
				});
			},
			error: () => {
				console.error('Error fetching schedules');
			}
		});
	}


	applyFilters(): void {
		this.filteredSchedules = {};
		for (let dayOfWeek in this.schedulesByDate) {
			this.filteredSchedules[dayOfWeek] = this.schedulesByDate[dayOfWeek].filter(schedule => {
				if (!schedule) {
					return false;
				}

				const dayOfWeekMatch = this.filters.dayOfWeek === '' || schedule.dayOfWeek === +this.filters.dayOfWeek;
				const patientNameMatch = this.filters.patientName === '' || schedule.patient.toLowerCase().includes(this.filters.patientName.toLowerCase());
				const specificDateMatch = this.filters.specificDate === '' || schedule.date === format(parseISO(this.filters.specificDate), 'dd/MM/yyyy');
				return dayOfWeekMatch && patientNameMatch && specificDateMatch;
			});
		}
	}

	datesAreEqual(date1: string, date2: string): boolean {
		const isoDate1 = startOfDay(parseISO(date1));
		const isoDate2 = startOfDay(parseISO(date2));
		return isoDate1.getTime() === isoDate2.getTime();
	}
}
