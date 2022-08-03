import styles from '../Options.module.css';

const Duplasena = () => {
  return (
    <div className={styles.container}>
        <h1>Dupla-sena</h1>
        <h3>A Dupla-sena permite que você marque entre 6 a 15 números, dentre os 50 disponíveis.</h3>

        <div className={styles.container_second}>
            <h2>Escolha quantos números você deseja gerar?</h2>
            <select className={styles.select}>
                <option value="6">6 números</option>
                <option value="7">7 números</option>
                <option value="8">8 números</option>
                <option value="9">9 números</option>
                <option value="10">10 números</option>
                <option value="11">12 números</option>
                <option value="12">12 números</option>
                <option value="13">13 números</option>
                <option value="14">14 números</option>
                <option value="15">15 números</option>
            </select>
            <button className={styles.btn}>Sortear</button>

            <div className={styles.container_terc}> 
              <h2>???????????</h2>
            </div>
        </div>

       <div className={styles.container_info}>
          <h1>Sobre a Dupla-sena</h1>
          <h2>Como jogar?</h2>
          <p>Com apenas um bilhete da Dupla Sena, você tem o dobro de chances de ganhar: são dois sorteios por concurso e ganha acertando 3, 4, 5 ou 6 números no primeiro e/ou segundo sorteios.
          Basta escolher de 6 a 15 números dentre os 50 disponíveis e torcer.</p>

          <h2>Aposta</h2>
          <p>A aposta mínima, de 6 números, custa R$ 2,50. Quanto mais números marcar, maior o preço da aposta.
          </p>

          <h2>Sorteios</h2>
          <p>A Dupla Sena é sorteada às terças, quintas e sábados, sempre às 20h.</p>

          <h2>Recebimento de prêmios</h2>
          <p>Você pode receber seu prêmio em qualquer casa lotérica credenciada ou nas agências da Caixa. Caso o prêmio líquido seja superior a R$ 1.332,78 (bruto de R$ 1.903,98) o pagamento pode ser realizado somente nas agências da Caixa. Valores iguais ou acima de R$ 10.000,00 são pagos após 2 dias de sua apresentação na agência da Caixa.</p>


       </div>

    </div>
  )
}

export default Duplasena