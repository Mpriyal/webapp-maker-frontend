import React, { Component } from 'react'
import EntityEditAttributes from './EntityEditAttributes';
import EntityEditProperties from './EntityEditProperties';
import EntityEditBasic from './EntityEditBasic';
import { Link } from 'react-router-dom';
export default class EditEntity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 'basic',
            entity: {
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
        return (
            <div className="container my-5">
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
                    {this.state.role === 'basic' && <EntityEditBasic entity={this.state.entity}/>}
                    {this.state.role === 'attributes' && <EntityEditAttributes addNewAttribute={this.addNewAttribute} attributes={this.state.entity.attributes}/>}
                    {this.state.role === 'properties' && <EntityEditProperties/>}
                    <div className='row'>
                        <div className='col-6'>
                            <Link to='/entities'>
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
