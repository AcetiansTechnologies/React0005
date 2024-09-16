import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
            
           
        <div class="footer-section">
  <ul class="footer-list">
    <h5 class="footer-title">Types of Courses</h5>
    <hr />
    <li class="footer-item">Live</li>
    <li class="footer-item">Offline</li>
    <li class="footer-item">One to One</li>
    <li class="footer-item">Self-paced</li>
    <li class="footer-item">Workshops</li>
    <li class="footer-item">Webinars</li>
  </ul>
</div>


         

          <div className="footer-section">
            
            <ul className="footer-list">
            <h5 className="footer-title">Technologies</h5><hr></hr>
              <li className="footer-item">Python</li>
              <li className="footer-item">Php</li>
              <li className="footer-item">React</li>
              <li className="footer-item">Node</li>
              <li className="footer-item">HTML CSS JS</li>
              <li className="footer-item">GO</li>
              
            </ul>
          </div>

           
        </div>
        <div className='footer-bottom'>
          <ul>
            <li>
              <ul>
                <li><a href="https://acetians.com/about" target="_blank">
                    About Us
                  </a></li>
                <li>
                 <a href="https://acetians.com/contact" target="_blank">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="https://acetians.com/careers" target="_blank">
                    Careers
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <a href="https://acetians.com/privacy-policy" target="_blank">
                    Privacy Policy
                  </a>
                   
                </li>
                <li>
                  <a href="https://acetians.com/contact" target="_blank">
                    Bussines Enquiry
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
