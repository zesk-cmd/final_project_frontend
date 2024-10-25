import React from "react";
import { Link } from "react-router-dom";

import guest_info from "./Registration_data";

import "./Registration.css";
const Registration = () => {
  return (
    <div className="registration-container">
      <div className="heading">REGISTRATION PAGE</div>
      <div className="content">
        <div className="left-content">
          <span className="heading">Guest Informations</span>
          <div className="guest-info">
            {guest_info.map((guest_data) => (
              <div id={guest_data.id} className="input-detail">
                <label className="label" htmlFor="first_name">
                  {guest_data.label}:
                </label>
                <input className="input" id={guest_data.id} type="text" />
              </div>
            ))}
          </div>
        </div>

        <div className="right-content">
          <span className="heading">Other Details</span>
          <div className="destination">
            <span className="label">Office:</span>
            <select className="offices" name="destination" id="destination">
              <option value="commandant">Commandant</option>
              <option value="adjutant">Adjutant</option>
              <option value="hospital">Hospital</option>
              <option value="intelligence">Intelligence Office</option>
              <option value="mp">Military Police</option>
              <option value="quarter_master">Quarter Master</option>
              <option value="pay_office">Pay Office</option>
              <option value="com">COM</option>
              <option value="nactevate">Nactvet</option>
            </select>
          </div>

          <div className="description">
            <span className="label">Descriptions:</span>
            <textarea
              className="guest-description"
              name="description"
              id="description"
            ></textarea>
          </div>

          <div className="sentry">
              <span className="label">Sentry:</span>
              <input type="text" placeholder="Force number" />
          </div>
        </div>
      </div>

      <input className="submit-btn" type="submit" value='SUBMIT'/>

      <span className="question">Are you an Adminstrator.? <Link className="link" to={'/sign-in'}>SignIn</Link></span>
    </div>
  );
};

export default Registration;
