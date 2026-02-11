import React, { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [orderForm, setOrderForm] = useState({
    client_id: "",
    status: "Pending",
    order_date: "",
    delivery_date: "",
    quantity: 0,
    total_price: 0,
    payment_status: "Unpaid",
    notes: ""
  });

  const [itemForm, setItemForm] = useState({
    size: "",
    paper_type: "",
    color: "",
    weight: 0,
    price: 0
  });

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    const data = await window.api.getOrders();
    setOrders(data);
  };

  const handleCreate = async () => {
    await window.api.createOrder(orderForm, itemForm);
    loadOrders();
  };

  return (
    <div>
      <h2>Orders</h2>

      <input
        placeholder="Client ID"
        onChange={e =>
          setOrderForm({ ...orderForm, client_id: Number(e.target.value) })
        }
      />

      <input
        placeholder="Quantity"
        onChange={e =>
          setOrderForm({ ...orderForm, quantity: Number(e.target.value) })
        }
      />

      <button onClick={handleCreate}>Create Order</button>

      <ul>
        {orders.map(o => (
          <li key={o.id}>
            Order #{o.id} - Client {o.client_id} - Qty {o.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
