import { BasePage } from "./basePage";

export class ContactUs extends BasePage {
  constructor() {
    super();
  }

  public enterFirstName(firstName: string) {
    return cy.typeInTheTextField("user_first_name", firstName);
  }

  public enterLastName(lastName: string) {
    return cy.typeInTheTextField("user_last_name", lastName);
  }

  public enterEmail(email: string) {
    return cy.typeInTheTextField("user_email", email);
  }

  public enterPhone(phone: string) {
    return cy.typeInTheTextField("user_phone", phone);
  }

  public submitForm() {
    return cy.get("button[type='submit']").click();
  }

  public getWarningMessage() {
    return cy.get(
      "span#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone-error span"
    );
  }
}
