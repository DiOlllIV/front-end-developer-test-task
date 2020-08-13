import React, { Component } from 'react';
import List from './List';
import '../styles/index.scss';
import { currency } from '../store';

class TestApp extends Component <any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        selectedItem: 0,
        unit: 0,
      };
    }
  
    handleSelect = (value: any, unit: any) => {
      this.setState({
        selectedItem: value,
        unit: unit,
      });
    }

    onSubmit = () => {
        alert (`Сума: ${this.state.selectedItem} Вага: ${this.state.unit}`);
    }
  
    render() {
      return (
        <form className="cart"
            onSubmit={this.onSubmit}
        > 
          <div className="cart-head">
            <span className="cart-head__type">Тип</span>
            <span className="cart-head__price">Ціна</span>
          </div>
          <List handleSelect={this.handleSelect}
            cliked={this.state.cliked}
          />
          <div className="cart-foot">
            <span className="cart-foot__sum">{this.state.selectedItem} {currency}</span>
            <button className="cart-foot__btn"
                type="submit"
            ><img src="https://raw.githubusercontent.com/DiOlllIV/front-end-developer-test-task/master/src/styles/icon-cart.png" alt="icon-basket"/> До кошика</button>
          </div>
        </form>
      );
    }
  }
  export default TestApp;