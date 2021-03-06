import React, {Component} from 'react';
import axios from "axios";
import {DEV_URL, URL} from "../utils/contants";
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import connect from "react-redux/es/connect/connect";

class AttributeEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            label: '',
            enumerations: '',
            dataTypes: ['Text', 'Number', 'Decimal', 'Date',
                'DateTime', 'Boolean', 'Enumeration'],
            DummyEntities: [],
            relationship: ['','OneToMany','ManyToOne', 'ManyToMany', 'OneToOne'],
            DummyFields: [],
            validations: ['Required', 'Not Required'],
            selectedValidation: 'Required',
            relation: '',
            relationEntity: '',
            relationField: ''
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
            let entities = await axios.get(DEV_URL + "/user/"+this.props.user._id+"/project/"+ this.props.match.params.projectId+ "/entity");
            if(entities) {
                const filteredEntities = entities.data.filter((v) => v._id !== this.props.match.params.entityId)
                this.setState({DummyEntities :filteredEntities ,relationEntity: filteredEntities[0]._id });
                this.getFieldForEntity(this.state.DummyEntities[0]._id)
            }
        } catch (e) {
            toast("Connection error: Cannot load the entities");
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
                enumerations: this.state.enumerations !== '' ? this.state.enumerations : null,
                relation: this.state.relation !== '' ? this.state.relation : null,
                relationEntity: this.state.relation ? this.state.relationEntity : null,
                relationField: this.state.relation ? this.state.relationField : null,

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
            let field = await axios.get(DEV_URL + '/user/1/project/1/entity/' + this.props.match.params.entityId+ '/field/' + this.props.match.params.fieldId);
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
        this.setState({relationEntity: e.target.value});
        this.getFieldForEntity(e.target.value)
    };

    /*
    This function gets the fields for the entity
     */
    getFieldForEntity = async (id) => {
        try {
            let fields = await axios.get(DEV_URL + '/user/1/project/1/entity/' + id+ '/field/' );
            if(fields) {
                this.setState({DummyFields: fields.data, relationField: fields.data[0]._id});
            }
        } catch (e) {
            toast("Connection error");
        }
    };

    handleChangeValidation = (e) => {
        this.setState({selectedValidation: e.target.value})
    };
    handleChangeType = (e) => {
        this.loadEntitiesForProject();
        this.setState({relation: e.target.value})
    };
    handleChangeField = (e) => {
        this.setState({relationField: e.target.value})
    };
    render() {
        return (
            <div className="container my-5 card p-5">
                <Navbar history={this.props.history}/>
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
                {
                 <div>
                    <label htmlFor="type" className={'mt-3'}>Relation Type</label>
                    <div className="dropdown">
                        <select className="custom-select"
                                value={this.state.relation}
                                onChange={this.handleChangeType}
                                id="inputGroupSelect04">
                            {this.state.relationship.map((v, ind) =>
                                <option key={ind} value={v}>{v}</option>
                            )}
                        </select>
                    </div>
                </div>}
                {(this.state.relation)
                && <div>
                    <label htmlFor="type" className={'mt-3'}>Relation Entity</label>
                    <div className="dropdown">
                        <select className="custom-select"
                                value={this.state.relationEntity}
                                onChange={this.handleChangeEntity}
                                id="inputGroupSelect04">
                            {this.state.DummyEntities.map((v, ind) =>
                                <option key={ind} value={v._id}>{v.name}</option>
                            )}
                        </select>
                    </div>
                </div>}
                {(this.state.relation)
                && <div>
                    <label htmlFor="type" className={'mt-3'}>Relation Field</label>
                    <div className="dropdown">
                        <select className="custom-select"
                                value={this.state.relationField}
                                onChange={this.handleChangeField}
                                id="inputGroupSelect04">
                            {this.state.DummyFields.map((v, ind) =>
                                <option key={ind} value={v._id}>{v.name}</option>
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

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps,{})(AttributeEdit)
