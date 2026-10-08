import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import FeaturedJobs from "./components/FeaturedJobs";
import TopCompanies from "./components/TopCompanies";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Layout from "./components/Layout";

// public marketing pages
import FindJobs from "./pages/public/FindJobs";
import Companies from "./pages/public/Companies";
import ForEmployers from "./pages/public/ForEmployers";
import About from "./pages/public/About";
import CareerAdvice from "./pages/public/CareerAdvice";
import SalaryGuide from "./pages/public/SalaryGuide";
import Pricing from "./pages/public/Pricing";
import Contact from "./pages/public/Contact";
import Privacy from "./pages/public/Privacy";

import "./components/dashboard/dashboard.css";
import { ThemeProvider } from "./components/dashboard/theme/ThemeContext";
import ThemeSwitcher from "./components/dashboard/theme/ThemeSwitcher";
import ProtectedRoute from "./components/dashboard/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

// candidate pages
import CandidateLayout from "./components/dashboard/CandidateLayout";
import CandidateOverview from "./pages/candidate/CandidateOverview";
import CandidateJobs from "./pages/candidate/CandidateJobs";
import CandidateApplications from "./pages/candidate/CandidateApplications";
import CandidateSavedJobs from "./pages/candidate/CandidateSavedJobs";
import CandidateProfile from "./pages/candidate/CandidateProfile";
import CandidateResume from "./pages/candidate/CandidateResume";
import CandidateJobDetails from "./pages/candidate/CandidateJobDetails";

// recruiter pages
import RecruiterLayout from "./components/dashboard/RecruiterLayout";
import RecruiterOverview from "./pages/recruiter/RecruiterOverview";
import RecruiterPostJob from "./pages/recruiter/RecruiterPostJob";
import RecruiterListings from "./pages/recruiter/RecruiterListings";
import RecruiterApplicants from "./pages/recruiter/RecruiterApplicants";
import RecruiterApplicantDetail from "./pages/recruiter/RecruiterApplicantDetail";
import RecruiterEditJob from "./pages/recruiter/RecruiterEditJob";
import RecruiterPipeline from "./pages/recruiter/RecruiterPipeline";
import RecruiterMessages from "./pages/recruiter/RecruiterMessages";
import RecruiterProfile from "./pages/recruiter/RecruiterProfile";

// admin pages
import AdminLayout from "./components/dashboard/AdminLayout";
import AdminOverview from "./pages/admin/AdminOverview";
import AdminRecruiters from "./pages/admin/AdminRecruiters";
import AdminJobs from "./pages/admin/AdminJobs";
import AdminProfile from "./pages/admin/AdminProfile";
import { Toaster } from "react-hot-toast";

function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedJobs />
      <TopCompanies />
      <WhyChoose />
    </>
  );
}

// Har dashboard (Candidate/Recruiter/Admin) ko yahi wrapper deta hai —
// theme system + theme-switcher button sirf inke andar hi kaam karta hai,
// public site (Home/Login/Signup) is se bilkul untouched rehti hai.
function DashboardShell({ children }) {
  return (
    <ThemeProvider defaultTheme="brass">
      <ThemeSwitcher />
      {children}
    </ThemeProvider>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />

       <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/jobs" element={<FindJobs />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/for-employers" element={<ForEmployers />} />
          <Route path="/about" element={<About />} />
          <Route path="/career-advice" element={<CareerAdvice />} />
          <Route path="/salary-guide" element={<SalaryGuide />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Candidate — nested routes, role-protected, own theme */}
        <Route
          path="CandidateDashboard/*"
          element={
            <DashboardShell>
              <ProtectedRoute allowedRoles={["candidate"]}>
                <CandidateLayout />
              </ProtectedRoute>
            </DashboardShell>
          }
        >
          <Route index element={<CandidateOverview />} />
          <Route path="jobs" element={<CandidateJobs />} />
          <Route path="applications" element={<CandidateApplications />} />
          <Route path="saved" element={<CandidateSavedJobs />} />
          <Route path="profile" element={<CandidateProfile />} />
          <Route path="resume" element={<CandidateResume />} />
          <Route path="job/:jobId" element={<CandidateJobDetails />} />
        </Route>

        {/* Recruiter — nested routes, role-protected, own theme */}
        <Route
          path="RecruiterDashboard/*"
          element={
            <DashboardShell>
              <ProtectedRoute allowedRoles={["recruiter"]}>
                <RecruiterLayout />
              </ProtectedRoute>
            </DashboardShell>
          }
        >
          <Route index element={<RecruiterOverview />} />
          <Route path="post-job" element={<RecruiterPostJob />} />
          <Route path="listings" element={<RecruiterListings />} />
          <Route path="applicants" element={<RecruiterApplicants />} />
          <Route path="applicants/:jobId" element={<RecruiterApplicantDetail />} />
          <Route path="edit-job/:jobId" element={<RecruiterEditJob />} />
          <Route path="pipeline" element={<RecruiterPipeline />} />
          <Route path="messages" element={<RecruiterMessages />} />
          <Route path="profile" element={<RecruiterProfile />} />
        </Route>

        {/* Admin — nested routes, role-protected, own theme */}
        <Route
          path="AdminDashboard/*"
          element={
            <DashboardShell>
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminLayout />
              </ProtectedRoute>
            </DashboardShell>
          }
        >
          <Route index element={<AdminOverview />} />
          <Route path="recruiters" element={<AdminRecruiters />} />
          <Route path="jobs" element={<AdminJobs />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
