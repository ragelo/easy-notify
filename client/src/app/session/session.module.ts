import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClrIconModule } from '@clr/angular';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SessionPagesRootComponent } from './pages/session-pages-root.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    ClrIconModule,
  ],
  declarations: [NotFoundComponent, SigninComponent, SignupComponent, SessionPagesRootComponent],
  exports: [NotFoundComponent],
})
export class SessionModule { }
