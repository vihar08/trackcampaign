import styles from "./Button.module.css";

function Button({children, onclick, btntype}){

    return(
        <button onClick={onclick} className={`${styles.btn} ${styles[btntype]}`}>{children}</button>
    );
    
}

export default Button;