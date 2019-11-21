import React, {Component} from 'react';
import axios from "axios";
import {URL} from "../utils/contants";
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AttributeEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            label: '',
            enumerations: '',
            dataTypes: ['Text', 'Number', 'Decimal', 'Date',
                'DateTime', 'Boolean', 'Enumeration', 'Relation (One)', 'Relation (Many)'],
            DummyEntities: [],
            DummyFields: [],
            validations: ['Required', 'Not Required'],
            selectedValidation: 'Required'
        }
    }
    componentDidMount() {
        this.loadFieldData();
        this.loadEntitiesForProject();
    }

    /*
    This function loads the entities for the project
     */
    loadEntitiesForProject = async () => {
        try {
            let entities = await axios.get("http://localhost:4000/api/user/5dc1ffd0e8bcb8621c4eab6b/project/"+ this.props.match.params.projectId+ "/entity");
            if(entities) {
                console.log('the entities are', entities);
                this.setState({DummyEntities : entities.data.filter((v) => v._id !== this.props.match.params.entityId)});
                this.getFieldForEntity(this.state.DummyEntities[0]._id)
            }
        } catch (e) {
            toast("Connection error");
        }
    };

    /*
    This function is used to save the updations made to the field
     */
    save = async () => {
        try{
            let updatedField = await axios.put(URL + '/entity/'+this.props.match.params.entityId+'/field/'+ this.props.match.params.fieldId,{
                name: this.state.name,
                type: this.state.type,
                label: this.state.label,
                validation: this.state.selectedValidation,
                enumerations: this.state.enumerations !== '' ? this.state.enumerations : null
            });
            if(updatedField) {
                toast("Saved Successfully");
            }
        }catch (e) {
            toast("Connection error");
        }
    };

    /*
    This function is used to load the field information for a field.
     */
    loadFieldData = async () => {
        try {
            let field = await axios.get(URL + '/entity/' + this.props.match.params.entityId+ '/field/' + this.props.match.params.fieldId);
            if(field) {
                this.setState({...this.state,...field.data[0]});
            }
        } catch (e) {
            toast("Connection error");
        }
    };

    /*
    Event handler for change in datatype.
     */
    handleChangeDataType = (e) => {
        this.setState({type: e.target.value });
    };

    /*
    Event handler for change in entity.
    */
    handleChangeEntity = async (e) => {
        this.getFieldForEntity(e.target.value)
    };

    /*
    This function gets the fields for the entity
     */
    getFieldForEntity = async (id) => {
        try {
            let fields = await axios.get(URL + '/entity/' + id+ '/field/' );
            if(fields) {
                this.setState({DummyFields: fields.data});
            }
        } catch (e) {
            toast("Connection error");
        }
    };

    handleChangeValidation = (e) => {
        this.setState({selectedValidation: e.target.value})
    };

    render() {
        return (
            <div className="container my-5 card p-5">
                <Navbar/>
                <h3 className={'my-3'}>{this.state.name}</h3>
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
                <label htmlFor="validation" className={'mt-3'}>Validations</label>
                <div className="dropdown">
                    <select className="custom-select"
                            value={this.state.selectedValidation}
                            onChange={this.handleChangeValidation}
                            id="inputGroupSelect04">
                        {this.state.validations.map((v, ind) =>
                            <option key={ind} value={v}>{v}</option>
                        )}
                    </select>
                </div>
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
                {(this.state.type === 'Relation (One)' || this.state.type === 'Relation (Many)')
                && <div>
                    <label htmlFor="type" className={'mt-3'}>Relation Entity</label>
                    <div className="dropdown">
                        <select className="custom-select"
                                onChange={this.handleChangeEntity}
                                id="inputGroupSelect04">
                            {this.state.DummyEntities.map((v, ind) =>
                                <option key={ind} value={v._id}>{v.name}</option>
                            )}
                        </select>
                    </div>
                </div>}
                {(this.state.type === 'Relation (One)' || this.state.type === 'Relation (Many)')
                && <div>
                    <label htmlFor="type" className={'mt-3'}>Relation Field</label>
                    <div className="dropdown">
                        <select className="custom-select"
                                id="inputGroupSelect04">
                            {this.state.DummyFields.map((v, ind) =>
                                <option key={ind} value={v.name}>{v.name}</option>
                            )}
                        </select>
                    </div>
                </div>}
                {(this.state.type === 'Enumeration')
                && <div>
                    <label htmlFor="type" className={'mt-3'}>List the enumerations (Comma separated)</label>
                    <input type="text" className="form-control"
                           id="enumeration"
                           value={this.state.enumerations}
                           onChange={(e) => this.setState({enumerations: e.target.value})}/>
                </div>}
                <div className='row mt-3'>
                    <div className='col-6'>
                        <button
                            type="button"
                            onClick={() => this.props.history.goBack()}
                            className="btn btn-block btn-outline-secondary">
                            Cancel
                        </button>
                    </div>
                    <div className='col-6'>
                        <button type="button"
                                onClick={this.save}
                                className="btn btn-block btn-outline-success">Save</button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default AttributeEdit;
