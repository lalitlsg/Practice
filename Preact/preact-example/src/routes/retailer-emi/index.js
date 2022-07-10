import style from "./style.css";
import { useDispatch } from "react-redux";
import { useEffect } from "preact/hooks";
import { changeHeaderTitle } from "../../store/actions";

const RetailerEmi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderTitle("Retailer EMI"));
  }, []);
  return <section class="routeContainer">Retailer Emi</section>;
};

export default RetailerEmi;
