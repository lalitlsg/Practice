import style from "./style.css";
import { useDispatch } from "react-redux";
import { useEffect } from "preact/hooks";
import { changeHeaderTitle } from "../../store/actions/index";

const BankEmi = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderTitle("Bank EMI"));
  }, []);
  return <section class="routeContainer">Bank Emi</section>;
};

export default BankEmi;
