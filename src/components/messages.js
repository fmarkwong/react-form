import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import MessagesHeader from './messages-header';
import SearchInput from './search-input';
import ColorSelect from './color-select';
import MessageList from './messagelist';

import { fetchMessages, updateFilterParameter } from '../actions';

class Messages extends Component {

  state = {
    filterString: ''
  };

  componentWillMount() {
    this.props.fetchMessages();
  }

  handleFilterInput = e => {
    this.setState({ filterString: e.target.value });
    this.props.updateFilterParameter(e.target.value);
  }

  colorSelectProps = () => {
    return {
      value: this.state.filterString,
      onChange: this.handleFilterInput,
      ariacontrols: 'results',
      id: 'color-filter',
      labelName: 'Filter',
      defaultOption: 'All colors',
      klassName: 'c1e30x2x'
    };
  }

  render() {
    return (
      <section>
        <header className="c1pr40a">
          <MessagesHeader />
          <div className="c7gtt9t">
            <SearchInput />
            <ColorSelect {...this.colorSelectProps()} />
          </div>
        </header>
        <MessageList messages={this.props.messages} />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    pendingSearch: state.pendingSearch
  }
}

export default connect(mapStateToProps, { fetchMessages, updateFilterParameter })(Messages);
