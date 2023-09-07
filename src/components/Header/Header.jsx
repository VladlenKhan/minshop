import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <Link to='/' className={styles.logo}>
                        <img src="/logo.png" alt="" />
                    </Link>
                    <div className={styles.text}>
                      "Quality is <br /> not a coincidence"
                    </div>
                    <div className={styles.social}>
                        <div className={styles.social__text}>Contact Us</div>
                        <a href='#' className={styles.social__button}>
                            <img src="/whatsapp.png" width='30px' alt="icon" />
                            <p>WhatsApp</p>
                        </a>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;