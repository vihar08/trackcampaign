import styles from "./AppNav.module.css";
import {NavLink} from "react-router-dom";
import { useEffect } from "react";


export default function AppNav(){
    return(
        <div className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="ScheduledEvents">ScheduledEvents</NavLink>

                </li>
                <li>
                    <NavLink to="UpcomingEvents">UpcomingEvents</NavLink>
                </li>
            </ul>
            
        </div>
    );
}