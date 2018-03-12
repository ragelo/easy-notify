import {HttpClientModule} from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule ],
      providers: [ AuthService ],
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
