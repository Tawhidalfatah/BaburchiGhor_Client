/* eslint-disable no-unused-vars */
import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <div className="container mx-auto relative">
      <div className="alert shadow-lg bg-base-100 my-3">
        <div>
          <div>
            <h3 className="font-bold text-2xl text-primary">
              Click the Download button to download PDF of the Blog Page
            </h3>
          </div>
        </div>
        <div className="flex-none">
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button className="btn btn-primary btn-lg" onClick={toPdf}>
                Download
              </button>
            )}
          </Pdf>
        </div>
      </div>
      <div ref={ref} className="mockup-code absolute top-36 w-full">
        <pre data-prefix="$" className="text-warning">
          <code>
            Difference between Controlled and Uncontrolled Components?
          </code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>
            Controlled Components are made by developers themselves which
            provides more flexibility and freedom and less risk whereas
            Uncontrolled components are provided by third party libraries
            offering convenience
          </code>
        </pre>
        <pre data-prefix="$" className="text-warning">
          <code>How to validate React props using PropTypes?</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>
            PropTypes is a type checking library which provides a way to
            validate the props passed to a component by checking the type.
          </code>
        </pre>
        <pre data-prefix="$" className="text-warning">
          <code>Difference between node.js and express.js ?</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>
            node.js and express.js are both server-side JavaScript frameworks,
            but they serve different purposes. Node.js is a runtime environment
            for executing JavaScript code on the server-side, while Express.js
            is a web application framework that runs on top of Node.js.
          </code>
        </pre>
        <pre data-prefix="$" className="text-warning">
          <code>What is a custom hook and why will you use a custom hook?</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>
            A custom hook in React is a function that allows you to reuse
            stateful logic across multiple components. It is more reusable,
            easier to test, and easier to maintain. One would use a custom hook
            when there is some complex logic that needs to be reuse across
            multiple components
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Blog;
