import { AquaiGuiPage } from './app.po';

describe('aquai-gui App', () => {
  let page: AquaiGuiPage;

  beforeEach(() => {
    page = new AquaiGuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
