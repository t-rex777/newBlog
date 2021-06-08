import React from "react";
import Base from "../../components/Base";
import Card from "../../components/Card";
import Reactlogo from "../../images/reactLogo.svg";

export default function Home() {
  return (
    <div className="background">
      <Base>
        <h1 className="text-center title">Technology</h1>
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
        </div>
      </Base>
    </div>
  );
}
