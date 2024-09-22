import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector, useImagesModal } from "@hooks";
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
import { create } from "@store/slices/notes";
import { onChange, reset } from "@store/slices/addNote";
import { redirect } from "@store/slices/curPage";
import { Pages } from "@constants";
import { removeDuplicates } from "@utils";
import styles from "./AddNote.module.css";

const AddNote: React.FC = () => {
  const { onOpen: onModalOpen, imageFieldRef } = useImagesModal();
  const notesList = useAppSelector((state) => state.notes.list);
  const data = useAppSelector((state) => state.addNote.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!data.date) onFieldChange({ date: Date.now() });
  }, []);

  const tagsPrompts = removeDuplicates(
    notesList.reduce<string[]>((prev, cur) => [...prev, ...cur.tags], [])
  );

  const onFieldChange = (data: Parameters<typeof onChange>[0]) =>
    dispatch(onChange(data));

  const onReset = () => dispatch(reset());

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isAllowedToBeCreated) {
      alert("Заполните все поля!");
      return;
    }
    dispatch(create(data));
    console.log(data);
    onReset();
  };

  const onCancel = () => {
    onReset();
    dispatch(redirect(Pages.main));
  };

  const isAllowedToBeCreated = useMemo(
    () => Boolean(data?.title && data.description && data.date),
    [data]
  );

  return (
    <section className={styles.content}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.formContainer}>
          <Input
            type="text"
            placeholder="Заголовок"
            value={data.title}
            onChange={(e) =>
              onFieldChange({
                title: e.target.value,
              })
            }
          />
          <Textarea
            className={styles.descriptionField}
            placeholder="Описание"
            value={data.description}
            onChange={(e) =>
              onFieldChange({
                description: e.target.value,
              })
            }
          />
          <div className={styles.calendarAndSelector}>
            <Calendar
              value={data.date}
              onChange={(e) =>
                onFieldChange({
                  date: e.target.value,
                })
              }
            />
            <Selector
              value={data.emoji}
              onChange={(newValue) =>
                onFieldChange({
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
              onFieldChange({
                image: null,
              })
            }
          />
          <TagSelector
            selectedTags={data.tags}
            prompts={tagsPrompts}
            onTagsChange={(value) =>
              onFieldChange({
                tags: value,
              })
            }
          />
        </div>
        <div className={styles.btnsContainer}>
          <Button
            type="submit"
            text="Создать запись"
            icon={EditIcon}
            disabled={!isAllowedToBeCreated}
          />
          <Button btnType="secondary" text="Отменить" onClick={onCancel} />
        </div>
      </form>
    </section>
  );
};

export default AddNote;
