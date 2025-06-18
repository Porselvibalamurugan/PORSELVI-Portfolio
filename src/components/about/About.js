import Image from "next/image";
import styles from "./about.module.css";
export default function About() {
  return (
    <div id="about">
      <div className={styles.container}>
        {/* left */}
        <div className={styles.lcontainer}>
          <Image src="/MyPhoto.jpg" height={400} width={400} alt="photo" />
        </div>
        {/* right */}
        <div className={styles.rcontainer}>
          <div className={styles.text}>About Me</div>
          <div className={styles.text1}>Student</div>
          <p className={styles.text2}>
            I am currently pursuing Bachelor of Technology in Computer Science
            and Business Systems at R.M.D. Engineering College. I have strong
            skills in full-stack development, data analysis, and
            problem-solving. My practical experience encompasses both hardware
            and software projects. I am eager to apply my technical expertise to
            tackle real-world challenges and contribute to innovative
            initiatives.
          </p>
        </div>
      </div>
      <div
        style={{
          fontSize: "2.9rem",
          textAlign: "center",
          padding: "25px 10px",
        }}
      >
        Skills
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.scrollWrapper}>
          <div className={styles.scrollContent}>
            <div className={styles.imageSet}>
              <Image src="/java.png" alt="img" height={100} width={100} />
              <Image src="/next.png" alt="img" height={100} width={100} />
              <Image src="/git.png" alt="img" height={100} width={100} />
              <Image src="/js.png" alt="img" height={100}width={100} />
            </div>
            <div className={styles.imageSet}>
              <Image src="/css.jpeg" alt="img" height={100} width={100} />
              <Image src="/html.jpeg" alt="img" height={100} width={100} />
              <Image src="/mongo.jpg" alt="img" height={100} width={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
