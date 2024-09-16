import React from 'react'

const StayInformed = ({clickTo}) => {
  return (
    <div className="stay-informed-container">
    <h1 className="stay-informed-title">Enrollment Benefits</h1>
    <p className="stay-informed-description">
    Enroll now in Acetians Technologies' exclusive training programs!
Gain access to self-paced courses, live workshops, free training sessions, and special discounts designed to enhance your skills and accelerate your career. Join our community of professionals and stay updated with the latest advancements in technology and innovation.
Enroll today and take the next step towards your success!
    </p>
    <button className="subscribe-button" type='button' onClick={clickTo}>Enroll Now</button>
  </div>
  )
}

export default StayInformed