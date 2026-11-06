import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
