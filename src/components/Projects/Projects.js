import styles from "./projects.module.css";
export default function Projects() {
  return (
    <div id="projects" className={styles.pro}>
      <div style={{textAlign:"center", fontSize:"3rem"}}>Projects</div>
      <div className={styles.container}>
        <div className={`${styles.card} ${styles.card1}`}>
          <span>IoT-Driven Smart Irrigation System</span>
          <p>
            Designed and implemented an IoT-based Smart Irrigation System,
            optimizing water usage through automated, data-driven solutions for
            enhanced efficiency and sustainability.
          </p>
        </div>
        <div className={`${styles.card} ${styles.card2}`}>
          <span>IoT-Driven Smart Irrigation System</span>
          <p>
            Designed and implemented an IoT-based Smart Irrigation System,
            optimizing water usage through automated, data-driven solutions for
            enhanced efficiency and sustainability.
          </p>
        </div>
        <div className={`${styles.card} ${styles.card3}`}>
          <span>IoT-Driven Smart Irrigation System</span>
          <p>
            Designed and implemented an IoT-based Smart Irrigation System,
            optimizing water usage through automated, data-driven solutions for
            enhanced efficiency and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
}

{
  /* <div>
          <h3>Chatbot Development</h3>
          <p>
            Created a basic chatbot in Python utilizing pattern matching and
            conditional logic for intent recognition.
          </p>
        </div>
        <div>
          <h3>lorem t Development</h3>
          <p>
            Created a basic chatbot in Python utilizing pattern matching and
            conditional logic for intent recognition.
          </p>
        </div> */
}
