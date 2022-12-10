# Monorepo template

The monorepo template is a GitHub repository template that preconfigures common
front end dependencies for best practices and abstracts them in an extensible
manner.

| Problem                                          | Goal                                                     |
| ------------------------------------------------ | -------------------------------------------------------- |
| **Front end engineers...**                       | **Front end engineers...**                               |
| ... spend too much time managing configurations. | ... should spend more time writing great applications.   |
| ... only harness a subset of best practices.     | ... have best practices available at no additional cost. |
| ... have difficulty integrating dependencies.    | ... have dependencies integrated seamlessly.             |

The front end ecosystem should _just work_.

## Features

- **Cloudflare purge** for _cache busting_
- **CodeQL** for _security analysis_
- **Cypress** for _end-to-end testing_
- **ESLint** for _linting_
- **GitHub Actions** for _continuous integration_ and _continuous delivery_
- **GitHub Packages** and **NPM** for _package publishing_
- **GitHub Pages** for _static asset deployments_
- **Jest** for _unit testing_
- **Node** (latest) for _compatibility_
- **NYC** for _code coverage reports_
- **Prettier** for _code formatting_
- **React Scripts** for _application development_
- **Rollup** for _module bundling_
- **Sentry release** for _source mapping_
- **TypeScript** for _static typing_
- **Visual Studio Code** for _code editing_
- **Yarn** (latest) for _workspaces_

All with _zero configuration_ and _completely extensible_ if deviation is
desired.

---

[![Monorepo](https://github.com/monorepo-template/monorepo-template/actions/workflows/index.yml/badge.svg?branch=main&event=push)](https://github.com/monorepo-template/monorepo-template/actions/workflows/index.yml)
[![Cron (weekly)](https://github.com/monorepo-template/monorepo-template/actions/workflows/cron--weekly.yml/badge.svg?branch=main&event=push)](https://github.com/monorepo-template/monorepo-template/actions/workflows/cron--weekly.yml)

[![Next application](https://github.com/monorepo-template/monorepo-template/actions/workflows/example-next-application.yml/badge.svg?branch=main&event=push)](https://github.com/monorepo-template/monorepo-template/actions/workflows/example-next-application.yml)

[![React application](https://github.com/monorepo-template/monorepo-template/actions/workflows/example-react-application.yml/badge.svg?branch=main&event=push)](https://github.com/monorepo-template/monorepo-template/actions/workflows/example-react-application.yml)
[![Cypress](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/4akrvv/main&label=Cypress&style=flat)](https://dashboard.cypress.io/projects/4akrvv/runs)

[![React module](https://github.com/monorepo-template/monorepo-template/actions/workflows/example-react-module.yml/badge.svg?branch=main&event=push)](https://github.com/monorepo-template/monorepo-template/actions/workflows/example-react-module.yml)
[![downloads](https://img.shields.io/npm/dt/@monorepo-template/example-react-module.svg)](https://www.npmjs.com/package/@monorepo-template/example-react-module)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/@monorepo-template/example-react-module.svg?label=minzipped%20size)](https://www.npmjs.com/package/@monorepo-template/example-react-module)
[![version](https://img.shields.io/npm/v/@monorepo-template/example-react-module.svg?label=version)](https://www.npmjs.com/package/@monorepo-template/example-react-module)

## Documentation

- [Getting started](https://github.com/monorepo-template/monorepo-template/blob/main/docs/GETTING_STARTED.md)
- [Adding a React application](https://github.com/monorepo-template/monorepo-template/blob/main/docs/REACT_APPLICATION.md)
- [Adding a React module](https://github.com/monorepo-template/monorepo-template/blob/main/docs/REACT_MODULE.md)
- [Contributing](https://github.com/monorepo-template/monorepo-template/blob/main/docs/CONTRIBUTING.md)
- [Debugging](https://github.com/monorepo-template/monorepo-template/blob/main/docs/DEBUGGING.md)
- [Dependencies](https://github.com/monorepo-template/dependencies#monorepo-template-dependencies)

## Packages

### Next application

- To build the application, run
  `yarn packages/example-next-application run build`.
- To end-to-end test your application, run
  `yarn packages/example-next-application run cypress:start` to first run the
  development server with code coverage reporting enabled, then run
  `yarn packages/example-next-application run cypress:run`.
- To lint your changes to the application, run
  `yarn packages/example-next-application run eslint`.
- To unit test your changes to the application, run
  `yarn packages/example-next-application run jest`.
- To unit test your changes to the application in watch mode, run
  `yarn packages/example-next-application run jest:watch`.
- To start the application development server, run
  `yarn packages/example-next-application run start`.

### React application

- To build the application, run
  `yarn packages/example-react-application run build`.
- To report Cypress's and Jest's combined test coverage, run
  `yarn packages/example-react-application run coverage`. The combined report
  will be located in `/packages/example-react-application/coverage/`.
- To end-to-end test your application, run
  `yarn packages/example-react-application run cypress:start` to first run the
  development server with code coverage reporting enabled, then run
  `yarn packages/example-react-application run cypress:run`.
- To lint your changes to the application, run
  `yarn packages/example-react-application run eslint`.
- To unit test your changes to the application, run
  `yarn packages/example-react-application run jest`.
- To unit test your changes to the application in watch mode, run
  `yarn packages/example-react-application run jest:watch`.
- To start the application development server, run
  `yarn packages/example-react-application run start`.

### React module

- To lint your changes to the module, run
  `yarn packages/example-react-module run eslint`.
- To automatically fix lint errors in the module, run
  `yarn packages/example-react-module run eslint:fix`.
- To unit test your changes to the module, run
  `yarn packages/example-react-module run jest`.
- To unit test your changes to the module in watch mode, run
  `yarn packages/example-react-module run jest:watch`.
- To build the module, run `yarn packages/example-react-module run rollup`.
- To build the module in watch mode, run
  `yarn packages/example-react-module run rollup:watch`.
