import logo from './logo.svg';
import React from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";
import Title from "./components/Title";

class App extends React.Component {
      constructor() {
        super();
        this.state = {
          task:{
            text: " ",
            id:uniqid(),
          },
          tasks: [],
          edit:false,
          //keep track of index for editing
          index: 0

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
      handleChangeEdit = (e) => {
        this.setState({
          task: {text: e.target.value,
            id:this.state.task.id
            }
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
       
      deleteHandler = (e) => {
       const idx= e.target.value;
          const tasks = [...this.state.tasks];
          tasks.splice(idx,1);
         this.setState({
           tasks:tasks
         });
        };
      editHandler = (e) => {
        const index = e.target.value
          //set edit state to true
          this.setState({
            edit:true,
            index: index
          });
       
        }
      submitEdit= () => {
          let tasks = [...this.state.tasks];
          let updatedTasks = [ ];
         let index = this.state.index;
          //updated task we  made with edit handleChangeEdit handler
          let updatedTask= this.state.task;
         //remove the task of the matching index from the editHandler
          tasks.splice(index,1);
        
         //add the new task to updatedtasks array
         tasks.splice(index,0,updatedTask);
         console.log(tasks);
          //set the updated tasks
        this.setState({
          tasks: tasks,
          task: {text:"", id:uniqid(),  //reset editing text to blank
          editingText: ""},
          //reset edit to dalse
          edit:false,
          index:0
        });
        
          };
         
        
      
      render () {
        const {task,tasks,edit} = this.state;
        return (
          <div>
          <Title title="ToDo List"/>
          {!edit ?
            <form onSubmit = {this.onSubmit}>
              <label htmlFor="taskInput">Enter Tasks</label>
              <input type="text" id="taskInput" value={task.text} onChange = {this.handleChange}/> 
              <button type="submit">Add Task</button>
            </form>
            : <div/>
           }
            {!edit ? <div/> :
            <form onSubmit = {this.submitEdit}>
                <input type="text" id="editInput" value={task.textEditing} onChange = {this.handleChangeEdit} /> 
                <button type = "submit"  >Submit Change</button>
            </form>
            }
            <Overview tasks={tasks}  deleteTask={this.deleteHandler} editTask={this.editHandler}/>
               
           
          </div>
        );
      };
};

export default App;
