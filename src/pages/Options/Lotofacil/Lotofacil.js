import GerarNumeros from '../../../components/GerarNumeros';
import styles from '../Options.module.css';

const Lotofacil = () => {
  return (
    <div className={styles.container}>
        <GerarNumeros />

       <div className={styles.container_info}>
          <h1>Sobre a Lotofácil</h1>
          <h2>Como jogar?</h2>
          <p>O apostador deve marcar entre 15 a 20 números de 1 a 25 e ganha se acertar 11, 12, 13, 14 ou 15 números.</p>

          <h2>Aposta</h2>
          <p>A aposta mínima, de 15 números, custa R$ 2,50. <br/>
          16 números custa R$40,00. <br/>
          17 números custa R$340,00. <br/>
          18 números custa R$2040,00. <br/>
          19 números custa R$9690,00. <br/>
          20 numeros custa R$38.760,00. <br/>
          </p>

          <h2>Sorteios</h2>
          <p>Os sorteios são realizados de segundas a sábados sempre às 20h.</p>

          <h2>Recebimento de prêmios</h2>
          <p>Você pode receber seu prêmio em qualquer casa lotérica credenciada ou nas agências da Caixa. Caso o prêmio líquido seja superior a R$ 1.332,78 (bruto de R$ 1.903,98) o pagamento pode ser realizado somente nas agências da Caixa. Valores iguais ou acima de R$ 10.000,00 são pagos após 2 dias de sua apresentação na agência da Caixa.</p>
       </div>

    </div>
  )
}

export default Lotofacil