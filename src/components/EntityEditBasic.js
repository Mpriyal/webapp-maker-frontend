import React from 'react'

class EntityEditBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entityName: '',
            label: ''
        }
    }

    render() {
        return (
            <div className='container my-5'>
                <label htmlFor="entity">Name</label>
                <input type="text" className="form-control"
                       id="entity" placeholder="Name"
                       value={this.props.entity.name}
                       onChange={(e) => this.props.OnNameChange(e)}/>
                <label htmlFor="label" className={'mt-3'}>Label</label>
                <input type="text" className="form-control"
                       id="label" placeholder="Label"
                       // value={this.props.entity.label}
                       onChange={(e) => this.props.onLabelChange(e)}/>
            </div>
        )
    }
};

export default EntityEditBasic;
