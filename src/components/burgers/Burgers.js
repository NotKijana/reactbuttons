import Burger from "./burger/Burger";
import styles from './burger/Burger.module.scss';

const Burgers = () => {
  return (
    <main className={styles.burgers}>
        <Burger name="disappear" color='red' />
        <Burger name="collapse" color='blue' />
        <Burger name="spin" color='purple' />
        <Burger name="stand" color='silver' />
        <Burger name="minus" color='gold' />
        <Burger name="arrow" color='teal' />
        <Burger name="arrowAlt" color='pink' />
        <Burger name="slide" color='orange' />
        <Burger name="spilled" color='turquoise' />
        <Burger name="basic" color='crimson' />
    </main>
  )
}

export default Burgers