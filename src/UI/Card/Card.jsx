import styles from './Card.module.scss';

const Card = () => {
    return ( 
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img src="https://alesouk.com/wp-content/uploads/2023/02/DSC_0028-300x300.jpg" alt="" />
            </div>
            <div className={styles.card__content}>
                <p className={styles.card__content_text}>Roundel Vintage Suzani Handmade</p>
                <p className={styles.card__content_price}>$290.00</p>
            </div>
        </div>
     );
}
 
export default Card;