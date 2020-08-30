import React from 'react'
import Base from '../components/Base';
import Image from "../images/hello-world.png"


export default function Hello() {
    return (
       <Base>
       <div className="container ">
       <h1 className="title text-center m-4">Hello World!</h1>
       <img src={Image} alt="" className="helloPic"/>
       <p className="content">
       Hey guys! This is my first custom blog, I was getting bored so came up
        for this. I will try to share all the informative and amazing stuffs
        here, just have a look and let me know if you like it.<br />
        I will post the Technological blogs here which I know and many people
        dont know about it :D . <br />
        Its basically made up of simple HTML and CSS and some Bootstrap classes.
        <br />
        I will add on functionality after it grows bigger.<br />
        So stay tuned...
       </p>
       </div>
      
       </Base>
    )
}
