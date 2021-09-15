import { Header } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home, Blogs, Projects, Others } from "./pages";

function App() {
  return (
    <div className="w-screen">
      <Header />
      <div className="w-11/12 sm:10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/others" element={<Others />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
