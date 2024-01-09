import "./App.css";
import MainPage from "./pages/main_page/MainPage";
import AllTasks from "./pages/all_tasks/AllTasks";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/all_tasks" element={<AllTasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
