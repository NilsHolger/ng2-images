import { Angular2ImagesPage } from './app.po';

describe('angular2-images App', function() {
  let page: Angular2ImagesPage;

  beforeEach(() => {
    page = new Angular2ImagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
