import Header from "@components/Layout/Header";
import Footer from "@components/Layout/Footer";
import styles from "./Layout.module.css";

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {}

const Layout: React.FC<LayoutProps> = ({ children, ...otherProps }) => {
  return (
    <div className={styles.container} {...otherProps}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
