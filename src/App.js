import React from 'react';
import logo from './logo.png';
import Restaurant from "./components/Restaurant";

function App() {

  return (<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <p>Find restaurants nearby</p>
    </header>
    <main>
      <Restaurant/>
    </main>
    <footer>
      Made with
      <span role="img" aria-label="heart">❤️</span>by Xuan Ton.
    </footer>
  </div>);
}

export default App;
