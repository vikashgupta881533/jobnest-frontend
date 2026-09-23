import React from "react";
import "../../components/site.css";

export default function Privacy() {
  return (
    <div className="section" style={{ maxWidth: 760 }}>
      <div className="section-head">
        <div className="kicker">Privacy Policy</div>
        <h2>Your data, handled responsibly</h2>
        <p>Last updated: September 2026</p>
      </div>

      <div style={{ color: "var(--s-muted)", fontSize: 14.5, lineHeight: 1.8 }}>
        <h3 style={{ fontSize: 17, color: "var(--s-ink)", marginBottom: 10, marginTop: 28 }}>What we collect</h3>
        <p>When you create an account, we collect your name, email, phone number, and — if you choose to add them — your resume, skills, and work experience. Recruiters additionally provide their company name.</p>

        <h3 style={{ fontSize: 17, color: "var(--s-ink)", marginBottom: 10, marginTop: 28 }}>How we use it</h3>
        <p>Your profile information is shown to recruiters only when you apply to one of their listings. We never sell your data to third parties, and we never share your contact details with a company you haven't applied to.</p>

        <h3 style={{ fontSize: 17, color: "var(--s-ink)", marginBottom: 10, marginTop: 28 }}>Resumes and uploads</h3>
        <p>Uploaded resumes and profile photos are stored securely and are only accessible to recruiters you've applied to, and to our platform administrators for verification purposes.</p>

        <h3 style={{ fontSize: 17, color: "var(--s-ink)", marginBottom: 10, marginTop: 28 }}>Your rights</h3>
        <p>You can update or delete your profile information at any time from your dashboard. If you'd like your account fully removed, contact us and we'll process the request within a reasonable timeframe.</p>

        <h3 style={{ fontSize: 17, color: "var(--s-ink)", marginBottom: 10, marginTop: 28 }}>Questions</h3>
        <p>If you have any questions about this policy, reach out through our Contact page.</p>
      </div>
    </div>
  );
}
