// Dashboard.jsx
import "/src/assets/Css/dashboard.css";
import { Link } from "react-router-dom";
import "/src/assets/Css/nav.css";

const Dashboard = ({ role }) => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to BEC Enquiry Management System</h2>
      <div className="menu">
        {role === "admin" ? (
          <AdminMenu />
        ) : (
          <StudentMenu />
        )}
      </div>
    </div>
  );
};

const AdminMenu = () => {
  return (
    <ul>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/post-course">Post Course details</Link></li>
      <li><Link to="/edit-course">Edit Course Details</Link></li>
      <li><Link to="/delete-course">Delete Course Details</Link></li>
      <li><Link to="/view-courses">View All Courses</Link></li>
      <li><Link to="/view-enquiries">View All Enquiries</Link></li>
      <li><Link to="/change-enquiry-status">Change Status of Enquiry</Link></li>
      <li><Link to="/view-payment-history">View Payment History</Link></li>
      <li><Link to="/logout">Logout</Link></li>
    </ul>
  );
};

const StudentMenu = () => {
  return (
    <ul>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/view-courses">View All Courses</Link></li>
      <li><Link to="/check-enquiry-status">Check the Status of Enquiry</Link></li>
      <li><Link to="/delete-enquiry">Delete Enquiry</Link></li>
      <li><Link to="/make-payment">Make Payment for the course</Link></li>
      <li><Link to="/view-payment-history">View Payment History</Link></li>
      <li><Link to="/logout">Logout</Link></li>
    </ul>
  );
};

export default Dashboard;
