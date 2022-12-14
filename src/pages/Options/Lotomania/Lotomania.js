import GerarNumeros from '../../../components/GerarNumeros';
import styles from '../Options.module.css';

const Lotomania = () => {
  return (
    <div className={styles.container}>
        <GerarNumeros />

       <div className={styles.container_info}>
          <h1>Sobre a Lotomania</h1>
          <h2>Como jogar?</h2>
          <p>A Lotomania é fácil de jogar e de ganhar: basta escolher 50 números e então concorrer a prêmios para acertos de 20, 19, 18, 17, 16, 15 ou nenhum número.</p>

          <h2>Aposta</h2>
          <p>O preço da aposta é único e custa apenas R$ 2,50.
          </p>

          <h2>Sorteios</h2>
          <p>Os sorteios são realizados às terças-feiras e às sextas-feiras, às 20h.</p>

          <h2>Recebimento de prêmios</h2>
          <p>Você pode receber seu prêmio em qualquer casa lotérica credenciada ou nas agências da Caixa. Caso o prêmio líquido seja superior a R$ 1.332,78 (bruto de R$ 1.903,98) o pagamento pode ser realizado somente nas agências da Caixa. Valores iguais ou acima de R$ 10.000,00 são pagos após 2 dias de sua apresentação na agência da Caixa.</p>


       </div>

    </div>
  )
}

export default Lotomania