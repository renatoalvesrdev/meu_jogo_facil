import styles from './GerarAposta.module.css';

import {Link} from 'react-router-dom';

const GerarAposta = () => {
  return (
    <div className={styles.container}>
      <h1>Escolha o jogo de seu interesse.</h1>

      <div className={styles.menu_options}>
        <Link to='/lotofacil' className={styles.btn_loto}>
          Lotofácil
        </Link>
        <Link to='/megasena' className={styles.btn_mega}>
          Mega-sena
        </Link>
        <Link to='/quina' className={styles.btn_quina}>
          Quina
        </Link>
        <Link to='/lotomania' className={styles.btn_lotomania}>
          Lotomania
        </Link>
        <Link to='/duplasena' className={styles.btn_dupla}>
          Dupla-sena
        </Link>
      </div>
      
    </div>
  )
}

export default GerarAposta