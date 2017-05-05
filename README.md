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
## Options

#### Display duration
The snackbar default to 10 seconds display. This can be changed to any desired time, ie, 1s:
```
<snackbar display-message="ctrl.displayMessage" duration="1000"></snackbar>
```

#### Dismiss button
There is no default dismiss button. A dismiss button can be added with custom text as follows:
```
<snackbar display-message="ctrl.displayMessage" button-text="'cancel'"></snackbar>
```
Or an icon can be added to the dismiss button with css:
```
.dismiss-button::after {
    content: "\e088";
    font-family: "Glyphicons Halflings";
}
```
This is using bootstrap glyphicons.

## Styling
There is no styling applied to the snackbar upon installation. There is a css styling example (`example/example-styling.css`) that can be copy and pasted into your project, which will fix the snackbar to the top of the screen.
