/// <reference types="cypress" />
// ***********************************************
import { data as mockIngredients } from '../e2e/ingredients.json';

export const stubIngredientsAPI = () => {
  cy.intercept(
    'GET',
    'https://norma.nomoreparties.space/api/ingredients',
    (req) => {
      req.reply(mockIngredients);
    }
  );
};
