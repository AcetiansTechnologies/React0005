import React, { useState } from "react";
import Navbar from "../Courrces/Navbar";
import StayInformed from "./StayInformed";
import TeamTran from "./TeamTran";
import Catlog from "./Catlog";
import bkg from '../images/course-specific.png';
import { useLocation } from "react-router-dom";
import CourseContentTab from "./CourseContentTab";
import { CloseOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import axios from "axios";

const CourcesNav = () => {

  
  const courses = useSelector((state) => state.auth.courses);
  

  const location = useLocation();
  const courseName = decodeURIComponent(location.pathname.replace("/course/", "")); // Decode %20 to space
  const courseTitle = courseName;
  // Find the course in the Redux store
  const course = courses.find((c) => c.title.toLowerCase() === courseName.toLowerCase());

  const [formOpen, setFormOpen] = useState(false);

  // States for form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    message: "",
    course_code:''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      course_code: course.course_code,
    });
    try {
      const response = await axios.post('https://training-beta.acetians.com/admin/add-contact.php', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("Form submitted successfully:", response.data);
      setFormData({
        name: "",
        phone: "",
        email: "",
        country: "",
        city: "",
        message: "", 
      });
      alert(response.data.message);
      setFormOpen(false);
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error submitting your application.");
    }
  };
  if (courses.length === 0) {
    return <div style={{minHeight:'200px',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>Loading...</div>;
  }

  return (
    <>
      {formOpen && (
        <div className="form-apply">
          <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
            <li>
              <CloseOutlined onClick={() => setFormOpen(false)} />
            </li>
          </ul>
          <div className="form-box">
            <div className="form-header">
              <h4>Apply for <span style={{ textTransform: 'capitalize' }}> {courseTitle}</span></h4>
            </div>
            <div className="form-body">
              <form onSubmit={handleSubmit}>
                <ul>
                  <li>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li>
                    <input
                      type="phone"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      name="country"
                      placeholder="Country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      name="message"
                      rows="3"
                      col="30"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </li>
                </ul>
                <div className="form-footer">
                  <button className="form-save-btn" type="submit">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className='specific-course'>
        <header
          style={{
            backgroundImage: `url(${bkg})`,
            height: '25vw',
            display: 'flex',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="header-content">
            <h1>{courseTitle}</h1>
          </div>
        </header>

        <CourseContentTab clickTo={() => setFormOpen(true)} course={course} />
        <StayInformed clickTo={() => setFormOpen(true)} />
      </div>
    </>
  );
};

export default CourcesNav;
