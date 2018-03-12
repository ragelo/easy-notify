import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthorizedLayoutComponent} from './layouts/authorized-layout/authorized-layout.component';
import {GuestLayoutComponent} from './layouts/guest-layout/guest-layout.component';
import {ProfileComponent} from './profile/profile.component';
import {IsAuthorizedGuard} from './session/guards/is-authorized.guard';
import {IsUnauthorizedGuard} from './session/guards/is-unauthorized.guard';
import {NotFoundComponent} from './session/pages/not-found/not-found.component';
import {SigninCallbackComponent} from './session/pages/signin-callback/signin-callback.component';
import {SigninComponent} from './session/pages/signin/signin.component';
import {SignupComponent} from './session/pages/signup/signup.component';

const AppRoutes: Routes = [{
  path: '',
  component: AuthorizedLayoutComponent,
  canActivate: [IsAuthorizedGuard],
  children: [{
    path: 'dashboard',
    children: [{
      path: '',
      component: DashboardComponent,
    }],
  }, {
    path: 'profile',
    children: [{
      path: '',
      component: ProfileComponent,
    }],
  }, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  }],
}, {
  path: '',
  component: GuestLayoutComponent,
  canActivate: [IsUnauthorizedGuard],
  children: [{
    path: 'signup',
    canActivate: [IsUnauthorizedGuard],
    component: SignupComponent,
  }, {
    path: 'signin/callback',
    canActivate: [IsUnauthorizedGuard],
    component: SigninCallbackComponent,
  }, {
    path: 'signin',
    canActivate: [IsUnauthorizedGuard],
    component: SigninComponent,
  }, {
    path: 'auth',
    canActivate: [IsUnauthorizedGuard],
    component: SigninComponent,
  }],
}, {
  path: '404',
  component: NotFoundComponent,
}, {
  path: '**',
  redirectTo: '404',
}];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
