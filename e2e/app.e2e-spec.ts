import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('restaurant-client App', () => {
  let page: AppPage;
  browser.ignoreSynchronization=true;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Restaurant App!');
  });
});
