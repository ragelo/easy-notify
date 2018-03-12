import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { AuthService } from '../../shared/services/auth.service';

import { AuthorizedLayoutComponent } from './authorized-layout.component';

describe('AuthorizedLayoutComponent', () => {
  let component: AuthorizedLayoutComponent;
  let fixture: ComponentFixture<AuthorizedLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedLayoutComponent ],
      imports: [ RouterTestingModule, HttpClientModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ AuthService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
