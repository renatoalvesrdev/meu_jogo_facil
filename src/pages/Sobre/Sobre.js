import styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h2>SOBRE O MEU JOGO FÁCIL</h2>

            <p>Este site foi criado com os objetivos de pôr em prática os meus conhecimentos em ReactJs, HTML5, CSS3 e Javascript e de compôr o meu portfólio profissional.
            </p>

            <h2>SOBRE MIM</h2>

            <p>Me chamo Renato Alves, tenho 22 anos e atualmente estou cursando o primeiro semestre do curso de Sistemas de informação.
            </p>
            <p>
              Tenho conhecimento básico em HTML5 semântico, CSS5 e bootstrap, Javascript, ReactJs, Nodejs e Git.
            </p>
            
        </div>
    </div>
  )
}

export default Sobre