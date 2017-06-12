# Learning MochaJS and ChaiJS

## Setting up with terminal
* run `npm init`
* run `npm install mocha chai --save-dev`


## Project setup
* Create `test` folder
  * By Default, Mocha looks for `test` folder.
* Be adviced to mimic `test` folder's structure according to the application's source folder
* Each source file should be accompanied with a test file

## Describing and Asserting with Mocha.JS & Chai.JS

* MochaJS is a test framework, compatible with most assertion libraries.
* Within source file, modules to be tested must be `export`-ed
* Within test file, require _assertion_ module from assertion library,
  * In this case `const asset = require('chai').assert`
* Within test file, require relavant source file
 * `const /* moduleName */ = require(/* sourceFile_path */)`


* Describing a test in Mocha:

  > ```javascript
  >  describe(/* Test_Header */ , function() {
  >    describe(/* Test_SubHeader */, function() {
  >      it(/* A short description to describe the test */, function() {
  >        assert.equal(
  >        /* Invoke Function here. Function must also return here */,
  >        /* Expected Result to compare with */);
  >      });
  >    });
  >  });
  >  ```

## Running a Test
* In package.json, ensure to include `test` in `package.json` `script` property.

  > ```javascript
  > "scripts": {
  >   "test": "mocha"
  > }
  >```

* In Terminal, type `npm run test`
* To ignore npm's error message, run `npm run test -s` or edit `package.json` to:

  > ```javascript
  > "scripts": {
  >   "test": "mocha || true"
  > }
  > ```

### Learning Source
* Youtube: [Intro To JavaScript Unit Testing With Mocha JS & Chai](https://www.youtube.com/watch?v=MLTRHc5dk6s)
