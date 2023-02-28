import HomePage from "./containers/HomePage.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "@/components/NavigationBar.jsx";
import ExperiencePage from "@/containers/ExperiencePage.jsx";
import ProjectsPage from "@/containers/ProjectsPage.jsx";
import ContactPage from "@/containers/ContactPage.jsx";

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
