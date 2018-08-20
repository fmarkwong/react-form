import React from 'react';

const ProgressBar = props => {
  return (
    <span role="progressbar" className={`${props.barClass} c1sg2lsz`}>
      <div className="c183ltat" style={{animationDelay: '-320ms', background: props.background}}/>
      <div className="c183ltat" style={{animationDelay: '-160ms', background: props.background}}/>
      <div className="c183ltat" style={{background: props.background}}/>
    </span>
  );
}

export default ProgressBar;
