import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailComponent } from './patient-detail.component';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../../../../../core/patient.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PatientDetailComponent', () => {
  let component: PatientDetailComponent;
  let fixture: ComponentFixture<PatientDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientDetailComponent],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        PatientService,
        {
					provide: ActivatedRoute,
					useValue: { snapshot: { params: { id: '1' } } }
				}
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
