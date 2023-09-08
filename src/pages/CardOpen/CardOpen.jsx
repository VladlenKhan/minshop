import styles from './CardOpen.module.scss';
import { Footer, Header } from '../../components';
const CardOpen = () => {
    return ( 
        <>
        <Header/>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.img}>
                    <img src="https://alesouk.com/wp-content/uploads/2023/02/DSC_0028-300x300.jpg" alt="img" />

                </div>
                <div className={styles.text}>
                    <p>Roundel Vintage Suzani Handmade</p>    
                    <br />                
                    <p>$290.00</p>                    

                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default CardOpen;