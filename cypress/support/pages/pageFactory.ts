import { PAGES } from "../constants/types";
import { ContactUs } from "./contactUsPage";
import { HomePage } from "./homePage";
import { OurWork } from "./ourWorkPage";

export class PageFactory {
  static getPage(pageName: PAGES) {
    switch (pageName) {
      case PAGES.HOME:
        return new HomePage();
      case PAGES.CONTACT_US:
        return new ContactUs();
      case PAGES.OUR_WORK:
        return new OurWork();
      default:
        return new HomePage();
    }
  }
}
