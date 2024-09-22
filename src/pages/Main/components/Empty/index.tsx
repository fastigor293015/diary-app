import { useAppDispatch } from "@hooks";
import { Button } from "@components/UI";
import { EditIcon } from "@components/UI/icons";
import { redirect } from "@store/slices/curPage";
import styles from "./Empty.module.css";
import { Pages } from "@constants";

const Empty: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <section className={styles.notesEmpty}>
      <img src="/images/no-data.svg" alt="Нет данных" />
      <Button
        className={styles.addNoteBtn}
        text="Создать первую запись"
        icon={EditIcon}
        onClick={() => dispatch(redirect(Pages.createNote))}
      />
    </section>
  );
};

export default Empty;
