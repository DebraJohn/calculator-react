import React from 'react';
import Emitter from '../event';

import './index.css';

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  render() {
    const { value } = this.state;
    return (
      <div className="screen">
        <span className="output">{value}</span>
      </div>
    );
  }
  componentDidMount() {
    this.eventEmitter = Emitter.addListener('sendValue', val => {
      this.handleRecieved(val);
    });
  }
  componentWillUnmount() {
    Emitter.removeListener(this.eventEmitter);
  }

  handleRecieved(val) {
    const { value } = this.state;
    let result = '';
    switch (val) {
      case 'C':
        break;
      case 'DEL':
        result = String(value).substr(0, String(value).length - 1);
        break;
      case '=':
        try {
          result = eval(value);
          this.valFlag = true;
        } catch {
          this.valFlag = false;
          return;
        }
        break;
      case '/':
      case '*':
      case '-':
      case '+':
        this.valFlag = false;
        try {
          eval(value);
        } catch {
          return;
        }
        result = value + val;
        break;
      default:
        if (val === '.') {
          try {
            eval(value + val);
          } catch {
            return;
          }
        }
        if (this.valFlag) {
          result = val;
          this.valFlag = false;
        } else {
          result = value + val;
        }
        break;
    }
    this.setState({ value: result });
  }
}
