import {
  firstName,
  lastName,
  email,
  baseUrl,
} from "../support/constants/constants";
import { NAVIGATION_ITEMS, PAGES } from "../support/constants/types";
import randomstring from "randomstring";
import { PageFactory } from "../support/pages/pageFactory";
import { ContactUs } from "../support/pages/contactUsPage";
import { OurWork } from "../support/pages/ourWorkPage";
import { HomePage } from "../support/pages/homePage";

describe("EPAM Main Application", () => {
  const homePage = PageFactory.getPage(PAGES.HOME) as HomePage;
  const contactUs = PageFactory.getPage(PAGES.CONTACT_US) as ContactUs;
  const ourWork = PageFactory.getPage(PAGES.OUR_WORK) as OurWork;
  const linksAmount = 11;

  before(() => {
    homePage.visitPage();
    homePage.acceptCookie();
  });

  it("Sholud have correct page heading - Home Page", () => {
    homePage.getHeading().should("contain.text", "Engineering the Future");
  });

  it("Sholud contain class opened - Home Page, Location Selection Panel", () => {
    homePage.clickLocationSelectionButton();
    homePage.getLocationSelectionButton().should("have.class", "opened");
  });

  it("Sholud display warning message if entered phone is incorrect - Contact Us Page", () => {
    homePage.clickContactUsButton();
    contactUs.enterFirstName(firstName);
    contactUs.enterLastName(lastName);
    contactUs.enterEmail(email);
    contactUs.enterPhone(randomstring.generate(10));
    contactUs.submitForm();
    contactUs
      .getWarningMessage()
      .should(
        "have.text",
        "Only digits, space, plus, and semicolon are allowed. Maximum number of characters is 50."
      );
  });

  it("Should have 11 links - Our Work Page", () => {
    contactUs.scrollToNavigationBar();
    contactUs.clickOnNavigationItemByText(NAVIGATION_ITEMS.OUR_WORK);
    ourWork.getHorizontalMenuItems().its("length").should("equal", linksAmount);
  });

  it("Should have correct url - Our Work Page", () => {
    ourWork.getCurrentUrl().should("equal", `${baseUrl}our-work`);
  });
});
