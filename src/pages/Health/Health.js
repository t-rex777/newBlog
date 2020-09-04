import React from "react";
import Base from "../../components/Base";
import Card from "../../components/Card";
import ManEating from "../../images/eating.jpg"

export default function Home() {
  return (
    <div className="background">
      <Base>
        <h1 className="text-center title">Blog posts</h1>
        <div className="container-flex">
          
          <Card
            title="Why so much of cravings?"
            content="As the pandemic is going on, people are more prone to do less physical activity and eat more..."
            image={ManEating}
            page="./health/post_1"
          />
         
        </div>
      </Base>
    </div>
  );
}
