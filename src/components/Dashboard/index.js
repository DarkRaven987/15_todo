import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons'

import Tasks from '../../tasks/tasks';

class Dashboard extends React.Component {

    constructor(props){
        super(props);

        this.state={tasks: Tasks}
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
        const {tasks} = this.state;



        this.setState({
            tasks: tasks
        })

    };

    render(){

        const {tasks} = this.state;

        const html = tasks.map((el) => {

            const isTaskDoneClass = el.status?  "TaskIsDone":"" ;

            return(
                <div className={`TaskElement col-12 col-md-8 col-lg-7 d-flex py-2 ${isTaskDoneClass}`} key={el.id}>
                    <div className="TaskTitle col-2">
                        {el.title}
                    </div>
                    <div className="TaskDesc d-flex col-7">
                        {el.desc}
                    </div>
                    <div className="TaskControls col-3 d-flex justify-content-start align-items-start">
                        {el.status? null : <button className="btn btn-outline-success" onClick={ () => {this.onTaskIsDoneHandler(el.id)}}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </button>}
                        <button className="btn btn-outline-danger" onClick={() => {this.onRemoveTaskHandler(el.id)}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                    </div>
                </div>
            );
        });

        return(
            <div className="row my-5">
                <div className="container">
                    <div className="row flex-column align-items-center">
                        {html}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;