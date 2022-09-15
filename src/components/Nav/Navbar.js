import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


import NavBurguer from './NavBurguer';

const Nav = styled.nav`
    position: fixed;
    z-index: 11;
    width: 100%;
    height: 65px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #008000;
    

    .logo {
        font-size: 1.2em;
        padding-left: 4em;
        color: #fff;
    }
    
    .logo span {
        font-weight: 900;
        text-transform: uppercase;
    }
`;

const Navbar = () => {
    return (
        <Nav> 
            <div className="logo">
                <NavLink to="/"> Meu <span>jogo</span> fácil
                </NavLink>
            </div>  
            <NavBurguer />
        </Nav>
    )
}

export default Navbar