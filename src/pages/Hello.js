import React from "react";
import Base from "../components/Base";
import Image from "../images/hello-world.png";

export default function Hello() {
  var height = 250;
  var width = 380;
  const screenWidth = window.innerWidth;
  if (screenWidth < 422) {
    height = 200;
    width = 280;
  } else if (screenWidth > 1440) {
    height = 400;
    width = 680;
  }

  return (
    <Base>
      <div className="container">
        <h1 className="title text-center m-4">Hello World!</h1>
        <img
          src={Image}
          alt=""
          style={{ width: `${width}px`, height: `${height}px` }}
          className="helloPic"
        />
        <p className="content">
          Hey guys! This is my first custom blog, I was getting bored so came up
          for this. I will try to share all the informative and amazing stuffs
          here, just have a look and let me know if you like it.
          <br />
          I will post the Technological blogs here which I know and many people
          dont know about it :D . <br />
          Its basically made up of simple HTML and CSS and some Bootstrap
          classes.
          <br />
          I will add on functionality after it grows bigger.
          <br />
          So stay tuned...
        </p>
      </div>
    </Base>
  );
}
