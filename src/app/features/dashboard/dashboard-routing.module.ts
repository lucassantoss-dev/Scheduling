import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'home',
				component: HomeComponent,
			},
			{
				path: 'patients',
				loadChildren: () => import('./components/patients/patients.module').then(m => m.PatientsModule)
			},
      {
				path: 'schedule-hours',
				loadChildren: () => import('./components/schedule/schedule.module').then(m => m.ScheduleModule)
			},
			{
				path: '**',
				redirectTo: 'home',
				pathMatch: 'full'
			},
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
