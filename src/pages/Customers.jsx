import { useState } from "react";
import PageHeader from "../components/PageHeader";

const customersData = [
  {
    customer_id: "CUST001",
    customer_name: "Andi Saputra",
    email: "andi@email.com",
    phone: "081234567001",
    loyalty: "Gold",
  },
  {
    customer_id: "CUST002",
    customer_name: "Budi Santoso",
    email: "budi@email.com",
    phone: "081234567002",
    loyalty: "Silver",
  },
  {
    customer_id: "CUST003",
    customer_name: "Citra Dewi",
    email: "citra@email.com",
    phone: "081234567003",
    loyalty: "Bronze",
  },
  {
    customer_id: "CUST004",
    customer_name: "Dewi Lestari",
    email: "dewi.lestari4@email.com",
    phone: "081234567004",
    loyalty: "Gold",
  },
  {
    customer_id: "CUST005",
    customer_name: "Eko Prasetyo",
    email: "eko.prasetyo5@email.com",
    phone: "081234567005",
    loyalty: "Silver",
  },
  {
    customer_id: "CUST006",
    customer_name: "Fajar Nugroho",
    email: "fajar.nugroho6@email.com",
    phone: "081234567006",
    loyalty: "Bronze",
  },
  {
    customer_id: "CUST007",
    customer_name: "Gita Putri",
    email: "gita.putri7@email.com",
    phone: "081234567007",
    loyalty: "Gold",
  },
  {
    customer_id: "CUST008",
    customer_name: "Hadi Wijaya",
    email: "hadi.wijaya8@email.com",
    phone: "081234567008",
    loyalty: "Silver",
  },
  {
    customer_id: "CUST009",
    customer_name: "Intan Sari",
    email: "intan.sari9@email.com",
    phone: "081234567009",
    loyalty: "Bronze",
  },
  {
    customer_id: "CUST010",
    customer_name: "Joko Susilo",
    email: "joko.susilo10@email.com",
    phone: "081234567010",
    loyalty: "Gold",
  },
  {
    customer_id: "CUST011",
    customer_name: "Kartika Ayu",
    email: "kartika.ayu11@email.com",
    phone: "081234567011",
    loyalty: "Silver",
  },
  {
    customer_id: "CUST012",
    customer_name: "Lukman Hakim",
    email: "lukman.hakim12@email.com",
    phone: "081234567012",
    loyalty: "Bronze",
  },
  {
    customer_id: "CUST013",
    customer_name: "Maya Sari",
    email: "maya.sari13@email.com",
    phone: "081234567013",
    loyalty: "Gold",
  },
  {
    customer_id: "CUST014",
    customer_name: "Nanda Putra",
    email: "nanda.putra14@email.com",
    phone: "081234567014",
    loyalty: "Silver",
  },
  {
    customer_id: "CUST015",
    customer_name: "Oki Setiawan",
    email: "oki.setiawan15@email.com",
    phone: "081234567015",
    loyalty: "Bronze",
  },
];

export default function Customers() {
  const [showForm, setShowForm] = useState(false);
  const [customers, setCustomers] = useState(customersData);

  const [form, setForm] = useState({
    customer_id: "",
    customer_name: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomers([...customers, form]);
    setShowForm(false);
  };

  return (
    <div className="p-4">
      <PageHeader
        title="Customer"
        current="Customer List"
        onAdd={() => setShowForm(true)}
      />

      {/* TABLE */}
      <table className="w-full mt-4 border">
        <thead className="bg-gray-100">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Loyalty</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c, i) => (
            <tr key={i} className="text-center border-t">
              <td>{c.customer_id}</td>
              <td>{c.customer_name}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>{c.loyalty}</td>
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
            <h3 className="text-xl font-semibold">Add Customer</h3>

            <input placeholder="ID" onChange={(e)=>setForm({...form, customer_id:e.target.value})} className="border p-2"/>
            <input placeholder="Name" onChange={(e)=>setForm({...form, customer_name:e.target.value})} className="border p-2"/>
            <input placeholder="Email" onChange={(e)=>setForm({...form, email:e.target.value})} className="border p-2"/>
            <input placeholder="Phone" onChange={(e)=>setForm({...form, phone:e.target.value})} className="border p-2"/>

            <select onChange={(e)=>setForm({...form, loyalty:e.target.value})} className="border p-2">
              <option>Bronze</option>
              <option>Silver</option>
              <option>Gold</option>
            </select>

            <div className="flex gap-2">
              <button className="bg-green-600 text-white px-3 py-2 rounded">Save</button>
              <button type="button" onClick={()=>setShowForm(false)} className="bg-gray-400 text-white px-3 py-2 rounded">Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
