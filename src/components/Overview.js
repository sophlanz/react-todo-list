import React from "react"

class Overview extends React.Component {
    constructor(){
        super();
    };
   
    
    render(){
        const tasks = this.props.tasks;
        const deleteTask= this.props.deleteTask;
             //map the tasks and create the html
   return (
    <div>
         <ul>
         {tasks.map((task, idx)=> {
          return(
              <div>
              
                 <li key={task.id}>
                     <span>{idx+1}.{task.text}</span>
                     <button onClick={deleteTask.bind(this,idx)} >Delete Task</button>
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


   


