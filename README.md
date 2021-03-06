# test-chaining-calculator

> This is an exercise to build a functioning calculator with a web based user interface.

## How to run?

In order to preview output, open app/index.html

## Demo
A working version of the app can be viewed here:
https://robreczarek.github.io/test-chaining-calculator/app/

## How to test?

In order to test the code via the web browser, open test/SpecRunner.html

To test via the command line, run the following:
```bash
npm test
```

To check the code (lint) for consistency with coding standards, run this command:
```bash
npm run lint
```

## TODO


## DONE
* [x] Get Calculator object to work without 'new' operator aka "super linijka"
* [x] Fix UI calculation workflow
* [x] Resolve issue with test suite
* [x] Added ESLint step to npm run lint
* [x] Implement Karma runner into project
* [x] Add Jasmine test suite
* [x] Reformat files to conform to spacing standard
* [x] Move script link references within index.html inside the body tag
* [x] Rename index.js to setup.js
* [x] Break out styles and scripts into their own sub-folders in the app directory
* [x] Add strict mode to all javascript files
* [x] Move UI files into app folder
* [x] When run code `Calculator(3).add(5).mutiply(2).value()` in Google Chrome DevTools opened on this site, tat code should returns `16`
* [x] Don't use `eval` - invent another idea.
* [x] Split modules to couple files (logic, ui, setup)
* [x] Move style to single file
* [x] Move `<script>` tag to the bottom of index.html file
