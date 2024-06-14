import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenFormComponent } from './token-form.component';
import { MaterialModule } from '../../../../../../material-module';
import { ReactiveFormsModule } from '@angular/forms';

describe('TokenFormComponent', () => {
  let component: TokenFormComponent;
  let fixture: ComponentFixture<TokenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TokenFormComponent],
      imports: [
        MaterialModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TokenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
