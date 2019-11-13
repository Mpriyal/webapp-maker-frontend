import React from 'react'

class EntityEditBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entityName: this.props.entity.name,
            label: this.props.entity.label
        }
    }
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
            </div>
        )
    }
}

export default EntityEditBasic;
