import React from "react";
import "./about.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitLinkedIn = () => {
    window.location = "https://www.linkedin.com/in/shubham-palav-3a752b215/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Typography style={{"font-size":"large",
             "color":"black",
             "font-width":300,
              "letterSpacing":"1.2px"}}>OnlineShopping site</Typography>
            <span>
            24/7 customer care support
            </span>
            <br>
            </br>
            <span>No delivery charges</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Types of Products</Typography>
            <h4>Mobile Phones</h4>
            <h4>Electronic Devices and Accessories</h4>
            <h4>TV and Desktops</h4>
            <h4>Laptops</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;