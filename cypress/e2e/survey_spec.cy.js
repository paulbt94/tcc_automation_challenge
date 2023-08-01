/// <reference types="Cypress" />
import tcc_commonElements_PO from "../support/selectors/tcc_commonElements_PO"
import tcc_survey_basicInformation_PO from "../support/selectors/tcc_survey_basicInformation_PO"
import tcc_survey_questions_PO from "../support/selectors/tcc_survey_questions_PO";
import tcc_survey_additionalInformation_PO from "../support/selectors/tcc_survey_additionalInformation_PO";

describe('TCC Survey', () => {
    beforeEach(() => {
        cy.visit('https://surveyrc.taxcreditco.com/automation-challenge');
        cy.get(tcc_commonElements_PO.tccHeaderLogo).should('be.visible');
    });

    it('Submit survey', () => {
        cy.get(tcc_survey_basicInformation_PO.surveyStartLabel).should('be.visible');
        // Using cypress commands I added the logic behind to fill the survey inputs
        // so I only have to pass the parameters to reduce code in the test itself
        cy.fillBasicInfoSurvey('John', 'Doe', 'tcctest@yopmail.com', '123 Test Street', 'Test City', '10101');
        cy.get(tcc_commonElements_PO.tccSurveyNextButton).click();

        cy.get(tcc_survey_questions_PO.surveyQuestionsLabel).should('be.visible');
        // Here I added another cypress command to select No option on all questions and avoid many lines of code on the test
        cy.selectNoSurveyAnswers();
        cy.get(tcc_commonElements_PO.tccSurveyNextButton).click();

        cy.get(tcc_survey_additionalInformation_PO.surveyAdditionalInfoLabel).should('be.visible')
        cy.get(tcc_commonElements_PO.tccSurveyNextButton).click();

        cy.origin('https://www.experian.com', () => {
            cy.url().should('contain', 'https://www.experian.com/employer-services')
          })
    });
});

