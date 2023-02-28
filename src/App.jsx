import Home from "./containers/Home.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "@/components/NavigationBar.jsx";

// import './App.css'

function App() {
  return (
    <HashRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
