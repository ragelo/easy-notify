import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-signup',
  template: '<p></p>',
})
export class SignupComponent {

  constructor(private authService: AuthService) {
    this.authService.signUpStart();
  }
}
