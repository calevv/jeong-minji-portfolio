import { Route, Routes } from "react-router";
import Home from "./pages/Home/sections/Home";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
