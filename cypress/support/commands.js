import tcc_survey_basicInformation_PO from "../support/selectors/tcc_survey_basicInformation_PO"
import tcc_survey_questions_PO from "./selectors/tcc_survey_questions_PO";

Cypress.Commands.add('fillBasicInfoSurvey', (firstName, lastName, email, streetAddress, city, zipCode) => {
    cy.get(tcc_survey_basicInformation_PO.surveyFirstNameInput).type(firstName);
    cy.get(tcc_survey_basicInformation_PO.surveyLastNameInput).type(lastName);
    cy.get(tcc_survey_basicInformation_PO.surveyEmailAddressInput).type(email);
    cy.get(tcc_survey_basicInformation_PO.surveyStreetAddress).type(streetAddress);
    cy.get(tcc_survey_basicInformation_PO.survetCityInput).type(city);
    cy.get(tcc_survey_basicInformation_PO.surveyZipCodeInput).type(zipCode);
});

Cypress.Commands.add('selectNoSurveyAnswers', () => {
    cy.get(tcc_survey_questions_PO.surveyQuestionOneNoButton).click({force: true});
    cy.get(tcc_survey_questions_PO.surveyQuestionTwoNoButton).click({force: true});
    cy.get(tcc_survey_questions_PO.surveyQuestionThreeNoButton).click({force: true});
    cy.get(tcc_survey_questions_PO.surveyQuestionFourNoButton).click({force: true});
    cy.get(tcc_survey_questions_PO.surveyQuestionFiveNoButton).click({force: true});
    cy.get(tcc_survey_questions_PO.surveyQuestionSixNoButton).click({force: true});
});