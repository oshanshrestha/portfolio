import React, { Component } from 'react';
import Waypoint from 'react-waypoint'


class WhenInView extends Component {

    constructor(props) {
        super(props)

        this.state = {
            IsInView : false
        }

    }

    onEnter= ({ previousPosition }) => {
        if ( previousPosition === Waypoint.below ) {
            this.setState({
                IsInView: true
            })
        }
    }
    
    render() {
        return (
            <div>
               <Waypoint onEnter={this.onEnter}></Waypoint> 
               {this.props.children({ IsInView: this.state.IsInView })}
            </div>
        );
    }
}

export default WhenInView;