import { Link } from "preact-router/match";
import style from "./style.css";

const EmiOption = ({ title, description, route }) => {
  return (
    <section class={style.emiOption}>
      <Link href={"/" + route} class={style.link}>
        <div class={style.title}>{title}</div>
        <div class={style.description}>{description}</div>
      </Link>
    </section>
  );
};

export default EmiOption;
