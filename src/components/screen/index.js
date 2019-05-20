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
    switch (val) {
      case 'C':
        this.setState({
          value: ''
        });
        break;
      case 'DEL':
        this.setState({
          value: String(value).substr(0, String(value).length - 1)
        });
        break;
      case '=':
        try {
          this.valFlag = true;
          this.setState({
            value: eval(value)
          });
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
        this.setState({
          value: value + val
        });
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
          this.setState({
            value: val
          });
          this.valFlag = false;
        } else {
          this.setState({
            value: value + val
          });
        }
        break;
    }
  }
}
