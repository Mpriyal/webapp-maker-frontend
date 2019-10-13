import React, { Component } from 'react'
import EntityItem from '../components/EntityItem'
import canonical from '../utils/contants';
import AddNewEntity from '../components/AddNewEntity';
export default class Entity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canonical: canonical
    }
  }
  render() {
    return (
      <div className={'mx-5 my-5 px-5'}>
        <h1>Entities</h1>
        <div className={'row'}>
          {this.state.canonical.relations.map((relation, index) => (
            <EntityItem relation={relation} key={index} />
          ))}
          <AddNewEntity />
        </div>
      </div>
    )
  }
}