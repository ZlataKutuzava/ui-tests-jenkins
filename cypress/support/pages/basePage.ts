import { NAVIGATION_ITEMS } from "../constants/types";

export class BasePage {
  constructor() {}

  public getPageTitle() {
    return cy.title();
  }

  public getCurrentUrl() {
    return cy.url();
  }

  public clickOnNavigationItemByText(item: NAVIGATION_ITEMS) {
    return cy.contains(item).click({force: true});
  }

  public scrollToNavigationBar() {
    return cy.get('nav.top-navigation-ui').scrollIntoView();
  }
}
