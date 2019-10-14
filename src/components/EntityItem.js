import React from 'react'
import ConfirmDeleteModal from './ConfirmDeleteModal';
import {Link} from 'react-router-dom'

const onDeleteClick = (props) => {
    /*
    We will make an API call here through redux
    */
    console.log('The enitity to delete is: ', props);
};

const EntityItem = (props) => {
    return (
        <div className="card col-5 mx-4 my-4" style = {{"maxWidth" : "500px"}}>
            <div className="card-body">
                <span className = {'row'}>
                    <h2 className="card-title my-3 col-4">{props.relation.name}</h2>
                    <Link to='/edit' className= 'col-3 mx-2 my-3'>
                        <button type="button" className="btn btn-outline-primary">Edit</button>
                    </Link>
                    <button type="button" 
                            className="btn btn-sm btn-outline-danger col-3 mx-2 my-3" 
                            data-toggle="modal" 
                            data-target="#exampleModal">Delete</button>
                    <ConfirmDeleteModal onDeleteClick={onDeleteClick} element={props}/>
                </span>
                <hr />
                {props.relation.attributes.map((v, index) => (
                    <p key = {index}>{v.name} : {v.type}</p>
                ))}
            </div>
        </div>
    )
};

export default EntityItem;