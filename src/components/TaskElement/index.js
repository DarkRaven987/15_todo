import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

export default class TaskElement extends React.Component {


    render(){

        const el = this.props.task;

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
                    {el.status? null : <button className="btn btn-outline-success" onClick={ () => {this.props.onTaskIsDoneHandler(el.id)}}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </button>}
                    <button className="btn btn-outline-danger" onClick={() => {this.props.onRemoveTaskHandler(el.id)}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                </div>
            </div>
        );
    }

}