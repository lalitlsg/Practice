import style from "./style.css";
import { useDispatch } from "react-redux";
import { useEffect } from "preact/hooks";
import { changeHeaderTitle } from "../../store/actions";

const BrandEmi = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("popstate", (event) => {
      console.log("Brand EMI");
    });
    dispatch(changeHeaderTitle("Brand EMI"));
  }, []);
  return <section class="routeContainer">Brand Emi</section>;
};

export default BrandEmi;
