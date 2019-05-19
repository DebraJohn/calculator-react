import React from 'react';
import Emitter from '../event';

export default class Block extends React.Component {
  render() {
    const { value, shape, active } = this.props;
    return (
      <div
        className={`block ${shape}${active ? ' active' : ''}`}
        onClick={() => this.handleValue()}
      >
        {value}
      </div>
    );
  }

  handleTouch() {
    this.setState({
      active: true
    });
  }
  handleValue() {
    this.handleTouch();
    let value = this.props.value;
    Emitter.emit('sendValue', value);
  }
}
