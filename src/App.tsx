import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Layout } from "@/components/layout/Layout";
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from "@/components/ScrollToTop.tsx";
import Index from "./pages/Index";
import About from "./pages/About";
import Collections from "./pages/Collections";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProfileLayout from './pages/ProfileLayout';
import ProfileOverview from './pages/ProfileOverview';
import Favorites from './pages/Favorites';
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <ScrollToTop />
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<ProtectedRoute><ProfileLayout /></ProtectedRoute>}>
                  <Route index element={<ProfileOverview />} />
                  {/*<Route path="addresses" element={<>ProfileAddresses </>} />*/}
                  <Route path="favorites" element={<Favorites />} />
                  {/*<Route path="orders" element={<>ProfileOrders </>} />*/}
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </GoogleOAuthProvider>

);

export default App;
