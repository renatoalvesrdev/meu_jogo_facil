import {NavLink} from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
        <NavLink className={styles.brand} to='/'>
            Meu <span>Jogo</span> Fácil
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to='/'>Inicio</NavLink>
            </li>
            <li>
                <NavLink to='/geraraposta'>Gerar aposta</NavLink>
            </li>
            <li>
                <NavLink to='/comofunciona'>Como funciona?</NavLink>
            </li>
            <li>
                <NavLink to='/sobre'>Sobre nós</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar