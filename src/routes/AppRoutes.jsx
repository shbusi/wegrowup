import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedHomepage from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnimatedHomepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
