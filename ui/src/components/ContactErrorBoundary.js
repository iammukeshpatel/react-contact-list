import React, { Component } from "react";

export class ContactErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  /**
   * Used to render fallback ui if any error occurs
   *
   * @param error
   * @returns
   */
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  /**
   * This method is used of logging erro
   *
   * @param error
   * @param info
   */
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="list-group-item list-group-item-action  d-flex justify-content-between align-items-center">
          <div className="content flex-grow-1 ms-3">
            <div className="header fw-bold">Inavlid contact added</div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ContactErrorBoundary;
