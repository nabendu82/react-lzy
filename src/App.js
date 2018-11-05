import React, { Component, lazy, Suspense } from "react";
import "./App.css";
import ContentComponent from './components/ContentComponent';
const MyComp = lazy(() => import("./components/myComp"));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">  
          <h1>Lazy Loading Demo</h1>        
          <Suspense fallback={<div>Loading.....</div>}>
            <MyComp />
          </Suspense>
          <ContentComponent />
        </header>
      </div>
    );
  }
}

export default App;
