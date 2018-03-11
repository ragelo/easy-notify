import { TestBed, inject } from '@angular/core/testing';
import {AuthService} from '../services/auth.service';

import {TokenInterceptor} from './token-interceptor';

describe('TokenInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, TokenInterceptor]
    });
  });

  it('should be created', inject([TokenInterceptor], (service: TokenInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
