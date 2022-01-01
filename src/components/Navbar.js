import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  
    render() {
        return (
            <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
                <div className="container">
            <Link to="/" className='navbar-brand '>
                <i className={this.props.icon}></i> {this.props.title}
            </Link>
            </div>
            <div className="collapse navbar-collapse">
                <div className="navbar-nav ml-auto">
                    <li className="nav-item s">
                        <Link to='/about' className='nav-link'>About</Link>
                    </li>
                </div>
            </div>
              </nav>
        );
    }
}

export default Navbar;
