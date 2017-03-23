import { RideSharePage } from './app.po';

describe('ride-share App', function() {
  let page: RideSharePage;

  beforeEach(() => {
    page = new RideSharePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
