import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError : false
        }
    }
    static getDerviedStateFromError(error) {
       return {
        hasError : true
       }
    }
    componentDidCatch(error, info) {
        console.log("component catch error");
        this.setState({ error, info });
      }
  render() {
    if (this.state.hasError) {
        return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}
