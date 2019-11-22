import React, { Component } from 'react'
import EntityItem from '../components/EntityItem'
import { DEV_URL } from '../utils/contants'
import AddNewEntity from '../components/AddNewEntity'
import Navbar from "../components/Navbar";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import connect from "react-redux/es/connect/connect";

class Entity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entities: []
        }
    }
    componentDidMount() {
        this.rerenderEntities();
    };

    rerenderEntities = async ()=> {
        try {
            let entities = await axios.get( DEV_URL + "/user/"+ this.props.user._id+"/project/"+this.props.match.params.projectId+"/entity");
            if(entities) {
                this.setState({entities : entities.data})
            }
        }
        catch (e) {
            toast("Connection error");
        }
    };

    render() {
        return (
            <div className={'mx-5 my-5 px-5'}>
                <Navbar history={this.props.history}/>
                <h1>Entities</h1>
                <div className={'row'}>
                    {this.state.entities.map((entity) => (
                        <EntityItem projectId={this.props.match.params.projectId} relation={entity} key={entity._id} rerenderEntities={this.rerenderEntities}/>
                    ))}
                    <div className= 'col-3 my-3'>
                        <AddNewEntity refreshEntities={this.rerenderEntities} projectId={this.props.match.params.projectId}/>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps,{})(Entity)
