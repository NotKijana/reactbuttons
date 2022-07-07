import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p className={`${styles.text} txt-18`}>
            Downloadable burgers and additional types coming soon! 
        </p>
    </footer>
  )
}

export default Footer