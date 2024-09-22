import { NoteData } from "@types";
import { clsx } from "@utils";
import styles from "./NotesItem.module.css";
import TagsList from "@components/UI/NotesList/NotesItem/TagsList";

interface NotesItemProps extends React.HTMLAttributes<HTMLLIElement> {
  data: NoteData;
}

const NotesItem: React.FC<NotesItemProps> = ({ data, ...otherProps }) => {
  const [day, month] = Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "short",
  })
    .format(new Date(data.date))
    .replace(".", "")
    .split(" ");

  return (
    <li className={styles.item} {...otherProps}>
      <a href="#" className={styles.link}>
        <img
          className={styles.img}
          src={data.image || "/images/theme.jpg"}
          alt=""
        />
        <div className={styles.dateBlock}>
          <span>{day}</span>
          {month}
        </div>
        {data.emoji && <div className={styles.emojiBlock}>{data.emoji}</div>}
        <div className={styles.textBlock}>
          <h3 className={clsx("title", styles.title)}>{data.title}</h3>
          {data.tags.length ? (
            <TagsList data={data.tags} />
          ) : (
            <p className={clsx("descr", styles.descr)}>{data.description}</p>
          )}
        </div>
      </a>
    </li>
  );
};

export default NotesItem;
