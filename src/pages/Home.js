import React from "react";
import Base from "../components/Base";
import Card from "../components/Card";
import HelloImage from "../images/hello-world.png";
import TestImage from "../images/test.png";
import ManEating from "../images/eating.jpg";
import Reactlogo from "../images/reactLogo.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="background">
      <Base>
        <h1 className="text-center title">Blog posts</h1>
        <div className="container-flex">
          <Card
            title="Authentication and Authorization"
            content="This is authentication using Crypto from nodeJS and authorization using JSON-web-token by a method of accessToken and refreshToken."
            differentSiteLink="https://dev.to/trex777/authentication-and-authorization-using-accesstokens-refreshtokens-part-1-1ic8"
            image="https://d117h1jjiq768j.cloudfront.net/images/default-source/blogs/2018/2018-03/data-security-basics-authentication-authorization-encryption-and-auditing_870x450.jpg?sfvrsn=9f583dca_3"
          />
          <Card
            title="How React Works"
            content="A brief disscussion about React, and how it works internally, its algorithm and little bit about performance."
            page="./tech/react"
            image={Reactlogo}
          />

          <Card
            title="Why so much of cravings?"
            content="As the pandemic is going on, people are more prone to do less physical activity and eat more..."
            page="./health/post_1"
            image={ManEating}
          />
          <Card
            title="Hello World!"
            content="Getting Started."
            page="./hello"
            image={HelloImage}
          />
          <Card title="Test 2" content="Some information." image={TestImage} />
        </div>
      </Base>
    </div>
  );
}
