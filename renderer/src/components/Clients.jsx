import React, { useEffect, useState } from "react";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({
    company_name: "",
    contact_person: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const data = await window.api.getClients();
    setClients(data);
  };

  const handleSubmit = async () => {
    await window.api.createClient(form);
    setForm({ company_name: "", contact_person: "", phone: "", address: "" });
    loadClients();
  };

  return (
    <div>
      <h2>Clients</h2>

      <input
        placeholder="Company"
        value={form.company_name}
        onChange={e => setForm({ ...form, company_name: e.target.value })}
      />
      <input
        placeholder="Contact"
        value={form.contact_person}
        onChange={e => setForm({ ...form, contact_person: e.target.value })}
      />
      <button onClick={handleSubmit}>Add Client</button>

      <ul>
        {clients.map(c => (
          <li key={c.id}>{c.company_name}</li>
        ))}
      </ul>
    </div>
  );
}
