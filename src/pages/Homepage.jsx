import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav/>
      <section>

        <Link to="/applayout" className="cta"> Login</Link>
        <h1>
         
         TrackCampaign keeps you track of the events.
        </h1>
        
      </section>
    </main>
  );
}
