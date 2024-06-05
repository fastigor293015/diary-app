import useCurPage from "@hooks/useCurPage";
import AddNote from "@components/AddNote";
import Header from "./components/Header";
import Content from "@components/Content";
import Footer from "@components/Footer";
import { Pages } from "@constants";
import clsx from "@utils/clsx";
import ImagesModal from "@components/ImagesModal";

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
  )
}

export default App;
