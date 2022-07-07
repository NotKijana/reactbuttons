import Burger from "../burgers/burger/Burger";
import styles from './Title.module.scss';

const Title = () => {
  return (
    <div className={ styles.title }>
        <Burger name='title' color='white' title={true} />
        
        <h1 className='txt-25'>
          amburgers {''}
          <a className={`${styles.link} txt-15`} href="http://kijana.io"
          target="_blank" rel="noopener noreferrer">
            by Kijana
          </a>
        </h1>
    </div>
  )
}

export default Title;