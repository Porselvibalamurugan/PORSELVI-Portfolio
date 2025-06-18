"use client"
import { addUser } from "@/lib/data";
import styles from "./contact.module.css";
export default function Contact() {
  return (
    <div id="contact" className={styles.container}>
      <div>CONTACT</div>
      <span>Have a Question?</span>
      <form className={styles.subcontainer} action={addUser}>
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="Email" name="email" />
        <textarea rows={7} cols={12} placeholder="Message" name="message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
