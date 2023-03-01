import { HashRouter, Route, Routes } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import HomePage from "@/containers/HomePage";
import NavigationBar from "@/components/NavigationBar";
import ExperiencePage from "@/containers/ExperiencePage";
import ProjectsPage from "@/containers/ProjectsPage";
import ContactPage from "@/containers/ContactPage";

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Flex minH="100vh" p="100px" justifyContent="center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Flex>
    </HashRouter>
  );
}

export default App;
