import styles from './FooterBottom.module.scss';

const FooterBottom = () => {
    return ( 
        <div className={styles.block}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.text}>
                        Copyright 2012 - 2023 Minzifa suzani online shopping
                    </div>
                    <div className={styles.images}>
                        <div>
                            <img src="/visa.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/mastercard.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/paypal.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FooterBottom;