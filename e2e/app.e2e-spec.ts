import { AsempioPage } from './app.po';

describe('asempio App', function() {
  let page: AsempioPage;

  beforeEach(() => {
    page = new AsempioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
