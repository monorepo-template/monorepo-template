/// <reference types="cypress" />

describe('App', (): void => {
  it('should display "Hello world"', (): void => {
    cy.visit('/');
    cy.contains('p', 'Hello world');
  });
});

export default null;
