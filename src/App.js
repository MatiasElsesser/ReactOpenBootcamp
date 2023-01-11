import logo from './logo.svg';
import './App.css';
import TaskListComponent from './componentss/container/task_list';
import ComponentA from './componentss/ejercicios/componentA';
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
      <ComponentA
        name="Matias"
        apellido="Elsesser"
        email="elsesser3@gmail.com"
        conected="true"
      />
      </header>
    </div>
);
}

export default App;
