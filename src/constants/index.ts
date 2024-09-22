import { FormValues } from "@types";
import tuple from "@utils/tuple";

export enum Pages {
  main = "main",
  createNote = "createNote",
}

export const emojis = tuple(
  "😌",
  "😊",
  "😄",
  "🤣",
  "😰",
  "🥰",
  "🙃",
  "😔",
  "😇",
  "🤔",
  "😩",
  "😭",
  "😤",
  "😵",
  "🤒",
  "🤤",
  "😅",
  "😛"
);

export const initialData: FormValues = {
  title: "",
  description: "",
  date: new Date(Date.now()).toISOString().split("T")[0],
  tags: [],
  image: null,
  emoji: null,
};
