import { baseUrl } from "../constants/constants";
import { NAVIGATION_ITEMS } from "../constants/types";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
  protected url!: string;

  constructor() {
    super();
  }

  public visitPage() {
    cy.visit(baseUrl);
  }

  public getHeading() {
    return cy.get("h2.title-slider__title");
  }

  public acceptCookie() {
    return cy.get("button#onetrust-accept-btn-handler").click();
  }

  public getLocationSelectionButton() {
    return cy.get("button.location-selector__button");
  }

  public clickLocationSelectionButton() {
    return this.getLocationSelectionButton().click({force: true});
  }

  public clickOnNavigationItemByText(item: NAVIGATION_ITEMS) {
    return cy
      .contains(item)
      .click();
  }

  public clickContactUsButton() {
    return cy.contains("CONTACT US").click();
  }
}
