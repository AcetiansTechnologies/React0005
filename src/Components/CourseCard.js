import React from 'react';
import { useNavigate } from 'react-router-dom';


function CourseCard({ title, desc, duration, price, technologies, certificate,cardImage }) {

  const navigate = useNavigate();
  return (
    <div className="card" 
     style={{backgroundImage:`url(${cardImage})`}}
    onClick={()=>navigate('/course/'+title.toString().toLowerCase().replace([' ','  '],'-'))}>
      <h5>FUNDAMENTAL</h5>
      <h3>{title}</h3>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Price:</strong> &#8377;{price}</p>
      <p><strong>Technologies:</strong> {technologies}</p>
      <p><strong>{certificate ? "Certificate Available" : "Certificate Not Available"}</strong></p>
    </div>
  );
}

export default CourseCard;
