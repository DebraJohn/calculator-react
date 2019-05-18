import React from 'react';
import './index.css';

import Screen from '../screen';
import Keyboard from '../keyboard'

export default class Calc extends React.Component {
  render() {
    return (
      <div className="calc">
        <Screen />
        <Keyboard />
      </div>
    );
  }
}
