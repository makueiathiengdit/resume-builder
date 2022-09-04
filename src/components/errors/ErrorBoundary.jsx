import React, { Component } from "react";
import Error from "./Error";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  retry() {}
  render() {
    if (this.state.hasError) return <Error error="Something went wrong" />;
    return this.props.children;
  }
}
