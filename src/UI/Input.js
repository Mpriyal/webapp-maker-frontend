import React from "react";

const Input = (values) => {
    return (<div className="form-group">
        <label htmlFor={values.id}>{values.name}</label>
        <input
            onChange={(e) => values.onChange(e.target.value)}
            type={values.type} className="form-control" id={values.id}
            value={values.value}
            placeholder={values.placeholder} />
        {values.type === 'email' &&
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>}
    </div>)
};
export { Input }
