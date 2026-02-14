import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portable from "./pages/Portable";
import NotFound from "./pages/NotFound";
import CursorDemo from "./pages/CursorDemo";
import Win from "./pages/downloads/Win";
import Mac from "./pages/downloads/Mac";
import Linux from "./pages/downloads/Linux";
import Android from "./pages/downloads/Android";
import { Cursor } from "@/components/ui/inverted-cursor";
import { InteractiveNebulaShader } from "@/components/liquid-shader";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <InteractiveNebulaShader className="-z-20 pointer-events-none" />
      <div className="fixed inset-0 -z-10 pointer-events-none bg-background/65 dark:bg-background/45" />
      <Cursor />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cursor" element={<CursorDemo />} />
          <Route path="/portable" element={<Portable />} />
          <Route path="/downloads/win" element={<Win />} />
          <Route path="/downloads/mac" element={<Mac />} />
          <Route path="/downloads/linux" element={<Linux />} />
          <Route path="/downloads/android" element={<Android />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
