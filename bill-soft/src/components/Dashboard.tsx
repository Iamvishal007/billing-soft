import React from "react";
import "./Dashboard.css";

interface StatCardProps {
  title: string;
  value: string | number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => (
  <div className="stat-card">
    <p className="stat-title">{title}</p>
    <h2 className="stat-value">{value}</h2>
  </div>
);

const Dashboard: React.FC = () => {
  const stats = [
    { title: "Total Sales", value: "₹1,20,000" },
    { title: "Active Customers", value: 42 },
    { title: "Pending Bills", value: 5 },
    { title: "Equipments Rented", value: 12 },
  ];

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>

      <div className="stats-grid">
        {stats.map((s, i) => (
          <StatCard key={i} title={s.title} value={s.value} />
        ))}
      </div>

      <div className="activity-section">
        <h2 className="activity-title">Recent Activity</h2>
        <ul className="activity-list">
          <li>Generated new bill for ABC Constructions</li>
          <li>Updated GST rates</li>
          <li>Added new equipment to inventory</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
