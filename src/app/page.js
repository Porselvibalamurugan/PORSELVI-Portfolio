import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import About from "@/components/about/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Page() {
  return (
    <div>
      {/* Home */}
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.text1}>Hello, I&apos;m Porselvi</div>
          <div className={styles.text2}>
            Turning ideas into interactive reality
          </div>
          <div className={styles.btn}>
            <Link href="#projects" className={styles.projects}>
              Projects
            </Link>
            <Link
              href="https://www.linkedin.com/in/porselvi-b-014971265/"
              className={styles.linkedin}
            >
              Linkedin
            </Link>
          </div>
        </div>
        <div className={styles.img}>
          <Image src="/MyPhoto.jpg" height={400} width={400} alt="photo" />
        </div>
      </div>
      {/* About */}
      <About />
      {/* experience */}
      <Experience />
      {/* projects */}
      <Projects />
      <Contact />
      {/* footer */}
      <div
        style={{
          color: "gray",
          fontSize: "1.2rem",
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        © 2025 Portfolio. Design by Porselvi
      </div>
    </div>
  );
}
