import React from 'react'
const Head = () => {
    return (
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Validations</th>
            <th scope="col">Edit/Delete</th>
        </tr>
    </thead>)
}
const EnitityEditAttributes = (props) => {
    return (
        <div className='container my-5'>
            <button type="button" className="btn btn-outline-primary">Add New Attribute</button>
            <table className="table table-striped mt-5">
                <Head />
                <tbody>
                    {props.attributes.map((v, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{v.name}</td>
                            <td>{v.type}</td>
                            <td>
                                {v.validations.map((validation, i) => (
                                    <p key={i}>{validation.name}</p>
                                ))}
                            </td>
                            <td>
                                <div className="row">
                                    <div className='col-6'>
                                        <i class="fa fa-edit" />
                                    </div>
                                    <div className='col-6'>
                                        <i class="fa fa-trash" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default EnitityEditAttributes;
