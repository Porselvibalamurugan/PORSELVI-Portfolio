import Image from "next/image";
import styles from "./about.module.css";
export default function About() {
  return (
    <div className={styles.container} id="about">
      {/* left */}
      <div className={styles.lcontainer}>
        <Image src="/MyPhoto.jpg" height={400} width={400} alt="photo" />
      </div>
      {/* right */}
      <div className={styles.rcontainer}>
        <div className={styles.text}>About Me</div>
        <div className={styles.text1}>Student</div>
        <p className={styles.text2}>
          I am currently pursuing Bachelor of Technology in Computer Science and
          Business Systems at R.M.D. Engineering College. I have strong skills
          in full-stack development, data analysis, and problem-solving.
          My practical experience encompasses both hardware and software projects.
          I am eager to apply my technical expertise to tackle real-world
          challenges and contribute to innovative initiatives.
        </p>
      </div>
    </div>
  );
}
