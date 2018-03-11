import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthorizedLayoutComponent } from './layouts/authorized-layout/authorized-layout.component';
import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';
import { ProfileModule } from './profile/profile.module';
import { IsAuthorizedGuard } from './session/guards/is-authorized.guard';
import { IsUnauthorizedGuard } from './session/guards/is-unauthorized.guard';
import { SessionModule } from './session/session.module';
import { AuthService } from './shared/services/auth.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    GuestLayoutComponent,
    AuthorizedLayoutComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    HttpClientModule,
    SharedModule,
    SessionModule,
    DashboardModule,
    ProfileModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    IsAuthorizedGuard,
    IsUnauthorizedGuard,
  ],
})
export class AppModule { }
