# Adding a React module

To add a new React module,

1. Create a copy of the `/packages/example-react-module` directory and name it
   `/packages/${module-name}`.
2. In `/packages/${module-name}/package.json`:
   1. Replace the `name` property's value with
      `@${repository-organization}/${module-name}`.
   2. Replace the `author` property's value with your name and email address.
   3. Replace the `description` property's value with your module's description.
   4. Replace the `homepage` property's value with your module's homepage URL.
   5. Replace the `bugs.email` property's value with your email address.
   6. Replace the `bugs.url` property's value with your module's bug tracker
      URL.
   7. Replace the `repository.url` property's value with your repository's URL.
3. Create a copy of `/.github/workflows/example-react-module.yml` and name it
   `/.github/workflows/${module-name}.yml`.
4. If you are not publishing this module to NPM, remove
   `/.github/workflows/${module-name}.yml`'s `jobs.npm` entry.
5. In the root `/README.md` file, add a status badges for the new module:
   1. If you are publishing this module to NPM:
      ```md
      [![${Module name}](https://github.com/${repository-organization}/${repository-name}/actions/workflows/${module-name}.yml/badge.svg?branch=main&event=push)](https://github.com/${repository-organization}/${repository-name}/actions/workflows/${module-name}.yml)
      [![downloads](https://img.shields.io/npm/dt/@${repository-organization}/${module-name}.svg)](https://www.npmjs.com/package/@${repository-organization}/${module-name})
      [![minzipped size](https://img.shields.io/bundlephobia/minzip/@${repository-organization}/${module-name}.svg?label=minzipped%20size)](https://www.npmjs.com/package/@${repository-organization}/${module-name})
      [![version](https://img.shields.io/npm/v/@${repository-organization}/${module-name}.svg?label=version)](https://www.npmjs.com/package/@${repository-organization}/${module-name})
      ```
   2. If you are not publishing this module to NPM:
      ```md
      [![${Module name}](https://github.com/${repository-organization}/${repository-name}/actions/workflows/${module-name}.yml/badge.svg?branch=main&event=push)](https://github.com/${repository-organization}/${repository-name}/actions/workflows/${module-name}.yml)
      ```
6. In the root `/README.md` file, add the documentation for your module's
   scripts:

   ```md
   ## ${Module name}

   - To lint your changes to the module, run
     `yarn packages/${module-name} run eslint`.
   - To automatically fix lint errors in the module, run
     `yarn packages/${module-name} run eslint:fix`.
   - To unit test your changes to the module, run
     `yarn packages/${module-name} run jest`.
   - To unit test your changes to the module in watch mode, run
     `yarn packages/${module-name} run jest:watch`.
   - To build the module, run `yarn packages/${module-name} run rollup`.
   - To build the module in watch mode, run
     `yarn packages/${module-name} run rollup:watch`.
   ```

7. If this was the first time a module was added to your repository, also
   follow these additional steps:
   1. If you are publishing any module's to NPM, add a `NPM_AUTH_TOKEN` GitHub
      secret that contains your NPM auth token.
