import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenModalComponent } from './token-modal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PatientService } from '../../../../../../core/patient.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../../../../../../material-module';
import { ReactiveFormsModule } from '@angular/forms';

describe('TokenModalComponent', () => {
  let component: TokenModalComponent;
  let fixture: ComponentFixture<TokenModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TokenModalComponent],
      imports: [
        HttpClientTestingModule,
				MaterialModule,
        ReactiveFormsModule
      ],
      providers: [
        PatientService,
        { provide: MatDialogRef, useValue: {} },
				{ provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TokenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
