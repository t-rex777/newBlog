import React from "react";
import Base from "./../../components/Base";
import logo from "../../images/reactLogo.svg";
import MVC from "../../images/MVC.jpg";


function ReactWorking() {
  return (
    <Base>
      <div className="container">
        <h1 className="title text-center m-4">
          What happens in React.js internally?
        </h1>
        <img
          className="helloPic mb-3"
          src={logo}
          alt="react logo"
          style={{ width: "50%" }}
        />
        <div className="content">
          <h2 className="card-title">What is React.js?</h2>
          <p>
            React.js is a frontend javascript library which is used to make
            UI(user interface). It uses JSX i.e. Javascript extension for better
            programming and ease to make components. JSX can be expressed to a
            layman as mixing HTML and Javascript into a single file.
          </p>
          {/* {Example of JSX} */}
          <p>
            React uses reusabe components which is very helpful to reduce code,
            thus fullfills the purpose of DRY code(Don't Repeat Your Code)
            style.
          </p>
          <p>
            It uses virtual DOM to render components on main browser DOM which
            makes it expremely fast to render. We will discuss about it later on
            this page.
          </p>
          <p>
            In this page we will be disscussing about these following topics :
          </p>
          <ol>
            <li>Model-View-Controller</li>
            <li>Virtual DOM</li>
            <li>Diffing Algorithm</li>
            <li>Browser DOM update</li>
            <li>shouldComponentUpdate()</li>
            <li>Perf Tools</li>
          </ol>

          <h2 className="card-title">Model-View-Controller</h2>
          <p>
            It is a structural pattern that separates the app into 3 main
            components :
            <ul>
              <li>
                <strong>Model</strong> : This manages the data and rules of the
                application (React component).
              </li>
              <li>
                <strong>View</strong> : This manages the output in React
                application, the browser DOM (render()).
              </li>
              <li>
                <strong>Controller</strong> : This takes input from the user and
                converts it into the commands for the Model or View layers (API
                requests or Event Handler).
              </li>
            </ul>
          </p>
          <img className="helloPic img-fluid mb-4" src={MVC} alt="MVC" />

          <h2 className="card-title">Virtual DOM</h2>
          <p>
            It is a JSON(Javascript Object Notation) representing the browser
            DOM.
          </p>
          <p>It is extremely fast as compared to browser DOM.</p>
          <p>React can produce 200,000 virtual DOM nodes per second.</p>
          <p>
            Virtual DOM is created from scratch every time there is a change in
            its state .
          </p>

          <h2 className="card-title">Diffing Algorithm</h2>
          <p>React implements this algorithm on basis of 2 assumptions:</p>
          <ul>
            <li>
              Two elemets of different types will produce different trees.
            </li>
            <li>
              developer has the option to choose the more stable child element
              by passing the key prop.
            </li>
          </ul>
          <p>
            It calculates truely minimal differences using an algorithm with
            O(n^3).
          </p>
          <p>
            When comparing two React DOM elements of the same type, React looks
            at the attributes of both keeps the same underlying DOM nide, only
            updates the changed attributes.
          </p>
          <h2 className="card-title">Browser DOM update</h2>
          <p>
            Once React creates its virtual DOM and comparing it with the
            previous one, it then creates a list of minimum possible changes to
            the browser DOM. After the list is completed, it will fire all the
            changes one after other as fast as possible. It accomplishes this in
            a single write cyclewithout any reflow.
          </p>
          <p>
            Reflow is the process that the browser performs to re-calculate the
            positions, geometry and colours on the page.
          </p>
          <h2 className="card-title" >shouldComponentUpdate()</h2>
          <p>
            It is a React lifecycle for optimization of the React application.
            It returns boolean values for any changes in the components.
          </p>
          <h2 className="card-title">Performance Tools</h2>
          <small>import Perf from "react-addons-perf"</small>
          <p>
            Using this , we can analize how much time it takes for a particular
            component to render and then make changes for better performance.
            This is only used in development, not in production.
          </p>
          <ul>
            <li>Perf.start()</li>
            <li>Perf.end()</li>
            <li>Perf.getLastMeasurement()</li>
            <li>Perf.printInclusive()</li>
            <li>Perf.printExclusive()</li>
          </ul>
        </div>
      </div>
    </Base>
  );
}

export default ReactWorking;
