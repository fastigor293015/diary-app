import styles from "./Loader.module.css";

interface LoaderProps extends React.HTMLAttributes<HTMLElement> {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ldsSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
