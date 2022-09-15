import { React, useState } from 'react';
import styles from '../pages/Options/Options.module.css';

const GerarNumeros = () => {

    const url = window.location.href;

    const urlSplit = url.split('/')[3];

    const [number, setNumber] = useState(1);

    const [sorteados, setSorteados] = useState();

    let max;
    if (urlSplit === 'lotofacil') {
        max = 26;
    } else if (urlSplit === 'megasena') {
        max = 61;
    } else if (urlSplit === 'duplasena') {
        max = 51;
    } else if (urlSplit === 'quina') {
        max = 81;
    } else if (urlSplit === 'lotomania') {
        max = 101;
    }

    let numerosSorteados = [];

    const Sortear = (e) => {
        e.preventDefault();

        while (numerosSorteados.length < number) {
            let numeroSorteado = Math.floor(Math.random() * (max - 1) + 1);

            if (numerosSorteados.indexOf(numeroSorteado) === -1) {
                numerosSorteados.push(numeroSorteado);
            }}
        
            numerosSorteados.sort((a, b) => a - b);

            numerosSorteados.sort((a, b) => a - b);

            const numerosRenderizados = numerosSorteados.map((sorteio) => <li className={styles.lista} key={sorteio}>{sorteio}</li>);
<<<<<<< HEAD
=======

>>>>>>> c91baec404b61c07886a5b3e31841122715131ba
            console.log(numerosSorteados);

            setSorteados(numerosRenderizados);
        }

  return (
     <div>
        {urlSplit === 'lotofacil' && 
        <div>
            <h1>Lotofácil</h1>
            <h3>A lotofácil permite que você marque entre 15 e 20 números, dentre os 25 disponíveis.</h3>
    
            <div className={styles.container_second}>
                <h2>Escolha quantos números você deseja gerar?</h2>
                <select name='number' value={number} className={styles.select} onChange={quant => setNumber(parseInt(quant.target.value))}>
                    <option value="">Selecione</option>
                    <option value="15">15 números</option>
                    <option value="16">16 números</option>
                    <option value="17">17 números</option>
                    <option value="18">18 números</option>
                    <option value="19">19 números</option>
                    <option value="20">20 números</option>
                </select>
                <button onClick={Sortear} className={styles.btn}>Sortear</button>   

                <ul className={styles.container_terc}> 
                    {sorteados}
                </ul>
            </div>
        </div>  
        }

        {urlSplit === 'megasena' &&
            <div>
                <h1>Mega-sena</h1>
                <h3>A Mega-sena permite que você marque entre 6 a 15 números, dentre os 60 disponíveis.</h3>

                <div className={styles.container_second}>
                    <h2>Escolha quantos números você deseja gerar?</h2>
                    <select name='number' value={number} className={styles.select} onChange={quant => setNumber(quant.target.value)}>
                        <option value="">Selecione</option>
                        <option value="6">6 números</option>
                        <option value="7">7 números</option>
                        <option value="8">8 números</option>
                        <option value="9">9 números</option>
                        <option value="10">10 números</option>
                        <option value="11">11 números</option>
                        <option value="12">12 números</option>
                        <option value="13">13 números</option>
                        <option value="14">14 números</option>
                        <option value="15">15 números</option>
                    </select>
                    <button onClick={Sortear} className={styles.btn}>Sortear</button>

                    <ul className={styles.container_terc}> 
                    {sorteados}
                </ul>
                </div>
            </div>
        }

        {urlSplit === 'quina' &&
            <div>
                <h1>Quina</h1>
                <h3>A Quina permite que você marque entre 5 a 15 números, dentre os 80 disponíveis.</h3>

                <div className={styles.container_second}>
                    <h2>Escolha quantos números você deseja gerar?</h2>
                    <select name='number' value={number} className={styles.select} onChange={quant => setNumber(quant.target.value)}>
                        <option value="">Selecione</option>
                        <option value="5">5 números</option>
                        <option value="6">6 números</option>
                        <option value="7">7 números</option>
                        <option value="8">8 números</option>
                        <option value="9">9 números</option>
                        <option value="10">10 números</option>
                        <option value="11">11 números</option>
                        <option value="12">12 números</option>
                        <option value="13">13 números</option>
                        <option value="14">14 números</option>
                        <option value="15">15 números</option>
                    </select>
                    <button onClick={Sortear} className={styles.btn}>Sortear</button>

                    <ul className={styles.container_terc}> 
                    {sorteados}
                    </ul>
                </div>
            </div>
        }

        {urlSplit === 'duplasena' &&
            <div>
                <h1>Dupla-sena</h1>
                <h3>A Dupla-sena permite que você marque entre 6 a 15 números, dentre os 50 disponíveis.</h3>

                <div className={styles.container_second}>
                    <h2>Escolha quantos números você deseja gerar?</h2>
                    <select name='number' value={number} className={styles.select} onChange={quant => setNumber(quant.target.value)}>
                        <option value="">Selecione</option>
                        <option value="6">6 números</option>
                        <option value="7">7 números</option>
                        <option value="8">8 números</option>
                        <option value="9">9 números</option>
                        <option value="10">10 números</option>
                        <option value="11">11 números</option>
                        <option value="12">12 números</option>
                        <option value="13">13 números</option>
                        <option value="14">14 números</option>
                        <option value="15">15 números</option>
                    </select>
                    <button onClick={Sortear} className={styles.btn}>Sortear</button>

                    <ul className={styles.container_terc}> 
                    {sorteados}
                    </ul>
                </div>
            </div>
        }

        {urlSplit === 'lotomania' &&
            <div>
                <h1>Lotomania</h1>
                <h3>Na lotomania você deve marcar 50 números dentre os 100 disponìveis.</h3>

                <div className={styles.container_second}>
                    <h2>Obtenha seus números da sorte.</h2>
                    <select name='number' value={number} className={styles.select} onChange={quant => setNumber(quant.target.value)}>
                        <option value="">Selecione</option>
                        <option value="50">50 números</option>
                        
                    </select>
                    <button onClick={Sortear} className={styles.btn}>Sortear</button>

                    <ul className={styles.container_terc}> 
                    {sorteados}
                    </ul>
                </div>
            </div>
        }
     </div>
  )
}

export default GerarNumeros
