import logo from "./logo.svg";
import Header from "./components/layout/header/index";
import Footer from "./components/layout/footer/index";
import Sidebar from "./components/layout/sidebar/index";
import Body from "./components/layout/body/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header>
        <div className="d-flex">
          <Sidebar />
          <Body />
        </div>
      </Header>
    </div>
  );
}

export default App;
