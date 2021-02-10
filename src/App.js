import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This React app was deployed with Azure Pipelines
        </p>
      </header>
    </div>
  );
}

export default App;
