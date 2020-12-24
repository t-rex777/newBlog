import React from "react";
import Base from "../../components/Base";
import Card from "../../components/Card";
import Reactlogo from "../../images/reactLogo.svg"

export default function Home() {
  return (
    <div className="background">
      <Base>
        <h1 className="text-center title">Technology</h1>
        <div className="container-flex">
          <Card
            title="How React Works"
            content="A brief disscussion about React, and how it works internally, its algorithm and little bit about performance."
            page="./tech/react"
            image={Reactlogo}
          />
        </div>
      </Base>
    </div>
  );
}
