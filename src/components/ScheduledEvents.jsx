import styles from "./ScheduledEvents.module.css";
//import Spinner from "./Spinner";
import Message from "./Message";


function ScheduledEvents(){
    // if(isLoading) return <Spinner/>
   
    return(
        <div className={styles.scheduledEvents}>
             <Message message="Hello add your first ScheduledEvent!"/>
        </div>
    );

}

export default ScheduledEvents;