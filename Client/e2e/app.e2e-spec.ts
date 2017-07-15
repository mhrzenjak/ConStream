import { DummyAngPage } from './app.po';

describe('dummy-ang App', () => {
  let page: DummyAngPage;

  beforeEach(() => {
    page = new DummyAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
