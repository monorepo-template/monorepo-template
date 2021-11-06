# Merge coverage reports

## Install

- `npm install --save-dev @monorepo-template/merge-coverage` or
- `yarn add --dev @monorepo-template/merge-coverage`

## Use

### Command line

Add a merge coverage script to your `package.json` file:

```json
{
  "scripts": {
    "merge-coverage": "merge-coverage ./cypress/coverage ./jest/coverage"
  },
  "devDependencies": {
    "@monorepo-template/merge-coverage": "^1.0.0"
  }
}
```

Execute the script using your favorite package manager:

- `npm run merge-coverage` or
- `yarn merge-coverage`

### Programmatically

Import the `mergeCoverage` function:

```javascript
import mergeCoverage from '@monorepo-template';

await mergeCoverage(['./cypress/coverage', './jest/coverage']);
```

The `mergeCoverage` function accepts a second [options](#options) parameter.

## Options

When merging coverage [programmatically](#programmatically), you may pass the
`mergeCoverage` function an options object.

- `enableLogging` (type: `boolean`; default: `true`) - enables console logs
- `outputDir` (type: `string`; default: `'.nyc_output'`) - the directory to
  which the merged coverage report is written
- `outputFile` (type: `string`; default: `'out.json'`) - the file to which the
  merged coverage report is written
- `workingDirectory` (type: `string`; default: `process.cwd()`) - the working
  directory in which the merge is being performed; file pathing will be relative
  to this value.
