import React from 'react'
import ReactDOM from 'react-dom/client'
import { CurPageProvider } from '@providers/CurPage.tsx';
import "./assets/css/globals.css";
import App from './App.tsx'
import { AddNoteProvider } from '@providers/AddNote.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CurPageProvider>
      <AddNoteProvider>
        <App />
      </AddNoteProvider>
    </CurPageProvider>
  </React.StrictMode>,
)
