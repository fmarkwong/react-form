## Interactive react form practice project 

### Install and run

In project root directory:

`npm i && npm start`

Server will start at http://localhost:8080/

### Tests

I used https://github.com/kentcdodds/react-testing-library for a basic suite of integration tests.  

`npm run test`

### Architecture

Basically took html and broke into React components.  Added code for API calls, interactive UI, etc.  Used Redux for state management and keeping track of API call statuses.

For searching and filtering by color, I set a `parameters` property in the redux state (see reducers/index.js) and update it accordingly as the input fields are updated.  Then the messages are refetched with these updated parameters.  See `fetchMessages()` in actions/index.js. 

The redux flow is in component, call action -> action created -> reducer updates state.

For posting new messages, I noticed that new messages were not being saved to api.js.  Read docs and found that it needed to be a in json format.  So created a new db.json file based on api.js and updated api script in package.json to reference it.  Now new messages save successfully to db.json.
