import ReactDOM from "react-dom/client";
import { CurPageProvider, AddNoteProvider } from "@providers";
import "./assets/css/globals.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <CurPageProvider>
    <AddNoteProvider>
      <App />
    </AddNoteProvider>
  </CurPageProvider>
  // </React.StrictMode>
);
