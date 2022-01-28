# Monorepo template

[![Application](https://github.com/monorepo-template/monorepo-template/actions/workflows/application.yml/badge.svg?branch=main&event=push)](https://github.com/monorepo-template/monorepo-template/actions/workflows/application.yml)
[![Cypress](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/4akrvv/main&label=Cypress&style=flat)](https://dashboard.cypress.io/projects/4akrvv/runs)

[![Module](https://github.com/monorepo-template/monorepo-template/actions/workflows/module.yml/badge.svg?branch=main&event=push)](https://github.com/monorepo-template/monorepo-template/actions/workflows/module.yml)
[![version](https://img.shields.io/npm/v/@monorepo-template/module.svg?label=module)](https://www.npmjs.com/package/@monorepo-template/module)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/@monorepo-template/module.svg)](https://www.npmjs.com/package/@monorepo-template/module)
[![downloads](https://img.shields.io/npm/dt/@monorepo-template/module.svg)](https://www.npmjs.com/package/@monorepo-template/module)

## Documentation

- [Getting started](https://github.com/monorepo-template/monorepo-template/blob/main/docs/GETTING-STARTED.md)
- [Adding an application](https://github.com/monorepo-template/monorepo-template/blob/main/docs/APPLICATION.md)
- [Adding a module](https://github.com/monorepo-template/monorepo-template/blob/main/docs/MODULE.md)
- [Debugging](https://github.com/monorepo-template/monorepo-template/blob/main/docs/DEBUGGING.md)
- [Contributing](https://github.com/monorepo-template/monorepo-template/blob/main/docs/CONTRIBUTING.md)

## Application

- To build the application, run `yarn application:build`.
- To report Cypress's and Jest's combined test coverage, run
  `yarn application:coverage`. The combined report will be located in
  `/packages/application/coverage/`.
- To end-to-end test your application, run `yarn application:cypress:start` to
  first run the development server with code coverage reporting enabled, then
  run `yarn application:cypress`.
- To lint your changes to the application, run `yarn application:eslint`.
- To unit test your changes to the application, run `yarn application:jest`.
- To unit test your changes to the application in watch mode, run
  `yarn application:jest:watch`.
- To start the application development server, run `yarn application:start`.

## Module

- To lint your changes to the module, run `yarn module:eslint`.
- To unit test your changes to the module, run `yarn module:jest`.
- To unit test your changes to the module in watch mode, run
  `yarn module:jest:watch`.
- To build the module, run `yarn module:rollup`.
- To build the module in watch mode, run `yarn module:rollup:watch`.
