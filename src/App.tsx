import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnboardingSlides from "./components/OnboardingSlides";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ConfirmationScreen from "./components/ConfirmationScreen";
import VerificationPendingScreen from "./components/VerificationPendingScreen";
import RestrictedScreen from "./components/RestrictedScreen";
import SettingsScreen from "./components/SettingsScreen";
import ReportIssueScreen from "./components/ReportIssueScreen";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnboardingSlides />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/confirmation" element={<ConfirmationScreen />} />
          <Route path="/verification-pending" element={<VerificationPendingScreen />} />
          <Route path="/restricted" element={<RestrictedScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="/report-issue" element={<ReportIssueScreen />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;