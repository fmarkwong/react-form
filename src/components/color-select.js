import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getSelectColors } from '../actions';

class ColorSelect extends Component {

  state = {
    colors: [] 
  }

  async componentWillMount() {
    try {
      this.props.getSelectColors();
    } catch(err) {
      console.log('API error fetching colors: ', err);
    }
  }

  render() {
    return (
      <div className={this.props.klassName}>
        <label className="c1ug13ud" htmlFor={this.props.id}>{this.props.labelName}</label>
        <select value={this.props.value} onChange={this.props.onChange} className="cytasr3" aria-controls={this.props.ariacontrols} id={this.props.id}>
          <option value="">{this.props.defaultOption}</option>
          { this.props.selectColors.map( color => <option key={color.id} value={color.value}>{color.name}</option>) }
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectColors: state.selectColors
  }
}

export default connect(mapStateToProps, { getSelectColors })(ColorSelect);
