import { NoteData } from "@types";
import { clsx } from "@utils";
import styles from "./NotesList.module.css";
import NotesItem from "@components/UI/NotesList/NotesItem";

interface NotesListProps extends React.HTMLAttributes<HTMLUListElement> {
  data: NoteData[];
}

const NotesList: React.FC<NotesListProps> = ({
  data,
  className,
  ...otherProps
}) => {
  return (
    <ul className={clsx("list", styles.list, className)} {...otherProps}>
      {data.map((item) => (
        <NotesItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default NotesList;
