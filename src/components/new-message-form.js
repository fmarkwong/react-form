import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import NewMessageInput from './new-message-input';
import ColorSelect from './color-select';
import PostMessageButton from './post-message-button';
import { saveMessage } from '../actions';

class NewMessageForm extends Component {

  state = {
    message: {
      content: '',
      color: ''
    }
  }

  handleSubmit = e => {
    this.props.saveMessage(this.state.message);
    this.setState({ message: {...this.state.message, content: '', color: '' }});
    e.preventDefault();
  }

  handleColorInput = e => {
    this.setState({ message: {...this.state.message, color: e.target.value }});
  }

  buttonShouldBeDisabled = () => {
    return !this.state.message.content.length || this.props.pendingPost;
  }

  setMessageContent = content => {
    this.setState({ message: {...this.state.message, content: content }});
  }

  messageInputProps = () => {
    return {
      message: this.state.message,
      setMessageContent: this.setMessageContent
    };
  }

  colorSelectProps = () => {
    return {
      value: this.state.message.color,
      onChange: this.handleColorInput,
      id: 'color',
      labelName: 'Color',
      defaultOption: 'Choose a color...'
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="c1pr40a" id="new-message-form">
        <fieldset className="c6xliwt">
          <legend className="c1rvp5fh">New message</legend>
          <p className="c1ouhqwa">Add a message and optionally pick a color.</p>
          <div className="c1u3f0g5">
            <div className="cz1obge">
              <NewMessageInput {...this.messageInputProps()} />
              <ColorSelect {...this.colorSelectProps()} />
            </div>
            <PostMessageButton disabled={this.buttonShouldBeDisabled()} />
          </div>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    pendingPost: state.pendingPost
  }
}

export default connect(mapStateToProps, { saveMessage })(NewMessageForm);
