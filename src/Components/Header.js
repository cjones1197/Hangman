// Imported useState hook from react.
import { useState } from 'react';
// Imported the rules to use from the Rules.js file
import Instructions from "./Instructions";


/* Created a functional component Header, which uses hooks, functions and 
and variables to display the title, and instructions button. */
let Header = () => {
  // Stored the useSelector hook in a variable called 'word'.
  // Using useState hook allows a boolean to be used to show or hide the instructions section.
  const [showInstructions, setShowInstructions] = useState(true);
  // Created a function that will display the instructions section when the insructions button is clicked.
  // Or it can hide the instructions section when clicked, as it toggles the boolean above.
  const displayInstructions = () => {
    setShowInstructions(!showInstructions);
}

  /* Returns a <div> containing a <h1> header and a button that will either display "Hide Instructions"
  or "Instructions", depending on the boolean toggle above (as it triggers the onClick function). */
  return (
    <div>
        <header>
            <h1 id="title">Hangman Online Game</h1>
            <button className="btn" onClick={displayInstructions}>{showInstructions ? 'Hide Instructions' : 'Instructions'}</button>
        </header>
        {showInstructions && <Instructions />}
    </div>
    );
}

// Exported the component here to ensure it can be imported into the App.js file.
export default Header;
