import React, { Component } from 'react';

class NewMessageInput extends Component {

  state = {
    showMessageRequired: false
  }

  handleMessageInput = e => {
    if (this.state.showMessageRequired) this.setState({ showMessageRequired: false });
    this.props.setMessageContent(e.target.value); 
  }

  handleBlur = e => {
    if (this.props.message.content.length === 0) {
      this.setState({ showMessageRequired: true });
    }
  }

  render() {
    return (
      <div className={`error ${this.state.showMessageRequired ? 'touched' : ''}`}>
        <label className="c1ug13ud" htmlFor="message">Message</label>
        <input onBlur={this.handleBlur} onChange={this.handleMessageInput} id="message" className="cydik8e" value={this.props.message.content} />
        <div className="c11hehzj" role="alert">A message is required</div>
      </div>
    );
  }
}

export default NewMessageInput;
