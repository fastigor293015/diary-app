import { IconProps } from "@components/UI/icons";
import { clsx } from "@utils";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: "default" | "primary" | "secondary";
  text?: string;
  icon?: React.FC<IconProps>;
}

const Button: React.FC<ButtonProps> = ({
  className,
  type = "button",
  btnType = "primary",
  text,
  icon: Icon,
  ...otherProps
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "btn",
        styles.btn,
        btnType === "secondary" && styles.secondary,
        btnType === "default" && styles.default,
        Icon && !text && styles.iconBtn,
        className
      )}
      {...otherProps}
    >
      {Icon && <Icon width="24" height="24" />}
      {text && text}
    </button>
  );
};

export default Button;
