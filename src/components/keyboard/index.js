import React from 'react';
import Block from '../block';
import './index.css';

export default class Keyboard extends React.Component {
  render() {
    return (
      <div className="keyboard">
        <div className="left">
          <Block value="C" shape="square" fn="clear" />
          <Block value="DEL" shape="square" fn="backsapce" />
          <Block value="/" shape="square" fn="devide"/>
          <Block value="7" shape="square" />
          <Block value="8" shape="square" />
          <Block value="9" shape="square" />
          <Block value="4" shape="square" />
          <Block value="5" shape="square" />
          <Block value="6" shape="square" />
          <Block value="1" shape="square" />
          <Block value="2" shape="square" />
          <Block value="3" shape="square" />
          <Block value="0" shape="rectangle" />
          <Block value="." shape="square" />
        </div>
        <div className="right">
          <Block value="*" shape="square" fn="multiply"/>
          <Block value="-" shape="square" fn="minus"/>
          <Block value="+" shape="square" fn="add"/>
          <Block value="=" shape="rectangle" fn="equal"/>
        </div>
      </div>
    );
  }
}
