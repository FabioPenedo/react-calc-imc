import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
  data: Level
};

export const GridItem = ({ data }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: data.color }}>
      <div className={styles.gridIcon}>
        <img src={data.icon === 'up' ? upImage : downImage} alt="" width="30" />
      </div>
      <div className={styles.gridTitle}>{data.title}</div>

      {data.yourImc && 
        <div className={styles.yourImc}>Seu IMC é de {data.yourImc} kg/m²</div>
      }

      <div className={styles.gridInfo}>
        <>
          IMC está entre <strong>{data.imc[0]}</strong> e <strong>{data.imc[1]}</strong>
        </>
      </div>
    </div>
  )
}