import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import DetailPage from "./pages/DetailPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <div className="min-h-screen bg-gray-800 text-black p-5 lg:p-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailPage />} />
          <Route path="/favoriteMovies" element={<FavoritesPage />} />
        </Routes>
      </div>
      
      <Footer />
    </BrowserRouter>
  );
};

export default App;
