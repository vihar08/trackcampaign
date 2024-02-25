import styles from "./UpComingEvents.module.css";
//import Spinner from "./Spinner";
import Message from "./Message";
import UpEvent from "./UpEvent";
import { useData } from "../Contexts/DataContext";



function UpComingEvents(){
    // if(isLoading) return <Spinner/>
    const {data} = useData();
   
    return(
        <div className={styles.upcomingEvents}>
             {data?
             data.map((ev)=> <UpEvent upevent={ev}/>):
             <Message message="No Upcoming Events so far!"/>}
        </div>
    );

}

export default UpComingEvents;