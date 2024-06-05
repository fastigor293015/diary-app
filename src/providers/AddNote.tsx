import { PropsWithChildren, createContext, useEffect, useRef, useState } from "react";
import { EmojiValue } from "@components/UI/Selector";

interface IValues {
  title: string;
  description: string;
  date: string | number;
  emoji: EmojiValue | null;
  image: string | null;
  tags: string[];
}

interface IAddNoteContext {
  data: IValues;
  onChange: (data: Partial<IValues>) => void;
  reset: () => void;
  isModalOpen: boolean;
  isModalVisible: boolean;
  onModalOpen: () => void;
  onModalClose: () => void;
}

const initialData: IValues = {
  title: "",
  description: "",
  date: Date.now(),
  tags: [],
  image: null,
  emoji: null,
}

export const AddNoteContext = createContext<IAddNoteContext>({
  data: initialData,
  onChange: () => { },
  reset: () => { },
  isModalOpen: false,
  isModalVisible: false,
  onModalOpen: () => { },
  onModalClose: () => { },
});

export const AddNoteProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [values, setValues] = useState<IValues>(initialData);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const DATA_KEY = "eHRAUsFYWhGdP9ji_addNoteData";

  useEffect(() => {
    const lsData = localStorage.getItem(DATA_KEY);
    if (lsData) {
      setValues(JSON.parse(lsData));
    }
  }, []);

  const onChange = (data: Partial<IValues>) => {
    setValues(prev => {
      const newData: IValues = {
        ...prev,
        ...data
      };
      localStorage.setItem(DATA_KEY, JSON.stringify(newData));
      return newData;
    });
  }

  const reset = () => {
    setValues(initialData);
    localStorage.removeItem(DATA_KEY);
  }

  const onModalOpen = () => {
    setIsOpen(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(true));
  }

  const onModalClose = () => {
    setIsVisible(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  }

  return (
    <AddNoteContext.Provider value={{
      data: values,
      onChange,
      reset,
      isModalOpen: isOpen,
      isModalVisible: isVisible,
      onModalOpen,
      onModalClose,
    }}>
      {children}
    </AddNoteContext.Provider>
  )
}