import styles from './Footer.module.scss';
import { FooterBottom, FooterTop } from './components';

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <FooterTop/>
            <FooterBottom/>
        </footer>
     );
}
 
export default Footer;