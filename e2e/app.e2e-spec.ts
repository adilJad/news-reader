import { NewsReaderPage } from './app.po';

describe('news-reader App', () => {
  let page: NewsReaderPage;

  beforeEach(() => {
    page = new NewsReaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
