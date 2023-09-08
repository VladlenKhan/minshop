import Card from '../../../../UI/Card/Card';
import styles from './Content.module.scss';

const Content = () => {
    return (
        <div className={styles.content}>
              <div className={styles.nav}>
      <ul>
        <li className={styles.dropdownItem}>
          <a href="#">SUZANI</a>
          <ul className={styles.dropdownContent}>
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
            <li><a href="#">Option 3</a></li> 
          </ul>
        </li>
        <li><a href="#">Rugs </a></li>
        <li><a href="#">home decoration </a></li>
        <li><a href="#">ikats </a></li>
        <li><a href="#">robes and caftans </a></li>
        <li><a href="#">accesoris </a></li>
      </ul>
    </div>
            <div className={styles.cards}>

            
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/> 
            <Card/>
            </div>
        </div>
      );
}
 
export default Content;