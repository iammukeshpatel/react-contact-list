import React, { Component, Fragment } from "react";

const ErrorComp = (props) => {
  throw new Error();
  return <div>{props.error} </div>;
};

export class Counter extends Component {
  constructor(props) {
    console.log("*** Constructor");
    super(props);

    this.state = {
      counter: 0,
      error: null,
      initializing: true,
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  /**
   * this method updates the state
   */
  static getDerivedStateFromProps(props, state) {
    console.log("== getDerivedStateFromProps", props);
    return null;
  }

  /**
   * gets called, when component gets mount
   * after the constructor
   *
   * here we make api call and hide loader when complete
   */
  componentDidMount() {
    console.log("*** component did mount called ***");

    setTimeout(() => {
      this.setState({ initializing: false });
    }, 500);
  }

  /**
   * this method decide wheather to re-render component or not.
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.counter > 1 && nextState.counter % 3 === 0) {
      console.log("*** should component update called - Do not render ***");
      return false;
    }

    console.log("*** should component update called - render ***");
    return true;
  }

  /**
   * get called after the component gets rendered
   *
   * This method get the snapshot before updating
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("=== getSnapshotBeforeUpdate");
    return null;
  }

  render() {
    console.log("*** Render called ***");

    if (this.state.initializing) {
      return (
        <div>
          <i className="fa-solid fa-loader"></i> initializing async call
        </div>
      );
    }

    if (this.props.showErrorComp && this.state.error) {
      return <div>Encountered Errors</div>;
    }

    return (
      <Fragment>
        <div className="row mt-3">
          <div className="col">
            <button className="btn btn-primary me-1" onClick={this.increment}>
              increment
            </button>
            <button className="btn btn-primary" onClick={this.decrement}>
              decrement
            </button>

            <span> Counter: {this.state.counter}</span>
          </div>

          <div className="col">
            {this.props.showErrorComp ? <ErrorComp /> : null}
            {/* <ErrorComp /> */}
          </div>
        </div>
      </Fragment>
    );
  }

  /**
   *
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("*** component did update called ***");
  }

  /**
   * will get called just before the dom is detached.
   */
  componentWillUnmount() {
    console.log("*** Component will unmount  ***");
  }

  /**
   * if any error occur this method id called
   */
  componentDidCatch(error, info) {
    console.log("********************* component did catch Error");
    this.setState({
      error,
      info,
    });
  }
}

export default Counter;
