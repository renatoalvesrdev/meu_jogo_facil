import styles from '../Options.module.css';

const Lotofacil = () => {
  return (
    <div className={styles.container}>
        <h1>Lotofácil</h1>
        <h3>A lotofácil permite que você marque entre 15 e 20 números, dentre os 25 disponíveis.</h3>

        <div className={styles.container_second}>
            <h2>Escolha quantos números você deseja gerar?</h2>
            <select className={styles.select}>
                <option value="15">15 números</option>
                <option value="16">16 números</option>
                <option value="17">17 números</option>
                <option value="18">18 números</option>
                <option value="19">19 números</option>
                <option value="20">20 números</option>
            </select>
            <button className={styles.btn}>Sortear</button>

            <div className={styles.container_terc}> 
              <h2>???????????</h2>
            </div>
        </div>

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