import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from "./assets/powered.png";
import { levels, calculateImc, level} from './helpers/imc';
import leftArrowImage from './assets/leftArrowImage.png';
import {GridItem} from './components/GridItem';

let App = ()=> {
  let [heightField, setHeightField] = useState<number>(0);
  let [weightField, setWeightField] = useState<number>(0);
  let [toShow, setToShow] = useState<level|null>(null);

  let handleCalculateButton = ()=>{
    if(heightField && weightField){
      setToShow(calculateImc(heightField, weightField));
    } else{
      alert("Digite todos os campos.")
    }
  };

  let handleBackButton = ()=>{
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  };

  return(
    <div className={styles.main}>

      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>

          <h1>Calcule o seu IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea. 
            Parâmetro adotado pela Organização Mundial de Saúde 
            para calcular o peso ideal de cada pessoa;
          </p>

          <input 
            type="number"
            placeholder='Digite sua altura. Ex:1.50 (em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />

          <input 
            type="number"
            placeholder='Digite o seu peso. Ex:74.2 (em Kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calcular IMC</button>
        </div>
        <div className={styles.rightSide}>

          {!toShow &&
            <div className={styles.grid}>
              {levels.map( (item, key)=>(
                  <GridItem key={key} item={item}></GridItem>
              ) )}
            </div>
          }

          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          }

        </div>
      </div>
    </div>
  );
};

export default App;