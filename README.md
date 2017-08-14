## Message board

Message board is a question and answer web application, similar to Reddit, Quora, StackOverflow or other such sites. Users should be able to submit a question, then other users can respond with answers.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd message-boards`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Code Specs

Behavior - Plain English|Input|Output|
|---|---|---|
|User enter the app homepage with a list of questions.|User clicks on one of the headline link or on "Add Question" button.|After clicking "Add Question" button - user submits the form and new question appears on the main page. After clicking on the headline link - user is directed to a question details page.This page also contains answers that other users have posted.|
|User is on the question details page.|User chooses to edit or delete question by clicking on appropriate buttons|User redirects to the main page with the result of editing or deleting the question.|
|User is on the question details page.|User clicks "Add Answer button" and submit the form for adding answers.|New answer displays on the question details page.|
|User is on the question details page.|User clicks "Add new answer" button, submit the form and then click on "Delete Your Answer".| User sees that his anwer was deleted.


## Support and contact details

_If you have any questions or concerns, please contact Anna Timofeeva at anjatimofeyeva@gmail.com_


### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Technologies Used

* JavaScript
* Ember.js
* Firebase
* Bower
* NMP
* JQuery
* Bootstrap
* CSS
* HTML

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

Copyright (c) 2017 **_Anna Timofeeva_**
