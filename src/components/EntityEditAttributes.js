import React from 'react'
import AttributeEdit from "./AttributeEdit";
import {Link} from "react-router-dom";

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
            entity: {}
        }
    }
    handler = () => {
        this.props.addNewAttribute()
    };
    handleNameChange = (e) => {
        let newEntity = this.state.entity;
        newEntity.name = e.target.value;
        this.setState({
            entity : newEntity
        });
    };
    handleTypeChange = (e) => {
        // console.log('handle change called', e)
    };
    handleValidationChange = (e) => {
        // console.log('handle change called', e)
    };
    render() {
        return (
            <div className='container my-5'>
                {this.state.editing && <AttributeEdit/>}
                <button type="button" className="btn btn-outline-primary" onClick={this.handler}>Add New Attribute</button>
                <table className="table table-striped mt-5">
                    <Head/>
                    <tbody>
                    {this.props.attributes.map((v, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{v.name}</td>
                            <td>{v.type}</td>
                            <td>
                                {v.validations.map((validation, i) => (
                                    <p key={i}>{validation.name}</p>
                                ))}
                            </td>
                            <td>
                                <div className="row">
                                    <div className='col-6'>
                                        <Link to={`/entity/${this.props.entityId}/field/${v.id}/edit`}>
                                            <i className="fa fa-edit"
                                               onClick={() => this.setState({editing : !this.state.editing, entity: v})}/>
                                        </Link>

                                    </div>
                                    <div className='col-6'>
                                        <i className="fa fa-trash"/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
};

export default EnitityEditAttributes;
