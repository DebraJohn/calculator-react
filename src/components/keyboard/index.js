import React from 'react';
import Block from '../block';
import './index.css';

export default class Keyboard extends React.Component {
  render() {
    const leftBlock = [
      'C',
      'DEL',
      '/',
      '7',
      '8',
      '9',
      '4',
      '5',
      '6',
      '1',
      '2',
      '3',
      '0',
      '.'
    ];
    const rightBlock = ['*', '-', '+', '='];
    const leftItems = leftBlock.map((i, index) => (
      <Block key={index} value={i} shape={i === '0' ? 'rectangle' : 'square'} />
    ));
    const rightItems = rightBlock.map((i, index) => (
      <Block key={index} value={i} shape={i === '=' ? 'rectangle' : 'square'} />
    ));
    return (
      <div className="keyboard">
        <div className="left">{leftItems}</div>
        <div className="right">{rightItems}</div>
      </div>
    );
  }
}
