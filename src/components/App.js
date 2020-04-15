import React from "react";
import AppRouter from "../routers/AppRouter";
import { Provider } from "react-redux";
import store from "../store/configureStore";

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
