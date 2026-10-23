import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../../api/axios";

const authHeader = () => ({ headers: { authorization: localStorage.getItem("token") } });

export default function RecruiterMessages() {
  const [applications, setApplications] = useState([]);
  const [openFor, setOpenFor] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    api.get("/applications/recruiter", authHeader())
      .then((res) => setApplications(res.data))
      .catch((err) => console.log(err));
  }, []);

  const openConversation = (applicationId) => {
    setOpenFor(applicationId);
    api.get(`/messages/${applicationId}`, authHeader())
      .then((res) => setMessages(res.data))
      .catch((err) => console.log(err));
  };

  const handleSend = () => {
    if (!messageText.trim()) return;
    api.post("/messages", { applicationId: openFor, text: messageText }, authHeader())
      .then(() => {
        setMessageText("");
        openConversation(openFor);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="grid">
      <div className="panel">
        <h2>Conversations</h2>
        <p className="panel-sub">Pick an applicant to message</p>
        {applications.length === 0 && <p>No applicants yet.</p>}
        {applications.map((a) => (
          <div className="list-item" key={a._id}>
            <div>
              <div className="t">{a.candidate?.name}</div>
              <div className="d">{a.job?.title}</div>
            </div>
            <button className="btn-mini" onClick={() => openConversation(a._id)}>Open</button>
          </div>
        ))}
      </div>

      <div className="panel">
        <h2>Conversation</h2>
        {!openFor && <p className="panel-sub">Select an applicant from the left</p>}
        {openFor && (
          <>
            <div style={{ maxHeight: 260, overflowY: "auto", marginBottom: 10 }}>
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
              <button className="btn-mini" onClick={handleSend}>Send</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
