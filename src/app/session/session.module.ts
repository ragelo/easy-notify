import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClrIconModule } from '@clr/angular';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SigninCallbackComponent } from './pages/signin-callback/signin-callback.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    ClrIconModule,
  ],
  declarations: [NotFoundComponent, SigninComponent, SignupComponent, SigninCallbackComponent],
  exports: [NotFoundComponent],
})
export class SessionModule { }
