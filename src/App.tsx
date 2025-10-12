import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { SkipToContent } from "@/components/SkipToContent";
import { InstallPrompt } from "@/components/InstallPrompt";
import { UpdateNotification } from "@/components/UpdateNotification";
import { PageTransition } from "@/components/PageTransition";
import Index from "./pages/Index";
import ProgramPage from "./pages/ProgramPage";
import TeamPage from "./pages/TeamPage";
import ConsultationPage from "./pages/ConsultationPage";
import ResourcesPage from "./pages/ResourcesPage";
import ConnectPage from "./pages/ConnectPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/program" element={<PageTransition><ProgramPage /></PageTransition>} />
        <Route path="/team" element={<PageTransition><TeamPage /></PageTransition>} />
        <Route path="/consultation" element={<PageTransition><ConsultationPage /></PageTransition>} />
        <Route path="/resources" element={<PageTransition><ResourcesPage /></PageTransition>} />
        <Route path="/connect" element={<PageTransition><ConnectPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SkipToContent />
        <div className="min-h-screen flex flex-col bg-black-bg">
          <Header />
          <main id="main-content" className="flex-1 pb-20 md:pb-0" tabIndex={-1}>
            <AnimatedRoutes />
          </main>
          <Footer />
          <MobileBottomNav />
          <InstallPrompt />
          <UpdateNotification />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;