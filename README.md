
# Installation

You need to set up your development environment before you can do anything.

Install [Node.js and NPM](https://nodejs.org/en/download/)

- on OSX use [homebrew](http://brew.sh) `brew install node`
- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

Install yarn globally

```bash
npm install yarn -g
```

Then install the dependencies with
```bash
yarn install
```

Then copy the `.env.example` to `.env` and replace the setting in the file with your settings
```bash
cp .env.example .env
```

# Usage

This repository uses the [testcafe](https://devexpress.github.io/testcafe/) library to perform e2e tests.

## Running the tests

You can run all tests by
```bash
npm test
```

or just run a single file by
```bash
npm run test:single <path-to-file>

npm run test:single tests/test-case.spec.ts
```

## Write tests

All test are located in `tests/`. See example `estate.ts`.
There is also a helper utility `helper.ts` which can be imported and provides some help.
The `helper.ts` can also be extended.

## Documentation

[Here you can find help about seleting elements (e.g. get text)](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors.html)

[Here you can find help about actions elements (e.g. clicks)](https://devexpress.github.io/testcafe/documentation/test-api/actions/)

[Here you can find help about Aurelia specific stuff](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/framework-specific-selectors.html#aurelia)

## CI

To run the all test headless use `npm run ci`.

Additional information about CI integrations can be found [here](https://devexpress.github.io/testcafe/documentation/recipes/integrating-testcafe-with-ci-systems/).