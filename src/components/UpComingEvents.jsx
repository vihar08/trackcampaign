import styles from "./UpComingEvents.module.css";
//import Spinner from "./Spinner";
import Message from "./Message";
import UpEvent from "./UpEvent";

const data=[
    {
        "city":"Amaravathi",
        "date":"09-02-2024",
        "position":{
            "lat":38.90000,
            "lng":-9.1400000
        },
        "id": 12
    },
    {
        "city":"Hyderabad",
        "date":"08-02-2024",
        "position":{
            "lat":38.90000,
            "lng":-9.1400000
        },
        "id": 13
    },
    {
        "city":"Guntur",
        "date":"09-01-2024",
        "position":{
            "lat":38.90000,
            "lng":-9.1400000
        },
        "id": 14
    },
    {
        "city":"East Godavari",
        "date":"13-02-2024",
        "position":{
            "lat":38.90000,
            "lng":-9.1400000
        },
        "id": 15
    },

]

function UpComingEvents(){
    // if(isLoading) return <Spinner/>
   
    return(
        <div className={styles.upcomingEvents}>
             {data?
             data.map((ev)=> <UpEvent upevent={ev}/>):
             <Message message="No Upcoming Events so far!"/>}
        </div>
    );

}

export default UpComingEvents;