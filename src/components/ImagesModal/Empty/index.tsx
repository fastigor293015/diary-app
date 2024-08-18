import styles from "./Empty.module.css";

interface EmptyProps extends React.HTMLAttributes<HTMLElement> {}

const Empty: React.FC<EmptyProps> = () => {
  return (
    <div className={styles.wrapper}>
      <img src="/images/ufo.svg" alt="НЛО" />
      <p>По твоему запросу ничего не найдено</p>
    </div>
  );
};

export default Empty;
