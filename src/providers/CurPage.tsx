import { PropsWithChildren, createContext, useState } from "react";
import { Pages } from "@constants";

interface ICurPageContext {
  page: Pages,
  redirect: (newPage: Pages) => void;
}

export const CurPageContext = createContext<ICurPageContext>({
  page: Pages.main,
  redirect: () => { },
});

export const CurPageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [page, setPage] = useState(Pages.main);

  const redirect = (newPage: Pages) => {
    setPage(newPage);
  }

  return (
    <CurPageContext.Provider value={{
      page,
      redirect
    }}>
      {children}
    </CurPageContext.Provider>
  )
}