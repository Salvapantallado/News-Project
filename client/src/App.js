import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { Provider } from "react-redux";
import Store from "./redux/store";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/inicio" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
