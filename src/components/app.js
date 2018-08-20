import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';

import Heading from './heading';
import NewMessageForm from './new-message-form';
import Messages from './messages';
import Footer from './footer';

const App = () => {
  return (
    <Fragment>
      <main className="cc0img9">
        <div className="cgmxdsh">
          <Heading />
          <NewMessageForm />
          <Messages />
        </div>
      </main>
      <Footer author="Mark Wong" />
    </Fragment>
  );
}; 

export default hot(module)(App);
