import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {URL} from "../utils/contants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class EntityItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fields: []
        }
    }
    componentDidMount () {
        this.loadEntitiesForProject()
    }

    onDeleteClick = async () => {
        try {
            let deletedEntity = await axios.delete(URL + '/entity/' + this.props.relation._id)
            if(deletedEntity) {
                this.props.rerenderEntities()
            }
        }
        catch (e) {
            toast("Connection error");
        }
    };

    loadEntitiesForProject = async () => {
        try {
            let fields = await axios.get(URL + "/entity/"  + this.props.relation._id + '/field');
            if(fields) {
                this.setState({fields: fields.data});
            }
        } catch (e) {
            toast("Connection error");
        }
    };
    render() {
        return (
            <div className="card col-5 mx-4 my-4" style={{"maxWidth": "500px"}}>
                <div className="card-body">
                <span className={'row'}>
                    <h2 className="card-title my-3 col-4">{this.props.relation.name}</h2>
                    <Link to={`/entity/${this.props.relation._id}/edit`} className='col-3 my-3'>
                        <button type="button" className="btn btn-block btn-outline-primary">Edit</button>
                    </Link>
                    <button type="button"
                            className="btn btn-block btn-outline-danger col-3 my-3"
                            onClick={() => this.onDeleteClick(this.props)}>Delete</button>
                </span>
                    <hr/>
                    {this.state.fields.map((v, index) => (
                    <p key = {index}>{v.name} : {v.type}</p>
                    ))}
                </div>
                <ToastContainer/>
            </div>
        )
    }
};

export default EntityItem;
