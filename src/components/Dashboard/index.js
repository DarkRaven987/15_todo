import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Dashboard extends React.Component {
    render(){
        return(
            <div className="row my-5">
                <div className="container">
                    <div className="row flex-column align-items-center">
                        <div className="TaskElement col-12 col-md-8 col-lg-7 d-flex">
                            <div className="TaskTitle col-2">
                                Task Title #1
                            </div>
                            <div className="TaskDesc col-8">
                                Task Description #1
                            </div>
                            <div className="TaskControls col-2">
                                <button>Done</button>
                                <button>Remove</button>
                                <FontAwesomeIcon icon={faCoffee}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;