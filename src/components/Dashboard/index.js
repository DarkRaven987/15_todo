import React from 'react';
import './style.css';
import TaskElement from '../TaskElement';

import Tasks from '../../tasks/tasks';
import _ from "lodash";
import NoTask from "../NoTask/Index";

class Dashboard extends React.Component {

    constructor(props){
        super(props);

        this.state={
            tasks: Tasks,
            newTitle: "",
            newDesc: ""
        }
    }


    onTaskIsDoneHandler = (id) => {
        console.log("Is done!", id);
        const {tasks} = this.state;

        tasks.map((task) => {return (task.id === id) ? task.status=true:null});
        this.setState({
            tasks: tasks
        })
    };

    onRemoveTaskHandler = (id) => {
        console.log("Deleted! ",id);
        let {tasks} = this.state;

        _.remove(tasks, (task) => {
            return task.id === id;
        })

        this.setState({
            tasks: tasks
        })

    };

    onSubmitHandler = (e) => {
        e.preventDefault();

        e.target.reset();
        let {tasks} = this.state;

        const x = {id: tasks[tasks.length-1].id+1, title: this.state.newTitle, desc: this.state.newDesc,status: false}
        tasks.push(x);

        this.setState({tasks: tasks});
    };

    setNewTaskTitle = (e) => {
        this.setState({newTitle: e.target.value})
    };

    setNewTaskDesc = (e) => {
        this.setState({newDesc: e.target.value})
    };

    render(){
        const {tasks} = this.state;
        let html = null;

        if(tasks.length === 0){
            return(
                <NoTask/>
            );
        }else{
            html = tasks.map((el) => {
                return(
                    <TaskElement task = {el} key={el.id}
                                 onTaskIsDoneHandler={this.onTaskIsDoneHandler}
                                 onRemoveTaskHandler={this.onRemoveTaskHandler}/>
                );
            });
        }



        return(
            <div className="row my-5">
                <div className="container">
                    <div className="row flex-column align-items-center">
                        {html}
                    </div>
                    <form action="" className="AddTask" onSubmit={this.onSubmitHandler}>
                        <div className="col-8 col-md-8 justify-content-center d-flex"><input type="text" onChange={this.setNewTaskTitle}/></div>
                        <div className="col-8 col-md-8 justify-content-center d-flex"><input type="text" onChange={this.setNewTaskDesc}/></div>
                        <div className="col-8 col-md-8 justify-content-center d-flex"><button className="btn btn-light">Add task</button></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Dashboard;