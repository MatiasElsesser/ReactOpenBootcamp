import logo from './logo.svg';
import './App.css';
// import Greeting from './pure/greeting';
import GreetinF from './pure/greetinF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <Greeting
      name="Matias Fabian"
      /> */}
      <GreetinF 
        name="Mati"
      />
      </header>
    </div>
);
}

export default App;
