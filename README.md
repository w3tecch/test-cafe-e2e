
[![Build Status](https://travis-ci.org/w3tecch/test-cafe-e2e.svg?branch=master)](https://travis-ci.org/w3tecch/test-cafe-e2e)
[![Build status](https://ci.appveyor.com/api/projects/status/bb3h9352qx9w6s6x/branch/master?svg=true)](https://ci.appveyor.com/project/dweber019/test-cafe-e2e/branch/master)
[![devDependencies Status](https://david-dm.org/w3tecch/test-cafe-e2e/dev-status.svg)](https://david-dm.org/w3tecch/test-cafe-e2e?type=dev)

# Installation

[![Greenkeeper badge](https://badges.greenkeeper.io/w3tecch/test-cafe-e2e.svg)](https://greenkeeper.io/)

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

or run all test in live (watch) mode
```bash
npm run live
```

## Write tests

All test are located in `tests/`. See example `estate.ts`.
There is also a helper utility `helper.ts` which can be imported and provides some help.
The `helper.ts` can also be extended.

## I have lots of tests but would like to restart only one (only live command)
When you work on a particular test, just add the `.only` call for it:

```
test.only('Current test', async t => {});
```

Once you are done with it and ready to run the whole suite, just remove the `.only` directive and save the file.

## Documentation

[Here you can find help about element selection (e.g. get text)](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors.html)

[Here you can find help about actions for elements (e.g. clicks)](https://devexpress.github.io/testcafe/documentation/test-api/actions/)

[Here you can find help about Aurelia specific stuff](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/framework-specific-selectors.html#aurelia)

## CI

To run the all test headless use `npm run ci`.

Additional information about CI integrations can be found [here](https://devexpress.github.io/testcafe/documentation/recipes/integrating-testcafe-with-ci-systems/).

## Additional resources
Here a list of additional resources and useful plugins.
- [Simple manual mobile testing](https://devexpress.github.io/testcafe/documentation/recipes/testing-on-remote-computers-and-mobile-devices.html)
- [Debugging with Visual Studio Code](https://devexpress.github.io/testcafe/documentation/recipes/debugging-with-visual-studio-code.html)
- [Browser support](https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/browser-support.html)
- [Reporters](https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/reporters.html)
- [BrowserStack](https://github.com/DevExpress/testcafe-browser-provider-browserstack)
- [Electron](https://github.com/DevExpress/testcafe-browser-provider-electron)