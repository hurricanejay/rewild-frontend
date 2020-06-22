import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">ReWild</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto d-flex justify-content-end">
            <li className="nav-item active">
              <a className="nav-link" href="/shop">Shop <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/logIn">Log In</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;