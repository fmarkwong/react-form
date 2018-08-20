import React from 'react';
import { connect } from 'react-redux';

import ProgressBar from './progressbar';

const counterMessage = messagesLength => {
  return messagesLength === 1 ?
    <p>There is <span className="c1lerdlx">1</span> message showing</p> :
    <p>There are <span className="c1lerdlx">{messagesLength}</span> messages showing</p> 
};

const MessagesHeader = props => {
  return (
    <div className="c12q1r7z">
      <h2 className="c17zq7b5">Messages</h2>
      { counterMessage(props.messages.length) }
      { props.pendingFetch ? <ProgressBar barClass="c1g8hd9e" background="black"/> : '' }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    messages: state.messages,
    pendingFetch: state.pendingFetch,
  }
};

export default connect(mapStateToProps, {})(MessagesHeader);
