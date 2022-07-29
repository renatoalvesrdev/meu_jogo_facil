import { NavLink } from "react-router-dom"
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>

            <div className={styles.container_logo}>
                <NavLink className={styles.logo}  to="/"> Meu <span>jogo</span> fácil
                </NavLink>
            </div> 

            <div className={styles.menu_list}>
                <ul className={styles.links_list}>
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
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar