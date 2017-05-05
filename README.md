# ng-snackbar

ng-snackbar allows the user to append any message to a snackbar in an angular application.

## Installation
Install using npm:
```
npm install ng-snackbar
```
Then inject the `ngSnackbar` module into you angular application:
```
angular.module('myApp', ['ngSnackbar']);
```

## Usage
Place the snackbar directive at the top of any required html:
```
<snackbar display-message="ctrl.displayMessage"></snackbar>
```
To post a message to the snackbar from the parent controller:
```
this.displayMessage('Your Message!!!');
```
