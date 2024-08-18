import { CalendarIcon } from "@components/UI/icons";
import { clsx } from "@utils";
import styles from "./Calendar.module.css";

interface CalendarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  // onChange: (newValue: string | Date | number) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  id = "calendar",
  className,
  value,
  onChange,
  ...otherProps
}) => {
  const formattedValue =
    typeof value === "number"
      ? new Date(value).toISOString().split("T")[0]
      : value;

  return (
    <label htmlFor={id} className={clsx(styles.calendar, className)}>
      <input
        className={styles.input}
        type="date"
        name="date"
        id={id}
        value={formattedValue}
        onChange={onChange}
        {...otherProps}
      />
      <div className={styles.icon}>
        <CalendarIcon />
      </div>
    </label>
  );
};

export default Calendar;
