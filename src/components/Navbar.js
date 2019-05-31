import React from 'react';
import logo from '../Images/TeaOakLogo.png';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class Navbar extends React.Component {

    render() {
        return <NavWrapper>
            <div className="navbar navbar-expand-lg navbar-light bg-length" style={{background: "white"}}>
                <img src={logo} alt="logo" />
                <div className="collapse navbar-collapse show ml-sm-5">
                    <ul className="navbar-nav text-right">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">HOME</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/recipes" className="nav-link">RECIPES</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </NavWrapper>


    }
}


const NavWrapper = styled.nav`
   position:-webkit-sticky;
    position: sticky;
    top:0;
    width: 100%;
    z-index: 9999;

    .nav-link{
        font-size: 1.5rem;
    
}
`

export default Navbar;