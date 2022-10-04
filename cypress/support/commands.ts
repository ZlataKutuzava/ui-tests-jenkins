/// <reference types="cypress" />

Cypress.Commands.add(
  "typeInTheTextField",
  (fieldName: string, fieldValue: string): void => {
    cy.get(`input[name='${fieldName}']`).type(fieldValue);
  }
);
