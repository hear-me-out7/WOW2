import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { SkipToContent } from "@/components/SkipToContent";
import { InstallPrompt } from "@/components/InstallPrompt";
import { UpdateNotification } from "@/components/UpdateNotification";
import Index from "./pages/Index";
import ProgramPage from "./pages/ProgramPage";
import TeamPage from "./pages/TeamPage";
import ConsultationPage from "./pages/ConsultationPage";
import ResourcesPage from "./pages/ResourcesPage";
import ConnectPage from "./pages/ConnectPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SkipToContent />
        <div className="min-h-screen flex flex-col bg-black-bg">
          <Header />
          <main id="main-content" className="flex-1 pt-16 pb-20 md:pb-0" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/program" element={<ProgramPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/connect" element={<ConnectPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
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