import { HashRouter, Route, Routes } from "react-router-dom";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import HomePage from "@/containers/HomePage";
import NavigationBar from "@/containers/NavigationBar";
import ExperiencePage from "@/containers/ExperiencePage";
import ProjectsPage from "@/containers/ProjectsPage";
import ContactPage from "@/containers/ContactPage";
import Footer from "@/components/Footer";

function App() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <HashRouter>
      <NavigationBar />
      <Flex minH="100vh" px={isMobile ? "45px" : "100px"} py="100px" justifyContent="center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Flex>
      <Footer />
    </HashRouter>
  );
}

export default App;
