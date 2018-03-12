import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo() {
    return browser.get('/');
  }

  public getRouterOutlet() {
    return element(by.css('router-outlet'));
  }
}
