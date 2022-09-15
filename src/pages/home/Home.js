import styles from './Home.module.css';
import {  Link } from 'react-router-dom';


const Home = () => {

  
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img className={styles.banner} src="http://acontececuritiba.com.br/n/images/2018-08-08_banner-release-loterias.png" alt="banner com imagem da loteria federal da caixa" />
      </div>
        <h1>Chega de pensar demais na hora de escolher os "números da sorte". <br/>
            Jogue de forma totalmente aleatória, como funciona nos sorteios, <br/>
            e aumente sua chance de ganhar.
        </h1>

      <Link to='/gerarapostas' className={styles.btn}>
        Gerar volante
      </Link>
      

      <div className={styles.container_info}> 
        <h3>
          O MEU JOGO FÁCIL não tem ligação com o promotor dos sorteios, a Caixa Econômica Federal. <br/>
            O intuito do site é ajudar a escolher os números que preencherão os volantes. <br/>
                      Estamos na torcida para que você seja um ganhador, boa sorte!!!
        </h3>
      </div>
       
    </div>
  )
}

export default Home