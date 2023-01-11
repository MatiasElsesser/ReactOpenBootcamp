import logo from './logo.svg';
import './App.css';
import TaskListComponent from './componentss/container/task_list';
// import Greeting from './pure/greeting';
// import GreetinF from './componentss/pure/greetinF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <Greeting
      name="Matias Fabian"
      /> */}
      {/* ejemplo componente funcional */}
      {/* <GreetinF 
        name="Mati"
      /> */}

      {/* componente listado de tareas */}
      <TaskListComponent/>
      </header>
    </div>
);
}

export default App;
