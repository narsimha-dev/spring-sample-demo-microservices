import logo from './logo.svg';
import './Kiran.css';
import LoginPage from './components/LoginPage';
// import LoginPage from '../src/components/LoginPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <LoginPage/>
      </header>
    </div>
  );
}

export default App;
