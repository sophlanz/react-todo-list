import React from "react"

class Overview extends React.Component {
    constructor(){
        super();
    };
   
    
    render(){
        const tasks = this.props.tasks;
        const deleteTask= this.props.deleteTask;
        const editTask = this.props.editTask;
        const submitEdit = this.props.submitEdit;
        const edit = this.props.edit;
             //map the tasks and create the html
   return (
    <div>
         <ul>
         {tasks.map((task, idx)=> {
          return(
              <div>
                 <li key={task.id}>
                     <span >{idx+1}.{task.text}</span>
                     <button onClick={deleteTask} value={idx}>Delete Task</button>
                     <button onClick = {editTask} value={idx}>Edit Task</button>
                    
                     
                     
                 </li>
              </div>
            
          ) 
             })}
         </ul>

    </div>
   
) 
    }
   
};
export default Overview;


   


