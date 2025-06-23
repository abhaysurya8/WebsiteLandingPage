import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FontProvider } from "@/contexts/FontContext";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/:slug" component={ProjectDetail} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FontProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-white">
            <Navigation />
            <Router />
            <ScrollToTop />
          </div>
          <Toaster />
        </TooltipProvider>
      </FontProvider>
    </QueryClientProvider>
  );
}

export default App;
