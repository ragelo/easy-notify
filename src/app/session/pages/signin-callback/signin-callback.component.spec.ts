import {HttpClientModule} from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../../shared/services/auth.service';

import { SigninCallbackComponent } from './signin-callback.component';

describe('SigninCallbackComponent', () => {
  let component: SigninCallbackComponent;
  let fixture: ComponentFixture<SigninCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninCallbackComponent ],
      imports: [ RouterTestingModule, HttpClientModule ],
      providers: [ AuthService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
