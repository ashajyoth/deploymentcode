import React from 'react'
/////error boundaries handles errors inside the lifecycle methods render method 
//and inside the hooks like useeffect
// error boundaries doesnt handle error inevent handlers, async ConvolverNode, server side rendering error 
// through in the error boundary itself
export default function Errors() {
  return (
    // <ErrorBoundary
    //       FallbackComponent={OurFallbackComponent}
    //     >
    //       <ComponentThatMightThrowAnError/>
    // </ErrorBoundary>
  )
}
const OurFallbackComponent = ({ error, componentStack, resetErrorBoundary }) => {
    return (
      <div>
        <h1>An error occurred: {error.message}</h1>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  };

  a class component becomes error boundary if it defines either or both of life cycle PaymentMethodChangeEvent
  static getDerivedStateFromError() or componentDidCatch().
  