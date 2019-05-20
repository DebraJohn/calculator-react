import React from 'react';
import Emitter from '../event';

import './index.css';

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', num1: 0 };
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
    const { value, num1 } = this.state;
    switch (val) {
      case 'C':
        this.setState({
          value: '',
          num1: 0
        });
        break;
      case 'DEL':
        const newVal = String(value).substr(0, String(value).length - 1);
        this.setState({
          value: newVal
        });
        break;
      case '/':
        this.fn = 'divide';
        this.handleNum1(num1, value);
        break;
      case '*':
        this.fn = 'multiply';
        this.handleNum1(num1, value);
        break;
      case '-':
        let t = value + val;
        if (this.valFlag) {
          this.setState({
            value: val
          });
          t = val;
          this.valFlag = false;
        }
        if (t.length === 1 || !isNaN(Number(t))) {
          this.setState({
            value: t
          });
        } else {
          this.fn = 'minus';
          this.handleNum1(num1, value);
        }
        break;
      case '+':
        this.fn = 'add';
        this.handleNum1(num1, value);
        break;
      case '=':
        this.handleResult(this.fn);
        break;
      default:
        let secVal = value;
        if (this.valFlag) {
          this.setState({
            value: ''
          });
          secVal = '';
          this.valFlag = false;
        }
        if (isNaN(Number(secVal + val))) return;
        this.setState({
          value: secVal + val
        });
        break;
    }
  }
  handleNum1(num1, value) {
    if (!num1) {
      this.setState({
        num1: Number(value)
      });
      this.valFlag = true;
    } else {
      !this.valFlag && this.handleResult(this.fn);
    }
  }

  handleResult(fn) {
    if (!fn) return;
    this.valFlag = true;
    const { num1, value } = this.state;
    if (fn === 'add') {
      this.setState({
        value: num1 + Number(value),
        num1: 0
      });
    } else if (fn === 'minus') {
      this.setState({
        value: num1 - Number(value),
        num1: 0
      });
    } else if (fn === 'multiply') {
      this.setState({
        value: num1 * Number(value),
        num1: 0
      });
    } else if (fn === 'divide') {
      this.setState({
        value: num1 / Number(value),
        num1: 0
      });
    }
    this.fn = '';
  }
}
