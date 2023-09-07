import { Link } from 'react-router-dom';
import styles from './FooterTop.module.scss';

const FooterTop = () => {
    return ( 
        <div className={styles.block}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                     <div className={styles.contact}>
                        <Link to='/'>
                            <img src="/logo2.jpg" alt="" />
                        </Link>
                        <div className={styles.text}>
                             "Quality is <br /> not a Concidence"
                        </div>
                        <div className={styles.text2}>
                            Eshoni Pir St.63
                        </div>
                        <div className={styles.text2}>
                            20010 Bukhara <br />
                            Uzbekistan
                        </div>
                        <div className={styles.text2}>
                            Mobile: +998918271011
                        </div>
                     </div>
                     <div className={styles.map}>
                 
                     </div>
                     <div className={styles.contact1}>
                        <div className={styles.contact1__title}>Information for customers</div>
                        <a href='#' className={styles.contact1__text}>FAQs</a>
                        <a href='#' className={styles.contact1__text}>Shipping & Delivery</a>
                        <a href='#' className={styles.contact1__text}>Returns & Exchanges</a>
                     </div>
                     <div className={styles.contact2}>
                        <div className={styles.contact2__title}>About Us</div>
                        <a href='#' className={styles.contact2__text}>Our contacts</a>
                        <a href='#' className={styles.contact2__text}>Term & Conditions</a>
                     </div>
                </div>
            </div>
        </div>
     );
}
 
export default FooterTop;