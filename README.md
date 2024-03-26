# FrontEasynance

## Description
Easynance is a personal budgeting webapp.

## Technologies
- Angular v17
- ESLint

## Prerequisites
- Node.js v18.
- Angular CLI 17.

## Install
In order to run this project in a local environment, execute the following commands:

```bash
git clone https://github.com/victor-soto/easynance.git
cd easynance/frontend
npm install
ng serve
```

## Technical Guidelines

### Unit tests
Unit tests should be written with the AAA pattern(Arrange, Act, Assert).

Each test is unique and independent and only one "expect" per case should be written.

The structure of unit tests should have the following schema:

```js
describe('when <test case>', () => {
    it('should <unit test description>' () => {
      // Arrange
      ...
      // Act
      ...
      // Assert
      ...
    });
});
```

### Commits
Commits should have the following structure:
```bash
git commit -m "<type>: <description>"
```
Reference [here](https://www.conventionalcommits.org/en/v1.0.0/)
