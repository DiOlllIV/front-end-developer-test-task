import React, { Component } from 'react';
import List from './List';
import '../styles/index.scss';
import { currency } from '../store';

interface InitialState {
  selectedItem: number,
  unit: number,
  id: null | number | string,
}

class TestApp extends Component < any, InitialState > {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedItem: 0,
      unit: 0,
      id: null,
    };
  }

  handleSelect = (value: number, unit: number, id: null | number | string) => {
    this.setState({
      selectedItem: value,
      unit: unit,
      id: id
    });
  }

  onSubmit = () => {
    const { selectedItem, unit } = this.state;

    alert (`Сума: ${selectedItem} Вага: ${unit}`);
  }

  render() {
    const { selectedItem, id } = this.state;
    return (
      <form className="cart"
          onSubmit={this.onSubmit}
      > 
        <div className="cart-head">
          <span className="cart-head__type">Тип</span>
          <span className="cart-head__price">Ціна</span>
        </div>
        <List handleSelect={this.handleSelect}
          id={id}
        />
        <div className="cart-foot">
          <span className="cart-foot__sum">{selectedItem} {currency}</span>
          <button className="cart-foot__btn"
              type="submit"
          ><img src="https://raw.githubusercontent.com/DiOlllIV/front-end-developer-test-task/master/src/styles/icon-cart.png" alt="icon-basket"/> До кошика</button>
        </div>
      </form>
    );
  }
}
  
export default TestApp;