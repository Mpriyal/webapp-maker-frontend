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
                    name: 'Id',
                    type: 'NUMBER',
                    validations: [{
                        name: 'required',
                        required: true,
                        min_length: 2,
                        max_length: 100
                    }]
                }, {
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
    render() {
        return (
            <div className="container my-5">
                <h2 className="my-4 mx-2">Edit Entity</h2>
                <div className=" mt-5 card">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active"
                                data-toggle="tab"
                                href="#home"
                                role="tab"
                                onClick={() => this.setState({ role: 'basic' })}>Basic</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                                data-toggle="tab"
                                href="#profile"
                                role="tab"
                                onClick={() => this.setState({ role: 'attributes' })}>Attributes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                                data-toggle="tab"
                                href="#contact"
                                role="tab"
                                onClick={() => this.setState({ role: 'properties' })}>Properties</a>
                        </li>
                    </ul>
                    {this.state.role === 'basic' && <EntityEditBasic />}
                    {this.state.role === 'attributes' && <EntityEditAttributes attributes={this.state.entity.attributes}/>}
                    {this.state.role === 'properties' && <EntityEditProperties />}
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
