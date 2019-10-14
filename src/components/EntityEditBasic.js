import React from 'react'

const EnitityEditBasic = () => {
    return (
        <div className='container my-5'>
            <label htmlFor="entity">Name of the Entity</label>
            <input type="text" className="form-control" id="entity" placeholder="Enter name of the Entity" />
        </div>
    )
};

export default EnitityEditBasic;