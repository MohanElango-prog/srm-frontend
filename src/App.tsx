import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/BlogPage";
import NotFound from "./pages/NotFound";
import Footer from "@/components/Footer";
import FAQSection from "./components/Faq";
import ContactSection from "./components/Contact";
import { MainNav } from "./components/MainNav";
import BlogHomepage from "./components/blogs";
import HomePage from "./pages/HomePage";
import BlogDetail from "./pages/BlogDetail";
import ContactPage from "./pages/ContactUs";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <MainNav/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="blogs" element={<BlogHomepage />} />
          <Route path="blogs/:id" element={<BlogDetail />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FAQSection />
        <ContactSection/>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
