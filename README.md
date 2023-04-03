- Tests are run on the command line using `npm test`

- Tests are run against http://app.baupal.de/ as the default. If there is a need to change the host, type a new baseUrl before the test command, like this:
```CYPRESS_BASE_URL=https://staging.app.com npm test```

- Tests can be configured to run various browser and OS combinations against a testing service SauceLabs. I've included
    - Edge, Windows 10
    - Chrome latest, Windows 10

According to the task there should be IE10, Windows 8; Chrome latest, Windows 8; Safari latest, Mac OS latest
However Windows 8 is not available in SauceLabs. Cypress does not support IE browser. It is possible to use webkit to test Safari, but I need more time to set it up correctly.

- Saucelabs credentials are passed as environment variables, stored in `~/.bash_profile`
