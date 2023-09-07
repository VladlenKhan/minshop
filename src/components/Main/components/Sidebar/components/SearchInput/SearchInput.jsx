import styles from './SearchInput.module.scss';

const SearchInput = () => {
    return ( 
       <form action="" className={styles.form}>
       <div className={styles.search}>
            <a href='#' className={styles.search__img}>
                <img src="/search.png" width='20px' alt="" />
            </a>
            <div>
                <input className={styles.search__input} type="text" placeholder='Искать на сайте'/>
            </div>
        </div>
       </form>
     );
}
 
export default SearchInput;