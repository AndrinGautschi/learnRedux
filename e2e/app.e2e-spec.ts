import { LearnReduxPage } from './app.po';

describe('learn-redux App', function() {
  let page: LearnReduxPage;

  beforeEach(() => {
    page = new LearnReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
