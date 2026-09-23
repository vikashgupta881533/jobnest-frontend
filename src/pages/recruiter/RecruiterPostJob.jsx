import React from "react";
import { useNavigate } from "react-router-dom";
import PostJobForm from "../../components/dashboard/PostJobForm";

export default function RecruiterPostJob() {
  const navigate = useNavigate();

  return (
    <PostJobForm
      onPosted={() => navigate("/RecruiterDashboard/listings")}
    />
  );
}
