import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {URL} from "../utils/contants";

class AttributeEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            label: '',
            dataTypes: ['Text', 'Number', 'Decimal', 'Date',
                'DateTime', 'Boolean', 'Enumeration', 'Relation (One)', 'Relation (Many)'],
            DummyEntities: ['Movies', 'Actors', 'Library', 'Books'],
            DummyFields: ['Id','Name', 'Age', 'Date Of Birth']
        }
    }
    componentDidMount() {
        this.loadFieldData();
    }
    loadFieldData = async () => {
        try {
            let field = await axios.get(URL + '/entity/' + this.props.match.params.entityId+ '/field/' + this.props.match.params.fieldId);
            if(field) {
                this.setState({...this.state,... field.data[0]});
            }
        } catch (e) {
            console.log('Cannot get entity', e)
        }
    };
    handleChangeDataType = (e) => {
        this.setState({dataTypeInitial: e.target.value });
    };
    render() {
        console.log('the state is', this.state)
        return (
                <div className="container my-5 card p-5">
                    <h3 className={'my-3'}>Title</h3>
                    <label htmlFor="entity">Name</label>
                    <input type="text" className="form-control"
                           id="entity"
                           value={this.state.name}
                           onChange={(e) => this.setState({name: e.target.value})}/>
                    <label htmlFor="label" className={'mt-3'}>Label</label>
                    <input type="text" className="form-control"
                           id="label" placeholder="Label"
                           value={this.state.label}
                           onChange={(e) => this.setState({label: e.target.value})}/>
                    <label htmlFor="type" className={'mt-3'}>Type</label>
                    <div className="dropdown">
                        <select className="custom-select"
                                value={this.state.type}
                                onChange={this.handleChangeDataType}
                                id="inputGroupSelect04">
                            {this.state.dataTypes.map((v, ind) =>
                                <option key={ind} value={v}>{v}</option>
                            )}
                        </select>
                    </div>
                    {(this.state.dataTypeInitial === 'Relation (One)' || this.state.dataTypeInitial === 'Relation (Many)')
                    && <div>
                        <label htmlFor="type" className={'mt-3'}>Relation Entity</label>
                        <div className="dropdown">
                            <select className="custom-select"
                                    id="inputGroupSelect04">
                                {this.state.DummyEntities.map((v, ind) =>
                                    <option key={ind} value={v}>{v}</option>
                                )}
                            </select>
                        </div>
                    </div>}
                    {(this.state.dataTypeInitial === 'Relation (One)' || this.state.dataTypeInitial === 'Relation (Many)')
                    && <div>
                        <label htmlFor="type" className={'mt-3'}>Relation Field</label>
                        <div className="dropdown">
                            <select className="custom-select"
                                    id="inputGroupSelect04">
                                {this.state.DummyFields.map((v, ind) =>
                                    <option key={ind} value={v}>{v}</option>
                                )}
                            </select>
                        </div>
                    </div>}
                    <div className='row mt-3'>
                        <div className='col-6'>
                            <Link to='/edit'>
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
        );
    }
}

export default AttributeEdit;
