import { useEffect } from "react";
import { useAppSelector } from "@hooks";
import { Pages } from "@constants";
import { CreateNote, Main } from "@pages";

function App() {
  const page = useAppSelector((state) => state.curPage.page);
  const notesList = useAppSelector((state) => state.notes.list);

  useEffect(() => {
    console.log(notesList);
  }, [notesList]);

  return (
    <div className="app">
      {page === Pages.main && <Main />}
      {page === Pages.createNote && <CreateNote />}
    </div>
  );
}

export default App;
