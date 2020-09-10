import React, { Component } from 'react';

export class ClassCounter extends Component {
  state = {
    count: 0,
  };

  increment = () =>
    this.setState(state => {
      return { count: state.count + 1 };
    });

  decrement = () =>
    this.setState(state => {
      return { count: state.count - 1 };
    });
  reset = () => this.setState({ count: 0 });

  componentDidUpdate() {
    setInterval(() => {
      console.log(this.state.count, 'pyara count');
    }, 3000);
  }

  render() {
    return (
      <div className="Counter">
        <p className="count">{this.state.count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default ClassCounter;
