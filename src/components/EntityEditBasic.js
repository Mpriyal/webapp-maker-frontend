import React from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import {URL} from "../utils/contants";

class EntityEditBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entityName: this.props.entity.name,
            label: this.props.entity.label
        }
    }
    save = async () => {
        let updatedEntity = await axios.put(URL + '/entity/'+ this.props.entity._id,{
            name: this.state.entityName,
            label: this.state.label
        })
    };
    render() {
        return (
            <div className='container my-5'>
                <label htmlFor="entity">Name</label>
                <input type="text" className="form-control"
                       id="entity" placeholder="Name"
                       value={this.state.entityName}
                       onChange={(e) => this.setState({entityName: e.target.value})}/>
                <label htmlFor="label" className={'mt-3'}>Label</label>
                <input type="text" className="form-control"
                       id="label" placeholder="Label"
                       value={this.state.label}
                       onChange={(e) => this.setState({label: e.target.value})}/>

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
            </div>
        )
    }
}

export default EntityEditBasic;
