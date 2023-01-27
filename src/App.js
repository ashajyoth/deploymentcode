
import './App.css';
import React, {useState, useEffect, Component} from 'react';
import {  Routes, Route, BrowserRouter } from "react-router-dom";
// import NavList from './Topics/Route';
import Home from './Home';
import Second from './Second';
import Events from './Topics/Events';
import Error from './Topics/Error';
import SignupForm from './Topics/Form';
import Login from './components/Login';
import Index from './Topics/Index';
import NavList from './Topics/Route';
import useRandomJoke from './useRandomJoke';
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';
import UserForm from './UserForm';
import Framer from './Framer';
function App() {
  
   
  return (
    
    <div className="App">
      <>
        {/* <UserForm/> */}
        <Framer/>
      
      {/* <BrowserRouter>
      <Routes>
        <Route path = "/" element= {<Home/>} >
          <Route index element = {<Index/>} />
         <Route  path = "second" element= {<Second/>} />
         <Route  path = "navlinks" element= {<NavList/>} />
         <Route path = "event" element= {<Events/>} />
         <Route path = "form" element= {<SignupForm/>} />
         
         <Route path= "dashboard" element = {<div>Dashboard</div>}/>
          <Route path = "nesting" element = {<div>Nesting</div>} />
          <Route path= "*" element = {<Error/>} />
          
         </Route>
      </Routes>
      </BrowserRouter> */}
    
      {/* <Events/> */}
      {/* <Login/> */}
     
       {/* <SignupForm/> */}
       {/* <center>
        <h1>JOke Generator</h1>
        <h2>{joke}</h2>
        <button>Generate Joke</button>
       </center> */}
       </>
    </div>
  );
}

export default App;


// export default class App extends Component {
//   constructor(props) {
//     super(props)
//    this.state = {
//     mount: true,
//     ignoreProp: 0,
//     seed: 40,
//     showErrorComponent: false,
//    }
//    this.mountCounter = () => this.setState({mount: true})
//    this.unmountCounter = () => this.setState({mount: false})
//    this.ignoreProp = () => this.setState({ignoreProp: Math.random()})
//    this.seedGenerator = () => this.setState({seed: Math.random()})
//    this.toggleERror = () => this.setState ({showErrorComponent : !this.state.showErrorComponent})
//   }

//   render() {
//     return (
//      <>
//      <button onClick={this.mountCounter} disabled = {this.state.mount}>Mount</button>
//      <button onClick={this.unmountCounter} disabled= {!this.state.mount}>UnMount</button>
//      <button onClick={this.ignoreProp}>IgnoreProp</button>
//      <button onClick={this.seedGenerator}>Seed Generator</button>
//      <button onClick={this.toggleERror}>Toggle Error</button>
//      {/* {
//       this.state.mount ? */}
//       <ErrorBoundary>
//         <Counter ignoreProp = {this.state.ignoreProp}
//        seed = {this.state.seed}
//        showErrorComponent = {this.state.showErrorComponent}
//        /> 
//       </ErrorBoundary>
     
//      </>
//     )
//   }
// }
