import React, { Component } from 'react'
import EntityItem from '../components/EntityItem'
import canonical from '../utils/contants'
import AddNewEntity from '../components/AddNewEntity'
import { Link} from 'react-router-dom'
import Navbar from "../components/Navbar";
import axios from 'axios';

export default class Entity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canonical: canonical,
            entities: []
        }
    }
    componentDidMount = async () => {
        try {
            let entities = await axios.get("http://localhost:4000/api/user/5dc1ffd0e8bcb8621c4eab6b/project/5dc6454be60ec981929587e4/entity");
            if(entities) {
                this.setState({
                    entities : entities.data
                })
            }
            console.log('the entity is', entities.data);
        }
        catch (e) {
            console.log("the error", e)
        }
    };
    rerenderEntities = async ()=> {
        try {
            let entities = await axios.get("http://localhost:4000/api/user/5dc1ffd0e8bcb8621c4eab6b/project/5dc6454be60ec981929587e4/entity");
            if(entities) {
                this.setState({
                    entities : entities.data
                })
            }
            console.log('the entity is', entities.data);
        }
        catch (e) {
            console.log("the error", e)
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
                    <Link to='/new' className= 'col-3 my-3'>
                        <AddNewEntity />
                    </Link>
                </div>
            </div>
        )
    }
}
