import React from 'react';
import { connect } from 'react-redux';

import ProgressBar from './progressbar';

const PostMessageButton = props => {
  return (
    <div className="c7vrlqv">
      {/* button is disabled if message is empty or request is in progress */}
      <button className="c13ogcrc" disabled={props.disabled} id="postmessage" type="submit">
        { props.pendingPost ? <ProgressBar barClass="c161wjul"/> : '' }
        <span style={{ opacity: props.pendingPost ? 0 : 1 }}>Post message</span>
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    pendingPost: state.pendingPost
  }
}

export default connect(mapStateToProps, {})(PostMessageButton);
