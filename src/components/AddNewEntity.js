import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddNewEntity extends React.Component {
    addEntity = async () => {
        const defaultEntity = {
            "name" : "Default",
            "label" : "Default Label"
        };
        try {
            let userId = localStorage.getItem('userId');
            let newEntity = await axios.post('http://localhost:4000/api/user/'+userId+'/project/'+this.props.projectId+ '/entity', defaultEntity)
            if (newEntity){
                this.props.refreshEntities()
            }
        }catch (e) {
            toast("Connection error");
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
                <ToastContainer/>
            </div>
        )
    }
}

export default AddNewEntity
