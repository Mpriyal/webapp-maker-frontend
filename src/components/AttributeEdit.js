import React, {Component} from 'react';

class AttributeEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTypeInitial: 'Text',
            dataTypes: ['Text', 'Integer', 'Decimal', 'Date',
                'DateTime', 'Boolean', 'Enumeration', 'Relation( One)', 'Relation (Many)']
        }
    }
    handleChangeDatatype = (e) => {
        console.log(e);
        this.setState({dataTypeInitial: e.target.value });
    };
    render() {
        console.log(this.state);
        return (
                <div className="container my-5 card p-5">
                    <h3 className={'my-3'}>Title</h3>
                    <label htmlFor="entity">Name</label>
                    <input type="text" className="form-control"
                           id="entity"
                           value={this.state.entityName}
                           onChange={(e) => this.setState({entityName: e.target.value})}/>
                    <label htmlFor="label" className={'mt-3'}>Label</label>
                    <input type="text" className="form-control"
                           id="label" placeholder="Label"
                           value={this.state.label}
                           onChange={(e) => this.setState({label: e.target.value})}/>
                    <label htmlFor="type" className={'mt-3'}>Type</label>
                    <div className="dropdown">
                        <select className="custom-select"
                                onChange={this.handleChangeDatatype}
                                id="inputGroupSelect04">
                            {this.state.dataTypes.map((v, ind) =>
                                <option key={ind} value={this.state.dataTypeInitial}>{v}</option>
                            )}
                        </select>
                    </div>

                </div>
        );
    }
}

export default AttributeEdit;
