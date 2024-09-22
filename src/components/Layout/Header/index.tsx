import useAppSelector from "@hooks/useAppSelector";
import useAppDispatch from "@hooks/useAppDispatch";
import { Button, Logo } from "@components/UI";
import { EditIcon } from "@components/UI/icons";
import { redirect } from "@store/slices/curPage";
import { Pages } from "@constants";
import styles from "./Header.module.css";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FC<HeaderProps> = (props) => {
  const { page } = useAppSelector((state) => state.curPage);
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header} {...props}>
      <Logo onClick={() => dispatch(redirect(Pages.main))} />
      {page === Pages.main && (
        <Button
          icon={EditIcon}
          onClick={() => dispatch(redirect(Pages.createNote))}
        />
      )}
    </header>
  );
};

export default Header;
