import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenViewComponent } from './token-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../../../../shared/shared.module';
import { MaterialModule } from '../../../../../../material-module';

describe('TokenViewComponent', () => {
  let component: TokenViewComponent;
  let fixture: ComponentFixture<TokenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TokenViewComponent],
      imports: [
        HttpClientTestingModule,
				RouterTestingModule,
        BrowserAnimationsModule,
				SharedModule,
				MaterialModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TokenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
