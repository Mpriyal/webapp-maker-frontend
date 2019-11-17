import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {URL} from "../utils/contants";

const onDeleteClick = async (props) => {
    /*
    We will make an API call here through redux
    */
    console.log('The enitity to delete is: ', props);

    try {
        let deletedEntity = await axios.delete(URL + '/entity/' + props.relation._id)
        if(deletedEntity) {
            props.rerenderEntities()
        }
    }
    catch (e) {
        console.log('Could not delete', e);
    }
};

const EntityItem = (props) => {
    return (
        <div className="card col-5 mx-4 my-4" style = {{"maxWidth" : "500px"}}>
            <div className="card-body">
                <span className = {'row'}>
                    <h2 className="card-title my-3 col-4">{props.relation.name}</h2>
                    <Link to={`/entity/${props.relation._id}/edit`} className= 'col-3 my-3'>
                        <button type="button" className="btn btn-block btn-outline-primary">Edit</button>
                    </Link>
                    <button type="button"
                            className="btn btn-block btn-outline-danger col-3 my-3"
                            onClick={() => onDeleteClick(props)}>Delete</button>
                </span>
                <hr />
                {/*{props.relation.attributes.map((v, index) => (*/}
                {/*<p key = {index}>{v.name} : {v.type}</p>*/}
                {/*))}*/}
            </div>
        </div>
    )
};

export default EntityItem;
