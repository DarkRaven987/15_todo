import React from 'react';

export default class NoTask extends React.Component {
    render(){
        return(
            <div className="container d-flex justify-content-center">
                <h3>
                    No tasks were mentioned.
                </h3>
            </div>
        );
    }
}