# Adding a React application

To add a new React application,

1. Create a copy of the `/packages/example-react-application` directory and name
   it `/packages/${application-name}`.
2. In `/packages/${application-name}/public/index.html`, replace the `title`
   with your application's title.
3. In `/packages/${application-name}/public/manifest.json`, replace the `name`
   and `short_name` properties with your application's name and short name.
4. In `/packages/${application-name}/cypress.json`, replace the `projectId`
   property with your application's Cypress project ID.
5. In `/packages/${application-name}/package.json`, replace the `name` property
   with `@${repository-organization}/${application-name}`.
6. Create a copy of `/.github/workflows/example-react-application.yml` and name
   it `/.github/workflows/${application-name}.yml`.
7. In `/.github/workflows/${application-name}.yml`, replace the value of the
   `jobs['sentry-release'].steps[1].env.SENTRY_ORG` property with your Sentry
   organization slug.
8. In `/.github/workflows/${application-name}.yml`, replace the value of the
   `jobs['sentry-release'].steps[1].env.SENTRY_PROJECT` property with your
   Sentry project slug.
9. In `/.github/workflows/${application-name}.yml`'s
   `jobs['cloudflare-purge'].steps[0].run` property's `curl` `data` `files`
   array, replace the preconfigured URLs with your application's URLs.
10. In `/.github/workflows/${application-name}.yml`'s `on.pull_request.paths`
    and `on.push.paths` properties:
    1. Replace `'.github/workflows/example-react-application.yml'` with
       `'.github/workflows/${application-name}.yml'`.
    2. Replace `'packages/example-react-application/**/*'` with
       `'packages/${application-name}/**/*'`.
    3. Remove `'packages/example-react-module/**/*'`.
    4. If your new application depends on any monorepo modules, add the paths to
       those modules in the format `'packages/${module-name}/**/*'`.
11. In the root `/README.md` file, add a workflow status badge for the new
    application:
    ```md
    [![${Application name}](https://github.com/${repository-organization}/${repository-name}/actions/workflows/${application-name}.yml/badge.svg?branch=main&event=push)](https://github.com/${repository-organization}/${repository-name}/actions/workflows/${application-name}.yml)
    ```
12. In the root `/README.md` file, add the documentation for your application's
    scripts:

    ```md
    ## ${Application name}

    - To build the application, run
      `yarn packages/${application-name} run build`.
    - To report Cypress's and Jest's combined test coverage, run
      `yarn packages/${application-name} run coverage`. The combined report
      will be located in `/packages/${application-name}/coverage/`.
    - To end-to-end test your application, run
      `yarn packages/${application-name} run cypress:start` to first run the
      development server with code coverage reporting enabled, then run
      `yarn packages/${application-name} run cypress:run`.
    - To lint your changes to the application, run
      `yarn packages/${application-name} run eslint`.
    - To unit test your changes to the application, run
      `yarn packages/${application-name} run jest`.
    - To unit test your changes to the application in watch mode, run
      `yarn packages/${application-name} run jest:watch`.
    - To start the application development server, run
      `yarn packages/${application-name} run start`.
    ```

13. If this was the first time an application was added to your repository, also
    follow these additional steps:
    1. If you are proxying your application through Cloudflare:
       1. If you only need one Cloudflare API token, add a
          `CLOUDFLARE_API_TOKEN` GitHub secret that contains that token.
       2. If you need multiple Cloudflare API tokens, add a
          `CLOUDFLARE_${APPLICATION_NAME}_API_TOKEN` GitHub secret and replace
          the value of `/.github/workflows/${application-name}.yml`'s
          `jobs['cloudflare-purge'].steps[0].env.CLOUDFLARE_API_TOKEN` property
          with `${{ secrets.CLOUDFLARE_${APPLICATION_NAME}_API_TOKEN }}`.
       3. Add a `CLOUDFLARE_ZONE_ID` GitHub secret that contains your Cloudflare
          zone ID.
    2. If you are not proxying your application through Cloudflare, remove
       `/.github/workflows/${application-name}.yml`'s `cloudflare-purge` job.
    3. If you only need one Cypress record key, add a `CYPRESS_RECORD_KEY`
       GitHub secret that contains that key.
    4. If you need multiple Cypress record keys, add a
       `CYPRESS_${APPLICATION_NAME}_RECORD_KEY` GitHub secret and replace the
       value of `/.github/workflows/${application-name}.yml`'s
       `jobs.cypress.steps[3].env.CYPRESS_RECORD_KEY` property with
       `${{ secrets.CYPRESS_${APPLICATION_NAME}_RECORD_KEY }}`.
    5. If you are monitoring your workflow efficacy with Datadog:
       1. If you only need one Datadog API key, add a `DATADOG_API_KEY` GitHub
          secret that contains that key.
       2. If you need multiple Datadog API keys, add a
          `DATADOG_${APPLICATION_NAME}_API_KEY` GitHub secret and replace the
          value of `/.github/workflows/${application-name}.yml`'s
          `jobs.jest.services['datadog-agent'].env.DD_API_KEY` property with
          `${{ secrets.DATADOG_${APPLICATION_NAME}_API_KEY }}`.
    6. If you are not monitoring your workflow efficacy with Datadog, remove
       `/.github/workflows/${application-name}.yml`'s `jobs.jest.services`
       entry.
    7. Add a `SENTRY_AUTH_TOKEN` GitHub secret that contains your Sentry
       authorization token.
