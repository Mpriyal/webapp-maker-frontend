import React from 'react'

const AddNewEntity = () => {
    return (
        <div className="card col-5 mx-2 my-4" style = {{"minHeight" : "200px", "maxWidth": "500px"}}>
            <div className="row card-body justify-content-center">
                <button type="button" className="btn btn-lg">
                    <i className="fa fa-plus fa-5x"/>
                </button>
            </div>
            <h2 className="text-center mb-5">Add New Entity</h2>
        </div>
    )
};

export default AddNewEntity
