import Card from '../../UI/Card/Card';
import { Footer, Header } from '../../components';
import styles from './Category.module.scss';

const Categroy = () => {
    return ( 
        <>
        <Header/>

        <div className={styles.title}>
            Категория : <span>Suzani</span>
        </div>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div> 
        </div>  
        <Footer/>
        
        </>
     );
}
 
export default Categroy;