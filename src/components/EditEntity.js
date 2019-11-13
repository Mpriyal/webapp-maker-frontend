import React, { Component } from 'react'
import EntityEditAttributes from './EntityEditAttributes';
import EntityEditProperties from './EntityEditProperties';
import EntityEditBasic from './EntityEditBasic';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import axios from 'axios';

export default class EditEntity extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params);
        this.state = {
            role: 'basic',
            entity1: {},
            fields: [],
            entity: {
                id: 1,
                name: 'Movies',
                attributes: [{
                    id: 123,
                    name: 'Id',
                    type: 'NUMBER',
                    validations: [{
                        name: 'required',
                        required: true,
                        min_length: 2,
                        max_length: 100
                    }]
                }, {
                    id: 234,
                    name: 'Name',
                    type: 'VARCHAR',
                    validations: [{
                        name: 'not required',
                        required: false
                    }]
                }]
            }
        }
    }
    componentDidMount = async () => {
        try {
            let entity = await axios.get('http://localhost:4000/api/user/5dc1ffd0e8bcb8621c4eab6b/project/5dc6454be60ec981929587e4/entity/' + this.props.match.params.editId);
            if(entity) {
                this.setState({entity1: entity.data[0]})
            }
            let fields = await axios.get('http://localhost:4000/api/user/5dc1ffd0e8bcb8621c4eab6b/project/5dc6454be60ec981929587e4/entity/' + this.props.match.params.editId + '/field');
            if(fields) {
                this.setState({fields: fields.data})
            }
        }
        catch (e) {
            console.log('Cannot get entity', e)
        }
    };


    addNewAttribute = () => {
        let newentity = this.state.entity;
        let newAttributes = this.state.entity.attributes;
        let dummyAttribute = {
            id: Date.now(),
            name: 'Default',
            type: 'VARCHAR',
            validations: [{
                name: 'required',
                required: true,
                min_length: 2,
                max_length: 100
            }]
        };
        newAttributes.push(dummyAttribute)
        newentity.attributes = newAttributes
        this.setState({entity: newentity})
    };
    render() {
        console.log('the dtate,', this.state);
        return (
            <div className="container my-5">
                <Navbar/>
                <h2 className="my-4 mx-2">Edit Entity</h2>
                <div className=" mt-5 card">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <p className="nav-link active"
                                data-toggle="tab"
                                role="tab"
                                onClick={() => this.setState({ role: 'basic' })}>Basic</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link"
                                data-toggle="tab"
                                role="tab"
                                onClick={() => this.setState({ role: 'attributes' })}>Attributes</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link"
                                data-toggle="tab"
                                role="tab"
                                onClick={() => this.setState({ role: 'properties' })}>Properties</p>
                        </li>
                    </ul>
                    {this.state.role === 'basic' && this.state.entity1.name && this.state.entity1.label &&
                    <EntityEditBasic entity={this.state.entity1} onNameChange={(e) => this.OnNameChange(e)} onLabelChange={(e) => this.onLabelChange(e)}  />}
                    {this.state.role === 'attributes' && this.state.fields &&
                    <EntityEditAttributes
                        fields={this.state.fields}
                        entityId={this.state.entity1._id}
                        addNewAttribute={this.addNewAttribute}
                        attributes={this.state.entity.attributes}/>}
                    {this.state.role === 'properties' && <EntityEditProperties/>}
                    <div className='row'>
                        <div className='col-6'>
                            <Link to='/entity'>
                                <button type="button" className="btn btn-block btn-outline-secondary">
                                    Cancel
                                </button>
                            </Link>
                        </div>
                        <div className='col-6'>
                            <button type="button" className="btn btn-block btn-outline-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
