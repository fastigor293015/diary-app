import { useCurPage } from "@hooks";
import { AddNote, Content, Footer, Header, ImagesModal } from "@components";
import { clsx } from "@utils";
import { Pages } from "@constants";

function App() {
  const { page } = useCurPage();

  return (
    <div className="app">
      <div className={clsx("container")}>
        <Header />
        <main>
          {page === Pages.main ? (
            <Content />
          ) : page === Pages.createNote ? (
            <AddNote />
          ) : null}
        </main>
        <Footer />
      </div>
      <ImagesModal />
    </div>
  );
}

export default App;
