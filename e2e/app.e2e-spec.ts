import { AppPage } from './app.po';

<<<<<<< HEAD
describe('ycp App', () => {
=======
describe('reminders-view App', () => {
>>>>>>> 5187ad02d36c302f2d1b5a00974ee63b7c22e7a4
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
