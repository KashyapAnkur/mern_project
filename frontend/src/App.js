import React from 'react';
import logo from './logo.svg';
import './App.css';

function Ankur(props) {
  return (
    <div className="App">
      {props.children}
    </div>
  );
}

class App extends React.Component{
  render() {
    return (
      <>
          <Ankur>Hello bhai ji</Ankur>
      </>
    )
  }
}

export default App;
