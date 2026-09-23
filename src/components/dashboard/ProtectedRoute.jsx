import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Usage in App.jsx:
 *
 *   <Route path="AdminDashboard" element={
 *     <ProtectedRoute allowedRoles={["admin"]}>
 *       <AdminDashboard />
 *     </ProtectedRoute>
 *   } />
 *
 * Agar localStorage ka role allowedRoles mein nahi hai (ya login hi nahi
 * hai), toh /login pe bhej dega — component render hoga hi nahi.
 */
export default function ProtectedRoute({ allowedRoles, children }) {
  const role = localStorage.getItem("role");

  if (!role) {
    // login hi nahi hai
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(role)) {
    // login hai, lekin galat role — apne khud ke dashboard pe bhej do
    if (role === "admin") return <Navigate to="/AdminDashboard" replace />;
    if (role === "recruiter") return <Navigate to="/RecruiterDashboard" replace />;
    return <Navigate to="/CandidateDashboard" replace />;
  }

  return children;
}
