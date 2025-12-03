import React from 'react'
import './Footer.css'
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
function Footer() {
  return (
    <div className="footer_outer_continar">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>

        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Media Cenater</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="service_code">
          <p>Service Code</p>
        </div>

        <div className="copy_write">&copy; at Tom 2025 NITFLIX</div>
      </div>
    </div>
  );
}

export default Footer
