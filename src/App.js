import { useState } from "react";

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Newsletter Signup</h2>

        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" type="text" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" />
        </div>

        <fieldset>
          <legend>Select your interests:</legend>
          <label>
            <input type="checkbox" name="interests" value="tech" /> Technology
          </label>
          <label>
            <input type="checkbox" name="interests" value="design" /> Design
          </label>
          <label>
            <input type="checkbox" name="interests" value="marketing" /> Marketing
          </label>
        </fieldset>

        <button type="submit">Submit</button>

        <p role="status" hidden={!showMessage}>
          Thanks for signing up!
        </p>
      </form>
    </main>
  );
}

export default App;
