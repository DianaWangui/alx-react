import Holberton_logo from './Holberton_logo.jpg';
import './App.css'


function Header() {
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
    </>
  );
}
export default Header;