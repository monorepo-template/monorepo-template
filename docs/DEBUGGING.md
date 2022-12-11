# Debugging

## Application coverage reports are inaccurate

Your application's coverage report can be found on its `window.__coverage__`
object when you run `yarn packages/${application-name} run cypress:start`. If
your generated LCOV coverage report does not match your `window.__coverage__`
object, delete the coverage cache located at
`/packages/${packages-name}/.nyc_output`.
