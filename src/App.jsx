import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

// Pages
import HomePage from './pages/HomePage';
import CampaignLandingPage from './pages/CampaignLandingPage';
import TheJourneyPage from './pages/TheJourneyPage';
import PackagesPage from './pages/PackagesPage';
import DeparturesPage from './pages/DeparturesPage';
import ItineraryPage from './pages/ItineraryPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookingFlowPage from './pages/BookingFlowPage';

// Scroll To Top on Route Change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-ivory text-forest selection:bg-gold selection:text-evergreen">
      <ScrollToTop />

      {/* Global Navigation Header */}
      <Navbar onOpenEnquiry={() => setEnquiryModalOpen(true)} />

      {/* Main Page Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenEnquiry={() => setEnquiryModalOpen(true)} />} />
          <Route path="/kailash-mansarovar-yatra-2027" element={<CampaignLandingPage />} />
          <Route path="/the-journey" element={<TheJourneyPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/:id" element={<PackagesPage />} />
          <Route path="/departures" element={<DeparturesPage />} />
          <Route path="/itinerary" element={<ItineraryPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/about" element={<AboutPage onOpenEnquiry={() => setEnquiryModalOpen(true)} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookingFlowPage />} />
          {/* Fallback route */}
          <Route path="*" element={<HomePage onOpenEnquiry={() => setEnquiryModalOpen(true)} />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Bespoke Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />
    </div>
  );
}

