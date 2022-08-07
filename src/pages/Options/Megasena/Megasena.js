import GerarNumeros from '../../../components/GerarNumeros';
import styles from '../Options.module.css';

const Megasena = () => {

  
  return (
    <div className={styles.container}>
        <GerarNumeros />

       <div className={styles.container_info}>
          <h1>Sobre a Mega-sena</h1>
          <h2>Como jogar?</h2>
          <p>O apostador deve marcar de 6 a 15 números dentre os 60 disponíveis. Para ganhar bastar acertar a partir de 4 números.</p>

          <h2>Aposta</h2>
          <p>A aposta mínima, de 6 números, custa R$ 4,50. Quanto mais números marcar, maior o preço da aposta e maiores as chances de faturar o prêmio mais cobiçado do país.
          </p>

          <h2>Sorteios</h2>
          <p>Os sorteios da Mega-Sena são realizados duas vezes por semana, às quartas e aos sábados.</p>

          <h2>Recebimento de prêmios</h2>
          <p>Você pode receber seu prêmio em qualquer casa lotérica credenciada ou nas agências da Caixa. Caso o prêmio líquido seja superior a R$ 1.332,78 (bruto de R$ 1.903,98) o pagamento pode ser realizado somente nas agências da Caixa. Valores iguais ou acima de R$ 10.000,00 são pagos após 2 dias de sua apresentação na agência da Caixa.</p>


       </div>

    </div>
  )
}

export default Megasena