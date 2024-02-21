import styles from "./ScheduleEvents.module.css";
//import Spinner from "./Spinner";
//import Message from "./Message";
import { useState } from "react";
import Button from "./Button";


function ScheduleEvents(){
    const [cityName, setCityName] = useState("");
    
    const [date, setDate] = useState(new Date());
    const [desc, setDesc] = useState("");
  
    return (
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="cityName">City name</label>
          <input
            id="cityName"
            onChange={(e) => setCityName(e.target.value)}
            value={cityName}
          />
          {/* <span className={styles.flag}>{emoji}</span> */}
        </div>
  
        <div className={styles.row}>
          <label htmlFor="date">Date & Time</label>
          <input
            id="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
  
        <div className={styles.row}>
          <label htmlFor="notes">Description</label>
          <textarea
            id="notes"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>
  
        <div className={styles.buttons}>
          <Button btntype='primary'>Add</Button>
          {/* <Button btntype="back">&larr; Back</Button> */}
        </div>
      </form>
    );

}

export default ScheduleEvents;