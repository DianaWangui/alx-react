import Holberton_logo from './Holberton_logo.jpg';
import './App.css'
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={Holberton_logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </header>
    </div>

    <div>
      <body className="App-body">
        <p>
          Login to access the full dashboard
        </p>
      </body>
    </div>

    <div className="App-footer">
      <footer>
        <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
    </>
    
  );
}

export default App;
