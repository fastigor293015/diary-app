export const ADDNOTE_KEY = "eHRAUsFYWhGdP9ji_addnote";
export const NOTES_KEY = "eHRAUsFYWhGdP9ji_notes";
export const CURPAGE_KEY = "eHRAUsFYWhGdP9ji_curpage";

export const loadState = (
  key: string,
  type: "string" | "object" = "object"
) => {
  const data = localStorage.getItem(key);

  return type === "object" ? JSON.parse(data!) : data;
};

export const saveState = (key: string, data: any) => {
  if (!data) return;

  localStorage.setItem(
    key,
    typeof data === "object" ? JSON.stringify(data) : data
  );
};

export const clearState = (key: string) => {
  localStorage.removeItem(key);
};
