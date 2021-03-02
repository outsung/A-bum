import React from "react";
import { Link } from 'react-router-dom';

function About() {
  return (
    <div style={{position: "absolute", width: "100vw", height: "100vh"}}>
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Link style={{ fontSize: "100px", fontWeight: "bold", textDecoration: "none", color: "#000"}} to="/">냠</Link>
        <div style={{ fontSize: "30px", fontWeight: "bold"}}>"배"</div>
      </div>
    </div>
  )
}

export default About;