import React from 'react';
import './index.css'

export default class Block extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <div className='block'>{value}</div>
    )
  }
}