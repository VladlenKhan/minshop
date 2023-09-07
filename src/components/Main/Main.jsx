import styles from './Main.module.scss';
import { Content, Sidebar } from './components';

const Main = () => {
    return (   <div className={ styles.container}>
        <main className={ styles.main }>
            
            <Sidebar/>

            <Content/>
            
        </main> 
         </div>
     );
}
 
export default Main;