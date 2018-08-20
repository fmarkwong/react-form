import React from 'react'

const MessageList = props => {
  return (
    <ul className="ccqw98a" aria-live="polite" async="" id="results" role="region">
       { props.messages.map(message => <li key={message.id} className="cvvv1yb" style={{ background: message.color }}>{ message.content }</li>) }
    </ul>
  );
}

export default MessageList;
