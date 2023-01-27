import React, { Component } from 'react'

export default class Cycle extends Component {
  render() {
    return (
      <div>Cycle</div>
    )
  }
}

//mounting phase updating phase and unmounting phase and in meanwhile unmounting phase
// constructor
// getDerived state from props - mainly used for have sync between state and props
// static getDerivedStateFromProps(props, state) { 
//     return {
//        points: 200 // update state with this
//     }
//  } 
//  to get update the state
//  static getDerivedStateFromProps allows a component to update its internal state in response to a change in props.
//  render is the method where we can use jsx element to return 
//  after render component is mounted in the dom and component did mount methods is added
//  get Derived state from propsHere we should compare only next props and previous state, If state and props are different, update state otherwise there should be no update.
//  If we compare this.props with next props,we require to store the old props value, which impact performance. Keeping copy of past value is called memoization. To avoid misuse of “this” and memoization, getDerivedStateFromProps is made static.
//  shouldComponentupdate
//  Here’s the important thing: the value queried from the DOM in getSnapshotBeforeUpdate refers to the value just before the DOM is updated, even though the render method was previously called.
//  getSnapshotBeforeUpdate(prevProps, prevState) {
   
//  }
//  componentDidUpdate(prevProps, prevState) {
 
//  }
// getsnapshotbeforeupdate is not only possible singly it need to add with the
// componentdid update method
// componentDidUpdate(prevProps, prevState, snapshot) {
    
// }
// componentDidMount() {
//     el.addEventListener()
// }

// // e.g remove event listener 
// componentWillUnmount() {
//     el.removeEventListener()
//  }
//  static getDerivedStateFromError(error) {
//     console.log(`Error log from getDerivedStateFromError: ${error}`);
//     return { hasError: true };
//   }

//   render() {
//     return null;
//   }
// }
// componentDidCatch(error, info) {
//     logToExternalService(error, info) // this is allowed. 
//         //Where logToExternalService may make an API call.
// }



