import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-signin',
  template: '<p></p>',
})
export class SigninComponent {

  constructor(private authService: AuthService) {
    this.authService.signInStart();
  }
}
