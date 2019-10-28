import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
            <Link className="navbar-brand" to="/">WebAppMaker</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/entities">
                            Entities
                    </Link>
                </div>
                <div className="navbar-nav ml-auto">
                    <Link className="nav-item nav-link" to="/login">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </nav>

    )
};

export default Navbar