# Adding a module

To add a new module,

1. Create a copy of the `/packages/module` directory and name it
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
3. Create a copy of `/.github/workflows/module.yml` and name it
   `/.github/workflows/${module-name}.yml`.
4. If you are not publishing this module to NPM, remove
   `/.github/workflows/${module-name}.yml`'s `jobs.npm` entry.
5. If this was the first time a module was added to your repository, also
   follow these additional steps:
   1. If you are publishing any module's to NPM, add a `NPM_AUTH_TOKEN` GitHub
      secret that contains your NPM auth token.
