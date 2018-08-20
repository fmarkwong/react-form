import React, { Component } from 'react'
import { connect } from 'react-redux';

import ProgressBar from './progressbar'

class Heading extends Component {

  pending = () => {
    return this.props.pendingFetch || this.props.pendingSearch || this.props.pendingPost;
  }

  render() {
    return (
      <header className="c1pr40a">
        <div className="cynqhgr">
          <h1 className="c17defmp">Message board</h1>
          { this.pending() ? <ProgressBar barClass="c1g8hd9e" background="black"/> : '' }
        </div>
        <p className="cp6shng">A place to post and read messages.</p>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    pendingFetch: state.pendingFetch,
    pendingSearch: state.pendingSearch,
    pendingPost: state.pendingPost
  }
}

export default connect(mapStateToProps, {})(Heading);
