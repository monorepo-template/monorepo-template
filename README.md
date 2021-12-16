1. Edit your GitHub secrets:
   1. Add `CLOUDFLARE_API_TOKEN` to contain your Cloudflare API token and
      `CLOUDFLARE_ZONE_ID` to contain your Cloudflare zone ID. If you need
      multiple Cloudflare API tokens, give it a unique name and change the
      reference on line 188 of `/.github/workflows/application-push.yml`. If you
      are not proxying your application through Cloudflare, remove lines 172-201
      from `/.github/workflows/application-push.yml`.
   2. Add `CYPRESS_RECORD_KEY` to contain your Cypress record key. If you need
      multiple Cypress record keys, give it a unique name and change the
      reference on line 59 of `/.github/workflows/application-pull-request.yml`
      and line 59 of `/.github/workflows/application-push.yml`.
   3. Add `DATADOG_API_KEY` to contain your DataDog API key. If you need
      multiple DataDog API keys, give it a unique name and change the reference
      on line 108 of `/.github/workflows/application-push.yml`. If you are not
      using DataDog to monitor your workflow efficacy, remove lines 104-112 from
      `/.github/workflows/application-push.yml`.
   4. Add `NPM_AUTH_TOKEN` to contain your NPM auth token. If you are not
      publishing to NPM, remove lines 106-128 from
      `/.github/workflows/module-push.yml`.
   5. Add `SENTRY_AUTH_TOKEN` to contain your Sentry auth token, `SENTRY_ORG` to
      contain your Sentry organization name, and `SENTRY_PROJECT` to contain
      your Sentry project name slug. If you need multiple Sentry projects, give
      it a unique name and change the references on line 162-165 of
      `/.github/workflows/application-push.yml`.
2. Create a copy of `/.github/workflows/application-pull-request.yml` and
   `/.github/workflows/application-push.yml` for each intended application. In
   `application-push.yml`, replace the URLs on lines 194-195 with your
   application's URL. Replace the application and module path in
   `on.<pull_request|push>.paths` with your respective application and module
   paths.
3. Create a copy of `/.github/workflows/module-pull-request.yml` and
   `/.github/workflows/module-push.yml` for each intended module.
4. Edit your application's `public/index.html` file, replacing the `title` with
   your application's title.
5. Edit your application's `public/manifest.json` file, replacing the `name` and
   `short_name` properties with your application's name and short name.
6. Edit your application's `cypress.json` file, replacing the `projectId` with
   your application's Cypress project ID.
7. Edit your application's `package.json` file, replacing the `name` with your
   repository name as the package scope and the package directory as the package
   name.
8. Edit your module's `package.json` file:
   1. Replacing the `name` with your repository name as the package scope and
      the package directory as the package name.
   2. Replace `author` with your name and email address.
   3. Replace `description` with your module's description.
   4. Replace `homepage` with your your module's homepage.
   5. Replace `bugs.email` with your email address and `bugs.url` with your
      repository URL.
   6. Replace `repository.url` with your repository URL.
9. Edit your `LICENSE` file and append with your name or company at the end of
   line 3.
10. Edit your `package.json` file:
    1. Replace the package name with `@` followed by your repository name.
    2. Replace the description with your project description.
    3. Add and remove scripts as needed for each intended application and
       module.
11. Edit the below README by making the following changes:
    1. Change the README title from `Monorepo template` to your project title.
    2. For each application, add a `GitHub Action: Application push` badge, then
       replace `CharlesStover/monorepo-template` with your repository.
    3. For each module, add the `version`, `minzipped size`, `downloads`, and
       `GitHub Action: Module push` badges, then replace
       `CharlesStover/monorepo-template` with your repository and
       `@monorepo-template/module` with your module's package name.
    4. Under `Contributing`, change the `yarn` commands from `application:*` and
       `module:*` to match your workspace names.

---

# Monorepo template

[![GitHub Action: Application push](https://github.com/CharlesStover/monorepo-template/actions/workflows/application-push.yml/badge.svg)](https://github.com/CharlesStover/monorepo-template/actions/workflows/application-push.yml)

[![version](https://img.shields.io/npm/v/@monorepo-template/module.svg?label=module)](https://www.npmjs.com/package/@monorepo-template/module)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/@monorepo-template/module.svg)](https://www.npmjs.com/package/@monorepo-template/module)
[![downloads](https://img.shields.io/npm/dt/@monorepo-template/module.svg)](https://www.npmjs.com/package/@monorepo-template/module)
[![GitHub Action: Module push](https://github.com/CharlesStover/monorepo-template/actions/workflows/module-push.yml/badge.svg?branch=main)](https://github.com/CharlesStover/monorepo-template/actions/workflows/module-push.yml)

## Common pitfalls

### Application coverage reports are inaccurate

Your application's coverage report can be found on its `window.__coverage__`
object when you run `yarn application:cypress:start`. If your generated LCOV
coverage report does not match your `window.__coverage__` object, delete the
coverage cache located at `/packages/application/.nyc_output`,

## Contributing

To contribute to this repository, start by running the following commands.

- To keep Yarn up to date, run `yarn set version latest`.
- To keep dependencies up to date, run `yarn up "*" "@*/*"`.
- If you use VIM, run `yarn sdks vim`.
- If you use Visual Studio Code, run `yarn sdks vscode`.

To test your changes to the repository, run `yarn test`.

### Application

- To build the application, run `yarn application:build`.
- To report Cypress's and Jest's combined test coverage, run
  `yarn application:coverage`. The combined report will be located in
  `/packages/application/coverage/`.
- To end-to-end test your application, run `yarn:cypress:start` to first run the
  development server with code coverage reporting enabled, then run
  `yarn:cypress`.
- To lint your changes to the application, run `yarn application:eslint`.
- To unit test your changes to the application, run `yarn application:jest`.
- To unit test your changes to the application in watch mode, run
  `yarn application:jest:watch`.
- To start the application development server, run `yarn application:start`.

### Module

- To lint your changes to the module, run `yarn module:eslint`.
- To unit test your changes to the module, run `yarn module:jest`.
- To unit test your changes to the module in watch mode, run
  `yarn module:jest:watch`.
- To build the module, run `yarn module:rollup`.
- To build the module in watch mode, run `yarn module:rollup:watch`.
