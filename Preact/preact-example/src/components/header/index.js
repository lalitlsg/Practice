import style from "./style.css";
import { useSelector } from "react-redux";

const Header = () => {
  const headerTitle = useSelector((state) => state.headerTitle);
  return (
    <header class={style.header}>
      <h1>{headerTitle}</h1>
    </header>
  );
};

export default Header;
