import styles from './ComoFunciona.module.css';

const ComoFunciona = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
          <h2>Como funciona?</h2>
          <p>Para obter seus números da sorte basta escolher qual tipo de jogo você deseja, escolher a quantidade de números sorteados e clicar em "Sortear"</p>
          <p>Os números, assim como o sorteio oficial, são gerado de forma totalmente aleatória.</p>

          <h2>Quais são os jogos?</h2>
          <p>Por enquanto, os jogos disponíveis são Lotofácil, Lotomania, Mega-sena, Dupla-sena e Quina</p>

          <h2>Reafirmamos que não temos nenhum vínculo com o promotor oficial dos sorteios, a Caixa econômica federal.</h2>
        </div>
    </div>
  )
}

export default ComoFunciona