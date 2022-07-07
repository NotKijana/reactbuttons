import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={ `${styles.header} txt-center` }>
        <h2 className="txt-20">
            Simple CSS-animated hamburgers
        </h2>
        <p className="txt-18">
            Click (or tap) each one to see the magic!
        </p>      
    </header>
  )
}

export default Header