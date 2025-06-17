import styles from "./navbar.module.css";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className={styles.container}>
      <div>Logo</div>
      <div className={styles.subcontainer}>
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#projects">Projects</Link>
      </div>
      <Link href="#contact" className={styles.contact}>Contact Me</Link>
    </div>
  );
}
