import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

      const defaultTask = new Task( "Example", "Default Description", false, LEVELS.NORMAL );

      const changeState = ( id ) => {
            console.log("Cambiar estado de tarea")
      }

      return (
            <div>
                  <div>
                        <h1>Your Tasks:</h1>
                  </div>
                  {/* Todo: Aplicar un for/map para renderizar una lista */}
                  <TaskComponent task={defaultTask}/>
            </div>
      );
};


export default TaskListComponent;
