import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateBooks } from "./pages/CreateBooks";
import DeleteBooks from "./pages/DeleteBooks";
import EditBooks from "./pages/EditBooks";
import ShowBook from "./pages/ShowBook";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBooks />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBooks />} />
        <Route path="/books/delete/:id" element={<DeleteBooks />} />
      </Routes>
    </Router>
  );
}

export default App;
