import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiopulmonaryAssessmentFormComponent } from './cardiopulmonary-assessment-form.component';
import { MaterialModule } from '../../../../../../../material-module';
import { ReactiveFormsModule } from '@angular/forms';

describe('CardiopulmonaryAssessmentFormComponent', () => {
	let component: CardiopulmonaryAssessmentFormComponent;
	let fixture: ComponentFixture<CardiopulmonaryAssessmentFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				CardiopulmonaryAssessmentFormComponent
			],
			imports: [
				MaterialModule,
				ReactiveFormsModule
			]
		})
			.compileComponents();

		fixture = TestBed.createComponent(CardiopulmonaryAssessmentFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
