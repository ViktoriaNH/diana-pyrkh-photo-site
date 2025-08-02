import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.js";
import HomePage from "./pages/home.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
         {/* <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/faq" element={<FaqPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/contacts" element={<ContactsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
