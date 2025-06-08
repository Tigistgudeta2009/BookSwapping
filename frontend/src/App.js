import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Browse from './pages/Browse/Browse';
import About from './pages/About/About';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import Contact from './pages/Contact/Contact';
import Profile from './pages/Profile/Profile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import BookDetails from './pages/BookDetails/BookDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import HelpCenter from './pages/HelpCenter/HelpCenter';
import FAQ from './pages/FAQ/FAQ';
import BookSwapForum from './pages/BookSwapForum/BookSwapForum';

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Router>
          <div className="app">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/about" element={<About />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/books/:id" element={<BookDetails />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/help-center" element={<HelpCenter />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/book-swap-forum" element={<BookSwapForum />} />
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
