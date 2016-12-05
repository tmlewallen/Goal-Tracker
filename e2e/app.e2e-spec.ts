import { GoalTrackerPage } from './app.po';

describe('goal-tracker App', function() {
  let page: GoalTrackerPage;

  beforeEach(() => {
    page = new GoalTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
