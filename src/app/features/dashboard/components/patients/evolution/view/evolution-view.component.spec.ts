import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionViewComponent } from './evolution-view.component';

describe('EvolutionViewComponent', () => {
  let component: EvolutionViewComponent;
  let fixture: ComponentFixture<EvolutionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvolutionViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvolutionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
