import { Provider } from "react-redux";
import { store } from "./redux/store";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import RootRouter from "./routes/RootRouter";

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Provider store={store}>
        <RootRouter />
      </Provider>
    </LocalizationProvider>
  );
};

export default App;
