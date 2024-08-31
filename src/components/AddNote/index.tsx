import { useAddNote } from "@hooks";
import {
  Button,
  Calendar,
  Image,
  Input,
  Selector,
  TagSelector,
  Textarea,
} from "@components/UI";
import { EditIcon } from "@components/UI/icons";
import styles from "./AddNote.module.css";

const AddNote = () => {
  const { data, onChange, reset, onModalOpen, imageFieldRef } = useAddNote();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className={styles.content}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.formContainer}>
          <Input
            type="text"
            placeholder="Заголовок"
            value={data.title}
            onChange={(e) =>
              onChange({
                title: e.target.value,
              })
            }
          />
          <Textarea
            className={styles.descriptionField}
            placeholder="Описание"
            value={data.description}
            onChange={(e) =>
              onChange({
                description: e.target.value,
              })
            }
          />
          <div className={styles.calendarAndSelector}>
            <Calendar
              value={data.date}
              onChange={(e) =>
                onChange({
                  date: e.target.value,
                })
              }
            />
            <Selector
              value={data.emoji}
              onChange={(newValue) =>
                onChange({
                  emoji: newValue,
                })
              }
            />
          </div>
          <Image
            ref={imageFieldRef}
            imgSrc={data.image}
            onClick={onModalOpen}
            onImgDelete={() =>
              onChange({
                image: null,
              })
            }
          />
          <TagSelector
            selectedTags={data.tags}
            onTagsChange={(value) =>
              onChange({
                tags: value,
              })
            }
          />
        </div>
        <div className={styles.btnsContainer}>
          <Button type="submit" text="Создать запись" icon={EditIcon} />
          <Button btnType="secondary" text="Отменить" onClick={reset} />
        </div>
      </form>
    </section>
  );
};

export default AddNote;
