import { BasePage } from "./basePage";

export class OurWork extends BasePage {
  constructor() {
    super();
  }

  public getHorizontalMenuItems() {
    return cy.get("a.in-page-navigation__title");
  }
}
