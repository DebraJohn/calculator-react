import React from 'react';

export default class Block extends React.Component {
  render() {
    const { value, shape } = this.props;
    return (
      <div className={`block ${shape}`}>{value}</div>
    )
  }
}