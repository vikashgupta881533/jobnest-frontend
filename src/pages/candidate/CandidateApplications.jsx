import React, { useState, useEffect } from "react";
import axios from "axios";
import Badge from "../../components/dashboard/Badge";
import api from "../../api/axios";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

const statusMap = {
  applied: { type: "applied", text: "Applied" },
  shortlisted: { type: "shortlisted", text: "Shortlisted" },
  interview: { type: "interview", text: "Interview" },
  offer: { type: "offer", text: "Offer" },
  rejected: { type: "rejected", text: "Not selected" },
  hired: { type: "hired", text: "Hired" },
};

export default function CandidateApplications() {
  const [myApplications, setMyApplications] = useState([]);
  const [openMessagesFor, setOpenMessagesFor] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  const fetchMyApplications = () => {
    api.get("/applications/my", authHeader())
      .then((res) => setMyApplications(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMyApplications();
  }, []);

  const openMessages = (applicationId) => {
    setOpenMessagesFor(applicationId);
    api.get(`/messages/${applicationId}`, authHeader())
      .then((res) => setMessages(res.data))
      .catch((err) => console.log(err));
  };

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    api.post("/messages", { applicationId: openMessagesFor, text: messageText }, authHeader())
      .then(() => {
        setMessageText("");
        openMessages(openMessagesFor);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="panel">
      <h2>Application status</h2>
      <p className="panel-sub">Where each of your applications currently stands. Click a row to message the recruiter.</p>
      <table>
        <thead>
          <tr><th>Role</th><th>Company</th><th>Applied</th><th>Stage</th><th></th></tr>
        </thead>
        <tbody>
          {myApplications.length === 0 && (
            <tr><td colSpan="5">You haven't applied to any jobs yet.</td></tr>
          )}
          {myApplications.map((a) => (
            <tr key={a._id}>
              <td className="cell-strong">{a.job?.title}</td>
              <td>{a.job?.company}</td>
              <td>{new Date(a.createdAt).toLocaleDateString()}</td>
              <td><Badge type={statusMap[a.status]?.type || "applied"}>{statusMap[a.status]?.text || a.status}</Badge></td>
              <td><button className="btn-mini" onClick={() => openMessages(a._id)}>Message</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {openMessagesFor && (
        <div style={{ marginTop: 20, borderTop: "1px solid var(--line)", paddingTop: 16 }}>
          <h2>Conversation</h2>
          <div style={{ maxHeight: 200, overflowY: "auto", marginBottom: 10 }}>
            {messages.length === 0 && <p className="panel-sub">No messages yet.</p>}
            {messages.map((m) => (
              <div key={m._id} style={{ marginBottom: 8 }}>
                <span className="cell-strong">{m.sender?.name}: </span>
                <span>{m.text}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              placeholder="Type a message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              style={{ flex: 1, padding: 10 }}
            />
            <button className="btn-mini" onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
