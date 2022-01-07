# Jest preset

Jest preset for monorepo templates

## Common problems

```
TypeError: Cannot read property 'cwd' of undefined
  at Object.getCacheKey
```

This error occurs when `babel-jest` and `jest` have different major versions.
Resolve this by either upgrading one (preferred) or downgrading the other (if
necessary) such that they share a major version.
