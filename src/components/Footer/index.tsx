import { clsx } from "@utils";
import styles from "./Footer.module.css";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className={styles.footer} {...props}>
      <p className={clsx("descr", styles.copyrights)}>
        Проект выполнен в рамках стажировки{" "}
        <a href="https://preax.ru" target="_blank" rel="noopener noreferrer">
          PREAX
        </a>
      </p>
    </footer>
  );
};

export default Footer;
