import { cy, describe, it } from 'local-cypress';

describe('App', (): void => {
  it('should display "Hello world"', (): void => {
    cy.visit('/');
    cy.contains('p', 'Hello world');
  });
});
