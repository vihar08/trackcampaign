
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import { DataProvider } from "../Contexts/DataContext";




export default function AppLayout(){
    return(
    <div className={styles.app}>
        <DataProvider>
        <Sidebar/>
        <Map/>
        </DataProvider>
       
    </div>
    );
}