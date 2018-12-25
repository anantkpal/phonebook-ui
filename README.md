# Phonebook

## Major frameworks/libs/node modules used

 * [React](https://reactjs.org/)
 * [Jest](https://jestjs.io/)
 * [Enzyme](https://airbnb.io/enzyme/)
 * [Webpack](https://webpack.js.org/)
 * [Redux](https://redux.js.org)
 * [styled-components](https://www.styled-components.com/)
 
## Pre-requisites

* Latest version of node installed on the system

Ref: https://nodejs.org/

## Scripts

### `npm install`
Installs missing node modules

### `npm run eslint`
Runs the eslint on the source and logs the reports

### `npm run test`
Runs the tests in watch mode using jest. Tests are run with coverage.

### `npm run test:ci`
Runs the tests using jest and exists with error code based on tests outcome and coverage thresholds are met or not.

### `npm run build`
Builds the assets for production deployment in `dist`