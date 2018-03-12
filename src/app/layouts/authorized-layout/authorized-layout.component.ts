import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-authorized-layout',
  templateUrl: './authorized-layout.component.html',
  styleUrls: ['./authorized-layout.component.scss'],
})
export class AuthorizedLayoutComponent {
  public user$: Observable<any | null>;

  constructor(public authService: AuthService) {
    this.user$ = this.authService.user$.asObservable();
  }
}
