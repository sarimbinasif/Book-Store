import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Books from "./pages/Books.jsx";
import Add from "./pages/Add";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Books />} />
  <Route path="/add" element={<Add />} />
  <Route path="/update" element={<Update />} />
  <Route path="*" element={<div>404 Not Found</div>} />

    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
