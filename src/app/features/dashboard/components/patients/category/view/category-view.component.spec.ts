import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryViewComponent } from './category-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../../../../shared/shared.module';
import { MaterialModule } from '../../../../../../material-module';

describe('CategoryViewComponent', () => {
  let component: CategoryViewComponent;
  let fixture: ComponentFixture<CategoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryViewComponent],
			imports: [
				HttpClientTestingModule,
				RouterTestingModule,
        BrowserAnimationsModule,
				SharedModule,
				MaterialModule
			],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
