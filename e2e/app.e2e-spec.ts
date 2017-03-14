import { CopyNicefishPage } from './app.po';

describe('copy-nicefish App', () => {
  let page: CopyNicefishPage;

  beforeEach(() => {
    page = new CopyNicefishPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
