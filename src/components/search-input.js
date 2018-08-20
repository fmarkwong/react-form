import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProgressBar from './progressbar';
import {  updateSearchParameter } from '../actions';

class SearchInput extends Component {

  state = {
    searchString: ''
  }

  handleSearchInput = e => {
    this.setState({ searchString: e.target.value });
    this.props.updateSearchParameter(e.target.value);
  }

  render() {
    return (
      <div className="c1w33pjg">
        <label className="c1ug13ud" htmlFor="id-50854520">Search</label>
        <div className="c6v0e9l">
          <input onChange={this.handleSearchInput} type="search" className="cshm1e9" id="id-50854520" aria-controls="results" value={this.state.searchString} />
          { this.props.pendingSearch ? <ProgressBar barClass="c1gyy91j"/> : '' }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pendingSearch: state.pendingSearch
  }
}

export default connect(mapStateToProps, { updateSearchParameter })(SearchInput);
