import logo from './logo.svg';
import React from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";


class App extends React.Component {
      constructor() {
        super();
        this.state = {
          task:{
            text: " ",
            id:uniqid(),
          },
          tasks: []
        
        };
      };
      //handle input change and set state to new value
       handleChange = (e) => {
        this.setState({
          task:{
            text:e.target.value,
            id:this.state.task.id
           
          },
        });
      };

            onSubmit = (e) => {
          //prevent default pagereload on submit form 
          e.preventDefault();
          //add to task to tasks, then clear task, and get new ID
          this.setState({
            
              tasks:this.state.tasks.concat(this.state.task),
              task:{
                text: "",
                id:uniqid(),
      
              },

          });
        };
        deleteHandler = (idx) => {
          const tasks = [...this.state.tasks]
          tasks.splice(idx,1);
         this.setState({
           tasks:tasks
         });
          


        }
      
      render () {
        const {task,tasks} = this.state;
        return (
          <div>
            <form onSubmit = {this.onSubmit}>
              <label htmlFor="taskInput">Enter Tasks</label>
              <input type="text" id="taskInput" value={task.text} onChange = {this.handleChange}/>
              <button type="submit">Add Task</button>
            </form>
            <Overview tasks={tasks} deleteTask={this.deleteHandler}/>
           
          </div>
        );
      };
};

export default App;
