import React, {Component} from 'react';
import Navbar from "./Navbar";

class Landing extends Component {
    render() {
        return (
            <div>
                <Navbar history={this.props.history}/>
                Hello there
            </div>
        );
    }
}

export default Landing;
