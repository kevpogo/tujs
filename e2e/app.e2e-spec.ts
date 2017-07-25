import { TujsPage } from './app.po';

describe('tujs App', () => {
  let page: TujsPage;

  beforeEach(() => {
    page = new TujsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
