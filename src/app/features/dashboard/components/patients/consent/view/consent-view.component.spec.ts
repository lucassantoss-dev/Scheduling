import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentViewComponent } from './consent-view.component';

describe('ConsentViewComponent', () => {
  let component: ConsentViewComponent;
  let fixture: ComponentFixture<ConsentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsentViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
