import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { MaterialModule } from '../../material-module';
import { LandingPageComponent } from './landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';


@NgModule({
	declarations: [
		LandingPageComponent,
		HeaderComponent,
		AboutComponent,
		FooterComponent,
		ServicesComponent
	],
	imports: [
		CommonModule,
		LandingPageRoutingModule,
		MaterialModule
	],
	exports: [
		HeaderComponent
	]
})
export class LandingPageModule { }
