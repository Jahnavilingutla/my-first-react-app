import React from 'react';
import { Link } from 'react-router-dom';


//class -> className
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
               
                <li className="nav-item">
                    <Link className="nav-link" to="funcom">Functional Component</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="classcom">Class Component</Link>
                </li>

            </ul>
        </nav>
    )
}