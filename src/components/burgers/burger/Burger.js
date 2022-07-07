import { useState } from 'react'; 
import styles from './Burger.module.scss';

const Burger = ({ name, color, title }) => {
    const [ isOpen, setOpen ] = useState(false);
    
    function handleClick() {
        setOpen(!isOpen)
    }

    return (    
        <div className={`${styles.wrapper} ${styles[color]}`}>

            {!title &&
                <h2 className={`${styles.name} name txt-18`}>
                    { name }
                </h2>
            }

            <button className={`${ styles.burger} ${isOpen && styles.open}`} 
            id={styles[name]} onClick={() => handleClick()}>       
                <span className={`${styles.burger_topping}
                    ${isOpen && styles.open} ${ styles[name] }
                    ${ styles.one}`}>
                </span>
                <span className={`${styles.burger_topping}
                    ${isOpen && styles.open} ${ styles[name] }
                    ${ styles.two}`}>
                </span>

                <span className={`${styles.burger_topping}
                    ${isOpen && styles.open} ${ styles[name] }
                    ${ styles.three}`}>
                </span>
            </button>

            {!title &&
                <div></div>
            }
        </div>
    )
}

export default Burger;