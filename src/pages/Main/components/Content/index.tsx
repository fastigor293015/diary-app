import { useAppSelector } from "@hooks";
import { NotesList } from "@components/UI";
import Empty from "@pages/Main/components/Empty";

const Content: React.FC = () => {
  const notes = useAppSelector((state) => state.notes.list);

  return notes.length ? (
    <section>
      <NotesList data={notes} />
    </section>
  ) : (
    <Empty />
  );
};

export default Content;
