import React from 'react';
import {FaBeer} from 'react-icons/fa';
import logo from '../Images/logo.svg';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class Navbar extends React.Component {

    render() {
        return (
            <NavWrapper>
                <nav className="navbar navbar-expand-lg navbar-light bg-length">
                    <img src={logo} alt="logo" />
                    <div className="collapse navbar-collapse show ml-sm-5">
                        <ul className="navbar-nav">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/recipes" className="nav-link">Recipes</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            </NavWrapper>

        )
    }
}


const NavWrapper = styled.nav`
.nav-link{
    font-size: 1.5rem;
}

`

export default Navbar;