import { AppPage } from './app.po';

describe('easy-notify App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getRouterOutlet()).toBeTruthy();
  });
});
