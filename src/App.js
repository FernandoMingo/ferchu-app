import logo from './logo.svg';
import './App.css';
import WebContent from './Portfolio.js';
import './Pportfolio.css'
function App() {
  return (
    <div className="App">
      <WebContent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Ferchu App</code>
          <p>Demo react app</p>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
