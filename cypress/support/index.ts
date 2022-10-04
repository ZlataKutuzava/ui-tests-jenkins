import "./commands";
import '@shelex/cypress-allure-plugin';

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      typeInTheTextField(fieldName: string, fieldValue: string): void;
    }
  }
}
