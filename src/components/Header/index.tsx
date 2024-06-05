import Button from "@components/UI/Button";
import Edit from "@components/UI/icons/EditIcon";
import styles from "./Header.module.css";
import Logo from "@components/UI/Logo";
import useCurPage from "@hooks/useCurPage";
import { Pages } from "@constants";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {

}

const Header: React.FC<HeaderProps> = (props) => {
  const { page, redirect } = useCurPage();

  return (
    <header className={styles.header} {...props}>
      <Logo onClick={() => redirect(Pages.main)} />
      {page === Pages.main && <Button
        icon={Edit}
        onClick={() => redirect(Pages.createNote)}
      />}
    </header>
  );
}

export default Header;