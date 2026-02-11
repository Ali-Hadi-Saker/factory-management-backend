import './style.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [clients, setClients] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadClients();
    }, []);

    const loadClients = async ()=> {
        const data = await window.api.getClients();
        setClients(data);
    }
    return(
        <>
            <h1>HOME</h1>
            <button onClick={() => {alert("ADD new clients")}}>
                + Add new Client
            </button>
            <ul>
                {clients.map((client) => (
                    <li 
                        key={client.key}
                        onClick={() => navigate(`/client/${client.id}`)}
                    >
                        {client.company_name}
                    </li>
                ))}
            </ul>
        </>
    )
}