import { useCurPage } from "@hooks";
import { Pages } from "@constants";
import styles from "./Header.module.css";
import { Button, Logo } from "@components/UI";
import { EditIcon } from "@components/UI/icons";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FC<HeaderProps> = (props) => {
  const { page, redirect } = useCurPage();

  return (
    <header className={styles.header} {...props}>
      <Logo onClick={() => redirect(Pages.main)} />
      {page === Pages.main && (
        <Button icon={EditIcon} onClick={() => redirect(Pages.createNote)} />
      )}
    </header>
  );
};

export default Header;
