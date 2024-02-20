//import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';
import Logo from './Logo';

export default function PageNav(){
    return(
        <nav classname={styles.nav}>
            <Logo/>
           
        </nav>
    )
}