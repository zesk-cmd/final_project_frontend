import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [guest_list, setGuestList] = useState([]);
  const [display_dropdown, setDisplayDropdown] = useState(false);

  return (
    <div className="dashboard-container">
      <div className="header">
        <span className="heading">SKUA Guest List</span>
        <div className="account-details">
          <span
            className="username"
            onMouseEnter={() => setDisplayDropdown(true)}
          >
            Username
          </span>
          <div className={`dropdown ${display_dropdown ? "" : "display"}`}
          onMouseLeave={() => setDisplayDropdown(false)}>
            <small className="account">My Account</small>
            <small className="logout">Logout</small>
          </div>
        </div>
      </div>

      <hr className="separation-line" />

      <div className="body-content">
        <div className="filter">
          <span className="label">From:</span>
          <input className="input" type="date" />
          <span className="label">to</span>
          <input className="input" type="date" />
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Office</th>
              <th>Date</th>
              <th>Time</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Magayane V.A</td>
              <td>Nactevate</td>
              <td>23/2/2025</td>
              <td>21:00</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Magayane V.A</td>
              <td>Nactevate</td>
              <td>23/2/2025</td>
              <td>21:00</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Magayane V.A</td>
              <td>Nactevate</td>
              <td>23/2/2025</td>
              <td>21:00</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Magayane V.A</td>
              <td>Nactevate</td>
              <td>23/2/2025</td>
              <td>21:00</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Magayane V.A</td>
              <td>Nactevate</td>
              <td>23/2/2025</td>
              <td>21:00</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Magayane V.A</td>
              <td>Nactevate</td>
              <td>23/2/2025</td>
              <td>21:00</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Magayane V.A</td>
              <td>Nactevate</td>
              <td>23/2/2025</td>
              <td>21:00</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Magayane V.A</td>
              <td>Nactevate</td>
              <td>23/2/2025</td>
              <td>21:00</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Magayane V.A</td>
              <td>Nactevate</td>
              <td>23/2/2025</td>
              <td>21:00</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Magayane V.A</td>
              <td>Nactevate</td>
              <td>23/2/2025</td>
              <td>21:00</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Magayane V.A</td>
              <td>Nactevate</td>
              <td>23/2/2025</td>
              <td>21:00</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Magayane V.A</td>
              <td>Nactevate</td>
              <td>23/2/2025</td>
              <td>21:00</td>
              <td>
                <button className="view-btn">View</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>

            {/* {guest_list.map((guest) => (
            <tr id={guest.id}>
              <td>{guest.fullname}</td>
              <td>{guest.destination_office}</td>
              <td>{guest.arrive_date}</td>
              <td>{guest.arrive_time}</td>
            </tr> 
          ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;