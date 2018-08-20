import React from 'react';
import faker from 'faker';
import { render, waitForElement, fireEvent, wait } from 'react-testing-library';
import {Simulate} from 'react-dom/test-utils'
import 'jest-dom/extend-expect';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './../reducers';
import App from '../components/app';

const store = createStore(rootReducer, applyMiddleware(thunk));
const MainApp = () => <div><Provider store={store}><App /></Provider></div>
const { container, getByText, getByLabelText } = render(<MainApp />);
const testMessage = faker.random.word();
const messagesList = container.querySelector('#results');
const searchFieldInput = getByLabelText('Search');
const colorDropDownInput = getByLabelText('Filter');

test('I can see home page', () => {
  expect(container).toHaveTextContent('Message board');
});

test('I can create a new message', async () => {
  const newMessageInput = container.querySelector('[id="message"]');
  const colorDropDownInput = getByLabelText('Color');
  const newMessageForm = container.querySelector('[id="new-message-form"]');

  // create a new blue colored random test message 
  Simulate.change(colorDropDownInput, { target: { value: "#2795D9" }}); // Blue

  newMessageInput.value = testMessage;
  fireEvent.change(newMessageInput);

  fireEvent.submit(newMessageForm);

  expect(store.getState().pendingPost).toEqual(true);
  expect(store.getState().pendingFetch).toEqual(true);

  await waitForElement(() => getByText(testMessage));

  expect(messagesList).toHaveTextContent(testMessage);  // new message appears!
  expect(store.getState().pendingPost).toEqual(false);
  expect(store.getState().pendingFetch).toEqual(false);
});

test('I can filter out text when searching', async () => {
  // make sure testMessage exists
  expect(messagesList).toHaveTextContent(testMessage);

  searchFieldInput.value = 'ju3jdh88368dd';
  fireEvent.change(searchFieldInput);
  expect(store.getState().pendingSearch).toEqual(true);

  // testMessage is filtered out
  await wait(() => {
    expect(messagesList).not.toHaveTextContent(testMessage);
    expect(store.getState().pendingSearch).toEqual(false);
  });
});

test('I can search for a message', async () => {
  searchFieldInput.value = testMessage; 
  fireEvent.change(searchFieldInput); // search for testMessage

  await wait(() => expect(messagesList).toHaveTextContent(testMessage));
});

test('I can filter out by color', async () => {
  // make sure testMessage exists
  expect(messagesList).toHaveTextContent(testMessage);

  // Filter by purple so will not see our blue message
  Simulate.change(colorDropDownInput, { target: { value: "#672d93" }}); // Purple

  await wait(() => expect(messagesList).not.toHaveTextContent(testMessage));
});

test('I can filter by color', async () => {
  Simulate.change(colorDropDownInput, { target: { value: "#2795D9" }}); // Blue

  // Filter by blue so should see our blue message
  await wait(() => expect(messagesList).toHaveTextContent(testMessage));
});
