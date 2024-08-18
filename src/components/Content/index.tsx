import { useCurPage } from "@hooks";
import { Button } from "@components/UI";
import { EditIcon } from "@components/UI/icons";
import { Pages } from "@constants";
import styles from "./Content.module.css";

interface ContentProps extends React.HTMLAttributes<HTMLElement> {}

const Content: React.FC<ContentProps> = (props) => {
  const { redirect } = useCurPage();

  return (
    <section className={styles.notesEmpty} {...props}>
      <img src="/images/no-data.svg" alt="Нет данных" />
      <Button
        className={styles.addNoteBtn}
        text="Создать первую запись"
        icon={EditIcon}
        onClick={() => redirect(Pages.createNote)}
      />
    </section>
  );
};

export default Content;
