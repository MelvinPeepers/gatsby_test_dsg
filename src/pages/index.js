import * as React from "react";
import { Link } from "gatsby";

export default function Index() {
  return (
    <div>
      <h1>Hi people</h1>
      <p>
        This is an example site integrating Netlify’s form handling with Gatsby.
        You can{" "}
        <a href="https://github.com/sw-yx/gatsby-netlify-form-example-v2">
          view source here
        </a>
        .
      </p>

      <ul>
        <li>
          <Link to="/contact/">Basic contact form</Link>
        </li>

        <li>
          <Link to="/recaptcha/">Form with reCAPTCHA 2</Link>
        </li>
      </ul>
    </div>
  );
}

export const Head = () => <title>Home Page</title>;
