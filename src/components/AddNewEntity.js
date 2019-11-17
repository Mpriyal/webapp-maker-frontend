import React from 'react'
import axios from 'axios'
import {URL} from "../utils/contants";

class AddNewEntity extends React.Component {
    addEntity = async () => {
        const defaultEntity = {
            "name" : "Default",
            "label" : "Default Label",
            "projectId" : "5dd1b7197175cb72dcd16bb8"
        };
        try {
            let newEntity = await axios.post(URL + '/entity', defaultEntity)
            if (newEntity){
                this.props.refreshEntities()
            }
        }catch (e) {
            console.log('the error is ', e);
        }
    };
    render() {
        return (
            <div className="card col-5 mx-2 my-4" style={{"minHeight": "200px", "maxWidth": "500px"}}>
                <div className="row card-body justify-content-center">
                    <button type="button" onClick={this.addEntity} className="btn btn-lg">
                        <i className="fa fa-plus fa-5x"/>
                    </button>
                </div>
                <h2 className="text-center mb-5">Add New Entity</h2>
            </div>
        )
    }
}

export default AddNewEntity
