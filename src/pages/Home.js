import React from "react";
import Base from "../components/Base";
import Card from "../components/Card";
import HelloImage from "../images/hello-world.png"
import TestImage from "../images/test.png";



export default function Home() {
  return (
    <div className="background">
      <Base>
      <h1 className="text-center title">Blog posts</h1>
        <div className="container-flex">
          <Card
            title="Hello World!"
            content="Getting Started."
            page="./hello"
            image={HelloImage}
          />
          <Card title="Test 1" content="Some information." image={TestImage}/>
          <Card title="Test 2" content="Some information." image={TestImage}/>
        
  
        </div>
      </Base>
     
    </div>
  );
}
