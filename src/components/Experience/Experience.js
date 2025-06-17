import styles from "./experience.module.css";
export default function Experience() {
  return (
    <div id="experience" className={styles.exp}>
      {/* main container */}
      <div style={{textAlign:"center", fontSize:"3rem"}}>Experience</div>
      <div className={styles.container}>
        {/* 1st left */}
        <div className={styles.left}>
          <div className={styles.left1}>
            <div className={styles.txt}>
              <div className={styles.duration}> May 2024 - Jun 2024</div>
              <div className={styles.cname}>Meriskill </div>
              <div className={styles.content}>
                Developed a dynamic Power BI dashboard for sales analysis, HR
                analytics. Additionally, I analyzed diabetic patient data to
                identify trends and enhance healthcare outcomes.
              </div>
            
            </div>
            <div className={styles.hline}> </div>
          </div>
          {/* 2nd left */}
          <div className={styles.left2}>
            <div className={styles.txt}>
              <div className={styles.duration}> June 2024 - July 2024</div>
              <div className={styles.cname}>
                Next24tech Technology & Services
              </div>
              <div className={styles.content}>
                Developed a user-friendly online voting system and a grocery
                delivery app with easy product browsing. Tech Stack: Next.js,
                NextAuth, MongoDB, CSS Modules, Wix Headless Solution.
              </div>
            </div>
            <div className={styles.hline}></div>
          </div>
        </div>
        {/* middle line */}
        <div className={styles.mline}></div>
        <div className={styles.right}>
          {/* right line */}
          <div className={styles.right1}>
            <div className={styles.hline}></div>
            <div className={styles.txt}>
              <div className={styles.duration}>June 2024 - July 2024</div>
              <div className={styles.cname}>Prodigy Info Tech</div>
              <div className={styles.content}>
                Created various web applications, including a tic-tac-toe game,
                stopwatch, and weather app. Tech Stack: HTML, CSS, JavaScript.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
