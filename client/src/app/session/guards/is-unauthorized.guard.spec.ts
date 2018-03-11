import { TestBed, inject } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ClrIconModule} from '@clr/angular';
import {AuthService} from '../../shared/services/auth.service';

import { IsUnauthorizedGuard } from './is-unauthorized.guard';

describe('IsUnauthorizedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClrIconModule, RouterTestingModule],
      providers: [IsUnauthorizedGuard, AuthService],
    });
  });

  it('should ...', inject([IsUnauthorizedGuard], (guard: IsUnauthorizedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
