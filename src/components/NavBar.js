import React from 'react'
import '../components/NavBar.css'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    render() {
        return <nav className="navbar navbar-expand-lg nav1">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse options" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/" exact="true">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item text-right">
                        <Link className="nav-link" to="/cart">Cart</Link>
                    </li>
                </ul>
        </div>
      </nav>

            }
}

export default NavBar;