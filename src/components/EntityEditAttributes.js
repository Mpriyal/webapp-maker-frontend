import React from 'react'
import AttributeEdit from "./AttributeEdit";
import {Link} from "react-router-dom";
import axios from "axios";
import { URL } from '../utils/contants'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Head = () => {
    return (
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Validations</th>
            <th scope="col">Edit/Delete</th>
        </tr>
        </thead>)
};

class EnitityEditAttributes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing : false,
            entity: {},
            fields: []
        }
    }
    componentDidMount () {
        this.loadFields()
    }

    loadFields = async () => {
        try {
            let fields = await axios.get(URL + '/entity/' + this.props.entityId+ '/field');
            if(fields) {
                console.log(fields)
                this.setState({fields: fields.data})
            }
        } catch (e) {
            toast("Connection error");
        }
    };
    addField = async () => {
        const defaultField = {
            "name" : "Default",
            "label" : "Default",
            "type": "Text",
            "validation": "Required",
            "enumerations": null,
            "entityId" : this.props.entityId
        };

        try {
            let newField = await axios.post(URL + '/entity/' + this.props.entityId+ '/field',defaultField );
            if(newField) {
                this.loadFields()
            }
        } catch (e) {
            toast("Connection error");
        }
        this.props.addNewAttribute()
    };
    deleteField = async (fieldObj) => {

        try {
            let field = await axios.delete(URL + '/entity/' + this.props.entityId+ '/field/' + fieldObj._id);
            if(field) {
                this.loadFields()
            }
        }
        catch (e) {
            toast("Connection error");
        }
    };
    render() {
        return (
            <div className='container my-5'>
                {this.state.editing && <AttributeEdit/>}
                <button type="button" className="btn btn-outline-primary" onClick={this.addField}>Add New Attribute</button>
                <table className="table table-striped mt-5">
                    <Head/>
                    <tbody>
                    {this.state.fields.map((v,index) => (
                        <tr key={v._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{v.name}</td>
                            <td>{v.type}</td>
                            <td>{v.validation}</td>
                            <td>
                                <div className="row">
                                    <div className='col-6'>
                                        <Link to={`/entity/${this.props.entityId}/field/${v._id}/edit`}>
                                            <i className="fa fa-edit"
                                               onClick={() => this.setState({editing : !this.state.editing, entity: v})}/>
                                        </Link>

                                    </div>
                                    <div className='col-6'>
                                        <i onClick={() => this.deleteField(v)} className="fa fa-trash"/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className='row mt-4'>
                    <div className='col-6'>
                        <Link to='/entity'>
                            <button
                                type="button"
                                className="btn btn-block btn-outline-secondary">
                                Cancel
                            </button>
                        </Link>
                    </div>
                    <div className='col-6'>
                        <button
                            type="button"
                            onClick={this.save}
                            className="btn btn-block btn-outline-success">Save</button>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        )
    }
}

export default EnitityEditAttributes;
