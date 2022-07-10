import "./style";
import App from "./components/app";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

const AppWithRedux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWithRedux;
