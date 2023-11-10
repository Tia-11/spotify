import "./App.css";
import MyMain from "./Componenti/Main";
import MyPlayer from "./Componenti/Player";
import MySidebar from "./Componenti/Sidebar";
import { Provider } from "react-redux";
import store from "./Redux/Store/index";

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div className="row">
          <MySidebar />
          <MyMain />
        </div>
      </div>
      <MyPlayer />
    </Provider>
  );
}

export default App;
