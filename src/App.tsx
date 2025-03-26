
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import DiseaseDetail from "./pages/DiseaseDetail";
// import SearchResults from "./pages/SearchResults";
// import Categories from "./pages/Categories";
// import Auth from "./pages/Auth";
// import About from "./pages/About";
// import Contact from "./pages/Contact"; // Add the import for Contact page
// import { useEffect, useState } from "react";

// const queryClient = new QueryClient();

// const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const user = localStorage.getItem("healthGuideUser");
//     setIsAuthenticated(!!user);
//     setIsLoading(false);
//   }, []);

//   if (isLoading) {
//     return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
//   }

//   if (!isAuthenticated) {
//     return <Navigate to="/auth" replace />;
//   }

//   return <>{children}</>;
// };

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/auth" element={<Auth />} />
//           <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
//           <Route path="/disease/:id" element={<ProtectedRoute><DiseaseDetail /></ProtectedRoute>} />
//           <Route path="/search" element={<ProtectedRoute><SearchResults /></ProtectedRoute>} />
//           <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
//           <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
//           <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} /> {/* Add Contact route */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DiseaseDetail from "./pages/DiseaseDetail";
import SearchResults from "./pages/SearchResults";
import Categories from "./pages/Categories";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Contact from "./pages/Contact"; // Added Contact page

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = !!localStorage.getItem("healthGuideUser");
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
          <Route path="/disease/:id" element={<ProtectedRoute><DiseaseDetail /></ProtectedRoute>} />
          <Route path="/search" element={<ProtectedRoute><SearchResults /></ProtectedRoute>} />
          <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

