import React, { Component } from 'react'
import EntityItem from '../components/EntityItem'
import { canonical, URL } from '../utils/contants'
import AddNewEntity from '../components/AddNewEntity'
import Navbar from "../components/Navbar";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Entity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canonical: canonical,
            entities: []
        }
    }
    componentDidMount() {
        this.rerenderEntities();
    };

    rerenderEntities = async ()=> {
        try {
            let entities = await axios.get(URL + "/entity");
            if(entities) {
                this.setState({
                    entities : entities.data
                })
            }
        }
        catch (e) {
            toast("Connection error");
        }
    };

    render() {
        return (
            <div className={'mx-5 my-5 px-5'}>
                <Navbar/>
                <h1>Entities</h1>
                <div className={'row'}>
                    {this.state.entities.map((entity) => (
                        <EntityItem relation={entity} key={entity._id} rerenderEntities={this.rerenderEntities}/>
                    ))}
                    <div className= 'col-3 my-3'>
                        <AddNewEntity refreshEntities={this.rerenderEntities} />
                    </div>
                </div>
                <ToastContainer/>
            </div>
        )
    }
}
