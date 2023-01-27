import React, { Component } from "react";

const ErrorComponent = () => <div>{this.state.ignore}</div>;
export default class Counter extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      counter: 0,
      seed: 0,
    };
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }
  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed)
      return {
        seed: props.seed,
        counter: props.seed,
      };
    return null;
  }
  mnmcomponentDidMount() {
    console.log("component Did mounted");
    setTimeout(() => {
      console.log("bnbn");
    });
    console.log("-------------------------");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("should component update do not render");
      return false;
    }
    
      console.log("should component update  render");
      return true;
    
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get Snapshot before update");
  }
  render() {
    console.log("renderer");
    // console.log(count, "cccoo");
    if (this.props.showErrorComponent && this.state.error) {
      return <div>WE have encounter an error ! {this.state.error.message}</div>;
    }
    return (
      <>
        <div className="counter">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          Counter : {this.state.counter}
        </div>
        {this.props.showErrorComponent ? <ErrorComponent /> : null}
      </>
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component did updated");
  }
  componentWillUnmount() {
    console.log("component is unmounted");
  }
//   componentDidCatch(error, info) {
//     console.log("component catch error");
//     this.setState({ error, info });
//   }
}
