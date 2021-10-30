# Cypress coverage config-overrides

Cypress coverage config-overrides is a `react-app-rewired` config override that
enables coverage for Cypress tests.

## Credit

This package was inspired by
[`@cypress/instrument-cra`](https://github.com/cypress-io/instrument-cra) and
much of this package's logic is pulled from `@cypress/instrument-cra`'s source
code.

`@cypress/instrument-cra`'s path resolution does not support Yarn 2
plug-and-play, so this package attempts to achieve the same goal by replacing
`@cypress/instrument-cra`'s path resolution with that of `react-app-rewired`'s.
