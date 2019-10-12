import React from 'react'

const EntityItem = (props) => {
    return (
        <div className="card col-5 mx-4 my-4" style = {{"max-width" : "500px"}}>
            <div className="card-body">
                <span className = {'row'}>
                    <h2 className="card-title my-3 col-4">{props.relation.name}</h2>
                    <button type="button" className="btn btn-sm btn-outline-primary col-3 mx-2 my-3">Edit</button>
                    <button type="button" className="btn btn-sm btn-outline-danger col-3 mx-2 my-3">Delete</button>
                </span>
                <hr />
                {props.relation.attributes.map((v, index) => (
                    <p key = {index}>{v.name} : {v.type}</p>
                ))}
            </div>
        </div>
    )
}

export default EntityItem;