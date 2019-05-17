import React from 'react';
import './index.css';

import Screen from '../screen';

export default class Calc extends React.Component {
  render() {
    return (
      <div className="calc">
        <Screen />
      </div>
    );
  }
}
