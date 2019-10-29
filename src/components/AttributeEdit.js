import React, {Component} from 'react';
import {Link} from "react-router-dom";

class AttributeEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTypeInitial: 'Text',
            dataTypes: ['Text', 'Integer', 'Decimal', 'Date',
                'DateTime', 'Boolean', 'Enumeration', 'Relation (One)', 'Relation (Many)'],
            DummyEntities: ['Movies', 'Actors', 'Library', 'Books'],
            DummyFields: ['Id','Name', 'Age', 'Date Of Birth']
        }
    }
    handleChangeDataType = (e) => {
        this.setState({dataTypeInitial: e.target.value });
    };
    render() {
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
                                onChange={this.handleChangeDataType}
                                id="inputGroupSelect04">
                            {this.state.dataTypes.map((v, ind) =>
                                <option key={ind} value={v}>{v}</option>
                            )}
                        </select>
                    </div>
                    {(this.state.dataTypeInitial === 'Relation (One)' || this.state.dataTypeInitial === 'Relation (Many)')
                    && <div>
                        <label htmlFor="type" className={'mt-3'}>Relation Entity</label>
                        <div className="dropdown">
                            <select className="custom-select"
                                    id="inputGroupSelect04">
                                {this.state.DummyEntities.map((v, ind) =>
                                    <option key={ind} value={v}>{v}</option>
                                )}
                            </select>
                        </div>
                    </div>}
                    {(this.state.dataTypeInitial === 'Relation (One)' || this.state.dataTypeInitial === 'Relation (Many)')
                    && <div>
                        <label htmlFor="type" className={'mt-3'}>Relation Field</label>
                        <div className="dropdown">
                            <select className="custom-select"
                                    id="inputGroupSelect04">
                                {this.state.DummyFields.map((v, ind) =>
                                    <option key={ind} value={v}>{v}</option>
                                )}
                            </select>
                        </div>
                    </div>}
                    <div className='row mt-3'>
                        <div className='col-6'>
                            <Link to='/edit'>
                                <button type="button" className="btn btn-block btn-outline-secondary">
                                    Cancel
                                </button>
                            </Link>
                        </div>
                        <div className='col-6'>
                            <button type="button" className="btn btn-block btn-outline-success">Save</button>
                        </div>
                    </div>

                </div>
        );
    }
}

export default AttributeEdit;
