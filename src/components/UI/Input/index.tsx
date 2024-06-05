import clsx from "@utils/clsx";
import CloseIcon from "@components/UI/icons/CloseIcon";
import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

const Input: React.FC<InputProps> = ({
  onClear,
  value,
  onChange,
  className,
  ...otherProps
}) => {
  return (
    <div className={clsx(styles.wrapper, onClear && styles.withClearBtn, className)}>
      <input className={styles.input} value={value} onChange={onChange} {...otherProps} />
      {onClear && value && (
        <button className={clsx("btn", styles.clearBtn)} onClick={onClear}>
          <CloseIcon width="24" height="24" />
        </button>
      )}
    </div>

  );
}

export default Input;