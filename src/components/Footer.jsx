import styles from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}></footer>
      <p className={styles.copyrite}>
        &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
      </p>
    </div>
  );
}

export default Footer;
