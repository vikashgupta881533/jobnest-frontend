import React from "react";

// type: pending | approved | rejected | interview | shortlisted | applied | offer | hired
export default function Badge({ type, children }) {
  return <span className={`badge ${type}`}>{children}</span>;
}
