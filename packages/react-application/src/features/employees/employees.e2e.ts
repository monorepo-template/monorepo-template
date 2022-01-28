/// <reference types="cypress" />

describe('Employees', (): void => {
  it('should display employees', (): void => {
    cy.visit('/employees');
    cy.contains('li', 'Charles Stover');
  });
});
