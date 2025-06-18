import Image from "next/image";
import styles from "./about.module.css";

const skills = [
  "/java.png",
  "/nxt.png",
  "/git.png",
  "/js1.png",
  "/css.png",
  "/bi.png",
  "/html.png",
  "/mongo.png",
  "/py.png",
];

export default function About() {
  return (
    <div id="about">
      <div className={styles.container}>
        <div className={styles.lcontainer}>
          <Image src="/MyPhoto.jpg" height={400} width={400} alt="photo" />
        </div>

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

      <div className={styles.skillHeading}>Skills</div>

      <div className={styles.outerContainer}>
        <div className={styles.scrollWrapper}>
          <div className={styles.scrollContent}>
            {[...skills, ...skills].map((src, i) => (
              <div key={i} className={styles.imageWrapper}>
                <Image
                  src={src}
                  alt="skill"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
