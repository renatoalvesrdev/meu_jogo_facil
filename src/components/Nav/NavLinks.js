import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    gap: 2em;
    padding-right: 5em;

    li {
        padding: 18px 10px;
    }

    @media (max-width: 999px) {
        flex-flow: column nowrap;
        background-color: #026802;
        margin-top: -10px;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li {
            color: #FFF;
        }
    }

    
`;

const NavLinks = ({ open }) => {
  return (
    <UL open={open}>
        <li>
            <NavLink to="/"> Inicio </NavLink>
        </li>
        <li>
            <NavLink  to="/gerarapostas"> Gerar apostas </NavLink>
        </li>
        <li>
            <NavLink  to="/comofunciona"> Como funciona? </NavLink>
        </li>
        <li>
            <NavLink  to="/sobre"> Sobre nós </NavLink>
        </li>
    </UL>
  )
}

export default NavLinks