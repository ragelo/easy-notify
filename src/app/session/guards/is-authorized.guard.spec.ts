import { inject, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ClrIconModule} from '@clr/angular';
import {AuthService} from '../../shared/services/auth.service';

import { IsAuthorizedGuard } from './is-authorized.guard';

describe('IsAuthorizedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClrIconModule, RouterTestingModule],
      providers: [IsAuthorizedGuard, AuthService],
    });
  });

  it('should ...', inject([IsAuthorizedGuard], (guard: IsAuthorizedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
