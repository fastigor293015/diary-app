import styles from "./Logo.module.css";

interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <a href="#" className={styles.logo} {...props}>
      <img src="/images/logo-desktop.svg" alt="DreamTime" />
    </a>
  );
};

export default Logo;
