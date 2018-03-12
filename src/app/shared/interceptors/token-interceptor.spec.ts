import {HttpClientModule} from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../services/auth.service';

import {TokenInterceptor} from './token-interceptor';

describe('TokenInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule ],
      providers: [ AuthService, TokenInterceptor ],
    });
  });

  it('should be created', inject([TokenInterceptor], (service: TokenInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
