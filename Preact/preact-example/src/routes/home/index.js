import style from "./style.css";
import { useDispatch } from "react-redux";
import { useEffect } from "preact/hooks";
import { emiOptions } from "../../../mock/emi-options";
import EmiOption from "../../components/emi-option";
import { changeHeaderTitle } from "../../store/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeHeaderTitle("Select Option"));
  }, []);

  return (
    <div class="routeContainer">
      <nav>
        {emiOptions.map((option) => (
          <EmiOption
            route={option.path}
            title={option.title}
            description={option.description}
          />
        ))}
      </nav>
    </div>
  );
};

export default Home;
