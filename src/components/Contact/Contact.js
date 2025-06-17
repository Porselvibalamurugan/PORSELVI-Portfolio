import styles from "./contact.module.css";
export default function Contact() {
  return (
    <div id="contact" className={styles.container}>
      <div>CONTACT</div>
      <span>Have a Question?</span>
      <form className={styles.subcontainer}>
        <input type="text" placeholder="Name" name="Name" />
        <input type="text" placeholder="Email" name="Email" />
        <textarea rows={7} cols={12} placeholder="Message" name="Message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
