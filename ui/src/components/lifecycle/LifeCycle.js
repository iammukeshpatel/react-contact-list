import React, { Component, Fragment } from "react";
import Counter from "./Counter";

export class LifeCycle extends Component {
  constructor(props) {
    super(props);

    // sets initial state;
    this.state = {
      mount: true,
      ignoreProp: 0,
      showErrorComp: false,
    };
  }

  mountCounter = () => {
    this.setState({
      mount: true,
    });
  };

  unMountCounter = () => {
    this.setState({
      mount: false,
    });
  };

  ignoreProp = () => {
    this.setState({ ignoreProp: Math.random() });
  };

  toogleErrorComp = () => {
    this.setState({ showErrorComp: !this.state.showErrorComp });
  };

  render() {
    return (
      <Fragment>
        <h2>LifeCycle</h2>

        <div className="row">
          <div className="col-12">
            <button
              className="btn btn-primary me-1"
              onClick={this.mountCounter}
              disabled={this.state.mount}
            >
              Mount Counter
            </button>
            <button
              className="btn btn-danger"
              onClick={this.unMountCounter}
              disabled={!this.state.mount}
            >
              Unmount Counter
            </button>
          </div>

          <div className="col-12 mt-3">
            <button
              className="btn btn-primary"
              onClick={this.ignoreProp}
              disabled={!this.state.mount}
            >
              Ignore Prop
            </button>

            <button
              className="btn btn-primary ms-2"
              onClick={this.toogleErrorComp}
            >
              Toggle Error Component
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            {this.state.mount ? (
              <Counter
                ignoreProp={this.state.ignoreProp}
                showErrorComp={this.state.showErrorComp}
              />
            ) : null}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LifeCycle;
