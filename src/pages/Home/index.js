import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{position: "absolute", width: "100vw", height: "100vh"}}>
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Link style={{ fontSize: "100px", fontWeight: "bold", textDecoration: "none", color: "#000"}} to="/about">냠</Link>
        <div style={{ fontSize: "30px", fontWeight: "bold"}}>"사과"</div>
      </div>
    </div>
  )
}

export default Home;