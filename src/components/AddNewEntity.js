import React from 'react'

const AddNewEntity = () => {
    return (
        <div className="card col-5 mx-2 my-4" style = {{"min-height" : "200px", "maxWidth": "500px"}}>
            <div className="row card-body justify-content-center">
                <button type="button" className="btn btn-lg"><i class="fa fa-plus fa-5x"></i></button>
            </div>
            <h2 className="text-center mb-5">Add new entity</h2>
        </div>
    )
}

export default AddNewEntity
