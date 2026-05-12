import { useState } from "react";
import PageHeader from "../components/PageHeader";

const ordersData = [
  {
    order_id: "ORD001",
    customer_name: "Andi Saputra",
    status: "Completed",
    total_price: 250000,
    order_date: "2026-04-01",
  },
  {
    order_id: "ORD002",
    customer_name: "Budi Santoso",
    status: "Pending",
    total_price: 175000,
    order_date: "2026-04-02",
  },
  {
    order_id: "ORD003",
    customer_name: "Citra Dewi",
    status: "Cancelled",
    total_price: 99000,
    order_date: "2026-04-03",
  },
  {
    order_id: "ORD004",
    customer_name: "Dewi Lestari",
    status: "Completed",
    total_price: 310000,
    order_date: "2026-04-04",
  },
  {
    order_id: "ORD005",
    customer_name: "Eko Prasetyo",
    status: "Pending",
    total_price: 450000,
    order_date: "2026-04-05",
  },
  {
    order_id: "ORD006",
    customer_name: "Fajar Nugroho",
    status: "Completed",
    total_price: 120000,
    order_date: "2026-04-06",
  },
  {
    order_id: "ORD007",
    customer_name: "Gita Putri",
    status: "Cancelled",
    total_price: 87000,
    order_date: "2026-04-07",
  },
  {
    order_id: "ORD008",
    customer_name: "Hadi Wijaya",
    status: "Completed",
    total_price: 540000,
    order_date: "2026-04-08",
  },
  {
    order_id: "ORD009",
    customer_name: "Intan Sari",
    status: "Pending",
    total_price: 230000,
    order_date: "2026-04-09",
  },
  {
    order_id: "ORD010",
    customer_name: "Joko Susilo",
    status: "Completed",
    total_price: 765000,
    order_date: "2026-04-10",
  },
  {
    order_id: "ORD011",
    customer_name: "Kartika Ayu",
    status: "Cancelled",
    total_price: 150000,
    order_date: "2026-04-11",
  },
  {
    order_id: "ORD012",
    customer_name: "Lukman Hakim",
    status: "Completed",
    total_price: 200000,
    order_date: "2026-04-12",
  },
  {
    order_id: "ORD013",
    customer_name: "Maya Sari",
    status: "Pending",
    total_price: 98000,
    order_date: "2026-04-13",
  },
  {
    order_id: "ORD014",
    customer_name: "Nanda Putra",
    status: "Completed",
    total_price: 670000,
    order_date: "2026-04-14",
  },
  {
    order_id: "ORD015",
    customer_name: "Oki Setiawan",
    status: "Cancelled",
    total_price: 45000,
    order_date: "2026-04-15",
  },
];

export default function Orders() {
  const [orders, setOrders] = useState(ordersData);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    order_id: "",
    customer_name: "",
    status: "Pending",
    total_price: "",
    order_date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      ...form,
      order_id: `ORD${orders.length + 1}`
    };

    setOrders([...orders, newOrder]);
    setShowForm(false);
  };

  return (
    <div className="p-4">
      <PageHeader
        title="Orders"
        current="Order List"
        onAdd={() => setShowForm(true)}
      />

      {/* TABLE */}
      <table className="w-full mt-4 border">
        <thead className="bg-gray-100">
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.order_id} className="text-center border-t">
              <td>{order.order_id}</td>
              <td>{order.customer_name}</td>
              <td
                className={`font-bold ${
                  order.status === "Completed"
                    ? "text-green-600"
                    : order.status === "Pending"
                    ? "text-yellow-500"
                    : "text-red-600"
                }`}
              >
                {order.status}
              </td>
              <td>Rp {Number(order.total_price).toLocaleString()}</td>
              <td>{order.order_date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg w-80 flex flex-col gap-3"
          >
            <h3 className="text-xl font-semibold">Add Order</h3>

            <input
              placeholder="Customer Name"
              className="border p-2"
              onChange={(e) =>
                setForm({ ...form, customer_name: e.target.value })
              }
            />

            <select
              className="border p-2"
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
            >
              <option>Pending</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>

            <input
              type="number"
              placeholder="Total Price"
              className="border p-2"
              onChange={(e) =>
                setForm({ ...form, total_price: e.target.value })
              }
            />

            <input
              type="date"
              className="border p-2"
              onChange={(e) =>
                setForm({ ...form, order_date: e.target.value })
              }
            />

            <div className="flex gap-2">
              <button className="bg-green-600 text-white px-3 py-2 rounded">
                Save
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-400 text-white px-3 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
