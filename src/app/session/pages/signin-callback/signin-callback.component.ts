import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-signin-callback',
  template: `<p>Processing...</p>`
})
export class SigninCallbackComponent implements OnDestroy {
  private routeFragmentSubscription: Subscription;

  constructor(private route: ActivatedRoute, private authService: AuthService) {
    this.routeFragmentSubscription = this.route.fragment.subscribe( (fragment) => {
      const f = fragment.match(/^(.*?)&/);
      if (f) {
        const token: string = f[1].replace('id_token=', '');
        this.authService.signInFinish(token);
      }
    });
  }

  ngOnDestroy() {
    this.routeFragmentSubscription.unsubscribe();
  }
}
