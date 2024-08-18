import { clsx } from "@utils";
import styles from "./Textarea.module.css";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<TextareaProps> = ({ className, ...otherProps }) => {
  return (
    <textarea className={clsx(styles.textarea, className)} {...otherProps} />
  );
};

export default Textarea;
