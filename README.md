# Monorepo template

[![Monorepo](https://github.com/monorepo-template/monorepo-template/actions/workflows/index.yml/badge.svg?branch=main&event=push)](https://github.com/monorepo-template/monorepo-template/actions/workflows/index.yml)

[![React application](https://github.com/monorepo-template/monorepo-template/actions/workflows/react-application.yml/badge.svg?branch=main&event=push)](https://github.com/monorepo-template/monorepo-template/actions/workflows/react-application.yml)
[![Cypress](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/4akrvv/main&label=Cypress&style=flat)](https://dashboard.cypress.io/projects/4akrvv/runs)

[![React module](https://github.com/monorepo-template/monorepo-template/actions/workflows/react-module.yml/badge.svg?branch=main&event=push)](https://github.com/monorepo-template/monorepo-template/actions/workflows/react-module.yml)
[![downloads](https://img.shields.io/npm/dt/@monorepo-template/react-module.svg)](https://www.npmjs.com/package/@monorepo-template/react-module)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/@monorepo-template/react-module.svg?label=minzipped%20size)](https://www.npmjs.com/package/@monorepo-template/react-module)
[![version](https://img.shields.io/npm/v/@monorepo-template/react-module.svg?label=version)](https://www.npmjs.com/package/@monorepo-template/react-module)

## Documentation

- [Getting started](https://github.com/monorepo-template/monorepo-template/blob/main/docs/GETTING_STARTED.md)
- [Adding an React application](https://github.com/monorepo-template/monorepo-template/blob/main/docs/REACT_APPLICATION.md)
- [Adding a React module](https://github.com/monorepo-template/monorepo-template/blob/main/docs/REACT_MODULE.md)
- [Debugging](https://github.com/monorepo-template/monorepo-template/blob/main/docs/DEBUGGING.md)
- [Contributing](https://github.com/monorepo-template/monorepo-template/blob/main/docs/CONTRIBUTING.md)

## Packages

### React application

- To build the application, run `yarn react-application:build`.
- To report Cypress's and Jest's combined test coverage, run
  `yarn react-application:coverage`. The combined report will be located in
  `/packages/react-application/coverage/`.
- To end-to-end test your application, run
  `yarn react-application:cypress:start` to first run the development server
  with code coverage reporting enabled, then run `yarn application:cypress:run`.
- To lint your changes to the application, run `yarn react-application:eslint`.
- To unit test your changes to the application, run
  `yarn react-application:jest`.
- To unit test your changes to the application in watch mode, run
  `yarn react-application:jest:watch`.
- To start the application development server, run
  `yarn react-application:start`.

### React module

- To lint your changes to the module, run `yarn react-module:eslint`.
- To automatically fix lint errors in the module, run
  `yarn react-module:eslint:fix`.
- To unit test your changes to the module, run `yarn react-module:jest`.
- To unit test your changes to the module in watch mode, run
  `yarn react-module:jest:watch`.
- To build the module, run `yarn react-module:rollup`.
- To build the module in watch mode, run `yarn react-module:rollup:watch`.
